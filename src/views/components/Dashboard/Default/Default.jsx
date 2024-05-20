import ClientInfoBox from "./ClientInfoBox/ClientInfoBox";
import FinanceInfoBox from "./FinanceInfoBox/FinanceInfoBox";
import LeadsInfoBox from "./LeadsInfoBox/LeadsInfoBox";

function Default() {
  return (
    <div className="w-full h-full text-primary ">
      <div className="p-11 space-y-5">
        <FinanceInfoBox></FinanceInfoBox>
        <ClientInfoBox></ClientInfoBox>
        {/* <LeadsInfoBox></LeadsInfoBox> */}
      </div>
    </div>
  );
}

export default Default;
