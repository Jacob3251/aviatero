import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../utils/contexts/AppContext";

function Contact({ siteConfig }) {
  const navigate = useNavigate();
  const { loggedUserData } = useContext(AppContext);
  const [editStatus, setEditStatus] = useState(false);
  const {
    uk_office_address,
    uk_office_cell,
    bd_corporate_address,
    bd_corporate_cell,
    bd_legal_address,
    bd_legal_cell,
  } = siteConfig;
  const [formData, setFormData] = useState({
    ukOfficeAddress: uk_office_address,
    ukOfficeCell: uk_office_cell,
    bdCorporateAddress: bd_corporate_address,
    bdCorporateCell: bd_corporate_cell,
    bdLegalAddress: bd_legal_address,
    bdLegalCell: bd_legal_cell,
  });
  const {
    ukOfficeAddress,
    ukOfficeCell,
    bdCorporateAddress,
    bdCorporateCell,
    bdLegalAddress,
    bdLegalCell,
  } = formData;
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    console.log("home", formData);
    const { data } = await axios.put(
      "https://consultancy-crm-serverside-1.onrender.com/api/siteconfig/79b9c0f0-feac-4d67-af61-cded304503fd",
      {
        uk_office_address: ukOfficeAddress,
        uk_office_cell: ukOfficeCell,
        bd_corporate_address: bdCorporateAddress,
        bd_corporate_cell: bdCorporateCell,
        bd_legal_address: bdLegalAddress,
        bd_legal_cell: bdLegalCell,
      },
      {
        headers: {
          Authorization: `Bearer ${loggedUserData.token}`,
        },
      }
    );
    if (data) {
      console.log(data);

      toast.success("Socials Updated Successfully", {
        style: {
          backgroundColor: "#333333",
          color: "#fafafa",
        },
        className: "font-monrope",
      });
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center font-bold uppercase ">
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
          <div className="no-underline text-primary tracking-wider">FM </div>

          <span>/ Contact Page</span>
        </div>
        <div>
          {!editStatus && (
            <div
              onClick={() => setEditStatus(true)}
              className="bg-primary text-secondary px-5 py-2 rounded-md cursor-pointer"
            >
              Edit
            </div>
          )}
          {editStatus && (
            <div
              onClick={() => {
                setEditStatus(false);
                handleSubmit();
              }}
              className="bg-primary text-secondary px-5 py-2 rounded-md cursor-pointer"
            >
              Submit
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
          Uk Office
        </div>
        <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
          {/* Banner Title */}
          <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
            <label htmlFor="ukOfficeAddress">Address</label>
            <input
              disabled={!editStatus ? true : false}
              className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
              type="text"
              name="ukOfficeAddress"
              id="ukOfficeAddress"
              required
              placeholder="Street..."
              value={ukOfficeAddress}
              onChange={onChange}
            />
          </div>
          {/* Banner Sub Title */}
          <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
            <label htmlFor="ukOfficeCell">Cell</label>
            <input
              disabled={!editStatus ? true : false}
              className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
              type="text"
              name="ukOfficeCell"
              id="ukOfficeCell"
              placeholder="exp subtitle..."
              value={ukOfficeCell}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary my-5">
          Bangladesh Office
        </div>
        <div>
          <div className="text-[20px] font-monrope text-primary font-bold my-5">
            Corporate Office
          </div>

          <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
            {/* Banner Title */}
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="bdCorporateAddress">Address</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="bdCorporateAddress"
                id="bdCorporateAddress"
                required
                placeholder="Fly to the Moon.."
                value={bdCorporateAddress}
                onChange={onChange}
              />
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="bdCorporateCell">Telephone No:</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="bdCorporateCell"
                id="bdCorporateCell"
                required
                placeholder="Fly to the Moon.."
                value={bdCorporateCell}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="text-[20px] font-monrope text-primary font-bold my-5">
            Legal Office
          </div>
          <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
            {/* Banner Title */}
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="bdLegalAddress">Address</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="bdLegalAddress"
                id="bdLegalAddress"
                required
                placeholder="Fly to the Moon.."
                value={bdLegalAddress}
                onChange={onChange}
              />
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="bdLegalCell">Telephone No:</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="bdLegalCell"
                id="bdLegalCell"
                required
                placeholder="Fly to the Moon.."
                value={bdLegalCell}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
