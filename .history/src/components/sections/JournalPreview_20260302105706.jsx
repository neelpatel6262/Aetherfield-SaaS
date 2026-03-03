import React from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../../data/article'
import Sticker from '../../assets/images/Sticker.png'

const JournalPreview = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-container max-w-container mx-auto px-5">

        <h2 className="text-[32px] font-extrabold text-black text-center mb-16 font-[heading]">
          From the journal
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Left — Sticker */}
          <div className="flex-shrink-0 pt-2">
            <img src={Sticker} alt="Aetherfield Journal" className="w-[200px] h-auto object-contain" />
          </div>

          {/* Right — article rows */}
          <div className="flex-1 flex flex-col">
            {articles.slice(0, 3).map((article, index) => (
              <Link
                key={article.id}
                to={`/journal/${article.slug}`}    // ✅ goes to article page
                onClick={() => window.scrollTo(0, 0)}
                className={`flex flex-row gap-5 items-center py-6 w-full hover:opacity-80 transition no-underline ${
                  index !== 2 ? 'border-b border-gray-200' : ''
                }`}
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
            ))}

            {/* View all → /journal */}
            <div className="mt-10">
              <Link to="/journal">               {/* ✅ goes to journal page */}
                <button className="bg-black text-white text-[14px] font-semibold px-7 py-3 hover:opacity-75 transition font-[btn]">
                  • View all articles
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default JournalPreview