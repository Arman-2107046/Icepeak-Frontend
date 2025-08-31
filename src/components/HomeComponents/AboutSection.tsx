import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-white">
        {/* Left Div */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "1vw" }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="mr-4"
        >
          <img
            src="/about-image1.png"
            alt="about"
            className="w-[24rem] h-[30rem]"
          />
        </motion.div>

        {/* Right Div */}
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: "13vw" }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="p-10 text-xl text-white  bg-stone-400 h-[30rem] w-[46rem] opacity-70 flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            {/* <div className="flex font-serif font-bold scale-x-75 text-[10rem]">
              <div>“ </div>
              <div className="pt-4 text-gray-700">”</div>
            </div> */}
            <div className="px-4 text-5xl text-center font-extralight font-dmserif">
              Empowering Your Business with Trusted Sourcing
            </div>

            <button className="px-8 py-3 mt-8 text-sm tracking-widest text-white lowercase transition bg-stone-950 hover:bg-stone-700">
              read more
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutSection;
