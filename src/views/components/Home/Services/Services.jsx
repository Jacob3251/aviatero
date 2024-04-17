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
    <div className="bg-[#1E1E1E] grid grid-cols-1 lg:grid-cols-3 place-content-center gap-y-[80px] lg:gap-y-0  md:px-0 py-[120px] gap-x-0 lg:gap-x-[120px] xl:gap-x-[197px] h-auto lg:h-[754px] w-full">
      {data.map((item) => (
        <IndividualService data={item} key={item.id}></IndividualService>
      ))}
    </div>
  );
}

export default Services;
