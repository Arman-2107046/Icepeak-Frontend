import { useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../BlogData"; // your blog data

export default function BlogList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Filter blogs
  const filteredBlogs = blogs.filter(
    (blog) =>
      (category === "All" || blog.category === category) &&
      blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex gap-1  mt-[12rem] p-[8rem]">
      {/* Left: Blog Posts */}
      <div className="w-2/3 space-y-10">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="pb-6 border-b">
            <img src={blog.image} alt={blog.title} className="object-cover w-[45rem] h-[50rem] rounded-sm" />
            <p className="mt-2 text-sm text-gray-500">{new Date(blog.date).toDateString()}</p>
            <h2 className="mt-2 text-2xl font-bold">{blog.title}</h2>
            <p className="mt-2 text-gray-700">{blog.excerpt}</p>
            <Link
              to={`/blogs/${blog.slug}`}
              className="inline-block mt-3 font-semibold text-amber-700 hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}

        {/* Pagination Placeholder */}
        <div className="flex justify-center gap-3 mt-10">
          <button className="px-3 py-1 border rounded">Prev</button>
          <button className="px-3 py-1 text-white border rounded bg-amber-600">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>

      {/* Right: Sidebar */}
      <div className="w-1/3 space-y-8">
        {/* Search */}
        <div>
          <h3 className="mb-2 text-lg font-bold">Search</h3>
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full p-2 border rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-2 text-lg font-bold">Categories</h3>
          {["All", "Sustainability", "Market Trends"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block w-full text-left px-2 py-1 rounded ${
                category === cat ? "bg-amber-600 text-white" : "hover:bg-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recent Blogs */}
        <div>
          <h3 className="mb-2 text-lg font-bold">Recent Blogs</h3>
          {blogs.slice(0, 3).map((b) => (
            <Link
              key={b.id}
              to={`/blogs/${b.slug}`}
              className="block text-amber-700 hover:underline"
            >
              {b.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
