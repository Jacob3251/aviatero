import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../../utils/contexts/AppContext";

function Default({ siteConfig }) {
  const navigate = useNavigate();
  const { loggedUserData } = useContext(AppContext);
  const [editStatus, setEditStatus] = useState(false);
  const { home_banner, home_sub_banner, cta_title, cta_sub_title } = siteConfig;
  const [formData, setFormData] = useState({
    homeBanner: home_banner,
    homeSubBanner: home_sub_banner,
    ctaTitle: cta_title,
    ctaSubTitle: cta_sub_title,
  });
  // On Change for changing the banner & title section
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("home", formData);
    const { data } = await axios.put(
      "https://consultancy-crm-serverside.onrender.com/api/siteconfig/00c491b9-3dfc-449c-9e99-99534f747bd1",
      {
        home_banner: formData.homeBanner,
        home_sub_banner: formData.homeSubBanner,
        cta_title: formData.ctaTitle,
        cta_sub_title: formData.ctaSubTitle,
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
    <div>
      <div className="flex justify-end font-bold uppercase ">
        {!editStatus && (
          <div
            onClick={() => setEditStatus(true)}
            className="bg-primary text-secondary px-5 py-2 rounded-md cursor-pointer"
          >
            Edit
          </div>
        )}
        {editStatus && (
          <div
            onClick={() => {
              setEditStatus(false);
              handleSubmit();
            }}
            className="bg-primary text-secondary px-5 py-2 rounded-md cursor-pointer"
          >
            Submit
          </div>
        )}
      </div>
      <div>
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
          Banner Section
        </div>
        <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
          {/* Banner Title */}
          <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
            <label htmlFor="homeBanner">Banner Title</label>
            <input
              disabled={!editStatus ? true : false}
              className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
              type="text"
              name="homeBanner"
              id="homeBanner"
              value={formData.homeBanner}
              required
              placeholder="Fly to the Moon.."
              onChange={onChange}
            />
          </div>
          {/* Banner Sub Title */}
          <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
            <label htmlFor="homeSubBanner">Banner Subtitle</label>
            <input
              disabled={!editStatus ? true : false}
              className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
              type="text"
              name="homeSubBanner"
              id="homeSubBanner"
              value={formData.homeSubBanner}
              placeholder="exp subtitle..."
              onChange={onChange}
            />
          </div>
        </div>
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary my-5">
          CTA Section
        </div>
        <div>
          <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
            {/* Banner Title */}
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="ctaTitle">CTA Title</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="ctaTitle"
                id="ctaTitle"
                required
                placeholder="Fly to the Moon.."
                onChange={onChange}
                value={formData.ctaTitle}
              />
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label htmlFor="ctaSubTitle">CTA Sub Title</label>
              <input
                disabled={!editStatus ? true : false}
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                name="ctaSubTitle"
                value={formData.ctaSubTitle}
                id="ctaSubTitle"
                required
                placeholder="Fly to the Moon.."
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary my-5">
          Service Section
        </div>
        <div className="border-2 border-primary px-5 py-5 mt-5">
          <div className="flex justify-between items-center  mb-5">
            <div className=" py-2 px-3  uppercase font-monrope font-semibold flex  items-center space-x-2 text-[20px] cursor-pointer text-secondary tracking-wider">
              Services
            </div>
            <div
              onClick={() => navigate("/dashboard/lcm/home/add-service")}
              className=" py-2 px-3  uppercase font-monrope font-semibold flex  items-center space-x-2 text-[14px] cursor-pointer"
            >
              <div className="text-black bg-primary px-2 py-1.5 rounded-sm">
                <FaPlus />
              </div>
              <div className="text-primary"> Add Service</div>
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0 ">
            <thead className="text-xs text-primary uppercase bg-transparent  ">
              <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                <th scope="col" className="px-6 py-5">
                  Title
                </th>
                <th scope="col" className="px-6 py-5">
                  Category
                </th>
                <th scope="col" className="px-6 py-5">
                  Site Link
                </th>

                <th scope="col" className="px-6 py-5">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-secondary font-monrope ">
              <tr className="table-row border-2 border-secondary">
                <td className="px-6 py-4 uppercase">UK</td>
                <td className="px-6 py-4 uppercase">Visit</td>
                <td className="px-6 py-4 uppercase underline hover:text-primary cursor-pointer">
                  View
                </td>
                <td className="px-6 py-4 flex space-x-2 text-[24px]">
                  <div
                    // onClick={() =>
                    //   navigate(`/dashboard/clients/${item.id}/update`, {
                    //     state: { item: item },
                    //   })
                    // }
                    className="cursor-pointer duration-300 hover:text-green-500"
                  >
                    <PiNotePencil />
                  </div>
                  <div
                    // onClick={() => handleDelete(item)}
                    className="cursor-pointer duration-300 hover:text-red-500"
                  >
                    <MdDelete />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Default;
