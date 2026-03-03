import React, { useState } from 'react';
import { motion } from 'motion/react';   // ← only this import added
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

const links = [
  { label: 'Journal', to: '/journal' },  
  { label: 'About',   to: '/about'   },  
  { label: 'Careers', to: '/careers' },  
  { label: 'Product', to: '/product' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  // Stagger animation for desktop links
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }, // gentle delay between links
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="w-full px-10 py-4 flex items-center justify-between">
        {/* Logo – subtle fade + scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/" onClick={() => { window.scrollTo(0, 0); setOpen(false) }}>
            <img src={Logo} alt="Aetherfield" className="h-6 w-auto object-contain" />
          </Link>
        </motion.div>

        {/* Desktop menu – stagger fade */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-8"
        >
          {links.map(link => (
            <motion.li key={link.to} variants={item}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-black font-semibold text-sm'
                    : 'text-black/60 hover:text-black text-sm transition-colors'
                }
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
          <motion.li variants={item}>
            <Link to="/signup" className="text-sm font-semibold text-black hover:opacity-60 transition">
              Get started →
            </Link>
          </motion.li>
        </motion.ul>

        {/* Mobile toggle button – subtle scale on press */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }} // tiny press feedback
        >
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </motion.button>
      </nav>

      {/* Mobile dropdown – smooth slide down + fade */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-10 py-6 flex flex-col gap-5 overflow-hidden"
      >
        <motion.ul variants={container} initial="hidden" animate={open ? "show" : "hidden"}>
          {links.map(link => (
            <motion.li key={link.to} variants={item}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-black font-semibold text-sm'
                    : 'text-black/60 hover:text-black text-sm transition-colors'
                }
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
          <motion.li variants={item}>
            <Link to="/signup" onClick={() => setOpen(false)} className="text-sm font-semibold text-black hover:opacity-60 transition">
              Get started →
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default Navbar;