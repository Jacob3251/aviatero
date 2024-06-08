import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../../../../utils/contexts/AppContext";
import useIndividualClient from "../../../../../utils/hooks/useIndividualClient";
import { site_sensitive_info } from "../../../../../utils/helper";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiMiniPencilSquare } from "react-icons/hi2";

function UpdateClient() {
  const location = useLocation();
  const { loggedUserData } = useContext(AppContext);
  const { id } = useParams();
  const [clientData, clientDataLoading] = useIndividualClient(id);
  const [formData, setFormData] = useState({
    name: "",
    clientType: "",
    clientDesc: "",
    clientEmail: "",
    phone_no: "",
    preferredDestination: "",
    dealAmount: "",
    recent_update: "",
  });
  useEffect(() => {
    if (clientDataLoading === false) {
      setFormData({
        ...clientData,
      });
    }
  }, [clientDataLoading, clientData]);
  const {
    name,
    clientType,
    clientDesc,
    clientEmail,
    phone_no,
    preferredDestination,
    dealAmount,
    recent_update,
    due,
  } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const [updateAttachments, setUpdatedAttachments] = useState(false);
  const handleAttachmentUpdate = () => {
    setUpdatedAttachments(!updateAttachments);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { data } = await axios.put(
      `https://consultancy-crm-serverside.onrender.com/api/client/${clientData.id}/update`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${loggedUserData.token}`,
        },
      }
    );
    if (data) {
      console.log(data);

      toast.success("Client updated Successfully", {
        style: {
          backgroundColor: "#333333",
          color: "#fafafa",
        },
        className: "font-monrope",
      });
    }
  };
  // console.log(location.state.item);
  return (
    <div className="bg-root w-full h-full overflow-y-scroll hidden-scrollbar">
      <div className="flex items-center space-x-2 text-[28px] px-5 lg:px-0 uppercase">
        <div className="">
          <Link to="/dashboard" className="text-primary no-underline">
            Dashboard
          </Link>
        </div>
        <div className="text-primary text-[18px] mt-1.5">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="p-5 lg:p-20 space-y-5 font-monrope">
        <div className="text-[24px] text-primary mb-5">Update Client</div>
        {/* form parent div below */}
        <div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col space-y-10"
          >
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
              {/* Name */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="name">Full Name *</label>
                <input
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe.."
                  onChange={onChange}
                  value={name}
                />
              </div>
              {/* Email */}
              <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="clientEmail">Email</label>
                <input
                  onChange={onChange}
                  className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="email"
                  name="clientEmail"
                  id="clientEmail"
                  placeholder="example@mail.com"
                  value={clientEmail}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
              {/* client type */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="clientType">Client Type</label>

                <select
                  onChange={onChange}
                  name="clientType"
                  value={clientType}
                  id="clientType"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                >
                  <option
                    selected={clientType === "" ? true : false}
                    value="SELECT"
                  >
                    SELECT
                  </option>
                  <option value="VISIT">VISIT</option>
                  <option value="STUDY">STUDY</option>
                  <option value="IMMIGRATION">IMMIGRATION</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>
              {/* CLIENT DESC */}
              <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="clientDesc">Client Description *</label>
                <input
                  value={clientDesc}
                  onChange={onChange}
                  required
                  className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="clientDesc"
                  id="clientDesc"
                  placeholder="Client Details"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
              {/* client phone number */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="phone_no">Phone Number *</label>
                <input
                  required
                  onChange={onChange}
                  value={phone_no}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="phone_no"
                  id="phone_no"
                  placeholder="EXP: 017-XXXX-XXXX"
                />
              </div>
              {/* Preferred Destination */}
              <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="preferredDestination">
                  Preferred Destination *
                </label>
                <input
                  value={preferredDestination}
                  onChange={onChange}
                  required
                  className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="preferredDestination"
                  id="preferredDestination"
                  placeholder="Exp: THAILAND, UK, USA, CANADA"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
              {/* Deal Amount */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="dealAmount">Deal Amount</label>
                <input
                  value={dealAmount}
                  onChange={onChange}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="number"
                  name="dealAmount"
                  id="dealAmount"
                  placeholder="Exp: 1000$ / 50000$"
                />
              </div>
              {/* Recent Update */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="recent_update">Recent Update</label>
                <input
                  value={recent_update}
                  onChange={onChange}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="recent_update"
                  id="recent_update"
                  placeholder="Exp: NO UPDATE"
                />
              </div>
            </div>
            {/* <div className="flex ">
              <div className="w-[50%] text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="due">Deal Amount</label>
                <input
                  value={due}
                  onChange={onChange}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="number"
                  name="due"
                  id="due"
                  placeholder="Exp: 1000$ / 50000$"
                />
              </div>
            </div> */}
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
              {clientDataLoading === false && (
                <div>
                  {clientData?.attachments?.map((item) => (
                    <div key={item.id}>
                      <div>{item.title}</div>
                      <div className="text-primary font-bold uppercase">
                        {item.title}
                      </div>
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
                      <div>
                        <div>
                          <HiMiniPencilSquare
                            onClick={handleAttachmentUpdate}
                            className="text-primary"
                          />
                        </div>
                        {updateAttachments && <div>Hello</div>}
                        <div>
                          <FaRegTrashCan className="text-red-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="">
              <input
                className="bg-primary text-white px-5 py-3 text-[18px] rounded-sm hover:border-primary border-2 border-transparent hover:bg-transparent  duration-300 cursor-pointer"
                type="submit"
                value="UPDATE"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateClient;
