import { useContext, useState } from "react";
import { AppContext } from "../../../../utils/contexts/AppContext";
import { LuPencil } from "react-icons/lu";
import EmptyComponent from "../../EmptyComponent/EmptyComponent";
import { Link, useNavigate } from "react-router-dom";
import { PiNotePencil } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
function Email() {
  const { setShowModal, setModalType } = useContext(AppContext);
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-root w-full h-full overflow-y-scroll hidden-scrollbar ">
      <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary">
        <Link
          to="/dashboard"
          className="no-underline text-primary tracking-wider"
        >
          Dashboard
        </Link>
        {"  "}
        <span className="text-[24px]">/</span>
        {"  "}
        <span onClick={() => setData(!data)}>Email</span>
      </div>
      <div className="text-white  p-5 ">
        <div className="flex justify-end">
          {/* Email Modal Button */}
          <div
            onClick={() => {
              setShowModal(true);
              setModalType("compose-email");
            }}
            className="font-monrope font-semibold uppercase flex items-center text-[18px] space-x-2 bg-primary hover:text-primary py-2 px-3 rounded-md border-transparent border-2 hover:bg-transparent cursor-pointer btn-border duration-300"
          >
            <LuPencil className="text-[24px]" />
            <div>Compose Email</div>
          </div>
        </div>
        <div>
          {!data && <EmptyComponent heading="Email"></EmptyComponent>}
          {data && (
            <div className="">
              <div className="mb-5 text-[24px] font-monrope text-primary font-semibold">
                <div>All Sent Emails</div>
              </div>
              <div
                style={{ border: "2px solid #D9B658" }}
                className="relative overflow-x-auto shadow-md sm:rounded-lg "
              >
                <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
                  <thead className="text-xs text-primary uppercase bg-transparent  ">
                    <tr className="uppercase font-monrope font-semibold text-[14px] ">
                      <th
                        scope="col"
                        className="px-6 py-5"
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderTop: "2px solid #fafafa",
                          borderLeft: "2px solid #fafafa",
                        }}
                      >
                        Serial
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-5"
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderTop: "2px solid #fafafa",
                        }}
                      >
                        To
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-5"
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderTop: "2px solid #fafafa",
                        }}
                      >
                        Subject
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-5"
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderTop: "2px solid #fafafa",
                        }}
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-5"
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderTop: "2px solid #fafafa",
                          borderRight: "2px solid #fafafa",
                        }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-secondary font-monrope ">
                    <tr className="table-row">
                      <th
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderLeft: "2px solid #fafafa",
                        }}
                        scope="row"
                        className="px-6 py-4  whitespace-nowrap "
                      >
                        1
                      </th>
                      <th
                        style={{
                          borderBottom: "2px solid #fafafa",
                        }}
                        scope="row"
                        className="px-6 py-4  whitespace-nowrap "
                      >
                        example@gmail.com
                      </th>
                      <td
                        className="px-6 py-4"
                        style={{
                          borderBottom: "2px solid #fafafa",
                        }}
                      >
                        Alu Potol
                      </td>
                      <td
                        className="px-6 py-4"
                        style={{
                          borderBottom: "2px solid #fafafa",
                        }}
                      >
                        25th June, 2023
                      </td>{" "}
                      <td
                        className="px-6 py-6 flex space-x-2 text-[24px]"
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderRight: "2px solid #fafafa",
                        }}
                      >
                        <div
                          onClick={() => navigate("/dashboard/email/id")}
                          className="cursor-pointer duration-300 hover:text-green-500"
                        >
                          <MdOutlineRemoveRedEye />
                        </div>
                        <div
                          // onClick={() =>
                          //   navigate(`/dashboard/clients/${item.id}/update`, {
                          //     state: { item: item },
                          //   })
                          // }
                          className="cursor-pointer duration-300 hover:text-green-500"
                        >
                          <PiNotePencil />
                        </div>
                        <div
                          // onClick={() => handleDelete(item)}
                          className="cursor-pointer duration-300 hover:text-red-500"
                        >
                          <MdDelete />
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row">
                      <th
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderLeft: "2px solid #fafafa",
                        }}
                        scope="row"
                        className="px-6 py-4  whitespace-nowrap "
                      >
                        1
                      </th>
                      <th
                        style={{
                          borderBottom: "2px solid #fafafa",
                        }}
                        scope="row"
                        className="px-6 py-4  whitespace-nowrap "
                      >
                        example@gmail.com
                      </th>
                      <td
                        className="px-6 py-4"
                        style={{
                          borderBottom: "2px solid #fafafa",
                        }}
                      >
                        Alu Potol
                      </td>
                      <td
                        className="px-6 py-4"
                        style={{
                          borderBottom: "2px solid #fafafa",
                        }}
                      >
                        25th June, 2023
                      </td>{" "}
                      <td
                        className="px-6 py-6 flex space-x-2 text-[24px]"
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderRight: "2px solid #fafafa",
                        }}
                      >
                        <div
                          onClick={() => navigate("/dashboard/email/id")}
                          className="cursor-pointer duration-300 hover:text-green-500"
                        >
                          <MdOutlineRemoveRedEye />
                        </div>
                        <div
                          // onClick={() =>
                          //   navigate(`/dashboard/clients/${item.id}/update`, {
                          //     state: { item: item },
                          //   })
                          // }
                          className="cursor-pointer duration-300 hover:text-green-500"
                        >
                          <PiNotePencil />
                        </div>
                        <div
                          // onClick={() => handleDelete(item)}
                          className="cursor-pointer duration-300 hover:text-red-500"
                        >
                          <MdDelete />
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row">
                      <th
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderLeft: "2px solid #fafafa",
                        }}
                        scope="row"
                        className="px-6 py-4  whitespace-nowrap "
                      >
                        1
                      </th>
                      <th
                        style={{
                          borderBottom: "2px solid #fafafa",
                        }}
                        scope="row"
                        className="px-6 py-4  whitespace-nowrap "
                      >
                        example@gmail.com
                      </th>
                      <td
                        className="px-6 py-4"
                        style={{
                          borderBottom: "2px solid #fafafa",
                        }}
                      >
                        Alu Potol
                      </td>
                      <td
                        className="px-6 py-4"
                        style={{
                          borderBottom: "2px solid #fafafa",
                        }}
                      >
                        25th June, 2023
                      </td>{" "}
                      <td
                        className="px-6 py-6 flex space-x-2 text-[24px]"
                        style={{
                          borderBottom: "2px solid #fafafa",
                          borderRight: "2px solid #fafafa",
                        }}
                      >
                        <div
                          onClick={() => navigate("/dashboard/email/id")}
                          className="cursor-pointer duration-300 hover:text-green-500"
                        >
                          <MdOutlineRemoveRedEye />
                        </div>
                        <div
                          // onClick={() =>
                          //   navigate(`/dashboard/clients/${item.id}/update`, {
                          //     state: { item: item },
                          //   })
                          // }
                          className="cursor-pointer duration-300 hover:text-green-500"
                        >
                          <PiNotePencil />
                        </div>
                        <div
                          // onClick={() => handleDelete(item)}
                          className="cursor-pointer duration-300 hover:text-red-500"
                        >
                          <MdDelete />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="w-full ">
                  <div className=" w-full ">
                    <ul className="flex justify-start items-start h-10 list-none">
                      <li
                        className="cursor-pointer "
                        // onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        <button
                          // disabled={currentPage === 1 ? true : false}
                          className="flex items-center justify-start px-4 h-10 ms-0 leading-tight bg-[#333333] rounded-l-md text-[12px] text-primary uppercase font-monrope font-bold disabled:hidden"
                        >
                          Previous
                        </button>
                      </li>
                      <li className="">
                        <div className="flex items-center justify-start px-4 h-10 leading-tight  bg-[#333333] text-[12px] text-primary uppercase font-monrope font-bold">
                          {/* {metaData.currentPage} */}1
                        </div>
                      </li>

                      <li className="cursor-pointer">
                        <button
                          // disabled={metaData.totalPages === currentPage ? true : false}
                          // onClick={() => {
                          //   setCurrentPage(currentPage + 1);
                          //     console.log(currentPage);
                          // }}
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Email;
