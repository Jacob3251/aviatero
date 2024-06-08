import { FaPlus } from "react-icons/fa6";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import usePermissions from "../../../../../utils/hooks/usePermissions";
import axios from "axios";
import toast from "react-hot-toast";

function Permission() {
  const navigate = useNavigate();
  const [permissions, permissionLoading, setPermissions] = usePermissions();
  const handlePermissionDelete = async (permission) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${permission.title}?`
    );
    if (confirm) {
      await axios
        .delete(
          `https://consultancy-crm-serverside.onrender.com/api/permission/${permission.id}`
        )
        .then((data) => {
          toast.success(`${permission.title} permission deleted successfully.`);
          const filtered = permissions.filter((p) => p.id !== permission.id);
          setPermissions(filtered);
        })
        .catch((error) => {
          toast.error(`Couldn't delete ${permission.title}!!`);
        });
    }
  };
  console.log(permissions);
  return (
    <div className="w-full h-full overflow-y-scroll hidden-scrollbar">
      <div className="p-5">
        <div>
          <div className="mb-5 text-[24px] font-monrope text-primary font-semibold">
            <div>Permissions</div>
          </div>
          <div className="flex justify-end mb-3">
            <div
              onClick={() => navigate("/dashboard/settings/permission/create")}
              className=" py-2 px-3  uppercase font-monrope font-semibold flex  items-center space-x-2 text-[14px] cursor-pointer"
            >
              <div className="text-black bg-primary px-2 py-1.5 rounded-sm">
                <FaPlus />
              </div>
              <div className="text-primary"> Add Permission</div>
            </div>
          </div>
          {permissionLoading === false ? (
            <div className="border-primary border-2 p-5 w-full overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0 ">
                <thead className="text-xs text-primary uppercase bg-transparent  ">
                  <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                    <th scope="col" className="px-6 py-5">
                      Serial
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Permission Title
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Permission Description
                    </th>
                    {/* <th scope="col" className="px-6 py-5">
                      Action
                    </th> */}
                  </tr>
                </thead>
                <tbody className="text-secondary font-monrope ">
                  {permissions.map((permission, index) => (
                    <tr
                      key={permission.id}
                      className="table-row border-2 border-secondary"
                    >
                      <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                        {index + 1}
                      </th>

                      <td className="px-6 py-4">{permission.title}</td>
                      <td className="px-6 py-4">{permission.desc}</td>

                      {/* <td className="px-6 py-4 flex space-x-2 text-[24px]">
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
                          onClick={() => handlePermissionDelete(permission)}
                          className="cursor-pointer duration-300 hover:text-red-500"
                        >
                          <MdDelete />
                        </div>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-red-300 text-whtie">Loading</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Permission;
