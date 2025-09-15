const Locations = () => {
  return (
    <section className="flex flex-col px-4 pt-[8rem] lg:flex-row lg:pt-32 sm:px-6 lg:px-12">
      {/* Left Content */}
      <div className="lg:flex-1 lg:pr-10">
        <div className="grid grid-cols-1 gap-6 text-stone-900">
          {/* Heading & Description */}
          <div>
            <h1 className="mb-6 font-serif text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
              Driving Innovation Across the Globe
            </h1>
            <p className="text-base leading-relaxed sm:text-lg">
              Explore our key global hubs, where innovation in textiles meets trusted craftsmanship.
              From Asia to Europe and the USA, our offices ensure seamless service, premium sourcing,
              and timely delivery for our valued partners.
            </p>
          </div>

          {/* Subheading */}
          <div className="flex items-center justify-start h-auto">
            <p className="font-serif text-lg font-bold uppercase sm:text-xl">
              Key International Offices Driving Innovation in Fabrics & Fashion
            </p>
          </div>

          {/* Country Boxes */}
          <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3">
            <div className="flex items-center justify-center h-24 font-semibold text-white rounded-sm bg-stone-600">
              Bangladesh
            </div>
            <div className="flex items-center justify-center h-24 font-semibold text-white bg-gray-500 rounded-sm">
              China
            </div>
            <div className="flex items-center justify-center h-24 font-semibold text-white rounded-sm bg-stone-700">
              Germany
            </div>
            <div className="flex items-center justify-center h-24 font-semibold text-white rounded-sm bg-stone-900">
              USA
            </div>
            <div className="flex items-center justify-center h-24 font-semibold text-white rounded-sm bg-stone-700">
              Hongkong
            </div>
            <div className="flex items-center justify-center h-24 font-semibold text-white bg-gray-800 rounded-sm">
              Netherlands
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center mt-8 lg:flex-1 lg:mt-0 lg:justify-end">
        <img
          src="/location.jpg"
          alt="Global Locations"
          className="object-cover w-[70%] h-auto max-w-md rounded-sm sm:max-w-lg lg:max-w-xl"
        />
      </div>
    </section>
  );
};

export default Locations;
