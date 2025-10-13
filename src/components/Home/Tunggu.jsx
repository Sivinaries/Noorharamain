import Img from '../../assets/Tunggu.png'
import { motion } from "framer-motion";

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

function Tunggu() {
  return (
    <motion.div
      className="w-full md:max-w-sm mx-auto my-2 bg-white h-fit"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="p-2 relative">
        <motion.img
          src={Img}
          alt="Kenapa Harus Haji Dakhili"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 "
          variants={containerVariant}>
          <motion.h1 className="text-3xl font-[350] text-black" variants={textVariant}>
            Tunggu Apalagi
          </motion.h1>
          <motion.h1 className="text-5xl font-[650] text-black" variants={textVariant}>
            Pilih Paketmu
          </motion.h1>
          <motion.h1 className="text-5xl font-[650] text-black" variants={textVariant}>
            Sekarang !
          </motion.h1>
        </motion.div>


      </div>
    </motion.div>

  )
}

export default Tunggu