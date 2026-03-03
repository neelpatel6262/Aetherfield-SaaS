import React from 'react'
import CaseStudyImageBG from '../../assets/images/About.jpg'

function CaseStudy() {
  return (
    <section className="w-full bg-white px-6 py-20 md:py-24">
      <div className="w-full mx-auto">
        <div
          className="flex flex-col md:flex-row rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#F6F8FB' }}
        >

        <div className="relative w-full md:w-1/2 overflow-hidden">
          <img
            src={CaseStudyImageBG}
            alt="Acme Inc team"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
        
          <div
            className="absolute inset-0"
            style={{ backgroundColor: '#93C5FD', mixBlendMode: 'multiply', opacity: 0.7 }}
          />
        </div>

      
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 px-8 md:px-12 py-10 md:py-12">

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
            className="self-start flex items-center gap-2 bg-black text-white text-sm font-semibold px-7 py-3 hover:opacity-75 transition"
            style={{ fontFamily: 'btn, monospace' }}
          >
            • Read case study
          </button>

        </div>
      </div>
      </div>
    </section>
  )
}

export default CaseStudy