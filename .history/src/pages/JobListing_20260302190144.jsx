// src/pages/JobListing.jsx
import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import StickerPng from '../assets/images/Sticker.png';

const JobListing = () => {
  const { jobId } = useParams();
  const job = jobs.find(j => j.id === jobId);

  if (!job) return (
    <div className="w-container max-w-container mx-auto px-5 py-32 text-center">
      <h2 className="text-[32px] font-bold text-black font-[heading]">Job not found</h2>
      <Link to="/careers" className="text-[14px] text-black underline font-[btn]">← See all roles</Link>
    </div>
  );

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
    >
      <div className="mx-auto px-5 py-12" style={{ maxWidth: '820px' }}>
        {/* Back link – simple fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Link
            to="/careers"
            className="text-[14px] text-black/50 hover:text-black transition"
            style={{ fontFamily: 'btn, monospace' }}
          >
            ← Back to Careers
          </Link>
        </motion.div>

        {/* Main card – unified transition for all states */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}  // default transition for appear
          whileHover={{
            y: -6,
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            transition: { type: "spring", stiffness: 300, damping: 20, mass: 1 }  // spring only for hover
          }}
          className="bg-white rounded-2xl px-8 py-8 flex flex-col gap-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-[40px] font-bold text-black font-[heading] leading-tight"> 
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
              className="bg-black text-white px-5 py-2.5 hover:opacity-75 transition flex-shrink-0 mt-2"
              style={{ fontFamily: 'btn, monospace', fontSize: '14px', fontWeight: 600 }}
            >
              Apply now
            </button>
          </div>

          {/* Short description */}
          <p className="text-[20px] text-gray-500 leading-relaxed font-[subheading]">
            {job.description}
          </p>

          <div className="border-t border-gray-100" />

          {/* Company description */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] font-bold text-black font-[heading]"> 
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
            <h2 className="text-[20px] font-bold text-black font-[heading]"> 
              About the role
            </h2>
            <p className="text-[16px] text-gray-500 font-[subheading] leading-relaxed">
              {job.aboutRole}
            </p>
          </div>

          {/* Requirements */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] font-bold text-black font-[heading]"> 
              Requirements
            </h2>
            <ul className="flex flex-col gap-2">
              {job.requirements.map((req, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-start gap-2 text-[16px] text-gray-500 font-[subheading]"
                >
                  <span className="mt-[9px] w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                  {req}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company benefits */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[20px] font-bold text-black font-[heading]"> 
              Company benefits
            </h2>
            <div className="flex items-end justify-between gap-4">
              <ul className="flex flex-col gap-2">
                {job.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex items-start gap-2 text-[16px] text-gray-500 font-[subheading]"
                  >
                    <span className="mt-[9px] w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
              <motion.img
                src={StickerPng}
                alt="Aetherfield"
                className="w-28 h-auto object-contain flex-shrink-0 opacity-80 mb-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.8, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobListing;