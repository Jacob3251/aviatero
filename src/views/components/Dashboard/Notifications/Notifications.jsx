import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmptyComponent from "../../EmptyComponent/EmptyComponent";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import useQuery from "../../../../utils/hooks/useQuery";
import toast from "react-hot-toast";
import axios from "axios";
import { AppContext } from "../../../../utils/contexts/AppContext";

function Notifications() {
  const navigate = useNavigate();
  // const [data, setData] = useState(false);
  const { loggedUserData } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useQuery(currentPage);
  // const { data, setdata } = useContext(AppContext);
  const handleDelete = async (item) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${item.name}?`
    );
    if (confirm) {
      const { status } = await axios.delete(
        `https://consultancy-crm-serverside-1.onrender.com/api/querymsg/${item.id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      );
      if (status === 200) {
        const updatedData = data.filter((client) => client.id !== item.id);
        setData(updatedData);
        toast.success(`${item.name} deleted successfully.`, {
          style: {
            backgroundColor: "#333333",
            color: "#fafafa",
          },
          className: "font-monrope",
        });
      } else {
        toast.error(`${item.name} not deleted.`, {
          style: {
            backgroundColor: "#333333",
            color: "#fafafa",
          },
          className: "font-monrope",
        });
      }
    }
  };
  // console.log("pending", metaData?.pending);

  return (
    <div className="w-full h-auto text-primary ">
      <div className="mb-5 text-[24px] font-monrope text-primary font-semibold px-5 lg:px-0 text-center lg:text-left uppercase">
        <Link
          to="/dashboard"
          className="no-underline text-primary tracking-wider"
        >
          Dashboard
        </Link>
        {"  "}
        <span className="text-[24px]">/</span>
        {"  "}
        <span>Notifications</span>
      </div>
      <div
        className={` ${
          data.length !== 0
            ? "h-auto p-5"
            : "w-full h-full flex flex-col justify-center items-center"
        }  "`}
      >
        {data.length === 0 && (
          <div className="w-full h-full">
            <EmptyComponent heading="Notifications"></EmptyComponent>
          </div>
        )}
        {data.length !== 0 && (
          <div className="">
            <div className="mb-5 text-[24px] font-monrope text-primary font-semibold">
              <div>All Notifications</div>
            </div>
            <div
              style={{ border: "2px solid #D9B658" }}
              className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 hidden-scrollbar"
            >
              <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
                <thead className="text-xs text-primary uppercase bg-transparent  border-2 border-secondary">
                  <tr className="uppercase font-monrope font-semibold text-[14px] ">
                    <th scope="col" className="px-6 py-5">
                      Serial
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Date
                    </th>

                    <th scope="col" className="px-6 py-5">
                      Email
                    </th>

                    <th scope="col" className="px-6 py-5">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-secondary font-monrope border-2 border-secondary">
                  {data.map((item, index) => (
                    <tr
                      key={item.id}
                      className="table-row border-2 border-secondary"
                    >
                      <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                        {index + 1}
                      </th>
                      <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.created_at}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">
                        {item.status === "Pending" ? (
                          <div className="bg-red-500 inline-block px-2 py-2 rounded-md font-bold font-monrope">
                            Pending
                          </div>
                        ) : (
                          <div className="bg-green-500 inline-block px-2 py-2 rounded-md font-bold font-monrope">
                            Answered
                          </div>
                        )}
                      </td>{" "}
                      <td className="px-6 py-6 flex space-x-2 text-[24px]">
                        {" "}
                        <div
                          onClick={() =>
                            navigate(`/dashboard/notifications/${item.id}`, {
                              state: { data: item },
                            })
                          }
                          className="cursor-pointer duration-300 hover:text-green-500"
                        >
                          <MdOutlineRemoveRedEye />
                        </div>
                        <div
                          onClick={() => handleDelete(item)}
                          className="cursor-pointer duration-300 hover:text-red-500"
                        >
                          <MdDelete />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* pagination */}
              {/* <div className="w-full mt-5">
                <div className=" w-full ">
                  <ul className="flex justify-start items-start h-10 list-none">
                    <li
                      className="cursor-pointer "
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      <button
                        disabled={currentPage === 1 ? true : false}
                        className="flex items-center justify-start px-4 h-10 ms-0 leading-tight bg-[#333333] rounded-l-md text-[12px] text-primary uppercase font-monrope font-bold disabled:hidden"
                      >
                        Previous
                      </button>
                    </li>
                    <li className="">
                      <div className="flex items-center justify-start px-4 h-10 leading-tight  bg-[#333333] text-[12px] text-primary uppercase font-monrope font-bold">
                        {metaData.currentPage}
                      </div>
                    </li>

                    <li className="cursor-pointer">
                      <button
                        disabled={
                          metaData.totalPages === currentPage ? true : false
                        }
                        onClick={() => {
                          setCurrentPage(currentPage + 1);
                          console.log(currentPage);
                        }}
                        className="flex items-center justify-start px-4 h-10 leading-tight bg-[#333333] rounded-r-md text-[12px] text-primary uppercase font-monrope font-bold disabled:hidden"
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;
