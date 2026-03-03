import React from 'react'
import TestimonialImage from '../../assets/images/Testimonial.jpg'

const Testimonial = () => {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-5xl mx-auto">

          {/* Left Column - Image */}
          <div className="relative w-full md:w-1/2 flex-shrink-0">
            <img
              src={TestimonialImage}
              alt="Elliot Williams"
              className="w-full h-auto object-cover rounded-2xl"
              style={{ filter: 'grayscale(100%)' }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ 
                backgroundColor: '#93C5FD', 
                mixBlendMode: 'multiply', 
                opacity: 0.7,
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* Right Column - Quote */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <blockquote
              className="text-2xl md:text-3xl font-bold text-black leading-tight"
              style={{ fontFamily: 'heading, serif' }}
            >
              "We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions."
            </blockquote>
            
            <p
              className="text-sm md:text-base text-gray-600 mt-4"
              style={{ fontFamily: 'subheading, sans-serif' }}
            >
              Elliot Williams, Head of Sustainability, Flux Materials
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial
