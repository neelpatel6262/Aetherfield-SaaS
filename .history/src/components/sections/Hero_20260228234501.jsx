import React from 'react'
import HeroImage from '../../assets/images/Hero image.jpg'

const Hero = () => {
  return (
    <section
      className="w-full flex flex-col items-center pt-16 pb-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)',
        minHeight: '100vh',
      }}
    >

      {/* Headline */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-[64px] font-extrabold text-center text-black leading-none tracking-tight font-[heading]">
          Sustainability insights,
        </h1>
        <h1 className="text-[64px] font-extrabold text-center text-black leading-none tracking-tight font-[heading]">
          built for business
        </h1>
      </div>

      {/* Subtitle */}
      <p className="mt-6 text-[16px] text-center text-black/50 max-w-md leading-relaxed font-[subheading]">
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-8">
        <button className="bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn]">
          • Request a demo
        </button>
        <button className="bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn]">
          • Explore the platform
        </button>
      </div>

      {/* Dashboard image card */}
      <div className="mt-16 w-container max-w-container bg-white rounded-t-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <img
          src={HeroImage}
          alt="Aetherfield dashboard"
          className="w-full h-auto object-cover object-top"
        />
      </div>

    </section>
  )
}

export default Hero