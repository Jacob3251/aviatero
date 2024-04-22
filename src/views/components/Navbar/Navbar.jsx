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
        className={`py-[20px] flex justify-between items-center fixed top-0 w-full max-w-[1440px]  bg-transparent z-30`}
      >
        <div className="h-[50px] md:h-[100px] xl:h-[142px] w-[70px] md:w-[120px] xl:w-[195px] pl-[48px] xl:pl-[176px]">
          <img className="w-full h-full" src={navlogo} alt="navigation_logo" />
        </div>
        <div
          onClick={() => {
            setShowNavDrawer(true);
            console.log("clicked");
          }}
          className="text-[30px] md:text-[40px] xl:text-[50px] text-secondary cursor-pointer pr-[48px] xl:pr-[176px]"
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
