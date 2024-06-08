import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaRegFileImage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useServiceExpertise from "../../../../../utils/hooks/useServiceExpertise";
import useServicePackages from "../../../../../utils/hooks/useServicePackages";
import EmptyComponent from "../../../EmptyComponent/EmptyComponent";
import { AppContext } from "../../../../../utils/contexts/AppContext";

function Default({ siteConfig }) {
  const navigate = useNavigate();
  const { services_banner, services_sub_banner, services_banner_content } =
    siteConfig;
  const { loggedUserData } = useContext(AppContext);
  const [editStatus, setEditStatus] = useState(false);
  const [packageFile, setPackageFile] = useState(null);
  const [expertiseForm, setExpertiseForm] = useState({
    service_expertise_title: "",
    service_expertise_content: "",
  });
  const [packageForm, setPackageForm] = useState({
    service_package_title: "",
    service_package_content: "",
  });
  const [formData, setFormData] = useState({
    serviceBanner: services_banner,
    serviceBannerSub: services_sub_banner,
    serviceBannerContent: services_banner_content,
  });
  const { serviceBanner, serviceBannerSub, serviceBannerContent } = formData;
  // On Change for changing the banner & title section
  const onSeviceDetailChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Service Banner Section Update
  const handleBannerSubmit = async () => {
    const { data } = await axios.put(
      "https://consultancy-crm-serverside.onrender.com/api/siteconfig/383ea8da-1b43-430e-aada-2e4f48dd9ec9",
      {
        services_banner: formData.serviceBanner,
        services_sub_banner: formData.serviceBannerSub,
        services_banner_content: formData.serviceBannerContent,
      },
      {
        headers: {
          Authorization: `Bearer ${loggedUserData.token}`,
        },
      }
    );
    if (data) {
      console.log(data);

      toast.success("Service Page Info Successfully", {
        style: {
          backgroundColor: "#333333",
          color: "#fafafa",
        },
        className: "font-monrope",
      });
    }
  };

  const { service_expertise_title, service_expertise_content } = expertiseForm;
  const { service_package_title, service_package_content } = packageForm;
  // onChange for changing the expertise items
  const onExpertiseChange = (e) => {
    setExpertiseForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // onChange for changing the package items
  const onPackageChange = (e) => {
    setPackageForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const fileInputRef = useRef(null);
  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setPackageFile(file);
    // Do whatever you want with the selected file
    console.log("Selected file:", file);
  };
  // handle the submitted expertise items
  const handleExpertise = async (event) => {
    event.preventDefault();
    // console.log(data);
    const { data } = await axios.post(
      "https://consultancy-crm-serverside.onrender.com/api/serviceexpertise",
      {
        service_expertise_title,
        service_expertise_content,
      },
      {
        headers: {
          Authorization: `Bearer ${loggedUserData.token}`,
        },
      }
    );
    if (data) {
      setExpertiseDatas((prev) => [...prev, data.data]);
      setExpertiseForm({
        service_expertise_title: "",
        service_expertise_content: "",
      });
      toast.success("Expertise Added");
      // window.location.reload();
    } else {
      toast.error("Expertise Not Added");
    }
  };
  // handle the submit for package items
  const handleServicePackages = async (event) => {
    event.preventDefault();
    const servicePackageData = {
      service_package_title,
      service_package_content,
      file: packageFile,
    };
    console.log("service package data", servicePackageData);
    // console.log(data);
    const { data } = await axios.post(
      "https://consultancy-crm-serverside.onrender.com/api/servicepackage",
      servicePackageData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    if (data) {
      setPackageDatas((prev) => [...prev, data.data]);
      setPackageForm({
        service_package_title: "",
        service_package_content: "",
      });
      setPackageFile(null);
      toast.success("Service Package Added");
      // window.location.reload();
    } else {
      toast.error("Service Package Not Added");
    }
  };
  const [expertiseDatas, expertiseDataLoading, setExpertiseDatas] =
    useServiceExpertise();
  const [packageDatas, packageDatasLoading, setPackageDatas] =
    useServicePackages();
  // deleting the expertise
  const handleExpertiseDelete = async (item) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirm) {
      await axios
        .delete(
          `https://consultancy-crm-serverside.onrender.com/api/serviceexpertise/${item.id}`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
            },
          }
        )
        .then((data) => {
          toast.success("Item deleted Successfully.");
          setExpertiseDatas(expertiseDatas.filter((i) => i.id !== item.id));
        })
        .catch((error) => {
          toast.error("Couldn't delete item.");
        });
    }
  };
  // deleting the service packages
  const handleServicePackageDelete = async (item) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirm) {
      await axios
        .delete(
          `https://consultancy-crm-serverside.onrender.com/api/servicepackage/${item.id}`
        )
        .then((data) => {
          toast.success("Item deleted Successfully.");
          setPackageDatas(packageDatas.filter((i) => i.id !== item.id));
        })
        .catch((error) => {
          toast.error("Couldn't delete item.");
        });
    }
  };
  return (
    <div>
      <div className="font-monrope font-bold text-primary  text-[20px] uppercase">
        Services / Service Component
      </div>
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
                handleBannerSubmit();
              }}
              className="bg-primary text-secondary px-5 py-2 rounded-md cursor-pointer"
            >
              Submit
            </div>
          )}
        </div>
        <div>
          <div className="">
            <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
              Banner Section
            </div>
            <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
              {/* Banner Title */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="serviceBanner">Banner Title</label>
                <input
                  disabled={!editStatus ? true : false}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="serviceBanner"
                  id="serviceBanner"
                  required
                  placeholder="Fly to the Moon.."
                  value={serviceBanner}
                  onChange={onSeviceDetailChange}
                />
              </div>
              {/* Banner Sub Title */}
              <div className=" w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="serviceBannerSub">Banner Subtitle</label>
                <input
                  disabled={!editStatus ? true : false}
                  className="w-full py-2  text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="serviceBannerSub"
                  id="serviceBannerSub"
                  placeholder="exp subtitle..."
                  value={serviceBannerSub}
                  onChange={onSeviceDetailChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2 mt-5">
              {/* Banner Title */}
              <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                <label htmlFor="serviceBannerContent">Banner Content</label>
                <input
                  disabled={!editStatus ? true : false}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  type="text"
                  name="serviceBannerContent"
                  id="serviceBannerContent"
                  required
                  placeholder="Fly to the Moon.."
                  value={serviceBannerContent}
                  onChange={onSeviceDetailChange}
                />
              </div>
            </div>
          </div>
          {/* service items sections */}
          <div className="my-20">
            <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
              Service Item Section
            </div>
            <form
              onSubmit={handleServicePackages}
              action=""
              className="mb-5"
              encType="multipart/form-data"
            >
              <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
                {/* package title */}
                <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <label htmlFor="service_title">Service Title</label>
                  <input
                    className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="service_package_title"
                    id="service_package_title"
                    required
                    placeholder="Fly to the Moon.."
                    value={service_package_title}
                    onChange={onPackageChange}
                  />
                </div>
                {/* package content */}
                <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <label htmlFor="service_content">Service Content</label>
                  <input
                    value={service_package_content}
                    className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="service_package_content"
                    id="service_package_content"
                    required
                    placeholder="Fly to the Moon.."
                    onChange={onPackageChange}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2 mt-5">
                {/* Service Image */}
                <div
                  htmlFor="file"
                  onClick={handleDivClick}
                  className="w-full flex flex-col justify-center items-center my-5 text-primary cursor-pointer border-2 border-primary p-5 rounded-md"
                >
                  <FaRegFileImage className="text-[46px]" />
                  <div>
                    {packageFile === null ? "Upload File" : "File Selected"}
                  </div>
                </div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
              </div>
              <div className="text-left">
                <input
                  type="submit"
                  className="w-auto bg-primary  py-1 px-2 font-monrope font-semibold tracking-wider rounded-md border-2 border-primary hover:bg-transparent cursor-pointer duration-300 hover:text-primary"
                  value="ADD SERVICE"
                />
              </div>
            </form>
            {/* data table */}
            {packageDatasLoading === false ? (
              <div className="border-2 border-primary p-5">
                <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                  Manage Service Items
                </div>
                {packageDatas.length === 0 ? (
                  <EmptyComponent heading="Package"></EmptyComponent>
                ) : (
                  <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
                    <thead className="text-xs text-primary uppercase bg-transparent  ">
                      <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                        <th scope="col" className="px-6 py-5">
                          Serial No
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Title
                        </th>

                        <th scope="col" className="px-6 py-5">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-secondary font-monrope ">
                      {packageDatas.map((packageItem, index) => (
                        <tr
                          key={packageItem.id}
                          className="table-row border-2 border-secondary"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4  whitespace-nowrap "
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4 uppercase">
                            {packageItem?.service_package_title}
                          </td>

                          <td className="px-6 py-4 flex space-x-2 text-[24px]">
                            {/* <div
                              // onClick={() =>
                              //   navigate(`/dashboard/clients/${item.id}/update`, {
                              //     state: { item: item },
                              //   })
                              // }
                              className="cursor-pointer duration-300 hover:text-green-500"
                            >
                              <PiNotePencil />
                            </div> */}
                            <div
                              onClick={() =>
                                handleServicePackageDelete(packageItem)
                              }
                              className="cursor-pointer duration-300 hover:text-red-500"
                            >
                              <MdDelete />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ) : (
              <div className="bg-red-500 text-white">Loading</div>
            )}
          </div>
          {/* expertise section */}

          <div className="my-20">
            <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
              Expertise Section
            </div>
            <form action="" className="mb-5" onSubmit={handleExpertise}>
              <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
                {/* expertise title */}
                <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <label htmlFor="service_expertise_title">
                    Expertise Title
                  </label>
                  <input
                    onChange={onExpertiseChange}
                    className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="service_expertise_title"
                    id="service_expertise_title"
                    required
                    value={service_expertise_title}
                    placeholder="Fly to the Moon.."
                  />
                </div>
                {/* expertise content */}
                <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                  <label htmlFor="service_expertise_content">
                    Service Content
                  </label>
                  <input
                    onChange={onExpertiseChange}
                    className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                    type="text"
                    name="service_expertise_content"
                    id="service_expertise_content"
                    required
                    value={service_expertise_content}
                    placeholder="Fly to the Moon.."
                  />
                </div>
              </div>

              <div className="text-left mt-5">
                <input
                  type="submit"
                  className="w-auto uppercase bg-primary py-1 px-2 font-monrope font-semibold tracking-wider rounded-md border-2 border-primary hover:bg-transparent cursor-pointer duration-300 hover:text-primary"
                  value="ADD Expertise"
                />
              </div>
            </form>
            {/* data table */}
            {expertiseDataLoading === false ? (
              <div className="border-2 border-primary p-5">
                <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                  Manage Expertise Items
                </div>
                {expertiseDatas.length === 0 ? (
                  <EmptyComponent heading="Expertise"></EmptyComponent>
                ) : (
                  <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
                    <thead className="text-xs text-primary uppercase bg-transparent  ">
                      <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                        <th scope="col" className="px-6 py-5">
                          Serial No
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Title
                        </th>

                        <th scope="col" className="px-6 py-5">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-secondary font-monrope ">
                      {expertiseDatas.map((item, index) => (
                        <tr
                          key={index}
                          className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4  whitespace-nowrap "
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4 uppercase">
                            {item.service_expertise_title}
                          </td>

                          <td className="px-6 py-4 flex space-x-2 text-[24px]">
                            {/* <div className="cursor-pointer duration-300 hover:text-green-500">
                              <PiNotePencil />
                            </div> */}
                            <div
                              onClick={() => handleExpertiseDelete(item)}
                              className="cursor-pointer duration-300 hover:text-red-500"
                            >
                              <MdDelete />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ) : (
              <div className="bg-red-500 text-white">Loading</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;
