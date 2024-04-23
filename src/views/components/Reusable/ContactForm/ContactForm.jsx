import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ContactForm() {
  return (
    <div className="px-[40px] xl:px-[176px] mb-[140px]">
      <div className="flex flex-col md:flex-row justify-start items-start md:space-x-10">
        {/* contact info */}
        <div className="w-full ">
          <div className="text-center mb-[50px] font-noto font-medium text-[36px] sm:text-[48px] 2xl:text-[64px] text-primary">
            Contact Us
          </div>
          <div className="text-secondary font-monrope text-[18px] xl:text-[24px] mb-[60px] xl:mb-[124px] font-medium">
            <div className="mb-[24px]">
              Embark on your global journey with Aviate Abroad and unlock a
              world of possibilities.
            </div>
            <div>Contact us today to begin your immigration adventure!</div>
          </div>
          {/* icons */}
          <div className="mb-5 hidden md:block">
            <div className="text-secondary text-[24px] space-x-[40px] flex  items-end justify-start">
              <FaFacebookF />
              <FaYoutube />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="w-full ">
          <div className="flex flex-col mb-[20px]">
            <label
              htmlFor="name"
              className="text-[18px] xl:text-[24px] font-monrope font-semibold  text-secondary mb-[10px]"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[18px] placeholder:xl:text-[24px] text-[18px] xl:text-[24px]"
              type="text"
              placeholder="Write your name"
            />
            <div className="w-full h-[2px] bg-primary"></div>
          </div>
          <div className="flex flex-col mb-[20px]">
            <label
              htmlFor="email"
              className="text-[18px] xl:text-[24px] font-monrope font-semibold  text-secondary mb-[10px]"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[18px] placeholder:xl:text-[24px] text-[18px] xl:text-[24px]"
              type="email"
              placeholder="example@gmail.com"
            />
            <div className="w-full h-[2px] bg-primary"></div>
          </div>
          <div className="flex flex-col mb-[20px]">
            <label
              htmlFor="message"
              className="text-[18px] xl:text-[24px] font-monrope font-semibold  text-secondary mb-[10px]"
            >
              Message
            </label>
            <input
              name="message"
              id="message"
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[18px] placeholder:xl:text-[24px] text-[18px] xl:text-[24px]"
              type="text"
              placeholder="Your message"
            />
            <div className="w-full h-[2px] bg-primary"></div>
          </div>
          <div className="text-[18px] xl:text-[24px] font-monrope font-bold text-primary flex justify-start items-center mt-[40px] xl:mt-[80px]">
            <span>SEND</span>{" "}
            <MdOutlineKeyboardArrowRight className="text-[24px] xl:text-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
