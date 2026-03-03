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
                  bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200
                  ${isLast ? 'border-t-2 border-dashed border-gray-400 pt-10' : ''}
                `}
              >
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    {/* Left: Title + meta */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h2>
                      <p className="text-gray-700 text-base md:text-lg">
                        {job.type} <span className="mx-2">·</span> {job.location}
                      </p>
                    </div>

                    {/* Right: Button */}
                    <div className="flex-shrink-0 mt-4 md:mt-0">
                      <button
                        className="
                          px-7 py-3 bg-black text-white font-medium
                          rounded-md hover:bg-gray-900 transition-colors
                          text-base md:text-lg whitespace-nowrap
                        "
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

       
      </div>
    </div>
  );
};

export default Careers;