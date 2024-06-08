import { useNavigate, useOutletContext } from "react-router-dom";
import DefaultHome from "./Home/Default/Default";
import DefaultService from "./Service/Default";
import DefaultTeam from "./Team/Default";
import { useContext, useState } from "react";
import DefaultTestimonial from "./Testimonial/Default";
import Contact from "./Contact/Contact";
import { FaFacebook } from "react-icons/fa6";
import toast from "react-hot-toast";
import axios from "axios";
import { AppContext } from "../../../../utils/contexts/AppContext";

function LandingManagement() {
  const [selectedPage, setSelectedPage] = useState("");
  const { loggedUserData } = useContext(AppContext);
  const [siteConfig] = useOutletContext();
  const { fb_link, youtube_link, instagram_link } = siteConfig;
  const [formData, setFormData] = useState({
    facebookLink: fb_link,
    youtubeLink: youtube_link,
    instagramLink: instagram_link,
  });
  const { facebookLink, youtubeLink, instagramLink } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSelectedPage(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { data } = await axios.put(
      "https://consultancy-crm-serverside.onrender.com/api/sociallinks/53c61ce3-a892-434e-adaa-006f36624338",
      {
        fb_link: formData.facebookLink,
        youtube_link: formData.youtubeLink,
        instagram_link: formData.instagramLink,
      },
      {
        headers: {
          Authorization: `Bearer ${loggedUserData.token}`,
        },
      }
    );
    if (data) {
      console.log(data);

      toast.success("Socials Updated Successfully", {
        style: {
          backgroundColor: "#333333",
          color: "#fafafa",
        },
        className: "font-monrope",
      });
    }
  };
  return (
    <div className="bg-root w-full h-full overflow-y-scroll hidden-scrollbar ">
      <div className="text-white  p-5">
        <div className="flex flex-col text-[20px] text-primary uppercase font-bold space-y-2 mb-5">
          <label htmlFor="">Select page</label>
          <select
            name=""
            id=""
            onChange={handleChange}
            value={selectedPage}
            className="bg-root text-primary w-[300px] py-2 px-1 outline-none"
          >
            <option value="">Select</option>
            <option value="home">Home</option>
            <option value="services">Services</option>
            <option value="teams">Teams</option>
            <option value="testimonials">Testimonial</option>
            <option value="contact">Contact</option>
          </select>
        </div>
        {selectedPage === "" && (
          <div className="">
            <div className="">
              <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                Social Links
              </div>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-5 px-2"
              >
                {/* Facebook Details */}
                <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <label htmlFor="banner_title" className="">
                    Facebook Site Link
                  </label>
                  <input
                    // disabled={!editStatus ? true : false}
                    className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="facebookLink"
                    id="facebookLink"
                    required
                    placeholder="Enter Facebook Link"
                    value={facebookLink}
                    onChange={onChange}
                  />
                </div>
                {/* Youtube Details */}
                <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <label htmlFor="banner_subtitle">Youtube Channel Link</label>
                  <input
                    // disabled={!editStatus ? true : false}
                    className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="youtubeLink"
                    id="youtubeLink"
                    placeholder="Enter Youtube Link"
                    value={youtubeLink}
                    onChange={onChange}
                  />
                </div>
                {/* Instagram Details */}
                <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <label htmlFor="banner_subtitle">Banner Subtitle</label>
                  <input
                    // disabled={!editStatus ? true : false}
                    className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="instagramLink"
                    id="instagramLink"
                    placeholder="Enter Instagram Link"
                    value={instagramLink}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="w-auto bg-primary  py-1 px-2 font-monrope font-semibold tracking-wider rounded-md border-2 border-primary hover:bg-transparent cursor-pointer duration-300 hover:text-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
        {/* home page */}
        {selectedPage === "home" && (
          <DefaultHome siteConfig={siteConfig}></DefaultHome>
        )}
        {/* service page */}
        {selectedPage === "services" && (
          <DefaultService siteConfig={siteConfig}></DefaultService>
        )}
        {/* teams page */}
        {selectedPage === "teams" && (
          <DefaultTeam siteConfig={siteConfig}></DefaultTeam>
        )}
        {/* testimonial Page */}
        {selectedPage === "testimonials" && (
          <DefaultTestimonial></DefaultTestimonial>
        )}
        {/* contact page */}
        {selectedPage === "contact" && (
          <Contact siteConfig={siteConfig}></Contact>
        )}
      </div>
    </div>
  );
}

export default LandingManagement;
