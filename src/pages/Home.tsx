// import ContactForm from "../components/ContactForm";
import AboutSection from "../components/HomeComponents/AboutSection";
import Clients from "../components/HomeComponents/Clients";
import ContactSection from "../components/HomeComponents/ContactSection";
import Ethics from "../components/HomeComponents/Ethics";
import HeroSection from "../components/HomeComponents/HeroSection";
import Locations from "../components/HomeComponents/Locations";
import Management from "../components/HomeComponents/Management";
import NewsAndMedia from "../components/HomeComponents/NewsAndMedia";
import Services from "../components/HomeComponents/Services";
// import OurNumberComponents from "../components/HomeComponents/OurNumberComponents";

const Home = () => {
  return (
    <div className="scroll-smooth">
      {/* Hero Section  */}
      <section>
        <HeroSection />
      </section>

      {/* about section  */}
      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="locations">
        <Locations />
      </section>

      <section id="clients">
        <Clients />
      </section>

      <section>
        <NewsAndMedia/>
      </section>

      <section id="ethics">
        <Ethics />
      </section>

      <section id="management">
        <Management />
      </section>

      <section id="news"></section>

      <section id="contact">
        <ContactSection/>
      </section>


      
    </div>
  );
};

export default Home;
