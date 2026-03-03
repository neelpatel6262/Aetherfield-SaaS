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
      {/* ── Headline ── */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-black leading-tight max-w-2xl">
        Sustainability insights,<br />built for business
      </h1>

      {/* ── Subtitle ── */}
      <p className="mt-5 text-base text-center text-black/60 max-w-lg">
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </p>

      {/* ── Buttons ── */}
      <div className="flex gap-4 mt-8">
        <button className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded hover:opacity-80 transition">
          • Request a demo
        </button>
        <button className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded hover:opacity-80 transition">
          • Explore the platform
        </button>
      </div>

      {/* ── Dashboard Card with Hero Image ── */}
      <div className="mt-14 w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

        {/* Card Header */}
        <div className="p-6 pb-4">
          <h3 className="text-lg font-bold text-black">Good morning, Acme Inc</h3>
          <p className="text-sm text-gray-400">Your daily impact metrics are ready to review.</p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-4 px-6 pb-6">

          {/* Metric 1 */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-400">192,000 tCO₂e</p>
            <div className="flex items-end gap-3 mt-1">
              <p className="text-3xl font-extrabold text-black">56%</p>
              <div className="w-14 h-14 bg-[#F5E642] rounded-md" />
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-400">Energy consumption</p>
            <p className="text-3xl font-extrabold text-black mt-1">
              583.7
              <span className="text-sm font-normal text-gray-400 ml-1">MWh</span>
            </p>
            <p className="text-xs text-green-500 font-semibold">+12.4%</p>
          </div>

          {/* Metric 3 — Forecast */}
          <div className="flex flex-col gap-2">
            <span className="self-start bg-[#F5E642] text-black text-xs font-bold px-2 py-0.5 rounded">
              Forecast
            </span>
            <p className="text-sm font-semibold text-black leading-snug">
              You're 16% off your<br />2027 emissions goal
            </p>
          </div>

        </div>

        {/* ── Hero Image at bottom of card ── */}
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-auto object-cover"
        />

      </div>
    </section>
  )
}

export default Hero