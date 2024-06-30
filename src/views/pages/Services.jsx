import { useContext } from "react";
import ScrollToTop from "../../utils/Other/ScrollToTop";
import { AppContext } from "../../utils/contexts/AppContext";
import DefaultLayout from "../Layouts/DefaultLayout";
import ContactForm from "../components/Reusable/ContactForm/ContactForm";
import Expertise from "../components/Services/Expertise/Expertise";
import Hero from "../components/Services/Hero/Hero";
import ServicesSection from "../components/Services/Services/Services";
import Loader from "../components/Reusable/Loader/Loader";
import { Helmet } from "react-helmet";
function Services() {
  const { siteConfig, siteLoading } = useContext(AppContext);
  return (
    <>
      <Helmet>
        <title>Aviate - Services</title>
      </Helmet>
      {siteLoading === false ? (
        <DefaultLayout>
          <ScrollToTop />
          <div>
            <Hero siteConfig={siteConfig}></Hero>
            <div className="mt-10 sm:mt-0 px-[40px] xl:px-[176px] mb-[140px]">
              <ServicesSection></ServicesSection>
            </div>
            <Expertise siteConfig={siteConfig}></Expertise>
            <div className="my-[50px] xl:my-[120px] px-[40px] xl:px-[176px] mb-[140px]">
              <ContactForm siteConfig={siteConfig}></ContactForm>
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

export default Services;
