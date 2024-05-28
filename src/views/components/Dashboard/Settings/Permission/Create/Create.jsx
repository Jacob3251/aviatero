import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Create() {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });

  const { title, desc } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { data } = await axios.post(
      "http://localhost:5000/api/permission",
      formData
    );
    if (data) {
      console.log(data);

      toast.success("Permission Added Successfully", {
        style: {
          backgroundColor: "#333333",
          color: "#fafafa",
        },
        className: "font-monrope",
      });
      setFormData({
        title: "",
        desc: "",
      });
    }
  };
  return (
    <div className="w-full h-full">
      <div className="p-5">
        <div className="space-y-5 font-monrope">
          <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
            <Link
              to="/dashboard/settings/permission"
              className="no-underline text-primary tracking-wider"
            >
              Permissions /{" "}
            </Link>
            <span>Add Permission</span>
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
                  <label htmlFor="title">Permission Title</label>
                  <input
                    className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Exp: Create Client"
                    onChange={onChange}
                    value={title}
                  />
                </div>
              </div>
              <div className="flex space-x-10">
                <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <label htmlFor="desc">Permission Details *</label>
                  <input
                    value={desc}
                    onChange={onChange}
                    required
                    className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="desc"
                    id="desc"
                    placeholder="Exp: Can create clients"
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
