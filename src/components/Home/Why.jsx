import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "Resmi & Terjamin",
    description:
      "Seluruh proses dilakukan secara resmi melalui aplikasi Nusuk yang terintegrasi dengan otoritas Arab Saudi.",
  },
  {
    title: "Tanpa Masa Tunggu, Tanpa Ragu",
    description:
      "Dapat langsung berangkat haji tanpa perlu menunggu bertahun-tahun lamanya.",
  },
  {
    title: "Tasreh Haji Resmi",
    description: "Tasreh & SmartCard Haji resmi dari Pemerintah Arab Saudi.",
  },
  {
    title: "Garansi Uang Kembali 100%",
    description: "Tasreh Haji tidak terbit? Kami kembalikan dana 100%!",
  },
  {
    title: "Jaminan Harga Terbaik",
    description: "Ada Harga, Ada Rupa. Jaminan harga terbaik di kelasnya.",
  },
  {
    title: "Syarikah Resmi",
    description:
      "Terhubung secara langsung dengan perusahaan resmi Saudi yang telah terverifikasi.",
  },
];

function Why({ onToggle }) {
  return (
    // Kontainer utama konten 'Why', tanpa background halaman
    <div className="rounded-3xl bg-gradient-to-r from-[#00487a] to-[#022335] border border-white/10 px-6 pt-20 pb-10 relative">
      
      {/* Tombol kembali (toggle) */}
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

      {/* Konten list */}
      <div className="flex flex-col space-y-6">
        {featuresData.map((feature, index) => (
          <div key={index}>
            <h3 className="text-[16px] font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-[12px] font-light text-white/90 mt-1">
              {index === 0 ? (
                <>
                  Seluruh proses dilakukan <strong className="font-semibold">secara resmi</strong> melalui aplikasi <strong className="font-semibold">Nusuk</strong> yang terintegrasi dengan otoritas Arab Saudi.
                </>
              ) : index === 2 ? (
                <>
                  <strong className="font-semibold">Tasreh & SmartCard Haji resmi</strong> dari Pemerintah Arab Saudi.
                </>
              ) : (
                feature.description
              )}
            </p>
          </div>
        ))}
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Daftar? <span className="text-[#C1B5A5]">Free Umroh!</span>
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Gratis Umroh tanpa perlu bayar biaya tambahan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
