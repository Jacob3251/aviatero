import React from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingLayout from "../Layouts/LandingLayout";
import herobg from "../../assets/images/home/bg.png";
import Services from "../components/Home/Services/Services";
import Hero from "../components/Home/Hero/Hero";
import { MdKeyboardArrowRight } from "react-icons/md";
import Address from "../components/Home/Address/Address";

import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <LandingLayout>
      <Hero></Hero>
      <Services></Services>
      <Address></Address>
      {/* contact cta */}
      <div className="px-[176px] my-[200px]">
        <div className="flex flex-col justify-start items-start cta-border px-[113px] py-[78px] ">
          <div className="text-primary text-[36px] font-medium font-noto mb-[35px]">
            Take flight with Aviate Abroad.
          </div>
          <div className="flex justify-between w-full ">
            <div className="font-monrope text-[24px] font-semibold text-white">
              Start your journey now!
            </div>
            <div className="cursor-pointer font-monrope text-[24px] font-semibold text-primary flex justify-center items-center">
              <span>Contact Us </span>
              <MdKeyboardArrowRight className="text-[36px]" />
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}

export default Home;
