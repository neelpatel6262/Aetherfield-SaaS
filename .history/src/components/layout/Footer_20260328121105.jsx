import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import FooterLogo    from '../../assets/images/FooterLogo.png'
import FooterTexture from '../../assets/images/Footer image.jpg'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const links = [
  { label: 'Journal', to: '/journal' },
  { label: 'About',   to: '/about'   },
  { label: 'Careers', to: '/careers' },
  { label: 'Product', to: '/product' },
  { label: 'Sign up', to: '/signup'  },
]

function Footer() {
  const navAnim      = useScrollAnimation({ duration: 0.6 })
  const textureAnim  = useScrollAnimation({ duration: 0.9 })
  const logoAnim     = useScrollAnimation({ duration: 0.8, delay: 0.2 })

  return (
    <footer className="w-full bg-[#FFF546] text-[#66640F] flex flex-col items-center overflow-hidden px-8 py-4">
      <div className="w-full flex flex-col items-center">

        <motion.div {...navAnim} className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 text-sm md:text-base font-semibold uppercase tracking-wide mb-8 md:mb-10">
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 md:gap-x-10 gap-y-2 font-[subheading]">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:opacity-70 transition-opacity duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center md:text-right font-medium opacity-90 font-[subheading]">
            ©2026 · All rights reserved
          </p>
        </motion.div>

        <motion.img
          {...textureAnim}
          src={FooterTexture}
          alt="Aetherfield texture background"
          className="w-full object-cover mx-auto mb-10 md:mb-12"
        />

        <motion.img
          {...logoAnim}
          src={FooterLogo}
          alt="Aetherfield Logo"
          className="w-full h-auto mx-auto mb-8 md:mb-12"
        />
      </div>
    </footer>
  )
}

export default Footer