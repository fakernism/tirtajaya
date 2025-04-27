// src/components/Structure.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const structure = [
  { name: 'CEO', image: '/structure/ceo.jpg' },
  { name: 'CTO', image: '/structure/cto.jpg' },
  { name: 'COO', image: '/structure/coo.jpg' },
  { name: 'COO', image: '/structure/coo.jpg' },
  { name: 'COO', image: '/structure/coo.jpg' },
  { name: 'COO', image: '/structure/coo.jpg' },
];

export default function Structure() {
  return (
    <motion.section
      id="structure"
      className="py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

    <Helmet>
        <title>Struktur Organisasi - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Struktur Organisasi Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
    </Helmet>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Struktur Organisasi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {structure.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow hover:scale-105 transition-transform"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
