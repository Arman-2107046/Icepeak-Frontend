import { useState, useEffect } from "react";
// import SplashScreen from "../SplashScreen";

interface Client {
  link: string;
  image: string;
}

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/clients`);
        const data = await res.json();
        if (data.status === "success") {
          setClients(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch clients:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) return <p className="mt-20 text-center">Loading clients...</p>;

  return (
    <section className="py-20  sm:py-24 mt-[4rem] pt-[8rem] md:pt-[12rem]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="mb-4 font-serif text-2xl font-bold text-center uppercase sm:text-3xl lg:text-4xl text-stone-800">
          Our Clients & Valued Partners in Global Fashion
        </h1>
        <div className="w-20 h-1 mx-auto mb-8 bg-gradient-to-r from-amber-500 to-amber-700"></div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={client.image}
                alt={`Client ${index + 1}`}
                className="object-contain w-full max-h-24 sm:max-h-28 md:max-h-32 lg:max-h-36 xl:max-h-40"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
