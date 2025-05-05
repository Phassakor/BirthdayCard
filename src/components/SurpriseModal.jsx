import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SurpriseModal = ({ isOpen, onClose }) => {
  const images = [
    '/images/cutepeople.png',
    '/images/mk.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleToggleImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="Surprise"
            className="rounded-lg mb-4 mx-auto cursor-pointer w-[300px] min-h-[300px] h-auto shadow-md"
            onClick={handleToggleImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          />
        </AnimatePresence>

        <h2 className="text-xl font-bold text-pink-600 mb-2">
          เซอร์ไพรส์! 🎉
        </h2>
        <p className="text-gray-700 mb-4">
          ขอให้น้องไข่น้องมุกมีความสุขมากๆ นะ สุขภาพแข็งแรง สดใสตลอดทั้งปีเลย 🎂
        </p>
        <button
          onClick={onClose}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-5 rounded-full shadow-md"
        >
          ปิดจ่ะ 💫
        </button>

      </motion.div>
    </div>
  );
};

export default SurpriseModal;
