import { useContext } from "react";
import { AppContext } from "../../../../utils/contexts/AppContext";
import { format } from "date-fns";

function ProgressView() {
  const { modalData } = useContext(AppContext);
  const { progress, clientData } = modalData;
  //   console.log(modalData);
  const handleDateFormat = (date) => {
    return format(new Date(date), "do MMMM, yyyy");
  };
  return (
    <div className="w-[50vw] text-[20px]">
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
          readOnly
          className="px-3 py-2  rounded-lg  text-primary bg-transparent border-[3px] border-primary outline-none w-full"
        >
          {progress.report}
        </textarea>
      </div>
    </div>
  );
}

export default ProgressView;
