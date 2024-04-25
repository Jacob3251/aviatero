import { TiLocation } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
function Address() {
  return (
    <div className="px-[40px] xl:px-[176px] mb-[150px]">
      <div className="w-full xl:w-[80%] flex flex-col md:flex-row justify-center items-center space-y-[40px] md:space-y-0 md:items-start xl:space-x-[150px]   overflow-hidden   mx-auto">
        {/* uk office */}
        <div className="w-full  flex flex-col items-start px-5 xl:px-0 ">
          <div className="text-primary font-bold text-left text-[24px] sm:text-[28px] uppercase md:text-[36px] font-noto">
            Uk Office
          </div>
          <div className="flex flex-row md:flex-col space-x-2 sm:space-x-4 md:space-x-0 justify-start items-start mt-5">
            <div className="w-full sm:w-[200px] md:w-full  md:mt-[40px] xl:mt-[65px] ">
              <div className="text-primary  font-medium text-[20px] md:text-[24px] mb-[20px] xl:mb-[35px] ">
                Address
              </div>
              <div className="font-monrope leading-[25px] md:leading-[35px] text-[14px] sm:text-[20px] md:text-[24px] font-normal text-white">
                123 Maple Avenue
                <br />
                London <br /> WC1X 0AB <br /> United Kingdom
              </div>
            </div>
            <div className="w-full  sm:w-[200px] md:w-full md:mt-[24px] xl:mt-5 ">
              <div className="text-primary font-medium text-[18px] sm:text-[20px] md:text-[24px] mb-[20px] xl:mb-[35px]">
                Contact
              </div>
              <div className="font-monrope text-[14px] sm:text-[20px] md:text-[24px] font-normal text-white mb-[10px] xl:mb-[25px]">
                026-491-348
              </div>
              <div className="font-monrope text-[14px] sm:text-[20px] md:text-[24px] font-normal text-white">
                026-491-348
              </div>
            </div>
          </div>
        </div>
        {/* bd office */}
        <div className="w-full  flex flex-col  items-start px-5 xl:px-0 ">
          <div className="text-primary font-bold text-left text-[24px] sm:text-[28px] uppercase md:text-[36px] font-noto ">
            Bangladesh Office
          </div>
          <div className="flex flex-row md:flex-col space-x-2 sm:space-x-4 md:space-x-0 justify-start items-start mt-5">
            <div className="w-full sm:w-[180px] md:w-full  md:mt-[40px] xl:mt-[65px] ">
              <div className="text-primary  font-medium text-[20px] md:text-[24px] mb-[20px] xl:mb-[35px] ">
                Branch 1
              </div>
              <div className="font-monrope  text-[14px] sm:text-[20px] md:text-[24px] font-normal text-white">
                <TiLocation className="text-primary text-[16px] mr-1" /> Judge
                Court
                <br className="hidden md:block" /> Sylhet-3100
              </div>
              <h4 className="font-monrope  text-[14px] sm:text-[20px] md:text-[24px] font-normal text-white">
                <BsFillTelephoneFill className="text-primary mr-2" />{" "}
                +8801968461325
              </h4>
            </div>
            <div className="w-full  sm:w-[180px] md:w-full md:mt-[24px] xl:mt-5 ">
              <div className="text-primary  font-medium text-[20px] md:text-[24px] mb-[20px] xl:mb-[35px]">
                Branch 2
              </div>
              <h4 className="font-monrope  text-[14px] sm:text-[20px] md:text-[24px] font-normal text-white ">
                <TiLocation className="text-primary text-[16px] mr-1" />{" "}
                Uposhahar
                <br className="hidden md:block" /> Sylhet - 3100
              </h4>
              <h4 className="font-monrope  text-[14px] sm:text-[20px] md:text-[24px] font-normal text-white ">
                <BsFillTelephoneFill className="text-primary text-[12px] mr-1" />{" "}
                +8801968461325
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
