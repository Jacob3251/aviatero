import React from "react";

function BlogOther({ data }) {
  const { costs, accomodation, additionalService } = data;
  console.log(additionalService);
  return (
    <div>
      {/* cost */}
      {costs && (
        <div className="mb-[30px]">
          <div className="text-[30px] lg:text-[48px] font-noto text-primary mb-[20px] capitalize">
            {costs?.title}
          </div>
          <div className="text-secondary text-[20px] lg:text-[24px] mb-[20px]">
            {costs.detail}
          </div>
        </div>
      )}
      {/* accomodation */}
      {accomodation && (
        <div className="mb-[30px]">
          <div className="text-[30px] lg:text-[48px] capitalize font-noto text-primary mb-[20px]">
            {accomodation?.title}
          </div>
          <div className="text-secondary text-[20px] lg:text-[24px] mb-[20px]">
            {accomodation?.detail}
          </div>
        </div>
      )}
      {/* additional service */}
      {additionalService && (
        <div className="mb-[30px]">
          <div className="text-[30px] lg:text-[48px] font-noto text-primary mb-[20px]">
            {additionalService.title}
          </div>
          <div className="text-secondary text-[20px] lg:text-[24px] mb-[20px]">
            {additionalService.description}
          </div>
          {additionalService?.services.length !== 0 && (
            <div className="">
              {additionalService?.services.map((item) => (
                <div
                  key={item.id}
                  className="gap-y-5 md:gap-x-5 grid  grid-cols-1 md:grid-cols-4 mb-5"
                >
                  <div className="text-secondary text-[20px] lg:text-[24px] font-bold col-span-1 ">
                    {item.title}
                  </div>
                  <div className=" text-secondary text-[20px] lg:text-[24px] col-span-1 md:col-span-3">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BlogOther;
