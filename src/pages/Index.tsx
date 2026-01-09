import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Sandeep Mallik | Healing Hands Multispeciality Clinic</title>
        <meta
          name="description"
          content="Dr. Sandeep Mallik provides exceptional healthcare at Healing Hands Multispeciality Clinic. Book your appointment today!"
        />
        <meta name="keywords" content="doctor, multispeciality clinic, healthcare, Healing Hands, Dr. Sandeep Mallik" />
        <link rel="canonical" href="https://healinghandsclinic.com" />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
