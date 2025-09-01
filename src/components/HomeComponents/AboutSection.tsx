import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import OurNumberComponents from "./OurNumberComponents";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div className="pt-[4rem]">
      <div className="flex items-center justify-center py-16 bg-white">
        <div className="max-w-6xl px-10 font-light">
          <h2 className="mb-6 font-serif text-4xl font-light text-stone-800">About Us</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            <span className="font-semibold">ICE PEAK DESIGN LTD.</span> is a
            leading apparel sourcing hub in Bangladesh, serving global fashion
            brands with excellence. With over a decade of experience and 30+
            certified partner factories, we deliver sustainable, ethical, and
            innovative solutions.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Our skilled team ensures trend-driven design, transparent execution,
            and timely delivery. We combine creativity, quality, and efficiency
            to meet diverse market needs.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Committed to integrity and sustainability, we create lasting value
            in the global apparel supply chain.
          </p>
        </div>
      </div>
           
      <div ref={ref} className="flex items-center justify-center bg-white">
        {/* Left Div */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={isInView ? { x: "1vw" } : { x: "-100vw" }}
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
          animate={isInView ? { x: "13vw" } : { x: "100vw" }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="p-10 text-xl text-white  bg-stone-400 h-[30rem] w-[46rem] opacity-70 flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            {/* <div className="flex font-serif font-bold scale-x-75 text-[10rem]">
              <div>" </div>
              <div className="pt-4 text-gray-700">"</div>
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

      <OurNumberComponents/>
    </div>
  );
};

export default AboutSection;