import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Facebook, Twitter, Linkedin } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

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

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
const res = await fetch(`${import.meta.env.VITE_API_URL}/news`);
        const data = await res.json();
        if (data.status === "success") {
          setBlogs(data.data);
          const blogData = data.data.find((b: Blog) => b.slug === slug);
          setBlog(blogData || null);
        }
      } catch (err) {
        console.error(err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlogs();
  }, [slug]);

  if (loading) return <p className="mt-20 text-center">Loading blog...</p>;
  if (!blog) return <h2 className="mt-10 text-center">Blog not found</h2>;

  const recentBlogs = blogs
    .filter((b) => b.type === "publish" && b.id !== blog.id)
    .slice(0, 3);
const featuredImageUrl = `${import.meta.env.VITE_API_URL.replace('/api', '')}/storage/${blog.featured_image}`;

  return (
    <div>
      {/* Hero Section */}
<section
  className="relative h-[70vh] mb-8"
  style={{
    backgroundImage: "url('/news-hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />

  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="relative z-10 flex flex-col justify-center h-full px-4 text-left sm:px-6 lg:px-12">
    <h1 className="max-w-3xl font-serif text-2xl font-semibold text-white sm:text-3xl lg:text-4xl drop-shadow-lg">
      {blog.title}
    </h1>
    <p className="max-w-2xl mt-4 text-base font-light text-white sm:text-lg lg:text-xl drop-shadow-md">
      {blog.excerpt}
    </p>
  </div>
</section>


      <div className="flex flex-col justify-between max-w-6xl gap-8 px-8 mx-auto mt-12 lg:flex-row">
        {/* Left: Blog Content */}
        <div className="space-y-6 lg:w-2/3">
          <img
            src={featuredImageUrl}
            alt={blog.title}
            className="object-cover w-[40rem] rounded-sm h-auto"
          />
          <p className="text-sm text-gray-500">
            {blog.published_at
              ? new Date(blog.published_at).toDateString()
              : ""}
          </p>
          <h1 className="font-serif text-3xl font-bold">{blog.title}</h1>

          {/* Markdown content */}
          <div className="mt-4 prose prose-lg">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>

          <Link
            to="/blogs"
            className="block mt-6 font-semibold text-amber-700 hover:underline"
          >
            ← Back to News
          </Link>

          {/* Contact Section */}
          <section className="max-w-4xl mx-auto bg-white rounded-md mt-[4rem]">
            <h2 className="mb-6 font-serif text-2xl font-bold text-gray-800">
              Contact Us
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-700" />
                <span>Head Office: Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-700" />
                <a
                  href="mailto:mizan@icepeakbd.com"
                  className="hover:underline"
                >
                  mizan@icepeakbd.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaGlobe className="text-amber-700" />
                <a
                  href="https://www.icepeakbd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  icepeakbd.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-amber-700" />
                <a
                  href="https://wa.me/+8801678705061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +880 1678 705061
                </a>
              </div>
            </div>
          </section>

          {/* Share Section */}
          <section className="max-w-4xl mt-12 pb-[4rem]">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-gray-900 mt-[2rem]">
              Share This News
            </h2>
            <div className="flex items-center gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-blue-700 rounded-full hover:bg-blue-800"
                title="Share on Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(blog?.title || "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-sky-400 hover:bg-sky-500"
                title="Share on Twitter"
              >
                <Twitter size={20} />
              </a>

              <a
                href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                  window.location.href
                )}&media=${encodeURIComponent(
                  featuredImageUrl
                )}&description=${encodeURIComponent(blog?.title || "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-red-500 rounded-full hover:bg-red-600"
                title="Share on Pinterest"
              >
                <FaPinterest size={20} />
              </a>

              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  window.location.href
                )}&title=${encodeURIComponent(
                  blog?.title || ""
                )}&summary=${encodeURIComponent(blog?.excerpt || "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                title="Share on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6 lg:w-1/3">
          <div className="p-4 bg-gray-100 rounded">
            <h3 className="mb-2 text-lg font-bold">Recent Blogs</h3>
            {recentBlogs.map((b) => (
              <Link
                key={b.id}
                to={`/blogs/${b.slug}`}
                className="flex items-center gap-3 mb-3 hover:underline"
              >
                <img
src={`${import.meta.env.VITE_API_URL.replace('/api', '')}/storage/${b.featured_image}`}
                  alt={b.title}
                  className="object-cover w-12 h-12 rounded-sm"
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
