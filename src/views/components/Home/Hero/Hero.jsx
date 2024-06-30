import herobg from "../../../../assets/images/home/bg.png";
import Navbar from "../../Navbar/Navbar";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useContext } from "react";
function Hero({ siteConfig }) {
  const {
    home_banner,
    home_sub_banner,
    fb_link,
    youtube_link,
    instagram_link,
  } = siteConfig;
  // console.log(fb_link);
  return (
    <div className="relative w-full hero-bg">
      {/* hero */}
      <div className="w-full  max-w-[1440px]  hero-bg absolute top-0 z-0">
        <div className="w-full h-full">
          <img className="w-full h-full object-cover" src={herobg} alt="" />
          <div className="h-[200px] w-full absolute top-[85%] z-50 backgroundMerge"></div>
        </div>
      </div>
      <div className="hidden sm:block absolute top-[307px] left-0 right-0 z-[10]  w-full">
        <div className="px-[60px] xl:px-[176px]  text-secondary text-[20px] space-y-[40px] flex flex-col items-end justify-end">
          <a href={fb_link} className="text-secondary" target="_blank">
            <FaFacebookF />
          </a>
          <a href={youtube_link} className="text-secondary" target="_blank">
            <FaYoutube />
          </a>
          <a href={instagram_link} className="text-secondary" target="_blank">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="absolute bottom-[100px] xl:bottom-[100px] left-[20px] sm:left-[60px] md:left-[40px] lg:left-[50px] xl:left-[176px] ">
        <div className=" text-[46px] lg:text-[64px] xl:text-[84px]  font-noto font-medium text-primary uppercase  tracking-tight">
          {home_banner}
        </div>
        <div className="text-[12px] xl:text-[24px] font-monrope font-bold text-secondary mt-[10px] uppercase ml-2 tracking-wide">
          {home_sub_banner}
        </div>
      </div>
    </div>
  );
}

export default Hero;
