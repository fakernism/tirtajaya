// src/components/About.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gradient-to-b from-white dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>Tentang Kami - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta
          name="description"
          content="Tentang Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah."
        />
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
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition max-w-4xl mx-auto space-y-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Perumdam Tirta Jaya Kabupaten Pamekasan merupakan salah satu Badan Usaha Milik Daerah (BUMD) di Kabupaten Pamekasan 
            yang bergerak dalam bidang distribusi air bersih bagi masyarakat umum khususnya Pamekasan. Perumdam Tirta Jaya Kabupaten 
            Pamekasan merupakan perusahaan milik daerah sebagai sarana penyedia air bersih yang diawasi dan dimonitor oleh aparat-aparat 
            eksekutif maupun legislatif daerah.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Perusahaan air minum yang dikelola negara secara modern sudah ada sejak zaman penjajahan Belanda pada tahun 1920-an dengan 
            nama <em>Waterleiding</em>, sedangkan pada pendudukan Jepang perusahaan air minum dinamai <em>Suido Syo</em>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Berdasarkan data administrasi yang ada, Perumdam Tirta Jaya Kabupaten Pamekasan berdiri pada tahun 1981, tepatnya pada tanggal 
            20 Januari. Saat ini, Perumdam Tirta Jaya memiliki sekitar 13.477 pelanggan yang tersebar di seluruh wilayah Kabupaten Pamekasan. 
            Perusahaan ini memiliki 6 unit, yaitu Unit Pademawu, Unit Tlanakan, Unit Proppo, Unit Blumbungan, Unit Galis, dan Unit WTP Samiran.
          </p>

          {/* Optional team vision paragraph can stay or be removed */}
          {/* <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
            Kami adalah tim yang berdedikasi untuk menyediakan solusi inovatif dalam pelayanan air bersih,
            berorientasi pada integritas, kolaborasi, dan keunggulan layanan untuk masyarakat Pamekasan dan sekitarnya.
          </p> */}

          {/* Social Media with Labels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center text-center pt-4 border-t border-gray-300 dark:border-gray-700">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaFacebookF size={28} />
              <span className="text-sm font-medium">Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
            >
              <FaInstagram size={28} />
              <span className="text-sm font-medium">Instagram</span>
            </a>

            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
            >
              <FaWhatsapp size={28} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            <a
              href="https://www.youtube.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
            >
              <FaYoutube size={28} />
              <span className="text-sm font-medium">YouTube</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
