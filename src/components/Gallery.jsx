import { Helmet } from 'react-helmet';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { motion } from 'framer-motion';
import 'react-photo-view/dist/react-photo-view.css';

const photos = [
  { src: 'https://picsum.photos/500/300?random=1', label: 'Instalasi Air' },
  { src: 'https://picsum.photos/500/300?random=2', label: 'Pengecekan Pipa' },
  { src: 'https://picsum.photos/500/300?random=3', label: 'Distribusi Air Bersih' },
  { src: 'https://picsum.photos/500/300?random=4', label: 'Kantor Pusat' },
  { src: 'https://picsum.photos/500/300?random=5', label: 'Layanan Pelanggan' },
  { src: 'https://picsum.photos/500/300?random=6', label: 'Teknisi di Lapangan' },
];

export default function Gallery() {
  return (
    <motion.section
      id="gallery"
      className="py-16 bg-gradient-to-b from-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Helmet>
        <title>Galeri Foto - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Galeri Foto Perumdam Tirta Jaya Kabupaten Pamekasan" />
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
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              >
                <PhotoView src={photo.src}>
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="object-cover w-full h-64 sm:h-72 md:h-80 transition-transform duration-500 group-hover:scale-110 rounded-2xl cursor-pointer"
                  />
                </PhotoView>

                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2 text-sm font-medium rounded-b-2xl">
                  {photo.label}
                </div>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </motion.section>
  );
}
