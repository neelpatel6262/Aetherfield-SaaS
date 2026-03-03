import React from 'react'
import { Link } from 'react-router-dom';
import FooterImg from '../../assets/images/FooterImage.jpg';

function Footer() {
  return (
    <div>
      <img src={FooterImg} alt="Footer Image" className="w-full h-auto" />
    </div>
  )
}

export default Footer
