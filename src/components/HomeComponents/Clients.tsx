const clientsData = [
  { name: "Client 1", logo: "/clientImages/client1.png", url: "https://client1.com" },
  { name: "Client 2", logo: "/clientImages/client2.png", url: "https://client2.com" },
  { name: "Client 3", logo: "/clientImages/client3.png", url: "https://client3.com" },
  { name: "Client 4", logo: "/clientImages/client4.png", url: "https://client4.com" },
  { name: "Client 5", logo: "/clientImages/client5.png", url: "https://client5.com" },
  { name: "Client 6", logo: "/clientImages/client6.png", url: "https://client6.com" },
  { name: "Client 7", logo: "/clientImages/client7.png", url: "https://client7.com" },
  { name: "Client 8", logo: "/clientImages/client8.png", url: "https://client8.com" },
  { name: "Client 9", logo: "/clientImages/client9.png", url: "https://client9.com" },
  { name: "Client 10", logo: "/clientImages/client10.png", url: "https://client10.com" },
  { name: "Client 11", logo: "/clientImages/client11.png", url: "https://client11.com" },
  { name: "Client 12", logo: "/clientImages/client12.png", url: "https://client12.com" },
];

const Clients = () => {
  return (
    <section className=" bg-gray-100 mt-[8rem] py-[8rem]">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-8 font-serif text-3xl font-bold text-center uppercase text-stone-800">
          Our Clients & Valued Partners in Global Fashion
        </h1>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {clientsData.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 transition-transform duration-300 bg-white rounded-lg shadow-sm hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain w-full max-h-24"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
