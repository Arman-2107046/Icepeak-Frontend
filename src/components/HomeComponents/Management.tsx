



// import { FaLinkedin } from "react-icons/fa";

// const teamMembers = [
//   {
//     name: "Maniul Hasan",
//     image: "/managementImages/image.png",
//     linkedin: "",
//     position: "CEO",
//     region: "Bangladesh",
//   },
//   {
//     name: "Sayad Mahbobor Rohman",
//     image: "/managementImages/image.png",
//     linkedin: "",
//     position: "Head of Sourcing & Production",
//     region: "Bangladesh",
//   },
//   {
//     name: "Md. Mizanur Rahman",
//     image: "/managementImages/image.png",
//     linkedin: "",
//     position: "Head of Marketing",
//     region: "Bangladesh",
//   },
//   {
//     name: "Manjur Murshid Masum",
//     image: "/managementImages/image.png",
//     linkedin: "",
//     position: "Head of Sourcing & Development",
//     region: "Bangladesh",
//   },
//   {
//     name: "Sazzad Khan",
//     image: "/managementImages/image.png",
//     linkedin: "",
//     position: "Sales & Marketing Director",
//     region: "Europe",
//   },
//   {
//     name: "Zakaria Arif",
//     image: "/managementImages/image.png",
//     linkedin: "",
//     position: "Sales & Marketing Director",
//     region: "Europe",
//   },
//   {
//     name: "Md. Mahbub Rabbani",
//     image: "/managementImages/image.png",
//     linkedin: "",
//     position: "VP Marketing",
//     region: "USA & CANADA",
//   },
// ];

// const Management = () => {
//   return (
//     <div className="mt-[0rem] px-[6rem] pt-[4rem]">
//       <div className="px-4 mt-32 sm:px-6 lg:px-24 xl:px-32 2xl:px-48">
//         {/* Section Header */}
//         <div className="mb-20 text-center">
//           {/* <div className="relative inline-block mb-6">
//             <h1 className="relative text-3xl font-bold sm:text-4xl lg:text-5xl text-stone-800">
//               <div
//                 className="absolute inset-0 bg-amber-800 opacity-15"
//                 style={{ height: "45%", top: "28%" }}
//               ></div>
//               <span className="relative z-10">
//                 <span className="font-serif text-5xl font-light sm:text-6xl lg:text-7xl">
//                   K
//                 </span>
//                 NOW WHO WILL SUPPORT YOU
//               </span>
//             </h1>
//           </div> */}

          
//         <h1 className="mb-[4rem] font-serif text-4xl font-bold text-center uppercase text-stone-800">
//           know who will support you
//         </h1>
//           <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>
//           <p className="max-w-3xl mx-auto text-lg leading-relaxed text-stone-600 sm:text-xl">
//             Meet our exceptional leadership team - seasoned professionals
//             driving innovation, growth, and excellence across global markets
//             with decades of combined expertise.
//           </p>
//         </div>

//         {/* Flex Grid Layout (4 per row) */}
//         <div className="grid justify-center grid-cols-4 gap-16">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden rounded-md shadow-lg cursor-pointer group w-[15rem]"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="object-cover w-full transition duration-500 h-[18rem] grayscale group-hover:grayscale-0 group-hover:scale-105"
//               />
//               <div
//                 className="absolute inset-x-0 bottom-0
//                 translate-y-[calc(100%-3rem)] group-hover:translate-y-0
//                 transition-transform duration-500 ease-out
//                 bg-black/15 backdrop-blur-lg border-t border-white/20
//                 p-5 flex flex-col justify-end h-[11rem]"
//               >
//                 <p className="absolute text-white top-4 left-4 group-hover:hidden">
//                   {member.name}
//                 </p>
//                 <h3 className="text-xl font-bold text-white drop-shadow">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm font-light text-amber-200 drop-shadow">
//                   {member.position}
//                 </p>
//                 <p className="text-xs text-white/80 drop-shadow">
//                   {member.region}
//                 </p>
//                 <a
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="absolute text-white transition-colors top-4 right-4 hover:text-blue-400"
//                 >
//                   <FaLinkedin size={20} />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Ultra-Premium Call to Action */}
//       <div className="mt-20 text-center">
//         <div className="p-8 shadow-inner bg-gradient-to-r from-stone-50 to-amber-50 rounded-2xl lg:p-12">
//           <h3 className="mb-4 font-serif text-2xl font-bold lg:text-3xl text-stone-800">
//             Leadership Excellence
//           </h3>
//           <p className="max-w-4xl mx-auto text-lg leading-relaxed text-stone-600">
//             Our management team combines deep industry expertise with innovative
//             thinking, ensuring strategic growth and operational excellence
//             across all global markets. Together, we're building the future of
//             our industry through collaborative leadership and unwavering
//             commitment to excellence.
//           </p>
//           <div className="flex justify-center mt-8">
//             <div className="w-16 h-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Management;








