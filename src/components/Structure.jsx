import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import logo from "../assets/struktur.png"

export default function Structure() {
  const [zoom, setZoom] = useState(1);
  const constraintsRef = useRef(null);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.2, 2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.6));
  const handleReset = () => setZoom(1);

  return (
    <motion.section
      id="structure"
      className="py-16 bg-gradient-to-b from-white dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Helmet>
        <title>Struktur Organisasi - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Struktur Organisasi Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
      </Helmet>

      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 pt-10 text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Struktur Organisasi
        </motion.h2>

        {/* Tombol Kontrol Zoom */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <button
            onClick={handleZoomOut}
            className="flex items-center px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <ZoomOut className="w-5 h-5 mr-1" /> Zoom Out
          </button>
          <button
            onClick={handleZoomIn}
            className="flex items-center px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <ZoomIn className="w-5 h-5 mr-1" /> Zoom In
          </button>
          <button
            onClick={handleReset}
            className="flex items-center px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <RotateCcw className="w-5 h-5 mr-1" /> Reset Zoom
          </button>
        </div>

        {/* Gambar Drag + Zoom */}
        <div
          ref={constraintsRef}
          className="relative w-full h-[500px] md:h-[700px] overflow-hidden border border-gray-300 dark:border-gray-700 rounded-lg"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              animate={{ scale: zoom }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="cursor-grab active:cursor-grabbing w-max h-max"
              style={{ transformOrigin: 'center center' }}
            >
              <img
                src={logo}
                alt="Struktur Organisasi"
                className="select-none pointer-events-none"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
