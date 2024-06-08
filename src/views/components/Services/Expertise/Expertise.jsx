import ExpertiseCarousel from "./ExpertiseCarousel/ExpertiseCarousel";

function Expertise({ siteConfig }) {
  const { serviceExpertiseData } = siteConfig;
  return (
    <div className="px-[40px] xl:px-[176px] mb-[250px]">
      <div className="text-center text-[24px] md:text-[32px] leading-[36px] xl:text-[64px] font-noto font-bold text-primary mb-[40px] xl:mb-[150px]">
        Why Choose <br className="sm:hidden" />
        Aviate Abroad?
      </div>
      <div className="w-[95%] mx-auto lg:hidden">
        <ExpertiseCarousel
          expertiseData={serviceExpertiseData}
        ></ExpertiseCarousel>
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-[32px] place-content-center  ">
        {serviceExpertiseData.map((expertise, index) => (
          <div
            key={expertise.id}
            className=" cta-border p-[40px] xl:p-[80px] text-left"
          >
            <div className="text-[36px] text-primary font-medium font-noto mb-[45px]">
              {expertise.service_expertise_title}:
            </div>
            <div className="text-[24px] text-secondary font-normal font-monrope leading-[35px]">
              {expertise.service_expertise_content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
