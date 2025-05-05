// src/components/Balloon.jsx
import { motion } from "framer-motion";

export default function Balloon({ delay = 0, color = "bg-pink-300", left = "left-1/2" }) {
  return (
    <motion.div
      className={`absolute bottom-0 ${left} w-6 h-8 rounded-full ${color} z-10`}
      style={{ translateX: "-50%" }}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: -600, opacity: 0 }}
      transition={{ duration: 5, delay, ease: "easeInOut" }}
    />
  );
}
