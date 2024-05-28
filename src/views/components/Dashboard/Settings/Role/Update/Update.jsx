import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import usePermissions from "../../../../../../utils/hooks/usePermissions";
import axios from "axios";
import toast from "react-hot-toast";

function Update() {
  const location = useLocation();
  const navigate = useNavigate();
  const roleData = location.state.item;
  const [permissions, permissionLoading] = usePermissions();
  //   console.log(permissions);

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedItems((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Checked items:", checkedItems);
    try {
      await axios
        .put(`http://localhost:5000/api/role/${roleData.id}`, {
          title: roleData.title,
          permissions: checkedItems,
        })
        .then((data) => {
          toast.success(`${roleData.title} Role Updated`);
          setCheckedItems([]);
          event.target.reset();
          navigate("/dashboard/settings/role");
        })
        .catch((error) => {
          throw Error;
        });
    } catch (error) {
      toast.error("Could not update role!!");
    }
  };
  return (
    <div className="w-full h-[100%] overflow-y-scroll hidden-scrollbar">
      <div className="p-5">
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-3 items-center text-primary">
          Settings
          <span className="text-[24px] mx-2">/</span>
          <span
            className="cursor-pointer"
            onClick={() => navigate("/dashboard/settings/role")}
          >
            Role
          </span>
          <span className="text-[24px] mx-2">/</span>
          <span>Update</span>
        </div>
        {/* role informations */}
        <div className=" w-full h-full">
          <div className="text-[24px] font-monrope font-bold text-secondary">
            <span className="text-primary mr-2">Role ID:</span> {roleData.id}
          </div>
          <div className="text-[24px] font-monrope font-bold text-secondary">
            <span className="text-primary mr-2">Role Title:</span>{" "}
            {roleData.title}
          </div>
          {/* all permissions */}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 mt-5"
          >
            {permissions.map((permission) => (
              <label
                htmlFor={permission.id}
                key={permission.id}
                className="text-secondary border-2 border-primary py-3 px-5 rounded-md cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={permission.id}
                  id={permission.id}
                  value={permission.id.toString()}
                  // checked={handleChecker(permission.id)}
                  className="mr-2"
                  onChange={handleCheckboxChange}
                />
                <label>{permission.title}</label>
              </label>
            ))}
            <button
              type="submit"
              className="bg-primary py-3 px-5 uppercase text-secondary rounded-md tracking-wider  font-monrope font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
