import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobs } from '../data/jobs'
import StickerPng from '../assets/images/Sticker.png'

const JobListing = () => {
  const { jobId } = useParams()
  const job = jobs.find(j => j.id === jobId)

  if (!job) return (
    <div className="w-container max-w-container mx-auto px-5 py-32 text-center">
      <h2 className="text-[32px] font-bold text-black mb-4 font-[heading]">Job not found</h2>
      <Link to="/careers" className="text-[14px] text-black underline font-[btn]">← See all roles</Link>
    </div>
  )

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
    >
      <div className="w-container max-w-container mx-auto px-5 py-12">

        {/* Back link */}
        <div className="text-center mb-8">
          <Link
            to="/careers"
            className="text-[13px] text-black/60 hover:text-black transition font-[btn]"
          >
            ← Back to Careers
          </Link>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden">

          {/* Header row — title + apply button */}
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-[28px] md:text-[32px] font-extrabold text-black font-[heading]">
              {job.title}
            </h1>
            <button className="bg-black text-white text-[13px] font-semibold px-5 py-2 hover:opacity-75 transition font-[btn] flex-shrink-0 ml-4">
              • Apply now
            </button>
          </div>

          {/* Subtitle — type · location */}
          <p className="text-[13px] text-gray-400 font-[btn] mb-4">
            {job.type} · {job.location}
          </p>

          {/* Short description */}
          <p className="text-[14px] text-gray-600 font-[subheading] leading-relaxed mb-10 max-w-xl">
            {job.description}
          </p>

          {/* Company description */}
          <div className="mb-8">
            <h2 className="text-[15px] font-bold text-black mb-3 font-[heading]">
              Company description
            </h2>
            <p className="text-[14px] text-gray-600 font-[subheading] leading-relaxed">
              At Aetherfield, we build software that empowers companies to lead with climate accountability.
              Our platform helps sustainability and operations teams make sense of complex environmental
              data—transforming emissions, waste, and energy into measurable, meaningful action. We're a
              mission-driven team of technologists, designers, and scientists working to accelerate the
              shift toward a low-carbon future.
            </p>
          </div>

          {/* About the role */}
          <div className="mb-8">
            <h2 className="text-[15px] font-bold text-black mb-3 font-[heading]">
              About the role
            </h2>
            <p className="text-[14px] text-gray-600 font-[subheading] leading-relaxed">
              {job.aboutRole}
            </p>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-[15px] font-bold text-black mb-3 font-[heading]">
              Requirements
            </h2>
            <ul className="flex flex-col gap-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-gray-600 font-[subheading]">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-4">
            <h2 className="text-[15px] font-bold text-black mb-3 font-[heading]">
              Company benefits
            </h2>
            <ul className="flex flex-col gap-2">
              {job.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-gray-600 font-[subheading]">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Sticker — bottom right */}
          <div className="flex justify-end mt-6">
            <img
              src={StickerPng}
              alt="Aetherfield"
              className="w-32 h-auto object-contain opacity-80"
            />
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 mb-8">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-black mb-8 font-[heading] leading-tight max-w-md mx-auto">
            Ready to help build the future of climate intelligence?
          </h2>
          <button className="bg-black text-white text-[13px] font-semibold px-8 py-3 hover:opacity-75 transition font-[btn]">
            • Apply now
          </button>
        </div>

      </div>
    </div>
  )
}

export default JobListing