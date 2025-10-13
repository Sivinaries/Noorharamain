import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../assets/Jangan.png";
import Warning from "./Warning";

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Jangan() {
  const [showWarning, setShowWarning] = useState(false);

  const handleShowWarning = () => {
    setShowWarning(true);
  };
  return (
    <motion.div
      className="w-full md:max-w-sm mx-auto bg-white rounded-t-[25px] h-fit"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="p-6 space-y-4 relative">
        <AnimatePresence mode="wait">
          {!showWarning ? (
            <motion.div
              key="jangan-content"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="flex flex-col items-center space-y-4"
            >
              <motion.div
                className="bg-gradient-to-r from-blue-800 to-sky-950 bg-clip-text text-transparent text-center"
                variants={itemVariant}
              >
                <h1 className="text-4xl font-[680]">Jangan Daftar Haji</h1>
                <h1 className="text-4xl font-[680]">Sembarangan!</h1>
              </motion.div>

              <motion.div variants={itemVariant}>
                <motion.button
                  className="p-1.5 bg-gradient-to-r from-blue-800 to-sky-950 rounded-3xl shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleShowWarning}
                >
                  <h1 className="text-white text-xl px-4">Kenapa ?</h1>
                </motion.button>
              </motion.div>

              <motion.div variants={itemVariant}>
                <motion.img
                  className="w-[150px] mx-auto"
                  src={Img}
                  alt="Jangan"
                />
              </motion.div>
            </motion.div>
          ) : (

            <motion.div
              key="warning-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Warning />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Jangan;
