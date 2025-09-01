
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react"; // icons
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <div className="pt-[4rem]">
      {/* Contact Section */}
      <section className="px-6 py-24 " aria-labelledby="contact-heading">
        {/* Title */}
        {/* <div className="mb-20 text-center">
          <h1 className="relative inline-block mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl text-stone-800">
            <span className="absolute inset-0 bg-amber-800 opacity-15" style={{ height: "45%", top: "28%" }}></span>
            <span className="relative z-10">
              <span className="font-serif text-5xl font-light sm:text-6xl lg:text-7xl">S</span>
              SCHEDULE AN APPOINTMENT
            </span>
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>
        </div> */}

        <h1 className="mb-[4rem] font-serif text-4xl font-bold text-center uppercase text-stone-800">
          SCHEDULE AN APPOINTMENT
        </h1>

          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>
        {/* Content */}
        <div className="grid items-start grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-2">
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
              className="font-serif text-4xl font-semibold text-gray-800"
            >
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              For orders or partnerships, get in touch through the form or reach
              out to us directly.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium text-gray-800">
                    mizan@icepeakbd.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium text-gray-800">
                    +880 1678 705061
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-lg font-medium text-gray-800">
                    House 24, Road 02, Block E, Sector 01, <br />
                    Aftab Nagar, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
