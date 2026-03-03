import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobs } from '../data/jobs'

const JobListing = () => {
  const { jobId } = useParams()                    // ✅ reads :jobId from URL
  const job = jobs.find(j => j.id === jobId)

  if (!job) return (
    <div className="w-container max-w-container mx-auto px-5 py-20">
      <p className="text-[16px] text-gray-500 font-[subheading]">
        Job not found.{' '}
        <Link to="/careers" className="underline text-black">
          See all roles
        </Link>
      </p>
    </div>
  )

  return (
    <div className="bg-white min-h-screen">
      <div className="w-container max-w-container mx-auto px-5 py-20">

        {/* Back link */}
        <Link
          to="/careers"
          className="text-[14px] text-gray-400 hover:text-black transition font-[btn]"
        >
          ← Back to Careers
        </Link>

        {/* Header */}
        <div className="mt-8 mb-10 border-b border-gray-100 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[12px] text-gray-400 border border-gray-200 px-3 py-1 rounded-full font-[btn]">
              {job.team}
            </span>
            <span className="text-[12px] text-gray-400 border border-gray-200 px-3 py-1 rounded-full font-[btn]">
              {job.type}
            </span>
          </div>

          <h1 className="text-[40px] font-extrabold text-black mb-2 font-[heading]">
            {job.title}
          </h1>
          <p className="text-[14px] text-gray-400 font-[btn]">
            {job.location}
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl">
          <h2 className="text-[24px] font-bold text-black mb-4 font-[heading]">
            About this role
          </h2>
          <p className="text-[16px] text-gray-600 leading-relaxed mb-12 font-[subheading]">
            {job.description}
          </p>

          {/* Apply button */}
          <button className="bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn]">
            • {job.buttonText}
          </button>
        </div>

      </div>
    </div>
  )
}

export default JobListing