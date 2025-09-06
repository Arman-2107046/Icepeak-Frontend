import { FaRegCheckCircle, FaRegEnvelope, FaRegBuilding } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] mb-8 bg-slate-200"
        style={{
          // backgroundImage: "url('/privacy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 text-center">
          <h1 className="max-w-3xl font-serif text-5xl font-semibold text-gray-800 drop-shadow-lg">
            Privacy Policy
          </h1>
          <p className="max-w-2xl mt-4 text-xl font-light text-gray-800 drop-shadow-md">
            We respect your privacy and are committed to protecting your
            personal information. Learn how we collect, use, and safeguard your
            data to ensure a secure and transparent experience.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-5xl px-6 py-16 mx-auto space-y-12">
        {/* Introduction */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Introduction
          </h2>
          <p>
            Ice Peak Design Limited ("we", "our", or "us") values your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or interact
            with our services.
          </p>
        </div>

        {/* Information Collection */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Information We Collect
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <FaRegCheckCircle className="inline mr-2 text-gray-600" />
              Personal Information: Name, email, phone number, company details.
            </li>
            {/* <li>
              <FaRegCheckCircle className="inline mr-2 text-gray-600" />
              Non-Personal Information: IP address, browser type, pages visited,
              analytics data.
            </li> */}
            <li>
              <FaRegCheckCircle className="inline mr-2 text-gray-600" />
              Cookies & Tracking: We use cookies and tracking tools for
              analytics and improving user experience.
            </li>
          </ul>
        </div>

        {/* How We Use Information */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Provide and maintain our services efficiently.</li>
            <li>
              Respond to inquiries and send updates or newsletters (with
              consent).
            </li>
            <li>
              Analyze site performance and user behavior to improve our
              services.
            </li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>
        </div>

        {/* Data Sharing */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            How We Share Your Information
          </h2>
          <p>
            We respect your privacy and do not sell your personal information.
            We may share information with:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Trusted service providers who assist us in operating the website
              and delivering services.
            </li>
            <li>Legal authorities when required by law.</li>
            <li>Business partners, only with your consent.</li>
          </ul>
        </div>

        {/* Security */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Security
          </h2>
          <p>
            We implement technical and organizational measures to safeguard your
            information. However, no online method is 100% secure. We encourage
            you to take precautions to protect your data.
          </p>
        </div>

        {/* Your Rights */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. You may also opt out of marketing communications.
            Contact us at any time using the details below.
          </p>
        </div>

        {/* Cookies */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Cookies & Tracking
          </h2>
          <p>
            We use cookies and similar technologies to improve site
            functionality, analyze usage, and deliver personalized content. You
            can disable cookies in your browser, but some features may not
            function properly.
          </p>
        </div>

        {/* Changes */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Changes to This Policy
          </h2>
          <p>
            We may update this policy periodically. The latest version will be
            available on this page with the “Last Updated” date.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p>If you have questions about this Privacy Policy, contact us:</p>
          <ul className="space-y-2">
            <li>
              <FaRegEnvelope className="inline mr-2 text-gray-600" />
              Email:{" "}
              <a
                href="mailto:mizan@icepeakbd.com"
                className="text-gray-900 underline"
              >
                mizan@icepeakbd.com
              </a>
            </li>
            <li>
              <FaRegBuilding className="inline mr-2 text-gray-600" />
              Address: House 24, Road 02, Block E, Sector 01, Aftab Nagar,
              Dhaka, Bangladesh
            </li>
            <li>
              <FaRegCheckCircle className="inline mr-2 text-gray-600" />
              Phone: +880 1678 705061
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
