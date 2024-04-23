import { GiHamburgerMenu } from "react-icons/gi";
import navlogo from "../../../assets/images/Logos/branding.png";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../utils/contexts/AppContext";

function Navbar() {
  // const param = useParams()
  const { setHoverOverlay, setShowNavDrawer } = useContext(AppContext);
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change navbar color based on scroll position
      if (scrollPosition > 100) {
        setNavbarColor("bg-root"); // Change to whatever color you prefer
      } else {
        setNavbarColor("bg-transparent"); // Change to initial color
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`py-[20px] flex justify-between items-center fixed top-0 w-full max-w-[1440px] ${navbarColor}  md:bg-opacity-90 z-30 duration-300`}
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
