import { Link } from "react-router-dom";

const productCategories = [
    { title: "Knitwear", image: "/productImages/p1.jpg", path: "/knitwear" },
    { title: "Sweater", image: "/productImages/p2.jpg", path: "/sweater" },
    { title: "Woven-Denim", image: "/productImages/p3.jpg", path: "/woven-denim" },
    { title: "Woven-Non Denim", image: "/productImages/p4.jpg", path: "/woven-non-denim" },
    { title: "Woven-Outerwear", image: "/productImages/p5.jpg", path: "/woven-outerwear" },
    { title: "Activewear", image: "/productImages/p6.jpg", path: "/activewear" },
    { title: "Lingerie", image: "/productImages/p7.jpg", path: "/lingerie" },
    { title: "Workwear", image: "/productImages/p8.jpg", path: "/workwear" },
    { title: "Sleepwear", image: "/productImages/p9.jpg", path: "/sleepwear" },
    { title: "Leather Items", image: "/productImages/p10.jpg", path: "/leather-items" },
    { title: "Handicraft", image: "/productImages/p11.jpg", path: "/handicraft" },
    { title: "Home-Textile", image: "/productImages/p12.jpg", path: "/home-textile" },
];


const Production = () => {
  return (
    <div className="grid gap-6 lg:ml-4 lg:grid-cols-5 lg:p-[6rem] md:grid-cols-4 md:p-[4rem] sm:grid-cols-2 sm:p-[2rem] grid-cols-1 p-[3rem] ">
      {/* Text block */}
      <div className="max-w-xl mb-10 text-left mt-[2rem] lg:p-[1.5rem] md:p-[1rem] sm:p-[1rem] ">
        <h1 className="mb-4 font-serif text-xl font-light text-gray-800 lg:text-4xl md:text-3xl">
          Our Production Line
        </h1>
        <p className="font-light text-gray-600 max-w-[10rem] md:max-w-[14rem]">
        Personalized Designs That Resonate with Your Distinct Audience        </p>
      </div>

      {/* Product cards */}
      {productCategories.map(({ title, image, path }) => (
        <Link to={path} key={title}>
          <div className="relative w-full h-[17rem] sm:w-full sm:h-[18rem] md:h-[20rem] lg:h-[25rem] mb-6 overflow-hidden group cursor-pointer transition-all duration-500 ease-in-out hover:brightness-[.8] mx-auto">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 w-full p-4 text-center bg-gradient-to-t from-black/60 to-transparent">
              <h2 className="text-lg font-light text-gray-300 transition-all duration-300 group-hover:text-white group-hover:text-xl font-dmSerifText">
                {title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Production;
