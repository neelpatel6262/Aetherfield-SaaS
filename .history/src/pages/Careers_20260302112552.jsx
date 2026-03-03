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
        <div className="flex flex-col gap-4 mx-auto" style={{ maxWidth: '820px' }}>
          {jobs.map(job => (
            <div
              key={job.id}
              className={`bg-white px-8 py-8 flex flex-col gap-3 rounded-2xl ${
                job.isOpen
                  ? 'border-2 border-dashed border-gray-300 bg-white/60'
                  : ''
              }`}
              style={{ minHeight: '218px' }}          // ✅ card height 218px
            >
              {/* Title row + button */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex flex-col gap-2">

                  {/* ✅ Title 20px */}
                  <h2
                    className="text-[20px] font-bold text-black font-[heading]"
                  >
                    {job.title}
                  </h2>

                  {/* ✅ Meta 14px */}
                  <p
                    className="text-[14px] text-black/40"
                    style={{ fontFamily: 'btn, monospace' }}
                  >
                    {job.type} · {job.location}
                  </p>

                </div>

                {/* ✅ Button 14px with btn font */}
                <Link to={`/careers/${job.id}`} className="flex-shrink-0">
                  <button
                    className="bg-black text-white px-5 py-2.5 hover:opacity-75 transition whitespace-nowrap"
                    style={{ fontFamily: 'btn, monospace', fontSize: '14px', fontWeight: 600 }}
                  >
                    {job.isOpen ? 'Apply now' : 'View role'}
                  </button>
                </Link>
              </div>

              {/* ✅ Description 16px */}
              <p
                className="text-[16px] text-gray-500 leading-relaxed font-[subheading]"
                style={{ maxWidth: '620px' }}
              >
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