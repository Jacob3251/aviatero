import herobg from "../../../../assets/images/home/bg.png";
import Navbar from "../../Navbar/Navbar";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
function Hero() {
  return (
    <div className="relative w-full h-[1024px]">
      {/* hero */}
      <div className="w-full h-full max-w-[1440px] max-h-[1024px] absolute top-0 z-0">
        <div className="w-full h-[1024px]">
          <img className="w-full h-full object-fill" src={herobg} alt="" />
        </div>
      </div>
      <div className="absolute top-[307px] left-0 right-0 z-[10]  w-full">
        <div className="px-[176px]  text-secondary text-[20px] space-y-[40px] flex flex-col items-end justify-end">
          <FaFacebookF />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>
      <div className="absolute top-[512px] left-[176px] ">
        <div className="text-[128px] font-noto font-medium text-primary uppercase  tracking-tight">
          Fly you
        </div>
        <div className="text-[128px] font-noto font-medium text-primary uppercase tracking-tight">
          TO the moon!
        </div>
        <div className="text-[24px] font-monrope font-bold text-secondary mt-[10px] uppercase ml-2 tracking-wide">
          Study, Visit or Migration - Your Choice...
        </div>
      </div>
    </div>
  );
}

export default Hero;
