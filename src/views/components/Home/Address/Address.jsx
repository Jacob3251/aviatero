import { TiLocation } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
function Address() {
  return (
    <div className="px-[10%] md:px-[20%]">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-[100px] md:space-y-0 md:items-start xl:space-x-[150px]   overflow-hidden  w-full xl:max-w-full  mx-auto">
        {/* uk office */}
        <div className="w-full  flex flex-col items-start px-5 xl:px-0">
          <div className="text-primary font-bold text-[36px] font-noto">
            Uk Office
          </div>
          <div className="w-full">
            <div className="text-primary font-medium text-[24px] mb-[35px]">
              Address
            </div>
            <div className="font-monrope leading-[35px] text-[24px] font-medium text-white">
              123 Maple Avenue
              <br />
              London <br /> WC1X 0AB <br /> United Kingdom
            </div>
          </div>
          <div className="w-full">
            <div className="text-primary font-medium text-[24px] mb-[35px]">
              Contact
            </div>
            <div className="font-monrope text-[24px] font-medium text-white mb-[25px]">
              026-491-348
            </div>
            <div className="font-monrope text-[24px] font-medium text-white">
              026-491-348
            </div>
          </div>
        </div>
        {/* bd office */}
        <div className="w-full flex flex-col items-start px-5 xl:px-0">
          <div className="text-primary font-bold text-[36px] font-noto">
            Bangladesh Office
          </div>
          <div>
            <div className="text-primary font-medium text-[24px] mb-[35px]">
              Branch 1
            </div>
            <div className="font-monrope text-[24px] font-medium text-white leading-[35px]">
              <TiLocation className="text-primary" /> Judge Court
              <br /> Sylhet - 3100
            </div>
            <h4 className="font-monrope text-[24px] font-medium text-white leading-[35px]">
              <BsFillTelephoneFill className="text-primary" /> +8801968461325
            </h4>
          </div>
          <div>
            <div className="text-primary font-medium text-[24px] mb-[35px]">
              Branch 2
            </div>
            <h4 className="font-monrope text-[24px] font-medium text-white leading-[35px]">
              <TiLocation className="text-primary" /> Uposhahar
              <br /> Sylhet - 3100
            </h4>
            <h4 className="font-monrope text-[24px] font-medium text-white leading-[35px]">
              <BsFillTelephoneFill className="text-primary" /> +8801968461325
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
