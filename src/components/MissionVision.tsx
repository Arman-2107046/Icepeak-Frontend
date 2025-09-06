const MissionVision: React.FC = () => {
    return (
      <section className="w-full max-w-6xl px-6 py-20 mx-auto text-gray-800">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900">
            Our Mission & Vision
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Driving fashion innovation with sustainability, ethics, and creativity.
          </p>
        </div>
  
        {/* Mission + Vision Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Mission */}
          <div className="relative flex flex-col justify-between p-8 bg-white border border-gray-100 shadow-sm rounded-2xl">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-emerald-50">
                {/* Leaf icon */}
                <svg
                  className="w-6 h-6 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-wide text-emerald-600">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-700">
                To empower global fashion brands with sustainable, ethical, and innovative
                sourcing solutions that combine creativity, quality, and transparency—while
                uplifting communities and creating lasting value in the apparel industry.
              </p>
            </div>
            <img
              className="object-cover w-full mt-6 rounded-lg h-[15rem]"
              src="/mission1.jpg"
              alt="Sustainable fashion"
            />
          </div>
  
          {/* Vision */}
          <div className="relative flex flex-col justify-between p-8 bg-white border border-gray-100 shadow-sm rounded-2xl">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-sky-50">
                {/* Eye icon */}
                <svg
                  className="w-6 h-6 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-wide text-sky-600">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-700">
                To be the most trusted and forward-thinking garment sourcing partner
                in Bangladesh, recognized worldwide for driving fashion innovation,
                championing sustainability, and setting new standards of excellence in
                the global apparel supply chain.
              </p>
            </div>
            <img
              className="object-cover w-full h-[15rem] mt-6 rounded-lg"
              src="/vision.jpg"
              alt="Innovation"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionVision;
  