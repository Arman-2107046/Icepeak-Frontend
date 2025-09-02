// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin } from "lucide-react"; // icons
// import ContactForm from "../ContactForm";

// const ContactSection = () => {
//   return (
//     <div className="pt-16 sm:pt-20">
//       {/* Contact Section */}
//       <section className="px-6 py-16 sm:px-8 lg:px-24 sm:py-24" aria-labelledby="contact-heading">
//         <h1 className="mb-8 font-serif text-3xl font-bold text-center uppercase sm:mb-12 sm:text-4xl text-stone-800">
//           SCHEDULE AN APPOINTMENT
//         </h1>

//         <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>

//         {/* Content */}
//         <div className="grid grid-cols-1 gap-12 mx-auto md:grid-cols-2 md:gap-16 max-w-7xl">
//           {/* Left Side: Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8 text-gray-700"
//           >
//             <h2
//               id="contact-heading"
//               className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl lg:text-4xl"
//             >
//               Contact Information
//             </h2>
//             <p className="text-base text-gray-600 sm:text-lg">
//               For orders or partnerships, get in touch through the form or reach out to us directly.
//             </p>

//             <div className="space-y-6">
//               {/* Email */}
//               <div className="flex items-start gap-4">
//                 <Mail className="mt-1 text-slate-900" />
//                 <div>
//                   <p className="text-sm text-gray-500">Email</p>
//                   <p className="text-base font-medium text-gray-800 sm:text-lg">
//                     mizan@icepeakbd.com
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start gap-4">
//                 <Phone className="mt-1 text-slate-900" />
//                 <div>
//                   <p className="text-sm text-gray-500">Phone</p>
//                   <p className="text-base font-medium text-gray-800 sm:text-lg">
//                     +880 1678 705061
//                   </p>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-start gap-4">
//                 <MapPin className="mt-1 text-slate-900" />
//                 <div>
//                   <p className="text-sm text-gray-500">Address</p>
//                   <p className="text-base font-medium text-gray-800 sm:text-lg">
//                     House 24, Road 02, Block E, Sector 01, <br />
//                     Aftab Nagar, Dhaka, Bangladesh
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side: Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="w-full"
//           >
//             <ContactForm />
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactSection;





import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react"; // icons
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Contact Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-24 sm:py-24" aria-labelledby="contact-heading">
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
              For orders or partnerships, get in touch through the form or reach out to us directly.
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

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-base font-medium text-gray-800 sm:text-lg">
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
            className="w-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
