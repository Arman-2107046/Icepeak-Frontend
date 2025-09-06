import { FaRegCheckCircle, FaRegEnvelope, FaRegBuilding } from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] mb-8 bg-slate-200"
        style={{
          // backgroundImage: "url('/terms.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 text-center">
          <h1 className="max-w-3xl font-serif text-5xl font-semibold text-gray-800 drop-shadow-lg">
            Terms of Service
          </h1>
          <p className="max-w-2xl mt-4 text-xl font-light text-gray-800 drop-shadow-md">
            By accessing and using the Icepeak Design Limited website, you agree
            to the following terms and conditions. Please read them carefully.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-5xl px-6 py-16 mx-auto space-y-12">
        {/* Use of Website */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            1. Use of Website
          </h2>
          <p>
            You agree to use this website for lawful purposes only. You must not
            engage in any activity that interferes with, disrupts, or attempts
            to gain unauthorized access to the website or its services.
          </p>
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            2. Contact Form
          </h2>
          <p>
            If you submit information through our contact form, you agree to
            provide accurate and truthful details. We will use the information
            solely to respond to your inquiry and will not share it without your
            consent, as explained in our Privacy Policy.
          </p>
        </div>

        {/* Intellectual Property */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            3. Intellectual Property
          </h2>
          <p>
            All content on this website, including text, images, logos, and
            branding, is the property of{" "}
            <span className="font-semibold">Icepeak Design Limited</span>, unless
            otherwise stated. You may not copy, reproduce, modify, or distribute
            any content without our prior written permission.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            4. Limitation of Liability
          </h2>
          <p>
            Icepeak Design Limited is not liable for any direct, indirect,
            incidental, or consequential damages that may arise from your use of
            this website. We do not guarantee that the website will always be
            secure, error-free, or available without interruptions.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            5. Changes to Terms
          </h2>
          <p>
            We may update or revise these Terms of Service at any time without
            prior notice. By continuing to use our website after changes are
            posted, you agree to be bound by the updated terms.
          </p>
        </div>

        {/* Governing Law */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            6. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of{" "}
            <span className="font-semibold">Bangladesh</span>. Any disputes
            shall be subject to the exclusive jurisdiction of the courts of{" "}
            <span className="font-semibold">Dhaka, Bangladesh</span>.
          </p>
        </div>

        {/* Contact Us */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            7. Contact Us
          </h2>
          <p>
            If you have any questions or concerns regarding these Terms of
            Service, please contact us:
          </p>
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

export default TermsOfService;
