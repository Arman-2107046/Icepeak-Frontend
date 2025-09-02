
// const Services = () => {


// const services = [
//   {
//     title: "Research & Development",
//     image: "/fashionrd.jpg",
//     imageHeight: "h-[25rem]",
//     sections: [
//       {
//         heading: "Research",
//         content: (
//           <>
//             At <span className="font-semibold">Icepeak Design Limited</span>, R&D is the backbone of our collections. We source and develop cutting-edge fabrics and finishes, collaborating with global mills to deliver quality at competitive prices.
//           </>
//         ),
//       },
//       {
//         heading: "Development",
//         content: (
//           <>
//             Our teams create and refine samples to match your specifications, ensuring quality and precision from concept to completion.
//           </>
//         ),
//       },
//     ],
//   },
//   {
//     title: "Design",
//     image: "/design.jpg",
//     imageHeight: "h-[30rem]",
//     sections: [
//       {
//         heading: "Apparel Designing",
//         content: (
//           <>
//             Our designers turn ideas into trendsetting fashion. We focus on style, fit, and fabric, crafting designs that exceed expectations.
//           </>
//         ),
//       },
//       {
//         heading: "Creative Development",
//         content: (
//           <>
//             We blend innovation, sustainability, and detail to develop samples that bring your vision to life with creativity and durability.
//           </>
//         ),
//       },
//     ],
//   },
//   {
//     title: "Production",
//     image: "/prod.jpg",
//     imageHeight: "h-[24rem]",
//     sections: [
//       {
//         heading: "Apparel Production",
//         content: (
//           <>
//             Our production team transforms designs into high-quality garments using our network of 30+ certified factories, ensuring precision and timely delivery.
//           </>
//         ),
//       },
//       {
//         heading: "Quality & Compliance",
//         content: (
//           <>
//             We prioritize quality control, ethical practices, and sustainability, guaranteeing every product meets global standards.
//           </>
//         ),
//       },
//     ],
//   },
//   {
//     title: "Operational Support",
//     image: "/operational.jpg",
//     imageHeight: "h-[27rem]",
//     sections: [
//       {
//         heading: "Operational Support",
//         content: (
//           <>
//             Our team coordinates seamlessly across departments, optimizing workflows and minimizing delays for efficient operations.
//           </>
//         ),
//       },
//       {
//         heading: "Customer & Vendor Coordination",
//         content: (
//           <>
//             We bridge clients and suppliers, ensuring smooth communication, timely updates, and operational excellence.
//           </>
//         ),
//       },
//     ],
//   },
// ];

//   return (
//     <div className="flex flex-col items-center pt-[8rem]">
//       {/* Heading */}
//       <h1 className="mb-12 font-serif text-4xl font-extrabold text-center uppercase text-stone-700">
//         The Signature of Refined Fashion
//       </h1>
//                 <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>

//       <div className="grid grid-cols-4 gap-4">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="relative w-[20rem] h-auto overflow-hidden"
//           >
//             <img
//               src={service.image}
//               alt={service.title}
//               className={`object-cover w-full ${service.imageHeight} rounded-sm`}
//             />
//             {/* Gray stripe overlay */}
//             <div className="absolute left-0 w-full py-8 mb-2 font-serif font-semibold text-center text-white uppercase bg-stone-700 top-10 bg-opacity-70">
//               {service.title}
//             </div>
//             <div className="max-w-4xl p-4 mx-auto space-y-4 text-sm leading-relaxed bg-white rounded-sm ">
//               {service.sections.map((section, sectionIndex) => (
//                 <div key={sectionIndex}>
//                   <h3 className="mb-2 text-xl font-semibold text-stone-700">
//                     {section.heading}
//                   </h3>
//                   <p className="leading-relaxed text-gray-700">
//                     {section.content}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;






import { useState } from "react";

