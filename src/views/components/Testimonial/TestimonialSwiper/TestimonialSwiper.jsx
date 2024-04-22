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
    <div className="h-full w-full relative">
      <button
        className="border-none cursor-pointer absolute top-[50%] z-50 left-5 -translate-y-[50%] bg-transparent hover:bg-primary duration-300 rounded-full w-[40px] h-[40px] flex justify-center items-center text-[42px] text-primary hover:text-secondary"
        onClick={() => swiperRef.current.slidePrev()}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className="border-none cursor-pointer absolute top-[50%] z-50 right-5 -translate-y-[50%] bg-transparent hover:bg-primary duration-300 rounded-full w-[40px] h-[40px] flex justify-center items-center text-[42px] text-primary hover:text-secondary"
        onClick={() => swiperRef.current.slideNext()}
      >
        <MdKeyboardArrowRight />
      </button>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full  h-full m flex justify-center items-center px-[80px] ">
            <div className="flex testimonial-item  w-full space-x-[60px] justify-center items-center">
              <div className="  w-[45%] xl:w-[336px] h-[449px]">
                <img src={img1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className=" w-[55%] xl:w-[400px] h-full  flex flex-col justify-center items-start">
                <div className="text-[48px] font-noto text-primary font-medium mb-[45px]">
                  Nazia Islam
                </div>
                <div className="text-[24px] font-noto text-secondary font-medium mb-[45px]">
                  <GoLocation /> <span>Sylhet, Bangladesh </span>
                </div>
                <div className="text-primary text-[25px] space-x-[15px] mb-[45px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-start mb-[45px]">
                  <span className="font-monrope text-[24px] font-normal text-left text-secondary leading-[30px]">
                    Aviate Abroad helped turn my dream of traveling abroad into
                    a reality! Their knowledgeable team provided me with all the
                    information I needed to plan my ...
                  </span>{" "}
                </div>
                <div className="text-primary font-monrope text-[16px] font-bold flex items-center">
                  <span>Full Story</span>{" "}
                  <MdOutlineKeyboardArrowRight className="text-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  h-full m flex justify-center items-center px-[80px] ">
            <div className="flex testimonial-item  w-full space-x-[60px] justify-center items-center">
              <div className="  w-[45%] xl:w-[336px] h-[449px]">
                <img src={img1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className=" w-[55%] xl:w-[400px] h-full  flex flex-col justify-center items-start">
                <div className="text-[48px] font-noto text-primary font-medium mb-[45px]">
                  Nazia Islam
                </div>
                <div className="text-[24px] font-noto text-secondary font-medium mb-[45px]">
                  <GoLocation /> <span>Sylhet, Bangladesh </span>
                </div>
                <div className="text-primary text-[25px] space-x-[15px] mb-[45px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-start mb-[45px]">
                  <span className="font-monrope text-[24px] font-normal text-left text-secondary leading-[30px]">
                    Aviate Abroad helped turn my dream of traveling abroad into
                    a reality! Their knowledgeable team provided me with all the
                    information I needed to plan my ...
                  </span>{" "}
                </div>
                <div className="text-primary font-monrope text-[16px] font-bold flex items-center">
                  <span>Full Story</span>{" "}
                  <MdOutlineKeyboardArrowRight className="text-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  h-full m flex justify-center items-center px-[80px] ">
            <div className="flex testimonial-item  w-full space-x-[60px] justify-center items-center">
              <div className="  w-[45%] xl:w-[336px] h-[449px]">
                <img src={img1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className=" w-[55%] xl:w-[400px] h-full  flex flex-col justify-center items-start">
                <div className="text-[48px] font-noto text-primary font-medium mb-[45px]">
                  Nazia Islam
                </div>
                <div className="text-[24px] font-noto text-secondary font-medium mb-[45px]">
                  <GoLocation /> <span>Sylhet, Bangladesh </span>
                </div>
                <div className="text-primary text-[25px] space-x-[15px] mb-[45px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-start mb-[45px]">
                  <span className="font-monrope text-[24px] font-normal text-left text-secondary leading-[30px]">
                    Aviate Abroad helped turn my dream of traveling abroad into
                    a reality! Their knowledgeable team provided me with all the
                    information I needed to plan my ...
                  </span>{" "}
                </div>
                <div className="text-primary font-monrope text-[16px] font-bold flex items-center">
                  <span>Full Story</span>{" "}
                  <MdOutlineKeyboardArrowRight className="text-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  h-full m flex justify-center items-center px-[80px] ">
            <div className="flex testimonial-item  w-full space-x-[60px] justify-center items-center">
              <div className="  w-[45%] xl:w-[336px] h-[449px]">
                <img src={img1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className=" w-[55%] xl:w-[400px] h-full  flex flex-col justify-center items-start">
                <div className="text-[48px] font-noto text-primary font-medium mb-[45px]">
                  Nazia Islam
                </div>
                <div className="text-[24px] font-noto text-secondary font-medium mb-[45px]">
                  <GoLocation /> <span>Sylhet, Bangladesh </span>
                </div>
                <div className="text-primary text-[25px] space-x-[15px] mb-[45px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-start mb-[45px]">
                  <span className="font-monrope text-[24px] font-normal text-left text-secondary leading-[30px]">
                    Aviate Abroad helped turn my dream of traveling abroad into
                    a reality! Their knowledgeable team provided me with all the
                    information I needed to plan my ...
                  </span>{" "}
                </div>
                <div className="text-primary font-monrope text-[16px] font-bold flex items-center">
                  <span>Full Story</span>{" "}
                  <MdOutlineKeyboardArrowRight className="text-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TestimonialSwiper;
