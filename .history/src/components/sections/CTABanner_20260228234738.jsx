import React from 'react'

const CTABanner = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">
        <div className="bg-gray-100 py-24 rounded-2xl flex flex-col items-center gap-6 text-center px-10">
          <h2 className="text-[40px] font-extrabold text-black leading-tight max-w-xl font-[heading]">
            Ready to operationalize your sustainability goals?
          </h2>
          <button className="bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn]">
            • Request a demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTABanner