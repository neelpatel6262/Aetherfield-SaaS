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
      <h2 className="text-4xl font-bold text-black font-[heading]">Job not found</h2>
      <Link to="/careers" className="text-base text-black underline font-[btn] mt-4 inline-block">← See all roles</Link>
    </div>
  );

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
    >
      <div className="mx-auto px-5 py-12" style={{ maxWidth: '820px' }}>
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <Link
            to="/careers"
            className="text-base text-black/60 hover:text-black transition font-[btn]"
          >
            ← Back to Careers
          </Link>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20, mass: 1 }}
          className="bg-white rounded-2xl px-8 py-10 md:py-12 flex flex-col gap-10 shadow-lg"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-5xl font-bold text-black font-[heading] leading-tight">
                {job.title}
              </h1>
              <p className="text-lg text-black/50 font-[btn]">
                {job.type} · {job.location}
              </p>
            </div>
            <button
              className="bg-black text-white px-8 py-3 text-base font-semibold hover:opacity-90 transition whitespace-nowrap rounded-lg"
              style={{ fontFamily: 'btn, monospace' }}
            >
              Apply now
            </button>
          </div>

          {/* Short description – consistently 20px */}
          <p className="text-xl text-gray-600 leading-relaxed font-[subheading]">
            {job.description}
          </p>

          <div className="border-t border-gray-200" />

          {/* Company description – heading now text-2xl (24px base) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black font-[heading]">
              Company description
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-[subheading]">
              At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability and operations teams make sense of complex environmental data—transforming emissions, waste, and energy metrics into measurable, meaningful action. We're a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.
            </p>
          </div>

          {/* About the role – heading text-2xl */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black font-[heading]">
              About the role
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-[subheading]">
              {job.aboutRole}
            </p>
          </div>

          {/* Requirements – heading text-2xl */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black font-[heading]">
              Requirements
            </h2>
            <ul className="flex flex-col gap-3">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-600 font-[subheading]">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Company benefits – heading text-2xl */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black font-[heading]">
              Company benefits
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <ul className="flex flex-col gap-3">
                {job.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-gray-600 font-[subheading]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <motion.img
                src={StickerPng}
                alt="Aetherfield"
                className="w-32 md:w-40 h-auto object-contain opacity-80"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.8, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobListing;