import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { AppContext } from "../../../../../utils/contexts/AppContext";
import useRegisteredEmails from "../../../../../utils/hooks/useRegisteredEmails";

function Config() {
  const { loggedUserData } = useContext(AppContext);
  const [userEmails, setUserEmails, emailLoading, allEmails, setAllEmails] =
    useRegisteredEmails();
  const [formData, setFormData] = useState({
    email: "",
    app_key: "",
  });
  const { email, app_key } = formData;

  const onEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onEmailSubmit = async (event) => {
    event.preventDefault();
    const submissionData = {
      ...formData,
      user_id: loggedUserData.id,
    };
    const found = allEmails.find((item) => item.email === submissionData.email);
    if (found) {
      toast.error("Email is already registered!!");
      setFormData({
        email: "",
        app_key: "",
      });
    } else {
      const { data } = await axios.post(
        "https://consultancy-crm-serverside.onrender.com/api/registeredemails",
        submissionData,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      );
      if (data) {
        console.log(data);

        setFormData({
          email: "",
          app_key: "",
        });
        setUserEmails((prev) => [...prev, data.data]);
        setAllEmails((prev) => [...prev, data.data]);

        toast.success("Email Added");
      } else {
        toast.error("Email Not Added");
      }
    }
    console.log(formData);
  };
  const handleDelete = async (item) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${item.email} ?`
    );
    if (confirm) {
      const newUserEmails = userEmails.filter((email) => email.id !== item.id);
      const newAllEmails = allEmails.filter((email) => email.id !== item.id);
      setUserEmails(newUserEmails);
      setAllEmails(newAllEmails);

      try {
        await axios.delete(
          `https://consultancy-crm-serverside.onrender.com/api/registeredemails/${item.id}`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
            },
          }
        );
        toast.success("Email Deleted");
      } catch (error) {
        setUserEmails((prevEmails) => [...prevEmails, item]);
        setAllEmails((prevEmails) => [...prevEmails, item]);
        toast.error("Couldn't Delete Email");
        console.log("Error deleting email:", error.message);
      }
    }
  };
  console.log(userEmails);
  return (
    <div className="w-full h-full hidden-scrollbar">
      {emailLoading === false ? (
        <div className=" px-5">
          <div className="font-monrope font-bold text-primary  text-[20px] uppercase">
            Settings / Config
          </div>
          <div>
            <div className="my-5">
              <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                Add Email
              </div>
              <form
                onSubmit={onEmailSubmit}
                className="mb-5"
                encType="multipart/form-data"
              >
                <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-10 px-2">
                  {/* Employee Name */}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="member_name">Email</label>
                    <input
                      className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={onEmailChange}
                    />
                  </div>
                  {/* Employee Postion */}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="app_key">App Key</label>
                    <input
                      className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="text"
                      name="app_key"
                      id="app_key"
                      required
                      placeholder="qrio zcjc zyvs lfyi"
                      value={app_key}
                      onChange={onEmailChange}
                    />
                  </div>
                </div>

                <div className="text-left mt-5">
                  <input
                    type="submit"
                    className="w-auto uppercase bg-primary text-black  py-1 px-2 font-monrope font-semibold tracking-wider rounded-md border-2 border-primary hover:bg-transparent cursor-pointer duration-300 hover:text-primary"
                    value="ADD Email"
                  />
                </div>
              </form>
              {/* data table of my emails */}
              <>
                <div className="font-monrope font-bold text-primary  text-[20px] uppercase tracking-wider">
                  My Emails
                </div>
                <div className="border-2 border-primary p-5 mt-5">
                  <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                    Manage Emails
                  </div>
                  {userEmails && (
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-primary border-2 p-5 hidden-scrollbar">
                      <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0 ">
                        <thead className="text-xs text-primary uppercase bg-transparent">
                          <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                            <th scope="col" className="px-6 py-5">
                              Serial No
                            </th>
                            <th scope="col" className="px-6 py-5">
                              Email
                            </th>

                            <th scope="col" className="px-6 py-5">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-secondary font-monrope w-full overflow-x-scroll">
                          {userEmails.map((email, index) => (
                            <tr
                              key={email.id}
                              className="table-row border-2 border-secondary w-full"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4  whitespace-nowrap "
                              >
                                {index + 1}
                              </th>
                              <td className="px-6 py-4 ">{email.email}</td>

                              <td className="px-6 py-4 flex space-x-2 text-[24px]">
                                {/* <div
                                onClick={() =>
                                  navigate(`/dashboard/clients/${item.id}/update`, {
                                    state: { item: item },
                                  })
                                }
                                className="cursor-pointer duration-300 hover:text-green-500"
                              >
                                <PiNotePencil />
                              </div> */}
                                <div
                                  onClick={() => handleDelete(email)}
                                  className="cursor-pointer duration-300 hover:text-red-500"
                                >
                                  <MdDelete />
                                </div>
                              </td>
                              {/* <td>
                          <img src={member.member_imagelink} alt="" />
                        </td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </>
              {/* data table of my emails */}
              {allEmails && (
                <div className="mt-5">
                  <div className="font-monrope font-bold text-primary  text-[20px] uppercase tracking-wider">
                    All Registered Emails
                  </div>
                  <div className="border-2 border-primary p-5 mt-5 ">
                    <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                      Manage All Emails
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-primary border-2 p-5 hidden-scrollbar">
                      <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
                        <thead className="text-xs text-primary uppercase bg-transparent  ">
                          <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                            <th scope="col" className="px-6 py-5">
                              Serial No
                            </th>

                            <th scope="col" className="px-6 py-5">
                              Email
                            </th>

                            <th scope="col" className="px-6 py-5">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-secondary font-monrope ">
                          {allEmails.map((emailItem, index) => (
                            <tr
                              key={emailItem.id}
                              className="table-row border-2 border-secondary"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4  whitespace-nowrap "
                              >
                                {index + 1}
                              </th>

                              <td className="px-6 py-4 ">{emailItem.email}</td>

                              <td className="px-6 py-4 flex space-x-2 text-[24px]">
                                <div
                                  onClick={() => handleDelete(emailItem)}
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-500 text-white">Loading</div>
      )}
    </div>
  );
}

export default Config;
