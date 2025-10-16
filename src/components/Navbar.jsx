import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.png';

/* Navigation Data */
const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Kemitraan', href: '#kemitraan' },
];

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      animate={{
        background: open
          ? 'linear-gradient(to right, #00487a, #022335)'
          : '#ffffff',
        color: open ? '#ffffff' : '#000000',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-2 right-2 mx-auto shadow-lg rounded-[10px] p-4 flex justify-between max-w-sm items-center z-50 overflow-hidden"
    >
      {/* Logo muncul hanya jika menu belum terbuka */}
      <AnimatePresence mode="wait">
        {!open && (
          <motion.a
            href="/"
            className="w-20 h-4 my-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <img className="my-auto" src={Logo} alt="Logo" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Links muncul saat open */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="links"
            className="flex items-center justify-center gap-4 text-lg font-light w-full text-white"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                className="transition-colors duration-200 hover:text-gray-300"
              >
                {link.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className={`rounded-[10px] p-3 transition-all duration-200 flex items-center justify-center ${
          open
            ? 'bg-white text-[#022335]' // ketika open, tombol putih dan icon gelap
            : 'bg-gradient-to-r from-[#00487a] to-[#022335] text-white' // default
        }`}
        whileTap={{ scale: 0.9 }}
      >
        {open ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
