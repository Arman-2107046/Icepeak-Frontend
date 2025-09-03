// const OurNumberComponents = () => {
//   return (
//     <div>
//       <section className="px-8 py-16 bg-white">
//         <div className="grid grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2 pt-[4rem] text-white">
//           <div>
//             {/* <h2 className="mb-8 font-serif text-4xl font-light text-gray-700">
//               NUMBERS THAT DEFINE US
//             </h2> */}
//             <div className="grid grid-cols-3 gap-4 font-serif font-bold">
//               <div className="flex flex-col items-center justify-start p-6 text-stone-600 border border-white h-[14rem] w-[10rem] font-serif">
//                 <span className="mt-1 text-2xl center text-">
//                   NUMBERS THAT DEFINE US
//                 </span>
//               </div>

//               <div className="flex items-center justify-center p-3 bg-[#968476] border border-white h-[14rem] w-[10rem] text-white">
//                 {/* Inner rectangle */}
//                 <div className="box-border flex flex-col items-center justify-center w-full h-full p-4 border border-white">
//                   <span className="text-4xl font-bold">15</span>
//                   <span className="mt-2 text-sm text-center">
//                     Key Offices Worldwide
//                   </span>
//                 </div>
//               </div>

//               {/* Card 1 */}
//               <div className="flex items-center justify-center p-3 bg-[#5e2500] border border-white h-[14rem] w-[10rem]">
//                 <div className="box-border flex flex-col items-center justify-center w-full h-full p-3 border border-white">
//                   <span className="text-4xl font-bold">35</span>
//                   <span className="mt-2 text-sm text-center">
//                     Years In Business
//                   </span>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div className="flex items-center justify-center p-3 bg-gray-500 border border-white h-[14rem] w-[10rem]">
//                 <div className="box-border flex flex-col items-center justify-center w-full h-full p-3 border border-white">
//                   <span className="text-4xl font-bold">10</span>
//                   <span className="mt-2 text-sm text-center">
//                     Countries Worldwide
//                   </span>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="flex items-center justify-center p-3 bg-gray-700 border border-white h-[14rem] w-[10rem]">
//                 <div className="box-border flex flex-col items-center justify-center w-full h-full p-3 border border-white">
//                   <span className="text-4xl font-bold">500+</span>
//                   <span className="mt-2 text-sm text-center">
//                     Staff Worldwide
//                   </span>
//                 </div>
//               </div>

//               {/* Card 4 */}
//               <div className="flex items-center justify-center p-3 bg-[#5a5755] border border-white h-[14rem] w-[10rem]">
//                 <div className="box-border flex flex-col items-center justify-center w-full h-full p-3 border border-white">
//                   <span className="text-4xl font-bold">50+</span>
//                   <span className="mt-2 text-sm text-center">
//                     Global Customers
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-start">
//             {/* Image on the left */}
//             <div className="-mr-10">
//               <img
//                 src="/dummy.jpg"
//                 alt="Mannequin with laptop"
//                 className="object-contain w-[26rem] h-[29.5rem] rounded-md"
//               />
//             </div>

//             {/* Text on the right */}
//             <div className="max-w-[18rem]">
//               <h3 className="mb-4 font-serif text-xl font-semibold text-gray-800">
//                 Key factors driving our global fashion partnerships:
//               </h3>

//               <ol className="space-y-4 text-gray-700 list-decimal list-inside marker:text-5xl marker:font-bold marker:font-serif">
//                 <li>
//                   Dynamic business models positioned to operate on short lead
//                   times, low margins and flexible volume.
//                 </li>
//                 <li>Focus on sustainable product offers.</li>
//                 <li>
//                   Existing sourcing and production presence in key low-cost and
//                   duty-free countries of the world.
//                 </li>
//                 <li>Highly competitive product prices and service fees.</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurNumberComponents;

