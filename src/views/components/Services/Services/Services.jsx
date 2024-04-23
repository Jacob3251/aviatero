import image1 from "../../../../assets/images/Services/Services/1.png";
import image2 from "../../../../assets/images/Services/Services/2.png";
import image3 from "../../../../assets/images/Services/Services/3.png";
function Services() {
  const data = [
    {
      id: 1,
      image: image1,
      title: "Visit Visa Assistance",
      details:
        "Wanderlust knows no bounds, and neither should your travel aspirations. Whether you're planning a vacation, visiting family, or exploring new destinations, our visit visa services streamline the application process. We provide comprehensive guidance and support to ensure your travel plans come to fruition without any administrative hurdles.",
    },
    {
      id: 2,
      image: image2,
      title: "Student Visa Processing",
      details:
        "Embarking on an educational journey in a foreign land opens doors to unparalleled academic and cultural enrichment. Our dedicated team ensures a hassle-free process for obtaining student visas, guiding you through every step from application submission to visa approval. With our expertise, you can focus on preparing for your academic endeavors while we handle the paperwork.",
    },
    {
      id: 3,
      image: image3,
      title: "Migration Services",
      details:
        "Dreaming of a new beginning in a different country? Our migration services cater to individuals seeking to relocate for various purposes, including employment, investment, or family reunification. From evaluating eligibility criteria to facilitating documentation, we strive to make your migration journey smooth and efficient.",
    },
  ];
  return (
    <div className="w-full  text-secondary  mb-[150px]">
      <div className="text-center font-noto font-medium text-[36px] sm:text-[48px] 2xl:text-[64px] text-primary">
        Our Services
      </div>
      <div className="my-[36px] 2xl:my-[150px] px-[40px] 2xl:px-[176px] ">
        {data.map((item, index) => (
          <div key={item.id} className="mb-[30px] xl:mb-[150px]">
            <div
              className={`grid grid-cols-1  w-full  md:grid-cols-2 md:gap-x-[20px] lg:gap-x-[50px] xl:gap-x-[144px] place-content-center`}
            >
              <div
                className={`h-full  w-full  ${
                  index % 2 == 1 && "md:order-last"
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="w-full h-full ">
                <h1 className="text-[20px] sm:text-[32px] md:text-[36px] xl:text-[48px] text-primary font-noto mb-[20px] sm:mb-[20px] md:mb-[30px] xl:mb-[45px]">
                  {item.title}
                </h1>
                <p className="font-monrope text-[14px] sm:text-[24px] md:sm:text-[24px] xl:sm:text-[24px] text-secondary leading-[25px] sm:leading-[35px] md:sm:leading-[35px] xl:sm:leading-[35px]">
                  {item.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
