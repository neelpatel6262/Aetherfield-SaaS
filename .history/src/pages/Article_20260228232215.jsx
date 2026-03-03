import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/article'
import ArticleHero from '../assets/images/Article.jpg'

const Article = () => {
  const { slug } = useParams()
  const post = articles.find(a => a.slug === slug) || articles[0]
  const recentArticles = articles.filter(a => a.slug !== post.slug).slice(0, 3)

  return (
    <div className="bg-white min-h-screen">

      {/* ── Article Content — matches navbar px-10 ── */}
      <div className="max-w-3xl mx-auto px-10 pt-16 pb-10">

        {/* Category + Tag */}
        <div className="flex gap-2 mb-4">
          <span className="text-xs text-gray-400" style={{ fontFamily: 'btn, monospace' }}>
            {post.category}
          </span>
          <span className="text-xs text-gray-300">·</span>
          <span className="text-xs text-gray-400" style={{ fontFamily: 'btn, monospace' }}>
            {post.tag}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-black leading-tight mb-10"
          style={{ fontFamily: 'heading, serif' }}
        >
          {post.title}
        </h1>

        {/* Blue tinted hero image — full width of container */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <img
            src={ArticleHero}
            alt={post.title}
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: '#93C5FD', mixBlendMode: 'multiply', opacity: 0.75 }}
          />
        </div>

        {/* Meta row — Published + Author side by side */}
        <div className="flex gap-10 mb-10 border-b border-gray-100 pb-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400" style={{ fontFamily: 'btn, monospace' }}>
              Published
            </span>
            <span className="text-xs font-semibold text-black" style={{ fontFamily: 'btn, monospace' }}>
              {post.published}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400" style={{ fontFamily: 'btn, monospace' }}>
              Author
            </span>
            <span className="text-xs font-semibold text-black" style={{ fontFamily: 'btn, monospace' }}>
              {post.author}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400" style={{ fontFamily: 'btn, monospace' }}>
              Read time
            </span>
            <span className="text-xs font-semibold text-black" style={{ fontFamily: 'btn, monospace' }}>
              {post.time}
            </span>
          </div>
        </div>

        {/* Intro desc */}
        <p
          className="text-base text-gray-600 leading-relaxed mb-12"
          style={{ fontFamily: 'subheading, sans-serif' }}
        >
          {post.desc}
        </p>

        {/* Content Sections */}
        <div className="flex flex-col gap-10">
          {post.content.map((section, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h3
                className="text-xl font-bold text-black"
                style={{ fontFamily: 'heading, serif' }}
              >
                {section.heading}
              </h3>
              <p
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: 'subheading, sans-serif' }}
              >
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Recent Articles — matches navbar px-10 ── */}
      <div className="border-t border-gray-100 mt-16 py-16 px-10 max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <h2
            className="text-2xl font-bold text-black"
            style={{ fontFamily: 'heading, serif' }}
          >
            Recent articles
          </h2>
          <Link
            to="/journal"
            className="text-xs text-gray-400 hover:text-black transition underline"
            style={{ fontFamily: 'btn, monospace' }}
          >
            View all articles
          </Link>
        </div>

        {/* 3 col grid — same as Journal page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentArticles.map(article => (
            <Link
              key={article.id}
              to={`/journal/${article.slug}`}
              className="flex flex-col gap-3 group"
              style={{ textDecoration: 'none' }}
            >
              <div className="w-full h-44 overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <p
                className="text-sm font-semibold text-black leading-snug"
                style={{ fontFamily: 'heading, serif' }}
              >
                {article.title}
              </p>
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: 'btn, monospace' }}
              >
                {article.category} · {article.time}
              </p>
              <p
                className="text-xs text-gray-500 leading-relaxed"
                style={{ fontFamily: 'subheading, sans-serif' }}
              >
                {article.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Article