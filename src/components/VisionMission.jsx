// src/components/VisionMission.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <motion.section 
      id="vision" 
      className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>Visi dan Misi - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Visi dan Misi Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
      </Helmet>

      <div className="container mx-auto px-6 pt-10">
        {/* Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Visi dan Misi
        </motion.h2>

        {/* Visi dan Misi Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Visi */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Visi</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Menjadi perusahaan penyedia layanan air yang terdepan, berkelanjutan, dan berwawasan lingkungan,
              memberikan manfaat bagi masyarakat, menjaga kualitas hidup, serta berkontribusi pada pembangunan ekonomi inklusif.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">Misi</h3>
            <ul className="list-inside space-y-4 text-gray-700 dark:text-gray-300">
              {[
                "Menyediakan layanan air bersih yang aman dan berkualitas tinggi kepada masyarakat dengan harga terjangkau.",
                "Meningkatkan efisiensi operasional melalui teknologi terkini dan pengelolaan sumber daya yang bijaksana.",
                "Melestarikan lingkungan dengan pengelolaan sumber daya air berkelanjutan.",
                "Membangun kemitraan untuk distribusi air yang merata dan berkualitas.",
                "Memberikan pelayanan pelanggan prima dengan fokus pada kepuasan masyarakat."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-2">✔️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
