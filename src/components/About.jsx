// src/components/About.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>Tentang Kami - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Tentang Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
      </Helmet>

      <div className="container mx-auto px-6 pt-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Tentang Kami
        </motion.h2>

        <motion.div 
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition max-w-4xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
            Kami adalah tim yang berdedikasi untuk menyediakan solusi inovatif dalam pelayanan air bersih,
            berorientasi pada integritas, kolaborasi, dan keunggulan layanan untuk masyarakat Pamekasan dan sekitarnya.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
