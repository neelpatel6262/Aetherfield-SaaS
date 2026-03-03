import React from 'react'
import HeroImage from '../../assets/images/Hero image.jpg'

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center px-6 pt-20 pb-0"
      style={{
        background: 'linear-gradient(180deg, #B8D4E8 0%, #C8D8E8 40%, #E8D5C0 100%)',
      }}
    >

      {/* Headline */}
      <h1
        className="text-5xl md:text-6xl font-extrabold text-center text-black leading-tight max-w-2xl"
        style={{ fontFamily: 'Radio Canada Big', fontWeight: 'bold' }}
      >
        Sustainability insights,<br />built for business
      </h1>

      {/* Subtitle */}
      <p
        className="mt-5 text-base text-center text-black/60 max-w-lg"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded hover:opacity-80 transition"
          style={{ fontFamily: 'Geist Mono, monospace' }}
        >
          • Request a demo
        </button>
        <button
          className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded hover:opacity-80 transition"
          style={{ fontFamily: 'Geist Mono, monospace' }}
        >
          • Explore the platform
        </button>
      </div>

      {/* Hero Image Card */}
      <div className="mt-14 w-full max-w-4xl bg-white rounded-t-2xl shadow-xl border border-gray-100 overflow-hidden">
        <img
          src={HeroImage}
          alt="Hero dashboard"
          className="w-full h-auto object-cover"
        />
      </div>

    </section>
  )
}

export default Hero