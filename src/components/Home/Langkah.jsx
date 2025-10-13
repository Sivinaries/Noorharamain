import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../assets/Langkah.png";
import { FaArrowRight } from "react-icons/fa6";
import Step from "./Step";

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

function Langkah() {
  const [showStep, setShowStep] = useState(false);
  const [isInitialAnimationDone, setInitialAnimationDone] = useState(false);

  const handleToggleView = () => {
    setShowStep(!showStep);
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
      <div className="p-2 relative">
        <AnimatePresence mode="wait">
          {!showStep ? (
            // ADEGAN 1: LANGKAH
            <motion.div
              key="langkah-view"
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            >
              <img src={Img} alt="Langkah Yang Harus Dilalui" className="w-full h-full object-cover" />

              {!isInitialAnimationDone ? (
                // VERSI A: Untuk scroll pertama (dengan variants untuk stagger)
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <motion.h1 className="text-4xl font-[650]" variants={textVariant}><span className='text-sky-200'>Langkah</span> Yang</motion.h1>
                    <motion.h1 className="text-4xl font-[650]" variants={textVariant}>Harus Dilalui</motion.h1>
                  </div>
                  <motion.div className="absolute bottom-6 left-6" variants={textVariant}>
                    <motion.button onClick={handleToggleView} className="p-2 rounded-full bg-gray-400 bg-opacity-50 backdrop-blur-md hover:bg-opacity-70 transition-all" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <FaArrowRight className="text-white text-3xl" />
                    </motion.button>
                  </motion.div>
                  <motion.div className="absolute bottom-6 right-6" variants={textVariant}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white backdrop-blur-md bg-white/10">
                      <motion.h1 className="text-white text-3xl" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>5</motion.h1>
                    </div>
                  </motion.div>
                </>
              ) : (
                // VERSI B: Setelah kembali dari Step (animasi fade sederhana)
                <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.01 }}>
                  <div className="flex flex-col items-center justify-center text-white text-center px-4 h-full">
                    <h1 className="text-4xl font-[650]"><span className='text-sky-200'>Langkah</span> Yang</h1>
                    <h1 className="text-4xl font-[650]">Harus Dilalui</h1>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <motion.button onClick={handleToggleView} className="p-2 rounded-full bg-gray-400 bg-opacity-50 backdrop-blur-md hover:bg-opacity-70 transition-all" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <FaArrowRight className="text-white text-3xl" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white backdrop-blur-md bg-white/10">
                      <motion.h1 className="text-white text-3xl" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>5</motion.h1>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            // ADEGAN 2: STEP
            <motion.div
              key="step-view"
              className="" // Wrapper untuk meniru layout asli Step.jsx
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Step onToggle={handleToggleView} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Langkah