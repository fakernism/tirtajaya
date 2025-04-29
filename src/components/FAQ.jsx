// src/components/FaqAccordion.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Apa itu Perumdam Tirta Jaya Pamekasan?',
    answer: 'Perumdam Tirta Jaya Pamekasan adalah perusahaan daerah yang bergerak di bidang pelayanan air bersih di Kabupaten Pamekasan.',
  },
  {
    question: 'Bagaimana cara melakukan pembayaran tagihan?',
    answer: 'Pembayaran bisa dilakukan melalui loket resmi, bank yang bekerja sama, atau layanan pembayaran online.',
  },
  {
    question: 'Bagaimana melaporkan gangguan layanan?',
    answer: 'Anda dapat menghubungi kontak kami melalui halaman "Kontak", email, atau sosial media kami.',
  },
  {
    question: "Bagaimana cara mengajukan pemasangan baru?",
    answer: "Silakan isi formulir di halaman kontak, atau datang langsung ke kantor kami dengan membawa dokumen identitas.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 pt-10 text-gray-900 dark:text-white">
        Frequently Asked Question (FAQ)
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
              layout
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 text-left text-gray-900 dark:text-white font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-6 overflow-hidden bg-white dark:bg-gray-800"
                  >
                    <motion.div className="pb-4 pt-2 text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
