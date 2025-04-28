// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Perumdam Tirta Jaya Kabupaten Pamekasan.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
            <a href="#" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  