import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/images/FooterLogo.png';
import FooterTexture from '../../assets/images/Footer image.jpg';

const links = [
  { label: 'Product', to: '/product' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Get started', to: '/signup' },
];

function Footer() {
  return (
    <footer className="w-full bg-[#FFF546] text-[#66640F] flex flex-col items-center overflow-hidden">
      {/* Responsive padding & gap – matches the three variants */}
      <div className="
        w-full max-w-[1280px] px-5 py-5 gap-5
        md:max-w-[800px] md:px-5 md:py-5 md:gap-4
        lg:px-[80px] lg:py-10 lg:gap-4
        flex flex-col items-center
      ">
        {/* Navigation links */}
        <ul className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-3 text-sm md:text-base font-semibold uppercase tracking-wide">
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
        <p className="text-sm md:text-base font-medium opacity-90">
          ©2025 · All rights reserved
        </p>

        {/* Texture image – full width in container */}
        <img
          src={FooterTexture}
          alt="Aetherfield texture background"
          className="w-full h-auto object-cover max-w-[90%] md:max-w-[85%] lg:max-w-5xl mx-auto"
        />

        {/* Footer logo (assuming this is the small centered logo) */}
        <img
          src={FooterLogo}
          alt="Aetherfield Logo"
          className="w-auto h-10 md:h-12 lg:h-14"
        />

        {/* Extra bottom space to match height feel */}
        <div className="h-6 md:h-10 lg:h-16"></div>
      </div>

      {/* Optional: If you want the huge "Aetherfield" text like previous versions */}
      {/* Uncomment if needed – it was in earlier mockups but not in this CSS */}
      {/* 
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-none text-center mt-6 lg:mt-10">
        Aetherfield
      </h2>
      */}
    </footer>
  );
}

export default Footer;