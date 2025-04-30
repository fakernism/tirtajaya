import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';
import { Droplet, PhoneCall, Users } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative min-h-screen bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Beranda - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
      </Helmet>

      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          slidesPerView={1}
          className="h-full w-full"
        >
          {[1, 2, 3].map((n) => (
            <SwiperSlide key={n}>
              <img
                src={`https://picsum.photos/1920/1080?random=${n}`}
                className="object-cover w-full h-full brightness-60"
                alt={`Slide ${n}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-40 md:pt-52 pb-24 flex flex-col items-center text-center space-y-6">
        <p className="text-blue-400 font-semibold tracking-wide text-sm md:text-base uppercase">Pelayanan Air Terpercaya</p>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-tight drop-shadow">
          <TypeAnimation
            sequence={[
              'Perumdam Tirta Jaya', 2000,
              'Kabupaten Pamekasan', 2000,
              'Layanan Air Terbaik', 2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
          />
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
          Bersama menjaga kualitas air dan melayani masyarakat dengan profesional dan berintegritas.
        </p>
        <button
          onClick={() => navigate('/kontak-kami')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Hubungi Kami
        </button>
      </div>

      {/* Feature Section */}
      <motion.div
        className="relative z-10 mt-16 md:mt-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >

        {[
          { icon: <Droplet />, title: 'Layanan Air', desc: 'Pasokan air bersih untuk kebutuhan Anda setiap hari.' },
          { icon: <Users />, title: 'Pelanggan', desc: 'Lebih dari 50.000 pelanggan di seluruh Pamekasan.' },
          { icon: <PhoneCall />, title: 'Pengaduan 24 Jam', desc: 'Tim kami siap membantu kapan saja.' },
        ].map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-blue-500 mb-4">{item.icon}</div>
            <h4 className="font-bold text-lg text-gray-800 dark:text-white">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
