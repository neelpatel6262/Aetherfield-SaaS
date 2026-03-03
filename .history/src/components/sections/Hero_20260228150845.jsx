import React from 'react'

import HeroImage from '../../assets/images/Hero Image.jpg'

const Hero = () => {
  return (
    <div>
      <div className="text-center text-white p-4">
        <h1 className="text-4xl font-bold">Sustainability insights,</h1>
        <h1 className="text-4xl font-bold">built for business</h1>
        <p className="text-lg font-medium" >Track impact, reduce emissions, and accelerate progress—with clarity and confidence.</p>
      <img src={HeroImage} alt="Hero Image" className="w-full h-auto object-cover rounded-border-24" />
      </div>
    </div>
  )
}

export default Hero
