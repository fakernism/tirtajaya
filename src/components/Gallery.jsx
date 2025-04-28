// src/components/Gallery.jsx
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const photos = [
  'https://picsum.photos/500/?random=1',
  'https://picsum.photos/500/?random=2',
  'https://picsum.photos/500/?random=3',
  'https://picsum.photos/500/?random=4',
  'https://picsum.photos/500/?random=5',
  'https://picsum.photos/500/?random=6',
];

export default function Gallery() {
  return (
    <motion.section
      id="gallery"
      className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Helmet>
        <title>Galeri Foto - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Galeri Foto Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
      </Helmet>

      <div className="container mx-auto px-6 pt-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Galeri Foto
        </motion.h2>

        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {photos.map((src, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              >
                <PhotoView src={src}>
                  <img
                    src={src}
                    alt={`Gallery ${index}`}
                    className="object-cover w-full h-64 sm:h-72 md:h-80 transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                  />
                </PhotoView>

                {/* Glowing effect */}
                <div className="absolute inset-0 bg-blue-400/10 dark:bg-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </motion.section>
  );
}
