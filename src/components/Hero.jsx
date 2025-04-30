import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/kontak-kami');
  };

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen bg-gradient-to-b from-white dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Perusahaan Umum Daerah Air Minum Tirta Jaya Kabupaten Pamekasan</title>
      </Helmet>

      {/* SLIDER Background */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          slidesPerView={1}
          className="h-full w-full"
        >
          {[1, 2, 3].map((n) => (
            <SwiperSlide key={n}>
              <img
                src={`https://picsum.photos/1920/1080/?random=${n}`}
                className="object-cover w-full h-full brightness-60"
                alt={`Slide ${n}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* TEXT CONTENT */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center space-y-6 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-sm md:text-base uppercase tracking-widest text-blue-400 font-bold">
          #1 Pelayanan Air Terpercaya
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
          <TypeAnimation
            sequence={[
              'Perumdam Tirta Jaya', 2000,
              'Kabupaten Pamekasan', 2000,
              'Layanan Air Terbaik', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 font-medium drop-shadow-sm">
          "Mari bersama kita lindungi sumber daya air <br /> untuk masa depan yang lebih cerah."
        </p>

        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-full shadow-xl transition-all duration-300 text-lg font-semibold"
        >
          Hubungi Kami
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
