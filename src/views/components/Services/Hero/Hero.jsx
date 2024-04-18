import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

function Hero() {
  return (
    <div className="w-full h-[894px] bg-blue-200">
      <div className="w-full h-full relative">
        <div className="absolute right-[173px] top-[94px]">
          <div className="text-secondary text-[20px] space-y-[40px] flex flex-col items-end justify-end">
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="absolute left-[173px] top-[215px] w-[787px]">
          <div className="text-[96px] font-noto font-medium text-primary uppercase  tracking-tight mb-[50px]">
            Welcome to
            <br /> Aviate Abroad
          </div>

          <div className="text-[24px] mb-[50px] font-monrope font-bold text-secondary uppercase tracking-wide">
            Your Gateway to Global Opportunities
          </div>
          <div className="text-[24px] font-monrope font-normal">
            At Aviate Abroad, we specialize in facilitating seamless transitions
            for individuals seeking to explore the world. Whether you're a
            student aiming to pursue higher education, an adventurer craving new
            experiences, or a professional seeking career opportunities abroad,
            we are here to navigate your journey towards success.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
