import React from "react";
import img1 from "../../../../assets/images/blogs/blog-details-1.png";
import img2 from "../../../../assets/images/blogs/blog-details-2.png";
import { site_sensitive_info } from "../../../../utils/helper";
function BlogDetails({ data }) {
  const { title, description, images } = data;
  return (
    <div className="mb-[20px] lg:mb-[50px]">
      <div className="text-[30px] lg:text-[48px] font-noto text-primary mb-2 lg:mb-[30px] capitalize">
        {title}
      </div>
      <div className=" text-secondary text-[20px] lg:text-[24px] mb-5 lg:mb-[50px]">
        {description}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[20px]">
        <div>
          <img src={images[0]} alt="" />
        </div>
        <div>
          <img src={images[1]} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
