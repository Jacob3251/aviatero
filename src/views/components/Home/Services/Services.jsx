import React from "react";
import visit from "../../../../assets/images/home/services/1.png";
import study from "../../../../assets/images/home/services/2.png";
import migrate from "../../../../assets/images/home/services/3.png";
import IndividualService from "./IndividualService";
function Services({ siteConfig }) {
  const { blogPageData } = siteConfig.blogPageData;
  // console.log(blogPageData);
  // console.log(blogPageData);
  // const visitData = blo
  const data = [
    {
      id: 1,
      title: "Visit",
      subMenu: siteConfig.blogPageData.visitData,
      imgLink: visit,
    },
    {
      id: 2,
      title: "Study",
      subMenu: siteConfig.blogPageData.studyData,
      imgLink: study,
    },
    {
      id: 3,
      title: "Migrate",
      subMenu: siteConfig.blogPageData.migrateData,
      imgLink: migrate,
    },
  ];
  console.log(data);
  return (
    // lg:h-[754px]
    <div className="bg-root flex flex-col md:flex-row justify-center items-center md:items-start space-y-[50px] md:space-y-0 md:space-x-[20px]  xl:space-x-[80px]  md:px-0 py-[120px] h-auto ">
      {data.map((item) => (
        <IndividualService datas={item} key={item.id}></IndividualService>
      ))}
    </div>
  );
}

export default Services;
