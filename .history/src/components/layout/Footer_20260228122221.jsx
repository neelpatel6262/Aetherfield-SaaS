// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png'; // Reuse the same logo import as Navbar

const links = [
  { label: 'Product', to: '/product' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Get started', to: '/signup' },
];

function Footer() {
  return (
    <footer className="w-full bg-[#FFFF00] text-black px-8 py-12 md:py-16 overflow-hidden relative">
    
      <div className="text-center mb-12 md:mb-16">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base font-semibold uppercase tracking-wide">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright line */}
      <p className="text-center text-sm md:text-base font-medium mb-10 md:mb-16">
        ©2025 · All rights reserved
      </p>

      {/* Large centered brand name */}
      <div className="text-center">
        <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
          Aetherfield
        </h2>
      </div>

  
      <div className="h-8 md:h-16"></div>
    </footer>
  );
}

export default Footer;