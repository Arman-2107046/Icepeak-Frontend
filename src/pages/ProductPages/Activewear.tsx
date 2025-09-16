import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  gender?: string | null;
  category: string;
  image: string;
}

const Activewear = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/products`)
      .then((res) => res.json())
      .then((data: Product[]) => {
        const activewearProducts = data.filter((product) =>
          product.category.includes("activewear")
        );
        setProducts(activewearProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] mb-12"
        style={{
          backgroundImage: "url('/productImages/active-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center h-full px-12 text-left">
          <h1 className="max-w-3xl font-serif text-3xl font-semibold text-white drop-shadow-lg">
            Explore Our Premium Activewear Collection
          </h1>
          <p className="max-w-2xl mt-2 text-lg font-light text-white drop-shadow-md">
            Comfortable, functional, and stylish activewear for every workout.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 mb-12 md:px-12 lg:px-24">
        <h2 className="mb-8 font-serif text-3xl font-bold text-gray-800">
          Our Activewear Products
        </h2>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-blue-600 animate-spin [animation-duration:0.4s]"></div>
          </div>
        ) : products.length === 0 ? (
          <p className="text-gray-500">No activewear products available.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden transition-all duration-300 bg-white rounded-md shadow-lg group hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_API_URL.replace(
                      "/api",
                      ""
                    )}/storage/${product.image}`}
                    alt={product.name}
                    loading="lazy"
                    className="object-cover w-full transition-transform duration-500 transform h-80 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600">
                    {product.name}
                    {product.gender &&
                      product.gender.toLowerCase() !== "not-applicable" &&
                      ` - ${product.gender}`}
                  </h3>
                </div>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Activewear;
