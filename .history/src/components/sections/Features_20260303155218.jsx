import React from 'react';
import { motion } from 'motion/react';
import FeatureImage from '../../assets/images/Feature.jpg';

const features = [
  { number: '001', title: 'Track',  desc: 'Emissions, energy, and waste across your value chain' },
  { number: '002', title: 'Model',  desc: 'Forecast performance and goal alignment' },
  { number: '003', title: 'Report', desc: 'Generate ESG disclosures, automate frameworks' },
  { number: '004', title: 'Act',    desc: 'Surface insights and operational next steps' },
];

const Features = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-extrabold text-center text-black leading-tight mb-16 font-[subheading]"
          style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}   
        >
          Everything you need to measure,{' '}
          <br className="hidden md:block" />
          model, and act on sustainability
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-stretch">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full md:w-1/2"
          >
            <img
              src={FeatureImage}
              alt="Feature"
              loading="lazy"
              decoding="async"
              className="w-full object-cover rounded-2xl"
              style={{ height: 'clamp(260px, 40vw, 520px)' }}   
            />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.number}
                variants={item}
                className={`flex justify-between items-start py-5 ${i !== features.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-[22px] font-bold text-black font-[heading]">{f.title}</p>
                  <p className="text-[16px] text-gray-500 font-[subheading]">{f.desc}</p>
                </div>
                <p className="text-[16px] text-gray-600 ml-8 mt-1 font-[btn]">{f.number}</p>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 self-start bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn]"
            >
              • Explore features
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;