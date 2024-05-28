import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  convertToReactSelectOptions,
  convertToReactSelectPermissionOptions,
} from "../../../../../../utils/helper";
import usePermissions from "../../../../../../utils/hooks/usePermissions";
function Create() {
  const permissionRef = useRef();
  const [addedPermissions] = usePermissions();
  // const data = ;
  // console.log(data);
  // const data = [
  //   {
  //     id: "4c5952e3-bc6e-4264-8aa7-79cd7c603796",
  //     title: "super",
  //     desc: "super af",
  //   },
  //   {
  //     id: "2c0887e0-0ef0-47f9-943d-6d9af90df3d9",
  //     title: "admin",
  //     desc: "non super af",
  //   },
  //   {
  //     id: "c1a461b0-d15e-4ae1-b129-f6201635cfff",
  //     title: "Create Client",
  //     desc: "Can create clients",
  //   },
  // ];
  const selectOptions = convertToReactSelectPermissionOptions(addedPermissions);
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "white",
        color: "#D9B658",
      };
    },
  };
  const [formData, setFormData] = useState({
    title: "",
  });
  const [permissions, setPermisssions] = useState([]);
  const { title, desc } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handlePermissions = (newValue) => {
    let selectedPermissions = [];
    newValue.forEach((element) => {
      if (!selectedPermissions.includes(element.value)) {
        selectedPermissions.push(element.value);
      }
    });
    setPermisssions(selectedPermissions);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      permissions: permissions,
    };
    console.log("payload=>", payload);
    const { data } = await axios.post(
      "http://localhost:5000/api/role",
      payload
    );
    if (data) {
      console.log(data);
      setFormData({
        title: "",
      });
      setPermisssions([]);
      permissionRef.current.clearValue();
      toast.success("Role Added Successfully", {
        style: {
          backgroundColor: "#333333",
          color: "#fafafa",
        },
        className: "font-monrope",
      });
    }
  };
  return (
    <div className="w-full h-full">
      <div className="p-5">
        <div className="space-y-5 font-monrope">
          <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
            <Link
              to="/dashboard/settings/role"
              className="no-underline text-primary tracking-wider"
            >
              Roles /{" "}
            </Link>
            <span>Add Role</span>
          </div>
          {/* form parent div below */}
          <div>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col space-y-10"
            >
              <div className="flex space-x-10">
                {/* Name */}
                <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <label htmlFor="title">Role Title</label>
                  <input
                    className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Exp: Super-Admin, Admin, Officer"
                    onChange={onChange}
                    value={title}
                  />
                </div>
              </div>
              <div className="flex space-x-10">
                <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <Select
                    ref={permissionRef}
                    isMulti
                    name="colors"
                    styles={colourStyles}
                    options={selectOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handlePermissions}
                  />
                </div>
              </div>

              <div className="">
                <input
                  className="bg-primary text-white px-5 py-3 text-[18px] rounded-sm hover:border-primary border-2 border-transparent hover:bg-transparent  duration-300 cursor-pointer"
                  type="submit"
                  value="SUBMIT"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
