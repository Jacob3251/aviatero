import React, { useContext } from "react";
import { AppContext } from "../../../../utils/contexts/AppContext";
import { format } from "date-fns";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { TbTrash } from "react-icons/tb";
import axios from "axios";
import toast from "react-hot-toast";

function AttachmentView() {
  const { modalData, loggedUserData, setShowModal, setModalType } =
    useContext(AppContext);
  const { fileLink } = modalData;
  const parsedFile = JSON.parse(fileLink);
  console.log("parsedFile", parsedFile);
  const handleDateFormat = (date) => {
    return format(new Date(date), "do MMMM, yyyy");
  };
  const handleAttachmentDelete = async () => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${modalData.title}?`
    );
    if (confirm) {
      console.log("Attachment will be deleted");
      await axios
        .delete(
          `https://consultancy-crm-serverside-1.onrender.com/api/attachment/${modalData.id}`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((data) => {
          toast.success("Attachment Deleted");
          window.location.reload();
        });
    }
  };
  return (
    <div className="w-[50vw] text-[20px]">
      <div className="flex justify-between">
        <div className="text-primary">
          Attachment Title:{" "}
          <span className="text-secondary">{modalData.title}</span>
        </div>
        <div className="text-primary">
          Date:{" "}
          <span className="text-secondary">
            {handleDateFormat(modalData.created_at)}
          </span>
        </div>
      </div>
      <div className="my-5">
        {parsedFile.resource_type === "image" &&
          parsedFile.format === "pdf" && (
            <div className="w-full h-[120px] flex justify-center items-center text-[78px] text-primary">
              <FaRegFilePdf />
            </div>
          )}
        {parsedFile.resource_type === "image" &&
          (parsedFile.format === "jpg" ||
            parsedFile.format === "jpeg" ||
            parsedFile.format === "png") && (
            <div className="w-full h-[200px]">
              <img className="w-full h-full" src={parsedFile.url} alt="" />
            </div>
          )}
        <div className="text-primary mt-5">
          <h2 className="font-semibold font-monrope uppercase tracking-widest text-[16px]">
            Description
          </h2>
          <p className="opacity-60 text-[16px] mt-1 italic">{modalData.desc}</p>
        </div>
        <div className="flex space-x-2">
          <div className="" onClick={handleAttachmentDelete}>
            <div className="text-white duration-300 capitalize font-bold mt-5 text-[14px]  justify-start items-center border-2 border-transparent bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500 inline-flex p-2 rounded-lg cursor-pointer">
              Delete Attachment
              <TbTrash className="ml-1" />
            </div>
          </div>
          <a href={parsedFile.secure_url} target="_blank">
            <div className="text-root duration-300 capitalize font-bold mt-5 text-[14px]  justify-start items-center border-2 border-primary bg-primary hover:bg-transparent hover:text-primary inline-flex p-2 rounded-lg cursor-pointer">
              Open Link
              <FaExternalLinkAlt className="ml-1" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AttachmentView;
