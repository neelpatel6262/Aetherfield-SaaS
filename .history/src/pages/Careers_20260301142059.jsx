import React from 'react'
import { Link } from 'react-router-dom'
import { jobs } from '../data/jobs'

const Careers = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-container max-w-container mx-auto px-5 py-20">

        <h1 className="text-[48px] font-extrabold text-black mb-4 font-[heading]">
          Careers
        </h1>
        <p className="text-[16px] text-gray-500 mb-16 font-[subheading]">
          Join us in building the operating system for sustainable business.
        </p>

        <div className="flex flex-col gap-4">
          {jobs.map(job => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}        // ✅ /careers/:jobId
              className="flex justify-between items-center p-6 border border-gray-100 rounded-xl hover:shadow-md transition no-underline"
            >
              <div className="flex flex-col gap-1">
                <p className="text-[20px] font-bold text-black font-[heading]">
                  {job.title}
                </p>
                <p className="text-[14px] text-gray-400 font-[subheading]">
                  {job.location} · {job.type}
                </p>
              </div>
              <span className="text-[12px] text-gray-400 font-[btn] border border-gray-200 px-3 py-1 rounded-full">
                {job.team}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Careers