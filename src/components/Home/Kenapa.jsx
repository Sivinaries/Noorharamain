import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../assets/Kenapa.png";
import { FaArrowRight } from "react-icons/fa6";
import Why from "./Why";

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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

function Kenapa() {
  const [showWhy, setShowWhy] = useState(false);
  const [isInitialAnimationDone, setInitialAnimationDone] = useState(false);

  const handleToggleView = () => {
    setShowWhy(!showWhy);
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full md:max-w-sm mx-auto h-fit my-2"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      // Setelah animasi pertama selesai, ubah state
      onAnimationComplete={() => setInitialAnimationDone(true)}
    >
      <div className="p-2 relative">
        <AnimatePresence mode="wait">
          {!showWhy ? (
            <motion.div
              key="kenapa-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <img
                src={Img}
                alt="Kenapa Harus Haji Dakhili"
                className="w-full h-full object-cover"
              />

              {!isInitialAnimationDone ? (
                // VERSI A: Saat scroll pertama (dengan variants untuk stagger)
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                  <motion.h1
                    className="text-4xl font-[650]"
                    variants={textVariant}
                  >
                    Kenapa Harus
                  </motion.h1>
                  <motion.h1
                    className="text-4xl font-[650]"
                    variants={textVariant}
                  >
                    Haji Dakhili Melalui
                  </motion.h1>
                  <motion.h1
                    className="text-4xl font-[650]"
                    variants={textVariant}
                  >
                    Noor Haramain ?
                  </motion.h1>
                  <motion.div
                    className="absolute bottom-6 left-6"
                    variants={textVariant}
                  >
                    <motion.button
                      onClick={handleToggleView}
                      className="p-2 rounded-full bg-gray-400 bg-opacity-50 backdrop-blur-md"
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
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white backdrop-blur-md bg-white/10">
                      <motion.h1
                        className="text-white text-3xl"
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                      >
                        1
                      </motion.h1>
                    </div>
                  </motion.div>
                </div>
              ) : (
                // VERSI B: Setelah kembali dari Why (animasi fade sederhana, tanpa variants)
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.01 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
                >
                  <h1 className="text-4xl font-[650]">Kenapa Harus</h1>
                  <h1 className="text-4xl font-[650]">Haji Dakhili Melalui</h1>
                  <h1 className="text-4xl font-[650]">Noor Haramain ?</h1>
                  <div className="absolute bottom-6 left-6">
                    <motion.button
                      onClick={handleToggleView}
                      className="p-2 rounded-full bg-gray-400 bg-opacity-50 backdrop-blur-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaArrowRight className="text-white text-3xl" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white backdrop-blur-md bg-white/10">
                      <motion.h1
                        className="text-white text-3xl"
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                      >
                        1
                      </motion.h1>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="why-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <Why onToggle={handleToggleView} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Kenapa;
