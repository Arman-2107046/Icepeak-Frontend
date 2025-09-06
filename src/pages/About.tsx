import { motion } from "framer-motion";
import { Globe, Leaf, Star, Users } from "lucide-react"; // Optional icons for values
import MissionVisionComponent from "../components/MissionVision";
import Strengths from "../components/Strengths";

const About = () => {
  return (
    <div className="text-gray-900 bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] mb-8"
        style={{
          backgroundImage: "url('/about-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-white/60 to-transparent" />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center h-full px-12 text-left">
          <h1 className="max-w-3xl font-serif text-3xl font-semibold text-white drop-shadow-lg">
            About Icepeak Design Limited
          </h1>
          <p className="max-w-2xl mt-4 text-xl font-light text-white drop-shadow-md">
            "Fashion is not something that exists in dresses only. Fashion is in
            the sky, in the street, fashion has to do with ideas, the way we
            live, what is happening."
            <br />
            – Coco Chanel
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="flex flex-col items-center justify-between gap-12 px-6 py-16 mx-auto bg-white max-w-7xl md:flex-row">
        <div className="w-full max-w-lg overflow-hidden transition-transform duration-500 shadow-lg cursor-pointer md:flex-1 rounded-xl hover:scale-105">
          <img
            src="/about-left.jpg"
            alt="Icepeak About"
            className="object-cover w-full h-[40rem]"
            loading="lazy"
          />
        </div>
        <div className="w-full max-w-xl font-sans font-light text-gray-800 md:flex-1">
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-tight text-gray-900">
          Icepeak Design Limited at a Glance          </h2>
          <div>
            {/* <p className="mb-6 text-lg italic leading-relaxed text-gray-700">
              "Fashion is not something that exists in dresses only. Fashion is
              in the sky, in the street, fashion has to do with ideas, the way
              we live, what is happening." – Coco Chanel
            </p> */}

            <p className="mb-6 text-lg leading-relaxed">
              Icepeak Design Limited is a fast-growing garment sourcing hub and
              exporter based in Bangladesh, dedicated to delivering excellence
              in product sourcing, design, pricing, and quality. For over a
              decade, we have worked as a catalyst for change in the Bangladeshi
              garments industry.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              With a strong focus on innovation, sustainability, and ethical
              practices, we position ourselves as a strategic partner to global
              brands—helping turn ideas into high-quality, market-ready fashion.
              Supported by a skilled team and a robust network of 30+
              compliance-certified factories, we ensure flexibility,
              uninterrupted sourcing, and timely delivery.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              From trend-driven design to transparent execution, Icepeak Design
              Limited is committed to reliability, integrity, and continuous
              value creation. Our mission is to empower global fashion brands
              with sustainable and innovative sourcing solutions, while our
              vision is to be the most trusted and forward-thinking garment
              sourcing partner in Bangladesh.
            </p>

            <p className="text-lg leading-relaxed">
              By partnering with renowned, fully compliant factories, we deliver
              responsible production, competitive pricing, and consistent
              quality—making Icepeak Design Limited a trusted name in the global
              apparel supply chain.
            </p>
          </div>
        </div>
      </section>
 
 <section>
  <MissionVisionComponent/>
 </section>

 <section>
  <Strengths/>
 </section>

      

      {/* Mission & Vision Section */}
      {/* <section className="py-24 bg-gray-100">
        <div className="container grid items-center gap-16 px-6 mx-auto lg:grid-cols-2">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To empower global fashion brands with sustainable, ethical, and
              innovative sourcing solutions that combine creativity, quality,
              and transparency—while uplifting communities and creating lasting
              value in the apparel industry.
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
              To be the most trusted and forward-thinking garment sourcing
              partner in Bangladesh, recognized worldwide for driving fashion
              innovation, championing sustainability, and setting new standards
              of excellence in the global apparel supply chain.
            </p>
          </motion.div>
        </div>
      </section> */}

      

      {/* Core Values Section */}
      <section className="container px-6 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-bold">Our Core Values</h2>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 text-center bg-white shadow-lg rounded-xl"
          >
            <Leaf className="mx-auto mb-4 text-green-500" size={40} />
            <h3 className="mb-2 text-xl font-bold">Sustainability</h3>
            <p className="text-gray-600">
              Committed to eco-friendly and ethical practices across our supply
              chain.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-8 text-center bg-white shadow-lg rounded-xl"
          >
            <Globe className="mx-auto mb-4 text-blue-500" size={40} />
            <h3 className="mb-2 text-xl font-bold">Global Reach</h3>
            <p className="text-gray-600">
              Partnering with brands worldwide to bring ideas to life with
              quality and efficiency.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 text-center bg-white shadow-lg rounded-xl"
          >
            <Star className="mx-auto mb-4 text-yellow-500" size={40} />
            <h3 className="mb-2 text-xl font-bold">Innovation</h3>
            <p className="text-gray-600">
              Constantly pushing fashion trends and production methods forward.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 text-center bg-white shadow-lg rounded-xl"
          >
            <Users className="mx-auto mb-4 text-purple-500" size={40} />
            <h3 className="mb-2 text-xl font-bold">Integrity</h3>
            <p className="text-gray-600">
              Operating with transparency, reliability, and respect for our
              partners and communities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
