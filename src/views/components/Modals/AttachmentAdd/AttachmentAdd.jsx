import React, { useContext, useState } from "react";
import { AppContext } from "../../../../utils/contexts/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

function AttachmentAdd() {
  const { modalData, loggedUserData, setShowModal, setModalType } =
    useContext(AppContext);
  const [clientImage, setClientImage] = useState(null);
  const [file, setFile] = useState(null);
  const [attachment, setAttachment] = useState({
    attachment_title: "",
    attachment_description: "",
    owner_id: "",
    type: modalData.owner,
    attachment_file: null,
  });
  const {
    attachment_title,
    attachment_description,
    owner_id,
    type,
    attachment_file,
  } = attachment;
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (file.type !== "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setClientImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const onChange = (e) => {
    setAttachment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("modal data", modalData);
    const data = {
      title: attachment_title,
      desc: attachment_description,
      file: file,
      ownerId: modalData.id,
      type,
    };
    console.log(data);
    await axios
      .post(
        "https://consultancy-crm-serverside-1.onrender.com/api/attachment",
        data,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((data) => {
        toast.success("Attachment Added");
        setModalType("");
        setShowModal(false);
        window.location.reload();
      });
  };
  return (
    <div className="text-primary w-[40vw]">
      <h1>Add Attachment for {modalData?.name}</h1>
      <form action="" onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
          <div className="w-full text-primary font-semibold space-y-2 text-[18px]">
            <input
              className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
              type="text"
              placeholder="Attachment Title"
              required
              name="attachment_title"
              value={attachment_title}
              onChange={onChange}
            />
          </div>
          <div className="w-full text-primary font-semibold space-y-2 text-[18px]">
            <input
              className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
              type="text"
              name="attachment_description"
              placeholder="Attachment Description"
              value={attachment_description}
              onChange={onChange}
            />
          </div>
        </div>
        {clientImage && (
          <div className="h-[50px] aspect-square">
            <img className="w-full h-full" src={clientImage} alt="" />
          </div>
        )}

        <div className="flex space-x-10">
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*,.pdf"
            required
            onChange={handleFileInputChange}
          />
        </div>
        <input
          className="px-3 py-2 text-root hover:text-primary duration-300 bg-primary hover:bg-transparent text-[14px] tracking-wider rounded-md uppercase font-bold border-2 border-primary cursor-pointer"
          type="Submit"
        />
      </form>
    </div>
  );
}

export default AttachmentAdd;
