// src/components/Hero.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

    <Helmet>
        <title>Selamat Datang - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Selamat datangn di Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
    </Helmet>

      <div className="text-center space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Perumdam Tirta Jaya Kabupaten Pamekasan
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          "Bersama Menjaga Sumber Daya Air, Membangun Masa Depan."
        </motion.p>

          <motion.button
            onClick={handleClick}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Kontak Kami
          </motion.button>
      </div>
    </motion.section>
  );
}
