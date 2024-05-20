import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { AppContext } from "../../../../../utils/contexts/AppContext";
import { useNavigate } from "react-router-dom";

function Role() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="p-5">
        {/* Roles */}
        <div className="mb-5">
          <div className="mb-5 text-[24px] font-monrope text-primary font-semibold">
            <div>Roles</div>
          </div>
          <div className="border-2 border-primary p-5">
            <div className="mb-3 flex justify-end">
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
            <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
              <thead className="text-xs text-primary uppercase bg-transparent  ">
                <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                  <th
                    scope="col"
                    className="px-6 py-5"
                    style={{
                      borderBottom: "2px solid #fafafa",
                      borderTop: "2px solid #fafafa",
                      borderLeft: "2px solid #fafafa",
                    }}
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5"
                    style={{
                      borderBottom: "2px solid #fafafa",
                      borderTop: "2px solid #fafafa",
                    }}
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5"
                    style={{
                      borderBottom: "2px solid #fafafa",
                      borderTop: "2px solid #fafafa",
                    }}
                  >
                    Contact No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5"
                    style={{
                      borderBottom: "2px solid #fafafa",
                      borderTop: "2px solid #fafafa",
                    }}
                  >
                    Email
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
                    Client type
                  </th>
                </tr>
              </thead>
              <tbody className="text-secondary font-monrope ">
                <tr className="table-row border-2 border-secondary">
                  <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                    Null
                  </th>
                  <td className="px-6 py-4 flex space-x-2 text-[24px]">
                    {" "}
                    <div
                      // onClick={() =>
                      //   navigate("/dashboard/clients/information/id")
                      // }
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
                  <td className="px-6 py-4">Null</td>
                  <td className="px-6 py-4">Null</td>
                  <td className="px-6 py-4">Null</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Permission */}
      </div>
    </div>
  );
}

export default Role;
