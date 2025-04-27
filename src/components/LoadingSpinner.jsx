// src/components/LoadingSpinner.jsx
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </motion.div>
  );
}
