import React from "react";
import { motion } from "framer-motion";
import { Globe, Leaf, Star, Users } from "lucide-react"; // Optional icons for values

const About = () => {
  return (
    <div className="text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative text-white ">
        <div className="container flex flex-col items-center px-6 py-32 mx-auto lg:flex-row lg:justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
              ICE PEAK DESIGN LIMITED
            </h1>
            <p className="mb-6 text-lg lg:text-xl">
              "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening" - Coco Chanel
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-10 lg:w-1/2 lg:mt-0"
          >
            <img
              src="/images/fashion-hero.jpg"
              alt="Fashion Inspiration"
              className="w-full shadow-2xl rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container px-6 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
          <p className="text-lg leading-relaxed">
            For over 10 years, ICE PEAK DESIGN LTD. has been a catalyst for change in the Bangladeshi garments industry. As a fast-growing garment sourcing hub and exporter, we are dedicated to delivering excellence in product sourcing, design, pricing, and quality. Supported by 30+ compliance-certified factories, we ensure flexible, uninterrupted sourcing and timely delivery. From trend-driven design to transparent execution, we are committed to reliability, integrity, and continuous value creation.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-100">
        <div className="container grid items-center gap-16 px-6 mx-auto lg:grid-cols-2">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To empower global fashion brands with sustainable, ethical, and innovative sourcing solutions that combine creativity, quality, and transparency—while uplifting communities and creating lasting value in the apparel industry.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To be the most trusted and forward-thinking garment sourcing partner in Bangladesh, recognized worldwide for driving fashion innovation, championing sustainability, and setting new standards of excellence in the global apparel supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container px-6 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold">Our Core Values</h2>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 text-center bg-white shadow-lg rounded-xl"
          >
            <Leaf className="mx-auto mb-4 text-green-500" size={40} />
            <h3 className="mb-2 text-xl font-bold">Sustainability</h3>
            <p className="text-gray-600">Committed to eco-friendly and ethical practices across our supply chain.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 text-center bg-white shadow-lg rounded-xl"
          >
            <Globe className="mx-auto mb-4 text-blue-500" size={40} />
            <h3 className="mb-2 text-xl font-bold">Global Reach</h3>
            <p className="text-gray-600">Partnering with brands worldwide to bring ideas to life with quality and efficiency.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 text-center bg-white shadow-lg rounded-xl"
          >
            <Star className="mx-auto mb-4 text-yellow-500" size={40} />
            <h3 className="mb-2 text-xl font-bold">Innovation</h3>
            <p className="text-gray-600">Constantly pushing fashion trends and production methods forward.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 text-center bg-white shadow-lg rounded-xl"
          >
            <Users className="mx-auto mb-4 text-purple-500" size={40} />
            <h3 className="mb-2 text-xl font-bold">Integrity</h3>
            <p className="text-gray-600">Operating with transparency, reliability, and respect for our partners and communities.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
