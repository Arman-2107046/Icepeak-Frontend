// "use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div>
      <section
        className="relative h-[100vh] bg-cover bg-center bg-white mb-4"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        {/* Overlay gradient if you want */}
        {/* <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/40" /> */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 pt-[15rem] flex justify-center text-white max-w-2xl h-full px-5 bg-[rgba(156,163,175,0.5)] ml-20 rounded-2xl shadow-lg"
        >
          <div>
            <motion.hr
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-white"
            />
            <br />

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl uppercase font-dmserif"
            >
              Ice Peak <br /> Design Limited
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-1 text-xl"
            >
              Global Expertise. Seamless Apparel Sourcing.
            </motion.p>

            <br />

            <motion.hr
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="border-white"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="max-w-[16rem] pt-4 text-md"
            >
              Driving efficiency and reliability in global supply chain
              management.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
