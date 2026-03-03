import React from 'react'
import CaseStudyImageBG from '../../assets/images/About.jpg'

function CaseStudy() {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#F6F8FB]">

          <div className="relative w-full md:w-1/2 overflow-hidden">
            <img
              src={CaseStudyImageBG}
              alt="Acme Inc team"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%)', minHeight: '400px' }}
            />
            <div className="absolute inset-0" style={{ backgroundColor: '#93C5FD', mixBlendMode: 'multiply', opacity: 0.7 }} />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 px-12 py-12">
            <h3 className="text-[24px] font-bold text-black font-[heading]">
              Why Acme Inc chose Aetherfield
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed font-[subheading]">
              With fragmented data and growing reporting pressure, Acme turned to Aetherfield to streamline their ESG workflows. The result? Faster decisions, fewer spreadsheets, and 34% more coverage.
            </p>
            <button className="self-start bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn]">
              • Read case study
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CaseStudy