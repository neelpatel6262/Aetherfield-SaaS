import React from 'react'
import Sticker from '../../assets/images/Sticker.png'
import BlogOne from '../../assets/images/Blog One.jpg'
import BlogTwo from '../../assets/images/Blog Two.jpg'
import BlogThree from '../../assets/images/Blog Three.jpg'

const articles = [
  {
    id: 1,
    image: BlogOne,
    title: 'How to Build a Climate-Ready Data Stack',
    category: 'Insights',
    time: '4 min',
  },
  {
    id: 2,
    image: BlogTwo,
    title: "Sustainability Isn't a Side Project: Making Impact Operational",
    category: 'Strategy',
    time: '7 min',
  },
  {
    id: 3,
    image: BlogThree,
    title: 'Inside the Aetherfield Model: How We Turn Data Into Action',
    category: 'Insights',
    time: '5 min',
  },
]

const JournalPreview = () => {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">

        {/* ── Heading centered top ── */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-black text-center mb-12 md:mb-16 font-[heading,serif]"
        >
          From the journal
        </h2>

        {/* ── Two column layout ── */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 items-start">

        {/* ── Left — Sticker positioned top aligned with first blog ── */}
        <div className="flex-shrink-0 flex items-start pt-2">
          <img
            src={Sticker}
            alt="Aetherfield Journal"
            className="object-contain"
            style={{ width: '200px' }}
          />
        </div>

        {/* ── Right — Blog list centered ── */}
        <div className="flex-1 flex flex-col items-center">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`flex flex-row gap-5 items-center py-6 w-full cursor-pointer hover:opacity-80 transition ${
                index !== articles.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              {/* Thumbnail */}
              <img
                src={article.image}
                alt={article.title}
                className="w-28 h-20 object-cover rounded-lg flex-shrink-0"
              />

              {/* Text */}
              <div className="flex flex-col gap-1">
                <p
                  className="text-base font-semibold text-black leading-snug"
                  style={{ fontFamily: 'heading, serif' }}
                >
                  {article.title}
                </p>
                <p
                  className="text-sm text-gray-400"
                  style={{ fontFamily: 'subheading, sans-serif' }}
                >
                  {article.category} · {article.time}
                </p>
              </div>
            </div>
          ))}

          {/* View all button — centered */}
          <div className="mt-10">
            <button
              className="bg-black text-white text-sm font-semibold px-7 py-3 hover:opacity-75 transition"
              style={{ fontFamily: 'btn, monospace' }}
            >
              • View all articles
            </button>
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}

export default JournalPreview