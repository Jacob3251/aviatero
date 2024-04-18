import DefaultLayout from "../Layouts/DefaultLayout";
import ContactForm from "../components/Reusable/ContactForm/ContactForm";
import Expertise from "../components/Services/Expertise/Expertise";
import Hero from "../components/Services/Hero/Hero";
import ServicesSection from "../components/Services/Services/Services";
function Services() {
  return (
    <DefaultLayout>
      <Hero></Hero>
      <ServicesSection></ServicesSection>
      <Expertise></Expertise>
      <ContactForm></ContactForm>
    </DefaultLayout>
  );
}

export default Services;
