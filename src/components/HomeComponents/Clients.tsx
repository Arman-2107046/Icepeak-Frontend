

const clientsData = [
  { name: "Client 1", logo: "/clientImages/1.png", url: "https://client1.com" },
  { name: "Client 2", logo: "/clientImages/2.png", url: "https://client2.com" },
  { name: "Client 3", logo: "/clientImages/3.png", url: "https://client3.com" },
  { name: "Client 4", logo: "/clientImages/4.png", url: "https://client4.com" },
  { name: "Client 5", logo: "/clientImages/5.png", url: "https://client5.com" },
  // { name: "Client 6", logo: "/clientImages/6.png", url: "https://client6.com" },
  { name: "Client 7", logo: "/clientImages/7.png", url: "https://client7.com" },
  { name: "Client 8", logo: "/clientImages/8.png", url: "https://client8.com" },
  { name: "Client 9", logo: "/clientImages/9.png", url: "https://client9.com" },
  { name: "Client 10", logo: "/clientImages/10.png", url: "https://client10.com" },
  { name: "Client 11", logo: "/clientImages/11.png", url: "https://client11.com" },
  { name: "Client 12", logo: "/clientImages/12.png", url: "https://client12.com" },
];

const Clients = () => {
  return (
    <section className="py-20 bg-gray-100 sm:py-24 mt-[4rem] pt-[8rem] md:pt-[12rem]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="mb-4 font-serif text-2xl font-bold text-center uppercase sm:text-3xl lg:text-4xl text-stone-800">
          Our Clients & Valued Partners in Global Fashion
        </h1>
        <div className="w-20 h-1 mx-auto mb-8 bg-gradient-to-r from-amber-500 to-amber-700"></div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          {clientsData.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              // className="flex items-center justify-center p-4 transition-transform duration-300 bg-white rounded-lg shadow-sm hover:scale-105"
              className="flex items-center justify-center p-1 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain w-full max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-24 xl:max-h-28"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
