import React from 'react'
import { Link } from 'react-router-dom'
import { jobs } from '../data/jobs'

const Careers = () => {
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
    >
      <div className="w-container max-w-container mx-auto px-5 py-16">

        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-[48px] md:text-[56px] font-extrabold text-black leading-tight font-[heading]">
            Careers
          </h1>
          <p className="text-[16px] text-black/60 mt-3 font-[subheading] max-w-xl">
            Join us in building the operating system for sustainable business.
          </p>
        </div>

        {/* Job cards */}
        <div className="flex flex-col gap-6">
          {jobs.map(job => (
            <div
              key={job.id}
              className="bg-white rounded-2xl px-8 py-8 flex flex-col gap-4"
            >
              {/* Title row + button */}
              <div className="flex items-start justify-between gap-6">
                <h2 className="text-[28px] font-extrabold text-black font-[heading] leading-tight">
                  {job.title}
                </h2>
                <Link to={`/careers/${job.id}`} className="flex-shrink-0">
                  <button className="bg-black text-white text-[13px] font-semibold px-5 py-2 rounded-lg hover:opacity-75 transition font-[btn]">
                    View role
                  </button>
                </Link>
              </div>

              {/* Type · location */}
              <p className="text-[14px] text-black/50 font-[btn]">
                {job.type} &nbsp;·&nbsp; {job.location}
              </p>

              {/* Description */}
              <p className="text-[15px] text-gray-600 font-[subheading] leading-relaxed max-w-2xl">
                {job.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Careers