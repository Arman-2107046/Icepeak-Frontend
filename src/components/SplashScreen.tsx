import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-8 bg-transparent"
      >
        <img src="/icepeak-logo.png" alt="Logo" className="h-[14rem] w-[22rem]" />
      </motion.div>
    </div>
  );
}
