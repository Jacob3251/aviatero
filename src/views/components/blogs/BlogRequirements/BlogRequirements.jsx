import React from "react";

function BlogRequirements({ data }) {
  const { title, description, requirementList } = data;
  return (
    <div className="space-y-0 lg:space-y-[30px] mb-[20px] lg:mb-[50px]">
      <div>
        <div className="text-[30px] lg:text-[48px] font-noto text-primary mb-[20px] capitalize">
          {title}
        </div>
        <div className="text-secondary text-[20px] lg:text-[24px] mb-5 lg:mb-[30px] w-full md:w-[95%]">
          {description}
        </div>
      </div>
      {requirementList.length !== 0 && (
        <>
          {requirementList.map((item) => (
            <div key={item.id}>
              <div className="text-primary text-[20px] lg:text-[24px] mb-[10px] capitalize">
                {item.title}
              </div>
              <div className="text-secondary text-[20px] lg:text-[24px] mb-[20px]">
                {item.description}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default BlogRequirements;
