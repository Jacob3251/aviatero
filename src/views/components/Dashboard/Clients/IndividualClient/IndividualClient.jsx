import { FaPhone } from "react-icons/fa6";
import { IoIosAdd, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { Link, useNavigate, useParams } from "react-router-dom";
import useIndividualClient from "../../../../../utils/hooks/useIndividualClient";
import {
  customFileName,
  site_sensitive_info,
} from "../../../../../utils/helper";
import Loader from "../../../Reusable/Loader/Loader";
import useDownloader from "react-use-downloader";
function IndividualClient() {
  const navigate = useNavigate();
  const attachData = [
    {
      id: 1,
      title: "Passport",
    },
    {
      id: 2,
      title: "Official Photo",
    },
    {
      id: 3,
      title: "Graduation Certificate",
    },
    {
      id: 4,
      title: "Postgraduation Certificate",
    },
    {
      id: 5,
      title: "Higher Secondary",
    },
    {
      id: 6,
      title: "Secondary School",
    },
    {
      id: 7,
      title: "Ielts",
    },
    {
      id: 8,
      title: "Bank Statement",
    },
  ];
  const { id } = useParams();
  const [clientData, clientDataLoading] = useIndividualClient(id);
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  return (
    <>
      {clientDataLoading === false ? (
        <div className="w-full h-full">
          <div className="p-5">
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
              <span
                className="cursor-pointer"
                onClick={() => navigate("/dashboard/clients/manageclient")}
              >
                Client
              </span>
              <span className="text-[24px]">/</span>
              {"  "}
              <span>{clientData.name}</span>
            </div>
            <div className=" flex justify-between items-start">
              {/* Client Info */}
              <div className="w-full flex flex-col justify-start font-monrope">
                <div className="w-[320px] mb-8 aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      clientData.client_image
                        ? site_sensitive_info.site_origin +
                          clientData.client_image
                        : "https://images.unsplash.com/photo-1558962009-34fff2bd2e9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt=""
                  />
                </div>
                <div className="text-[24px] lg:text-[28px] mb-5 font-bold capitalize text-primary">
                  {clientData.name}
                </div>
                {/* <div className="flex space-x-2 mb-5">
        <div className="px-2 py-3 bg-green-500 bg-opacity-15 text-green-500 font-bold rounded-md">
          Started
        </div>
        <div className="px-2 py-3 bg-[#EA5455] bg-opacity-15 text-[#EA5455] font-bold rounded-md">
          Pending
        </div>
        <div className="px-2 py-3 bg-primary bg-opacity-15 text-primary font-bold rounded-md">
          Finished
        </div>
      </div> */}
                <div className="mb-5">
                  <span className="text-primary uppercase tracking-wide text-[18px] font-monrope font-bold">
                    Client Contact
                  </span>
                </div>
                <div className="flex flex-col justify-start items-start space-y-3 text-[18px]">
                  <div className="flex text-secondary space-x-3">
                    <FaPhone className="text-primary text-[24px]" />
                    <div>01754974851141</div>
                  </div>
                  <div className="flex text-secondary space-x-3">
                    <IoMdMail className="text-primary text-[24px]" />
                    <div>example@gmail.com</div>
                  </div>
                  <div className="flex text-secondary space-x-3">
                    <IoLocationSharp className="text-primary text-[24px]" />
                    <div>Akhali, Sylhet Capital</div>
                  </div>
                </div>
              </div>
              {/* Update Info */}
              <div className=" w-full text-[18px] font-monrope">
                <div>
                  <div className="uppercase font-bold text-primary">
                    Attachments
                  </div>
                  <div className="my-5">
                    {clientData?.attachments?.map((item) => (
                      <div key={item.id} className="mb-2">
                        <span className="text-secondary">{item.title}:</span>{" "}
                        <a
                          href={
                            site_sensitive_info.site_origin +
                            item.fileLink.split("uploads\\")[1]
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline cursor-pointer mr-2"
                        >
                          View
                        </a>
                        <span
                          rel="noopener noreferrer"
                          onClick={() =>
                            download(
                              site_sensitive_info.site_origin +
                                item.fileLink.split("uploads\\")[1],
                              customFileName(
                                item.title,
                                site_sensitive_info.site_origin +
                                  item.fileLink.split("uploads\\")[1]
                              )
                            )
                          }
                          className="text-primary hover:underline cursor-pointer"
                        >
                          {console.log(
                            customFileName(
                              item.title,
                              site_sensitive_info.site_origin +
                                item.fileLink.split("uploads\\")[1]
                            )
                          )}
                          Download
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Data table for recent update */}
                  {/* <div className="border-2 border-primary py-4 px-3">
          <div className="text-[18px] mb-2 font-bold capitalize text-primary flex justify-between py-2 cursor-pointer">
            <span>Progress Report</span>
            <span className="flex items-center space-x-2  text-primary ">
              <IoIosAdd className="text-[28px] bg-primary text-root rounded" />
              <span>Add progress</span>
            </span>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0 border-2 border-secondary">
            <thead className="text-xs text-primary uppercase bg-transparent  ">
              <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary ">
                <th scope="col" className="px-6 py-5">
                  Date
                </th>
                <th scope="col" className="px-6 py-5">
                  Title
                </th>
                <th scope="col" className="px-6 py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-secondary font-monrope ">
              <tr className="table-row border-2 border-secondary">
                <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                  2nd June, 2024
                </th>
                <td className="px-6 py-4">Lorem ipsum dolor sit amet.</td>

                <td className="px-6 py-4 flex space-x-2 text-[24px]">
                  {" "}
                  <div
                    onClick={() =>
                      navigate("/dashboard/clients/information/id")
                    }
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
              <tr className="table-row border-2 border-secondary">
                <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                  2nd June, 2024
                </th>
                <td className="px-6 py-4">Lorem ipsum dolor sit amet.</td>

                <td className="px-6 py-4 flex space-x-2 text-[24px]">
                  {" "}
                  <div
                    onClick={() =>
                      navigate("/dashboard/clients/information/id")
                    }
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
              <tr className="table-row border-2 border-secondary">
                <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                  2nd June, 2024
                </th>
                <td className="px-6 py-4">Lorem ipsum dolor sit amet.</td>

                <td className="px-6 py-4 flex space-x-2 text-[24px]">
                  {" "}
                  <div
                    onClick={() =>
                      navigate("/dashboard/clients/information/id")
                    }
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
        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          <Loader></Loader>
        </div>
      )}
    </>
  );
}

export default IndividualClient;
