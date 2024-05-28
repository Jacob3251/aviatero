import { Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/SideBar/SideBar";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import { Helmet } from "react-helmet";
import ModalComp from "../components/Modals/Default";
import "animate.css";
import { useContext } from "react";
import { AppContext } from "../../utils/contexts/AppContext";
import "animate.css";
import { IoClose } from "react-icons/io5";
import navlogo from "../../assets/images/Logos/branding.png";
function DashboardBoard({ children }) {
  const {
    showModal,
    setShowModal,
    siteLoading,
    siteConfig,
    openDashboardMenu,
    setOpenDashboardMenu,
  } = useContext(AppContext);
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
            className={`bg-[#333333] bg-opacity-95  z-[99] fixed lg:hidden top-0 duration-300 ${
              openDashboardMenu === false ? "-left-[100%]" : "left-0"
            } w-full h-screen flex flex-col justify-start items-start p-10`}
          >
            <div className="flex justify-between w-full">
              <div className="h-[50px] flex items-center">
                <img src={navlogo} className="h-full aspect-auto" alt="" />
              </div>
              <button
                onClick={() => {
                  setOpenDashboardMenu(!openDashboardMenu);
                }}
              >
                <IoClose className="text-[32px] text-white" />
              </button>
            </div>
            <div className="flex-1">MiniNav</div>
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
        <div className="bg-red-400">Loading</div>
      )}
    </>
  );
}

export default DashboardBoard;
// absolute top-[90px] md:top-[120px] w-full
