import React from "react";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import EmptyComponent from "../../../EmptyComponent/EmptyComponent";
import useUsers from "../../../../../utils/hooks/useUsers";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { PiNotePencil } from "react-icons/pi";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "../../../Reusable/Loader/Loader";

function User() {
  const [usersData, userLoading, setUsersData] = useUsers();
  const navigate = useNavigate();
  const handleDelete = async (user) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${user.name} role?`
    );
    if (confirm) {
      console.log(user);
      try {
        await axios
          .delete(
            `https://consultancy-crm-serverside-1.onrender.com/api/user/${user.id}`
          )
          .then((data) => {
            toast.success(`${user.name} user deleted successfully`);
            console.log(data.data);
            const rest = usersData.filter((item) => item.id !== user.id);
            setUsersData(rest);
          })
          .catch((error) => {
            throw Error;
          });
      } catch (error) {
        toast.error("Could not delete user!!");
      }
    }
  };
  return (
    <div className="w-full h-full text-secondary">
      <div className="p-5 ">
        <div className="mb-5">
          <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
            <Link
              to="/dashboard"
              className="no-underline text-primary tracking-wider"
            >
              Dashboard
            </Link>
            {"  "}
            <span className="text-[24px]">/</span>
            {"  "}
            <span>User</span>
          </div>
          {/* <div className="my-3 flex justify-start lg:justify-end px-5">
            <div
              onClick={() => navigate("/dashboard/settings/role/create")}
              className=" py-2 px-3  uppercase font-monrope font-semibold flex  items-center space-x-2 text-[14px] cursor-pointer"
            >
              <div className="text-black bg-primary px-2 py-1.5 rounded-sm">
                <FaPlus />
              </div>
              <div className="text-primary"> Add Roles</div>
            </div>
          </div> */}
          {userLoading === false ? (
            <div className="px-5">
              {usersData.length !== 0 ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-primary border-2 p-5 hidden-scrollbar">
                  <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0 ">
                    <thead className="text-xs text-primary uppercase bg-transparent  ">
                      <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                        <th scope="col" className="px-6 py-5">
                          Serial
                        </th>
                        <th scope="col" className="px-6 py-5">
                          User Name
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Position
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Verification Status
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-secondary font-monrope ">
                      {usersData.map((user, index) => (
                        <tr
                          key={user.id}
                          className="table-row border-2 border-secondary"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4  whitespace-nowrap "
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4">{user.name}</td>
                          <td className="px-6 py-4 ">{user.role}</td>
                          <td className="px-6 py-4 ">
                            {user.verified ? (
                              <div className="px-2 py-3 bg-green-500 bg-opacity-15 text-green-500 font-bold rounded-md text-center">
                                Verified
                              </div>
                            ) : (
                              <div className="px-2 py-3 bg-[#EA5455] bg-opacity-15 text-[#EA5455] font-bold rounded-md text-center">
                                Not Verified
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 flex space-x-2 text-[24px]">
                            {" "}
                            {user.title !== "Super-Admin" && (
                              <>
                                <div
                                  onClick={() =>
                                    navigate(
                                      `/dashboard/settings/user-management/${user.id}`,
                                      {
                                        state: { item: user },
                                      }
                                    )
                                  }
                                  className="cursor-pointer duration-300 hover:text-green-500"
                                >
                                  <MdOutlineRemoveRedEye />
                                </div>
                                <div
                                  onClick={() =>
                                    navigate(
                                      `/dashboard/settings/user-management/${user.id}/update`,
                                      {
                                        state: { item: user },
                                      }
                                    )
                                  }
                                  className="cursor-pointer duration-300 hover:text-green-500"
                                >
                                  <PiNotePencil />
                                </div>

                                <div
                                  onClick={() => handleDelete(user)}
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
            <div className="h-[50vh] flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
