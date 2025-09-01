import AboutSection from "../components/HomeComponents/AboutSection";
import Clients from "../components/HomeComponents/Clients";
import Ethics from "../components/HomeComponents/Ethics";
import HeroSection from "../components/HomeComponents/HeroSection";
import Locations from "../components/HomeComponents/Locations";
import Services from "../components/HomeComponents/Services";
// import OurNumberComponents from "../components/HomeComponents/OurNumberComponents";

const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <section>
        <HeroSection />
      </section>

      {/* about section  */}
      <section>
        <AboutSection />
      </section>

      {/* Our number section  */}
      {/* 
      <section>
        <OurNumberComponents />
      </section> */}

      <section>
        <Services />
      </section>

      <section>
        <Locations />
      </section>

      <section>
        <Clients/>
      </section>
      
      <section>
        <Ethics/>
      </section>


    </div>
  );
};

export default Home;
