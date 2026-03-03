import React from 'react'

import HeroImage from '../../assets/images/Hero Image.jpg'

const Hero = () => {
  return (
    <div>
      <img src={HeroImage} alt="Hero Image" className="w-full h-auto object-cover" />
      <div className="text-center text-white p-4">
        <h1 className="text-4xl font-bold">Sustainability insights,</h1>
        <h1 className="text-4xl font-bold">built for business</h1>
        <p></p>
      </div>
    </div>
  )
}

export default Hero
