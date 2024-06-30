import { useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import nextId from "react-id-generator";
import axios from "axios";
import toast from "react-hot-toast";
function Create() {
  const requirementRef = useRef();
  const additionalServiceRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [addedRequirements, setAddedRequirements] = useState([]);
  const [bannerImage, setBannerImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [additionalServices, setAdditionalServices] = useState([]);
  const navigate = useNavigate();
  const formRef = useRef({
    pageInformation: {
      title: "",
      category: "",
      siteUrl: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
    },
    pageHeading: {
      title: "",
      description: "",
      banner: null,
    },
    pageDetail: {
      title: "",
      description: "",
      images: [],
    },
    requirements: {
      title: "",
      description: "",
      requirementList: [],
    },
    costs: {
      title: "",
      detail: "",
    },
    accomodation: {
      title: "",
      detail: "",
    },
    additionalService: {
      title: "",
      description: "",
      services: [], // Ensure services is initialized as an array
    },
  });

  const handleChange =
    (section, field, index = null) =>
    (e) => {
      if (index === null) {
        formRef.current[section][field] = e.target.value;
      } else {
        formRef.current[section][field][index] = e.target.value;
      }

      if (section === "pageInformation" && field === "category") {
        setSelectedCategory(e.target.value);
      }
    };

  const handleRequirementChange = () => {
    const date = new Date();
    const requirementId = nextId(`requirement-${date.getMilliseconds()}`);
    const id = requirementId;
    const title = requirementRef.current.querySelector(
      "input[name='requirementTitle']"
    ).value;
    const description = requirementRef.current.querySelector(
      "textarea[name='requirementDescription']"
    ).value;
    // console.log(id, title, description);
    formRef.current.requirements.requirementList.push({
      id: id,
      title: title,
      description: description,
    });
    setAddedRequirements((prev) => [
      ...prev,
      { id: id, title: title, description: description },
    ]);
    requirementRef.current.querySelector(
      "input[name='requirementTitle']"
    ).value = "";
    requirementRef.current.querySelector(
      "textarea[name='requirementDescription']"
    ).value = "";
  };
  const handleRemoveRequirement = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this requirement?"
    );
    if (confirm) {
      const addedRequirementDatas =
        formRef.current.requirements.requirementList;
      const rest = addedRequirementDatas.filter((item) => item.id !== id);
      // console.log(rest);
      formRef.current.requirements.requirementList = rest;
      setAddedRequirements([...rest]);
      // console.log(formRef.current.requirements.requirementList);
    }
  };

  const handleAdditionalServiceChange = () => {
    const date = new Date();
    const requirementId = nextId(`additionalService-${date.getMilliseconds()}`);
    const id = requirementId;
    const title = additionalServiceRef.current.querySelector(
      "input[name='serviceTitle']"
    ).value;
    const detail = additionalServiceRef.current.querySelector(
      "textarea[name='serviceDetail']"
    ).value;
    // console.log(title, detail);
    formRef.current.additionalService.services = [
      ...additionalServices,
      { id, title, detail },
    ];
    setAdditionalServices((prev) => [
      ...prev,
      { id, title: title, detail: detail },
    ]);
    additionalServiceRef.current.querySelector(
      "input[name='serviceTitle']"
    ).value = "";
    additionalServiceRef.current.querySelector(
      "textarea[name='serviceDetail']"
    ).value = "";
  };
  const handleRemoveAdditionalService = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this requirement?"
    );
    if (confirm) {
      const addedAdditionalServiceDatas =
        formRef.current.additionalService.services;
      const rest = addedAdditionalServiceDatas.filter((item) => item.id !== id);
      // console.log(rest);
      formRef.current.additionalService.services = rest;
      setAdditionalServices([...rest]);
      // console.log(formRef.current.requirements.requirementList);
    }
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 2) {
      alert("You can only upload up to 2 images.");
      e.target.value = ""; // Clear the file input
      return;
    }
    setSelectedImages(files);
    formRef.current.pageDetail.images = files;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formRef.current);
    const files = [bannerImage, ...selectedImages];
    // console.log(files);
    const pageInformation = formRef.current.pageInformation;
    const pageHeading = formRef.current.pageHeading;
    const pageDetail = formRef.current.pageDetail;
    const requirements = formRef.current.requirements;
    const costs = formRef.current.costs;
    const accommodation = formRef.current.accomodation;
    const additionalService = formRef.current.additionalService;
    const customForm = new FormData();
    const {
      title,
      category,
      siteUrl,
      metaTitle,
      metaDescription,
      metaKeywords,
    } = pageInformation;
    const formData = {
      title,
      category,
      siteUrl,
      metaTitle,
      metaDescription,
      metaKeywords,

      pageData: {
        pageHeading: {
          title: pageHeading.title,
          description: pageHeading.description,
        },
        pageDetail: {
          title: pageDetail.title,
          description: pageDetail.description,
        },
        requirements,
        costs: {
          title: costs.title,
          detail: costs.detail,
        },
        accommodation: {
          title: accommodation.title,
          detail: accommodation.detail,
        },
        additionalService,
      },
    };
    customForm.append("title", JSON.stringify(formData.title));
    customForm.append("category", JSON.stringify(formData.category));
    customForm.append("siteUrl", JSON.stringify(formData.siteUrl));
    customForm.append("metaTitle", JSON.stringify(formData.metaTitle));
    customForm.append("pageData", JSON.stringify(formData.pageData));
    customForm.append(
      "metaDescription",
      JSON.stringify(formData.metaDescription)
    );
    customForm.append("metaKeywords", JSON.stringify(formData.metaKeywords));
    files.forEach((file) => {
      customForm.append("files", file);
    });
    console.log(formData);
    await axios
      .post(
        "https://consultancy-crm-serverside-1.onrender.com/api/custompage",
        customForm,
        {
          "Content-Type": "multipart/form-data",
        }
      )
      .then((data) => {
        console.log(JSON.parse(data.data.data.pageData));
        toast.success("Page Added Successfully");
        setTimeout(() => {
          // window.location.reload();
          navigate("/dashboard/lcm");
        }, 1500);
      });
  };
  return (
    <div>
      {/* {console.log(addedRequirements)} */}
      <div className="p-5">
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
          <Link
            to="/dashboard/lcm"
            className="no-underline text-primary tracking-wider"
          >
            FG{" "}
          </Link>

          <span>/ Add Page</span>
        </div>
        <div>
          <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label>Page Information</label>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-x-5">
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  onChange={handleChange("pageInformation", "title")}
                />
                <select
                  type="text"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  placeholder="Description"
                  value={selectedCategory} // Set the value of the select tag
                  onChange={handleChange("pageInformation", "category")}
                >
                  <option value="">Select Page Category</option>
                  <option value="VISIT">Visit</option>
                  <option value="STUDY">Study</option>
                  <option value="MIGRATE">Migrate</option>
                </select>

                <input
                  type="text"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  placeholder="SiteUrl Path"
                  onChange={handleChange("pageInformation", "siteUrl")}
                />
                <input
                  type="text"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  placeholder="Meta Title"
                  onChange={handleChange("pageInformation", "metaTitle")}
                />
                <input
                  type="text"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  placeholder="Meta Description"
                  onChange={handleChange("pageInformation", "metaDescription")}
                />
                <input
                  type="text"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  placeholder="Meta Keywords seperated with comma"
                  onChange={handleChange("pageInformation", "metaKeywords")}
                />
              </div>
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label>Page Heading</label>
              <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  onChange={handleChange("pageHeading", "title")}
                />
                <input
                  type="text"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  placeholder="Description"
                  onChange={handleChange("pageHeading", "description")}
                />
              </div>
              <div>
                <label htmlFor="">Page Banner Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 "
                  onChange={(e) => {
                    formRef.current.pageHeading.banner = e.target.files[0];
                    setBannerImage(e.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
              <label>Page Detail</label>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 gap-y-5">
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  onChange={handleChange("pageDetail", "title")}
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  onChange={handleChange("pageDetail", "description")}
                />

                <input
                  type="file"
                  accept="image/*"
                  multiple={2}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 "
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px]">
              <label>Requirements</label>

              <input
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                placeholder="Heading Title"
                onChange={handleChange("requirements", "title")}
              />
              <input
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                type="text"
                placeholder="Heading Description"
                onChange={handleChange("requirements", "description")}
              />
              <div ref={requirementRef} className="">
                <div className="mt-5 uppercase">Add Requirement</div>
                <input
                  type="text"
                  name="requirementTitle"
                  placeholder={`Requirement Title `}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                />
                <textarea
                  type="text"
                  name="requirementDescription"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  placeholder={`Requirement Description`}
                />
                <div
                  onClick={() => handleRequirementChange()}
                  className="cursor-pointer bg-primary text-root inline-block px-3 py-2 uppercase border-primary border-2 hover:bg-transparent hover:text-primary duration-300 mt-2"
                >
                  Add
                </div>
              </div>
              {addedRequirements.length !== 0 && (
                <div className="pt-5">
                  <div className="my-2 text-[20px] uppercase">
                    Added Requirements
                  </div>
                  {addedRequirements.map((item, index) => (
                    <div
                      key={index}
                      className="border-2 border-primary p-5 rounded-md mb-5"
                    >
                      <div className="flex items-center justify-between">
                        <div>Requirement No: {index + 1}</div>
                        <div className="text-[20px] lg:text-[28px]">
                          <FaRegTrashCan
                            className="hover:text-red-500 cursor-pointer hover:scale-105 duration-300"
                            onClick={() => handleRemoveRequirement(item.id)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div>Requirement Title:</div>
                        <div>{item.title}</div>
                      </div>
                      <div className="flex flex-col">
                        <div>Requirement Description:</div>
                        <div className="">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px]">
              <label>Costs</label>
              <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 lg:space-x-5">
                <input
                  type="text"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  placeholder="Title"
                  onChange={handleChange("costs", "title")}
                />
                <input
                  type="text"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                  placeholder="Detail"
                  onChange={handleChange("costs", "detail")}
                />
              </div>
            </div>

            <div className="w-full text-primary font-semibold space-y-2 text-[18px]">
              <label>Accomodation</label>
              <div className="flex lg:flex-row flex-col lg:space-y-0 lg:space-x-5">
                <input
                  type="text"
                  placeholder="Title"
                  onChange={handleChange("accomodation", "title")}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                />
                <input
                  type="text"
                  placeholder="Detail"
                  onChange={handleChange("accomodation", "detail")}
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                />
              </div>
            </div>
            <div className="w-full text-primary font-semibold space-y-2 text-[18px]">
              <label>Additional Service</label>
              <input
                type="text"
                placeholder="Title"
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                onChange={handleChange("additionalService", "title")}
              />
              <input
                type="text"
                placeholder="Description"
                className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                onChange={handleChange("additionalService", "description")}
              />
              <div ref={additionalServiceRef}>
                <div className="mt-5 uppercase">
                  Add Additional Service Item
                </div>
                <input
                  type="text"
                  name="serviceTitle"
                  placeholder="Service Title"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                />
                <textarea
                  name="serviceDetail"
                  placeholder="Service Detail"
                  className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                />
                <div
                  onClick={handleAdditionalServiceChange}
                  className="cursor-pointer bg-primary text-root inline-block px-3 py-2 uppercase border-primary border-2 hover:bg-transparent hover:text-primary duration-300 mt-2"
                >
                  Add
                </div>
              </div>
              {additionalServices.length !== 0 && (
                <div className="pt-5">
                  <div className="my-2 text-[20px] uppercase">
                    Added Services
                  </div>
                  {additionalServices.map((item, index) => (
                    <div
                      key={index}
                      className="border-2 border-primary p-5 rounded-md mb-5"
                    >
                      <div className="flex items-center justify-between">
                        <div>Service No: {index + 1}</div>
                        <div className="text-[20px] lg:text-[28px]">
                          <FaRegTrashCan
                            className="hover:text-red-500 cursor-pointer hover:scale-105 duration-300"
                            onClick={() =>
                              handleRemoveAdditionalService(item.id)
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div>Service Title:</div>
                        <div>{item.title}</div>
                      </div>
                      <div className="flex flex-col">
                        <div>Service Detail:</div>
                        <div className="">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              className="bg-primary py-2 text-root uppercase font-monrope font-bold tracking-wider rounded-md border-2 border-primary hover:bg-transparent hover:text-primary duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
