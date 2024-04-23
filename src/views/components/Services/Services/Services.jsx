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
      <div className="text-center font-noto font-medium text-[36px] 2xl:text-[64px] text-primary">
        Our Services
      </div>
      <div className="my-[36px] 2xl:my-[150px] px-[40px] 2xl:px-[176px] bg-red-600">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex justify-center items-center w-full h-auto  mb=-[70px] xl:mb-[150px] ${
              index % 2 === 0
                ? " flex-col md:flex-row "
                : " flex-col md:flex-row-reverse "
            }`}
          >
            <div
              className={`h-full min-h-[300px] max-h-[530px] w-full ${
                index % 2 === 0 ? "md:mr-[140px]" : "md:ml-[140px]"
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <div className="w-full h-full md:overflow-hidden">
              <h1 className="text-[20px] md:text-[48px] text-primary font-noto mb-[20px] md:mb-[45px]">
                {item.title}
              </h1>
              <p className="font-monrope text-[14px] md:text-[24px] text-secondary leading-[25px] md:leading-[35px]">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
