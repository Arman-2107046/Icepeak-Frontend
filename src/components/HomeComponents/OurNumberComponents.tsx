const OurNumberComponents = () => {
  return (
    <div>
      <section className="px-8 py-16 bg-white">
        <div className="grid grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2 pt-[4rem] text-white">
          <div>
            {/* <h2 className="mb-8 font-serif text-4xl font-light text-gray-700">
              NUMBERS THAT DEFINE US
            </h2> */}
            <div className="grid grid-cols-3 gap-4 font-serif font-bold">
              <div className="flex flex-col items-center justify-start p-6 text-stone-600 border border-white h-[14rem] w-[10rem] font-serif">
                <span className="mt-1 text-2xl center text-">
                  NUMBERS THAT DEFINE US
                </span>
              </div>

              <div className="flex items-center justify-center p-3 bg-[#968476] border border-white h-[14rem] w-[10rem] text-white">
                {/* Inner rectangle */}
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-4 border border-white">
                  <span className="text-4xl font-bold">15</span>
                  <span className="mt-2 text-sm text-center">
                    Key Offices Worldwide
                  </span>
                </div>
              </div>

              {/* Card 1 */}
              <div className="flex items-center justify-center p-3 bg-[#5e2500] border border-white h-[14rem] w-[10rem]">
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-3 border border-white">
                  <span className="text-4xl font-bold">35</span>
                  <span className="mt-2 text-sm text-center">
                    Years In Business
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center justify-center p-3 bg-gray-500 border border-white h-[14rem] w-[10rem]">
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-3 border border-white">
                  <span className="text-4xl font-bold">10</span>
                  <span className="mt-2 text-sm text-center">
                    Countries Worldwide
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center justify-center p-3 bg-gray-700 border border-white h-[14rem] w-[10rem]">
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-3 border border-white">
                  <span className="text-4xl font-bold">500+</span>
                  <span className="mt-2 text-sm text-center">
                    Staff Worldwide
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-center justify-center p-3 bg-[#5a5755] border border-white h-[14rem] w-[10rem]">
                <div className="box-border flex flex-col items-center justify-center w-full h-full p-3 border border-white">
                  <span className="text-4xl font-bold">50+</span>
                  <span className="mt-2 text-sm text-center">
                    Global Customers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            {/* Image on the left */}
            <div className="-mr-10">
              <img
                src="/dummy.jpg"
                alt="Mannequin with laptop"
                className="object-contain w-[26rem] h-[29.5rem] rounded-md"
              />
            </div>

            {/* Text on the right */}
            <div className="max-w-[18rem]">
              <h3 className="mb-4 font-serif text-xl font-semibold text-gray-800">
    Key factors driving our global fashion partnerships:
              </h3>

              <ol className="space-y-4 text-gray-700 list-decimal list-inside marker:text-5xl marker:font-bold marker:font-serif">
                <li>
                  Dynamic business models positioned to operate on short lead
                  times, low margins and flexible volume.
                </li>
                <li>Focus on sustainable product offers.</li>
                <li>
                  Existing sourcing and production presence in key low-cost and
                  duty-free countries of the world.
                </li>
                <li>Highly competitive product prices and service fees.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurNumberComponents;
