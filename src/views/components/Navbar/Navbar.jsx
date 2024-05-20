import { GiHamburgerMenu } from "react-icons/gi";
import navlogo from "../../../assets/images/Logos/branding.png";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../utils/contexts/AppContext";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  return (
    <>
      <div
        className={`py-[20px] flex justify-between items-center fixed top-0 w-full max-w-[1440px] ${navbarColor}  md:bg-opacity-90 z-30 duration-300`}
      >
        <div
          onClick={() => navigate("/")}
          className="h-[50px] md:h-[80px]  w-[70px] md:w-[110px]  pl-[48px] xl:pl-[176px] cursor-pointer"
        >
          <img className="w-full h-full" src={navlogo} alt="navigation_logo" />
        </div>
        <div
          onClick={() => {
            setShowNavDrawer(true);
          }}
          className="text-[30px] md:text-[40px]  text-secondary cursor-pointer pr-[48px] xl:pr-[176px]"
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
