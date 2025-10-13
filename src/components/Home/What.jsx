import Img1 from "../../assets/Laptop.png";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

function What({ onToggle }) {
  return (
    <div className="relative w-full bg-white py-8 px-[30px]">
      
      <motion.button
        className="absolute z-10 top-5 left-6 p-2 rounded-full bg-gradient-to-r from-blue-800 to-sky-950 hover:opacity-90 transition-all"
        onClick={onToggle} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp className="text-white text-3xl" />
      </motion.button>
      <div className="w-full mx-auto text-center pt-14 text-[#003454]">
        <div className="space-y-6">
          <p className="text-[10px]">
            Haji melalui sistem resmi Nusuk atau yang lebih umum dikenal sebagai
            Haji Dakhili atau Haji VIP. Suatu program haji yang hanya dapat
            diakses bagi masyarakat yang telah memiliki{" "}
            <strong className="font-semibold text-[#003454]">Iqamah</strong>{" "}
            atau <strong className="font-semibold">Resident Permit</strong> dan
            telah terverifikasi secara{" "}
            <strong className="font-semibold">resmi</strong> oleh otoritas Arab
            Saudi.
          </p>
          <p className="text-[10px] leading-relaxed ">
            Untuk dapat melaksanakan Ibadah Haji melalui sistem resmi Nusuk,
            peserta tidak memerlukan Visa Haji, melainkan perlu adanya{" "}
            <strong className="font-semibold">Tasreh Haji</strong> yang hanya
            dapat diakses oleh masyarakat yang telah memiliki{" "}
            <strong className="font-semibold text-[#003454]">Iqamah</strong>{" "}
            atau <strong className="font-semibold">Resident Permit</strong>.
          </p>
        </div>

        <div className="mt-4">
          <img
            src={Img1}
            alt="Tampilan Aplikasi Nusuk di Laptop"
            className="mx-auto w-52 max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default What;
