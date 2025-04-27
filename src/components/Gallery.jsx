// src/components/Gallery.jsx
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const photos = [
    // '/gallery/photo1.jpg',
    // '/gallery/photo2.jpg',
    // '/gallery/photo3.jpg',
    // '/gallery/photo4.jpg',
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
      className="py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

    <Helmet>
        <title>Galeri Foto - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Galeri Foto Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
    </Helmet>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Gallery</h2>
        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((src, index) => (
              <PhotoView key={index} src={src}>
                <img
                  src={src}
                  alt={`Gallery ${index}`}
                  className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </motion.section>
  );
}
