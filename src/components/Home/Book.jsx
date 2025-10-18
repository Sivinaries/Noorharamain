import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

function Book() {
  return (
    <motion.div
      className="w-full md:max-w-sm mx-auto h-fit pb-12"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="p-6 relative">

        <motion.div
          className="flex flex-col items-center"
          variants={itemVariant}
        >
          <a href="https://api.whatsapp.com/send/?phone=6282221115772&text&type=phone_number&app_absent=0">
            <motion.button
              className="p-1.5 bg-gradient-to-r from-[#00487a] to-[#022335] rounded-[14px] shadow-md hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <h1 className="text-white font-bold text-2xl px-12 py-2">Book Us Now !</h1>
            </motion.button>
          </a>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Book