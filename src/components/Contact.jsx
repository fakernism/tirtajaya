// src/components/Contact.jsx
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
      <motion.section 
        id="contact" 
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >

    <Helmet>
        <title>Kontak Kami - Perumdam Tirta Jaya Kabupaten Pamekasan</title>
        <meta name="description" content="Kontak Perumdam Tirta Jaya Kabupaten Pamekasan - Pelayanan adalah motivasi kami untuk terus maju dan berubah." />
    </Helmet>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Kontak Kami</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <input type="text" placeholder="Name" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white" />
            <input type="email" placeholder="Email" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white" />
            <textarea placeholder="Message" rows="5" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"></textarea>
            <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Send Message</button>
          </form>
        </div>
      </motion.section>
    );
  }