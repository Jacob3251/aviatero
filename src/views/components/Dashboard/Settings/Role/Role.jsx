import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { AppContext } from "../../../../../utils/contexts/AppContext";
import { useNavigate } from "react-router-dom";
import useRoles from "../../../../../utils/hooks/useRoles";
import EmptyComponent from "../../../EmptyComponent/EmptyComponent";
import Permissions from "./Permissions/Permissions";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../../Reusable/Loader/Loader";
function Role() {
  const navigate = useNavigate();
  const [rolesData, rolesLoading, setRolesData] = useRoles();
  const { loggedUserData } = useContext(AppContext);
  const handleDelete = async (role) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${role.title} role?`
    );
    if (confirm) {
      try {
        await axios
          .delete(
            `https://consultancy-crm-serverside-1.onrender.com/api/role/${role.id}`,
            {
              headers: {
                Authorization: `Bearer ${loggedUserData.token}`,
              },
            }
          )
          .then((data) => {
            toast.success(`${role.title} role deleted successfully`);
            const rest = rolesData.filter((item) => item.id !== role.id);
            setRolesData(rest);
          })
          .catch((error) => {
            throw Error;
          });
      } catch (error) {
        toast.error("Could not delete role!!");
      }
    }
  };
  console.log(rolesData);
  return (
    <div className="w-full h-full">
      <div className="p-5">
        {/* Roles */}
        <div className="mb-5">
          <div className="mb-0 text-[24px] font-monrope text-primary font-semibold px-5 lg:px-0 text-center lg:text-left uppercase">
            Roles
          </div>
          <div className="my-3 flex justify-start lg:justify-end px-5">
            <div
              onClick={() => navigate("/dashboard/settings/role/create")}
              className=" py-2 px-3  uppercase font-monrope font-semibold flex  items-center space-x-2 text-[14px] cursor-pointer"
            >
              <div className="text-black bg-primary px-2 py-1.5 rounded-sm">
                <FaPlus />
              </div>
              <div className="text-primary"> Add Roles</div>
            </div>
          </div>
          {rolesLoading === false ? (
            <div className="px-5">
              {rolesData.length !== 0 ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-primary border-2 p-5 hidden-scrollbar">
                  <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0 ">
                    <thead className="text-xs text-primary uppercase bg-transparent  ">
                      <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                        <th scope="col" className="px-6 py-5">
                          Serial
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Role Title
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Permissions
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-secondary font-monrope ">
                      {rolesData.map((role, index) => (
                        <tr
                          key={role.id}
                          className="table-row border-2 border-secondary"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4  whitespace-nowrap "
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4">{role.title}</td>
                          <td className="px-6 py-4 ">
                            <Permissions
                              permissions={role.permissions}
                            ></Permissions>
                            {/* {console.log(role.permissions)} */}
                          </td>
                          <td className="px-6 py-4 flex space-x-2 text-[24px]">
                            {" "}
                            {role.title !== "Super-Admin" && (
                              <>
                                <div
                                  onClick={() =>
                                    navigate(
                                      `/dashboard/settings/role/${role.id}/update`,
                                      {
                                        state: { item: role },
                                      }
                                    )
                                  }
                                  className="cursor-pointer duration-300 hover:text-green-500"
                                >
                                  <PiNotePencil />
                                </div>

                                <div
                                  onClick={() => handleDelete(role)}
                                  className="cursor-pointer duration-300 hover:text-red-500"
                                >
                                  <MdDelete />
                                </div>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <EmptyComponent heading="Roles"></EmptyComponent>
              )}
            </div>
          ) : (
            <div className=" text-white w-full h-full absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}
        </div>
        {/* Permission */}
      </div>
    </div>
  );
}

export default Role;
