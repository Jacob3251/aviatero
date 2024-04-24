import { Swiper, SwiperSlide } from "swiper/react";
import "./ExpertiseCarousel.css";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
function ExpertiseCarousel() {
  return (
    <div className="w-full ">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={true}
        // pagination={true}
        modules={[]}
        className="expertise"
      >
        <SwiperSlide>
          <div className="text-left  w-full    overflow-hidden h-[406px]  ">
            <div className="text-[24px] text-primary font-medium font-noto mb-[10px]">
              Expert Guidance:
            </div>
            <div className="text-[20px] text-secondary font-normal font-monrope leading-[25px]">
              Our team comprises experienced professionals well-versed in
              immigration regulations and procedures. We offer personalized
              guidance tailored to your specific needs, ensuring accurate and
              timely assistance throughout the visa or migration process.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left  w-full    overflow-hidden h-[406px]  ">
            <div className="text-[24px] text-primary font-medium font-noto mb-[10px]">
              Reliability and Trust:
            </div>
            <div className="text-[20px] text-secondary font-normal font-monrope leading-[25px]">
              We prioritize transparency and integrity in our operations,
              fostering trust and reliability among our clients. Rest assured,
              your aspirations are in capable hands as we work diligently to
              fulfill your immigration goals.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left  w-full    overflow-hidden h-[406px]  ">
            <div className="text-[24px] text-primary font-medium font-noto mb-[10px]">
              Comprehensive Support:
            </div>
            <div className="text-[20px] text-secondary font-normal font-monrope leading-[25px]">
              From initial consultation to post-visa/migration assistance, we
              offer comprehensive support at every juncture of your journey. Our
              end-to-end services ensure a smooth transition, allowing you to
              focus on embracing new opportunities with confidence.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left  w-full    overflow-hidden h-[406px]  ">
            <div className="text-[24px] text-primary font-medium font-noto mb-[10px]">
              Customer-Centric Approach:
            </div>
            <div className="text-[20px] text-secondary font-normal font-monrope leading-[25px]">
              At Aviate Abroad, your satisfaction is our priority. We prioritize
              open communication, responsiveness, and attentive customer service
              to address your queries and concerns promptly, fostering a
              positive client experience at every stage.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ExpertiseCarousel;
