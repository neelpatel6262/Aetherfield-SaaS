import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'

const links = [
  { label: 'Product', to: '/product' },
  { label: 'Journal', to: '/journal' },  // ✅
  { label: 'About',   to: '/about'   },  // ✅
  { label: 'Careers', to: '/careers' },  // ✅
  // ❌ DELETED: { label: 'artical', to: '/artical' }     → typo + no route
  // ❌ DELETED: { label: 'job-listing', to: '/job-listing' } → no route
]

function Navbar() {
  return (
    <nav
      className="w-full sticky top-0 z-50 px-10 py-4 flex items-center justify-between"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
    >
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Aetherfield" className="h-6 w-auto object-contain" />
      </Link>

      {/* Links */}
      <ul className="flex items-center gap-8">
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

        {/* Get Started */}
        <li>
          <Link to="/signup" className="text-[14px] font-semibold text-black hover:text-black/40 transition-colors">
            Get started →
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar