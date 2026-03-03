import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'

const links = [
  { label: 'Product', to: '/product' },
  { label: 'Journal', to: '/journal' },
  { label: 'About',   to: '/about'   },
  { label: 'Careers', to: '/careers' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="w-full sticky top-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
      >
        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={Logo} alt="Aetherfield" className="h-6 w-auto object-contain" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[14px] font-semibold text-black'
                    : 'text-[14px] text-black hover:text-black/40 transition-colors'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/signup" className="text-[14px] font-semibold text-black hover:text-black/40 transition-colors">
              Get started →
            </Link>
          </li>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu — slides down */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full z-40 bg-white flex flex-col px-6 pt-24 pb-10 gap-6 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? 'text-[28px] font-extrabold text-black font-[heading]'
                : 'text-[28px] font-extrabold text-black/40 hover:text-black transition-colors font-[heading]'
            }
          >
            {link.label}
          </NavLink>
        ))}

        <div className="border-t border-gray-100 pt-6 mt-2">
          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn] inline-block"
          >
            • Get started
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar