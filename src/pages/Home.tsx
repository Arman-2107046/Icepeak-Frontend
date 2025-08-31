import AboutSection from "../components/HomeComponents/AboutSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import OurNumberComponents from "../components/HomeComponents/OurNumberComponents";

const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <section>
        <HeroSection />
      </section>

      {/* about section  */}
      <section className="h-[90vh]">
        <AboutSection />
      </section>

      {/* Our number section  */}

      <section>
        <OurNumberComponents />
      </section>
    </div>
  );
};

export default Home;
