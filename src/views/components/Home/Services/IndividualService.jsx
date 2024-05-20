import visit from "../../../../assets/images/home/services/1.png";
import study from "../../../../assets/images/home/services/2.png";
import migrate from "../../../../assets/images/home/services/3.png";
import "animate.css";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
function IndividualService({ data }) {
  const [subMenuTrigger, setSubMenuTrigger] = useState(false);

  return (
    <div className={`flex  w-[250px] flex-col justify-center items-center`}>
      <div className="w-[100px] h-[90px] xl:h-[180px]  xl:w-[140px] flex flex-col justify-center items-center">
        <img
          className="w-full h-full object-contain"
          src={data.imgLink}
          alt=""
        />
      </div>
      {/* drowdown button */}
      <div
        onClick={() => {
          setSubMenuTrigger(!subMenuTrigger);
        }}
        className={`cursor-pointer mt-[30px] uppercase font-noto text-[32px] xl:text-[48px] text-secondary flex  justify-center items-center space-x-5  h-auto w-[300px] text-center`}
      >
        <span>{data.title}</span>

        {!subMenuTrigger ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowUp className="animate__animated animate__flipInX" />
        )}
      </div>

      <div
        className={`${subMenuTrigger === false ? "wrapper" : "wrapper open"} `}
      >
        <div
          className={`expandable space-y-[20px]  text-left rounded-lg mt-8 ${
            data.title === "Visit" && "w-[170px] px-10 "
          } ${data.title === "Study" && "w-[200px] px-10 "} ${
            data.title === "Migrate" && "w-[300px] px-10 "
          }`}
        >
          {data.subMenu.map((item, index) => (
            <div
              className="text-left  cursor-pointer text-[20px] xl:text-[32px] p-2  "
              key={index}
            >
              <a
                className="no-underline text-secondary font-monrope  hover:text-primary"
                href="#"
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndividualService;
