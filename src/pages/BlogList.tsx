import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define a type for the blog object
interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  is_featured: number;
  type: "draft" | "publish";
  category: string;
  featured_image: string;
  published_at: string | null;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = 2;

  const categories: string[] = [
    "All",
    "Business & Industry",
    "Technology",
    "Sustainability & Trends",
    "Education",
    "Others",
  ];

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/news`);
        const data = await res.json();
        if (data.status === "success") {
          setBlogs(data.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Reset to first page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  // Filter blogs: only published, then category + search
  const filteredBlogs = blogs.filter(
    (b) =>
      b.type === "publish" &&
      (category === "All" || b.category === category) &&
      b.title.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // if (loading) return <p className="mt-20 text-center">Loading blogs...</p>;
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-blue-600 animate-spin [animation-duration:0.4s]"></div>
      </div>
    );

  return (
    <div>
      <section
        className="relative h-[70vh] mb-8"
        style={{
          backgroundImage: "url('/news-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-12 text-left">
          <h1 className="max-w-3xl font-serif text-3xl font-semibold text-white drop-shadow-lg">
            Stay Updated with Industry Insights and Icepeak Design Limited
            Developments{" "}
          </h1>
          <p className="max-w-2xl mt-4 text-xl font-light text-white drop-shadow-md">
            Discover the latest industry trends, innovations, and insights
            driving growth and excellence across global markets.{" "}
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-[10rem] mt-32 flex flex-col lg:flex-row gap-12">
        {/* Left: Blog Posts */}
        <div className="w-full space-y-10 lg:w-2/3">
          {currentBlogs.map((b) => (
            <div key={b.id} className="pb-6 border-b">
              <img
                src={`${import.meta.env.VITE_API_URL.replace(
                  "/api",
                  ""
                )}/storage/${b.featured_image}`}
                alt={b.title}
                className="object-cover w-full lg:w-[40rem] h-auto rounded-sm"
              />
              <p className="mt-2 text-sm text-gray-500">
                {b.published_at ? new Date(b.published_at).toDateString() : ""}
              </p>
              <h2 className="mt-2 text-2xl font-bold">{b.title}</h2>
              <p className="mt-2 text-gray-700">{b.excerpt}</p>
              <Link
                to={`/blogs/${b.slug}`}
                className="inline-block mt-3 font-semibold text-amber-700 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}

          {/* Pagination Controls */}
          {filteredBlogs.length > 0 && (
            <div className="flex flex-wrap items-center justify-start pt-8 space-x-4 pb-[8rem]">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded font-medium transition ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                ← Prev
              </button>

              <span className="font-medium text-gray-600">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded font-medium transition ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                Next →
              </button>
            </div>
          )}

          {filteredBlogs.length === 0 && (
            <div className="text-center text-gray-500">
              <p>No blogs found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Right: Sidebar */}
        <div className="flex flex-col w-full space-y-6 lg:w-1/3">
          {/* Search */}
          <div className="p-4 bg-gray-100 rounded">
            <h3 className="mb-2 text-lg font-bold">Search</h3>
            <input
              type="text"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              placeholder="Search blogs..."
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Categories */}
          <div className="p-4 bg-gray-100 rounded">
            <h3 className="mb-2 text-lg font-bold">Categories</h3>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`block w-full text-left px-2 py-1 rounded ${
                  category === cat
                    ? "bg-amber-600 text-white"
                    : "hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Recent Blogs */}
          <div className="p-4 bg-gray-100 rounded">
            <h3 className="mb-2 text-lg font-bold">Recent Blogs</h3>
            {blogs
              .filter((b) => b.type === "publish")
              .slice(0, 3)
              .map((b) => (
                <Link
                  key={b.id}
                  to={`/blogs/${b.slug}`}
                  className="flex items-center mb-2 hover:underline"
                >
                  <img
                    src={`${import.meta.env.VITE_API_URL.replace(
                      "/api",
                      ""
                    )}/storage/${b.featured_image}`}
                    alt={b.title}
                    className="object-cover w-12 h-12 mr-2 rounded"
                  />
                  <span className="text-amber-700">{b.title}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
