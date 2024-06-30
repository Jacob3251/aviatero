import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../../utils/contexts/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

function ProgressUpdate() {
  const { modalData, loggedUserData, setShowModal } = useContext(AppContext);
  const { progress, clientData } = modalData;
  const [report, setReport] = useState(progress.report);
  const handleDateFormat = (date) => {
    return format(new Date(date), "do MMMM, yyyy");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      report,
      clientId: clientData.id,
    };
    await axios
      .put(
        `https://consultancy-crm-serverside-1.onrender.com/api/progress/${progress.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        toast.success("Progress updated");
        setShowModal(false);
        window.location.reload();
        //   setModalType("progress-add");
        //   setModalData(clientData);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="w-[50vh] text-[20px]">
      <div className="text-primary font-bold mb-2">Update Progress</div>
      <div className="flex justify-between">
        <div className="text-primary">
          Name: <span className="text-secondary">{clientData.name}</span>
        </div>
        <div className="text-primary">
          Date:{" "}
          <span className="text-secondary">
            {handleDateFormat(progress.date)}
          </span>
        </div>
      </div>
      <div className="my-5">
        <textarea
          onChange={(e) => setReport(e.target.value)}
          value={report}
          className="px-3 py-2  rounded-lg  text-primary bg-transparent border-[3px] border-primary outline-none w-full"
        >
          {progress.report}
        </textarea>
      </div>
      <div className="flex justify-end">
        <input
          type="submit"
          value="Update"
          className="bg-primary font-bold text-root w-auto uppercase font-monrope tracking-wider px-10 py-2 cursor-pointer border-[3px] border-primary hover:bg-transparent hover:text-primary duration-300 rounded-lg"
        />
      </div>
    </form>
  );
}

export default ProgressUpdate;
