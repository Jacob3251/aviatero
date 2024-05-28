import React, { useContext } from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import Banner from "../components/blogs/Banner/Banner";
import BlogDescription from "../components/blogs/BlogDescription/BlogDescription";
import BlogDetails from "../components/blogs/BlogDetails/BlogDetails";
import BlogRequirements from "../components/blogs/BlogRequirements/BlogRequirements";
import BlogOther from "../components/blogs/BlogOther/BlogOther";
import ContactForm from "../components/Reusable/ContactForm/ContactForm";
import { AppContext } from "../../utils/contexts/AppContext";
import Address from "../components/Home/Address/Address";

function Blogs() {
  const { siteConfig, siteLoading } = useContext(AppContext);
  return (
    <DefaultLayout>
      <div className="px-[20px] lg:px-[176px]">
        <div className="bg-red-500 h-[300px] md:h-[400px] lg:h-[530px] mb-[30px] lg:mb-[50px]">
          <Banner></Banner>
        </div>
        <div className="">
          <BlogDescription></BlogDescription>
        </div>
        <div>
          <BlogDetails></BlogDetails>
        </div>
        <div>
          <BlogRequirements></BlogRequirements>
        </div>
        <div>
          <BlogOther></BlogOther>
        </div>
        <div className="mt-[100px] mb-[50px]">
          <ContactForm siteConfig={siteConfig}></ContactForm>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Blogs;
