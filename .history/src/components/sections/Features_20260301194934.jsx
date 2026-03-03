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
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">

        <h2 className="text-[32px] font-extrabold text-center text-black leading-snug mb-16 font-[heading]">
          Everything you need to measure,<br />
          model, and act on sustainability
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-stretch">

          {/* Left image */}
          <div className="relative w-full md:w-1/2">
            <img
              src={FeatureImage}
              alt="Feature"
              className="w-full h-full object-cover rounded-2xl"
              style={{ minHeight: '420px', maxHeight: '520px' }}
            />
           
          </div>

          {/* Right list */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {features.map((f, i) => (
              <div key={f.number} className={`flex justify-between items-start py-5 ${i !== features.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex flex-col gap-1">
                  <p className="text-[20px] font-bold text-black font-[heading]">{f.title}</p>
                  <p className="text-[14px] text-gray-500 font-[subheading]">{f.desc}</p>
                </div>
                <p className="text-[12px] text-gray-300 ml-8 mt-1 font-[btn]">{f.number}</p>
              </div>
            ))}
            <button className="mt-10 self-start bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn]">
              • Explore features
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features