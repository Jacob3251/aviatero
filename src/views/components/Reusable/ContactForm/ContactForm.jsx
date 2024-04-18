import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ContactForm() {
  return (
    <div className="px-[176px] mb-[140px]">
      <div className="flex justify-start items-start space-x-10">
        {/* contact info */}
        <div className="w-full ">
          <div className="mb-[98px] text-[64px] text-primary font-noto font-medium">
            Contact Us
          </div>
          <div className="text-secondary font-monrope text-[24px] mb-[124px]">
            <div className="mb-5">
              Embark on your global journey with Aviate Abroad and unlock a
              world of possibilities.
            </div>
            <div>Contact us today to begin your immigration adventure!</div>
          </div>
          {/* icons */}
          <div className="mb-5">
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
              className="text-[24px] font-monrope font-semibold  text-secondary mb-[10px]"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[24px] text-[24px]"
              type="text"
              placeholder="Write your name"
            />
            <div className="w-full h-[2px] bg-primary"></div>
          </div>
          <div className="flex flex-col mb-[20px]">
            <label
              htmlFor="email"
              className="text-[24px] font-monrope font-semibold  text-secondary mb-[10px]"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[24px] text-[24px]"
              type="email"
              placeholder="example@gmail.com"
            />
            <div className="w-full h-[2px] bg-primary"></div>
          </div>
          <div className="flex flex-col mb-[20px]">
            <label
              htmlFor="message"
              className="text-[24px] font-monrope font-semibold  text-secondary mb-[10px]"
            >
              Message
            </label>
            <input
              name="message"
              id="message"
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[24px] text-[24px]"
              type="text"
              placeholder="Your message"
            />
            <div className="w-full h-[2px] bg-primary"></div>
          </div>
          <div className="text-[24px] font-monrope font-bold text-primary flex justify-start items-center mt-[80px]">
            <span>SEND</span>{" "}
            <MdOutlineKeyboardArrowRight className="text-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
