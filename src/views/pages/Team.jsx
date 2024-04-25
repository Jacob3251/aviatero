import DefaultLayout from "../Layouts/DefaultLayout";
import image1 from "../../assets/images/Teams/1.png";
import image2 from "../../assets/images/Teams/2.png";
import image3 from "../../assets/images/Teams/3.png";
import image4 from "../../assets/images/Teams/4.png";
import image5 from "../../assets/images/Teams/5.png";
function Team() {
  const members = [
    {
      id: 1,
      name: "Rahimul Haque Chowdhury",
      position: "Founder & CEO",
      imageLink: image1,
    },
    {
      id: 2,
      name: "Sumaiya Rahman Khan",
      position: "Director of Operations",
      imageLink: image2,
    },
    {
      id: 3,
      name: "Aminul Islam Mia",
      position: "Education Consultant",
      imageLink: image3,
    },
    {
      id: 4,
      name: "Farzana Ahmed Siddique",
      position: "Immigration Specialist",
      imageLink: image4,
    },
    {
      id: 5,
      name: "Nasir Uddin Khan",
      position: "Client Relations Manager",
      imageLink: image3,
    },
    {
      id: 6,
      name: "Shehnaz Begum",
      position: "Marketing Coordinator",
      imageLink: image5,
    },
    {
      id: 7,
      name: "Abdullah Al Mamun",
      position: "Finance Manager",
      imageLink: image3,
    },
    {
      id: 8,
      name: "Taslima Akter",
      position: "Administrative Assistant",
      imageLink: image5,
    },
  ];
  return (
    <DefaultLayout>
      <div className="px-[50px] sm:px-[48px] lg:px-[150px] xl:px-[176px]">
        {/* heading part */}
        <div className="md:mt-[30px] lg:mt-[150px] mb-[50px] lg:mb-[120px] flex flex-col justify-center items-center">
          <div className="text-primary font-noto text-[34px] sm:text-[40px] lg:text-[64px] font-medium uppercase mb-[30px] lg:mb-[60px]">
            THE TEAM
          </div>
          <div className="w-[80%] font-monrope text-[14px] sm:text-[18px] lg:text-[24px] text-secondary leading-6 text-center lg:text-left lg:leading-[35px] font-extralight">
            Experts in international education and immigration services, we're
            here to make your travel, study, or migration experience seamless.
            From visas to cultural adaptation, we've got you covered. Let us
            help you reach your goals with confidence.
          </div>
        </div>
        {/* Members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[34px] gap-y-[60px] mb-[120px] ">
          {members.map((item) => (
            <div
              key={item.id}
              className=" cta-border px-[20px] py-[20px] sm:p-[20px] xl:p-[32px]"
            >
              <div className="w-full mb-3 md:mb-[28px] xl:mb-[32px]">
                <img
                  src={item.imageLink}
                  className="w-full h-full object-contain "
                  alt=""
                />
              </div>
              <div className="">
                <div className="font-noto  text-primary text-[20px] lg:text-[24px] xl:text-[32px] font-medium mb-2 sm:mb-5 xl:mb-[25px]">
                  {item.name}
                </div>
                <div className="font-noto text-secondary text-[14px] md:text-[16px]">
                  {item.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Team;
