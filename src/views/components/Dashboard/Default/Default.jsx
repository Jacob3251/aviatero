import SimpleBarChart from "../../Reusable/Charts/SimpleBarChart/SimpleBarChart";
import SimplePieChart from "../../Reusable/Charts/SimplePieChart/SimplePieChart";
import ClientInfoBox from "./ClientInfoBox/ClientInfoBox";
import FinanceInfoBox from "./FinanceInfoBox/FinanceInfoBox";
import LeadsInfoBox from "./LeadsInfoBox/LeadsInfoBox";

function Default() {
  const dataAtt = [
    {
      name: "Grade 1",
      Clients: 50,
      Leads: 70,
      // amt: 50,
    },
    {
      name: "Grade 1",
      Clients: 30,
      Leads: 65,
      // amt: 2210,
    },
    {
      name: "Grade 1",
      Clients: 80,
      Leads: 10,
      // amt: 2290,
    },
    {
      name: "Grade 1",
      Clients: 10,
      Leads: 90,
      // amt: 2000,
    },
  ];
  return (
    <div className="w-full h-full text-primary ">
      <div className="p-11 space-y-5">
        {/* <FinanceInfoBox></FinanceInfoBox> */}
        <ClientInfoBox></ClientInfoBox>
        {/* <LeadsInfoBox></LeadsInfoBox> */}
        <div className="text-[24px] font-monrope capitalize font-bold">
          Client Vs Leads
        </div>
        <div className=" w-full  grid grid-cols-7">
          <div className="w-full h-[400px] col-span-7 ">
            <SimpleBarChart data={dataAtt}></SimpleBarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;
