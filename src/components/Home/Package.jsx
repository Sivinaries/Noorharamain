import Img1 from '../../assets/Executive.png'
import Img2 from '../../assets/Vip.png'
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

function Package() {
    return (
        <motion.div
            className="w-full md:max-w-sm mx-auto h-fit my-2 bg-white"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="p-2 space-y-2 relative">
                <motion.img
                    src={Img1}
                    alt="Kenapa Harus Haji Dakhili"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
                
                <motion.img
                    src={Img2}
                    alt="Kenapa Harus Haji Dakhili"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                />

            </div>
        </motion.div>
    )
}

export default Package