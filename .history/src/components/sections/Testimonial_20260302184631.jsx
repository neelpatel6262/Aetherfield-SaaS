// src/components/sections/Testimonial.jsx
import React from 'react';
import { motion } from 'motion/react';   // ← only this import added
import { testimonials } from '../../data/testimonials';

const Testimonial = () => {
  const t = testimonials[0];

  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">
        {/* Entire testimonial card – fade + lift on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}  // start when 30% visible
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Left: Image + overlay – fade + gentle scale */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full md:w-1/2 flex-shrink-0"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-auto object-cover rounded-2xl"
              style={{ filter: 'grayscale(100%)' }}
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                backgroundColor: '#93C5FD',
                mixBlendMode: 'multiply',
                opacity: 0.7,
              }}
            />
          </motion.div>

          {/* Right: Quote + author – fade + slide from right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            {/* Opening quote mark – fade in delayed */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[72px] text-black leading-none font-[heading]"
              style={{ lineHeight: 0.8 }}
            >
              "
            </motion.span>

            {/* Main quote – fade + slight scale */}
            <motion.p
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[40px] text-black leading-tight font-[heading]"
              style={{ fontWeight: 400 }}
            >
              {t.quote}
            </motion.p>

            {/* Author info – fade in delayed */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col gap-1 mt-2"
            >
              <p className="text-[16px] font-medium text-black font-[subheading]">
                {t.name}
              </p>
              <p className="text-[14px] font-normal text-gray-500 font-[subheading]">
                {t.role}, {t.company}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;