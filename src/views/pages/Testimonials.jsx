import DefaultLayout from "../Layouts/DefaultLayout";
import ContactForm from "../components/Reusable/ContactForm/ContactForm";
import TestimonialSwiper from "../components/Testimonial/TestimonialSwiper/TestimonialSwiper";

function Testimonials() {
  return (
    <DefaultLayout>
      <div className="h-[calc(100vh_-_332px)]  w-[80%] mx-auto">
        <TestimonialSwiper></TestimonialSwiper>
      </div>
    </DefaultLayout>
  );
}

export default Testimonials;
