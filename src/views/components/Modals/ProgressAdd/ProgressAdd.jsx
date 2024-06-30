import React, { useContext, useState } from "react";
import { AppContext } from "../../../../utils/contexts/AppContext";
import axios from "axios";
import toast from "react-hot-toast";
import useIndividualsProgress from "../../../../utils/hooks/useIndividualsProgress";

function ProgressAdd() {
  const { modalData, loggedUserData, setShowModal } = useContext(AppContext);

  const [report, setReport] = useState("");
  //   console.log("modalData form", modalData);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      report,
      clientId: modalData.id,
    };
    console.log(payload);
    await axios
      .post(
        "https://consultancy-crm-serverside-1.onrender.com/api/progress",
        payload,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      )
      .then((data) => {
        console.log(data.data.data);
        toast.success("Progress updated");
        setShowModal(false);
        window.location.reload();
        // setProgressData((prev) => [...prev, data.data.data]);
        //   setModalType("progress-add");
        //   setModalData(clientData);
      });
  };
  return (
    <div className="text-primary w-[40vw]">
      <h1>Add Progress for {modalData?.name}</h1>
      <form action="" onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col mt-5">
          <label
            className="mb-3 uppercase font-bold font-monrope tracking-widest"
            htmlFor=""
          >
            Recent Progress
          </label>
          <textarea
            onChange={(e) => setReport(e.target.value)}
            type="text"
            rows={5}
            className="bg-transparent p-3 text-primary placeholder:text-primary border-2 border-primary focus:border-white outline-none duration-300 rounded-lg focus:rounded"
            placeholder="Write Something..."
          />
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            value="Add"
            className="bg-primary font-bold text-root w-auto uppercase font-monrope tracking-wider px-10 py-2 cursor-pointer border-[3px] border-primary hover:bg-transparent hover:text-primary duration-300 rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}

export default ProgressAdd;
