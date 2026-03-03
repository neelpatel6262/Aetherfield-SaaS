// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

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
    <footer className="w-full bg-[#FFFF00] text-black relative overflow-hidden">
     <div>
      
     </div>
    </footer>
  );
}

export default Footer;