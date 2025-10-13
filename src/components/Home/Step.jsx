import Img1 from "../../assets/Scan.png";
import Img2 from "../../assets/Passport.png";
import Img3 from "../../assets/Check.png";
import Img4 from "../../assets/Kabah.png";
import Img5 from "../../assets/Plane.png";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const timelineData = [
  {
    imageSrc: Img1,
    title: "Proses Biometric",
    description:
      "Nantinya, proses ini akan dilaksanakan oleh tim VFS (Visa Facilitation Services), yang bertempat di kantor VFS Kuningan/VFS Halim, Jakarta.",
  },
  {
    imageSrc: Img2,
    title: "Proses Iqamah",
    description:
      "Melakukan proses pembuatan Iqamah / Residence Permit secara resmi di Arab Saudi melalui Syarikah resmi.",
  },
  {
    imageSrc: Img3,
    title: "Kepulangan ke Indonesia & Pengajuan Tasreh Haji",
    description:
      "Setelah Iqamah telah aktif dalam sistem proses pengajuan Tasreh Haji dilakukan melalui sistem resmi Nusuk",
  },
  {
    imageSrc: Img4,
    title: "Pelaksanaan Prosesi Ibadah Haji",
    description:
      "Tarwiyah, Arafah, Muzdalifah, Mina, Lontar Jumrah, Thawaf Ifadah, dll.",
  },
  {
    imageSrc: Img5,
    title: "Pasca Haji dan Kepulangan",
    description:
      "Istirahat dan persiapan kepulangan jamaah kembali ke Tanah Air.",
  },
];

const timelineContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};
const timelineItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Step({ onToggle }) {
  // Seluruh JSX dan layout asli dari Step.jsx dipertahankan di sini
  return (
    <div className="bg-gradient-to-r from-[#00487a] to-[#022335] pt-14 px-6 rounded-3xl relative">
      <motion.button
        className="absolute z-10 top-5 left-5 p-2 rounded-full bg-gray-400 bg-opacity-50 backdrop-blur-md hover:bg-opacity-70 transition-all"
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp className="text-white text-3xl" />
      </motion.button>

      <div className="flex flex-col items-center text-center py-8">
        <p className="text-white mb-10 text-[13px]">
          Untuk mengakses Haji Dakhili, terdapat beberapa alur yang wajib
          dilalui oleh seluruh calon jamaah
        </p>
        <motion.div
          className="flex flex-col items-center space-y-10"
          variants={timelineContainerVariant}
          initial="hidden"
          animate="visible"
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={timelineItemVariant}
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="h-24 object-contain mb-2"
              />
              <h3 className="text-[13px] font-semibold px-4 text-white">
                {item.title}
              </h3>
              <p className="text-[10px] text-white/80 mt-2 px-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Step;
