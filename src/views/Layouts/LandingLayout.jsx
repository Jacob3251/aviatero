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
    <div className="w-full h-full max-h-screen max-w-[1440px] mx-auto relative">
      <div className="absolute w-full top-0 ">
        <Navbar></Navbar>
      </div>
      <div className="absolute top-0 w-full">
        {children}
        <Footer></Footer>
      </div>
      {showNavDrawer && (
        <div className="h-full fixed  w-full  z-50  top-0 left-0 ">
          <div className="w-full h-full flex justify-end relative bg-root bg-opacity-80 ">
            <div
              className={`w-[20%] p-[100px] h-[100vh] animate__animated animate__slideInRight bg-[#151511]`}
            >
              <div className=" w-full flex flex-col justify-end mb-[80px]">
                <div className="flex justify-end">
                  <div
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    className="text-[45px] text-white cursor-pointer"
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
                    className="no-underline list-none text-[36px] font-noto mb-[30px]"
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
                    className=" no-underline list-none text-[36px] font-noto mb-[30px]"
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
                    className=" no-underline list-none text-[36px] font-noto mb-[30px]"
                  >
                    The Team
                  </NavLink>
                  <NavLink
                    to="/partners"
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#D9B658" : "#FAFAFA",
                      };
                    }}
                    className=" no-underline list-none text-[36px] font-noto mb-[30px]"
                  >
                    Partners
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    onClick={() => {
                      setShowNavDrawer(false);
                    }}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#D9B658" : "#FAFAFA",
                      };
                    }}
                    className=" no-underline list-none text-[36px] font-noto mb-[30px]"
                  >
                    Blogs
                  </NavLink>
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
                    className=" no-underline list-none text-[36px] font-noto mb-[30px]"
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
                    className=" no-underline list-none text-[36px] font-noto mb-[30px]"
                  >
                    Contact
                  </NavLink>
                  <li className=" text-secondary space-x-[40px] flex  items-center justify-start mt-[150px] text-[20px]">
                    <FaFacebookF />
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
