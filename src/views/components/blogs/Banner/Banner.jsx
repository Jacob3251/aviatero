import React from "react";
import "./Banner.css";
import { site_sensitive_info } from "../../../../utils/helper";
function Banner({ data }) {
  console.log(data.pageHeading.banner);
  return (
    <div
      className="w-full h-full banner-div"
      // style={{
      //   backgroundImage: `${
      //     site_sensitive_info.site_origin +
      //     data.pageHeading.banner.split("uploads\\")[1]
      //   }`,
      // }}
    >
      <img
        className="w-full h-full object-cover"
        src={data?.pageHeading?.banner}
        alt=""
      />
    </div>
  );
}

export default Banner;
