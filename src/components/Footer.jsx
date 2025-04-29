// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // ⬅️ Tambahkan icon social
import { motion } from 'framer-motion'; // ⬅️ Optional animasi halus

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 pt-12 pb-6 mt-12 border-t border-gray-300 dark:border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition text-2xl">
            <FaInstagram />
          </a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition text-2xl">
            <FaWhatsapp />
          </a>
          <a href="https://youtube.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition text-2xl">
            <FaYoutube />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6 text-sm font-medium">
          <a href="/contact" className="hover:text-blue-500 transition">Kebijakan Privasi</a>
          <a href="/faq" className="hover:text-blue-500 transition">FAQ</a>
          <a href="/contact" className="hover:text-blue-500 transition">Kontak Kami</a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Perumdam Tirta Jaya Kabupaten Pamekasan</span>.
        </p>
      </div>
    </motion.footer>
  );
}
