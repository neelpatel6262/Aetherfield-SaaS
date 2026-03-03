// src/pages/Article.jsx
import React from 'react';
import { motion } from 'motion/react';   // ← only this import added
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/article';
import ArticleImage from '../assets/images/Article.jpg';

// Stagger animation for recent articles
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const Article = () => {
  const { slug } = useParams();
  const post = articles.find(a => a.slug === slug) || articles[0];
  const recentArticles = articles.filter(a => a.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <div className="w-container max-w-container mx-auto px-5 pt-14 pb-10">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-2 mb-6"
        >
          <span className="text-[12px] text-gray-400 font-[btn]">{post.category}</span>
          <span className="text-[12px] text-gray-300">·</span>
          <span className="text-[12px] text-gray-400 font-[btn]">{post.time}</span>
        </motion.div>

        {/* Title – fade + slide up */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-extrabold text-black leading-tight mb-10 font-[heading]"
          style={{ fontSize: 'clamp(32px, 4vw, 56px)', maxWidth: '820px' }}
        >
          {post.title}
        </motion.h1>

        {/* Hero image – fade + gentle scale */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-sm mb-12"
          style={{ height: '480px' }}
        >
          <img
            src={ArticleImage}
            alt={post.title}
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: '#93C5FD', mixBlendMode: 'multiply', opacity: 0.75 }}
          />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Left: Published & Author */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row md:flex-col gap-8 md:gap-6 md:w-[160px] flex-shrink-0"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-gray-400 font-[btn] uppercase tracking-widest">
                Published
              </span>
              <span className="text-[14px] font-semibold text-black font-[btn]">
                {post.published}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-gray-400 font-[btn] uppercase tracking-widest">
                Author
              </span>
              <span className="text-[14px] font-semibold text-black font-[btn]">
                {post.author}
              </span>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 flex flex-col gap-10"
          >
            <p className="text-[16px] text-gray-600 leading-relaxed font-[subheading]">
              {post.desc}
            </p>

            {post.content.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col gap-3 border-t border-gray-100 pt-8"
              >
                <h3 className="text-[20px] font-bold text-black font-[heading]">
                  {section.heading}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed font-[subheading]">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Recent articles */}
      <div className="border-t border-gray-100 mt-20 py-20">
        <div className="w-container max-w-container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-[32px] font-extrabold text-black font-[heading]">
              Recent articles
            </h2>
            <Link
              to="/journal"
              className="text-[12px] text-gray-400 hover:text-black transition underline font-[btn]"
            >
              View all articles
            </Link>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {recentArticles.map(article => (
              <motion.div
                key={article.id}
                variants={item}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col gap-3 group"
              >
                <Link
                  to={`/journal/${article.slug}`}
                  className="flex flex-col gap-3 group no-underline"
                >
                  <div className="w-full overflow-hidden rounded-sm" style={{ height: '220px' }}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <p className="text-[20px] font-semibold text-black leading-snug font-[heading]">
                    {article.title}
                  </p>

                  <p className="text-[12px] text-gray-400 font-[btn]">
                    {article.category} · {article.time}
                  </p>

                  <p className="text-[14px] text-gray-500 leading-relaxed font-[subheading]">
                    {article.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Article;