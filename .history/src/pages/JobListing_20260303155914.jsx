import React from 'react'
import { motion } from 'motion/react'
import { useParams, Link } from 'react-router-dom'
import { jobs } from '../data/jobs'
import StickerPng from '../assets/images/Sticker.png'

const JobListing = () => {
  const { jobId } = useParams()
  const job = jobs.find(j => j.id === jobId)

  if (!job) return (
    <div className="w-container max-w-container mx-auto px-5 py-32 text-center">
      <h2 className="text-[28px] font-bold text-black font-[heading]">Job not found</h2>
      <Link to="/careers" className="text-[14px] text-black underline font-[btn] mt-6 inline-block">← See all roles</Link>
    </div>
  )

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
    >
      <div className="mx-auto px-5 py-12 md:py-16" style={{ maxWidth: '820px' }}>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Link
            to="/careers"
            className="text-[13px] text-black/50 hover:text-black transition font-[btn]"
          >
            ← Back to Careers
          </Link>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white rounded-2xl px-6 md:px-10 py-8 md:py-10 flex flex-col gap-8 shadow-lg"
        >

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1
                className="font-bold text-black font-[heading] leading-tight"
                style={{ fontSize: 'clamp(24px, 5vw, 40px)' }}
              >
                {job.title}
              </h1>
              <p className="text-[14px] md:text-[16px] text-black/50 font-[btn]">
                {job.type} · {job.location}
              </p>
            </div>
            <button
              className="bg-black text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition whitespace-nowrap self-start text-[13px] md:text-[14px] font-semibold"
              style={{ fontFamily: 'btn, monospace' }}
            >
              Apply now
            </button>
          </div>

     
          <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed font-[subheading]">
            {job.description}
          </p>

          <div className="border-t border-gray-200" />


          <div className="flex flex-col gap-3">
            <h2
              className="font-bold text-black font-[heading]"
              style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}
            >
              Company description
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed font-[subheading]">
              At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We're a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.
            </p>
          </div>

 
          <div className="flex flex-col gap-3">
            <h2
              className="font-bold text-black font-[heading]"
              style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}
            >
              About the role
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed font-[subheading]">
              {job.aboutRole}
            </p>
          </div>

        
          <div className="flex flex-col gap-3">
            <h2
              className="font-bold text-black font-[heading]"
              style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}
            >
              Requirements
            </h2>
            <ul className="flex flex-col gap-3">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] md:text-[15px] text-gray-600 font-[subheading]">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

       
          <div className="flex flex-col gap-3">
            <h2
              className="font-bold text-black font-[heading]"
              style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}
            >
              Company benefits
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <ul className="flex flex-col gap-3">
                {job.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] md:text-[15px] text-gray-600 font-[subheading]">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <motion.img
                src={StickerPng}
                alt="Aetherfield"
                className="w-24 md:w-32 h-auto object-contain opacity-80 flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.8, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>

        </motion.div>

   
        <div className="text-center mt-14 mb-8">
          <h2
            className="font-extrabold text-black leading-tight font-[heading] mb-8 mx-auto"
            style={{ fontSize: 'clamp(22px, 4vw, 36px)', maxWidth: '420px' }}
          >
            Ready to help build the future of climate intelligence?
          </h2>
          <button
            className="bg-black text-white px-7 py-3 rounded-md hover:opacity-75 transition text-[13px] md:text-[14px] font-semibold"
            style={{ fontFamily: 'btn, monospace' }}
          >
            • Apply now
          </button>
        </div>

      </div>
    </div>
  )
}

export default JobListing