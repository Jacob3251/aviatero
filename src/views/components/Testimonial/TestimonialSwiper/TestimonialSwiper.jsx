// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TestimonialSwiper.css";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// import testimonial images

import { GoLocation } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import EmptyComponent from "../../EmptyComponent/EmptyComponent";
import { site_sensitive_info } from "../../../../utils/helper";
function TestimonialSwiper({ testimonials }) {
  const swiperRef = useRef();

  // console.log(siteConfig);
  const generateStars = (star) => {
    let stars = [];
    for (let i = 0; i < star; i++) {
      stars.push(<FaStar key={i}></FaStar>);
    }
    return stars;
  };
  return (
    <div className="h-full w-full relative ">
      {testimonials.length !== 0 ? (
        <div className="h-full w-full relative ">
          <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={"auto"}
              spaceBetween={20}
              centeredSlides={true}
              loop={true}
              modules={[]}
              className="mySwiper"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="w-[75%]  max-h-full sm:max-h-full  h-full mx-auto   overflow-hidden flex justify-center items-center">
                    {/* flex flex-col md:flex-row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center  p-[20px] sm:p-[30px] lg:p-[50px] border-primary border-2  w-full h-full gap-5 ">
                      {/* h-[240px] sm:h-[280px]   */}
                      <div className="w-full h-full">
                        <img
                          src={
                            site_sensitive_info.site_origin +
                            item.storage_imagelink.split("uploads/")[1]
                          }
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full  h-full  flex flex-col justify-center items-start">
                        <div className="text-[18px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-noto text-primary font-medium mb-2 sm:mb-[20px]">
                          {item.client_name}
                        </div>
                        <div className="text-[14px] sm:text-[18px] xl:text-[18px] font-noto text-secondary font-medium mb-2 sm:mb-[20px] flex items-center space-x-3">
                          <GoLocation /> <span>{item.client_address}</span>
                        </div>
                        <div className="text-primary text-[16px] sm:text-[20px] space-x-[5px] xl:space-x-[8px] mb-2 sm:mb-[20px] flex">
                          {generateStars(item.client_rating)}
                        </div>
                        <div className="flex justify-start mb-2 sm:mb-[20px] xl:mb-[45px]">
                          <span className="font-monrope text-[14px] sm:text-[18px]  font-normal text-left text-secondary xl:leading-[30px]">
                            {item.client_review}...
                          </span>{" "}
                        </div>
                        {/* <div className="text-primary font-monrope text-[14px] sm:text-[18px] xl:text-[16px] font-bold flex items-center">
                          <span>Full Story</span>{" "}
                          <MdOutlineKeyboardArrowRight className="text-[16px] sm:text-[28px] xl:text-[24px]" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-5 lg:mt-0 px-12 md:px-20 lg:absolute  lg:top-[50%] lg:-translate-y-[50%] flex space-x-5 lg:space-x-0 justify-start lg:justify-between w-full z-[40]">
              <button
                className="border-none cursor-pointer bg-primary lg:bg-transparent  lg:hover:bg-primary duration-300 rounded-full w-[34px]  lg:w-[40px] aspect-square flex justify-center items-center text-[28px] lg:text-[42px] text-secondary lg:text-primary lg:hover:text-secondary"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <MdKeyboardArrowLeft />
              </button>
              <button
                className="border-none cursor-pointer  bg-primary lg:bg-transparent  lg:hover:bg-primary duration-300 rounded-full w-[34px]  lg:w-[40px] aspect-square flex justify-center items-center text-[28px] lg:text-[42px] text-secondary lg:text-primary lg:hover:text-secondary"
                onClick={() => swiperRef.current.slideNext()}
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <EmptyComponent heading="Testimonials"></EmptyComponent>
        </div>
      )}
    </div>
  );
}

export default TestimonialSwiper;
