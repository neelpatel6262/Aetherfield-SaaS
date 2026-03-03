import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'


const links = [
  { label: 'Product', to: '/product' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
]


function Navbar() {
  return (
    <nav className='w-full bg-[#C8C8F4] px-8 py-4 flex items-center justify-between border border-[#9090e0] shadow-md flex-col md:flex-row'>

      <Link to="/">
        <img
          src={Logo}
          alt="Aetherfield"
          className="h-8 w-auto object-contain"
        />
      </Link>

      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className={({ isActive }) => isActive ? 'text-black font-semibold text-sm' : 'text-black/70 hover:text-black text-sm transition'}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar
