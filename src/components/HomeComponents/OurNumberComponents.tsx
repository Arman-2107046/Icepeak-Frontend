
const OurNumberComponents = () => {
  return (
    <div>
      
      <section className="px-8 py-16 bg-white">
  <div className="grid grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
    
    <div>
      <h2 className="mb-8 text-2xl font-bold text-gray-800">OUR NUMBERS</h2>
      <div className="grid grid-cols-3 gap-6">

        
        <div className="flex flex-col items-center justify-center p-6 text-white bg-red-600 border border-white h-[10rem] w-[6rem]">
          <span className="text-4xl font-bold">15</span>
          <span className="mt-1 text-sm text-center">Key Offices Worldwide</span>
        </div>
        
        
        <div className="flex flex-col items-center justify-center p-6 text-white bg-gray-300 border border-white">
          <span className="text-4xl font-bold">35</span>
          <span className="mt-1 text-sm text-center">Years In Business</span>
        </div>
        
        
        <div className="flex flex-col items-center justify-center p-6 text-white bg-gray-500 border border-white">
          <span className="text-4xl font-bold">10</span>
          <span className="mt-1 text-sm text-center">Countries Worldwide</span>
        </div>
        
        
        <div className="flex flex-col items-center justify-center p-6 text-white bg-gray-700 border border-white">
          <span className="text-4xl font-bold">500+</span>
          <span className="mt-1 text-sm text-center">Staff Worldwide</span>
        </div>
        
        
        <div className="flex flex-col items-center justify-center p-6 text-white bg-black border border-white">
          <span className="text-4xl font-bold">50+</span>
          <span className="mt-1 text-sm text-center">Global Customers</span>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="absolute top-0 left-0 text-2xl font-bold text-gray-400 transform -rotate-90 -translate-x-full">
        WHY CHOOSE US
      </div>

      <div className="ml-12">
        <img src="path-to-image.jpg" alt="Mannequin with laptop" className="object-cover w-full mb-6 rounded-md" />

        <h3 className="mb-4 text-xl font-semibold text-gray-800">
          These key factors enable us to work with fashion companies around the world:
        </h3>

        <ol className="space-y-4 text-gray-700 list-decimal list-inside">
          <li>Dynamic business models positioned to operate on short lead times, low margins and flexible volume.</li>
          <li>Focus on sustainable product offers.</li>
          <li>Existing sourcing and production presence in key low-cost and duty-free countries of the world.</li>
          <li>Highly competitive product prices and service fees.</li>
        </ol>
      </div>
    </div>

  </div>
</section>

    </div>
  )
}

export default OurNumberComponents
