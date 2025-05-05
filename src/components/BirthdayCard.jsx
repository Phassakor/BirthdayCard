// src/components/BirthdayCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Balloon from "./Balloon";
import Confetti from "react-confetti";
import SurpriseModal from "./SurpriseModal";

export default function BirthdayCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
      <motion.h1
        className="text-4xl font-bold text-pink-600 mb-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        🎉 สุขสันต์วันเกิด! 🎉
      </motion.h1>

      <motion.img
        src="https://cdn.pixabay.com/photo/2019/02/25/19/16/brownie-4020334_1280.jpg"
        alt="Cute"
        className="rounded-xl shadow-lg mb-4 w-[300px] h-[200px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
      />

      <motion.p
        className="text-lg text-center text-pink-800 max-w-md mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        ขอให้วันนี้เต็มไปด้วยรอยยิ้ม เสียงหัวเราะ และความสุขล้นใจเลยนะ 🎂💖
      </motion.p>

      <motion.button
        onClick={() => setShowModal(true)}
        className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg"
        whileTap={{ scale: 0.95 }}
      >
        เปิดของขวัญ 🎁
      </motion.button>

      {showModal && (
        <>
            <SurpriseModal isOpen={showModal} onClose={() => setShowModal(false)} />

            {/* ลูกโป่งลอย */}
            <Balloon delay={0} left="left-1/4" />
            <Balloon delay={0.3} color="bg-yellow-300" left="left-1/2" />
            <Balloon delay={0.6} color="bg-blue-300" left="left-3/4" />

            {/* ดอกไม้ไฟ */}
            <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={250} recycle={false} />
        </>
        )}
    </div>
  );
}
