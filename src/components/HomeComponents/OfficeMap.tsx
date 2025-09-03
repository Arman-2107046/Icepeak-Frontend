import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const OfficeMap = () => {
  return (
    <div>
      <section className="px-6 py-20 bg-white">
        <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-3xl font-semibold text-gray-800 md:text-4xl">
              Our Corporate Office
            </h3>
            <p className="leading-relaxed text-gray-600 ">
              We are pleased to welcome clients, partners, and collaborators to
              our Dhaka office. Our premises serve as a hub for strategic
              discussions, partnership development, and professional engagement.
              We look forward to hosting you at the location indicated below.
            </p>

            <div className="mt-6 text-left">
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full h-[350px] rounded-md overflow-hidden shadow-lg border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3152.189315104967!2d90.42347054373298!3d23.768594757298718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%2024%2C%20Road%2002%2C%20Block%20E%2C%20Sector%2001%2C%20Aftab%20Nagar%2C%20Dhaka%2C%20Bangladesh!5e1!3m2!1sen!2sbd!4v1756908733060!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              //   allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Google Map of our Office"
            ></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6299.364249616243!2d90.38324473957482!3d23.87186252540126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41746c7628b%3A0x909d6a0f5cebfe8f!2sSector-13%2C%20Dhaka%201230!5e1!3m2!1sen!2sbd!4v1753015638921!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of our Office"
              className="w-full h-full"
            ></iframe> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfficeMap;
