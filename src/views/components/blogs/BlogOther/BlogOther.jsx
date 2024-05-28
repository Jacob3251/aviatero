import React from "react";

function BlogOther() {
  return (
    <div>
      {/* cost */}
      <div>
        <div className="text-[48px] font-noto text-primary mb-[20px]">
          Costs
        </div>
        <div className="text-secondary text-[24px] mb-[20px]">
          The cost of visiting the UK can vary depending on factors such as the
          duration of your stay, accommodation preferences, and activities
          planned. Our team can help you create a budget that suits your needs
          and ensures you make the most of your trip without breaking the bank.
        </div>
      </div>
      {/* accomodation */}
      <div>
        <div className="text-[48px] font-noto text-primary mb-[20px]">
          Accommodation
        </div>
        <div className="text-secondary text-[24px] mb-[20px]">
          Whether you prefer luxury hotels, cozy bed and breakfasts, or
          budget-friendly hostels, we can help you find the perfect
          accommodation for your stay in the UK. From city center apartments to
          countryside retreats, we have options to suit every taste and budget.
        </div>
      </div>
      {/* additional service */}
      <div>
        <div className="text-[48px] font-noto text-primary mb-[20px]">
          Additional Services
        </div>
        <div className="text-secondary text-[24px] mb-[20px]">
          In addition to visa assistance and accommodation bookings, Aviate
          Abroad offers a range of additional services to enhance your UK visit,
          including:
        </div>
        <div className="">
          <div className="gap-y-5 md:gap-x-5 grid  grid-cols-1 md:grid-cols-4 mb-5">
            <div className="text-secondary text-[24px] font-bold col-span-1 ">
              Transportation
            </div>
            <div className=" text-secondary text-[24px] col-span-1 md:col-span-3">
              Airport transfers, car rentals, and guided tours.
            </div>
          </div>
          <div className="gap-y-5 md:gap-x-5 grid  grid-cols-1 md:grid-cols-4 mb-5">
            <div className="text-secondary text-[24px] font-bold col-span-1 ">
              Travel Itineraries
            </div>
            <div className=" text-secondary text-[24px] col-span-1 md:col-span-3">
              Customized travel itineraries tailored to your interests and
              preferences.
            </div>
          </div>
          <div className="gap-y-5 md:gap-x-5 grid  grid-cols-1 md:grid-cols-4 mb-5">
            <div className="text-secondary text-[24px] font-bold col-span-1 ">
              Local Guides
            </div>
            <div className=" text-secondary text-[24px] col-span-1 md:col-span-3">
              Knowledgeable guides to help you navigate your destination and
              discover hidden gems.
            </div>
          </div>
          <div className="gap-y-5 md:gap-x-5 grid  grid-cols-1 md:grid-cols-4 ">
            <div className="text-secondary text-[24px] font-bold col-span-1 ">
              24/7 Support
            </div>
            <div className=" text-secondary text-[24px] col-span-1 md:col-span-3">
              Our dedicated team is available around the clock to assist you
              with any questions or concerns during your visit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogOther;
