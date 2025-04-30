// src/pages/KebijakanPrivasi.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function KebijakanPrivasi() {
  return (
    <motion.section
      className="py-16 px-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>Kebijakan Privasi - Perumdam Tirta Jaya Pamekasan</title>
        <meta name="description" content="Kebijakan Privasi Perumdam Tirta Jaya Pamekasan" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-10 pt-10 text-gray-900 dark:text-white">Kebijakan Privasi</h1>
      <p className="mb-4">Terakhir diperbarui: 29 April 2025</p>

      <p className="mb-6">
        Perumdam Tirta Jaya Kabupaten Pamekasan ("kami") berkomitmen untuk melindungi privasi
        pengunjung situs kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
        dan menjaga informasi Anda.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Nama lengkap, alamat email, nomor telepon, alamat, dan nomor pelanggan</li>
        <li>Data penggunaan situs, seperti alamat IP, browser, halaman yang dikunjungi</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Penggunaan Informasi</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Memberikan dan meningkatkan layanan kami</li>
        <li>Menanggapi permintaan atau pengaduan</li>
        <li>Keperluan administratif dan keamanan situs</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Berbagi Informasi</h2>
      <p className="mb-6">
        Kami tidak menjual atau membagikan data Anda kepada pihak ketiga kecuali kepada pihak yang
        membantu operasional situs ini atau diwajibkan oleh hukum.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Keamanan Data</h2>
      <p className="mb-6">
        Kami menjaga data Anda dengan sistem keamanan yang wajar, meskipun tidak ada sistem yang
        sepenuhnya aman di internet.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Hak Anda</h2>
      <p className="mb-6">
        Anda berhak mengakses, memperbarui, atau meminta penghapusan data pribadi Anda. Hubungi kami
        melalui halaman kontak untuk permintaan tersebut.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Perubahan Kebijakan</h2>
      <p className="mb-6">
        Kami dapat memperbarui kebijakan ini dan akan mengumumkan perubahannya di halaman ini.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Hubungi Kami</h2>
      <p>
        Jika ada pertanyaan mengenai kebijakan ini, hubungi kami melalui:
        <br />
        Email: info@perumdamtirtajaya-pamekasan.go.id
        <br />
        Telepon: (0324) 123456
        <br />
        Alamat: Jalan Pengadilan Negeri No. 1, Pamekasan 69317
      </p>
    </motion.section>
  );
}
