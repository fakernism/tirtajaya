// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Structure from './components/Structure';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import FAQ from './components/FAQ';
import KebijakanPrivasi from './components/KebijakanPrivasi';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/visi-misi" element={<VisionMission />} />
        <Route path="/struktur" element={<Structure />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/kontak-kami" element={<Contact />} />
        <Route path="/frequently-asked-question" element={<FAQ />} />
        <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
