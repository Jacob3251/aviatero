import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function CTA({ siteConfig }) {
  const { cta_title, cta_sub_title } = siteConfig;
  const navigate = useNavigate();

  return (
    <div className="px-[40px] xl:px-[176px] my-[200px]">
      <div className="flex flex-col justify-center md:justify-start items-center md:items-start cta-border px-[34px] py-[45px] xl:px-[113px] xl:py-[78px] ">
        <div className="text-primary text-center xl:text-left text-[36px] font-medium font-noto mb-[35px]">
          {cta_title}
        </div>
        <div className="flex flex-col space-y-[50px] xl:space-y-0 md:flex-row justify-between w-full ">
          <div className="font-monrope text-center xl:text-left text-[18px] xl:text-[24px] font-semibold text-white">
            {cta_sub_title}
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
  );
}

export default CTA;
