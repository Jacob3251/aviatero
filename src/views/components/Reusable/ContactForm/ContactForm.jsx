import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useQuery from "../../../../utils/hooks/useQuery";
import { AppContext } from "../../../../utils/contexts/AppContext";

function ContactForm({ siteConfig }) {
  // const [currentpage, setCurrentpage] = useState(1);
  // const [data, setData] = useQuery(currentpage);
  const { loggedUserData } = useContext(AppContext);
  const { fb_link, youtube_link, instagram_link } = siteConfig;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
  });
  const { name, email, phone_no, message } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await axios
      .post(
        "https://consultancy-crm-serverside-1.onrender.com/api/querymsg",
        formData,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      )
      .then((data) => {
        console.log(data);
        setFormData({
          name: "",
          email: "",
          phone_no: "",
          message: "",
        });
        toast.success("Message Received Successfully", {
          style: {
            backgroundColor: "#333333",
            color: "#fafafa",
          },
          className: "font-monrope",
        });
      })
      .catch((error) => console.log(error.message));

    // reload();
  };
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-start items-start md:space-x-20">
        {/* contact info */}
        <div className="w-full ">
          <div className="text-center md:text-left mb-[50px] font-noto font-medium text-[36px] sm:text-[48px] 2xl:text-[64px] text-primary">
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
              <a href={fb_link} target="_blank" className="text-secondary">
                <FaFacebookF />
              </a>
              <a href={youtube_link} target="_blank" className="text-secondary">
                <FaYoutube />
              </a>
              <a
                href={instagram_link}
                target="_blank"
                className="text-secondary"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        {/* contact form */}
        <form className="w-full " onSubmit={handleSubmit}>
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
              value={name}
              onChange={onChange}
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[18px] placeholder:xl:text-[24px] text-[18px] xl:text-[24px]"
              type="text"
              placeholder="John Doe..."
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
              value={email}
              onChange={onChange}
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[18px] placeholder:xl:text-[24px] text-[18px] xl:text-[24px]"
              type="email"
              placeholder="example@gmail.com"
            />
            <div className="w-full h-[2px] bg-primary"></div>
          </div>
          <div className="flex flex-col mb-[20px]">
            <label
              htmlFor="phone_no"
              className="text-[18px] xl:text-[24px] font-monrope font-semibold  text-secondary mb-[10px]"
            >
              Contact No
            </label>
            <input
              name="phone_no"
              id="phone_no"
              value={phone_no}
              onChange={onChange}
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[18px] placeholder:xl:text-[24px] text-[18px] xl:text-[24px]"
              type="text"
              placeholder="017-XXXX-XXXX"
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
              value={message}
              onChange={onChange}
              className="outline-none py-5 px-3 bg-transparent border-none placeholder:text-[#3E3E2D] text-primary placeholder:text-[18px] placeholder:xl:text-[24px] text-[18px] xl:text-[24px]"
              type="text"
              placeholder="Your message"
            />
            <div className="w-full h-[2px] bg-primary"></div>
          </div>
          <div onClick={handleSubmit}>
            <input
              type="submit"
              value="Submit"
              className="text-[18px] xl:text-[24px] font-monrope font-bold text-primary flex justify-start items-center mt-[40px] xl:mt-[80px] cursor-pointer"
            />
            <MdOutlineKeyboardArrowRight className="text-[24px] xl:text-[32px]" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
