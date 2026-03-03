import React from 'react'
import { Link } from 'react-router-dom';
import FooterImg from '../../assets/images/FooterImage.jpg';


const links = [
  { label: 'Product', to: '/product' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Get started', to: '/signup' },
];



function Footer() {
  return (
    <div>
      <img src={FooterImg} alt="Footer Image" className="w-full h-auto" />
    </div>
  )
}

export default Footer
