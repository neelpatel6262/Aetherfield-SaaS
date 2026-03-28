import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const links = [
  { label: 'Journal', to: '/journal' },
  { label: 'About',   to: '/about'   },
  { label: 'Careers', to: '/careers' },
  { label: 'Product', to: '/product' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  // y: -16 so navbar slides down from top
  const { ref, inView } = useScrollAnimation({ y: -16, duration: 0.5, amount: 0 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <nav className="w-full px-10 py-4 flex items-center justify-between">

        <Link to="/" onClick={() => { window.scrollTo(0, 0); setOpen(false) }}>
          <img src={Logo} alt="Aetherfield" className="h-6 w-auto object-contain" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: -8 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: 'easeOut' }}
            >
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
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, delay: 0.1 + links.length * 0.07, ease: 'easeOut' }}
          >
            <Link to="/signup" className="text-sm font-semibold text-black hover:opacity-60 transition">
              Get started →
            </Link>
          </motion.li>
        </ul>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-10 py-6 flex flex-col gap-5 overflow-hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
              >
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
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.25, delay: links.length * 0.05 }}
            >
              <Link to="/signup" onClick={() => setOpen(false)} className="text-sm font-semibold text-black hover:opacity-60 transition">
                Get started →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar