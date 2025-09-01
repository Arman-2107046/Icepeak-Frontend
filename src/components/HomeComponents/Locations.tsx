const Locations = () => {
  return (
    <div className="flex flex-row justify-start pt-[8rem]">
      <div className="grid grid-cols-3 gap-3 px-[8rem] text-white font-serif">
        {/* First two merged into one */}

        <div className="col-span-3  max-w-[40rem] text-stone-900 p-6 ">
          <h1 className="mb-6 text-2xl font-extrabold uppercase text-stone-800">
            Driving Innovation Across the Globe
          </h1>
          <p className="leading-relaxed ">
            Explore our key global hubs, where innovation in textiles meets
            trusted craftsmanship. From Asia to Europe and the USA, our offices
            ensure seamless service, premium sourcing, and timely delivery for
            our valued partners.
          </p>
        </div>

        <div className="flex items-center justify-center h-[7rem] col-span-2">
          <p className="font-serif font-bold text-lg  max-w-[24rem] text-stone-800 p-2 uppercase">
            Key International Offices Driving Innovation in Fabrics & Fashion
          </p>
        </div>

        {/* Rectangles for countries */}
        <div className="flex items-center justify-center w-[12rem] h-[7rem] bg-stone-600">
          <p>Bangladesh</p>
        </div>
        <div className="flex items-center justify-center w-[12rem] h-[7rem] bg-gray-500">
          <p>China</p>
        </div>
        <div className="flex items-center justify-center w-[12rem] h-[7rem] bg-stone-700">
          <p>Germany</p>
        </div>
        <div className="flex items-center justify-center w-[12rem] h-[7rem] bg-stone-900">
          <p>USA</p>
        </div>

        {/* <div className="col-span-3  max-w-[40rem] text-stone-900 p-6 ">
  <h1 className="mb-6 text-2xl font-extrabold uppercase text-stone-800">
    Driving Innovation Across the Globe
  </h1>
  <p className="text-lg leading-relaxed">
    Explore our key global hubs, where innovation in textiles meets trusted
    craftsmanship. From Asia to Europe and the USA, our offices ensure seamless
    service, premium sourcing, and timely delivery for our valued partners.
  </p>
</div> */}
      </div>

      <div className="w-[40rem] h-[35rem]">
        <img src="/location.jpg" alt="" />
      </div>
    </div>
  );
};

export default Locations;