const OurNumberComponents = () => {
  return (
    <div>
      <section className="px-4 py-8 bg-white sm:px-6 lg:px-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 pt-8 mx-auto text-white lg:gap-12 max-w-7xl lg:grid-cols-2 lg:pt-16">
          <div>
            {/* Numbers Grid */}
            <div className="grid grid-cols-2 gap-2 font-serif font-bold sm:grid-cols-3 sm:gap-4">
              {/* Title Card */}
              <div className="flex flex-col items-center justify-center w-full h-32 col-span-2 p-3 mx-auto font-serif border border-white sm:col-span-1 sm:p-4 lg:p-6 text-stone-600 sm:h-40 lg:h-56 sm:w-32 lg:w-40 sm:mx-0">
                <span className="text-sm leading-tight text-center sm:text-lg lg:text-2xl">
                  NUMBERS THAT DEFINE US
                </span>
              </div>

              {/* Card 1 - Key Offices */}
              <div className="flex items-center justify-center p-2 sm:p-3 bg-[#968476] border border-white h-32 sm:h-40 lg:h-56 w-full sm:w-32 lg:w-40 text-white">
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-2 border border-white sm:p-3 lg:p-4">
                  <span className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                    2
                  </span>
                  <span className="mt-1 text-xs leading-tight text-center sm:mt-2 sm:text-sm">
                    Key Offices Worldwide
                  </span>
                </div>
              </div>

              {/* Card 2 - Years in Business */}
              <div className="flex items-center justify-center p-2 sm:p-3 bg-[#5e2500] border border-white h-32 sm:h-40 lg:h-56 w-full sm:w-32 lg:w-40">
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-2 border border-white sm:p-3">
                  <span className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                    10
                  </span>
                  <span className="mt-1 text-xs leading-tight text-center sm:mt-2 sm:text-sm">
                    Years In Business
                  </span>
                </div>
              </div>

              {/* Card 3 - Countries */}
              <div className="flex items-center justify-center w-full h-32 p-2 bg-gray-500 border border-white sm:p-3 sm:h-40 lg:h-56 sm:w-32 lg:w-40">
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-2 border border-white sm:p-3">
                  <span className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                    10
                  </span>
                  <span className="mt-1 text-xs leading-tight text-center sm:mt-2 sm:text-sm">
                    Countries Worldwide
                  </span>
                </div>
              </div>

              {/* Card 4 - Staff */}
              <div className="flex items-center justify-center w-full h-32 p-2 bg-gray-700 border border-white sm:p-3 sm:h-40 lg:h-56 sm:w-32 lg:w-40">
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-2 border border-white sm:p-3">
                  <span className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                    50+
                  </span>
                  <span className="mt-1 text-xs leading-tight text-center sm:mt-2 sm:text-sm">
                    Staff Worldwide
                  </span>
                </div>
              </div>

              {/* Card 5 - Customers */}
              <div className="flex items-center justify-center p-2 sm:p-3 bg-[#5a5755] border border-white h-32 sm:h-40 lg:h-56 w-full sm:w-32 lg:w-40">
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-2 border border-white sm:p-3">
                  <span className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                    15+
                  </span>
                  <span className="mt-1 text-xs leading-tight text-center sm:mt-2 sm:text-sm">
                    Global Customers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image and Text */}
          <div className="flex flex-col items-start mt-8 lg:flex-row lg:mt-0">
            {/* Image */}
            <div className="w-full mb-6 lg:w-auto lg:-mr-10 lg:mb-0 xl:-mr-12">
              <img
                src="/dummy.jpg"
                alt="Fashion business meeting"
                className="
      object-cover lg:object-contain
      w-64 h-48      /* small screens: narrower & shorter */
      sm:w-80 sm:h-64 /* small-medium screens */
      md:w-96 md:h-72 /* medium screens */
      lg:w-[26rem] lg:h-[29.5rem] /* large screens */
      xl:w-[28rem] xl:h-[31rem]  /* extra-large screens: slightly bigger */
      rounded-md 
      mx-auto lg:mx-0
    "
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:max-w-[18rem] px-4 lg:px-0">
              <h3 className="mb-4 font-serif text-lg font-semibold text-gray-800 sm:text-xl">
                Key factors driving our global fashion partnerships:
              </h3>

              <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside sm:space-y-4 sm:text-base marker:text-3xl sm:marker:text-4xl lg:marker:text-5xl marker:font-bold marker:font-serif">
                <li className="leading-relaxed">
                  Dynamic business models positioned to operate on short lead
                  times, low margins and flexible volume.
                </li>
                <li className="leading-relaxed">
                  Focus on sustainable product offers.
                </li>
                <li className="leading-relaxed">
                  Existing sourcing and production presence in key low-cost and
                  duty-free countries of the world.
                </li>
                <li className="leading-relaxed">
                  Highly competitive product prices and service fees.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurNumberComponents;
