import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import FooterTexture from '../../assets/images/Footer image.jpg';  // ← adjust filename if needed (space is ok, but kebab-case better)

const links = [
  { label: 'Product', to: '/product' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Get started', to: '/signup' },
];

function Footer() {
  return (
    <footer className="w-full bg-[#FFF546] text-[#66640F] relative overflow-hidden">
      <div className="relative z-10 px-6 py-12 md:py-16 flex flex-col items-center">
        {/* Top navigation links */}
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
        <p className="text-sm md:text-base font-medium mb-8 md:mb-12 opacity-90">
          ©2025 · All rights reserved
        </p>

        {/* Full-width texture image – matches your mockup's wavy/halftone fabric look */}
        <img
          src={FooterTexture}
          alt="Aetherfield texture background"
          className="w-full h-auto object-cover mb-10 md:mb-16 max-w-5xl mx-auto"
        />

        {/* Small centered logo */}
        <img
          src={Logo}
          alt="Aetherfield Logo"
          className="w-auto h-10 md:h-12 mb-10 md:mb-16"
        />

        {/* Bottom breathing space */}
        <div className="h-12 md:h-20 lg:h-24"></div>
      </div>
    </footer>
  );
}

export default Footer;