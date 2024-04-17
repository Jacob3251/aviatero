import visit from "../../../../assets/images/home/services/1.png";
import study from "../../../../assets/images/home/services/2.png";
import migrate from "../../../../assets/images/home/services/3.png";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function IndividualService({ data }) {
  const [subMenuTrigger, setSubMenuTrigger] = useState(false);
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <div className="h-[180px] w-[140px] flex flex-col justify-center items-center">
        <img
          className="w-full h-full object-contain"
          src={data.imgLink}
          alt=""
        />
      </div>
      {/* drowdown button */}
      <div
        className={`"mt-[30px] uppercase font-noto text-[48px] text-secondary flex justify-center items-center  h-[65px] w-[300px] text-center relative `}
      >
        <div
          className="flex justify-center items-center space-x-[10px] w-full cursor-pointer"
          // onBlur={() => {
          //   setSubMenuTrigger(!subMenuTrigger);
          // }}
          onClick={() => {
            setSubMenuTrigger(!subMenuTrigger);
          }}
        >
          <span>{data.title}</span>

          <MdOutlineKeyboardArrowDown />
        </div>
        <div
          className={`${
            subMenuTrigger && "drop-shadow-md"
          } absolute top-[130%] z-[30] bg-root`}
        >
          {subMenuTrigger && (
            <div
              className={` space-y-[50px] brightness-125 text-left rounded-lg ${
                data.title === "Visit" && "w-[170px] px-10 py-3"
              } ${data.title === "Study" && "w-[200px] px-10 py-3"} ${
                data.title === "Migrate" && "w-[300px] px-10 py-3"
              }`}
            >
              {data.subMenu.map((item, index) => (
                <div
                  className="text-left text-secondary hover:text-primary cursor-pointer text-[32px] p-2"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IndividualService;
