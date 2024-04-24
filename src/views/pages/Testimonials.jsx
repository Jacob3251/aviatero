import DefaultLayout from "../Layouts/DefaultLayout";
import TestimonialSwiper from "../components/Testimonial/TestimonialSwiper/TestimonialSwiper";

function Testimonials() {
  return (
    <DefaultLayout>
      <div className="h-[calc(100vh_-_146px)] sm:h-[calc(100vh_-_167px)] md:h-[calc(100vh_-_197px)] xl:h-[calc(100vh_-_221px)]  xl:w-[80%] mx-auto">
        <TestimonialSwiper></TestimonialSwiper>
      </div>
    </DefaultLayout>
  );
}

export default Testimonials;
