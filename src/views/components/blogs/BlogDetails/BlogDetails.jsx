import React from "react";
import img1 from "../../../../assets/images/blogs/blog-details-1.png";
import img2 from "../../../../assets/images/blogs/blog-details-2.png";
function BlogDetails() {
  return (
    <div className="mb-[50px]">
      <div className="text-[48px] font-noto text-primary mb-[30px]">
        Details
      </div>
      <div className="space-y-[20px] text-secondary text-[24px] mb-[50px]">
        <div>
          From bustling cities like London and Edinburgh to picturesque
          countryside and charming villages, the UK offers something for every
          traveler. Explore iconic landmarks such as Big Ben, Buckingham Palace,
          and the Tower of London, or immerse yourself in the breathtaking
          beauty of the Lake District and Scottish Highlands.
        </div>
        <div>
          Our team of experienced travel advisors is here to assist you every
          step of the way, from planning your itinerary to booking
          accommodations and arranging transportation. With our insider
          knowledge and attention to detail, we ensure that your UK adventure is
          seamless and stress-free, allowing you to focus on making lifelong
          memories.
        </div>
        <div>
          So why wait? Embark on your next great adventure with Aviate Abroad
          and experience the magic of the United Kingdom like never before. Let
          us be your guide to discovering the beauty, history, and culture of
          this incredible destination. Your UK adventure starts here!
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[20px]">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
