import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import {
  convertToReactSelectOptions,
  site_sensitive_info,
} from "../../../../../utils/helper";
import Select from "react-select";
import { useContext, useRef, useState } from "react";
import { FaRegFileImage, FaStar } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import useTestimonial from "../../../../../utils/hooks/useTestimonial";
import EmptyComponent from "../../../EmptyComponent/EmptyComponent";
import { AppContext } from "../../../../../utils/contexts/AppContext";
import Loader from "../../../Reusable/Loader/Loader";
function Default() {
  const [testimonials, testimonialLoading, setTestimonials] = useTestimonial();
  const { loggedUserData } = useContext(AppContext);
  const [functionType, setFunctionType] = useState("add");
  const [testimonialId, setTestimonialId] = useState("");
  const [testimonialImglink, setTestimonialImglink] = useState("");
  const [testimonialStoragelink, setTestimonialStoragelink] = useState({});
  const [testimonialRating, setTestimonialRating] = useState(99);
  // const [testimonialImage, setTestimonialImage] = useState("");
  const [testimonialImagePreview, setTestimonialImagePreview] = useState(null);
  const [clientImage, setClientImage] = useState(null);
  const fileInputRef = useRef(null);
  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Do whatever you want with the selected file
    console.log("Selected file:", file);
    setClientImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setTestimonialImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const ratingRef = useRef();
  const data = [
    {
      id: "1",
      title: "Very Bad",
    },
    {
      id: "2",
      title: "Somewhat Bad",
    },
    {
      id: "3",
      title: "Average",
    },
    {
      id: "4",
      title: "Somewhat Good",
    },
    {
      id: "5",
      title: "Very Good",
    },
  ];
  const selectOptions = convertToReactSelectOptions(data);
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#050d0d",
      padding: "0px",
    }),
    menu: (prev, state) => ({
      ...prev,
      backgroundColor: "#333333",
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "#333333",
        color: "#D9B658",
        // paddingTop: "0px",
      };
    },
  };

  const [formData, setFormData] = useState({
    client_name: "",
    client_address: "",

    client_review: "",
  });
  const { client_name, client_address, client_review } = formData;

  const onTestimonialChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [rating, setRating] = useState(0);
  // onchange function for changing the rating
  const handleRating = (newValue) => {
    if (newValue) {
      setRating(parseInt(newValue.value));
    }
    console.log(newValue);
  };
  const handleAddTestimonial = async (event) => {
    event.preventDefault();
    const testimonialData = {
      client_name: client_name,
      client_address: client_address,
      client_rating: rating,
      client_review: client_review,
      file: clientImage,
    };
    console.log(testimonialData);
    const { data } = await axios.post(
      "https://consultancy-crm-serverside-1.onrender.com/api/testimonial",
      testimonialData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${loggedUserData.token}`,
        },
      }
    );
    if (data) {
      console.log(data);
      setFormData({
        client_name: "",
        client_address: "",
        client_review: "",
      });
      setClientImage(null);
      setRating("");
      setTestimonialRating("");
      ratingRef.current.clearValue();
      fileInputRef.current.value = null;
      toast.success("Testimonial Added");
      setTestimonials((prev) => [...prev, data.data]);
    } else {
      toast.error("Testimonial Not Added");
    }
  };
  const handleDelete = async (item) => {
    const confirm = window.confirm(
      `Are sure you want to delete ${item.client_name}'s review?`
    );
    if (confirm) {
      await axios
        .delete(
          `https://consultancy-crm-serverside-1.onrender.com/api/testimonial/${item.id}`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
            },
          }
        )
        .then((data) => {
          toast.success(`${item.client_name}'s review deleted successfully.`);
          setTestimonials(testimonials.filter((i) => i.id !== item.id));
        })
        .catch((error) => {
          toast.error(`Couldn't delete ${item.client_name}'s review!!`);
        });
    }
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log("function changed");
    if (clientImage) {
      const testimonialData = {
        client_name: client_name,
        client_address: client_address,
        client_rating: rating,
        client_review: client_review,
        file: clientImage,
      };
      console.log(testimonialData);
      const { data } = await axios.put(
        `https://consultancy-crm-serverside-1.onrender.com/api/testimonial/${testimonialId}`,
        testimonialData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      );
      if (data) {
        console.log(data);
        setFormData({
          client_name: "",
          client_address: "",
          client_review: "",
        });
        setRating("");
        setTestimonialRating("");
        ratingRef.current.clearValue();
        fileInputRef.current.value = null;
        toast.success("Testimonial Added");
        const arr = testimonials.filter((item) => item.id !== testimonialId);
        setTestimonials((prev) => [...arr, data.data]);
        setClientImage("");
      } else {
        toast.error("Testimonial Not Updated");
      }
    }

    setFunctionType("add");
  };
  const generateStars = (star) => {
    let stars = [];
    for (let i = 0; i < star; i++) {
      stars.push(<FaStar key={i}></FaStar>);
    }
    return stars;
  };
  const handleUpdateRating = (val) => {
    return selectOptions.find((item) => parseInt(item.value) === val);
  };

  return (
    <div className="">
      {testimonialLoading === false ? (
        <div>
          <div className="font-monrope font-bold text-primary  text-[20px] uppercase">
            Testimonials
          </div>
          <div>
            <div className="my-5">
              <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                Create
              </div>
              <form
                encType="multipart/form-data"
                onSubmit={
                  functionType === "add" ? handleAddTestimonial : handleUpdate
                }
                className="mb-5"
              >
                <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
                  {/* Client Name */}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="client_name">Client Name</label>
                    <input
                      className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="text"
                      name="client_name"
                      id="client_name"
                      required
                      placeholder="John Doe"
                      value={client_name}
                      onChange={onTestimonialChange}
                    />
                  </div>
                  {/* Client Address*/}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="client_address">Address</label>
                    <input
                      className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="text"
                      name="client_address"
                      id="client_address"
                      required
                      placeholder="John Doe"
                      onChange={onTestimonialChange}
                      value={client_address}
                    />
                  </div>
                  {/* Client Rating */}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] ">
                    <label htmlFor="service_content">Select Rating</label>
                    <Select
                      ref={ratingRef}
                      name="colors"
                      styles={colourStyles}
                      options={selectOptions}
                      className="basic-multi-select bg-root"
                      classNamePrefix="select"
                      onChange={handleRating}
                      value={handleUpdateRating(
                        rating !== 0 ? rating : testimonialRating
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-10 px-2">
                  {/* CLient Review */}
                  <div className="w-full text-primary font-semibold space-y-2 text-[18px] mt-5">
                    <label htmlFor="client_review">Client Review</label>
                    <textarea
                      className="w-full py-2 text-primary placeholder:text-primary placeholder:text-opacity-50 bg-transparent outline-none border-t-0 border-r-0 border-l-0 border-b-primary border-b-2"
                      type="text"
                      name="client_review"
                      id="client_review"
                      required
                      value={client_review}
                      onChange={onTestimonialChange}
                      placeholder="Aviate is a very good orgranization..."
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-x-10 md:space-y-0 md:space-x-10 px-2 mt-5">
                  {functionType !== "add" && (
                    <div>
                      <img
                        src={`${
                          clientImage === null
                            ? testimonialImglink
                            : testimonialImagePreview
                        } `}
                        alt=""
                      />
                    </div>
                  )}
                  <>
                    {/* Service Image */}
                    <div
                      htmlFor="serviceImage"
                      onClick={handleDivClick}
                      className="w-full flex flex-col justify-center items-center my-5 text-primary cursor-pointer border-2 border-primary p-5 rounded-md"
                    >
                      <FaRegFileImage className="text-[46px]" />
                      <div>
                        {clientImage === null ? "Upload File" : "File Added"}
                      </div>
                    </div>
                    <input
                      type="file"
                      name="serviceImage"
                      id="serviceImage"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileInputChange}
                    />
                  </>
                </div>
                <div className="text-left mt-5 space-x-4">
                  <input
                    type="submit"
                    className="w-auto uppercase bg-primary text-black  py-1 px-2 font-monrope font-semibold tracking-wider rounded-md border-2 border-primary hover:bg-transparent cursor-pointer duration-300 hover:text-primary"
                    value={
                      functionType === "add"
                        ? "ADD testimonial"
                        : "Update testimonial"
                    }
                  />
                  {functionType === "update" && (
                    <div
                      onClick={() => {
                        setFunctionType("add");
                        setTestimonialRating("");
                        // setTestimonialImage("");
                        setTestimonialImglink("");
                        setTestimonialStoragelink("");
                        setTestimonialImagePreview(null);
                        setRating(0);
                        setTestimonialId("");
                        setFormData({
                          client_name: "",
                          client_address: "",
                          client_rating: "",
                          client_review: "",
                        });
                      }}
                      className="w-auto inline-block uppercase bg-primary text-black  py-1 px-2 font-monrope font-semibold tracking-wider rounded-md border-2 border-primary hover:bg-transparent cursor-pointer duration-300 hover:text-primary"
                    >
                      Cancel
                    </div>
                  )}
                </div>
              </form>
              {/* data table */}
              <div className="border-2 border-primary p-5">
                <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary mb-5">
                  Manage Testimonials
                </div>
                {testimonials.length !== 0 ? (
                  <table className="w-full text-sm text-left rtl:text-right text-primary  px-5 py-5 border-spacing-0">
                    <thead className="text-xs text-primary uppercase bg-transparent  ">
                      <tr className="uppercase font-monrope font-semibold text-[14px] border-2 border-secondary">
                        <th scope="col" className="px-6 py-5">
                          Serial No
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Client Name
                        </th>
                        <th scope="col" className="px-6 py-5">
                          Rating
                        </th>

                        <th scope="col" className="px-6 py-5">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-secondary font-monrope ">
                      {testimonials.map((testimonial, index) => (
                        <tr
                          key={testimonial.id}
                          className="table-row border-2 border-secondary"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4  whitespace-nowrap "
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4 uppercase">
                            {testimonial.client_name}
                          </td>
                          <td className="px-6 py-4 uppercase">
                            <div className="flex text-primary">
                              {" "}
                              {generateStars(testimonial.client_rating)}
                            </div>
                          </td>

                          <td className="px-6 py-4 flex space-x-2 text-[24px]">
                            <div
                              onClick={() => {
                                console.log(testimonial);
                                setFunctionType("update");
                                setTestimonialRating(testimonial.client_rating);
                                setRating(testimonial.client_rating);
                                // setTestimonialImage(
                                //   testimonial.storage_imagelink
                                // );
                                setTestimonialImglink(
                                  testimonial.client_imagelink
                                );
                                // const parsedTestimonial = JSON.parse(
                                //   testimonial.storage_imagelink
                                // );
                                // console.log(
                                //   "parsedTestimonial",
                                //   parsedTestimonial
                                // );
                                // console.log(testimonial.storage_imagelink.url);

                                // setTestimonialStoragelink({
                                //   ...parsedTestimonial,
                                // });
                                setTestimonialId(testimonial.id);
                                setFormData({
                                  client_name: testimonial.client_name,
                                  client_address: testimonial.client_address,
                                  client_rating: testimonial.client_rating,
                                  client_review: testimonial.client_review,
                                });
                                // ratingRef.current.value = testimonial.client_rating;
                              }}
                              className="cursor-pointer duration-300 hover:text-green-500"
                            >
                              <PiNotePencil />
                            </div>
                            <div
                              onClick={() => handleDelete(testimonial)}
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
                  <EmptyComponent heading="Testimonials"></EmptyComponent>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[50vh] w-full flex justify-center items-center ">
          <Loader></Loader>
        </div>
      )}
    </div>
  );
}

export default Default;
