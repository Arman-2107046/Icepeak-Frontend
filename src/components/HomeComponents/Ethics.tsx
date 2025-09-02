// const Ethics = () => {
//   return (
//     <div className="pt-[8rem]">
//       <div className="flex justify-center mt-6 mb-10">
//         <div className="inline-block px-6 py-3 font-serif text-4xl font-bold tracking-wider uppercase text-stone-800">
//           Ethics & Sustainability
//         </div>
        
//       </div>
//           <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>

//       <div className="flex w-full bg-white">
//         {/* Left Column */}
//         <div className="relative flex flex-col items-center justify-start px-6 max-w-[50rem]">
//           {/* <div className="absolute left-0 text-4xl tracking-widest text-gray-400 rotate-90 -translate-y-1/2 top-1/2">
//             ethics
            
//           </div> */}
          

//           {/* Big S as Background Image */}
//           <div
//             className="absolute w-[33rem] h-[45rem] bg-center bg-no-repeat bg-contain opacity-80 top-20 left-[56%] transform -translate-x-1/2"
//             style={{ backgroundImage: "url('/s.png')" }}
//           ></div>

//           {/* Content that appears on top of the S */}
//           <div className="relative z-10 w-full py-8 ml-[4rem]">
//             <div className="grid max-w-6xl grid-cols-2 gap-8 px-6 mx-auto">
//               {/* Left Column */}
//               <div className="flex flex-col justify-center -translate-y-60">
//                 <div className="relative">
//                   {/* Brown overlay */}
//                   <div className="absolute bottom-4 left-0 right-5 h-[62%] bg-amber-800 opacity-50" />

//                   {/* Heading */}
//                   <h2 className="relative z-10 mb-4 font-serif text-3xl font-semibold uppercase text-stone-800">
//                     <span className="text-6xl font-light font-dmserif">O</span>
//                     bjectives and Practices
//                   </h2>
//                 </div>

//                 <p className="text-sm leading-relaxed text-gray-600">
//                   We see ourselves as the extended arm, ear and eye of our
//                   customer. We deliver our best efforts that all business
//                   objectives and practices are aligned to create a positive
//                   impact for your world-wide supply chain, the surrounding
//                   environment and for you.
//                 </p>
//               </div>

//               {/* Right Column */}
//               <div className="flex flex-col justify-center translate-y-[9rem]">
//                 <div className="relative">
//                   {/* Brown overlay */}
//                   <div className="absolute bottom-4 left-0 right-5 h-[45%] bg-amber-800 opacity-50" />

//                   {/* Heading */}
//                   <h2 className="relative z-10 mb-4 font-serif text-3xl font-semibold uppercase text-stone-800">
//                     <span className="text-6xl font-light font-dmserif">S</span>
//                     ustainability
//                   </h2>
//                 </div>

//                 <div className="space-y-4 text-sm leading-relaxed text-gray-600">
//                   <h3 className="text-lg font-semibold text-stone-800">
//                     Environmental Stewardship
//                   </h3>
//                   <p>
//                     We prioritize reducing the environmental footprint of our
//                     operations and supply chain. From sourcing materials
//                     responsibly to implementing energy-efficient processes,
//                     every decision is guided by the principle of protecting our
//                     planet for future generations.
//                   </p>

//                   <h3 className="text-lg font-semibold text-stone-800">
//                     Ethical Sourcing
//                   </h3>
//                   <p>
//                     Our partnerships are built on transparency and integrity. We
//                     ensure that every manufacturing partner adheres to strict
//                     labor standards, fair wages, and safe working conditions,
//                     supporting a sustainable global workforce.
//                   </p>

//                   <h3 className="text-lg font-semibold text-stone-800">
//                     Social Responsibility
//                   </h3>
//                   <p>
//                     Beyond business operations, we engage with local communities
//                     to promote education, health, and well-being initiatives. By
//                     integrating social responsibility into our core practices,
//                     we aim to create lasting positive impacts on society as a
//                     whole.
//                   </p>
//                 </div>
//                 <div className="self-start mt-8">
//                   <button className="px-8 py-3 text-sm tracking-widest text-white lowercase transition bg-stone-700 hover:bg-stone-600">
//                     read more
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col items-center justify-start p-6">
//           {/* Logos */}
//           <h3 className="mb-4 font-light text-center text-stone-800 uppercase max-w-[28rem] font-serif text-xl">
//             Our manufacturing partners are compliant with international
//             standards and code of conduct:
//           </h3>
//           <div className="mb-6">
//             <img
//               src="/certifications.png"
//               alt="Accord"
//               className="h-[24rem] w-[42rem] mx-auto"
//             />
//           </div>

