// src/components/SurpriseModal.jsx
import { motion } from "framer-motion";

export default function SurpriseModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <motion.img
          src="https://cdn.pixabay.com/photo/2019/02/25/19/16/brownie-4020334_1280.jpg"
          alt="Surprise"
          className="rounded-lg mb-4 mx-auto w-[300px] h-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
        <h2 className="text-xl font-semibold text-pink-600 mb-2">
          เซอร์ไพรส์! 🎁
        </h2>
        <p className="text-gray-700 mb-4">
          ขอให้วันนี้เป็นวันที่ดีที่สุดของคุณ เต็มไปด้วยความสุข รอยยิ้ม และพลังบวกนะ 💖
        </p>
        <button
          onClick={onClose}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full"
        >
          ปิดจ้า 💫
        </button>
      </motion.div>
    </div>
  );
}
