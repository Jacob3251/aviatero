import wallet from "../../../../../assets/images/Logos/Dashboard Logos/wallet.png";
import due from "../../../../../assets/images/Logos/Dashboard Logos/Due.png";
import { FaUserCheck, FaUserClock } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { BiMessageCheck } from "react-icons/bi";
import { MdOutlineRateReview } from "react-icons/md";
function ClientInfoBox({ data }) {
  return (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="text-[24px] font-monrope font-semibold mb-5"></div>
      <div className=" w-full grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 place-content-center gap-5 uppercase font-monrope font-semibold">
        <div className="rounded-md cta-border px-[25px] py-[22px]">
          <div className="flex justify-start items-center space-x-[32px]">
            <div className="text-[48px]">
              <FaUserCheck />
            </div>
            <div className="text-secondary text-[24px]">
              {data.totalClients}
            </div>
          </div>
          <div className="mt-[20px]">Total Clients</div>
        </div>
        <div className="rounded-md cta-border px-[25px] py-[22px]">
          <div className="flex justify-start items-center space-x-[32px]">
            <div className="text-[48px]">
              <FaUserClock />
            </div>
            <div className="text-secondary text-[24px]">{data.totalLeads}</div>
          </div>
          <div className="mt-[20px]">Total Leads</div>
        </div>
        <div className="rounded-md cta-border px-[25px] py-[22px]">
          <div className="flex justify-start items-center space-x-[32px]">
            <div className="text-[48px]">
              <TiMessages />
            </div>
            <div className="text-secondary text-[24px]">
              {data.totalUnresolved}
            </div>
          </div>
          <div className="mt-[20px]">Unresolved Messages</div>
        </div>
        <div className="rounded-md cta-border px-[25px] py-[22px]">
          <div className="flex justify-start items-center space-x-[32px]">
            <div className="text-[48px]">
              <BiMessageCheck />
            </div>
            <div className="text-secondary text-[24px]">
              {data.totalResolved}
            </div>
          </div>
          <div className="mt-[20px]">Resolved Messages</div>
        </div>
        <div className="rounded-md cta-border px-[25px] py-[22px]">
          <div className="flex justify-start items-center space-x-[32px]">
            <div className="text-[48px]">
              <MdOutlineRateReview />
            </div>
            <div className="text-secondary text-[24px]">
              {data.totalReviews}
            </div>
          </div>
          <div className="mt-[20px]">Reviews Added</div>
        </div>
      </div>
    </div>
  );
}

export default ClientInfoBox;
