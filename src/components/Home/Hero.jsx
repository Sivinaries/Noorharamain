import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import Img from '../../assets/Mau.png';
import Img2 from '../../assets/Daftar.png';

const fadeVariant = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: -10 },
  transition: { duration: 1, ease: "easeOut" }
};

function Hero() {
  return (
    <div id='home' className="relative w-full md:max-w-sm mx-auto h-fit pt-24 ">
      <div className="p-2">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="h-full "
        >
          <SwiperSlide>
            <motion.img
              key="slide1"
              variants={fadeVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              src={Img}
              alt="Slide 1"
              className="mx-auto"
            />
          </SwiperSlide>

          <SwiperSlide>
            <motion.img
              key="slide2"
              variants={fadeVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              src={Img2}
              alt="Slide 2"
              className="mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Custom Pagination Color */}
      <style>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}

export default Hero;
