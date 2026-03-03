import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

const links = [
  { label: 'Journal', to: '/journal' },  
  { label: 'About',   to: '/about'   },  
  { label: 'Careers', to: '/careers' },  
  { label: 'Product', to: '/product' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="w-full px-5 sm:px-8 md:px-10 py-4 flex items-center justify-between">
        {/* Logo – constrained width on mobile */}
        <Link 
          to="/" 
          onClick={() => { window.scrollTo(0, 0); setOpen(false); }}
          className="max-w-[140px] sm:max-w-[160px] md:max-w-none"
        >
          <img 
            src={Logo} 
            alt="Aetherfield" 
            className="h-6 w-auto object-contain"
          />
        </Link>

        {/* Desktop menu */}
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

        {/* Hamburger button */}
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

      {/* Full-screen mobile menu */}
      {open && (
        <div 
          className="fixed inset-0 z-50 md:hidden bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setOpen(false)} // close when clicking outside
        >
          <div 
            className="bg-white w-full max-w-md h-full max-h-[85vh] overflow-y-auto px-8 py-12 relative"
            onClick={e => e.stopPropagation()} // prevent close when clicking inside
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-8 text-3xl text-black hover:opacity-70"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>

            <div className="flex flex-col items-center gap-10 mt-16">
              {links.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-xl font-semibold text-black'
                      : 'text-xl text-black/70 hover:text-black transition-colors'
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Link 
                to="/signup" 
                onClick={() => setOpen(false)}
                className="text-xl font-semibold text-black hover:opacity-70 transition"
              >
                Get started →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;