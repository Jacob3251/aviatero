import visit from "../../../../assets/images/home/services/1.png";
import study from "../../../../assets/images/home/services/2.png";
import migrate from "../../../../assets/images/home/services/3.png";
import IndividualService from "./IndividualService";
function Services() {
  const data = [
    {
      id: 1,
      title: "Visit",
      subMenu: ["Uk", "Us", "Canada", "India", "Thailand"],
      imgLink: visit,
    },
    {
      id: 2,
      title: "Study",
      subMenu: ["Uk", "Us", "Canada", "Germany", "Finland"],
      imgLink: study,
    },
    {
      id: 3,
      title: "Migrate",
      subMenu: ["Uk", "Us", "Canada"],
      imgLink: migrate,
    },
  ];
  return (
    // lg:h-[754px]
    <div className="bg-[#1E1E1E] flex flex-col md:flex-row justify-center items-center md:items-start space-y-[50px] md:space-y-0 md:space-x-[20px]  xl:space-x-[80px]  md:px-0 py-[120px] h-auto ">
      {data.map((item) => (
        <IndividualService data={item} key={item.id}></IndividualService>
      ))}
    </div>
  );
}

export default Services;
