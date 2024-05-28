import { useContext, useState } from "react";
import navlogo from "../../../assets/images/Logos/branding.png";
import { AppContext } from "../../../utils/contexts/AppContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { removeFromLocale } from "../../../utils/helper";
function DashboardNavbar() {
  const [navbarColor, setNavbarColor] = useState("bg-transparent");
  const { setOpenDashboardMenu } = useContext(AppContext);
  const [toggleProfile, setToggleProfile] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`py-[20px] px-5 flex justify-between items-center fixed top-0 w-full max-w-[1440px] bg-root  md:bg-opacity-90 z-30 duration-300`}
    >
      <div className="flex items-center space-x-3">
        <div onClick={() => navigate("/")} className="h-[50px]   w-[70px]  ">
          <img className="w-full h-full" src={navlogo} alt="navigation_logo" />
        </div>
        <div className="text-[18px] lg:text-[28px] text-primary font-noto font-bold uppercase">
          Aviate Abroad
        </div>
      </div>
      <div className="cursor-pointer lg:hidden">
        <GiHamburgerMenu
          className="text-secondary text-[28px]"
          onClick={() => setOpenDashboardMenu(true)}
        />
      </div>
      <div className="text-[34px] lg:flex justify-center items-center space-x-[40px] text-secondary cursor-pointer pr-[48px] hidden">
        <IoNotificationsOutline
          onClick={() => navigate("/dashboard/notifications")}
        />
        <IoSettingsOutline
          onClick={() => navigate("/dashboard/settings/config")}
        />
        <div className="w-[34px] h-[34px] p-1  bg-primary rounded-full  relative">
          <img
            onClick={() => setToggleProfile(!toggleProfile)}
            className="w-full h-full rounded-full object-fill"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          {toggleProfile && (
            <div className=" absolute w-[180px] top-[130%] right-0 rounded-md bg-root cta-border z-[50]">
              <div className="px-5 py-5 text-[24px] flex flex-col justify-start items-start font-monrope capitalize">
                <div
                  onClick={() => {
                    navigate("/dashboard/profile");
                    setToggleProfile(!toggleProfile);
                  }}
                  className="cursor-pointer flex items-center space-x-3 text-secondary hover:text-primary"
                >
                  <FaRegUser />
                  <span>Profile</span>
                </div>
                <div className="h-[1px] my-2 w-full cta-border"></div>
                <div
                  onClick={() => {
                    removeFromLocale();
                    window.location.reload();
                  }}
                  className="flex items-center space-x-3 text-secondary hover:text-primary"
                >
                  <FiLogOut />
                  <span>logout</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
