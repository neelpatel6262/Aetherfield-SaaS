import React from 'react'

import HeroImage from '../../assets/images/Hero Image.jpg'

const Hero = () => {
  return (
    <div className="w-1280 h-1074 bg-cover bg-center relative">
      <img src={HeroImage} alt="Hero Image" className="w-960 h-608 object-cover mx-auto m-160" />
      <div className="text-center text-white p-4">
        <h1 className="text-4xl font-bold">Sustainability insights,</h1>
        <h1 className="text-4xl font-bold">built for business</h1>
        <p className="text-lg font-medium" >Track impact, reduce emissions, and accelerate progress—with clarity and confidence.</p>
      </div>
    </div>
  )
}

export default Hero
