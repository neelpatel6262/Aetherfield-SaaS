// src/components/layout/Footer.jsx (or wherever your Footer is)
import React from 'react';
import { motion } from 'motion/react'; // ← import Motion
import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/images/FooterLogo.png';
import FooterTexture from '../../assets/images/Footer image.jpg';

const links = [
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Product', to: '/product' },
  { label: 'Sign up', to: '/signup' },
];

function Footer() {
  // Stagger animation for links (appear one by one)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // each link delayed by 120ms
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer
      className="w-full bg-[#FFF546] text-[#66640F] flex flex-col items-center overflow-hidden bg-cover bg-center px-6 py-10 md:py-16"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">

        {/* Links + Copyright - Stagger fade-in */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0 text-sm md:text-base font-semibold uppercase tracking-wide mb-10 md:mb-12"
        >
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 md:gap-x-12 gap-y-3">
            {links.map((link) => (
              <motion.li key={link.to} variants={item}>
                <Link
                  to={link.to}
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.p
            variants={item}
            className="text-center md:text-right font-medium opacity-90"
          >
            ©2026 · All rights reserved
          </motion.p>
        </motion.div>

        {/* Texture image - fade in + slight scale */}
        <motion.img
          src={FooterTexture}
          alt="Aetherfield texture background"
          className="w-full max-w-5xl object-cover mx-auto mb-10 md:mb-12 rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Logo - slide up + fade */}
        <motion.img
          src={FooterLogo}
          alt="Aetherfield Logo"
          className="w-full max-w-xs md:max-w-sm h-auto mx-auto mb-10 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        />

        <div className="h-8 md:h-12 lg:h-16" />
      </div>
    </footer>
  );
}

export default Footer;