import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';   

const links = [
  { label: 'Product',  to: '/product' },
  { label: 'Journal',  to: '/journal' },
  { label: 'About',    to: '/about' },
  { label: 'Careers',  to: '/careers' },
];

function Navbar() {
  return (
    <nav className="...">
      <Link to="/">
        <img 
          src={Logo} 
          alt="Aetherfield" 
          className="..." 
        />
      </Link>

      <ul className="...">
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
      </ul>
    </nav>
  );
}

export default Navbar;