import { Link, useNavigate, useParams } from "react-router-dom";
import useIndividualEmail from "../../../../../utils/hooks/useIndividualEmail";
import { format } from "date-fns";
function IndividualEmail() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.id);
  const [data, loading] = useIndividualEmail(params.id);
  const handleDateFormat = (date) => {
    return format(new Date(date), "do MMMM, yyyy");
  };
  const handleAttachments = (JsonData) => {
    const parsedData = JSON.parse(JsonData);
    console.log(parsedData);
    return parsedData.map((dta, index) => (
      <div
        key={index}
        className="px-5 inline-flex justify-center items-center mr-10 h-12 bg-primary rounded text-root"
      >
        <a
          href={`https://consultancy-crm-serverside.onrender.com/${
            dta.path.split("\\")[1]
          }`}
        >
          {dta.filename}
        </a>
      </div>
    ));
  };
  return (
    <>
      {loading === false ? (
        <div className=" w-full h-full">
          <div className="p-10 text-left font-monrope text-[20px] text-secondary space-y-5">
            <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary">
              <Link
                to="/dashboard"
                className="no-underline text-primary tracking-wider"
              >
                Dashboard
              </Link>
              {"  "}
              <span className="text-[24px]">/</span>
              {"  "}
              <span
                className="cursor-pointer"
                onClick={() => navigate("/dashboard/email")}
              >
                Email
              </span>
            </div>
            <div className="">
              <span className="text-primary font-bold">Subject:</span>{" "}
              {data.email_subject}
            </div>
            <div>
              <span className="text-primary font-bold">From:</span> "
              {data.email_from}"
            </div>
            <div>
              <span className="text-primary font-bold">To:</span>{" "}
              {data.email_to.map((item, index) => (
                <span key={index}>
                  "{item}" {index + 1 === data.email_to.length ? "." : ", "}
                </span>
              ))}
            </div>
            <div>
              <span className="text-primary font-bold">Date:</span>{" "}
              {handleDateFormat(data.date)}
            </div>
            <div className="text-primary font-bold">Email Content:</div>
            <div dangerouslySetInnerHTML={{ __html: data.email_body }}></div>
            {/* Attachments */}
            <div className="">
              <div className="text-primary font-bold">Email Attachments:</div>
              <div className="mt-5">
                {handleAttachments(data.email_attachments)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default IndividualEmail;
