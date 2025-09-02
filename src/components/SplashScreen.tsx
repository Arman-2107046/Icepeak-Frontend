import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-4 bg-transparent sm:p-6 md:p-8"
      >
        <img
          src="/icepeak-logo.png"
          alt="Logo"
          className="h-32 w-48 sm:h-40 sm:w-56 md:h-56 md:w-80 lg:h-64 lg:w-[22rem] object-contain"
        />
      </motion.div>
    </div>
  );
}
