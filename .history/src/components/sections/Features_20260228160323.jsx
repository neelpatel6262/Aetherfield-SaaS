import React from 'react'
import FeatureImage from '../../assets/images/Feature.jpg'

const features = [
  { number: '001', title: 'Track',  desc: 'Emissions, energy, and waste across your value chain' },
  { number: '002', title: 'Model',  desc: 'Forecast performance and goal alignment' },
  { number: '003', title: 'Report', desc: 'Generate ESG disclosures, automate frameworks' },
  { number: '004', title: 'Act',    desc: 'Surface insights and operational next steps' },
]

const Features = () => {
  return (
    <section className="px-10 md:px-20 py-24 bg-white">

      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-black max-w-2xl mx-auto leading-snug mb-16"
        style={{ fontFamily: 'heading, serif' }}
      >
        Everything you need to measure,<br />
        model, and act on sustainability
      </h2>

      {/* Two Columns */}
      <div className="flex flex-col md:flex-row gap-12 items-stretch max-w-5xl mx-auto">

        {/* ── LEFT — Image only with floating card ── */}
        <div className="relative w-full md:w-1/2">

          {/* Image fills entire left side */}
          <img
            src={FeatureImage}
            alt="Sustainability visual"
            className="w-full h-full object-cover rounded-2xl"
            style={{ minHeight: '420px', maxHeight: '520px' }}
          />

          {/* Floating white card over the image */}
          <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl shadow-md px-5 py-4">

            {/* Card top row */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-xs text-gray-400" style={{ fontFamily: 'btn, monospace' }}>
                Energy consumption
              </p>
              <span className="text-gray-300 text-xl">✳</span>
            </div>

            {/* Card bottom row */}
            <div className="flex justify-between items-end">
              <p className="text-3xl font-extrabold text-black" style={{ fontFamily: 'heading, serif' }}>
                583.7
                <span className="text-sm font-normal text-gray-400 ml-1">MWh</span>
              </p>
              <p className="text-sm font-semibold text-blue-500" style={{ fontFamily: 'btn, monospace' }}>
                +12.4%
              </p>
            </div>

          </div>
        </div>

        {/* ── RIGHT — Numbered feature list ── */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">

          {features.map((f, index) => (
            <div
              key={f.number}
              className={`flex justify-between items-start py-5 ${
                index !== features.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-black" style={{ fontFamily: 'heading, serif' }}>
                  {f.title}
                </p>
                <p className="text-sm text-gray-500" style={{ fontFamily: 'subheading, sans-serif' }}>
                  {f.desc}
                </p>
              </div>

              <p className="text-xs text-gray-300 ml-8 mt-1 flex-shrink-0" style={{ fontFamily: 'btn, monospace' }}>
                {f.number}
              </p>
            </div>
          ))}

          {/* Button */}
          <button
            className="mt-10 self-start flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-75 transition"
            style={{ fontFamily: 'btn, monospace' }}
          >
            • Explore features
          </button>

        </div>
      </div>
    </section>
  )
}

export default Features