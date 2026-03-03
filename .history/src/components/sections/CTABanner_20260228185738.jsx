import React from 'react'

const CTABanner = () => {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 bg-gray-100 py-20 md:py-28">
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto text-center">
          <h2
            className="text-8xl md:text-6xl font-extrabold text-black leading-tight tracking-tight align-top"
            style={{ fontFamily: 'heading, serif' }}
          >
            Ready to operationalize your sustainability goals?
          </h2>
          
          <button
            className="bg-black text-white text-sm font-semibold px-7 py-3 hover:opacity-75 transition"
            style={{ fontFamily: 'btn, monospace' }}
          >
            • Request a demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
