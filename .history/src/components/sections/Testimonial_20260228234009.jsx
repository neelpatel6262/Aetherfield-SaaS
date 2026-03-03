import React from 'react'
import TestimonialImage from '../../assets/images/Testimonial.jpg'

const Testimonial = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Left — Blue tinted image */}
          <div className="relative w-full md:w-1/2 flex-shrink-0">
            <img
              src={TestimonialImage}
              alt="Elliot Williams"
              className="w-full h-auto object-cover rounded-2xl"
              style={{ filter: 'grayscale(100%)' }}
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ backgroundColor: '#93C5FD', mixBlendMode: 'multiply', opacity: 0.7 }}
            />
          </div>

          {/* Right — Quote */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <blockquote className="text-[28px] font-bold text-black leading-tight font-[heading]">
              "We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions."
            </blockquote>
            <p className="text-[14px] text-gray-600 mt-4 font-[subheading]">
              Elliot Williams, Head of Sustainability, Flux Materials
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial