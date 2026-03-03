import React from 'react';
import CaseStudyImageBG from '../../assets/images/About.jpg';

function CaseStudy() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#F6F8FB]">
          <div className="flex flex-col md:flex-row">
            {/* Image column */}
            <div className="relative w-full md:w-1/2">
              <img
                src={CaseStudyImageBG}
                alt="Acme Inc team working together"
                className="h-full w-full object-cover"
                style={{ minHeight: '400px', filter: 'grayscale(100%)' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: '#93C5FD',
                  mixBlendMode: 'multiply',
                  opacity: 0.7,
                }}
              />
            </div>

            {/* Content column */}
            <div className="flex w-full flex-col justify-center gap-6 px-8 py-12 md:w-1/2 md:px-12 lg:px-16">
              <h3 className="text-2xl font-bold text-black md:text-3xl">
                Why Acme Inc chose Aetherfield
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                With fragmented data and growing reporting pressure, Acme turned to
                Aetherfield to streamline their ESG workflows. The result? Faster
                decisions, fewer spreadsheets, and 34% more coverage.
              </p>

              <button
                className="
                  self-start rounded-full bg-black px-7 py-3 
                  text-sm font-semibold text-white 
                  transition hover:bg-black/90 active:opacity-80
                "
              >
                Read case study →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;