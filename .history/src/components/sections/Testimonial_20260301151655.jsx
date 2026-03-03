import React from 'react'
import { testimonials } from '../../data/testimonials'

const Testimonial = () => {
  const t = testimonials[0]

  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Image */}
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

          {/* Quote */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <blockquote className="text-[28px] font-bold text-black leading-tight font-[heading]">
              "{t.quote}"
            </blockquote>
            <p className="text-[14px] text-gray-600 mt-4 font-[subheading]">
              {t.name}, {t.role}, {t.company}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial