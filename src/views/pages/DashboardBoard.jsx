import { Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/SideBar/SideBar";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import { Helmet } from "react-helmet";
import ModalComp from "../components/Modals/Default";
import "animate.css";
import { useContext } from "react";
import { AppContext } from "../../utils/contexts/AppContext";
import "animate.css";
function DashboardBoard({ children }) {
  const { showModal, setShowModal, siteLoading, siteConfig } =
    useContext(AppContext);
  return (
    <>
      {siteLoading === false ? (
        <div className="w-full h-full max-h-screen max-w-[1440px] mx-auto relative z-0">
          <Helmet>
            <title>Dashboard - Aviate Abroad</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <DashboardNavbar></DashboardNavbar>

          <div className="w-full absolute top-[90px]  h-[calc(100vh_-_90px)] flex">
            <div className="hidden md:block md:w-1/4 h-full">
              <SideBar></SideBar>
            </div>
            <div className="w-full h-full md:w-3/4  ">
              <Outlet context={[siteConfig]} />
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
        <div className="bg-red-400">Loading</div>
      )}
    </>
  );
}

export default DashboardBoard;
// absolute top-[90px] md:top-[120px] w-full
