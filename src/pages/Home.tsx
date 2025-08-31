import AboutSection from "../components/HomeComponents/AboutSection";
import HeroSection from "../components/HomeComponents/HeroSection";
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
      <section >
        <AboutSection />
      </section>

      {/* Our number section  */}
{/* 
      <section>
        <OurNumberComponents />
      </section> */}

<section>
  <Services/>
</section>


    </div>
  );
};

export default Home;
