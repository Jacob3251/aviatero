import React from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingLayout from "../Layouts/LandingLayout";
import herobg from "../../assets/images/home/bg.png";
import Services from "../components/Home/Services/Services";
import Hero from "../components/Home/Hero/Hero";
import { MdKeyboardArrowRight } from "react-icons/md";
import Address from "../components/Home/Address/Address";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <LandingLayout>
      <Hero></Hero>
      <Services></Services>
      <Address></Address>
      {/* contact cta */}
      <div className="px-[40px] xl:px-[176px] my-[200px]">
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start cta-border px-[34px] py-[45px] xl:px-[113px] xl:py-[78px] ">
          <div className="text-primary text-center xl:text-left text-[36px] font-medium font-noto mb-[35px]">
            Take flight with Aviate Abroad.
          </div>
          <div className="flex flex-col space-y-[50px] xl:space-y-0 md:flex-row justify-between w-full ">
            <div className="font-monrope text-center xl:text-left text-[18px] xl:text-[24px] font-semibold text-white">
              Start your journey now!
            </div>
            <div
              onClick={() => navigate("/contact-us")}
              className="cursor-pointer font-monrope text-[18px] xl:text-[24px] font-semibold text-primary flex justify-center items-center"
            >
              <span>Contact Us </span>
              <MdKeyboardArrowRight className="text-[24px] xl:text-[36px]" />
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}

export default Home;
