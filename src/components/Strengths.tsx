import { motion } from "framer-motion";

const missions = [
  {
    title: "ETHICAL COMPLIANCE & CSR TEAM",
    image: "/s1.jpg",
    description:
      "Our dedicated CSR team ensures every operation upholds ethical standards, social responsibility, and full compliance with global regulations.",
  },
  {
    title: "INNOVATIVE DESIGN & DEVELOPMENT TEAM",
    image: "/s2.jpg",
    description:
      "A creative and trend-driven team focused on turning ideas into distinctive, market-ready apparel through innovation and design excellence.",
  },
  {
    title: "QUALITY CONTROL TEAM",
    image: "/s3.jpg",
    description:
      "From raw materials to finished garments, our expert QC team monitors every stage of production to guarantee uncompromising quality.",
  },
  {
    title: "OWN & 3RD PARTY INSPECTION SUPPORT",
    image: "/s4.jpg",
    description:
      "We provide flexible inspection services through both in-house and certified third-party teams to maintain transparency and reliability.",
  },
  {
    title: "SMART & VIRTUAL MANUFACTURING SYSTEMS",
    image: "/s5.jpg",
    description:
      "Leveraging advanced digital tools and virtual manufacturing solutions to streamline processes, reduce lead times, and enhance efficiency.",
  },
  {
    title: "PROACTIVE & DEDICATED PRODUCTION & QUALITY TEAM",
    image: "/s6.jpg",
    description:
      "Our highly committed production and quality experts work hand-in-hand to ensure timely execution and continuous improvement at every step.",
  },
];
export default function Strengths() {
    return (
      <section className="px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-100">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="font-serif text-4xl font-light tracking-tight text-slate-800 md:text-5xl">
            Our Strengths
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg font-light text-slate-600">
            From concept to creation, we stand for innovation, sustainability, and
            trust. These are the values at the heart of everything we do.
          </p>
        </div>
  
        <div className="grid grid-cols-1 gap-8 mx-auto mt-32 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {missions.map((mission, i) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-md shadow-2xl cursor-pointer group h-80"
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition duration-500 bg-center bg-cover group-hover:brightness-90"
                style={{ backgroundImage: `url(${mission.image})` }}
              />
              <div className="absolute inset-0 transition duration-500 bg-black/20 group-hover:bg-black/40" />
  
              {/* Title at the top */}
              <div className="absolute top-0 left-0 right-0 px-4 py-3 font-serif text-xs tracking-widest text-white uppercase bg-black/30 backdrop-blur-sm">
                {mission.title}
              </div>
  
              {/* Description (appears on hover) */}
              <div className="relative z-10 flex items-end h-full p-6">
                <p className="text-sm transition-opacity duration-500 text-white/0 group-hover:text-white">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }