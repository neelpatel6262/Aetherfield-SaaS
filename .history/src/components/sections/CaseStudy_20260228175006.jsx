import React from 'react'
import CaseStudyImageBG from '../../assets/images/About.jpg'

function CaseStudy() {
  return (
    <section className="px-10 md:px-20 py-20 bg-white">

      {/* Inner card */}
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#F6F8FB' }}
      >

        {/* ── Left — Blue tinted image ── */}
        <div className="relative w-full md:w-1/2 min-h-[300px] overflow-hidden">
          <img
            src={CaseStudyImageBG}
            alt="Acme Inc team"
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(100%)',
              mixBlendMode: 'multiply',
            }}
          />
          {/* Blue tint overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: '#93C5FD', mixBlendMode: 'multiply', opacity: 0.7 }}
          />
        </div>

        {/* ── Right — Text content ── */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 px-10 py-12">

          <h3
            className="text-xl font-bold text-black"
            style={{ fontFamily: 'heading, serif' }}
          >
            Why Acme Inc chose Aetherfield
          </h3>

          <p
            className="text-sm text-gray-600 leading-relaxed"
            style={{ fontFamily: 'subheading, sans-serif' }}
          >
            With fragmented data and growing reporting pressure, Acme turned
            to Aetherfield to streamline their ESG workflows. The result?
            Faster decisions, fewer spreadsheets, and 34% more coverage.
          </p>

          <button
            className="self-start bg-black text-white text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-75 transition"
            style={{ fontFamily: 'btn, monospace' }}
          >
            Read case study
          </button>

        </div>
      </div>
    </section>
  )
}

export default CaseStudy
