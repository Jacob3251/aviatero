import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { AppContext } from "../../utils/contexts/AppContext";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function LandingLayout({ children }) {
  const { showNavDrawer, setShowNavDrawer } = useContext(AppContext);
  return (
    <div className="w-full h-full max-h-screen max-w-[1440px] mx-auto relative ">
      <div className="absolute w-full top-0 ">
        <Navbar></Navbar>
      </div>
      <div className="absolute top-0 w-full">
        {children}
        <Footer></Footer>
      </div>
      {showNavDrawer && (
        <div className=" h-full fixed top-0 bottom-0 right-0 w-full overflow-hidden z-50 ">
          <div className="w-full flex justify-end relative h-full bg-root bg-opacity-40 z-50">
            <div
              className={`w-[60%] sm:w-[50%] md:w-[35%] xl:w-[20%] p-[20px] xl:px-[50px] 2xl:p-[100px] h-[100vh] animate__animated animate__slideInRight  flex justify-start items-start flex-col bg-black`}
            >
              <div className=" w-full flex flex-col justify-end mb-[100px] md:mb-[50px] 2xl:mb-[80px] ">
                <div className="flex justify-end">
                  <div
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    className="text-[30px]  text-white cursor-pointer"
                  >
                    <IoClose />
                  </div>
                </div>
              </div>
              <div>
                <ul className="flex flex-col">
                  <NavLink
                    to="/"
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#D9B658" : "#FAFAFA",
                      };
                    }}
                    className="no-underline list-none text-[24px] 2xl:text-[36px] font-noto mb-[18px] md:mb-[20px] xl:mb-[30px]"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/services"
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#D9B658" : "#FAFAFA",
                      };
                    }}
                    className=" no-underline list-none text-[24px] 2xl:text-[36px] font-noto mb-[18px] md:mb-[20px] xl:mb-[30px]"
                  >
                    Our Services
                  </NavLink>
                  <NavLink
                    to="/teams"
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#D9B658" : "#FAFAFA",
                      };
                    }}
                    className=" no-underline list-none text-[24px] 2xl:text-[36px] font-noto mb-[18px] md:mb-[20px] xl:mb-[30px]"
                  >
                    The Team
                  </NavLink>
                  {/* <NavLink
                    to="/partners"
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#D9B658" : "#FAFAFA",
                      };
                    }}
                    className=" no-underline list-none text-[24px] 2xl:text-[36px] font-noto mb-[18px] md:mb-[20px] xl:mb-[30px]"
                  >
                    Partners
                  </NavLink> */}
                  {/* <NavLink
                    to="/blogs"
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#D9B658" : "#FAFAFA",
                      };
                    }}
                    className=" no-underline list-none text-[24px] 2xl:text-[36px] font-noto mb-[18px] md:mb-[20px] xl:mb-[30px]"
                  >
                    Blogs
                  </NavLink> */}
                  <NavLink
                    to="/testimonials"
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#D9B658" : "#FAFAFA",
                      };
                    }}
                    className=" no-underline list-none text-[24px] 2xl:text-[36px] font-noto mb-[18px] md:mb-[20px] xl:mb-[30px]"
                  >
                    Testimonials
                  </NavLink>
                  <NavLink
                    to="/contact-us"
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#D9B658" : "#FAFAFA",
                      };
                    }}
                    className=" no-underline list-none text-[24px] 2xl:text-[36px] font-noto"
                  >
                    Contact
                  </NavLink>
                  <li className=" text-secondary space-x-[40px] flex  items-center justify-start mt-[80px] md:mt-[20px] xl:mt-[80px] text-[20px]">
                    <a
                      href="https://www.facebook.com/aviateabroad"
                      target="_blank"
                      className="text-secondary"
                    >
                      <FaFacebookF />
                    </a>
                    <FaYoutube />
                    <FaLinkedinIn />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingLayout;
