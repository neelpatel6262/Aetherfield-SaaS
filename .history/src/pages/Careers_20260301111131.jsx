// src/pages/Careers.jsx
import React from 'react';
import { jobs } from '../data/jobs';

const Careers = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)',
        minHeight: '100vh',
      }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Careers at
            <br className="hidden sm:block" />
            Aetherfield
          </h1>
        </div>

        {/* Job Cards */}
        <div className="space-y-8 md:space-y-10">
          {jobs.map((job, index) => {
            const isLast = index === jobs.length - 1;

            return (
              <div
                key={index}
                className={`
                  rounded-xl shadow-sm hover:shadow-md transition-all duration-200
                  ${isLast 
                    ? 'bg-white/70 backdrop-blur-sm border border-gray-300/50 opacity-90' 
                    : 'bg-white'
                  }
                `}
              >
                {/* Dotted line ONLY above the last card */}
                {isLast && (
                  <div className="h-0.5 w-full border-t-2 border-dotted border-gray-500 mx-auto" />
                )}

                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    {/* Title + meta */}
                    <div className="flex-1">
                      <h2 className={`text-2xl md:text-3xl font-semibold mb-2 ${
                        isLast ? 'text-gray-800' : 'text-gray-900'
                      }`}>
                        {job.title}
                      </h2>
                      <p className="text-gray-700 text-base md:text-lg">
                        {job.type} <span className="mx-2">·</span> {job.location}
                      </p>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0 mt-4 md:mt-0">
                      <button
                        className={`
                          px-7 py-3 font-medium rounded-md transition-colors text-base md:text-lg whitespace-nowrap
                          ${isLast 
                            ? 'bg-gray-800 text-white hover:bg-gray-900' 
                            : 'bg-black text-white hover:bg-gray-900'
                          }
                        `}
                      >
                        {job.buttonText}
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-gray-700 leading-relaxed text-base md:text-lg">
                    {job.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small footer note */}
        <div className="mt-12 text-center text-gray-700 text-lg">
          <p>Join us to build intelligent tools for climate action.</p>
        </div>
      </div>
    </div>
  );
};

export default Careers;