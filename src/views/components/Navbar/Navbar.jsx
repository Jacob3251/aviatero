import { GiHamburgerMenu } from "react-icons/gi";
import navlogo from "../../../assets/images/Logos/branding.png";
import { useContext } from "react";
import { AppContext } from "../../../utils/contexts/AppContext";

function Navbar() {
  // const param = useParams()
  const { setHoverOverlay, setShowNavDrawer } = useContext(AppContext);
  return (
    <>
      <div
        className={`py-[20px] flex justify-between items-center fixed top-0 min-w-[1440px]  bg-transparent z-30`}
      >
        <div className="h-[142px] w-[195px] pl-[176px]">
          <img className="w-full h-full" src={navlogo} alt="navigation_logo" />
        </div>
        <div
          onClick={() => {
            setShowNavDrawer(true);
            console.log("clicked");
          }}
          className="text-[50px] text-secondary cursor-pointer pr-[176px]"
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
