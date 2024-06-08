import { GiHamburgerMenu } from "react-icons/gi";
import navlogo from "../../../assets/images/Logos/branding.png";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../utils/contexts/AppContext";
import { useNavigate } from "react-router-dom";

function Navbar({ navbarColor }) {
  const { setShowNavDrawer } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div
      className={`py-[20px] flex justify-between items-center fixed top-0 w-full max-w-[1440px] ${navbarColor} md:bg-opacity-90 z-30 duration-300 pl-[48px] xl:pl-[176px] pr-[48px] xl:pr-[176px]`}
    >
      <div
        onClick={() => navigate("/")}
        className="h-[50px] md:h-[80px] w-[70px] md:w-[110px] cursor-pointer"
      >
        <img className="w-full h-full" src={navlogo} alt="navigation_logo" />
      </div>
      <div
        onClick={() => {
          setShowNavDrawer(true);
        }}
        className="text-[30px] md:text-[40px] text-secondary cursor-pointer"
      >
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
