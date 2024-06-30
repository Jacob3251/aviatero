import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../../utils/contexts/AppContext";
import useCustomPages from "../../../../../../utils/hooks/useCustomPages";
import EmptyComponent from "../../../../EmptyComponent/EmptyComponent";
import Loader from "../../../../Reusable/Loader/Loader";
import { HiOutlinePencilSquare } from "react-icons/hi2";
function Default({ siteConfig }) {
  const navigate = useNavigate();
  const [
    customPages,
    customPagesLoading,
    setCustomPages,
    setCustomPagesLoading,
  ] = useCustomPages();
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
      "https://consultancy-crm-serverside-1.onrender.com/api/siteconfig/79b9c0f0-feac-4d67-af61-cded304503fd",
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
  const handlePageDelete = async (page) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${page.pageTitle}`
    );
    if (confirm) {
      console.log(page);
      await axios
        .delete(
          `https://consultancy-crm-serverside-1.onrender.com/api/custompage/${page.id}`
        )
        .then((data) => {
          setCustomPagesLoading(true);
          const rest = customPages.filter((item) => item.id !== page.id);
          setCustomPages(rest);
          setCustomPagesLoading(false);
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

        <div className="border-primary border-2 p-5">
          <div className="mb-5 text-[24px] font-monrope text-primary font-semibold flex justify-between">
            <div>All Pages</div>
            <div
              onClick={() => navigate("/dashboard/lcm/home/add-page")}
              className="cursor-pointer"
            >
              Add Page
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-secondary p-5 border-2">
            {customPagesLoading === false ? (
              <>
                {customPages.length !== 0 ? (
                  <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
                    <thead className="text-xs text-primary uppercase bg-transparent  ">
                      <tr className="uppercase font-monrope font-semibold text-[14px] border-secondary border-2 ">
                        <th scope="col" className="px-6 py-5">
                          Serial
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Page Title
                        </th>

                        <th scope="col" className="px-6 py-5">
                          Page Url
                        </th>

                        <th scope="col" className="px-6 py-5">
                          Page Category
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-secondary font-monrope">
                      {customPages.map((page, index) => (
                        <tr
                          key={page.id}
                          className="table-row border-2 border-secondary"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4  whitespace-nowrap "
                          >
                            {index + 1}
                          </th>
                          <th
                            scope="row"
                            className="px-6 py-4  whitespace-nowrap "
                          >
                            {page.pageTitle}
                          </th>
                          <td className="px-6 py-4">{page.siteUrl}</td>
                          <td className="px-6 py-4">{page.category}</td>{" "}
                          <td className="px-6 py-6 flex space-x-2 text-[24px]">
                            <div
                              onClick={() => navigate(`/blogs/${page.siteUrl}`)}
                              className="cursor-pointer duration-300 hover:text-green-500"
                            >
                              <MdOutlineRemoveRedEye />
                            </div>
                            <div
                              onClick={() =>
                                navigate("/dashboard/lcm/home/update-page")
                              }
                              className="cursor-pointer duration-300 hover:text-green-500"
                            >
                              <HiOutlinePencilSquare />
                            </div>

                            <div
                              onClick={() => handlePageDelete(page)}
                              className="cursor-pointer duration-300 hover:text-red-500"
                            >
                              <MdDelete />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <EmptyComponent heading="Custom Pages"></EmptyComponent>
                )}
              </>
            ) : (
              <Loader></Loader>
            )}
            {/* <div className="w-full mt-5">
              <div className=" w-full ">
                <ul className="flex justify-start items-start h-10 list-none">
                  <li
                    className="cursor-pointer "
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <button
                      disabled={currentPage === 1 ? true : false}
                      className="flex items-center justify-start px-4 h-10 ms-0 leading-tight bg-[#333333] rounded-l-md text-[12px] text-primary uppercase font-monrope font-bold disabled:hidden"
                    >
                      Previous
                    </button>
                  </li>
                  <li className="">
                    <div className="flex items-center justify-start px-4 h-10 leading-tight  bg-[#333333] text-[12px] text-primary uppercase font-monrope font-bold">
                      {metaData.currentPage}1
                    </div>
                  </li>

                  <li className="cursor-pointer">
                    <button
                      disabled={metaData.totalPages === currentPage ? true : false}
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                          console.log(currentPage);
                      }}
                      className="flex items-center justify-start px-4 h-10 leading-tight bg-[#333333] rounded-r-md text-[12px] text-primary uppercase font-monrope font-bold disabled:hidden"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;
