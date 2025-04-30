// src/components/BeritaPengumuman.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const beritaData = [
  {
    id: 1,
    title: 'Pemberitahuan Pemeliharaan Jaringan',
    date: '25 April 2025',
    summary: 'Akan dilakukan pemeliharaan jaringan air bersih di wilayah selatan Pamekasan.',
    image: 'https://source.unsplash.com/600x400/?water,repair',
  },
  {
    id: 2,
    title: 'Sosialisasi Hemat Air Bersama',
    date: '20 April 2025',
    summary: 'Kami mengajak masyarakat untuk bijak dalam menggunakan air.',
    image: 'https://source.unsplash.com/600x400/?community,water',
  },
];

export default function BeritaPengumuman() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Berita & Pengumuman
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {beritaData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.02 }}
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{item.summary}</p>
                <Link to="/berita" className="inline-block mt-4 text-blue-500 hover:underline">
                  Selengkapnya →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
