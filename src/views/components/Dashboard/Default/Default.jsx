import toast from "react-hot-toast";
import useDashboardData from "../../../../utils/hooks/useDashboardData";
import SimpleBarChart from "../../Reusable/Charts/SimpleBarChart/SimpleBarChart";
import SimplePieChart from "../../Reusable/Charts/SimplePieChart/SimplePieChart";
import ClientInfoBox from "./ClientInfoBox/ClientInfoBox";
import FinanceInfoBox from "./FinanceInfoBox/FinanceInfoBox";
import LeadsInfoBox from "./LeadsInfoBox/LeadsInfoBox";
import { removeFromLocale } from "../../../../utils/helper";
import Loader from "../../Reusable/Loader/Loader";

function Default() {
  const [data, loading, setData, setLoading, errorID] = useDashboardData();
  if (errorID === 1) {
    toast.error("Session Expired");
    removeFromLocale();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  if (errorID === 2) {
    return (
      <div className="w-full h-full flex justify-center items-center text-primary font-monrope text-[24px] capitalize">
        You dont have permission to access this url!!
      </div>
    );
  }
  return (
    <>
      {loading === false ? (
        <div className="w-full h-full text-primary ">
          <div className="p-11 space-y-5">
            {/* <FinanceInfoBox></FinanceInfoBox> */}
            <ClientInfoBox data={data}></ClientInfoBox>
            {/* <LeadsInfoBox></LeadsInfoBox> */}
            <div className="text-[24px] font-monrope capitalize font-bold">
              Client Vs Leads
            </div>
            <div className=" w-full  grid grid-cols-7">
              <div className="w-full h-[400px] col-span-7 ">
                <SimpleBarChart data={data.clientvsmonth}></SimpleBarChart>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <Loader></Loader>
        </div>
      )}
    </>
  );
}

export default Default;
