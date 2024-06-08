import { useContext } from "react";
import ScrollToTop from "../../utils/Other/ScrollToTop";
import DefaultLayout from "../Layouts/DefaultLayout";
import TestimonialSwiper from "../components/Testimonial/TestimonialSwiper/TestimonialSwiper";
import { AppContext } from "../../utils/contexts/AppContext";
import Loader from "../components/Reusable/Loader/Loader";
import useTestimonial from "../../utils/hooks/useTestimonial";

function Testimonials() {
  const { siteConfig, siteLoading } = useContext(AppContext);
  const [testimonials, testimonialLoading] = useTestimonial();
  console.log(testimonials.length);
  return (
    <>
      {siteLoading === false && testimonialLoading === false ? (
        <DefaultLayout>
          <ScrollToTop />
          <div className="h-[calc(100vh_-_146px)] sm:h-[calc(100vh_-_167px)] md:h-[calc(100vh_-_197px)] xl:h-[calc(100vh_-_221px)]  xl:w-[80%] mx-auto my-10">
            <TestimonialSwiper testimonials={testimonials}></TestimonialSwiper>
          </div>
        </DefaultLayout>
      ) : (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <Loader></Loader>
        </div>
      )}
    </>
  );
}

export default Testimonials;
