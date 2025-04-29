// src/components/Contact.jsx
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // <== Tambahkan ini
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';


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

    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon lengkapi semua field!');
      return;
    }

    emailjs.send(
      'service_s3mj1ps',     // Ganti dengan Service ID kamu
      'template_wfq40ek',    // Ganti dengan Template ID kamu
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'o0Zkojms230WypSTk'      // Ganti dengan Public Key kamu
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Pesan berhasil dikirim! 🎉');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    });
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-gradient-to-b from-white dark:from-gray-900 dark:to-gray-800"
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
          className="text-3xl font-bold text-center mb-10 pt-10 text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Kontak Kami
        </motion.h2>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-10 md:space-y-0">
          {/* Formulir Kontak */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300"
          >
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

          {/* Alamat dan Google Maps */}
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-gray-800 dark:text-gray-200">
            <h3 className="text-2xl font-semibold mb-4">Alamat Kantor</h3>
            <p className="mb-6">
              Jl. Pengadilan Negeri no. 1, Bugih, <br />
              Kabupaten Pamekasan, Jawa Timur 69316
            </p>

            <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md mb-4">
              <iframe
                title="Lokasi Perumdam Tirta Jaya"
                src="https://www.google.com/maps?q=Jalan+Pengadilan+Negeri+no.+1+Pamekasan+69317&output=embed"
                width="100%"
                height="250"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* <a
              href="https://www.google.com/maps/place/PDAM+Kabupaten+Pamekasan/@-7.796503,113.4764922,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
            >
              Buka di Google Maps
            </a> */}

            <div className="mt-8 justify-items-center text-center">
              <div className="flex space-x-8">
                
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
                >
                  <FaWhatsapp className="text-3xl mb-1" />
                  <span className="text-sm">WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
                >
                  <FaInstagram className="text-3xl mb-1" />
                  <span className="text-sm">Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  <FaFacebook className="text-3xl mb-1" />
                  <span className="text-sm">Facebook</span>
                </a>

                <a
                  href="https://www.youtube.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
                >
                  <FaYoutube className="text-3xl mb-1" />
                  <span className="text-sm">YouTube</span>
                </a>

              </div>
            </div>
          </div>

          
          

        </div>
      </div>

    </motion.section>
  );
}
