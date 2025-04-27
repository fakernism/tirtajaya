// src/components/VisionMission.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function VisionMission() {
    return (
      <motion.section 
        id="vision" 
        className="py-12 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >

    <Helmet>
        <title>Visi dan Misi - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Tentang Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
    </Helmet>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Visi dan Misi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Visi</h3>
              <p className="text-gray-600 dark:text-gray-400">
              Menjadi perusahaan penyedia layanan air yang terdepan, berkelanjutan, dan berwawasan lingkungan, yang memberikan manfaat bagi masyarakat, menjaga kualitas hidup, dan berkontribusi pada pembangunan ekonomi yang inklusif.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Misi</h3>
              <p className="text-gray-600 dark:text-gray-400">
              1. Menyediakan layanan air bersih yang aman dan berkualitas tinggi kepada masyarakat dengan harga yang terjangkau.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
              2. Meningkatkan efisiensi operasional melalui penggunaan teknologi terkini dan pengelolaan sumber daya yang bijaksana.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
              3. Berkomitmen untuk melestarikan lingkungan dengan mengelola sumber daya air secara berkelanjutan.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
              4. Membangun kemitraan dengan berbagai pihak untuk memastikan distribusi air yang merata dan berkualitas.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
              5. Memberikan pelayanan pelanggan yang prima, dengan fokus pada kepuasan masyarakat dalam mendapatkan akses air yang mudah dan cepat.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }