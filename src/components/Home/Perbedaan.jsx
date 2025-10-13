import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../assets/Perbedaan.png";
import { FaArrowRight } from "react-icons/fa6";
import TypeHaji from "./TypeHaji";

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
  },
};

function Perbedaan() {
  const [showTypes, setShowTypes] = useState(false);
  const handleToggleView = () => {
    setShowTypes(!showTypes);
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full md:max-w-sm mx-auto h-fit relative overflow-hidden"
    >
      {/* --- Background Statis --- */}
      <img
        src={Img}
        alt="Background Perbedaan Jenis Haji"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* --- Konten Dinamis --- */}
      <AnimatePresence mode="wait">
        {!showTypes ? (
          <motion.div
            key="perbedaan-view"
            className="w-full h-[440px]"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/20" variants={containerVariant}>
              <motion.h1 className="text-4xl font-[650]" variants={itemVariant}>
                Ini Perbedaan
              </motion.h1>
              <motion.h1 className="text-4xl font-[650]" variants={itemVariant}>
                Jenis Haji
              </motion.h1>
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-6"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.6,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
            >
              <motion.button
                className="p-2 rounded-full bg-gray-400 bg-opacity-50 backdrop-blur-md hover:bg-opacity-70 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleToggleView}
              >
                <FaArrowRight className="text-white text-3xl" />
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="typehaji-view"
            className="relative w-full h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypeHaji onToggle={handleToggleView} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Perbedaan;
