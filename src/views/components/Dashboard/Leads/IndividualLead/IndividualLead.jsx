import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { FaPhone } from "react-icons/fa6";
import { IoIosAdd, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { Link, useNavigate, useParams } from "react-router-dom";
import useDownloader from "react-use-downloader";
import useIndividualsProgress from "../../../../../utils/hooks/useIndividualsProgress";
import { AppContext } from "../../../../../utils/contexts/AppContext";
import { useContext } from "react";
import useIndividualLead from "../../../../../utils/hooks/useIndividualLead";
import { RiUserFill } from "react-icons/ri";
import EmptyComponent from "../../../EmptyComponent/EmptyComponent";
import { getFileExtension } from "../../../../../utils/helper";
import Loader from "../../../Reusable/Loader/Loader";

function IndividualLead() {
  const navigate = useNavigate();
  const { setShowModal, setModalType, setModalData, loggedUserData } =
    useContext(AppContext);

  const { id } = useParams();
  console.log("id", id);
  const [clientData, clientDataLoading] = useIndividualLead(id);
  console.log("clientData", clientData);
  const [progressdata, progressloading, setProgressData] =
    useIndividualsProgress(id);
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  console.log(clientData);
  const handleDateFormat = (date) => {
    return format(new Date(date), "do MMMM, yyyy");
  };
  function limitToFirstThreeWords(inputString) {
    const words = inputString.split(" ").slice(0, 3).join(" ");
    return words;
  }
  const handleProgressDelete = async (progress) => {
    const confirm = window.confirm(
      "Are you sure you want to delete the progress status?"
    );

    if (confirm) {
      await axios.delete(
        `https://consultancy-crm-serverside-1.onrender.com/api/progress/${progress.id}`,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      );
      toast.success("Progress Status Deleted");
      window.location.reload();
    }
  };
  return (
    <>
      {clientDataLoading || progressloading === false ? (
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
                onClick={() => navigate("/dashboard/leads/manageleads")}
              >
                Leads
              </span>
              <span className="text-[24px]">/</span>
              {"  "}
              <span>{clientData.name}</span>
            </div>
            <div className=" flex flex-col md:flex-row md:justify-between justify-center items-center md:items-start space-y-10 md:space-y-0">
              {/* Client Info */}
              <div className="w-full flex flex-col justify-center items-center sm:items-start sm:justify-start font-monrope">
                <div className="w-[320px] mb-8 aspect-square overflow-hidden bg-slate-400">
                  {clientData.lead_image ? (
                    <img
                      className="w-full h-full object-cover"
                      src={clientData.lead_image.url}
                      alt=""
                    />
                  ) : (
                    <div>
                      <RiUserFill className="text-slate-100 text-[128px]" />
                    </div>
                  )}
                </div>
                <div className="text-[24px] lg:text-[28px] mb-5 font-bold capitalize text-primary">
                  {clientData.name}
                </div>

                <div className="mb-5">
                  <span className="text-primary uppercase tracking-wide text-[18px] font-monrope font-bold">
                    Client Contact
                  </span>
                </div>
                <div className="flex flex-col justify-start items-start space-y-3 text-[18px]">
                  <div className="flex text-secondary space-x-3">
                    <FaPhone className="text-primary text-[24px]" />
                    <div>{clientData.phone_no}</div>
                  </div>
                  <div className="flex text-secondary space-x-3">
                    <IoMdMail className="text-primary text-[24px]" />
                    <div>{clientData.clientEmail}</div>
                  </div>
                  <div className="flex text-secondary space-x-3">
                    <IoLocationSharp className="text-primary text-[24px]" />
                    <div>
                      {clientData.lead_address !== ""
                        ? clientData.lead_address
                        : "Not Added"}
                    </div>
                  </div>
                  <div className="text-primary mt-5">
                    <h1 className="text-primary uppercase tracking-wide text-[18px] font-monrope font-bold">
                      Recent Update
                    </h1>
                    <p className="mt-2">
                      {clientData.recent_update === ""
                        ? "No Update"
                        : clientData.recent_update}
                    </p>
                  </div>
                </div>
              </div>
              {/* Update Info */}
              <div className=" w-full text-[18px] font-monrope">
                <div>
                  <div className="text-[18px] mb-2 font-bold capitalize text-primary flex flex-col space-y-5 justify-start py-2 cursor-pointer">
                    <span>Attachments</span>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setModalType("attachment-add");
                        setModalData({ ...clientData, owner: "LEADS" });
                      }}
                      className="flex items-center space-x-2  text-primary "
                    >
                      <IoIosAdd className="text-[28px] bg-primary text-root rounded" />
                      <span>Add Attachment</span>
                    </span>
                  </div>
                  {clientData?.attachments?.length !== 0 ? (
                    <div className="my-5">
                      {clientData?.attachments?.map((item) => (
                        <div key={item.id} className="mb-2 flex space-x-2">
                          <span className="text-secondary">{item.title}:</span>{" "}
                          <span
                            onClick={() => {
                              setShowModal(true);
                              setModalType("attachment-view");
                              setModalData({
                                ...clientData,
                                ...item,
                                owner: "LEADS",
                              });
                            }}
                            className=" text-primary hover:underline   cursor-pointer"
                          >
                            View
                          </span>
                          <span
                            rel="noopener noreferrer"
                            onClick={() =>
                              download(
                                JSON.parse(item.fileLink).url,
                                `${item.title}.${getFileExtension(
                                  JSON.parse(item.fileLink).url
                                )}`
                              )
                            }
                            className="text-primary hover:underline cursor-pointer"
                          >
                            Download
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-primary mt-2 mb-5">
                      <EmptyComponent heading="Attachment"></EmptyComponent>
                    </div>
                  )}
                  {/* Data table for recent update */}
                  {progressdata.length !== 0 ? (
                    <div className="border-2 border-primary py-4 px-3">
                      <div className="text-[18px] mb-2 font-bold capitalize text-primary flex justify-between py-2 cursor-pointer">
                        <span>Progress Report</span>
                        <span
                          onClick={() => {
                            setShowModal(true);
                            setModalType("progress-add");
                            setModalData(clientData);
                          }}
                          className="flex items-center space-x-2  text-primary "
                        >
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
                          {progressdata.map((progress) => (
                            <tr
                              key={progress.id}
                              className="table-row border-2 border-secondary"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4  whitespace-nowrap "
                              >
                                {handleDateFormat(progress?.date)}
                              </th>
                              <td className="px-6 py-4">
                                {limitToFirstThreeWords(progress?.report)}...
                              </td>

                              <td className="px-6 py-4 flex space-x-2 text-[24px]">
                                {" "}
                                <div
                                  onClick={() => {
                                    setShowModal(true);
                                    setModalType("progress-view");
                                    setModalData({ progress, clientData });
                                  }}
                                  className="cursor-pointer duration-300 hover:text-green-500"
                                >
                                  <MdOutlineRemoveRedEye />
                                </div>
                                <div
                                  onClick={() => {
                                    setShowModal(true);
                                    setModalType("progress-update");
                                    setModalData({ progress, clientData });
                                  }}
                                  className="cursor-pointer duration-300 hover:text-green-500"
                                >
                                  <PiNotePencil />
                                </div>
                                <div
                                  onClick={() => handleProgressDelete(progress)}
                                  className="cursor-pointer duration-300 hover:text-red-500"
                                >
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="w-[80%] text-[14px]">
                      <span
                        onClick={() => {
                          setShowModal(true);
                          setModalType("progress-add");
                          setModalData(clientData);
                        }}
                        className="flex items-center space-x-2  text-primary "
                      >
                        <IoIosAdd className="text-[28px] bg-primary text-root rounded" />
                        <span>Add progress</span>
                      </span>
                      <EmptyComponent heading="Progress"></EmptyComponent>
                    </div>
                  )}
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

export default IndividualLead;
