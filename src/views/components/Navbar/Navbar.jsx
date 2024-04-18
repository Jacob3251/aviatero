import { GiHamburgerMenu } from "react-icons/gi";
import navlogo from "../../../assets/images/Logos/branding.png";
function Navbar() {
  return (
    <div
      className={`pt-[71px] flex justify-between items-center fixed top-0 min-w-[1440px]  bg-root z-50`}
    >
      <div className="h-[142px] w-[195px] pl-[176px]">
        <img className="w-full h-full" src={navlogo} alt="navigation_logo" />
      </div>
      <div className="text-[50px] text-secondary cursor-pointer pr-[176px]">
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
