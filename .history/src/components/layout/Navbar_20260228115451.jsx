import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'   // ✅ correct path

const links = [
  { label: 'Product',  to: '/product'  },
  { label: 'Journal',  to: '/journal'  },
  { label: 'About',    to: '/about'    },
  { label: 'Careers',  to: '/careers'  },
]

function Navbar() {
  return (
    <nav className="w-full bg-[#C8C8F4] px-8 py-4 flex items-center 
                    justify-between border border-[#9090e0] sticky top-0 z-50">

      {/* ✅ Logo Image */}
      <Link to="/">
        <img
          src={Logo}
          alt="Aetherfield"
          className="h-8 w-auto object-contain"
        />
      </Link>

      {/* Nav Links */}
      <ul className="flex items-center gap-8">
        {links.map(link => (
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
          <Link to="/signup" className="text-sm font-semibold text-black hover:opacity-70 transition">
            Get started →
          </Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar