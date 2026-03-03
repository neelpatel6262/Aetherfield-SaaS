import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png';  


const links = [
  { label: 'Journal', to: '/journal' },
  { label: 'article', to: '/article' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'job-listing', to: '/job-listing' }
]


function Navbar() {
  return (
    <nav className="
      w-full px-10 py-4
      flex items-center justify-between
      bg-white/80 backdrop-blur-md
      sticky top-0 z-50
      border-b border-gray-100
    ">
      {/* Logo */}
      <Link to="/">
        <img
          src={Logo}
          alt="Aetherfield"
          className="h-6 w-auto object-contain"
        />
      </Link>

      {/* Links */}
      <ul className="flex items-center gap-8">
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

        {/* Get Started */}
        <li>
          <Link
            to="/signup"
            className="text-sm font-semibold text-black hover:opacity-60 transition"
          >
            Get started →
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
