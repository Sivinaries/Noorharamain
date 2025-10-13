import { motion } from "framer-motion";
import Img from "../../assets/Logo2.png";

function Running() {
  return (
    <div className="relative w-full overflow-hidden my-2 h-fit">
      <div className="flex items-center p-2">
        {/* Logo */}
        <div className="relative z-30 w-[80px] flex justify-center border-r border-gray-400">
          <img className="w-6 h-6" src={Img} alt="Logo" />
        </div>

        {/* Running Text */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap pl-[90px]"
            animate={{ x: ["-350%", "0%"] }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplikasi isi agar loop halus */}
            <div className="flex space-x-8">
              <h1 className="text-black text-xl font-semibold">Tanpa Antri</h1>
              <h1 className="text-black text-xl font-semibold">Tanpa Masa Tunggu</h1>
              <h1 className="text-black text-xl font-semibold">Tanpa Ragu</h1>
              <h1 className="text-black text-xl font-semibold">Amazing Journey
                <span className="font-light">by </span> Noor Haramain
              </h1>
            </div>

            {/* Copy kedua */}
            <div className="flex space-x-8">
              <h1 className="text-black text-xl font-semibold">Tanpa Antri</h1>
              <h1 className="text-black text-xl font-semibold">Tanpa Masa Tunggu</h1>
              <h1 className="text-black text-xl font-semibold">Tanpa Ragu</h1>
              <h1 className="text-black text-xl font-semibold">Amazing Journey
                <span className="font-light"> by </span> Noor Haramain
              </h1>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Running;
