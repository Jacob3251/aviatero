import { GiHamburgerMenu } from "react-icons/gi";
import navlogo from "../../../assets/images/Logos/branding.png";
function Navbar() {
  return (
    <div className={`pt-[71px] flex justify-between items-center  px-[176px]`}>
      <div className="h-[142px] w-[195px]">
        <img className="w-full h-full" src={navlogo} alt="navigation_logo" />
      </div>
      <div className="text-[50px] text-secondary cursor-pointer">
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
