import { Link, Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/SideBar/SideBar";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import { Helmet } from "react-helmet";
import ModalComp from "../components/Modals/Default";
import "animate.css";
import { useContext, useState } from "react";
import { AppContext } from "../../utils/contexts/AppContext";
import "animate.css";
import {
  IoClose,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import navlogo from "../../assets/images/Logos/branding.png";
import Loader from "../components/Reusable/Loader/Loader";
import { MdLeaderboard, MdOutlineMail } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { removeFromLocale } from "../../utils/helper";
function DashboardBoard({ children }) {
  const {
    showModal,
    setShowModal,
    siteLoading,
    siteConfig,
    openDashboardMenu,
    setOpenDashboardMenu,
  } = useContext(AppContext);
  const [showMulti, setShowMulti] = useState("");
  return (
    <>
      {siteLoading === false ? (
        <div className="w-full h-full max-h-screen max-w-[1440px] mx-auto relative z-0">
          <Helmet>
            <title>Dashboard - Aviate Abroad</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <DashboardNavbar></DashboardNavbar>

          <div className="w-full absolute top-[124px] lg:top-[90px]  h-[calc(100vh_-_90px)] flex">
            <div className="hidden lg:block lg:w-1/4 h-full">
              <SideBar></SideBar>
            </div>
            <div className="w-full h-full lg:w-3/4  ">
              <Outlet context={[siteConfig]} />
            </div>
          </div>

          <div
            className={`bg-root bg-opacity-95 text-[24px] z-[1000] fixed lg:hidden top-0 duration-300 ${
              openDashboardMenu === false ? "-left-[100%]" : "left-0"
            } w-full h-screen flex flex-col justify-start items-start p-10`}
          >
            <div className="flex justify-between w-full">
              <div className="h-[50px] flex items-center">
                {/* <img src={navlogo} className="h-full aspect-auto" alt="" /> */}
              </div>
              <button
                onClick={() => {
                  setOpenDashboardMenu(!openDashboardMenu);
                  setShowMulti("");
                }}
              >
                <IoClose className="text-[32px] text-white" />
              </button>
            </div>
            <div className="flex-1 flex-col w-full p-5 space-y-5 overflow-y-scroll hidden-scrollbar">
              <div className="py-2">
                <Link
                  onClick={() => {
                    setOpenDashboardMenu(!openDashboardMenu);
                    setShowMulti("");
                  }}
                  to="/dashboard"
                  className="flex items-center space-x-2    text-primary text-[24px] font-monrope"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 35 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3351 0.435676C16.6562 0.155012 17.0706 0 17.5 0C17.9294 0 18.3438 0.155012 18.6649 0.435676L34.4539 14.252C34.784 14.5607 34.9792 14.9835 34.9984 15.4313C35.0176 15.879 34.8593 16.3166 34.5569 16.6515C34.2544 16.9865 33.8316 17.1926 33.3776 17.2263C32.9237 17.26 32.4742 17.1187 32.1242 16.8322L31.5347 16.3193V29.3584C31.5347 30.2745 31.165 31.1531 30.507 31.8008C29.849 32.4486 28.9566 32.8125 28.026 32.8125H6.97397C6.04341 32.8125 5.15096 32.4486 4.49296 31.8008C3.83495 31.1531 3.46529 30.2745 3.46529 29.3584V16.3193L2.87583 16.8322C2.52577 17.1187 2.07629 17.26 1.62236 17.2263C1.16842 17.1926 0.745568 16.9865 0.443131 16.6515C0.140694 16.3166 -0.0176444 15.879 0.0015639 15.4313C0.0207722 14.9835 0.216023 14.5607 0.546071 14.252L16.3351 0.435676ZM6.97397 13.2451V29.3584H12.237V20.7232C12.237 20.2652 12.4218 19.8259 12.7508 19.502C13.0798 19.1781 13.526 18.9962 13.9913 18.9962H21.0087C21.474 18.9962 21.9202 19.1781 22.2492 19.502C22.5782 19.8259 22.763 20.2652 22.763 20.7232V29.3584H28.026V13.2469L17.5 4.03655L6.97397 13.2451ZM19.2543 29.3584V22.4503H15.7457V29.3584H19.2543Z"
                      fill="#D9B658"
                    />
                  </svg>{" "}
                  <span>Dashboard</span>
                </Link>
              </div>
              <div className="py-2">
                <div
                  onClick={() => {
                    setShowMulti("client");
                  }}
                  className=" flex items-center space-x-2   text-primary text-[24px] font-monrope"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.498 28.5672L18.6118 24.7527C21.1712 22.7391 21.8663 18.7819 21.8663 16.5632V11.9448C21.8663 8.88669 17.803 5.48075 13.7217 5.48075C9.64144 5.48075 5.47042 8.88723 5.47042 11.9448V16.5632C5.47042 18.5806 6.32406 22.662 8.90972 24.7352L1.8457 28.5671C1.8457 28.5671 0 29.3896 0 30.415V33.1866C0 34.2065 0.827935 35.0345 1.8457 35.0345H25.498C26.5168 35.0345 27.3448 34.2065 27.3448 33.1866V30.415C27.3448 29.3279 25.498 28.5671 25.498 28.5671L25.498 28.5672ZM25.1574 32.847H2.18757V30.8914C2.34452 30.7771 2.56382 30.6448 2.73663 30.5655C2.788 30.5419 2.83941 30.5173 2.88808 30.4894L9.95261 26.658C10.5968 26.3086 11.0239 25.6605 11.089 24.931C11.1541 24.2015 10.8495 23.4867 10.2786 23.0284C8.44433 21.5579 7.65847 18.3007 7.65847 16.5633V11.9449C7.65847 10.3737 10.6203 7.66835 13.7222 7.66835C16.8815 7.66835 19.6793 10.3366 19.6793 11.9449V16.5633C19.6793 18.2766 19.1472 21.548 17.26 23.0328C16.9755 23.2568 16.7509 23.5478 16.6065 23.8799C16.462 24.2119 16.402 24.5745 16.432 24.9354C16.4624 25.296 16.5818 25.6435 16.7793 25.9468C16.9769 26.2501 17.2465 26.4997 17.564 26.6734L24.4503 30.4878C24.511 30.5212 24.5881 30.5573 24.6521 30.5852C24.8134 30.6535 25.0119 30.7678 25.1574 30.8685V32.847ZM33.1533 23.1208L26.1647 19.3064C28.7241 17.2928 29.522 13.3356 29.522 11.1169V6.49852C29.522 3.44039 25.3564 0 21.2751 0C18.6228 0 15.9108 1.44211 14.3325 3.28894C15.2327 3.34469 16.2253 3.34582 17.0828 3.61925C18.235 2.72183 19.693 2.18808 21.2751 2.18808C24.4344 2.18808 27.3345 4.89016 27.3345 6.4991V11.1175C27.3345 12.8308 26.7001 16.1022 24.8128 17.587C24.5284 17.811 24.3038 18.102 24.1593 18.434C24.0149 18.7661 23.9549 19.1287 23.9849 19.4896C24.0153 19.8502 24.1347 20.1977 24.3322 20.501C24.5298 20.8043 24.7994 21.0539 25.1169 21.2275L32.1055 25.042C32.1662 25.0753 32.2433 25.1114 32.3073 25.1393C32.4686 25.2077 32.6671 25.322 32.8125 25.4226V27.3678H28.3971C29.0637 27.871 29.2655 28.5907 29.5242 29.5553H33.1538C34.1726 29.5553 35.0005 28.7274 35.0005 27.7075V24.9698C35 23.8815 33.1532 23.1208 33.1532 23.1208L33.1533 23.1208Z"
                      fill="#D9B658"
                    />
                  </svg>
                  <span>Clients</span>
                </div>
                {showMulti === "client" && (
                  <ul className="text-primary py-2 px-3 space-y-2 flex flex-col">
                    <Link
                      onClick={() => {
                        setOpenDashboardMenu(!openDashboardMenu);
                        setShowMulti("");
                      }}
                      to="/dashboard/clients/manageclient"
                    >
                      &#8226;<span className="ml-2">All Clients</span>
                    </Link>
                    <Link
                      onClick={() => {
                        setOpenDashboardMenu(!openDashboardMenu);
                        setShowMulti("");
                      }}
                      to="/dashboard/clients/addclient"
                    >
                      &#8226;<span className="ml-2">Add Clients</span>
                    </Link>
                  </ul>
                )}
              </div>
              <div className="py-2">
                <div
                  onClick={() => {
                    setShowMulti("lead");
                  }}
                  className="flex items-center space-x-2    text-primary text-[24px] font-monrope"
                >
                  <MdLeaderboard />
                  <span>Leads</span>
                </div>
                {showMulti === "lead" && (
                  <ul className="text-primary py-2 px-3 space-y-2 flex flex-col">
                    <Link
                      onClick={() => {
                        setOpenDashboardMenu(!openDashboardMenu);
                        setShowMulti("");
                      }}
                      to="/dashboard/leads/manageleads"
                    >
                      &#8226;<span className="ml-2">All Leads</span>
                    </Link>
                    <Link
                      onClick={() => {
                        setOpenDashboardMenu(!openDashboardMenu);
                        setShowMulti("");
                      }}
                      to="/dashboard/leads/addlead"
                    >
                      &#8226;<span className="ml-2">Add Leads</span>
                    </Link>
                  </ul>
                )}
              </div>
              <div className="py-2">
                <Link
                  onClick={() => {
                    setOpenDashboardMenu(!openDashboardMenu);
                    setShowMulti("");
                  }}
                  to="/dashboard/email"
                  className="flex items-center space-x-2    text-primary text-[24px] font-monrope"
                >
                  <MdOutlineMail /> <span>Email</span>
                </Link>
              </div>
              <div className="py-2">
                <Link
                  onClick={() => {
                    setOpenDashboardMenu(!openDashboardMenu);
                    setShowMulti("");
                  }}
                  to="/dashboard/lcm"
                  className="flex items-center space-x-2    text-primary text-[24px] font-monrope"
                >
                  <RiPagesLine />
                  <span>Frontend Management</span>
                </Link>
              </div>
              <div className="py-2">
                <Link
                  onClick={() => {
                    setOpenDashboardMenu(!openDashboardMenu);
                    setShowMulti("");
                  }}
                  to="/dashboard/notifications"
                  className="flex items-center space-x-2    text-primary text-[24px] font-monrope"
                >
                  <IoNotificationsOutline />
                  <span>Notifications</span>
                </Link>
              </div>
              <div className="py-2">
                <div
                  onClick={() => {
                    setShowMulti("settings");
                  }}
                  className="flex items-center space-x-2    text-primary text-[24px] font-monrope"
                >
                  <IoSettingsOutline />
                  <span>Settings</span>
                </div>
                {showMulti === "settings" && (
                  <ul className="text-primary py-2 px-3 space-y-2 flex flex-col">
                    <Link
                      onClick={() => {
                        setOpenDashboardMenu(!openDashboardMenu);
                        setShowMulti("");
                      }}
                      to="/dashboard/settings/user-management"
                    >
                      &#8226;<span className="ml-2">User Management</span>
                    </Link>
                    <Link
                      onClick={() => {
                        setOpenDashboardMenu(!openDashboardMenu);
                        setShowMulti("");
                      }}
                      to="/dashboard/settings/role"
                    >
                      &#8226;<span className="ml-2">Roles</span>
                    </Link>
                    <Link
                      onClick={() => {
                        setOpenDashboardMenu(!openDashboardMenu);
                        setShowMulti("");
                      }}
                      to="/dashboard/settings/permission"
                    >
                      &#8226;<span className="ml-2">Permissions</span>
                    </Link>
                    <Link
                      onClick={() => {
                        setOpenDashboardMenu(!openDashboardMenu);
                        setShowMulti("");
                      }}
                      to="/dashboard/settings/config"
                    >
                      &#8226;<span className="ml-2">Config</span>
                    </Link>
                  </ul>
                )}
              </div>
              <div className="py-2">
                <div
                  onClick={() => {
                    removeFromLocale();
                    window.location.reload();
                  }}
                  className=" flex items-center space-x-2    text-primary text-[24px] font-monrope"
                >
                  <FiLogOut /> <span>Logout</span>
                </div>
              </div>
            </div>
          </div>

          {showModal && (
            <div className="reletive h-screen w-full flex justify-center items-center">
              <div className="w-auto h-auto   z-50 animate__animated animate__bounceIn">
                <ModalComp></ModalComp>
              </div>
              <div
                onClick={() => setShowModal(!showModal)}
                className="absolute top-0  left-0 w-full h-full text-white z-40 bg-root bg-opacity-40"
              ></div>
            </div>
          )}
        </div>
      ) : (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <Loader></Loader>
        </div>
      )}
    </>
  );
}

export default DashboardBoard;
// absolute top-[90px] md:top-[120px] w-full
