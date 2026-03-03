import React from 'react'
import { Link } from 'react-router-dom'             // ✅ ADD
import { articles } from '../data/article'           // ✅ ADD — removes local array
import JournalSticker from '../assets/images/Journal.png'
import CTABanner from '../components/sections/CTABanner'

const Journal = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Sticker Banner */}
      <div className="w-full bg-[#C8D8F0] flex items-center justify-center py-10 px-6">
        <img
          src={JournalSticker}
          alt="Aetherfield Journal"
          className="w-full max-w-2xl h-auto object-contain"
        />
      </div>

      {/* Latest Articles */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2
          className="text-3xl font-bold text-black text-center mb-12"
          style={{ fontFamily: 'heading, serif' }}
        >
          Latest articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {articles.map(article => (

            <Link                                          // ✅ was <div>
              to={`/journal/${article.slug}`}              // ✅ slug from data file
              key={article.id}
              className="flex flex-col gap-3 group"
              style={{ textDecoration: 'none' }}
            >
              <div className="w-full h-52 overflow-hidden rounded-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <p
                className="text-base font-semibold text-black leading-snug"
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
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: 'subheading, sans-serif' }}
              >
                {article.desc}
              </p>
            </Link>

          ))}
        </div>
      </div>

      <CTABanner />
    </div>
  )
}

export default Journal