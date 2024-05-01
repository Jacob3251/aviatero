import { Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/SideBar/SideBar";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";

function DashboardBoard({ children }) {
  return (
    <div className="w-full h-full max-h-screen max-w-[1440px] mx-auto relative z-0">
      <DashboardNavbar></DashboardNavbar>

      <div className="w-full absolute top-[90px]  h-[calc(100vh_-_90px)] flex">
        <div className="hidden md:block md:w-1/4 h-full">
          <SideBar></SideBar>
        </div>
        <div className="w-full h-full md:w-3/4  !border-2 !border-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardBoard;
// absolute top-[90px] md:top-[120px] w-full
