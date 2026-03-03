import React from 'react'
import Logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <div>
      <img src={Logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Journal</li>
          <li>Careers</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
