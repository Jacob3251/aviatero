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
      <div className="text-center font-noto font-medium text-[64px] text-primary">
        Our Services
      </div>
      <div className="my-[150px] px-[176px]">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex justify-center items-center w-full h-[530px] mb-[150px] ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              className={`h-full aspect-square ${
                index % 2 === 0 ? "mr-[140px]" : "ml-[140px]"
              }`}
            >
              <img src={item.image} alt="" />
            </div>
            <div className="w-full">
              <h1 className="text-[48px] text-primary font-noto mb-[45px]">
                {item.title}
              </h1>
              <p className="font-monrope text-[24px] text-secondary leading-[35px]">
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
