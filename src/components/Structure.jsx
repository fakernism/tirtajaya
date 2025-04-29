// src/components/Structure.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const leader = { name: 'Direktur Utama', image: '/structure/ceo.jpg' };

const team = [
  { name: 'Direktur Teknik', image: '/structure/cto.jpg' },
  { name: 'Direktur Operasional', image: '/structure/coo.jpg' },
  { name: 'Direktur Keuangan', image: '/structure/cfo.jpg' },
  { name: 'Manajer Pemasaran', image: '/structure/cmo.jpg' },
  { name: 'Manajer TI', image: '/structure/cio.jpg' },
];

export default function Structure() {
  return (
    <motion.section
      id="structure"
      className="py-16 bg-gradient-to-b from-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Helmet>
        <title>Struktur Organisasi - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Struktur Organisasi Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
      </Helmet>

      <div className="container mx-auto px-6 pt-10 relative">
        {/* Judul */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Struktur Organisasi
        </motion.h2>

        {/* Leader Section */}
        <div className="flex flex-col items-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 dark:border-blue-400 object-cover mb-4 shadow-xl"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">{leader.name}</h3>
          </motion.div>

          {/* Animated Vertical Line */}
          <motion.div
            className="w-1 bg-blue-500 dark:bg-blue-400 mt-6"
            initial={{ height: 0 }}
            animate={{ height: '80px' }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Team Section */}
        <div className="relative mt-12">
          {/* Animated Horizontal Line */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 flex justify-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: 'center' }}
          >
            <div className="w-11/12 h-1 bg-blue-500 dark:bg-blue-400"></div>
          </motion.div>

          {/* Team Grid */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-12 justify-items-center mt-12 z-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-6 text-center transform  relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-400"
                />
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{member.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
