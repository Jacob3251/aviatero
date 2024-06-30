import React from "react";

function BlogDescription({ data }) {
  const { banner, description, title } = data;
  return (
    <div className="mb-[20px] lg:mb-[50px]">
      <div className="font-noto text-[30px] lg:text-[64px] text-primary mb-2 lg:mb-[30px] capitalize">
        {title}
      </div>
      <div className="text-[20px] lg:text-[24px] font-monrope text-secondary leading-snug  lg:leading-[40px]">
        {description}
      </div>
    </div>
  );
}

export default BlogDescription;
