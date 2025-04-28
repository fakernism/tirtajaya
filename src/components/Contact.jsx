// src/components/Contact.jsx
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon lengkapi semua field!');
      return;
    }

    // Nanti kirim ke server atau email service di sini
    console.log('Form submitted:', formData);

    alert('Pesan Anda berhasil dikirim! 🎉');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Helmet>
        <title>Kontak Kami - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Kontak Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
      </Helmet>

      <div className="container mx-auto px-6 pt-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Kontak Kami
        </motion.h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Pesan</label>
            <textarea
              name="message"
              placeholder="Tulis pesan Anda..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-transform duration-300"
          >
            Kirim Pesan
          </button>

        </form>
      </div>
    </motion.section>
  );
}
