// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';  



// Reuse the same links as Navbar
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
      <div className="justify-space-between">
      <ul className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-3 text-sm md:text-base font-semibold uppercase tracking-wide mb-10 md:mb-12 font-[subheading]">
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
        <p className="text-sm md:text-base font-medium mb-12 md:mb-16 opacity-90">
          ©2025 · All rights reserved
        </p>
     </div>

<div>
  <img src={Logo} alt="Logo" className="w-[1280px] h-[1280px] mx-auto color-[#66640F] opacity-90 hover:opacity-100 transition-opacity duration-200 object-contain" />
</div>
    </footer>
  );
}

export default Footer;