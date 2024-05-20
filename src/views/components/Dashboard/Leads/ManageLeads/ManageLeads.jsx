import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { PiNotePencil } from "react-icons/pi";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import useLead from "../../../../../utils/hooks/useLead";

function ManageLeads() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData, metaData] = useLead(currentPage);
  const navigate = useNavigate();
  const handleDelete = async (item) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${item.name}?`
    );
    if (confirm) {
      const { status } = await axios.delete(
        `http://localhost:5000/api/lead/${item.id}/delete`
      );
      if (status === 200) {
        const updatedData = data.filter((lead) => lead.id !== item.id);
        setData(updatedData);
        toast.success(`${item.name} deleted successfully.`, {
          style: {
            backgroundColor: "#333333",
            color: "#fafafa",
          },
          className: "font-monrope",
        });
      }
    }
  };
  return (
    <div className=" ">
      <div className="mb-5 text-[24px] font-monrope text-primary font-semibold">
        <div>All Leads</div>
      </div>
      <div
        style={{ border: "2px solid #D9B658" }}
        className="relative overflow-x-auto shadow-md sm:rounded-lg p-5"
      >
        <div className=" flex items-center justify-between flex-column  md:flex-row space-y-4 md:space-y-0 space-x-2 pb-4 pt-3">
          <div className="relative sm:w-auto">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="client-search"
              className="block p-2 ps-10 text-sm text-primary placeholder:text-primary outline-none border-b-2 border-t-0  border-l-0 border-r-0 border-primary  w-full sm:w-80 bg-transparent "
              placeholder="Search for Leads"
            />
          </div>
          <div
            onClick={() => navigate("/dashboard/leads/addlead")}
            className=" py-2 px-3  uppercase font-monrope font-semibold flex  items-center space-x-2 text-[14px] cursor-pointer"
          >
            <div className="text-black bg-primary px-2 py-1.5 rounded-sm">
              <FaPlus />
            </div>
            <div className="text-primary"> Add Lead</div>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-primary  p-5 border-spacing-0 border-2 border-secondary">
          <thead className="text-xs text-primary uppercase bg-transparent  ">
            <tr className="uppercase font-monrope font-semibold text-[14px] ">
              <th scope="col" className="px-6 py-5">
                Name
              </th>
              <th scope="col" className="px-6 py-5">
                Action
              </th>
              <th scope="col" className="px-6 py-5">
                Contact No
              </th>
              <th scope="col" className="px-6 py-5">
                Email
              </th>
              <th scope="col" className="px-6 py-5">
                Lead type
              </th>
            </tr>
          </thead>
          <tbody className="text-secondary font-monrope ">
            {data.map((item, index) => (
              <tr key={item.id} className="table-row border-2 border-secondary">
                <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                  {item.name ? item.name : "Null"}
                </th>
                <td className="px-6 py-4 flex space-x-2 text-[24px]">
                  <div
                    onClick={() => navigate("/dashboard/leads/information/id")}
                    className="cursor-pointer duration-300 hover:text-green-500"
                  >
                    <MdOutlineRemoveRedEye />
                  </div>
                  <div
                    onClick={() =>
                      navigate(`/dashboard/leads/${item.id}/update`, {
                        state: { item: item },
                      })
                    }
                    className="cursor-pointer duration-300 hover:text-green-500"
                  >
                    <PiNotePencil />
                  </div>
                  <div
                    onClick={() => handleDelete(item)}
                    className="cursor-pointer duration-300 hover:text-red-500"
                  >
                    <MdDelete />
                  </div>
                </td>
                <td className="px-6 py-4">
                  {item.phone_no ? item.phone_no : "Null"}
                </td>
                <td className="px-6 py-4">
                  {item.clientEmail ? item.clientEmail : "Null"}
                </td>
                <td className="px-6 py-4">
                  {item.clientType ? item.clientType : "Null"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full mt-5">
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
                  disabled={metaData.totalPages === currentPage ? true : false}
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                    //   console.log(currentPage);
                  }}
                  className="flex items-center justify-start px-4 h-10 leading-tight bg-[#333333] rounded-r-md text-[12px] text-primary uppercase font-monrope font-bold disabled:hidden"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageLeads;
