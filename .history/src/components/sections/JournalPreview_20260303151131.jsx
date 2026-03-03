import React from 'react';
import { motion } from 'motion/react';  
import { Link } from 'react-router-dom';
import { articles } from '../../data/article';
import Sticker from '../../assets/images/Sticker.png';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, 
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const JournalPreview = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[32px] font-extrabold text-black text-center mb-16 font-[heading]"
        >
          From the journal
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
         
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 pt-2"
          >
            <img
              src={Sticker}
              alt="Aetherfield Journal"
              className="w-[200px] h-auto object-contain"
               loading="lazy"       
              decoding="async"      
            />
          </motion.div>

 
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 flex flex-col"
          >
            {articles.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.id}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className={`flex flex-row gap-5 items-center py-6 w-full hover:opacity-80 transition no-underline ${
                  index !== 2 ? 'border-b border-gray-200' : ''
                }`}
              >
                <Link
                  to={`/journal/${article.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex flex-row gap-5 items-center w-full no-underline"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-28 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-[20px] font-semibold text-black leading-snug font-[heading]">
                      {article.title}
                    </p>
                    <p className="text-[14px] text-gray-400 font-[subheading]">
                      {article.category} · {article.time}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-10"
            >
              <Link to="/journal">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn]"
                >
                  • View all articles
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JournalPreview;