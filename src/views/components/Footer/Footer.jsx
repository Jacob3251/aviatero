import { TbPointFilled } from "react-icons/tb";

function Footer() {
  // bg-[#1D1D19]
  return (
    <div className="bg-[#1D1D19]  lg:px-[176px] py-5 sm:py-7 xl:py-10  font-monrope text-white text-[14px] sm:text-[18px]  text-center xl:text-left">
      <div className="w-full flex flex-col md:flex-row justify-center items-center xl:justify-start md:space-x-2">
        <div>© All rights reserved by Aviate Abroad, 2024</div>{" "}
        <TbPointFilled className="hidden md:block" />{" "}
        <div>
          Designed and Developed by{" "}
          <a
            href="https://lilliputdigital.com/"
            target="_blank"
            className="font-monrope no-underline text-blue-400"
          >
            Lilliput Digital
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
