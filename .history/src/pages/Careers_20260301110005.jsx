// src/pages/Careers.jsx
import React from 'react';
import { jobs } from '../data/jobs';  // ← importing your data file

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Outer dashed container matching screenshot style */}
        <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 md:p-10 lg:p-12 bg-white/80 shadow-xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Careers at
              <br className="hidden sm:block" />
              <span className="text-cyan-600">Aetherfield</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Shape the tools that drive climate intelligence.
            </p>
          </div>

          {/* Job Cards */}
          <div className="space-y-8 md:space-y-10">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-xl border border-gray-200 shadow-sm 
                  hover:shadow-md transition-shadow duration-200
                  ${job.isOpen ? 'border-t-2 border-dashed border-gray-300 pt-10' : ''}
                `}
              >
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    {/* Title + location/type */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h2>
                      <p className="text-gray-600 text-base md:text-lg">
                        {job.type} <span className="mx-2">•</span> {job.location}
                      </p>
                    </div>

                    {/* Button */}
                    <div>
                      <button
                        className="
                          px-7 py-3 bg-black text-white 
                          font-medium rounded-lg 
                          hover:bg-gray-900 transition-colors
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
            ))}
          </div>

          {/* Optional subtle footer note */}
          <div className="mt-12 text-center text-gray-600 text-lg">
            <p>Help us build a more sustainable future with intelligent tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;