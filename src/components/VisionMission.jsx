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
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To be a leading organization recognized globally for innovation, leadership, and delivering outstanding results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our mission is to provide high-quality solutions, foster strong relationships with clients, and continuously improve through innovation and integrity.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }