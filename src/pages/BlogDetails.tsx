import { useParams, Link } from "react-router-dom";
import blogs from "../BlogData";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <h2 className="mt-10 text-center">Blog not found</h2>;

  return (
    <div className="max-w-4xl px-10 py-12 mx-auto">
      <img src={blog.image} alt={blog.title} className="object-cover w-full rounded-md h-80" />
      <p className="mt-2 text-sm text-gray-500">{new Date(blog.date).toDateString()}</p>
      <h1 className="mt-3 text-3xl font-bold">{blog.title}</h1>
      <div
        className="mt-6 prose prose-lg"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <Link to="/blogs" className="block mt-8 font-semibold text-amber-700 hover:underline">
        ← Back to Blogs
      </Link>
    </div>
  );
}
