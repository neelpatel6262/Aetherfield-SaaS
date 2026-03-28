import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { articles } from '../data/article';
import JournalSticker from '../assets/images/Journal.png';
import CTABanner from '../components/sections/CTABanner';
import useScrollAnimation from '../hooks/useScrollAnimation';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 25 },
  show:   { opacity: 1, y: 0  },
};

const Journal = () => {
  const headerAnim = useScrollAnimation({ duration: 1 })
  const titleAnim  = useScrollAnimation({ duration: 0.7 })
  const { ref: gridRef, inView: gridInView } = useScrollAnimation({ amount: 0.1 })

  return (
    <div className="bg-white min-h-screen">

      <motion.div {...headerAnim} className="w-full bg-[#C8D8F0] flex items-center justify-center py-10">
        <div className="w-container max-w-container px-5">
          <img src={JournalSticker} alt="Aetherfield Journal" className="w-full h-auto object-contain" />
        </div>
      </motion.div>

      <section className="w-container max-w-container mx-auto px-5 py-16">
        <motion.h2 {...titleAnim} className="text-3xl font-bold text-black text-center mb-12 font-[heading]">
          Latest articles
        </motion.h2>

        <motion.div
          ref={gridRef}
          variants={container}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {articles.map(article => (
            <motion.div
              key={article.id}
              variants={item}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex flex-col gap-3 group"
            >
              <Link to={`/journal/${article.slug}`} className="flex flex-col gap-3 group no-underline max-w-full">
                <div className="w-full h-card-img overflow-hidden rounded-sm">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <p className="text-[20px] font-semibold text-black leading-snug mt-2 font-[heading]">{article.title}</p>
                <p className="text-[14px] text-gray-400 font-[btn]">{article.category} · {article.time}</p>
                <p className="text-[14px] text-gray-500 leading-relaxed font-[subheading]">{article.desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Journal;