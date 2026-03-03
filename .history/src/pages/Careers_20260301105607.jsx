// src/pages/Careers.jsx
import React from 'react';


const Careers = () => {
  const jobs = [
    {
      title: 'UX Designer',
      location: 'San Francisco, CA',
      type: 'Contract',
      description:
        'Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.',
    },
    {
      title: 'Data Scientist',
      location: 'Denver, CO',
      type: 'Full-time',
      description:
        'Help build the intelligence layer for climate action. You’ll turn complex sustainability data into clear, actionable insights for enterprise teams.',
    },
    {
      title: 'Product Manager',
      location: 'Seattle, WA',
      type: 'Part-time',
      description:
        'Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.',
    },
    {
      title: 'Open Application',
      location: 'Denver, CO',
      type: 'Full-time',
      description:
        "Don't see your role available? Apply for an open application!",
      isOpen: true,
    },
  ];

  const getTypeBadgeStyle = (type) => {
    if (type.toLowerCase().includes('full')) {
      return 'bg-blue-100 text-blue-800 border border-blue-200';
    }
    if (type.toLowerCase().includes('part')) {
      return 'bg-purple-100 text-purple-800 border border-purple-200';
    }
    return 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Careers at Aetherfield
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shape the future of climate intelligence. Join a mission-driven team building scalable tools for sustainability.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className="p-6 pb-4 border-b border-gray-100">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-gray-600">{job.location}</span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeBadgeStyle(
                          job.type
                        )}`}
                      >
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {job.description}
                </p>
              </div>

              {/* Card Footer / Action */}
              <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    job.isOpen
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  {job.isOpen ? 'Apply Now' : 'View Role'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to help drive climate action through intelligent tools?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-lg">
            Explore All Opportunities →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;