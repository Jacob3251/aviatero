import { useContext } from "react";
import ScrollToTop from "../../utils/Other/ScrollToTop";
import { AppContext } from "../../utils/contexts/AppContext";
import DefaultLayout from "../Layouts/DefaultLayout";
import ContactForm from "../components/Reusable/ContactForm/ContactForm";
import Expertise from "../components/Services/Expertise/Expertise";
import Hero from "../components/Services/Hero/Hero";
import ServicesSection from "../components/Services/Services/Services";
function Services() {
  const { siteConfig, siteLoading } = useContext(AppContext);
  return (
    <>
      {siteLoading === false ? (
        <DefaultLayout>
          <ScrollToTop />
          <Hero siteConfig={siteConfig}></Hero>
          <ServicesSection></ServicesSection>
          <Expertise siteConfig={siteConfig}></Expertise>
          <ContactForm siteConfig={siteConfig}></ContactForm>
        </DefaultLayout>
      ) : (
        <div className="bg-red-500 text-white">Loading</div>
      )}
    </>
  );
}

export default Services;
