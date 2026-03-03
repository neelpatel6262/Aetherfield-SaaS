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

        {/* ── Centered heading ── */}
        <div className="text-center mb-12">
          <h1
            className="font-extrabold text-black leading-tight font-[heading]"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            Careers at<br />Aetherfield
          </h1>
        </div>

        {/* ── Job cards ── */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {jobs.map(job => (
            <div
              key={job.id}
              className={`bg-white px-6 py-6 flex flex-col gap-3 rounded-2xl ${
                job.isOpen
                  ? 'border-2 border-dashed border-gray-300 bg-white/60'  // ✅ dashed for open application
                  : ''
              }`}
            >
              {/* Title row + button */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] font-bold text-black font-[heading]">
                    {job.title}
                  </h2>
                  <p className="text-[12px] text-black/40 font-[btn]">
                    {job.type} · {job.location}
                  </p>
                </div>
                <Link to={`/careers/${job.id}`} className="flex-shrink-0">
                  <button className="bg-black text-white text-[12px] font-semibold px-4 py-2 rounded-md hover:opacity-75 transition font-[btn] whitespace-nowrap">
                    {job.isOpen ? 'Apply now' : 'View role'}   {/* ✅ different button text */}
                  </button>
                </Link>
              </div>

              {/* Description */}
              <p className="text-[13px] text-gray-500 font-[subheading] leading-relaxed">
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