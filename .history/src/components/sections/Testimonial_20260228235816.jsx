import React from 'react';
import TestimonialImage from '../../assets/images/Testimonial.jpg';

function Testimonial() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16 lg:items-start">
          {/* Image with overlay */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0">
            <img
              src={TestimonialImage}
              alt="Elliot Williams, Head of Sustainability at Flux Materials"
              className="w-full rounded-2xl object-cover shadow-xl"
              style={{ filter: 'grayscale(100%)' }}
            />

            {/* Blue overlay */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                backgroundColor: '#93C5FD',
                mixBlendMode: 'multiply',
                opacity: 0.7,
              }}
            />
          </div>

          {/* Quote content */}
          <div className="w-full lg:w-1/2">
            <blockquote className="text-2xl font-bold leading-tight text-black md:text-3xl lg:text-4xl">
              “We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions.”
            </blockquote>

            <p className="mt-6 text-base font-medium text-gray-600 md:text-lg">
              Elliot Williams
              <span className="block text-sm font-normal text-gray-500">
                Head of Sustainability, Flux Materials
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;