import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Img1 from "../../assets/Executive.png";
import Img2 from "../../assets/Vip.png";
import "swiper/css";

/* Motion Variants */
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

const marqueeVariants = {
    animate: {
        y: ["100%", "-80%"],
        transition: { duration: 20, repeat: Infinity, ease: "linear" },
    },
};

/* Running Text Component */
function RunningText() {
    return (
        <div className="absolute inset-0 flex justify-end items-center overflow-hidden z-30">
            {/* Wrapper teks vertikal */}
            <motion.div
                className="flex flex-col  space-y-2 whitespace-nowrap" // rotate-180 biar arah teks dari bawah ke atas
                variants={marqueeVariants}
                animate="animate"
            >
                {["PALING POPULER", "PALING POPULER", "PALING POPULER", "PALING POPULER", "PALING POPULER", "PALING POPULER", "PALING POPULER", "PALING POPULER", "PALING POPULER", "PALING POPULER", "PALING POPULER"].map(
                    (text, index) => (
                        <h1
                            key={index}
                            className="text-[14px] rotate-180 font-bold text-[#00487a] drop-shadow-md tracking-widest"
                            style={{ writingMode: "vertical-rl" }} // buat teks tegak ke atas
                        >
                            {text}
                        </h1>
                    )
                )}
            </motion.div>
        </div>
    );
}

/* Package Component with Swiper */
function Package() {
    return (
        <motion.div
            className="w-full md:max-w-sm mx-auto h-fit my-2 bg-white overflow-hidden"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="relative"
            >
                {/* Slide 1 (dengan running text vertikal penuh) */}
                <SwiperSlide className="p-2">
                    <div className="relative">
                        <motion.img
                            src={Img1}
                            alt="Executive Package"
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.05 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />
                        <RunningText />
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide className="p-2">
                    <motion.img
                        src={Img2}
                        alt="VIP Package"
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />
                </SwiperSlide>
            </Swiper>
        </motion.div>
    );
}

export default Package;
