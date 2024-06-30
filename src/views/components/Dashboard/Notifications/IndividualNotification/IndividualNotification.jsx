import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../utils/contexts/AppContext";

function IndividualNotification() {
  const { loggedUserData } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({});
  const [query, setQuery] = useState({});
  const [formData, setFormData] = useState({
    reply: "",
  });
  const { reply } = formData;
  const param = window.location.pathname.split("/dashboard/notifications/")[1];
  // console.log(param);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleReply = async (event) => {
    event.preventDefault();
    await axios
      .put(
        `https://consultancy-crm-serverside-1.onrender.com/api/querymsg/${data?.id}/update`,
        {
          ...data,
          reply: reply,
          status: "Answered",
        },
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      )
      .then(() => {
        toast.success("Reply Sent");
        setFormData({
          reply: "",
        });
        // window.location.reload;
      })
      .catch((error) =>
        toast.error(`Could not send reply due to ${error.message}`)
      );
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://consultancy-crm-serverside-1.onrender.com/api/querymsg/${param}`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
            },
          }
        )
        .then((data) => {
          console.log(data);
          setData(data.data.data);
        });
    };
    fetchData();
  }, [param, reply]);
  console.log(data);

  return (
    <div className=" w-full h-full">
      <div className="p-10 text-left font-monrope text-[20px] text-secondary space-y-5">
        <div className="uppercase text-[20px] font-monrope font-semibold  text-primary flex justify-between">
          <div className="flex space-x-2 items-center">
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
              onClick={() => navigate("/dashboard/notifications")}
            >
              Notifications
            </span>
          </div>
          <div className="text-secondary">
            {data?.status === "Pending" ? (
              <div className="bg-red-500 inline-block px-2 py-2 rounded-md font-bold font-monrope">
                Pending
              </div>
            ) : (
              <div className="bg-green-500 inline-block px-2 py-2 rounded-md font-bold font-monrope">
                Answered
              </div>
            )}
          </div>
        </div>

        <div>
          <span className="text-primary font-bold">From:</span> {data?.name}
        </div>
        <div>
          <span className="text-primary font-bold">Contact No:</span>{" "}
          <a href="tel:+8801754974851" className="text-primary">
            {data?.phone_no}
          </a>
        </div>

        <div>
          <span className="text-primary font-bold">Date:</span>{" "}
          {data?.created_at}
        </div>
        <div className="text-primary font-bold">Message Content:</div>
        <div>{data?.message}</div>
        <div className="text-primary font-bold">Latest Given Reply:</div>
        <div>{data?.reply}</div>
        <form onSubmit={handleReply}>
          <textarea
            rows={5}
            className="w-full bg-transparent border-2 border-primary rounded-md p-5 placeholder:text-primary placeholder:text-[20px] text-[20px]"
            placeholder={`Reply to ${data?.name}...`}
            name="reply"
            onChange={onChange}
            value={reply}
            id="reply"
          ></textarea>
          <div className="flex justify-start mt-5">
            <input
              type="submit"
              value="Send"
              className="bg-primary border-2 border-primary duration-300 hover:bg-transparent cursor-pointer text-secondary px-5 py-2 uppercase font-monrope font-semibold tracking-wider rounded-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default IndividualNotification;
