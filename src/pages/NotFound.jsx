// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
