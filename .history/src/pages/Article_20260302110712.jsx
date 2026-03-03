import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/article'
import ArticleImage from '../assets/images/Article.jpg'

const Article = () => {
  const { slug } = useParams()
  const post = articles.find(a => a.slug === slug) || articles[0]
  const recentArticles = articles.filter(a => a.slug !== post.slug).slice(0, 3)

  return (
    <div className="bg-white min-h-screen">

      {/* ── Header ── */}
      <div className="w-container max-w-container mx-auto px-5 pt-12 pb-8">

        {/* Category · time */}
        <div className="flex gap-2 mb-5">
          <span className="text-[12px] text-gray-400 font-[btn]">{post.category}</span>
          <span className="text-[12px] text-gray-300">·</span>
          <span className="text-[12px] text-gray-400 font-[btn]">{post.time}</span>
        </div>

        {/* Title */}
        <h1
          className="text-[48px] md:text-[56px] font-bold text-black leading-tight mb-8 font-[heading]"
          style={{ maxWidth: '760px' }}
        >
          {post.title}
        </h1>

        {/* Full width blue tinted image */}
        <div className="relative w-full overflow-hidden rounded-sm mb-10" style={{ height: '480px' }}>
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
        </div>

        {/* ── Two column — meta left, body right ── */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">

          {/* Left — narrow meta column */}
          <div className="flex flex-col gap-6 md:w-[160px] flex-shrink-0">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-gray-400 font-[btn] uppercase tracking-wide">
                Published
              </span>
              <span className="text-[13px] font-medium text-black font-[btn]">
                {post.published}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-gray-400 font-[btn] uppercase tracking-wide">
                Author
              </span>
              <span className="text-[13px] font-medium text-black font-[btn]">
                {post.author}
              </span>
            </div>
          </div>

          {/* Right — wide body column */}
          <div className="flex-1 flex flex-col gap-10">

            {/* Intro desc */}
            <p className="text-[16px] text-gray-600 leading-relaxed font-[subheading]">
              {post.desc}
            </p>

            {/* Content sections */}
            {post.content.map((section, i) => (
              <div key={i} className="flex flex-col gap-3">
                <h3 className="text-[18px] font-bold text-black font-[heading]">
                  {section.heading}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed font-[subheading]">
                  {section.body}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ── Recent Articles ── */}
      <div className="border-t border-gray-100 mt-20 py-16">
        <div className="w-container max-w-container mx-auto px-5">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-[28px] font-bold text-black font-[heading]">
              Recent articles
            </h2>
            <Link
              to="/journal"
              className="text-[12px] text-gray-400 hover:text-black transition underline font-[btn]"
            >
              View all articles
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <Link
                key={article.id}
                to={`/journal/${article.slug}`}
                className="flex flex-col gap-3 group"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-full overflow-hidden rounded-sm" style={{ height: '200px' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <p className="text-[16px] font-semibold text-black leading-snug font-[heading]">
                  {article.title}
                </p>
                <p className="text-[12px] text-gray-400 font-[btn]">
                  {article.category} · {article.time}
                </p>
                <p className="text-[13px] text-gray-500 leading-relaxed font-[subheading]">
                  {article.desc}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Article