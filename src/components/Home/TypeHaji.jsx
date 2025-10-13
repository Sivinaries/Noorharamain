import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const gridContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const data = [
  {
    title: "Haji Regular",
    items: [
      "Program Resmi Pemerintah",
      "Harga Sangat Terjangkau",
      "Layanan Bersifat Massal",
      "Masa Tunggu Belasan Hingga Puluhan Tahun",
      "Fasilitas Seadanya",
    ],

    gradient:
      "bg-[linear-gradient(150deg,rgba(197,195,189,1)_0%,rgba(2,47,74,1)_15%,rgba(0,92,145,1)_85%,rgba(197,195,189,1)_100%)]",
    text: "text-white",
    borderAndShadow: "border-2 border-[#287B9AFF] shadow-md",
  },
  {
    title: "Haji Plus",
    items: [
      "Program Resmi Pemerintah",
      "Harga Relatif Lebih Tinggi",
      "Layanan Lebih Personal",
      "Masa Tunggu 5–9 Tahun",
      "Fasilitas Sangat Baik",
    ],

    gradient:
      "bg-[linear-gradient(150deg,rgba(197,195,189,1)_0%,rgba(2,47,74,1)_15%,rgba(0,92,145,1)_85%,rgba(197,195,189,1)_100%)]",
    text: "text-white",
    borderAndShadow: "border-2 border-[#287B9AFF] shadow-md",
  },
  {
    title: "Haji Furoda (Mujamalah)",
    items: [
      "Tanpa Masa Tunggu",
      "Fasilitas Bervariasi, Umumnya Premium",
      "Harga Sangat Tinggi",
      "Visa Terbit Paling Terakhir / Beresiko Visa Tidak Terbit",
    ],

    gradient:
      "bg-[linear-gradient(150deg,rgba(197,195,189,1)_0%,rgba(2,47,74,1)_15%,rgba(0,92,145,1)_85%,rgba(197,195,189,1)_100%)]",
    text: "text-white",
    borderAndShadow: "border-2 border-[#287B9AFF] shadow-md",
  },
  {
    title: "Haji Dakhili",
    items: [
      "Tanpa Masa Tunggu",
      "Fasilitas VIP",
      "Harga Setarif Dengan Haji Plus",
      "Hanya Berlaku Bagi Pemegang Iqamah (Resident Permit)",
      "Program Resmi Kementrian Haji Arab Saudi",
    ],

    gradient:
      "bg-[linear-gradient(150deg,rgba(103,97,89,1)_0%,rgba(164,152,133,1)_50%,rgba(103,97,89,1)_100%)]",
    text: "text-white",
    borderAndShadow:
      "border-2 border-[#b8aea0] shadow-[0_0_40px_rgba(242,232,217,0.5)]",
  },
];

function TypeHaji({ onToggle }) {
  return (
    <div className="relative w-full h-full bg-transparent overflow-y-auto">
      <motion.div
        className="absolute top-6 left-6"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.6,
          type: "spring",
          stiffness: 120,
        }}
        viewport={{ once: true }}
      >
        <motion.button
          className="p-2 rounded-full bg-gray-400 bg-opacity-50 backdrop-blur-md hover:bg-opacity-70 transition-all"
          onClick={onToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp className="text-white text-3xl" />
        </motion.button>
      </motion.div>
      <div className="py-8 px-5 pt-20">
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={gridContainerVariant}
          initial="hidden"
          animate="visible"
        >
          {data.map((card, i) => (
            <motion.div key={i} variants={cardVariant}>
              <div
                className={`rounded-2xl py-6 h-full flex flex-col text-center ${card.gradient} ${card.text} ${card.borderAndShadow}`}
              >
                <h3 className="text-center h-10 font-light text-[13px] mb-6 leading-tight">
                  {card.title === "Haji Furoda (Mujamalah)" ? (
                    <>
                      Haji
                      <span className="font-semibold">
                        Furoda <br />
                        <span className="text-[10px]">(Mujamalah)</span>
                      </span>
                    </>
                  ) : (
                    <>
                      {card.title.split(" ")[0]}{" "}
                      <span className="font-semibold">
                        {card.title.replace(card.title.split(" ")[0], "")}
                      </span>
                    </>
                  )}
                </h3>
                <ul className="space-y-3 leading-tight text-[13px] p-[3px] font-light">
                  {card.items.map((item, j) => (
                    <li key={j}>
                      {item.includes("(Resident Permit)") ? (
                        <>
                          Hanya Berlaku Bagi Pemegang Iqamah
                          <br />
                          <span className="text-[10px] opacity-80">
                            (Resident Permit)
                          </span>
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TypeHaji;
