import React from 'react';
import { motion } from 'motion/react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function CTABanner() {
  const cardAnim   = useScrollAnimation({ duration: 0.8 })
  const titleAnim  = useScrollAnimation({ duration: 0.7, delay: 0.1 })
  const btnAnim    = useScrollAnimation({ duration: 0.6, delay: 0.3 })

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <motion.div
          {...cardAnim}
          whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
          className="rounded-2xl bg-gray-100 px-6 py-16 text-center md:py-20 lg:py-24 lg:px-12"
        >
          <motion.h2
            {...titleAnim}
            className="mx-auto mb-8 max-w-3xl text-3xl font-extrabold leading-tight text-black md:text-4xl lg:text-5xl"
          >
            Ready to operationalize your sustainability goals?
          </motion.h2>

          <motion.button
            {...btnAnim}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-black/90 active:opacity-80 md:px-10 md:py-4 md:text-lg"
          >
            Request a demo →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default CTABanner;