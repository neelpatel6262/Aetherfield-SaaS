// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/'; // ← using the hook
import FooterLogo    from '../../assets/images/FooterLogo.png';
import FooterTexture from '../../assets/images/Footer image.jpg';

const links = [
  { label: 'Journal', to: '/journal' },  
  { label: 'About',   to: '/about'   },  
  { label: 'Careers', to: '/careers' },  
  { label: 'Product', to: '/product' },
  { label: 'Sign up', to: '/signup'  },  
];

function Footer() {
  // Get animation props from hook
  const sectionAnim = useScrollAnimation({
    duration: 0.7,
    y: 20,
    delay: 0.1,
  });

  const linkAnim = useScrollAnimation({
    duration: 0.5,
    y: 12,
  });

  const textureAnim = useScrollAnimation({
    duration: 0.9,
    y: 25,
    delay: 0.2,
  });

  const logoAnim = useScrollAnimation({
    duration: 0.8,
    y: 35,
    delay: 0.4,
  });

  return (
    <footer className="w-full bg-[#FFF546] text-[#66640F] flex flex-col items-center overflow-hidden bg-cover bg-center px-8 py-4">
      <div className="w-full flex flex-col items-center">

        {/* Links + copyright – using hook + stagger via delay */}
        <motion.div {...sectionAnim} className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 text-sm md:text-base font-semibold uppercase tracking-wide mb-8 md:mb-10">
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 md:gap-x-10 gap-y-2 font-[subheading]">
            {links.map((link, index) => (
              <motion.li
                key={link.to}
                {...linkAnim}
                transition={{ ...linkAnim.transition, delay: linkAnim.transition.delay + index * 0.08 }}
              >
                <Link
                  to={link.to}
                  className="hover:opacity-70 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.p
            {...linkAnim}
            transition={{ ...linkAnim.transition, delay: linkAnim.transition.delay + 0.4 }}
            className="text-center md:text-right font-medium opacity-90 font-[subheading]"
          >
            ©2026 · All rights reserved
          </motion.p>
        </motion.div>

        {/* Texture */}
        <motion.img
          {...textureAnim}
          src={FooterTexture}
          alt="Aetherfield texture background"
          className="w-full object-cover mx-auto mb-10 md:mb-12"
        />

        {/* Logo */}
        <motion.img
          {...logoAnim}
          src={FooterLogo}
          alt="Aetherfield Logo"
          className="w-full h-auto mx-auto mb-8 md:mb-12"
        />

        <div className="h-6 md:h-10 lg:h-12" />
      </div>
    </footer>
  );
}

export default Footer;