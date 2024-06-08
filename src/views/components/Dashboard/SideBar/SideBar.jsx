import { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RiPagesLine, RiUserStarLine } from "react-icons/ri";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiUser } from "react-icons/fi";
import { MdLeaderboard, MdOutlineMail } from "react-icons/md";
import {
  IoKeyOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { removeFromLocale } from "../../../../utils/helper";
import { AppContext } from "../../../../utils/contexts/AppContext";
import { FaUser } from "react-icons/fa6";
function SideBar() {
  const [open, setOpen] = useState(false);
  const { loggedUserData } = useContext(AppContext);
  const [subMenuItem, setSubMenuItem] = useState("");
  const location = window.location.pathname;
  const navigate = useNavigate();
  console.log(loggedUserData);

  return (
    <div className=" h-full w-full">
      <div
        className={`flex flex-col ${
          open ? " w-[50%]" : "w-full"
        } duration-300 h-full`}
      >
        {/* first portion */}
        <div className={`${!open ? "px-[10%]" : "px-4"} `}>
          {/* Sidebar open button */}
          <div className="flex justify-end text-[36px]">
            {open ? (
              <div
                onClick={() => setOpen(!open)}
                className="text-secondary hover:text-primary duration-200 cursor-pointer"
              >
                <IoIosArrowForward />
              </div>
            ) : (
              <div
                onClick={() => setOpen(!open)}
                className="text-secondary hover:text-primary duration-200 cursor-pointer"
              >
                <IoIosArrowBack />
              </div>
            )}
          </div>
          {/* Side bar Menu */}
          <div
            className={`w-full flex flex-col ${
              !open
                ? "justify-start items-start"
                : "justify-center items-center"
            } space-y-8`}
          >
            <div className={`${!open && "w-full"}`}>
              {!open ? (
                <div
                  onClick={() => {
                    setSubMenuItem("");
                    navigate("/dashboard");
                  }}
                  className="flex cursor-pointer no-underline items-center text-[24px] space-x-[32px] font-monrope text-primary"
                >
                  <svg
                    width="35"
                    height="33"
                    viewBox="0 0 35 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3351 0.435676C16.6562 0.155012 17.0706 0 17.5 0C17.9294 0 18.3438 0.155012 18.6649 0.435676L34.4539 14.252C34.784 14.5607 34.9792 14.9835 34.9984 15.4313C35.0176 15.879 34.8593 16.3166 34.5569 16.6515C34.2544 16.9865 33.8316 17.1926 33.3776 17.2263C32.9237 17.26 32.4742 17.1187 32.1242 16.8322L31.5347 16.3193V29.3584C31.5347 30.2745 31.165 31.1531 30.507 31.8008C29.849 32.4486 28.9566 32.8125 28.026 32.8125H6.97397C6.04341 32.8125 5.15096 32.4486 4.49296 31.8008C3.83495 31.1531 3.46529 30.2745 3.46529 29.3584V16.3193L2.87583 16.8322C2.52577 17.1187 2.07629 17.26 1.62236 17.2263C1.16842 17.1926 0.745568 16.9865 0.443131 16.6515C0.140694 16.3166 -0.0176444 15.879 0.0015639 15.4313C0.0207722 14.9835 0.216023 14.5607 0.546071 14.252L16.3351 0.435676ZM6.97397 13.2451V29.3584H12.237V20.7232C12.237 20.2652 12.4218 19.8259 12.7508 19.502C13.0798 19.1781 13.526 18.9962 13.9913 18.9962H21.0087C21.474 18.9962 21.9202 19.1781 22.2492 19.502C22.5782 19.8259 22.763 20.2652 22.763 20.7232V29.3584H28.026V13.2469L17.5 4.03655L6.97397 13.2451ZM19.2543 29.3584V22.4503H15.7457V29.3584H19.2543Z"
                      fill={location === "/dashboard" ? "#D9B658" : "#FAFAFA"}
                    />
                  </svg>
                  <span
                    className={`${
                      location === "/dashboard"
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                  >
                    Dashboard
                  </span>
                </div>
              ) : (
                <div
                  onClick={() => navigate("/dashboard")}
                  className={`flex items-center cursor-pointer text-[24px] space-x-[32px] font-monrope ${
                    location === "/dashboard"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  <svg
                    width="35"
                    height="33"
                    viewBox="0 0 35 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3351 0.435676C16.6562 0.155012 17.0706 0 17.5 0C17.9294 0 18.3438 0.155012 18.6649 0.435676L34.4539 14.252C34.784 14.5607 34.9792 14.9835 34.9984 15.4313C35.0176 15.879 34.8593 16.3166 34.5569 16.6515C34.2544 16.9865 33.8316 17.1926 33.3776 17.2263C32.9237 17.26 32.4742 17.1187 32.1242 16.8322L31.5347 16.3193V29.3584C31.5347 30.2745 31.165 31.1531 30.507 31.8008C29.849 32.4486 28.9566 32.8125 28.026 32.8125H6.97397C6.04341 32.8125 5.15096 32.4486 4.49296 31.8008C3.83495 31.1531 3.46529 30.2745 3.46529 29.3584V16.3193L2.87583 16.8322C2.52577 17.1187 2.07629 17.26 1.62236 17.2263C1.16842 17.1926 0.745568 16.9865 0.443131 16.6515C0.140694 16.3166 -0.0176444 15.879 0.0015639 15.4313C0.0207722 14.9835 0.216023 14.5607 0.546071 14.252L16.3351 0.435676ZM6.97397 13.2451V29.3584H12.237V20.7232C12.237 20.2652 12.4218 19.8259 12.7508 19.502C13.0798 19.1781 13.526 18.9962 13.9913 18.9962H21.0087C21.474 18.9962 21.9202 19.1781 22.2492 19.502C22.5782 19.8259 22.763 20.2652 22.763 20.7232V29.3584H28.026V13.2469L17.5 4.03655L6.97397 13.2451ZM19.2543 29.3584V22.4503H15.7457V29.3584H19.2543Z"
                      fill={location === "/dashboard" ? "#D9B658" : "#FAFAFA"}
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* expandable design clients */}
            <div className={`${!open && "w-full"}`}>
              {!open ? (
                <div className="w-full flex flex-col justify-start items-start ">
                  <div
                    onClick={() => {
                      if (subMenuItem === "") {
                        setSubMenuItem("clients");
                        // navigate("/dashboard/clients");
                      } else {
                        setSubMenuItem("");
                      }
                    }}
                    className="flex items-center text-[24px] space-x-[32px] font-monrope text-primary cursor-pointer"
                  >
                    <svg
                      width="35"
                      height="36"
                      viewBox="0 0 35 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.498 28.5672L18.6118 24.7527C21.1712 22.7391 21.8663 18.7819 21.8663 16.5632V11.9448C21.8663 8.88669 17.803 5.48075 13.7217 5.48075C9.64144 5.48075 5.47042 8.88723 5.47042 11.9448V16.5632C5.47042 18.5806 6.32406 22.662 8.90972 24.7352L1.8457 28.5671C1.8457 28.5671 0 29.3896 0 30.415V33.1866C0 34.2065 0.827935 35.0345 1.8457 35.0345H25.498C26.5168 35.0345 27.3448 34.2065 27.3448 33.1866V30.415C27.3448 29.3279 25.498 28.5671 25.498 28.5671L25.498 28.5672ZM25.1574 32.847H2.18757V30.8914C2.34452 30.7771 2.56382 30.6448 2.73663 30.5655C2.788 30.5419 2.83941 30.5173 2.88808 30.4894L9.95261 26.658C10.5968 26.3086 11.0239 25.6605 11.089 24.931C11.1541 24.2015 10.8495 23.4867 10.2786 23.0284C8.44433 21.5579 7.65847 18.3007 7.65847 16.5633V11.9449C7.65847 10.3737 10.6203 7.66835 13.7222 7.66835C16.8815 7.66835 19.6793 10.3366 19.6793 11.9449V16.5633C19.6793 18.2766 19.1472 21.548 17.26 23.0328C16.9755 23.2568 16.7509 23.5478 16.6065 23.8799C16.462 24.2119 16.402 24.5745 16.432 24.9354C16.4624 25.296 16.5818 25.6435 16.7793 25.9468C16.9769 26.2501 17.2465 26.4997 17.564 26.6734L24.4503 30.4878C24.511 30.5212 24.5881 30.5573 24.6521 30.5852C24.8134 30.6535 25.0119 30.7678 25.1574 30.8685V32.847ZM33.1533 23.1208L26.1647 19.3064C28.7241 17.2928 29.522 13.3356 29.522 11.1169V6.49852C29.522 3.44039 25.3564 0 21.2751 0C18.6228 0 15.9108 1.44211 14.3325 3.28894C15.2327 3.34469 16.2253 3.34582 17.0828 3.61925C18.235 2.72183 19.693 2.18808 21.2751 2.18808C24.4344 2.18808 27.3345 4.89016 27.3345 6.4991V11.1175C27.3345 12.8308 26.7001 16.1022 24.8128 17.587C24.5284 17.811 24.3038 18.102 24.1593 18.434C24.0149 18.7661 23.9549 19.1287 23.9849 19.4896C24.0153 19.8502 24.1347 20.1977 24.3322 20.501C24.5298 20.8043 24.7994 21.0539 25.1169 21.2275L32.1055 25.042C32.1662 25.0753 32.2433 25.1114 32.3073 25.1393C32.4686 25.2077 32.6671 25.322 32.8125 25.4226V27.3678H28.3971C29.0637 27.871 29.2655 28.5907 29.5242 29.5553H33.1538C34.1726 29.5553 35.0005 28.7274 35.0005 27.7075V24.9698C35 23.8815 33.1532 23.1208 33.1532 23.1208L33.1533 23.1208Z"
                        fill={
                          location === "/dashboard/clients/addclient" ||
                          location === "/dashboard/clients/manageclient"
                            ? "#D9B658"
                            : "#FAFAFA"
                        }
                      />
                    </svg>
                    <span
                      className={`${
                        location === "/dashboard/clients/addclient" ||
                        location === "/dashboard/clients/manageclient"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    >
                      Clients
                    </span>
                  </div>
                  {subMenuItem === "clients" && (
                    <div className="flex flex-col  items-start mt-3 pl-10 animate__animated subMenuAnimation animate__fadeInDown">
                      <div
                        onClick={() =>
                          navigate("/dashboard/clients/manageclient")
                        }
                        className={`font-monrope text-[18px] py-2 hover:text-primary duration-150 cursor-pointer ${
                          location === "/dashboard/clients/manageclient"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      >
                        - - All Client
                      </div>{" "}
                      <div
                        onClick={() => navigate("/dashboard/clients/addclient")}
                        className={`font-monrope text-[18px] py-2 hover:text-primary duration-150 cursor-pointer ${
                          location === "/dashboard/clients/addclient"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      >
                        - - Add Client
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOpen(!open);
                    setSubMenuItem("clients");
                  }}
                  className="flex items-center text-[24px] space-x-[32px] font-monrope text-primary"
                >
                  <svg
                    width="35"
                    height="36"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.498 28.5672L18.6118 24.7527C21.1712 22.7391 21.8663 18.7819 21.8663 16.5632V11.9448C21.8663 8.88669 17.803 5.48075 13.7217 5.48075C9.64144 5.48075 5.47042 8.88723 5.47042 11.9448V16.5632C5.47042 18.5806 6.32406 22.662 8.90972 24.7352L1.8457 28.5671C1.8457 28.5671 0 29.3896 0 30.415V33.1866C0 34.2065 0.827935 35.0345 1.8457 35.0345H25.498C26.5168 35.0345 27.3448 34.2065 27.3448 33.1866V30.415C27.3448 29.3279 25.498 28.5671 25.498 28.5671L25.498 28.5672ZM25.1574 32.847H2.18757V30.8914C2.34452 30.7771 2.56382 30.6448 2.73663 30.5655C2.788 30.5419 2.83941 30.5173 2.88808 30.4894L9.95261 26.658C10.5968 26.3086 11.0239 25.6605 11.089 24.931C11.1541 24.2015 10.8495 23.4867 10.2786 23.0284C8.44433 21.5579 7.65847 18.3007 7.65847 16.5633V11.9449C7.65847 10.3737 10.6203 7.66835 13.7222 7.66835C16.8815 7.66835 19.6793 10.3366 19.6793 11.9449V16.5633C19.6793 18.2766 19.1472 21.548 17.26 23.0328C16.9755 23.2568 16.7509 23.5478 16.6065 23.8799C16.462 24.2119 16.402 24.5745 16.432 24.9354C16.4624 25.296 16.5818 25.6435 16.7793 25.9468C16.9769 26.2501 17.2465 26.4997 17.564 26.6734L24.4503 30.4878C24.511 30.5212 24.5881 30.5573 24.6521 30.5852C24.8134 30.6535 25.0119 30.7678 25.1574 30.8685V32.847ZM33.1533 23.1208L26.1647 19.3064C28.7241 17.2928 29.522 13.3356 29.522 11.1169V6.49852C29.522 3.44039 25.3564 0 21.2751 0C18.6228 0 15.9108 1.44211 14.3325 3.28894C15.2327 3.34469 16.2253 3.34582 17.0828 3.61925C18.235 2.72183 19.693 2.18808 21.2751 2.18808C24.4344 2.18808 27.3345 4.89016 27.3345 6.4991V11.1175C27.3345 12.8308 26.7001 16.1022 24.8128 17.587C24.5284 17.811 24.3038 18.102 24.1593 18.434C24.0149 18.7661 23.9549 19.1287 23.9849 19.4896C24.0153 19.8502 24.1347 20.1977 24.3322 20.501C24.5298 20.8043 24.7994 21.0539 25.1169 21.2275L32.1055 25.042C32.1662 25.0753 32.2433 25.1114 32.3073 25.1393C32.4686 25.2077 32.6671 25.322 32.8125 25.4226V27.3678H28.3971C29.0637 27.871 29.2655 28.5907 29.5242 29.5553H33.1538C34.1726 29.5553 35.0005 28.7274 35.0005 27.7075V24.9698C35 23.8815 33.1532 23.1208 33.1532 23.1208L33.1533 23.1208Z"
                      fill={
                        location === "/dashboard/clients/addclient" ||
                        location === "/dashboard/clients/manageclient"
                          ? "#D9B658"
                          : "#FAFAFA"
                      }
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* non expandable design leads*/}
            <div className={`${!open && "w-full"}`}>
              {!open ? (
                <div className="w-full flex flex-col justify-start items-start ">
                  <div
                    onClick={() => {
                      if (subMenuItem === "") {
                        setSubMenuItem("leads");
                        // navigate("/dashboard/clients");
                      } else {
                        setSubMenuItem("");
                      }
                    }}
                    className="flex items-center text-[24px] space-x-[32px] font-monrope text-primary cursor-pointer"
                  >
                    <MdLeaderboard
                      className="text-[40px]"
                      style={{
                        color:
                          location === "/dashboard/leads/addlead" ||
                          location === "/dashboard/leads/manageleads"
                            ? "#D9B658"
                            : "#FAFAFA",
                      }}
                    />
                    <span
                      className={`${
                        location === "/dashboard/leads/addlead" ||
                        location === "/dashboard/leads/manageleads"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    >
                      Leads
                    </span>
                  </div>
                  {subMenuItem === "leads" && (
                    <div className="flex flex-col  items-start mt-3 pl-10 animate__animated subMenuAnimation animate__fadeInDown">
                      <div
                        onClick={() => navigate("/dashboard/leads/manageleads")}
                        className={`font-monrope text-[18px] py-2 hover:text-primary duration-150 cursor-pointer ${
                          location === "/dashboard/leads/manageleads"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      >
                        - - All Leads
                      </div>
                      <div
                        onClick={() => navigate("/dashboard/leads/addlead")}
                        className={`font-monrope text-[18px] py-2 hover:text-primary duration-150 cursor-pointer ${
                          location === "/dashboard/leads/addlead"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      >
                        - - Add Lead
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOpen(!open);
                    setSubMenuItem("leads");
                  }}
                  className="flex items-center text-[24px] space-x-[32px] font-monrope text-primary"
                >
                  <MdLeaderboard
                    className="text-[40px]"
                    style={{
                      color:
                        location === "/dashboard/leads/addlead" ||
                        location === "/dashboard/leads/manageleads"
                          ? "#D9B658"
                          : "#FAFAFA",
                    }}
                  />
                </div>
              )}
            </div>
            {/* newsletter option */}
            <div>
              {!open ? (
                <div
                  onClick={() => {
                    setSubMenuItem("");
                    navigate("/dashboard/email");
                  }}
                  className={`flex cursor-pointer items-center text-[24px] space-x-[32px] font-monrope ${
                    location === "/dashboard/email"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  <MdOutlineMail className="text-[40px]" />

                  <span>Email</span>
                </div>
              ) : (
                <div
                  className={`flex items-center text-[24px] space-x-[32px] font-monrope  ${
                    location === "/dashboard/email"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  <MdOutlineMail
                    onClick={() => navigate("/dashboard/email")}
                    className="text-[40px] cursor-pointer"
                  />
                </div>
              )}
            </div>
            {/* LCM (Landing Content Management)*/}
            <div>
              {!open ? (
                <div
                  onClick={() => {
                    setSubMenuItem("");
                    navigate("/dashboard/lcm");
                  }}
                  className={`flex cursor-pointer items-center text-[24px] space-x-[32px] font-monrope ${
                    location === "/dashboard/l"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  <RiPagesLine className="text-[40px]" />

                  <span>Frontend Management</span>
                </div>
              ) : (
                <div
                  className={`flex items-center text-[24px] space-x-[32px] font-monrope  ${
                    location === "/dashboard/lcm"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  <RiPagesLine
                    onClick={() => navigate("/dashboard/lcm")}
                    className="text-[40px] cursor-pointer"
                  />
                </div>
              )}
            </div>
            {/* <IoNotificationsOutline /> */}
            <div>
              {!open ? (
                <div
                  onClick={() => {
                    setSubMenuItem("");
                    navigate("/dashboard/notifications");
                  }}
                  className={`flex cursor-pointer items-center text-[24px] space-x-[32px] font-monrope ${
                    location === "/dashboard/notifications"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  <IoNotificationsOutline className="text-[40px]" />

                  <span>Notifications</span>
                </div>
              ) : (
                <div
                  className={`flex items-center text-[24px] space-x-[32px] font-monrope  ${
                    location === "/dashboard/notifications"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  <IoNotificationsOutline
                    onClick={() => navigate("/dashboard/notifications")}
                    className="text-[40px] cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* second portion */}
        <div
          className={` flex flex-1 flex-col pb-10 ${
            !open
              ? "justify-end items-start px-[10%]"
              : "justify-end items-center px-4"
          } space-y-8`}
        >
          {/* Settings */}
          <div className={`${!open && "w-full"}`}>
            {!open ? (
              <div className="w-full flex flex-col justify-start items-start ">
                <div
                  onClick={() => {
                    if (subMenuItem === "") {
                      setSubMenuItem("settings");
                    } else {
                      setSubMenuItem("");
                    }
                  }}
                  className={`flex cursor-pointer items-center text-[24px] space-x-[32px] font-monrope ${
                    location === "/dashboard/settings/user-management" ||
                    location === "/dashboard/settings/role" ||
                    location === "/dashboard/settings/permission" ||
                    location === "/dashboard/settings/config"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  <IoSettingsOutline className="text-[40px] " />
                  <span>Settings</span>
                </div>
                {subMenuItem === "settings" && (
                  <div className="flex flex-col  items-start mt-3 pl-10 animate__animated subMenuAnimation animate__fadeInDown">
                    <div
                      onClick={() =>
                        navigate("/dashboard/settings/user-management")
                      }
                      className={`font-monrope text-[22px] py-2 hover:text-primary duration-150 cursor-pointer flex items-center ${
                        location === "/dashboard/settings/user-management"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    >
                      <FiUser className="mr-2" /> User Management
                    </div>
                    <div
                      onClick={() => navigate("/dashboard/settings/role")}
                      className={`font-monrope text-[22px] py-2 hover:text-primary duration-150 cursor-pointer flex items-center ${
                        location === "/dashboard/settings/role"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    >
                      <RiUserStarLine className="mr-2" /> Roles
                    </div>
                    <div
                      onClick={() => navigate("/dashboard/settings/permission")}
                      className={`font-monrope text-[22px] py-2 hover:text-primary duration-150 cursor-pointer flex items-center ${
                        location === "/dashboard/settings/permission"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    >
                      <IoKeyOutline className="mr-2 text-[18px]" /> Permissions
                    </div>
                    <div
                      onClick={() => navigate("/dashboard/settings/config")}
                      className={`font-monrope text-[22px] py-2 hover:text-primary duration-150 cursor-pointer flex items-center ${
                        location === "/dashboard/settings/config"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    >
                      <HiOutlineWrenchScrewdriver className="mr-2" /> Config
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                onClick={() => {
                  setOpen(!open);
                  setSubMenuItem("settings");
                }}
                className={`flex items-center text-[24px] space-x-[32px] font-monrope cursor-pointer ${
                  location === "/dashboard/settings/role" ||
                  location === "/dashboard/settings/user-management" ||
                  location === "/dashboard/settings/permission" ||
                  location === "/dashboard/settings/config"
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                <IoSettingsOutline className="text-[40px] " />
              </div>
            )}
          </div>
          {/* logout Button */}
          <div>
            {!open ? (
              <div
                onClick={() => {
                  removeFromLocale();
                  window.location.reload();
                }}
                className="flex cursor-pointer items-center text-[24px] space-x-[32px] font-monrope text-secondary hover:text-primary"
              >
                <FiLogOut className="text-[40px] " />

                <span>Logout</span>
              </div>
            ) : (
              <div className="flex items-center text-[24px] space-x-[32px] font-monrope text-secondary hover:text-primary cursor-pointer">
                <FiLogOut className="text-[40px]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
