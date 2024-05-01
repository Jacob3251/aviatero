import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import "animate.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
function SideBar() {
  const [open, setOpen] = useState(false);
  const [subMenuItem, setSubMenuItem] = useState("");
  const location = window.location.pathname;
  const navigate = useNavigate();
  console.log(location);

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
            {/* expandable design */}
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
                        onClick={() => navigate("/dashboard/clients/addclient")}
                        className={`font-monrope text-[18px] py-2 hover:text-primary duration-150 cursor-pointer ${
                          location === "/dashboard/clients/addclient"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      >
                        - - Add Client
                      </div>
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
                        - - Manage Client
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
            {/* non expandable design */}
            <div>
              {!open ? (
                <div
                  onClick={() => {
                    setSubMenuItem("");
                    navigate("/dashboard/notifications");
                  }}
                  className="flex cursor-pointer items-center text-[24px] space-x-[32px] font-monrope"
                >
                  <svg
                    width="30"
                    height="40"
                    viewBox="0 0 30 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.59701 11.2777C3.72988 9.16094 4.66447 7.17437 6.21051 5.72242C7.75656 4.27048 9.79783 3.46232 11.9188 3.46246H13.0208V1.97855C13.0208 1.4538 13.2293 0.950552 13.6003 0.579503C13.9714 0.208453 14.4746 0 14.9994 0C15.5241 0 16.0274 0.208453 16.3984 0.579503C16.7695 0.950552 16.9779 1.4538 16.9779 1.97855V3.46246H18.08C20.2009 3.46232 22.2422 4.27048 23.7882 5.72242C25.3343 7.17437 26.2689 9.16094 26.4017 11.2777L26.839 18.2699C27.0056 20.9359 27.9008 23.505 29.4269 25.6974C29.7422 26.1506 29.9349 26.6777 29.9862 27.2274C30.0374 27.7771 29.9456 28.3308 29.7195 28.8345C29.4935 29.3382 29.1409 29.7748 28.6961 30.1019C28.2513 30.429 27.7295 30.6354 27.1813 30.7011L20.4404 31.5083V33.6353C20.4404 35.0783 19.8671 36.4623 18.8467 37.4827C17.8263 38.503 16.4424 39.0763 14.9994 39.0763C13.5563 39.0763 12.1724 38.503 11.152 37.4827C10.1316 36.4623 9.55836 35.0783 9.55836 33.6353V31.5083L2.81746 30.6991C2.26959 30.6333 1.74807 30.4268 1.30356 30.0998C0.85906 29.7729 0.506684 29.3365 0.28067 28.8331C0.0546555 28.3297 -0.0373122 27.7764 0.0137022 27.2269C0.0647165 26.6775 0.256979 26.1505 0.571809 25.6974C2.09786 23.505 2.99301 20.9359 3.15975 18.2699L3.59701 11.2777ZM11.9188 6.43027C10.5527 6.43011 9.23798 6.95058 8.24219 7.88571C7.24641 8.82084 6.64445 10.1003 6.55889 11.4637L6.12361 18.4559C5.92248 21.6631 4.84531 24.7536 3.00938 27.391C2.98656 27.4238 2.97261 27.4619 2.96889 27.5017C2.96516 27.5414 2.97179 27.5815 2.98812 27.6179C3.00445 27.6544 3.02993 27.6859 3.06208 27.7096C3.09424 27.7333 3.13197 27.7483 3.17162 27.7531L10.5654 28.6414C13.5115 28.9936 16.4872 28.9936 19.4333 28.6414L26.8271 27.7531C26.8668 27.7483 26.9045 27.7333 26.9366 27.7096C26.9688 27.6859 26.9943 27.6544 27.0106 27.6179C27.0269 27.5815 27.0336 27.5414 27.0298 27.5017C27.0261 27.4619 27.0122 27.4238 26.9894 27.391C25.154 24.7534 24.0775 21.6629 23.8771 18.4559L23.4398 11.4637C23.3543 10.1003 22.7523 8.82084 21.7565 7.88571C20.7608 6.95058 19.446 6.43011 18.08 6.43027H11.9188ZM14.9994 36.1085C13.6342 36.1085 12.5262 35.0005 12.5262 33.6353V32.1514H17.4725V33.6353C17.4725 35.0005 16.3646 36.1085 14.9994 36.1085Z"
                      fill={
                        location === "/dashboard/notifications"
                          ? "#D9B658"
                          : "#FAFAFA"
                      }
                    />
                  </svg>

                  <span
                    className={`${
                      location === "/dashboard/notifications"
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                  >
                    Notifications
                  </span>
                </div>
              ) : (
                <div className="flex items-center text-[24px] space-x-[32px] font-monrope text-primary">
                  <svg
                    onClick={() => navigate("/dashboard/notifications")}
                    className="cursor-pointer"
                    width="30"
                    height="40"
                    viewBox="0 0 30 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.59701 11.2777C3.72988 9.16094 4.66447 7.17437 6.21051 5.72242C7.75656 4.27048 9.79783 3.46232 11.9188 3.46246H13.0208V1.97855C13.0208 1.4538 13.2293 0.950552 13.6003 0.579503C13.9714 0.208453 14.4746 0 14.9994 0C15.5241 0 16.0274 0.208453 16.3984 0.579503C16.7695 0.950552 16.9779 1.4538 16.9779 1.97855V3.46246H18.08C20.2009 3.46232 22.2422 4.27048 23.7882 5.72242C25.3343 7.17437 26.2689 9.16094 26.4017 11.2777L26.839 18.2699C27.0056 20.9359 27.9008 23.505 29.4269 25.6974C29.7422 26.1506 29.9349 26.6777 29.9862 27.2274C30.0374 27.7771 29.9456 28.3308 29.7195 28.8345C29.4935 29.3382 29.1409 29.7748 28.6961 30.1019C28.2513 30.429 27.7295 30.6354 27.1813 30.7011L20.4404 31.5083V33.6353C20.4404 35.0783 19.8671 36.4623 18.8467 37.4827C17.8263 38.503 16.4424 39.0763 14.9994 39.0763C13.5563 39.0763 12.1724 38.503 11.152 37.4827C10.1316 36.4623 9.55836 35.0783 9.55836 33.6353V31.5083L2.81746 30.6991C2.26959 30.6333 1.74807 30.4268 1.30356 30.0998C0.85906 29.7729 0.506684 29.3365 0.28067 28.8331C0.0546555 28.3297 -0.0373122 27.7764 0.0137022 27.2269C0.0647165 26.6775 0.256979 26.1505 0.571809 25.6974C2.09786 23.505 2.99301 20.9359 3.15975 18.2699L3.59701 11.2777ZM11.9188 6.43027C10.5527 6.43011 9.23798 6.95058 8.24219 7.88571C7.24641 8.82084 6.64445 10.1003 6.55889 11.4637L6.12361 18.4559C5.92248 21.6631 4.84531 24.7536 3.00938 27.391C2.98656 27.4238 2.97261 27.4619 2.96889 27.5017C2.96516 27.5414 2.97179 27.5815 2.98812 27.6179C3.00445 27.6544 3.02993 27.6859 3.06208 27.7096C3.09424 27.7333 3.13197 27.7483 3.17162 27.7531L10.5654 28.6414C13.5115 28.9936 16.4872 28.9936 19.4333 28.6414L26.8271 27.7531C26.8668 27.7483 26.9045 27.7333 26.9366 27.7096C26.9688 27.6859 26.9943 27.6544 27.0106 27.6179C27.0269 27.5815 27.0336 27.5414 27.0298 27.5017C27.0261 27.4619 27.0122 27.4238 26.9894 27.391C25.154 24.7534 24.0775 21.6629 23.8771 18.4559L23.4398 11.4637C23.3543 10.1003 22.7523 8.82084 21.7565 7.88571C20.7608 6.95058 19.446 6.43011 18.08 6.43027H11.9188ZM14.9994 36.1085C13.6342 36.1085 12.5262 35.0005 12.5262 33.6353V32.1514H17.4725V33.6353C17.4725 35.0005 16.3646 36.1085 14.9994 36.1085Z"
                      fill={
                        location === "/dashboard/notifications"
                          ? "#D9B658"
                          : "#FAFAFA"
                      }
                    />
                  </svg>
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
            <div className={`${!open && "w-full"}`}>
              {!open ? (
                <div className="w-full flex flex-col justify-start items-start ">
                  <div
                    onClick={() => {
                      if (subMenuItem === "") {
                        setSubMenuItem("lcm");
                        // navigate("/dashboard/clients");
                      } else {
                        setSubMenuItem("");
                      }
                    }}
                    className={`flex cursor-pointer items-center text-[24px] space-x-[32px] font-monrope ${
                      location === "/dashboard/lcm/option1" ||
                      location === "/dashboard/lcm/option2"
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                  >
                    <RiPagesLine className="text-[40px]" />
                    <span>Frontend Management</span>
                  </div>
                  {subMenuItem === "lcm" && (
                    <div className="flex flex-col  items-start mt-3 pl-10 animate__animated subMenuAnimation animate__fadeInDown">
                      <div
                        onClick={() => navigate("/dashboard/lcm/option1")}
                        className={`font-monrope text-[18px] py-2 hover:text-primary duration-150 cursor-pointer ${
                          location === "/dashboard/lcm/option1"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      >
                        - - Option 1
                      </div>
                      <div
                        onClick={() => navigate("/dashboard/lcm/option2")}
                        className={`font-monrope text-[18px] py-2 hover:text-primary duration-150 cursor-pointer ${
                          location === "/dashboard/lcm/option2"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      >
                        - - Option 2
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOpen(!open);
                    setSubMenuItem("lcm");
                  }}
                  className={`flex items-center text-[24px] space-x-[32px] font-monrope cursor-pointer ${
                    location === "/dashboard/lcm/option1" ||
                    location === "/dashboard/lcm/option2"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                >
                  <RiPagesLine className="text-[40px]" />
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
          <div>
            {!open ? (
              <div
                onClick={() => {
                  setSubMenuItem("");
                  navigate("/dashboard/settings");
                }}
                className={`flex cursor-pointer items-center text-[24px] space-x-[32px] font-monrope hover:text-primary ${
                  location === "/dashboard/settings"
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                <IoSettingsOutline className="text-[40px] " />

                <span>Settings</span>
              </div>
            ) : (
              <div
                onClick={() => navigate("/dashboard/settings")}
                className={`flex items-center text-[24px] space-x-[32px] font-monrope text-primary ${
                  location === "/dashboard/settings"
                    ? "text-primary"
                    : "text-secondary"
                } cursor-pointer`}
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
                  setSubMenuItem("");
                  navigate("/dashboard/notifications");
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
