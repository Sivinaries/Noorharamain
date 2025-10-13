import { useState } from "react";
import Img from "../../assets/Kata.png";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import AboutDakhili from "./AboutDakhili";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

function Kata() {
  const [showAbout, setShowAbout] = useState(false);
  const [isInitialAnimationDone, setInitialAnimationDone] = useState(false);

  const handleToggleView = () => {
    setShowAbout(!showAbout);
  };

  return (
    // SUTRADARA PANGGUNG: Mengatur layout dan `whileInView` sekali
    <motion.div
      layout
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full md:max-w-sm mx-auto h-fit my-2 p-2"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onAnimationComplete={() => setInitialAnimationDone(true)}
    >
      <div className="relative rounded-2xl overflow-hidden">
        {/* LAPISAN 1: BACKGROUND STATIS (tidak pernah berubah) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Img})` }}
        ></div>

        {/* LAPISAN 2: KONTEN DINAMIS (ADEGAN) */}
        <AnimatePresence mode="wait">
          {!showAbout ? (
            // ADEGAN 1: KATA
            <motion.div
              key="kata-view"
              className="relative min-h-[470px]" // Beri tinggi agar tidak kolaps
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              {!isInitialAnimationDone ? (
                // VERSI A: Saat scroll pertama (dengan variants untuk stagger)
                <>
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.01 }}
                  >
                    <motion.h1
                      className="text-4xl font-[650]"
                      variants={textVariant}
                    >
                      Ini Kata Asosiasi
                    </motion.h1>
                    <motion.h1
                      className="text-4xl font-[650]"
                      variants={textVariant}
                    >
                      Tentang Haji Dakhili
                    </motion.h1>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 left-4"
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
                    className="absolute bottom-4 right-4"
                    variants={textVariant}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white backdrop-blur-md bg-white/10">
                      <motion.h1
                        className="text-white text-3xl"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      >
                        3
                      </motion.h1>
                    </div>
                  </motion.div>
                </>
              ) : (
                // VERSI B: Setelah kembali dari AboutDakhili (animasi fade sederhana)
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex flex-col items-center justify-center text-white text-center px-4 h-full">
                    <h1 className="text-4xl font-[650]">Ini Kata Asosiasi</h1>
                    <h1 className="text-4xl font-[650]">
                      Tentang Haji Dakhili
                    </h1>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <motion.button
                      onClick={handleToggleView}
                      className="p-2 rounded-full bg-gray-400 bg-opacity-50 backdrop-blur-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaArrowRight className="text-white text-3xl" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white backdrop-blur-md bg-white/10">
                      <motion.h1
                        className="text-white text-3xl"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      >
                        3
                      </motion.h1>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            // ADEGAN 2: ABOUT DAKHILI
            <motion.div
              key="about-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AboutDakhili onToggle={handleToggleView} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Kata;
