import React from 'react';
import { motion } from 'motion/react';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center mt-10 mb-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-extrabold text-center text-black leading-tight tracking-tight font-[subheading]"
          style={{ fontSize: 'clamp(36px, 8vw, 80px)' }}   
        >
          Sustainability insights,
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="font-extrabold text-center text-black leading-tight tracking-tight font-[btn]"
          style={{ fontSize: 'clamp(36px, 8vw, 80px)' }}   
        >
          built for business
        </motion.h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="mt-6 text-sm md:text-base text-center text-black/50 max-w-md leading-relaxed font-[heading]"
      >
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-sm sm:max-w-none sm:w-auto"  
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-black text-white text-sm font-semibold px-7 py-3 hover:opacity-75 transition w-full sm:w-auto"
          style={{ fontFamily: 'btn, monospace' }}
        >
          • Request a demo
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-black text-white text-sm font-semibold px-7 py-3 hover:opacity-75 transition w-full sm:w-auto"
          style={{ fontFamily: 'btn, monospace' }}
        >
          • Explore the platform
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        className="mt-20 md:mt-32 lg:mt-40 w-full max-w-5xl bg-white rounded-t-3xl shadow-2xl border border-gray-200 overflow-hidden"
      >
        <img
          src={HeroImage}
          alt="Aetherfield dashboard preview"
          className="w-full h-auto"
          loading="eager"
          fetchpriority="high"
        />
      </motion.div>
    </section>
  );
};

export default Hero;