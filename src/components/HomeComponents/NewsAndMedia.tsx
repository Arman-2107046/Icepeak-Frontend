import { useState, useEffect } from "react";

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  is_featured: number;
}

const NewsAndMedia = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/news`);
        const data = await res.json();
        const featuredBlogs = data.data.filter(
          (b: Blog) => b.is_featured === 1
        );
        setBlogs(featuredBlogs);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + itemsPerPage, blogs.length - itemsPerPage)
    );
  };

  const visibleBlogs = blogs.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="max-w-[90rem] px-4 py-8 mx-auto pt-[4rem]">
      <h1 className="mb-4 font-serif text-2xl font-bold text-center uppercase sm:text-3xl lg:text-4xl text-stone-800">
        Featured News
      </h1>
      <div className="w-20 h-1 mx-auto mb-8 bg-gradient-to-r from-amber-500 to-amber-700"></div>
      <div className="relative">
        {/* Carousel Grid */}
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {visibleBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col overflow-hidden bg-white rounded shadow"
            >
              <img
                src={`${import.meta.env.VITE_API_URL.replace(
                  "/api",
                  ""
                )}/storage/${blog.featured_image}`}
                alt={blog.title}
                className="object-cover w-full h-48"
              />
              <div className="flex flex-col flex-1 p-4">
                <h3 className="mb-2 text-lg font-bold">{blog.title}</h3>
                <p className="flex-1 text-gray-700">{blog.excerpt}</p>
                <a
                  href={`/blogs/${blog.slug}`}
                  className="mt-4 font-semibold text-amber-600 hover:text-amber-700"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-3 py-1 rounded font-medium transition ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            ← Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= blogs.length}
            className={`px-3 py-1 rounded font-medium transition ${
              currentIndex + itemsPerPage >= blogs.length
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsAndMedia;
