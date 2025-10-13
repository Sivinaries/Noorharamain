import Img from '../../assets/Siapa.png'
import { motion } from 'framer-motion'

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

function Who() {
    return (
        <motion.div
            className="w-full md:max-w-sm mx-auto h-fit my-2 "
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="p-2 relative">
                {/* Gambar */}
                <motion.img
                    src={Img}
                    alt="Siapa Kami"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                />

                {/* Konten Tengah */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-4"
                    variants={containerVariant}
                >

                    <motion.h1 className="text-4xl font-[650]" variants={textVariant}>
                        Siapa Kami
                    </motion.h1>

                    <motion.p className="text-sm leading-relaxed font-light" variants={textVariant}>
                        Kami merupakan perusahaan jasa yang berfokus pada
                        pendampingan, fasilitator administratif, serta
                        layanan spiritual bagi masyarakat supaya dapat
                        melaksanakan program haji melalui sistem
                        <span className="font-bold"> resmi </span>kerajaan Arab Saudi
                        <span className="font-bold"> (Nusuk)</span>
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Who
