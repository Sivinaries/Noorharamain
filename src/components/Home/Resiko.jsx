import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../assets/Resiko.png";
import { FaArrowRight } from "react-icons/fa6";
import Risk from "./Risk";

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

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function Resiko() {
  const [showRisk, setShowRisk] = useState(false);
  const [isInitialAnimationDone, setInitialAnimationDone] = useState(false);

  const handleToggleView = () => {
    setShowRisk(!showRisk);
  };

  return (
    // SUTRADARA: Mengontrol animasi `whileInView` sekali saja
    <motion.div
      layout
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full md:max-w-sm mx-auto h-fit my-2"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onAnimationComplete={() => setInitialAnimationDone(true)}
    >
      <AnimatePresence mode="wait">
        {!showRisk ? (
          // ADEGAN 1: RESIKO
          <motion.div
            key="resiko-view"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="bg-white rounded-2xl"
          >
            <div className="p-6 relative">
              {!isInitialAnimationDone ? (
                // VERSI A: Saat scroll pertama (dengan variants untuk stagger)
                <>
                  <div className="bg-gradient-to-r from-blue-800 to-sky-950 bg-clip-text text-transparent text-center">
                    <motion.h1
                      className="text-4xl font-[680] leading-tight"
                      variants={textVariant}
                    >
                      Resiko Jika Haji
                    </motion.h1>
                    <motion.h1
                      className="text-4xl font-[680] leading-tight"
                      variants={textVariant}
                    >
                      Tanpa Tasreh &
                    </motion.h1>
                    <motion.h1
                      className="text-4xl font-[680] leading-tight"
                      variants={textVariant}
                    >
                      Masyair (Paket)
                    </motion.h1>
                  </div>
                  <motion.div
                    className="w-full flex justify-center -my-4"
                    variants={textVariant}
                  >
                    <img
                      className="w-[200px] max-w-full object-contain"
                      src={Img}
                      alt="Haji Nusuk"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-6 left-6"
                    variants={textVariant}
                  >
                    <motion.button
                      onClick={handleToggleView}
                      className="p-2 rounded-full bg-gradient-to-r from-blue-800 to-sky-950"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaArrowRight className="text-white text-3xl" />
                    </motion.button>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-6 right-6"
                    variants={textVariant}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-800">
                      <motion.h1
                        className="text-blue-800 text-3xl font-light"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      >
                        4
                      </motion.h1>
                    </div>
                  </motion.div>
                </>
              ) : (
                // VERSI B: Setelah kembali dari Risk (animasi fade sederhana)
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.01 }}
                >
                  <div className="bg-gradient-to-r from-blue-800 to-sky-950 bg-clip-text text-transparent text-center">
                    <h1 className="text-4xl font-[680] leading-tight">
                      Resiko Jika Haji
                    </h1>
                    <h1 className="text-4xl font-[680] leading-tight">
                      Tanpa Tasreh &
                    </h1>
                    <h1 className="text-4xl font-[680] leading-tight">
                      Masyair (Paket)
                    </h1>
                  </div>
                  <div className="w-full flex justify-center -my-4">
                    <img
                      className="w-[200px] max-w-full object-contain"
                      src={Img}
                      alt="Haji Nusuk"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <motion.button
                      onClick={handleToggleView}
                      className="p-2 rounded-full bg-gradient-to-r from-blue-800 to-sky-950"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaArrowRight className="text-white text-3xl" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-800">
                      <motion.h1
                        className="text-blue-800 text-3xl font-light"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      >
                        4
                      </motion.h1>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : (
          // ADEGAN 2: RISK
          <motion.div
            key="risk-view"
            className="bg-gray-200 p-4 rounded-3xl" // Wrapper untuk meniru layout asli Risk.jsx
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Risk onToggle={handleToggleView} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Resiko;
