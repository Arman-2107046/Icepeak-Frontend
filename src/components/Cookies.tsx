import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed z-50 bottom-6 left-1/2 transform -translate-x-1/2 md:left-6 md:translate-x-0 w-[90%] max-w-lg p-5 bg-white rounded-sm shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 border-l-4 border-stone-800 transition-all">
      {/* Text Section */}
      <div className="flex flex-col flex-1 gap-2">
        <p className="text-sm text-gray-800 md:text-base">
          We use cookies to improve your experience on our site. By continuing, you agree to our cookie policy.
        </p>
        <a
          href="/cookie-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-stone-800 hover:underline"
        >
          Learn More
        </a>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={handleAccept}
          className="px-5 py-2 font-semibold text-white transition rounded-sm shadow-md bg-stone-800 hover:bg-stone-700"
        >
          Accept
        </button>
        <button
          onClick={handleClose}
          className="p-2 text-gray-500 transition rounded-full hover:text-gray-700"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
