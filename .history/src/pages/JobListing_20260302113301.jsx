import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobs } from '../data/jobs'
import StickerPng from '../assets/images/Sticker.png'

const JobListing = () => {
  const { jobId } = useParams()
  const job = jobs.find(j => j.id === jobId)

  if (!job) return (
    <div className="w-container max-w-container mx-auto px-5 py-32 text-center">
      <h2 className="text-[32px] font-bold text-black font-[heading]">Job not found</h2>
      <Link to="/careers" className="text-[14px] text-black underline font-[btn]">← See all roles</Link>
    </div>
  )

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
    >
      <div className="mx-auto px-5 py-12" style={{ maxWidth: '820px' }}>

        {/* Back link */}
        <div className="text-center mb-8">
          <Link
            to="/careers"
            className="text-[14px] text-black/50 hover:text-black transition"
            style={{ fontFamily: 'btn, monospace' }}
          >
            ← Back to Careers
          </Link>
        </div>

        {/* ── Main card ── */}
        <div className="bg-white rounded-2xl px-8 py-8 flex flex-col gap-8">

          {/* Header — title 40px + apply btn */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-[40px] font-bold text-black font-[heading] leading-tight"> {/* ✅ 40px */}
                {job.title}
              </h1>
              <p
                className="text-[16px] text-black/40"
                style={{ fontFamily: 'btn, monospace' }}
              >
                {job.type} · {job.location}
              </p>
            </div>
            <button
              className="bg-black text-white px-5 py-2.5 rounded-md hover:opacity-75 transition flex-shrink-0 mt-2"
              style={{ fontFamily: 'btn, monospace', fontSize: '14px', fontWeight: 600 }}
            >
              Apply now
            </button>
          </div>

          {/* Short desc — 20px */}
          <p className="text-[20px] text-gray-500 leading-relaxed font-[subheading]"> {/* ✅ 20px */}
            {job.description}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Company description */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] font-bold text-black font-[heading]"> {/* ✅ 20px */}
              Company description
            </h2>
            <p className="text-[16px] text-gray-500 font-[subheading] leading-relaxed">
              At Aetherfield, we build software that empowers companies to lead with climate
              accountability. Our platform helps sustainability and operations teams make sense of
              complex environmental data—transforming emissions, waste, and energy metrics into
              measurable, meaningful action. We're a mission-driven team of technologists, designers,
              and scientists working to accelerate the shift toward a low-carbon future.
            </p>
          </div>

          {/* About the role */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] font-bold text-black font-[heading]"> {/* ✅ 20px */}
              About the role
            </h2>
            <p className="text-[16px] text-gray-500 font-[subheading] leading-relaxed">
              {job.aboutRole}
            </p>
          </div>

          {/* Requirements */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] font-bold text-black font-[heading]"> {/* ✅ 20px */}
              Requirements
            </h2>
            <ul className="flex flex-col gap-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-[16px] text-gray-500 font-[subheading]">
                  <span className="mt-[9px] w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] font-bold text-black font-[heading]"> {/* ✅ 20px */}
              Company benefits
            </h2>
            <div className="flex items-end justify-between gap-4">
              <ul className="flex flex-col gap-2">
                {job.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-[16px] text-gray-500 font-[subheading]">
                    <span className="mt-[9px] w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <img
                src={StickerPng}
                alt="Aetherfield"
                className="w-28 h-auto object-contain flex-shrink-0 opacity-80 mb-2"
              />
            </div>
          </div>

        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-16 mb-8">
          <h2
            className="font-extrabold text-black leading-tight font-[heading] mb-8 mx-auto"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', maxWidth: '460px' }}
          >
            Ready to help build the future of climate intelligence?
          </h2>
          <button
            className="bg-black text-white px-8 py-3 hover:opacity-75 transition"
            style={{ fontFamily: 'btn, monospace', fontSize: '14px', fontWeight: 600 }}
          >
            • Apply now
          </button>
        </div>

      </div>
    </div>
  )
}

export default JobListing