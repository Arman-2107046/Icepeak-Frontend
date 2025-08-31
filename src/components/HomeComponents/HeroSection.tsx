const HeroSection = () => {
  return (
    <div>
      <section
        className="h-[100vh] bg-cover bg-center bg-white  mb-4"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
                <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/40 to-transparent" />

  <div className=" pt-[15rem] flex justify-center text-white max-w-2xl h-full px-5 bg-[rgba(156,163,175,0.5)] ml-20">
    <div>
        <hr /> <br />
        <p className="text-6xl uppercase font-dmserif">
            Ice Peak <br /> Design Limited
        </p>
        <p className="pt-1 text-xl">
            Global Expertise. Seamless Apparel Sourcing.

        </p>
        <br />
        <hr />
        <p className="max-w-[16rem]  pt-4 text-md">

            Driving efficiency and reliability in global supply chain management.
        </p>
    </div>
  </div>

      </section>
    </div>
  );
};

export default HeroSection;
