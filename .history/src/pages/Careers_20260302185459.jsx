// src/pages/Careers.jsx
import React from 'react';
import { motion } from 'motion/react';   // ← only this import added
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

// Stagger animation for job cards
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // each card delayed by 120ms
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const Careers = () => {
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
    >
      <div className="w-container max-w-container mx-auto px-5 py-16">
        {/* Heading – fade + slide up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1
            className="font-extrabold text-black leading-tight font-[heading]"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            Careers at<br />Aetherfield
          </h1>
        </motion.div>

        {/* Job cards – stagger reveal + hover lift */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-4 mx-auto"
          style={{ maxWidth: '820px' }}
        >
          {jobs.map(job => (
            <motion.div
              key={job.id}
              variants={item}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`bg-white px-8 py-8 flex flex-col gap-3 rounded-2xl ${
                job.isOpen
                  ? 'border-2 border-dashed border-gray-300 bg-white/60'
                  : ''
              }`}
              style={{ minHeight: '218px' }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <h2
                    className="text-[20px] font-bold text-black font-[heading]"
                  >
                    {job.title}
                  </h2>

                  <p
                    className="text-[14px] text-black/40"
                    style={{ fontFamily: 'btn, monospace' }}
                  >
                    {job.type} · {job.location}
                  </p>
                </div>

                <Link to={`/careers/${job.id}`} className="flex-shrink-0">
                  <button
                    className="bg-black text-white px-5 py-2.5 hover:opacity-75 transition whitespace-nowrap"
                    style={{ fontFamily: 'btn, monospace', fontSize: '14px', fontWeight: 600 }}
                  >
                    {job.isOpen ? 'Apply now' : 'View role'}
                  </button>
                </Link>
              </div>

              <p
                className="text-[16px] text-gray-500 leading-relaxed font-[subheading]"
                style={{ maxWidth: '620px' }}
              >
                {job.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;