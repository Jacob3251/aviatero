import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  addToLocale,
  convertToReactSelectPermissionOptions,
  formatDate,
  site_sensitive_info,
} from "../../../../../../utils/helper";
import toast from "react-hot-toast";
import axios from "axios";
import { RiUserFill } from "react-icons/ri";
import useRoles from "../../../../../../utils/hooks/useRoles";
import Select from "react-select";
import { AppContext } from "../../../../../../utils/contexts/AppContext";

function Update() {
  const location = useLocation();
  const user = location.state.item;
  const { loggedUserData } = useContext(AppContext);
  const navigate = useNavigate();
  const [roles, rolesLoading] = useRoles();
  const roleRef = useRef();
  const verificationRef = useRef();
  const [roleSelected, setRoleSelected] = useState("");
  const [file, setFile] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [formData, setFormData] = useState({
    name: user.name,
    role: user.role,
    verified: user.verified,
    contact_no: user.contact_no,
  });
  const { name, role, verified, contact_no } = formData;

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

  const selectOptions = convertToReactSelectPermissionOptions(roles);

  const data = [
    {
      value: true,
      label: "Verified",
    },
    {
      value: false,
      label: "Not Verified",
    },
  ];

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRoles = (newValue) => {
    setFormData((prevState) => ({
      ...prevState,
      role: newValue.label,
    }));
  };

  const handleUpdateRole = (val) => {
    return selectOptions.find((item) => item.label === val);
  };

  const handleVerificationStatus = (val) => {
    return data.find((item) => item.value === val);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("update form clicked");
    const uploadData = {
      user_name: name,
      contact_no,
      role: roleRef.current.props.value.label ?? "",
      verified: verificationRef.current.props.value.value,
      file,
    };
    // console.log(uploadData);

    await axios
      .put(
        `https://consultancy-crm-serverside-1.onrender.com/api/user/${user.id}/update`,
        uploadData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((data) => {
        if (user.email === loggedUserData.email) {
          addToLocale(data.data);
        }
        toast.success("Profile Updated!!");
        navigate("/dashboard/settings/user-management");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="w-full h-full">
      <div className="p-5">
        <div className=" uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
          <Link
            to="/dashboard"
            className="no-underline text-primary tracking-wider"
          >
            Dashboard
          </Link>
          {"  "}
          <span className="text-[24px]">/</span>
          {"  "}
          <span
            className="cursor-pointer"
            onClick={() => {
              navigate("/dashboard/settings/user-management");
            }}
          >
            User
          </span>
          <span className="text-[24px]">/</span>
          {"  "}
          <span>{user.name}</span>
          <span className="text-[24px]">/</span>
          {"  "}
          <span>update</span>
        </div>
        <div>
          <div className="mb-[50px] space-y-5">
            <div className="bg-slate-400 w-[300px] h-[250px] flex justify-center items-center rounded-lg ">
              {user.storage_link !== "" ? (
                <img
                  className="w-full h-full"
                  src={userImage ? userImage : user.photolink}
                  alt=""
                />
              ) : (
                <RiUserFill className="text-slate-100 text-[128px]" />
              )}
            </div>
            <div className="w-full text-primary">
              <input
                type="file"
                name=""
                id=""
                onChange={handleFileInputChange}
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col space-y-10"
          >
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
              {/* User Name */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="name">User Name</label>
                <input
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe.."
                  onChange={onChange}
                  value={name}
                />
              </div>
              {/* Email */}
              <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="clientEmail">User Email</label>
                <input
                  // onChange={onChange}
                  className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="email"
                  name="clientEmail"
                  id="clientEmail"
                  placeholder="example@mail.com"
                  value={user.email}
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
              {/* User Role */}
              <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="phone_no">User Role</label>
                <Select
                  ref={roleRef}
                  name="role"
                  styles={colourStyles}
                  options={selectOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={handleRoles}
                  value={handleUpdateRole(role ? role : roleSelected)}
                />
              </div>
              {/* Verification Status */}
              <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="verified">Verification Status</label>
                <Select
                  ref={verificationRef}
                  name="verified"
                  styles={colourStyles}
                  options={data}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  defaultValue={handleVerificationStatus(user.verified)}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
              {/* User Contact Number */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="contact_no">User Contact Number</label>
                <input
                  required
                  onChange={onChange}
                  value={contact_no}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="contact_no"
                  id="contact_no"
                  placeholder="EXP: 017-XXXX-XXXX"
                />
              </div>
              {/* Joined At */}
              <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="joined_at">Joined At</label>
                <input
                  value={formatDate(user.created_at)}
                  required
                  className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="joined_at"
                  id="joined_at"
                  placeholder="Joined At"
                  readOnly
                />
              </div>
            </div>

            <div className="">
              <input
                className="px-5 py-3 font-semibold cursor-pointer hover:bg-transparent border-primary border-2 hover:text-primary duration-300 text-root bg-primary text-[20px] rounded-md"
                type="Submit"
                value={`Update ${user.name}`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
