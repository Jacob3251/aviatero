import ExpertiseCarousel from "./ExpertiseCarousel/ExpertiseCarousel";

function Expertise() {
  return (
    <div className="px-[40px] xl:px-[176px] mb-[250px]">
      <div className="text-center text-[36px] xl:text-[64px] font-noto font-bold text-primary mb-[80px] xl:mb-[150px]">
        Why Choose Aviate Abroad?
      </div>
      <div className="w-[95%] mx-auto lg:hidden">
        <ExpertiseCarousel></ExpertiseCarousel>
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-[32px] place-content-center  ">
        <div className=" cta-border p-[40px] xl:p-[80px] text-left">
          <div className="text-[36px] text-primary font-medium font-noto mb-[45px]">
            Expert Guidance:
          </div>
          <div className="text-[24px] text-secondary font-normal font-monrope leading-[35px]">
            Our team comprises experienced professionals well-versed in
            immigration regulations and procedures. We offer personalized
            guidance tailored to your specific needs, ensuring accurate and
            timely assistance throughout the visa or migration process.
          </div>
        </div>
        <div className="cta-border p-[40px] xl:p-[80px] text-left">
          <div className="text-[36px] text-primary font-medium font-noto mb-[45px]">
            Reliability and Trust:
          </div>
          <div className="text-[24px] text-secondary font-normal font-monrope leading-[35px]">
            We prioritize transparency and integrity in our operations,
            fostering trust and reliability among our clients. Rest assured,
            your aspirations are in capable hands as we work diligently to
            fulfill your immigration goals.
          </div>
        </div>
        <div className=" cta-border p-[40px] xl:p-[80px] text-left">
          <div className="text-[36px] text-primary font-medium font-noto mb-[45px]">
            Comprehensive <br />
            Support:
          </div>
          <div className="text-[24px] text-secondary font-normal font-monrope leading-[35px]">
            From initial consultation to post-visa/migration assistance, we
            offer comprehensive support at every juncture of your journey. Our
            end-to-end services ensure a smooth transition, allowing you to
            focus on embracing new opportunities with confidence.
          </div>
        </div>
        <div className="cta-border p-[40px] xl:p-[80px] text-left">
          <div className="text-[36px] text-primary font-medium font-noto mb-[45px]">
            Customer-Centric Approach:
          </div>
          <div className="text-[24px] text-secondary font-normal font-monrope leading-[35px]">
            At Aviate Abroad, your satisfaction is our priority. We prioritize
            open communication, responsiveness, and attentive customer service
            to address your queries and concerns promptly, fostering a positive
            client experience at every stage.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
