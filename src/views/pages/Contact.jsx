import ScrollToTop from "../../utils/Other/ScrollToTop";
import DefaultLayout from "../Layouts/DefaultLayout";
import Address from "../components/Home/Address/Address";
import ContactForm from "../components/Reusable/ContactForm/ContactForm";

function Contact() {
  return (
    <DefaultLayout>
      <ScrollToTop />
      <div className="my-[50px] xl:my-[120px]">
        <ContactForm></ContactForm>
      </div>
      <Address></Address>
    </DefaultLayout>
  );
}

export default Contact;
