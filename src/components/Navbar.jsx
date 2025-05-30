// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/perumdamlogo.png';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => setOpen(!open);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-all">
      <div className="container mx-auto px-4 py-3 relative flex items-center justify-between">

        {/* Mobile Left Spacer */}
        <div className="w-8 md:hidden"></div>

        {/* Logo Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          <Link to="/">
            <img src={logo} alt="Logo Perumdam Tirta Jaya" className="h-12 object-contain" />
          </Link>
        </div>

        {/* Desktop Nav & Dark Mode */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <NavLinks />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger (Right) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 transition-all overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}


function NavLinks() {
  const location = useLocation();
  const links = [
    { to: '/', label: 'Beranda' },
    { to: '/tentang-kami', label: 'Tentang Kami' },
    { to: '/visi-misi', label: 'Visi dan Misi' },
    { to: '/struktur', label: 'Struktur Organisasi' },
    { to: '/galeri', label: 'Galeri' },
    { to: '/kontak-kami', label: 'Kontak' },
  ];

  return (
    <>
      {links.map((link, index) => {
        const isActive = location.pathname === link.to;
        return (
          <Link
            key={index}
            to={link.to}
            className={`relative group font-medium transition-colors duration-300 ${
              isActive 
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-900 dark:text-white hover:text-blue-500'
            }`}
          >
            {link.label}
            {/* <span className={`block h-0.5 bg-blue-500 max-w-0 group-hover:max-w-full transition-all duration-300 no-underline ${isActive ? 'max-w-full' : ''}`}></span> */}
          </Link>
        );
      })}
    </>
  );
}