const services = [
  {
    title: "Research & Development",
    image: "/fashionrd.jpg",
    imageHeight: "h-[25rem]",
    sections: [
      {
        heading: "Research",
        content: (
          <>
            At <span className="font-semibold">Icepeak Design Limited</span>, R&D is the backbone of our collections. We source and develop cutting-edge fabrics and finishes, collaborating with global mills to deliver quality at competitive prices.
          </>
        ),
      },
      {
        heading: "Development",
        content: (
          <>
            Our teams create and refine samples to match your specifications, ensuring quality and precision from concept to completion.
          </>
        ),
      },
    ],
  },
  {
    title: "Design",
    image: "/design.jpg",
    imageHeight: "h-[30rem]",
    sections: [
      {
        heading: "Apparel Designing",
        content: (
          <>
            Our designers turn ideas into trendsetting fashion. We focus on style, fit, and fabric, crafting designs that exceed expectations.
          </>
        ),
      },
      {
        heading: "Creative Development",
        content: (
          <>
            We blend innovation, sustainability, and detail to develop samples that bring your vision to life with creativity and durability.
          </>
        ),
      },
    ],
  },
  {
    title: "Production",
    image: "/prod.jpg",
    imageHeight: "h-[24rem]",
    sections: [
      {
        heading: "Apparel Production",
        content: (
          <>
            Our production team transforms designs into high-quality garments using our network of 30+ certified factories, ensuring precision and timely delivery.
          </>
        ),
      },
      {
        heading: "Quality & Compliance",
        content: (
          <>
            We prioritize quality control, ethical practices, and sustainability, guaranteeing every product meets global standards.
          </>
        ),
      },
    ],
  },
  {
    title: "Operational Support",
    image: "/operational.jpg",
    imageHeight: "h-[27rem]",
    sections: [
      {
        heading: "Operational Support",
        content: (
          <>
            Our team coordinates seamlessly across departments, optimizing workflows and minimizing delays for efficient operations.
          </>
        ),
      },
      {
        heading: "Customer & Vendor Coordination",
        content: (
          <>
            We bridge clients and suppliers, ensuring smooth communication, timely updates, and operational excellence.
          </>
        ),
      },
    ],
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevService = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextService = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center px-4 pt-16 sm:pt-20 lg:pt-24 sm:px-6 lg:px-10">
      {/* Heading */}
      <h1 className="mb-4 font-serif text-2xl font-extrabold text-center uppercase sm:text-3xl lg:text-4xl text-stone-700">
        The Signature of Refined Fashion
      </h1>
      <div className="w-24 h-1 mb-12 bg-gradient-to-r from-amber-500 to-amber-700"></div>

      {/* Desktop Grid */}
      <div className="hidden w-full grid-cols-2 gap-6 md:grid lg:grid-cols-4">
        {services.map((service, index) => (
          <div key={index} className="relative w-full h-auto overflow-hidden rounded-md shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className={`object-cover w-full ${service.imageHeight}`}
            />
            <div className="absolute left-0 w-full py-2 font-serif font-semibold text-center text-white uppercase top-2 bg-stone-700 bg-opacity-70">
              {service.title}
            </div>
            <div className="p-4 mt-2 bg-white rounded-md">
              {service.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-2">
                  <h3 className="text-lg font-semibold text-stone-700">{section.heading}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="relative w-full md:hidden">
        <div className="w-full overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {services.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`object-cover w-full ${service.imageHeight} rounded-md mb-2`}
                />
                <div className="py-2 font-serif font-semibold text-center text-white uppercase bg-stone-700 bg-opacity-70">
                  {service.title}
                </div>
                <div className="p-4 bg-white rounded-md">
                  {service.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-2">
                      <h3 className="text-lg font-semibold text-stone-700">{section.heading}</h3>
                      <p className="text-sm leading-relaxed text-gray-700">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Arrows */}
        <button
          onClick={prevService}
          className="absolute p-2 text-white transform -translate-y-1/2 rounded-full shadow-lg top-1/2 left-2 bg-stone-700"
        >
          &#8592;
        </button>
        <button
          onClick={nextService}
          className="absolute p-2 text-white transform -translate-y-1/2 rounded-full shadow-lg top-1/2 right-2 bg-stone-700"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Services;
