import React from 'react';
import { motion } from 'motion/react';
import { testimonials } from '../../data/testimonials';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Testimonial = () => {
  const t = testimonials[0];

  const imgAnim    = useScrollAnimation({ duration: 1 })
  const quoteAnim  = useScrollAnimation({ duration: 0.6, delay: 0.4 })
  const textAnim   = useScrollAnimation({ duration: 0.7, delay: 0.5 })
  const nameAnim   = useScrollAnimation({ duration: 0.6, delay: 0.7 })

  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          <motion.div {...imgAnim} className="relative w-full md:w-1/2 flex-shrink-0">
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-auto object-cover rounded-2xl"
              style={{ filter: 'grayscale(100%)' }}
            />
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ backgroundColor: '#93C5FD', mixBlendMode: 'multiply', opacity: 0.7 }} />
          </motion.div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.span {...quoteAnim} className="text-[72px] text-black font-[heading]" style={{ lineHeight: 0.8 }}>
              "
            </motion.span>
            <motion.p {...textAnim} className="text-[40px] text-black leading-tight font-[heading]" style={{ fontWeight: 400 }}>
              {t.quote}
            </motion.p>
            <motion.div {...nameAnim} className="flex flex-col gap-1 mt-2">
              <p className="text-[16px] font-medium text-black font-[subheading]">{t.name}</p>
              <p className="text-[14px] font-normal text-gray-500 font-[subheading]">{t.role}, {t.company}</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;