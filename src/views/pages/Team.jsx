import DefaultLayout from "../Layouts/DefaultLayout";
import ScrollToTop from "../../utils/Other/ScrollToTop";
import useTeamMember from "../../utils/hooks/useTeamMember";
import { site_sensitive_info } from "../../utils/helper";
import Loader from "../components/Reusable/Loader/Loader";
import { Helmet } from "react-helmet";
function Team() {
  const [teammemberData, teammemberDataLoading] = useTeamMember();
  return (
    <>
      <Helmet>
        <title>Aviate - Teams</title>
      </Helmet>
      {teammemberDataLoading === false ? (
        <DefaultLayout>
          <ScrollToTop />
          <div className="px-[50px] sm:px-[48px] lg:px-[150px] xl:px-[176px]">
            {/* heading part */}
            <div className="md:mt-[30px] lg:mt-[150px] mb-[50px] lg:mb-[120px] flex flex-col justify-center items-center">
              <div className="text-primary font-noto text-[34px] sm:text-[40px] lg:text-[64px] font-medium uppercase mb-[30px] lg:mb-[60px]">
                THE TEAM
              </div>
              <div className="w-[80%] font-monrope text-[14px] sm:text-[18px] lg:text-[24px] text-secondary leading-6 text-center lg:text-left lg:leading-[35px] font-extralight">
                Experts in international education and immigration services,
                we're here to make your travel, study, or migration experience
                seamless. From visas to cultural adaptation, we've got you
                covered. Let us help you reach your goals with confidence.
              </div>
            </div>
            {/* Members grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[34px] gap-y-[60px] mb-[120px] ">
              {teammemberData.map((item) => (
                <div
                  key={item.id}
                  className=" cta-border px-[20px] py-[20px] sm:p-[20px] xl:p-[32px]"
                >
                  <div className="w-full mb-3 md:mb-[28px] xl:mb-[32px]">
                    <img
                      src={item.member_imagelink}
                      className="w-full h-full object-contain "
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="font-noto  text-primary text-[20px] lg:text-[24px] xl:text-[32px] font-medium mb-2 sm:mb-5 xl:mb-[25px]">
                      {item.member_name}
                    </div>
                    <div className="font-noto text-secondary text-[14px] md:text-[16px]">
                      {item.member_position}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DefaultLayout>
      ) : (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <Loader></Loader>
        </div>
      )}
    </>
  );
}

export default Team;
