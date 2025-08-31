import { useState, useEffect } from "react";

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

//   const handleDecline = () => {
//     setShow(false);
//   };

  if (!show) return null;

  return (
    <div className="fixed z-50 flex flex-col items-center justify-between gap-4 p-6 bg-white border-l-4 border-gray-600 rounded-sm shadow-2xl bottom-6 left-6 md:flex-row w-96">
      {/* Text Section */}
      <div className="flex flex-col gap-2">
                {/* <button
          onClick={handleDecline}
          className="px-2 py-1 font-bold text-gray-600 transition rounded hover:bg-gray-200"
        >
          ✕
        </button> */}
        <p className="text-sm text-gray-800 md:text-base">
          We use cookies to improve your experience on our site. By continuing, you agree to our cookie policy.
        </p>
        <a
          href="/cookie-policy"
          className="text-sm font-medium text-gray-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 mt-3 md:mt-0">
        <button
          onClick={handleAccept}
          className="px-4 py-2 font-semibold text-white transition bg-gray-600 rounded-sm hover:bg-gray-500"
        >
          Accept
        </button>
        {/* <button
          onClick={handleDecline}
          className="px-2 py-1 font-bold text-gray-600 transition rounded hover:bg-gray-200"
        >
          ✕
        </button> */}
      </div>
    </div>
  );
}
