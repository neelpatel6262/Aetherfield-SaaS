import React from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../data/article'
import JournalSticker from '../assets/images/Journal.png'
import CTABanner from '../components/sections/CTABanner'

const Journal = () => {

  // DELETE ANY LOCAL const articles = [...] ARRAY HERE

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Sticker Banner */}
      <div className="w-full bg-[#C8D8F0] flex items-center justify-center py-10">
        <div className="w-container max-w-container px-5">
          <img src={JournalSticker} alt="Aetherfield Journal" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Latest Articles */}
      <div className="w-container max-w-container mx-auto px-5 py-16">
        <h2 className="text-[32px] font-bold text-black text-center mb-12 font-[heading]">
          Latest articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map(article => (
            <Link
              key={article.id}
              to={`/journal/${article.slug}`}
              className="flex flex-col gap-3 group"
              style={{ textDecoration: 'none' }}
            >
              <div className="w-full overflow-hidden rounded-sm" style={{ height: '356px' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="text-[20px] font-semibold text-black leading-snug mt-2 font-[heading]">
                {article.title}
              </p>
              <p className="text-[14px] text-gray-400 font-[btn]">
                {article.category} · {article.time}
              </p>
              <p className="text-[14px] text-gray-500 leading-relaxed font-[subheading]">
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