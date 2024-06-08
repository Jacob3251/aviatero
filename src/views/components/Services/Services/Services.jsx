import { site_sensitive_info } from "../../../../utils/helper";
import useServicePackages from "../../../../utils/hooks/useServicePackages";
function Services() {
  const [servicePackageDatas, servicePackageDatasLoading] =
    useServicePackages();

  return (
    <div className="w-full  text-secondary  mb-[150px]">
      <div className="text-center font-noto font-medium text-[36px] sm:text-[48px] lg:text-[64px] text-primary">
        Our Services
      </div>
      <div className="my-[36px] sm:my-[64px] md:my-[84px] lg:my-[96px] xl:my-[150px] ">
        {servicePackageDatas.map((item, index) => (
          <div
            key={item.id}
            className="mb-[30px] sm:mb-[40px] md:mb-[64px] lg:mb-[120px] xl:mb-[150px]"
          >
            <div
              className={`grid grid-cols-1  w-full  md:grid-cols-2 md:gap-x-[20px] lg:gap-x-[50px] xl:gap-x-[144px] place-content-center`}
            >
              <div
                className={`h-full  w-full  ${
                  index % 2 == 1 && "md:order-last"
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={
                    site_sensitive_info.site_origin +
                    item.storage_imagelink.split("\\")[1]
                  }
                  alt=""
                />
              </div>
              <div className="w-full h-full ">
                <h1 className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[36px] xl:text-[48px] text-primary font-noto mb-[10px] sm:mb-[16px] md:mb-[24px] lg:mb-[32px] xl:mb-[45px]">
                  {item.service_package_title}
                </h1>
                <p className="font-monrope text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px]  text-secondary leading-[25px] sm:leading-[35px] md:sm:leading-[35px] xl:sm:leading-[35px]">
                  {item.service_package_content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
