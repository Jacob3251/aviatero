import { FaPlus } from "react-icons/fa6";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Permission() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-5">
        <div>
          <div className="mb-5 text-[24px] font-monrope text-primary font-semibold">
            <div>Permissions</div>
          </div>
          <div className="border-primary border-2 p-5">
            <div className="flex justify-end mb-3">
              <div
                onClick={() =>
                  navigate("/dashboard/settings/permission/create")
                }
                className=" py-2 px-3  uppercase font-monrope font-semibold flex  items-center space-x-2 text-[14px] cursor-pointer"
              >
                <div className="text-black bg-primary px-2 py-1.5 rounded-sm">
                  <FaPlus />
                </div>
                <div className="text-primary"> Add Permission</div>
              </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0 ">
              <thead className="text-xs text-primary uppercase bg-transparent  ">
                <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
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
      </div>
    </div>
  );
}

export default Permission;
