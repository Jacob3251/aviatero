import wallet from "../../../../../assets/images/Logos/Dashboard Logos/wallet.png";
import due from "../../../../../assets/images/Logos/Dashboard Logos/Due.png";
function ClientInfoBox() {
  return (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="text-[24px] font-monrope font-semibold mb-5">Clients</div>
      <div className=" w-full grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 place-content-center gap-5 uppercase font-monrope font-semibold">
        <div className="rounded-md cta-border px-[25px] py-[22px]">
          <div className="flex justify-start items-center space-x-[32px]">
            <div>
              <img src={wallet} alt="" />
            </div>
            <div className="text-secondary text-[24px]">25000 ৳</div>
          </div>
          <div className="mt-[20px]">Payment - Today</div>
        </div>
        <div className="rounded-md cta-border px-[25px] py-[22px]">
          <div className="flex justify-start items-center space-x-[32px]">
            <div>
              <img src={wallet} alt="" />
            </div>
            <div className="text-secondary text-[24px]">25000 ৳</div>
          </div>
          <div className="mt-[20px]">Payment - Monthly</div>
        </div>
        <div className="rounded-md cta-border px-[25px] py-[22px]">
          <div className="flex justify-start items-center space-x-[32px]">
            <div>
              <img src={due} alt="" />
            </div>
            <div className="text-secondary text-[24px]">25000 ৳</div>
          </div>
          <div className="mt-[20px]">Total Due</div>
        </div>
      </div>
    </div>
  );
}

export default ClientInfoBox;
