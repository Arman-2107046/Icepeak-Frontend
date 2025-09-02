// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import OurNumberComponents from "./OurNumberComponents";

// const AboutSection = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref);
 

  
//   return (
//     <div className="pt-[4rem]">
//       <div className="flex items-center justify-center py-16 bg-white">
//         <div className="max-w-6xl px-10 font-light">
//           <div className="flex justify-center mt-6 mb-10">
//             <div className="inline-block px-6 py-3 font-serif text-4xl font-bold tracking-wider uppercase text-stone-800">
//               about us
//             </div>
//           </div>
//           <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>

//           <p className="mb-4 text-lg leading-relaxed text-gray-700">
//             <span className="font-semibold">ICE PEAK DESIGN LTD.</span> is a
//             leading apparel sourcing hub in Bangladesh, serving global fashion
//             brands with excellence. With over a decade of experience and 30+
//             certified partner factories, we deliver sustainable, ethical, and
//             innovative solutions.
//           </p>
//           <p className="mb-4 text-lg leading-relaxed text-gray-700">
//             Our skilled team ensures trend-driven design, transparent execution,
//             and timely delivery. We combine creativity, quality, and efficiency
//             to meet diverse market needs.
//           </p>
//           <p className="text-lg leading-relaxed text-gray-700">
//             Committed to integrity and sustainability, we create lasting value
//             in the global apparel supply chain.
//           </p>
//         </div>
//       </div>

//       <div ref={ref} className="flex items-center justify-center bg-white">
//         {/* Left Div */}
//         <motion.div
//           initial={{ x: "-100vw" }}
//           animate={isInView ? { x: "1vw" } : { x: "-100vw" }}
//           transition={{ type: "spring", stiffness: 60, damping: 20 }}
//           className="mr-4"
//         >
//           <img
//             src="/about-image1.png"
//             alt="about"
//             className="w-[24rem] h-[30rem]"
//           />
//         </motion.div>

//         {/* Right Div */}
//         <motion.div
//           initial={{ x: "100vw" }}
//           animate={isInView ? { x: "13vw" } : { x: "100vw" }}
//           transition={{ type: "spring", stiffness: 60, damping: 20 }}
//           className="p-10 text-xl text-white  bg-stone-400 h-[30rem] w-[46rem] opacity-70 flex flex-col items-center justify-center"
//         >
//           <div className="flex flex-col items-center justify-center">
//             {/* <div className="flex font-serif font-bold scale-x-75 text-[10rem]">
//               <div>" </div>
//               <div className="pt-4 text-gray-700">"</div>
//             </div> */}
//             <div className="px-4 text-5xl text-center font-extralight font-dmserif">
//               Empowering Your Business with Trusted Sourcing
//             </div>

//             <button className="px-8 py-3 mt-8 text-sm tracking-widest text-white lowercase transition bg-stone-950 hover:bg-stone-700">
//               read more
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       <OurNumberComponents />
//     </div>
//   );
// };

// export default AboutSection;







import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import OurNumberComponents from "./OurNumberComponents";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div className="pt-16 lg:pt-24">
      {/* Top Content */}
      <div className="flex items-center justify-center py-16 bg-white">
        <div className="max-w-6xl px-4 font-light sm:px-6 lg:px-10">
          <div className="flex justify-center mt-6 mb-10">
            <div className="inline-block px-4 py-2 font-serif text-3xl font-bold tracking-wider uppercase sm:px-6 sm:py-3 sm:text-4xl lg:text-4xl text-stone-800">
              about us
            </div>
          </div>
          <div className="w-16 h-1 mx-auto mb-6 sm:w-24 bg-gradient-to-r from-amber-500 to-amber-700"></div>

          <p className="mb-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            <span className="font-semibold">ICE PEAK DESIGN LTD.</span> is a
            leading apparel sourcing hub in Bangladesh, serving global fashion
            brands with excellence. With over a decade of experience and 30+
            certified partner factories, we deliver sustainable, ethical, and
            innovative solutions.
          </p>
          <p className="mb-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            Our skilled team ensures trend-driven design, transparent execution,
            and timely delivery. We combine creativity, quality, and efficiency
            to meet diverse market needs.
          </p>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            Committed to integrity and sustainability, we create lasting value
            in the global apparel supply chain.
          </p>
        </div>
      </div>

      {/* Animated Image & Text */}
      <div
        ref={ref}
        className="flex flex-col items-center justify-center gap-8 px-4 py-10 bg-white lg:flex-row sm:px-6 lg:px-10 lg:py-16 lg:gap-20"
      >
        {/* Left Image */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={isInView ? { x: 0 } : { x: "-100vw" }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="flex-shrink-0"
        >
          <img
            src="/about-image1.png"
            alt="about"
            className="w-full max-w-sm sm:max-w-md lg:max-w-[24rem] h-auto lg:h-[30rem] object-cover rounded-lg"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ x: "100vw" }}
          animate={isInView ? { x: 0 } : { x: "100vw" }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="p-6 sm:p-10 text-lg lg:text-xl bg-stone-400 text-white h-auto lg:h-[30rem] w-full lg:w-[46rem] opacity-80 flex flex-col items-center justify-center rounded-sm lg:mr-[-8rem]"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="px-2 text-3xl sm:px-4 sm:text-4xl lg:text-5xl font-extralight font-dmserif">
              Empowering Your Business with Trusted Sourcing
            </div>

            <button className="px-6 py-2 mt-6 text-sm tracking-widest text-white lowercase transition rounded sm:px-8 sm:py-3 sm:mt-8 sm:text-base bg-stone-950 hover:bg-stone-700">
              read more
            </button>
          </div>
        </motion.div>
      </div>

      {/* Numbers Section */}
      <OurNumberComponents />
    </div>
  );
};

export default AboutSection;
