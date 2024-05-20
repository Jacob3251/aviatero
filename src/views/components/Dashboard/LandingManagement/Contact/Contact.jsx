import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [editStatus, setEditStatus] = useState(false);
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
              onClick={() => setEditStatus(false)}
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
        <div className="flex flex-col md:flex-row space-x-10 md:space-y-0 md:space-x-10 px-2">
          {/* Banner Title */}
          <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
            <label htmlFor="uk_address">Address</label>
            <input
              disabled={!editStatus ? true : false}
              className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
              type="text"
              name="uk_address"
              id="uk_address"
              required
              placeholder="Street..."
            />
          </div>
          {/* Banner Sub Title */}
          <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
            <label htmlFor="uk_phone">Cell</label>
            <input
              disabled={!editStatus ? true : false}
              className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
              type="text"
              name="uk_phone"
              id="uk_phone"
              placeholder="exp subtitle..."
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

          <div className="flex flex-col md:flex-row space-x-10 md:space-y-0 md:space-x-10 px-2">
            {/* Banner Title */}
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="corporate_db_address">Address</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="corporate_db_address"
                id="corporate_db_address"
                required
                placeholder="Fly to the Moon.."
              />
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="corporate_bd_phone">Telephone No:</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="corporate_bd_phone"
                id="corporate_bd_phone"
                required
                placeholder="Fly to the Moon.."
              />
            </div>
          </div>
          <div className="text-[20px] font-monrope text-primary font-bold my-5">
            Legal Office
          </div>
          <div className="flex flex-col md:flex-row space-x-10 md:space-y-0 md:space-x-10 px-2">
            {/* Banner Title */}
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="legal_bd_address">Address</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="legal_bd_address"
                id="legal_bd_address"
                required
                placeholder="Fly to the Moon.."
              />
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="legal_bd_phone">Telephone No:</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="legal_bd_phone"
                id="legal_bd_phone"
                required
                placeholder="Fly to the Moon.."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
