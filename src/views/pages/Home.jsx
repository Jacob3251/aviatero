import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingLayout from "../Layouts/LandingLayout";
import herobg from "../../assets/images/home/bg.png";
import Services from "../components/Home/Services/Services";
import Hero from "../components/Home/Hero/Hero";
import { MdKeyboardArrowRight } from "react-icons/md";
import Address from "../components/Home/Address/Address";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../utils/Other/ScrollToTop";
import { AppContext } from "../../utils/contexts/AppContext";
import CTA from "../components/Home/CTA/CTA";

function Home() {
  const navigate = useNavigate();

  const { siteConfig, siteLoading } = useContext(AppContext);
  return (
    <>
      {siteLoading === false ? (
        <LandingLayout>
          <ScrollToTop />
          <Hero siteConfig={siteConfig}></Hero>
          <Services></Services>
          <Address siteConfig={siteConfig}></Address>
          {/* contact cta */}
          <CTA siteConfig={siteConfig}></CTA>
        </LandingLayout>
      ) : (
        <div className="bg-red-500 text-white">Loading</div>
      )}
    </>
  );
}

export default Home;
