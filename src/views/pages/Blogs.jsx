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
import useIndividualPage from "../../utils/hooks/useIndividualPage";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../components/Reusable/Loader/Loader";

function Blogs() {
  const { siteConfig } = useContext(AppContext);
  const { id } = useParams();
  const [customPageData, customPageLoading] = useIndividualPage(id);
  console.log(customPageData);
  return (
    <>
      {customPageLoading === false ? (
        <DefaultLayout>
          <Helmet>
            <title>{customPageData.pageTitle}</title>
            <meta name="description" content={customPageData.metaDescription} />
            <meta name="keywords" content={customPageData.metaKeywords} />
            <meta name="title" content={customPageData.metaTitle} />
          </Helmet>
          <div className="px-[20px] lg:px-[176px]">
            <div className=" h-[300px] md:h-[400px] lg:h-[530px] mb-[30px] lg:mb-[50px]">
              <Banner data={customPageData.pageData}></Banner>
            </div>
            {customPageData?.pageData?.pageHeading && (
              <div className="">
                <BlogDescription
                  data={customPageData.pageData.pageHeading}
                ></BlogDescription>
              </div>
            )}
            {customPageData?.pageData?.pageDetail && (
              <div>
                <BlogDetails
                  data={customPageData.pageData.pageDetail}
                ></BlogDetails>
              </div>
            )}
            {customPageData?.pageData?.requirements && (
              <div>
                <BlogRequirements
                  data={customPageData.pageData.requirements}
                ></BlogRequirements>
              </div>
            )}
            {customPageData.pageData && (
              <div>
                <BlogOther data={customPageData.pageData}></BlogOther>
              </div>
            )}
            <div className="mt-[100px] mb-[50px]">
              <ContactForm siteConfig={siteConfig}></ContactForm>
            </div>
          </div>
        </DefaultLayout>
      ) : (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <Loader></Loader>
        </div>
      )}
    </>
  );
}

export default Blogs;
