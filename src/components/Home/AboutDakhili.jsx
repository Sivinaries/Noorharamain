import { motion } from 'framer-motion';
import { FaArrowUp } from "react-icons/fa6";

// Varian animasi untuk konten di dalam
const contentContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};
const contentItemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

function AboutDakhili({ onToggle }) {
  return (
    // Container dibuat transparan dan bisa di-scroll
    <div className="relative w-full h-full bg-transparent overflow-y-auto text-white">
      <motion.button
        className="absolute z-20 top-5 left-4 p-2 rounded-full bg-gray-400 bg-opacity-50 backdrop-blur-md hover:bg-opacity-70 transition-all"
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp className="text-white text-3xl" />
      </motion.button>

      {/* Konten detail dengan animasi internal */}
      <motion.div
        className="relative px-6 pb-10 pt-16"
        variants={contentContainerVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="py-6 text-center">
          <motion.p variants={contentItemVariant} className="font-semibold text-[16px]">
            Menurut HIMPUH pada website resminya,
          </motion.p>
          <div className="space-y-3 leading-relaxed mt-4">
            <motion.p variants={contentItemVariant} className="font-light text-[12px]">
              Ada <strong className="font-semibold">3 jenis</strong> haji tanpa antri yang sah dan resmi sesuai aturan Pemerintah Arab Saudi, masing-masing memiliki ketentuan.
            </motion.p>
            <motion.div variants={contentItemVariant}>
              <h3 className="font-semibold text-[16px] mb-1">Haji Mujamalah</h3>
              <p className="font-light text-[12px]">Program haji yang menggunakan visa undangan langsung dari pemerintah Arab Saudi...</p>
            </motion.div>
            <motion.hr variants={contentItemVariant} className="mx-24 border-white/20" />
            <motion.div variants={contentItemVariant}>
              <h3 className="font-semibold text-[16px] mb-1">Haji Furoda</h3>
              <p className="font-light text-[12px]">Haji Furoda adalah program haji yang menggunakan visa undangan langsung...</p>
            </motion.div>
            <motion.hr variants={contentItemVariant} className="mx-24 border-white/20" />
            <motion.div variants={contentItemVariant}>
              <h3 className="font-semibold text-[16px] mb-1">Haji Dakhili</h3>
              <p className="font-light text-[12px]">Haji dakhili ini adalah jalur haji buat mereka yang sudah terdaftar sebagai penduduk Saudi...</p>
            </motion.div>
            <motion.p variants={contentItemVariant} className="text-[8px] text-center opacity-60 pt-4">
              source: www.himpuh.or.id
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutDakhili;