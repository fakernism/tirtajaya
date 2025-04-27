// src/components/About.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

    <Helmet>
        <title>Tentang Kami - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Tentang Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
    </Helmet>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">About Us</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          We are a passionate team dedicated to bringing innovative solutions and driving success for our clients. Our focus is on collaboration, integrity, and delivering excellence.
        </p>
      </div>
    </motion.section>
  );
}
