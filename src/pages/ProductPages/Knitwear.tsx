const Knitwear = () => {
  return (
    <div>
      <section
        className="relative h-[70vh] mb-8 bg-slate-200"
        style={{
          // backgroundImage: "url('/privacy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 text-center">
          <h1 className="max-w-3xl font-serif font-semibold text-gray-800 text-7xl drop-shadow-lg">
KNITWEAR          </h1>
          <p className="max-w-2xl mt-4 text-xl font-light text-gray-800 drop-shadow-md">
            Explore Premium Knitwear Collection
          </p>
        </div>
      </section>
    </div>
  );
};

export default Knitwear;
