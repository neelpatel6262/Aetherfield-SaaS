import React from 'react'
import HeroImage from '../../assets/images/Hero image.jpg'

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center px-6 pt-16 pb-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)',
        minHeight: '100vh',
      }}
    >

  
      <div className="flex flex-col items-center mt-10 mb-0">
        <h1
          className="text-6xl md:text-7xl font-extrabold text-center text-black leading-none tracking-tight font-[Heading, serif]"
        >
          Sustainability insights,
        </h1>
        <h1
          className="text-6xl md:text-7xl font-extrabold text-center text-black leading-none tracking-tight font-[Subheading, serif]"
        >
          built for business
        </h1>
      </div>

     
      <p
        className="mt-6 text-sm md:text-base text-center text-black/50 max-w-md leading-relaxed font-[heading, sans-serif]"
    
      >
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </p>

     
      <div className="flex gap-3 mt-8">
        <button
          className="
            flex items-center gap-2
            bg-black text-white
            text-sm font-semibold
            px-7 py-3 
            hover:opacity-75 transition
          "
          style={{ fontFamily: 'btn, monospace' }}
        >
          • Request a demo
        </button>
        <button
          className="
            flex items-center gap-2
            bg-black text-white
            text-sm font-semibold
            px-7 py-3 
            hover:opacity-75 transition
          "
          style={{ fontFamily: 'btn, monospace' }}
        >
          • Explore the platform
        </button>
      </div>


      <div
        className="
          mt-16 w-full max-w-3xl
          bg-white
          rounded-t-2xl
          shadow-2xl
          border border-gray-200
          overflow-hidden
        "
      >
        <img
          src={HeroImage}
          alt="Aetherfield dashboard"
          className="w-full h-auto object-cover object-top rounded-3xl border border-black-400"
        />
      </div>

    </section>
  )
}

export default Hero