import img1 from "../../assets/No.png";
import img2 from "../../assets/Deportasi.png";
import img3 from "../../assets/Denda.png";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion"

const risksData = [
  {
    imageSrc: img1,
    title: "Larangan Masuk Makkah",
    description:
      "Anda berisiko tidak dapat masuk Arab Saudi di bulan Dzulqa'dah & Dzulhijjah",
  },
  {
    imageSrc: img2,
    title: "Deportasi Makkah",
    description:
      "Anda berisiko dikeluarkan dari Kota Makkah pada saat musim Haji",
  },
  {
    imageSrc: img3,
    title: "Denda",
    description:
      "Apabila dilakukan secara sembarangan, Anda berpotensi didenda hingga 20.000 SAR",
  },
];

const listContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};
const listItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Risk({ onToggle }) {
  // Seluruh JSX dan layout asli dari Risk.jsx dipertahankan di sini
  return (
    <div className="bg-white pt-14 px-4 relative">
      <motion.button
        className="absolute z-10 top-5 left-6 p-2 rounded-full bg-gradient-to-r from-blue-800 to-sky-950 hover:opacity-90 transition-all"
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp className="text-white text-3xl" />
      </motion.button>

      <div className="px-4 text-[#004072FF] py-8">
        <motion.div
          className="flex flex-col gap-12"
          variants={listContainerVariant}
          initial="hidden"
          animate="visible"
        >
          {risksData.map((risk, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={listItemVariant}
            >
              <img src={risk.imageSrc} alt={risk.title} className="h-24 mb-4" />
              <h3 className="text-[16px] font-semibold ">{risk.title}</h3>
              <p className="text-[12px] font-medium ">
                {risk.title === "Denda" ? (
                  <>
                    Apabila dilakukan secara sembarangan, Anda berpotensi
                    didenda hingga{" "}
                    <strong className="font-bold">20.000 SAR</strong>
                  </>
                ) : (
                  risk.description
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Risk;
