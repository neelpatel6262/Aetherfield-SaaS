import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

const links = [
  { label: 'Product', to: '/product' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
];

function Navbar() {
  return (
    <nav className="w-full bg-[#FFFFFF] blur-0.1 px-8 py-4 flex items-center justify-between flex-col md:flex-row gap-4">
      <Link to="/">
        <img
          src={Logo}
          alt="Aetherfield"
          className="h-8 w-auto object-contain"
        />
      </Link>

      <ul className="flex space-x-6 items-center">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-black font-semibold text-sm'
                  : 'text-black/70 hover:text-black text-sm transition'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}

      
        <li>
          <Link
            to="/signup"
            className="text-sm font-semibold text-black hover:opacity-70 transition"
          >
            Get started →
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;