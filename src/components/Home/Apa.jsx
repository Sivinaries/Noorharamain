import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../assets/Hp.png";
import { FaArrowRight } from "react-icons/fa6";
import What from "./What";

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
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function Apa() {
  const [showWhat, setShowWhat] = useState(false);
  const [isInitialAnimationDone, setInitialAnimationDone] = useState(false);

  const handleToggleView = () => {
    setShowWhat(!showWhat);
  };

  const ApaContent = ({ useVariants }) => (
    <>
      <div className="bg-gradient-to-r from-blue-800 to-sky-950 bg-clip-text text-transparent text-center">
        <motion.h1
          className="text-4xl font-[680] leading-tight"
          variants={useVariants ? itemVariant : {}}
        >
          Apa itu Haji
        </motion.h1>
        <motion.h1
          className="text-4xl font-[680] leading-tight"
          variants={useVariants ? itemVariant : {}}
        >
          Melalui Nusuk?
        </motion.h1>
      </div>
      <motion.div
        className="w-full flex justify-center mt-8"
        variants={useVariants ? itemVariant : {}}
      >
        <img
          className="w-[250px] scale-[1.4] max-w-full object-contain"
          src={Img}
          alt="Haji Nusuk"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-6 left-6"
        variants={useVariants ? itemVariant : {}}
      >
        <motion.button
          className="p-2 rounded-full bg-gradient-to-r from-blue-800 to-sky-950 hover:opacity-90 transition-all"
          onClick={handleToggleView}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowRight className="text-white text-3xl" />
        </motion.button>
      </motion.div>
      <motion.div
        className="absolute bottom-6 right-6"
        variants={useVariants ? itemVariant : {}}
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-800 bg-white/10 backdrop-blur-md">
          <motion.h1
            className="text-blue-800 text-3xl font-light"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            2
          </motion.h1>
        </div>
      </motion.div>
    </>
  );

  return (
    <motion.div
      layout
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full md:max-w-sm mx-auto bg-white h-fit overflow-hidden my-2"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onAnimationComplete={() => setInitialAnimationDone(true)}
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          {!showWhat ? (
            <motion.div
              key="apa-view"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <div className="p-6 relative">
                {!isInitialAnimationDone ? (
                  // VERSI A: Saat scroll pertama
                  <ApaContent useVariants={true} />
                ) : (
                  // VERSI B: Setelah kembali
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.01 }}
                  >
                    <ApaContent useVariants={false} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="what-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <What onToggle={handleToggleView} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Apa;
