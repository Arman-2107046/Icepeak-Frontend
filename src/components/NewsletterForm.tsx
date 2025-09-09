// import { useState } from "react";

// const NewsletterForm = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email) {
//       setMessage("Please enter an email.");
//       return;
//     }

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/newsletter/subscribe`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Subscribed successfully!");
//         setEmail("");
//       } else {
//         setMessage(data?.message || "Subscription failed!");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Something went wrong. Try again later.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-4">
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//         className="w-full px-4 py-3 text-gray-800 rounded-sm focus:outline-none"
//         required
//       />
//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="px-6 py-3 font-semibold text-white transition rounded-sm shadow bg-slate-500 hover:bg-slate-400"
//         >
//           Subscribe
//         </button>
//       </div>
//       {message && (
//         <p className={`mt-2 text-sm ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
//           {message}
//         </p>
//       )}
//     </form>
//   );
// };

// export default NewsletterForm;



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email.");
      setType("error");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Subscribed successfully!");
        setType("success");
        setEmail("");
      } else {
        setMessage(data?.message || "Subscription failed!");
        setType("error");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Try again later.");
      setType("error");
    }
  };

  // Auto hide message after 2.5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setType("");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col w-full max-w-md gap-4"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-3 text-gray-800 rounded-sm focus:outline-none"
        required
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 font-semibold text-white transition rounded-sm shadow bg-slate-500 hover:bg-slate-400"
        >
          Subscribe
        </button>
      </div>

      {/* Animated Message */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={`absolute -bottom-14 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-md text-sm font-medium ${
              type === "success"
                ? "bg-green-300 text-white"
                : "bg-red-300 text-white"
            }`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default NewsletterForm;
