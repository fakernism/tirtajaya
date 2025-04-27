// src/components/Navbar.jsx
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (darkMode) {
//       document.documentElement.classList.remove('dark');
//     } else {
//       document.documentElement.classList.add('dark');
//     }
//   };

//   return (
//     <nav className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-900">
//       <div className="text-2xl font-bold text-gray-900 dark:text-white">
//         MyLanding
//       </div>
//       <div className="flex space-x-6">
//         <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">About</Link>
//         <Link to="/vision-mission" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Vision</Link>
//         <Link to="/structure" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Structure</Link>
//         <Link to="/gallery" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Gallery</Link>
//         <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Contact</Link>
//         <button 
//           onClick={toggleDarkMode}
//           className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//         >
//           {darkMode ? '☀️' : '🌙'}
//         </button>
//       </div>
//     </nav>
//   );
// }

// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="flex items-center justify-between shadow-md bg-white dark:bg-gray-900 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">MyLanding</Link>

        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900 dark:text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 space-y-4 py-4 px-6">
          <NavLinks toggleMenu={toggleMenu} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ toggleMenu }) {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/vision-mission', label: 'Vision & Mission' },
    { to: '/structure', label: 'Structure' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="block text-gray-900 dark:text-white hover:text-blue-500"
          onClick={() => toggleMenu && toggleMenu()}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
