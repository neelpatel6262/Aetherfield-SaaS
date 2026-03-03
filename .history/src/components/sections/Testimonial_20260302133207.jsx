import React from 'react'
import { testimonials } from '../../data/testimonials'




const Testimonial = () => {

  const t = testimonials[0]

  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-12 items-center">

 
          <div className="relative w-full md:w-1/2 flex-shrink-0">
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-auto object-cover rounded-2xl"
              style={{ filter: 'grayscale(100%)' }}
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ backgroundColor: '#93C5FD', mixBlendMode: 'multiply', opacity: 0.7 }}
            />
          </div>

      
          <div className="w-full md:w-1/2 flex flex-col gap-6">

     
            <span
              className="text-[72px] text-black leading-none font-[heading]"
              style={{ lineHeight: 0.8 }}
            >
              "
            </span>

     
            <p
              className="text-[40px] text-black leading-tight font-[heading]"
              style={{ fontWeight: 400 }}      
            >
              {t.quote}
            </p>

           
            <div className="flex flex-col gap-1 mt-2">
              <p className="text-[16px] font-medium text-black font-[subheading]">
                {t.name}                         
              </p>
              <p className="text-[14px] font-normal text-gray-500 font-[subheading]">
                {t.role}, {t.company}            
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial