import { useContext, useState } from "react";
import { AppContext } from "../../../../utils/contexts/AppContext";
import { LuPencil } from "react-icons/lu";
import EmptyComponent from "../../EmptyComponent/EmptyComponent";
import { Link, useNavigate } from "react-router-dom";
import { PiNotePencil } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import useEmails from "../../../../utils/hooks/useEmails";
import { format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../Reusable/Loader/Loader";
function Email() {
  const { setShowModal, setModalType, loggedUserData } = useContext(AppContext);

  const [data, setData] = useState(false);
  const [sentEmails, emailLoading, setSentEmails] = useEmails();
  console.log(sentEmails);
  const handleDateFormat = (date) => {
    return format(new Date(date), "do MMMM, yyyy");
  };
  const navigate = useNavigate();
  const handleDelete = async (item) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this email?"
    );
    if (confirm) {
      const newSentEmails = sentEmails.filter(
        (emailItem) => emailItem.id !== item.id
      );
      setSentEmails(newSentEmails);
      axios
        .delete(
          `https://consultancy-crm-serverside-1.onrender.com/api/email/${item.id}`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
            },
          }
        )
        .then((data) => {
          toast.success("Email Deleted");
        })
        .catch((error) => {
          setSentEmails((prevEmails) => [...prevEmails, item]);
          toast.error("Couldn't Delete Email");
        });
    }
  };
  return (
    <>
      {emailLoading === false ? (
        <div className="bg-root w-full h-full overflow-y-scroll hidden-scrollbar ">
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
            <div className="mt-5">
              {sentEmails.length === 0 && (
                <EmptyComponent heading="Email"></EmptyComponent>
              )}
              {sentEmails.length !== 0 && (
                <div className="border-primary border-2 p-5">
                  <div className="mb-5 text-[24px] font-monrope text-primary font-semibold">
                    <div>All Sent Emails</div>
                  </div>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-secondary p-5 border-2">
                    <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
                      <thead className="text-xs text-primary uppercase bg-transparent  ">
                        <tr className="uppercase font-monrope font-semibold text-[14px] border-secondary border-2 ">
                          <th scope="col" className="px-6 py-5">
                            Serial
                          </th>
                          <th scope="col" className="px-6 py-5">
                            To
                          </th>

                          <th scope="col" className="px-6 py-5">
                            Subject
                          </th>

                          <th scope="col" className="px-6 py-5">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-5">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-secondary font-monrope">
                        {sentEmails.map((sentEmail, index) => (
                          <tr
                            key={sentEmail.id}
                            className="table-row border-2 border-secondary"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4  whitespace-nowrap "
                            >
                              {index + 1}
                            </th>
                            <th
                              scope="row"
                              className="px-6 py-4  whitespace-nowrap "
                            >
                              {sentEmail.email_to.map((item, index) => (
                                <span key={index}>
                                  "{item}"
                                  {index + 1 === sentEmail.email_to.length
                                    ? ""
                                    : ",\n"}
                                </span>
                              ))}
                            </th>
                            <td className="px-6 py-4">
                              {sentEmail.email_subject}
                            </td>
                            <td className="px-6 py-4">
                              {" "}
                              {handleDateFormat(sentEmail.date)}
                            </td>{" "}
                            <td className="px-6 py-6 flex space-x-2 text-[24px]">
                              <div
                                onClick={() =>
                                  navigate(`/dashboard/email/${sentEmail.id}`)
                                }
                                className="cursor-pointer duration-300 hover:text-green-500"
                              >
                                <MdOutlineRemoveRedEye />
                              </div>

                              <div
                                onClick={() => handleDelete(sentEmail)}
                                className="cursor-pointer duration-300 hover:text-red-500"
                              >
                                <MdDelete />
                              </div>
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
      ) : (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <Loader></Loader>
        </div>
      )}
    </>
  );
}

export default Email;
