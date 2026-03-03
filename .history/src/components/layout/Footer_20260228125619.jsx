// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Reuse the same links as Navbar
const links = [
  { label: 'Product',   to: '/product'   },
  { label: 'Journal',   to: '/journal'   },
  { label: 'About',     to: '/about'     },
  { label: 'Careers',   to: '/careers'   },
  { label: 'Get started', to: '/signup'  },
];

function Footer() {
  // Correct relative path: from src/components/layout/ → ../../../assets/images/
  // (up to src/components → up to src → into assets/images)
  // OR use root-relative: '/src/assets/images/footerimag.jpg' (Vite allows this)
  import footerImage from '../../../assets/images/footerimag.jpg';
  // Alternative (often more reliable in Vite):
  // const footerImage = '/src/assets/images/footerimag.jpg';

  return (
    <footer className="w-full bg-[#FFF546] text-[#66640F] relative overflow-hidden">
      {/* Full-width footer texture image as background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 pointer-events-none"
        style={{ backgroundImage: `url(${footerImage})` }}
      />

      {/* Content on top of the image */}
      <div className="relative z-10 px-6 py-12 md:py-16 flex flex-col items-center">
        {/* Top nav links – centered, uppercase, like mockup */}
        <ul className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-3 text-sm md:text-base font-semibold uppercase tracking-wide mb-10 md:mb-12">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-sm md:text-base font-medium mb-12 md:mb-16 opacity-90">
          ©2025 · All rights reserved
        </p>

        {/* Big brand text at the bottom – exactly as in your mockup */}
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black uppercase tracking-tighter leading-none text-center">
          Aetherfield
        </h2>

        {/* Extra bottom space so text doesn't touch edge */}
        <div className="h-12 md:h-20 lg:h-24"></div>
      </div>
    </footer>
  );
}

export default Footer;