import React from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../data/article'
import JournalSticker from '../assets/images/Journal.png'
import CTABanner from '../components/sections/CTABanner'

const Journal = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero Sticker Banner — 1240px container ── */}
      <div className="w-full bg-[#C8D8F0] flex items-center justify-center py-10">
        <div style={{ width: '1240px', maxWidth: '100%', padding: '0 20px' }}>
          <img
            src={JournalSticker}
            alt="Aetherfield Journal"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ── Latest Articles — same 1240px container ── */}
      <div style={{ width: '1240px', maxWidth: '100%', margin: '0 auto', padding: '64px 20px' }}>

        <h2
          className="text-3xl font-bold text-black text-center mb-12"
          style={{ fontFamily: 'heading, serif' }}
        >
          Latest articles
        </h2>

        {/* 2-col grid — each card 612px wide */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '16px' }}
        >
          {articles.map(article => (
            <Link
              key={article.id}
              to={`/journal/${article.slug}`}
              className="flex flex-col gap-3 group"
              style={{
                width: '612px',
                maxWidth: '100%',
                textDecoration: 'none',
              }}
            >
              {/* Image — 612 x 356 */}
              <div
                className="w-full overflow-hidden rounded-sm"
                style={{ height: '356px' }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <p
                className="text-base font-semibold text-black leading-snug mt-2"
                style={{ fontFamily: 'heading, serif' }}
              >
                {article.title}
              </p>

              {/* Meta */}
              <p
                className="text-xs text-gray-400"
                style={{ fontFamily: 'btn, monospace' }}
              >
                {article.category} · {article.time}
              </p>

              {/* Description */}
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