import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Maniul Hasan",
    image: "/managementImages/image.png",
    linkedin: "",
    position: "CEO",
    region: "Bangladesh",
  },
  {
    name: "Sayad Mahbobor Rohman",
    image: "/managementImages/image.png",
    linkedin: "",
    position: "Head of Sourcing & Production",
    region: "Bangladesh",
  },
  {
    name: "Md. Mizanur Rahman",
    image: "/managementImages/image.png",
    linkedin: "",
    position: "Head of Marketing",
    region: "Bangladesh",
  },
  {
    name: "Manjur Murshid Masum",
    image: "/managementImages/image.png",
    linkedin: "",
    position: "Head of Sourcing & Development",
    region: "Bangladesh",
  },
  {
    name: "Sazzad Khan",
    image: "/managementImages/image.png",
    linkedin: "",
    position: "Sales & Marketing Director",
    region: "Europe",
  },
  {
    name: "Zakaria Arif",
    image: "/managementImages/image.png",
    linkedin: "",
    position: "Sales & Marketing Director",
    region: "Europe",
  },
  {
    name: "Md. Mahbub Rabbani",
    image: "/managementImages/image.png",
    linkedin: "",
    position: "VP Marketing",
    region: "USA & CANADA",
  },
];

const Management = () => {
  return (
    <div className="px-6 pt-16 mt-0 sm:px-8 lg:px-24 xl:px-32 2xl:px-48">
      {/* Section Header */}
      <div className="mb-20 text-center">
        <h1 className="mb-12 font-serif text-3xl font-bold uppercase sm:text-4xl lg:text-4xl text-stone-800">
          know who will support you
        </h1>
        <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>
        <p className="max-w-3xl mx-auto text-base leading-relaxed sm:text-lg lg:text-lg text-stone-600">
          Meet our exceptional leadership team - seasoned professionals driving
          innovation, growth, and excellence across global markets with decades
          of combined expertise.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 lg:gap-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-md shadow-lg cursor-pointer group w-full sm:w-[18rem] lg:w-[15rem]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full transition duration-500 h-72 sm:h-80 lg:h-72 grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
            <div
              className="absolute inset-x-0 bottom-0 translate-y-[calc(100%-3rem)] group-hover:translate-y-0 transition-transform duration-500 ease-out bg-black/15 backdrop-blur-lg border-t border-white/20 p-5 flex flex-col justify-end h-44 sm:h-48 lg:h-44"
            >
              <p className="absolute text-white top-4 left-4 group-hover:hidden">
                {member.name}
              </p>
              <h3 className="text-xl font-bold text-white drop-shadow">
                {member.name}
              </h3>
              <p className="text-sm font-light text-amber-200 drop-shadow">
                {member.position}
              </p>
              <p className="text-xs text-white/80 drop-shadow">{member.region}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute text-white transition-colors top-4 right-4 hover:text-blue-400"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Ultra-Premium Call to Action */}
      <div className="mt-16 text-center sm:mt-20">
        <div className="p-6 shadow-inner sm:p-8 lg:p-12 bg-gradient-to-r from-stone-50 to-amber-50 rounded-2xl">
          <h3 className="mb-4 font-serif text-2xl font-bold sm:text-2xl lg:text-3xl text-stone-800">
            Leadership Excellence
          </h3>
          <p className="max-w-4xl mx-auto text-base leading-relaxed sm:text-lg text-stone-600">
            Our management team combines deep industry expertise with innovative
            thinking, ensuring strategic growth and operational excellence
            across all global markets. Together, we're building the future of
            our industry through collaborative leadership and unwavering
            commitment to excellence.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