//           {/* Quote Section */}
//           <div className="relative w-[38rem] h-[20rem]">
//             <img
//               src="/quote.jpg"
//               alt="Background"
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-white/50">
//               <p className="max-w-md px-4 font-serif text-xl italic font-bold text-stone-800">
//                 "You can not make a good economics out of a bad ethics"
//               </p>
//               <span className="mt-2 text-sm text-gray-700">— Ezra Pound</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ethics;





const Ethics = () => {
  return (
    <div className="pt-16 lg:pt-32">
      {/* Section Heading */}
      <div className="flex justify-center px-4 mt-6 mb-10">
        <div className="inline-block px-4 py-2 font-serif text-3xl font-bold tracking-wider text-center uppercase sm:text-4xl lg:text-4xl text-stone-800">
          Ethics & Sustainability
        </div>
      </div>
      <div className="w-20 h-1 mx-auto mb-6 sm:w-24 bg-gradient-to-r from-amber-500 to-amber-700"></div>

      <div className="flex flex-col w-full bg-white lg:flex-row">
        {/* Left Column */}
        <div className="relative flex flex-col items-center justify-start px-4 lg:px-6 max-w-full lg:max-w-[50rem]">
          {/* Big S Background */}
          <div
            className="absolute w-[25rem] h-[35rem] sm:w-[28rem] sm:h-[38rem] lg:w-[33rem] lg:h-[45rem] bg-center bg-no-repeat bg-contain opacity-80 top-20 left-1/2 transform -translate-x-1/2"
            style={{ backgroundImage: "url('/s.png')" }}
          ></div>

          {/* Content */}
          <div className="relative z-10 w-full px-2 py-8 lg:px-0">
            <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
              {/* Left Text */}
              <div className="flex flex-col justify-center lg:-translate-y-60">
                <div className="relative">
                  <div className="absolute bottom-4 left-0 right-0 lg:right-5 h-[62%] bg-amber-800 opacity-50" />
                  <h2 className="relative z-10 mb-4 font-serif text-2xl font-semibold uppercase sm:text-3xl lg:text-3xl text-stone-800">
                    <span className="text-5xl font-light sm:text-6xl font-dmserif">O</span>
                    bjectives and Practices
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  We see ourselves as the extended arm, ear and eye of our customer. We deliver our best efforts
                  that all business objectives and practices are aligned to create a positive impact for your
                  world-wide supply chain, the surrounding environment and for you.
                </p>
              </div>

              {/* Right Text */}
              <div className="flex flex-col justify-center lg:translate-y-[9rem] space-y-4">
                <div className="relative">
                  <div className="absolute bottom-4 left-0 right-0 lg:right-5 h-[45%] bg-amber-800 opacity-50" />
                  <h2 className="relative z-10 mb-4 font-serif text-2xl font-semibold uppercase sm:text-3xl lg:text-3xl text-stone-800">
                    <span className="text-5xl font-light sm:text-6xl font-dmserif">S</span>
                    ustainability
                  </h2>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  <h3 className="text-lg font-semibold sm:text-xl text-stone-800">Environmental Stewardship</h3>
                  <p>
                    We prioritize reducing the environmental footprint of our operations and supply chain. Every decision
                    is guided by protecting our planet for future generations.
                  </p>

                  <h3 className="text-lg font-semibold sm:text-xl text-stone-800">Ethical Sourcing</h3>
                  <p>
                    Our partnerships are built on transparency and integrity. We ensure manufacturing partners
                    adhere to strict labor standards, fair wages, and safe working conditions.
                  </p>

                  <h3 className="text-lg font-semibold sm:text-xl text-stone-800">Social Responsibility</h3>
                  <p>
                    We engage with local communities to promote education, health, and well-being initiatives, creating
                    lasting positive impacts.
                  </p>
                </div>

                <div className="self-start mt-4 lg:mt-8">
                  <button className="px-6 py-2 text-sm tracking-widest text-white lowercase transition sm:px-8 sm:py-3 sm:text-base bg-stone-700 hover:bg-stone-600">
                    read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center justify-start px-4 mt-12 lg:px-6 lg:mt-0">
          {/* Logos */}
          <h3 className="mb-4 font-light text-center text-stone-800 uppercase max-w-full sm:max-w-[28rem] font-serif text-xl sm:text-2xl">
            Our manufacturing partners are compliant with international standards and code of conduct:
          </h3>
          <div className="mb-6 w-full sm:w-[42rem] h-auto">
            <img
              src="/certifications.png"
              alt="Accord"
              className="w-full h-auto mx-auto"
            />
          </div>

          {/* Quote Section */}
          <div className="relative w-full sm:w-[38rem] h-[20rem] mt-8">
            <img
              src="/quote.jpg"
              alt="Background"
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-white/50">
              <p className="max-w-md px-4 font-serif text-base italic font-bold sm:text-xl text-stone-800">
                "You can not make a good economics out of a bad ethics"
              </p>
              <span className="mt-2 text-sm text-gray-700 sm:text-base">— Ezra Pound</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethics;
