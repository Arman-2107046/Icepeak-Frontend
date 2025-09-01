import { useRef } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);

    const data = {
      user_name: formData.get("user_name")?.toString() || "",
      user_email: formData.get("user_email")?.toString() || "",
      subject: formData.get("subject")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      // console.log("API URL:", import.meta.env.VITE_API_URL);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok && form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="max-w-2xl p-8 mx-auto space-y-6 bg-white shadow-xl rounded-xl">
      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            placeholder="Subject of your message"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-slate-800 hover:bg-slate-700 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
