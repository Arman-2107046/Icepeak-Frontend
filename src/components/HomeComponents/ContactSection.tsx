import { FaWhatsapp, FaWeixin } from "react-icons/fa"; // WhatsApp & WeChat

// import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react"; // icons
import ContactForm from "../ContactForm";
import OfficeMap from "./OfficeMap";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-[6rem] sm:pt-20">
      {/* Contact Section */}
      <section
        className="px-6 py-16 sm:px-8 lg:px-24 sm:py-24"
        aria-labelledby="contact-heading"
      >
        <h1 className="mb-8 font-serif text-3xl font-bold text-center uppercase sm:mb-12 sm:text-4xl text-stone-800">
          SCHEDULE AN APPOINTMENT
        </h1>

        <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 mx-auto md:grid-cols-2 md:gap-16 max-w-7xl">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-700"
          >
            <h2
              id="contact-heading"
              className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl lg:text-4xl"
            >
              Contact Information
            </h2>
            <p className="text-base text-gray-600 sm:text-lg">
              For orders or partnerships, get in touch through the form or reach
              out to us directly.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-base font-medium text-gray-800 sm:text-lg">
                    mizan@icepeakbd.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-base font-medium text-gray-800 sm:text-lg">
                    +880 1678 705061
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <FaWhatsapp className="mt-1 text-gray-600" size={24} />
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="text-base font-medium text-gray-800 sm:text-lg">
                    <a
                      href="https://wa.me/8801678705061"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Connect On Whatsapp
                    </a>
                  </p>
                </div>
              </div>

              {/* WeChat */}
              <div className="relative flex items-start gap-4">
                <FaWeixin className="mt-1 text-gray-800" size={24} />
                <div>
                  <p className="text-sm text-gray-800">WeChat</p>
                  <p className="text-base font-medium text-gray-800 sm:text-lg">
                    <button
                      ref={buttonRef}
                      onClick={toggleDrawer}
                      className="text-blue-600 hover:underline"
                    >
                      Connect on WeChat
                    </button>
                  </p>

                  {/* Drawer / collapsible with Framer Motion */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        ref={drawerRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-64 p-4 pb-3 my-2 bg-white shadow-lg rounded-md h-[16rem] -mr-[2rem]"
                      >
                        <h3 className="mb-3 text-sm font-semibold text-center text-gray-800">
                          Scan to Connect on WeChat
                        </h3>
                        <img
                          src="/wechat.jpg" // 🔹 Replace with your QR image path
                          alt="WeChat QR Code"
                          className="w-40 mx-auto"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Address */}
              {/* <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-base font-medium text-gray-800 sm:text-lg">
                    House 24, Road 02, Block E, Sector 01, <br />
                    Aftab Nagar, Dhaka, Bangladesh
                  </p>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <OfficeMap />
    </div>
  );
};

export default ContactSection;