// src/components/sections/CaseStudy.jsx
import React from 'react';
import { motion } from 'motion/react';   // ← only this import added
import CaseStudyImageBG from '../../assets/images/About.jpg';

function CaseStudy() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Entire card – fade + slight lift on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}  // start when 30% visible
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          className="overflow-hidden rounded-2xl bg-[#F6F8FB]"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left: Image + overlay – fade + gentle scale */}
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full md:w-1/2"
            >
              <img
                src={CaseStudyImageBG}
                alt="Acme Inc team working together"
                className="h-full w-full object-cover"
                style={{ minHeight: '400px', filter: 'grayscale(100%)' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: '#93C5FD',
                  mixBlendMode: 'multiply',
                  opacity: 0.7,
                }}
              />
            </motion.div>

            {/* Right: Text + button – fade + slide from right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex w-full flex-col justify-center gap-6 px-8 py-12 md:w-1/2 md:px-12 lg:px-16"
            >
              <h3 className="text-2xl font-bold text-black md:text-3xl">
                Why Acme Inc chose Aetherfield
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                With fragmented data and growing reporting pressure, Acme turned to
                Aetherfield to streamline their ESG workflows. The result? Faster
                decisions, fewer spreadsheets, and 34% more coverage.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  self-start bg-black px-7 py-3 
                  text-sm font-semibold text-white 
                  transition hover:bg-black/90 active:opacity-80
                "
              >
                Read case study →
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudy;