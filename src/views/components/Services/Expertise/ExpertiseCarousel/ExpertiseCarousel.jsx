import { Swiper, SwiperSlide } from "swiper/react";
import "./ExpertiseCarousel.css";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
function ExpertiseCarousel({ expertiseData }) {
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
        {expertiseData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="text-left  w-full    overflow-hidden h-[406px]  ">
              <div className="text-[24px] text-primary font-medium font-noto mb-[10px]">
                {item.service_expertise_title}:
              </div>
              <div className="text-[20px] text-secondary font-normal font-monrope leading-[25px]">
                {item.service_expertise_content}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ExpertiseCarousel;
