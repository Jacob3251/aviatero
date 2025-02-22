import { useContext } from "react";
import ScrollToTop from "../../utils/Other/ScrollToTop";
import DefaultLayout from "../Layouts/DefaultLayout";
import Address from "../components/Home/Address/Address";
import ContactForm from "../components/Reusable/ContactForm/ContactForm";
import { AppContext } from "../../utils/contexts/AppContext";
import { Helmet } from "react-helmet";

function Contact() {
  const { siteConfig, siteLoading } = useContext(AppContext);
  return (
    <>
      {siteLoading === false ? (
        <DefaultLayout>
          <Helmet>
            <title>Aviate - Contact</title>
          </Helmet>
          <div className="w-full">
            <ScrollToTop />
            <div className="my-[50px] xl:my-[120px] px-[40px] xl:px-[176px] mb-[140px]">
              <ContactForm siteConfig={siteConfig}></ContactForm>
            </div>
            <Address siteConfig={siteConfig}></Address>
          </div>
        </DefaultLayout>
      ) : (
        <div className="bg-red-500 text-white">Loading</div>
      )}
    </>
  );
}

export default Contact;
