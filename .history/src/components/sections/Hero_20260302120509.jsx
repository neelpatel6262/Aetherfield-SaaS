// src/components/sections/Hero.jsx
import React from 'react';
import HeroImage from '../../assets/images/Hero image.jpg';

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center px-6 pt-16 pb-20 md:pb-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Headline */}
      <div className="flex flex-col items-center mt-10 md:mt-16 mb-6 md:mb-10">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-black leading-none tracking-tight font-[Heading, serif]"
        >
          Sustainability insights,
        </h1>
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-black leading-none tracking-tight font-[Subheading, serif]"
        >
          built for business
        </h1>
      </div>

      {/* Subheadline */}
      <p
        className="mt-4 md:mt-6 text-base md:text-lg text-center text-black/60 max-w-xl leading-relaxed font-[subheading, sans-serif]"
      >
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
        <button
          className="
            flex items-center justify-center gap-2
            bg-black text-white
            text-sm md:text-base font-semibold
            px-8 py-4 md:px-10 md:py-5
            rounded-lg hover:opacity-90 transition
          "
          style={{ fontFamily: 'btn, monospace' }}
        >
          • Request a demo
        </button>
        <button
          className="
            flex items-center justify-center gap-2
            bg-black text-white
            text-sm md:text-base font-semibold
            px-8 py-4 md:px-10 md:py-5
            rounded-lg hover:opacity-90 transition
          "
          style={{ fontFamily: 'btn, monospace' }}
        >
          • Explore the platform
        </button>
      </div>

      {/* Dashboard Image Card - with more space above */}
      <div
        className="
          mt-20 md:mt-32 lg:mt-40 w-full max-w-5xl
          bg-white rounded-t-3xl
          shadow-2xl border border-gray-200
          overflow-hidden
        "
      >
        <img
          src={HeroImage}
          alt="Aetherfield dashboard preview"
          className="w-full h-auto object-cover object-top rounded-t-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;