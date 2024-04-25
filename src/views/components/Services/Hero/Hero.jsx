import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

function Hero() {
  return (
    <div className="w-full h-[560px] xl:h-[894px] bg-root">
      <div className="w-full h-full relative">
        <div className="hidden sm:block absolute sm:top-[120px] 2xl:top-[307px] left-0 right-0 z-[10]  w-full">
          <div className="px-[60px] xl:px-[176px]  text-secondary text-[20px] space-y-[40px] flex flex-col items-end justify-end">
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="absolute top-[80px] xl:top-[100px]  2xl:top-[215px]  right-[40px] left-[40px] sm:left-[60px] sm:right-[60px] md:left-[40px] md:right-[40px] lg:left-[50px] lg:right-[50px] xl:left-[150px] xl:right-[150px] 2xl:left-[176px] 2xl:right-[176px] ">
          <div className="w-full ">
            <div className="text-[36px]  md:text-[48px]  xl:text-[76px] 2xl:text-[96px] font-noto font-medium text-primary uppercase  tracking-tight mb-[20px] xl:mb-[40px] 2xl:mb-[50px]">
              Welcome to
              <br /> Aviate Abroad
            </div>

            <div className="  text-[16px] 2xl:text-[24px] mb-[20px] xl:mb-[40px] 2xl:mb-[50px] font-monrope font-bold text-secondary uppercase tracking-wide">
              Your Gateway to Global Opportunities
            </div>
            <div className=" text-[16px] 2xl:text-[24px] w-[80%] text-left  2xl:w-full font-monrope font-normal text-secondary leading-[25px] xl:leading-[35px]">
              At Aviate Abroad, we specialize in facilitating seamless
              transitions for individuals seeking to explore the world. Whether
              you're a student aiming to pursue higher education, an adventurer
              craving new experiences, or a professional seeking career
              opportunities abroad, we are here to navigate your journey towards
              success.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
