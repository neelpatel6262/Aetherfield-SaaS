// src/components/sections/Hero.jsx
import React from 'react';
import { motion } from 'motion/react';   // ← only this import added
import HeroImage from '../../assets/images/Hero image.jpg';

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center px-6 pt-16 pb-20 md:pb-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Headline container – overall fade + slight delay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center mt-10 mb-0"
      >
        {/* First line – slide up + fade */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold text-center text-black leading-none tracking-tight font-[Heading, serif]"
        >
          Sustainability insights,
        </motion.h1>

        {/* Second line – slide up + fade with small stagger */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold text-center text-black leading-none tracking-tight font-[Subheading, serif]"
        >
          built for business
        </motion.h1>
      </motion.div>

      {/* Subheadline – fade in delayed */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="mt-6 text-sm md:text-base text-center text-black/50 max-w-md leading-relaxed font-[heading, sans-serif]"
      >
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </motion.p>

      {/* Buttons – stagger fade + slight scale */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        className="flex gap-3 mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="
            flex items-center gap-2
            bg-black text-white
            text-sm font-semibold
            px-7 py-3 
            hover:opacity-75 transition
          "
          style={{ fontFamily: 'btn, monospace' }}
        >
          • Request a demo
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="
            flex items-center gap-2
            bg-black text-white
            text-sm font-semibold
            px-7 py-3 
            hover:opacity-75 transition
          "
          style={{ fontFamily: 'btn, monospace' }}
        >
          • Explore the platform
        </motion.button>
      </motion.div>

      {/* Dashboard image – fade + gentle lift */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        className="
          mt-20 md:mt-32 lg:mt-40 w-full max-w-5xl
          bg-white rounded-t-3xl
          shadow-2xl border border-gray-200
          overflow-hidden
        "
      >
        <img
          src={HeroImage}
          alt="Aetherfield dashboard preview"
          className="w-full h-auto object-cover object-top rounded-t-3xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;