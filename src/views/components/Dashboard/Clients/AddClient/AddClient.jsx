import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaRegFileImage } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function AddClient() {
  const [formData, setFormData] = useState({
    name: "",
    clientType: "",
    clientDesc: "",
    clientEmail: "",
    phone_no: "",
    preferredDestination: "",
    dealAmount: 0,

    recent_update: "",
  });
  const [attachments, setAttachments] = useState([
    {
      attachment_title: "",
      attachment_description: "",
      owner_id: "",
      type: "USER",
      attachment_file: null,
    },
  ]);
  const handleAddAttachment = () => {
    setAttachments([
      ...attachments,
      {
        attachment_title: "",
        attachment_description: "",
        owner_id: "",
        type: "USER",
        attachment_file: null,
      },
    ]);
  };
  const handleAttachmentChange = (index, attachment) => {
    const newAttachments = [...attachments];
    newAttachments[index] = attachment;
    setAttachments(newAttachments);
  };
  const {
    name,
    clientType,
    clientDesc,
    clientEmail,
    phone_no,
    preferredDestination,
    dealAmount,
    recent_update,
  } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { data } = await axios.post(
      "http://localhost:5000/api/client",
      formData
    );
    if (data) {
      console.log(data);
      setFormData({
        name: "",
        clientType: "",
        clientDesc: "",
        clientEmail: "",
        phone_no: "",
        preferredDestination: "",
        dealAmount: 0,

        recent_update: "",
      });
      toast.success("Client Added Successfully", {
        style: {
          backgroundColor: "#333333",
          color: "#fafafa",
        },
        className: "font-monrope",
      });
    }
  };
  return (
    <div className="bg-root w-full h-full overflow-y-scroll hidden-scrollbar">
      <div className="flex items-center space-x-2 text-[22px] ">
        <div className="">
          <Link to="/dashboard" className="text-primary no-underline">
            Dashboard
          </Link>
        </div>
        <div className="text-primary text-[18px] mt-1.5">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="p-20 space-y-5 font-monrope">
        <div className="text-[24px] text-primary mb-5">Add Client</div>
        {/* form parent div below */}
        <div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col space-y-10"
          >
            <div className="flex space-x-10">
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
            <div className="flex space-x-10">
              {/* client type */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="clientType">Client Type</label>

                <select
                  onChange={onChange}
                  name="clientType"
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
            <div className="flex space-x-10">
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
            <div className="flex space-x-10">
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
            {/* attachment div */}
            <div className="flex flex-col ">
              <div className="">
                {attachments.map((attachment, index) => (
                  <AttachmentComponent
                    key={index}
                    id={index}
                    attachment={attachment}
                    onChange={(newAttachment) =>
                      handleAttachmentChange(index, newAttachment)
                    }
                  />
                ))}
              </div>
              <div>
                <button
                  className="border-2 border-primary bg-primary px-3 py-2 rounded-md hover:bg-transparent duration-300 hover:text-primary mt-5"
                  onClick={handleAddAttachment}
                >
                  Add Attachment
                </button>
              </div>
            </div>
            <div className="">
              <input
                className="bg-primary text-white px-5 py-3 text-[18px] rounded-sm hover:border-primary border-2 border-transparent hover:bg-transparent  duration-300 cursor-pointer"
                type="submit"
                value="SUBMIT"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddClient;
const AttachmentComponent = ({ attachment, onChange, index }) => {
  const fileInputRef = useRef(null);
  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Do whatever you want with the selected file
    console.log("Selected file:", file);
  };
  return (
    <div className=" flex flex-col border-2 border-primary p-5 rounded-md mb-5">
      <div className="text-primary font-monrope uppercase font-bold">
        Attachment
      </div>
      <div className="flex space-x-10">
        <div className="w-full text-primary font-semibold space-y-2 text-[18px]">
          <input
            className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
            type="text"
            placeholder="Attachment Title"
            value={attachment.attachment_title}
            onChange={(e) =>
              onChange({ ...attachment, attachment_title: e.target.value })
            }
          />
        </div>
        <div className="w-full text-primary font-semibold space-y-2 text-[18px]">
          <input
            className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
            type="text"
            placeholder="Attachment Description"
            value={attachment.attachment_description}
            onChange={(e) =>
              onChange({
                ...attachment,
                attachment_description: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="flex space-x-10">
        <div
          htmlFor="serviceImage"
          onClick={handleDivClick}
          className="w-full flex flex-col justify-center items-center my-5 text-primary cursor-pointer border-2 border-primary p-5 rounded-md"
        >
          <FaRegFileImage className="text-[46px]" />
          <div>Upload File</div>
        </div>
        <input
          type="file"
          name="serviceImage"
          id="serviceImage"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={() => {
            handleFileInputChange();
            onChange({
              ...attachment,
              attachment_description: e.target.value,
            });
          }}
          value={attachment.attachment_description}
        />
      </div>
    </div>
  );
};
