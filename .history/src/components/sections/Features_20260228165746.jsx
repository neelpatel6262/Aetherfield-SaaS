import React from 'react'
import FeatureImage from '../../assets/images/Feature.jpg'

const features = [
  { number: '001', title: 'Track', desc: 'Emissions, energy, and waste across your value chain' },
  { number: '002', title: 'Model', desc: 'Forecast performance and goal alignment' },
  { number: '003', title: 'Report', desc: 'Generate ESG disclosures, automate frameworks' },
  { number: '004', title: 'Act', desc: 'Surface insights and operational next steps' },
]

const Features = () => {
  return (
    <section className="w-1200 bg-white px-6 pb-16 pt-20 flex justify-center">
      <div className="w-full">

        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-black leading-snug mb-12 font-[heading,serif]"
        >
          Everything you need to measure,<br />
          model, and act on sustainability
        </h2>


        <div className="flex flex-col md:flex-row gap-10 items-stretch">


          <div className="relative w-full md:w-1/2">


            <img
              src={FeatureImage}
              alt="Sustainability visual"
              className="w-full h-full object-cover rounded-2xl"
              style={{ minHeight: '420px', maxHeight: '520px' }}
            />


            <div className="absolute bottom-5 left-5 right-5 bg-white rounded-xl shadow-md px-5 py-4">


              <div className="flex justify-between items-center mb-6">
                <p className="text-xs text-gray-400" style={{ fontFamily: 'btn, monospace' }}>
                  Energy consumption
                </p>
                <span className="text-gray-300 text-xl">✳</span>
              </div>

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


          <div className="w-full md:w-1/2 flex flex-col justify-center">

            {features.map((f, index) => (
              <div
                key={f.number}
                className={`flex justify-between items-start py-5 ${index !== features.length - 1 ? 'border-b border-gray-200' : ''
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

                <p className="text-xs text-gray-300 ml-8 mt-1 " style={{ fontFamily: 'btn, monospace' }}>
                  {f.number}
                </p>
              </div>
            ))}

            {/* Button */}
            <button
              className="mt-10 self-start flex items-center gap-2 bg-black text-white text-sm font-semibold px-7 py-3 hover:opacity-75 transition"
              style={{ fontFamily: 'btn, monospace' }}
            >
              • Explore features
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Features