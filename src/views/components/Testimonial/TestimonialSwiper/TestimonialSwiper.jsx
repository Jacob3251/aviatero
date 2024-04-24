// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TestimonialSwiper.css";
import { useRef } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

// import testimonial images

import img1 from "../../../../assets/images/Testimonial/1.png";
import { GoLocation } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
function TestimonialSwiper() {
  const swiperRef = useRef();
  return (
    <div className="h-full w-full relative ">
      <div className="absolute  top-[50%] -translate-y-[50%] flex justify-between w-full z-[40]">
        <button
          className="border-none cursor-pointer bg-transparent hover:bg-primary duration-300 rounded-full w-[40px] h-[40px] flex justify-center items-center text-[42px] text-primary hover:text-secondary"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          className="border-none cursor-pointer  bg-transparent hover:bg-primary duration-300 rounded-full w-[40px] h-[40px] flex justify-center items-center text-[42px] text-primary hover:text-secondary"
          onClick={() => swiperRef.current.slideNext()}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
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
          <SwiperSlide>
            <div className="w-[75%]  max-h-full sm:max-h-full  h-full mx-auto   overflow-hidden flex justify-center items-center ">
              <div className="flex flex-col md:flex-row testimonial-item w-full space-y-5 xl:space-y-0 md:space-x-[40px]  justify-center items-center px-[80px] ">
                <div className="w-full h-[240px] sm:h-[370px] xl:w-[500px] xl:h-full ">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full max-w-[600px] h-full  flex flex-col justify-center items-start">
                  <div className="text-[18px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-noto text-primary font-medium mb-2 sm:mb-[20px]">
                    Nazia Islam
                  </div>
                  <div className="text-[14px] sm:text-[18px] xl:text-[18px] font-noto text-secondary font-medium mb-2 sm:mb-[20px]">
                    <GoLocation /> <span>Sylhet, Bangladesh </span>
                  </div>
                  <div className="text-primary text-[16px] sm:text-[20px] space-x-[5px] xl:space-x-[8px] mb-2 sm:mb-[20px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="flex justify-start mb-2 sm:mb-[20px] xl:mb-[45px]">
                    <span className="font-monrope text-[14px] sm:text-[18px]  font-normal text-left text-secondary xl:leading-[30px]">
                      Aviate Abroad helped turn my dream of traveling abroad
                      into a reality! Their knowledgeable team provided me with
                      all the information I needed to plan my ...
                    </span>{" "}
                  </div>
                  <div className="text-primary font-monrope text-[14px] sm:text-[18px] xl:text-[16px] font-bold flex items-center">
                    <span>Full Story</span>{" "}
                    <MdOutlineKeyboardArrowRight className="text-[16px] sm:text-[28px] xl:text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[75%]  max-h-full sm:max-h-full  h-full mx-auto   overflow-hidden flex justify-center items-center ">
              <div className="flex flex-col md:flex-row testimonial-item w-full space-y-5 xl:space-y-0 md:space-x-[40px]  justify-center items-center px-[80px] ">
                <div className="w-full h-[240px] sm:h-[370px] xl:w-[500px] xl:h-full ">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full max-w-[600px] h-full  flex flex-col justify-center items-start">
                  <div className="text-[18px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-noto text-primary font-medium mb-2 sm:mb-[20px]">
                    Nazia Islam
                  </div>
                  <div className="text-[14px] sm:text-[18px] xl:text-[18px] font-noto text-secondary font-medium mb-2 sm:mb-[20px]">
                    <GoLocation /> <span>Sylhet, Bangladesh </span>
                  </div>
                  <div className="text-primary text-[16px] sm:text-[20px] space-x-[5px] xl:space-x-[8px] mb-2 sm:mb-[20px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="flex justify-start mb-2 sm:mb-[20px] xl:mb-[45px]">
                    <span className="font-monrope text-[14px] sm:text-[18px]  font-normal text-left text-secondary xl:leading-[30px]">
                      Aviate Abroad helped turn my dream of traveling abroad
                      into a reality! Their knowledgeable team provided me with
                      all the information I needed to plan my ...
                    </span>{" "}
                  </div>
                  <div className="text-primary font-monrope text-[14px] sm:text-[18px] xl:text-[16px] font-bold flex items-center">
                    <span>Full Story</span>{" "}
                    <MdOutlineKeyboardArrowRight className="text-[16px] sm:text-[28px] xl:text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[75%]  max-h-full sm:max-h-full  h-full mx-auto   overflow-hidden flex justify-center items-center ">
              <div className="flex flex-col md:flex-row testimonial-item w-full space-y-5 xl:space-y-0 md:space-x-[40px]  justify-center items-center px-[80px] ">
                <div className="w-full h-[240px] sm:h-[370px] xl:w-[500px] xl:h-full ">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full max-w-[600px] h-full  flex flex-col justify-center items-start">
                  <div className="text-[18px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-noto text-primary font-medium mb-2 sm:mb-[20px]">
                    Nazia Islam
                  </div>
                  <div className="text-[14px] sm:text-[18px] xl:text-[18px] font-noto text-secondary font-medium mb-2 sm:mb-[20px]">
                    <GoLocation /> <span>Sylhet, Bangladesh </span>
                  </div>
                  <div className="text-primary text-[16px] sm:text-[20px] space-x-[5px] xl:space-x-[8px] mb-2 sm:mb-[20px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="flex justify-start mb-2 sm:mb-[20px] xl:mb-[45px]">
                    <span className="font-monrope text-[14px] sm:text-[18px]  font-normal text-left text-secondary xl:leading-[30px]">
                      Aviate Abroad helped turn my dream of traveling abroad
                      into a reality! Their knowledgeable team provided me with
                      all the information I needed to plan my ...
                    </span>{" "}
                  </div>
                  <div className="text-primary font-monrope text-[14px] sm:text-[18px] xl:text-[16px] font-bold flex items-center">
                    <span>Full Story</span>{" "}
                    <MdOutlineKeyboardArrowRight className="text-[16px] sm:text-[28px] xl:text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[75%]  max-h-full sm:max-h-full  h-full mx-auto   overflow-hidden flex justify-center items-center ">
              <div className="flex flex-col md:flex-row testimonial-item w-full space-y-5 xl:space-y-0 md:space-x-[40px]  justify-center items-center px-[80px] ">
                <div className="w-full h-[240px] sm:h-[370px] xl:w-[500px] xl:h-full ">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full max-w-[600px] h-full  flex flex-col justify-center items-start">
                  <div className="text-[18px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-noto text-primary font-medium mb-2 sm:mb-[20px]">
                    Nazia Islam
                  </div>
                  <div className="text-[14px] sm:text-[18px] xl:text-[18px] font-noto text-secondary font-medium mb-2 sm:mb-[20px]">
                    <GoLocation /> <span>Sylhet, Bangladesh </span>
                  </div>
                  <div className="text-primary text-[16px] sm:text-[20px] space-x-[5px] xl:space-x-[8px] mb-2 sm:mb-[20px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="flex justify-start mb-2 sm:mb-[20px] xl:mb-[45px]">
                    <span className="font-monrope text-[14px] sm:text-[18px]  font-normal text-left text-secondary xl:leading-[30px]">
                      Aviate Abroad helped turn my dream of traveling abroad
                      into a reality! Their knowledgeable team provided me with
                      all the information I needed to plan my ...
                    </span>{" "}
                  </div>
                  <div className="text-primary font-monrope text-[14px] sm:text-[18px] xl:text-[16px] font-bold flex items-center">
                    <span>Full Story</span>{" "}
                    <MdOutlineKeyboardArrowRight className="text-[16px] sm:text-[28px] xl:text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[75%]  max-h-full sm:max-h-full  h-full mx-auto   overflow-hidden flex justify-center items-center ">
              <div className="flex flex-col md:flex-row testimonial-item w-full space-y-5 xl:space-y-0 md:space-x-[40px]  justify-center items-center px-[80px] ">
                <div className="w-full h-[240px] sm:h-[370px] xl:w-[500px] xl:h-full ">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full max-w-[600px] h-full  flex flex-col justify-center items-start">
                  <div className="text-[18px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-noto text-primary font-medium mb-2 sm:mb-[20px]">
                    Nazia Islam
                  </div>
                  <div className="text-[14px] sm:text-[18px] xl:text-[18px] font-noto text-secondary font-medium mb-2 sm:mb-[20px]">
                    <GoLocation /> <span>Sylhet, Bangladesh </span>
                  </div>
                  <div className="text-primary text-[16px] sm:text-[20px] space-x-[5px] xl:space-x-[8px] mb-2 sm:mb-[20px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="flex justify-start mb-2 sm:mb-[20px] xl:mb-[45px]">
                    <span className="font-monrope text-[14px] sm:text-[18px]  font-normal text-left text-secondary xl:leading-[30px]">
                      Aviate Abroad helped turn my dream of traveling abroad
                      into a reality! Their knowledgeable team provided me with
                      all the information I needed to plan my ...
                    </span>{" "}
                  </div>
                  <div className="text-primary font-monrope text-[14px] sm:text-[18px] xl:text-[16px] font-bold flex items-center">
                    <span>Full Story</span>{" "}
                    <MdOutlineKeyboardArrowRight className="text-[16px] sm:text-[28px] xl:text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[75%]  max-h-full sm:max-h-full  h-full mx-auto   overflow-hidden flex justify-center items-center ">
              <div className="flex flex-col md:flex-row testimonial-item w-full space-y-5 xl:space-y-0 md:space-x-[40px]  justify-center items-center px-[80px] ">
                <div className="w-full h-[240px] sm:h-[370px] xl:w-[500px] xl:h-full ">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full max-w-[600px] h-full  flex flex-col justify-center items-start">
                  <div className="text-[18px] sm:text-[24px] md:text-[28px] xl:text-[32px] font-noto text-primary font-medium mb-2 sm:mb-[20px]">
                    Nazia Islam
                  </div>
                  <div className="text-[14px] sm:text-[18px] xl:text-[18px] font-noto text-secondary font-medium mb-2 sm:mb-[20px]">
                    <GoLocation /> <span>Sylhet, Bangladesh </span>
                  </div>
                  <div className="text-primary text-[16px] sm:text-[20px] space-x-[5px] xl:space-x-[8px] mb-2 sm:mb-[20px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="flex justify-start mb-2 sm:mb-[20px] xl:mb-[45px]">
                    <span className="font-monrope text-[14px] sm:text-[18px]  font-normal text-left text-secondary xl:leading-[30px]">
                      Aviate Abroad helped turn my dream of traveling abroad
                      into a reality! Their knowledgeable team provided me with
                      all the information I needed to plan my ...
                    </span>{" "}
                  </div>
                  <div className="text-primary font-monrope text-[14px] sm:text-[18px] xl:text-[16px] font-bold flex items-center">
                    <span>Full Story</span>{" "}
                    <MdOutlineKeyboardArrowRight className="text-[16px] sm:text-[28px] xl:text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialSwiper;
