import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'

const links = [
  { label: 'Journal', to: '/journal' },  
  { label: 'About',   to: '/about'   },  
  { label: 'Careers', to: '/careers' },  
  { label: 'Product', to: '/product' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="w-full px-10 py-4 flex items-center justify-between">

        <Link to="/" onClick={() => { window.scrollTo(0, 0); setOpen(false) }}>
          <img src={Logo} alt="Aetherfield" className="h-6 w-auto object-contain" />
        </Link>

        
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.to}>
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
            </li>
          ))}
          <li>
            <Link to="/signup" className="text-sm font-semibold text-black hover:opacity-60 transition">
              Get started →
            </Link>
          </li>
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


      
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-10 py-6 flex flex-col gap-5">
          {links.map(link => (
            <NavLink
              key={link.to}
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
          ))}
          <Link to="/signup" onClick={() => setOpen(false)} className="text-sm font-semibold text-black hover:opacity-60 transition">
            Get started →
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar