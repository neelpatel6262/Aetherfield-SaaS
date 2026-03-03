import React from 'react'
import JournalSticker from '../assets/images/Journal.png'
import ArticleOne     from '../assets/images/ArticleOne.jpg'
import ArticleTwo     from '../assets/images/ArticleTwo.jpg'
import ArticleThree   from '../assets/images/ArticleThree.jpg'
import ArticleFour    from '../assets/images/ArticleFour.jpg'
import ArticleFive    from '../assets/images/ArticleFive.jpg'
import ArticleSix     from '../assets/images/ArticleSix.jpg'
import CTABanner from '../components/sections/CTABanner'

const articles = [
  {
    id: 1,
    image: ArticleOne,
    title: 'How to Build a Climate-Ready Data Stack',
    category: 'Insights',
    time: '4 min',
    desc: 'A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.',
  },
  {
    id: 2,
    image: ArticleTwo,
    title: "Sustainability Isn't a Side Project: Making Impact Operational",
    category: 'Strategy',
    time: '7 min',
    desc: 'Why climate goals belong in your core roadmap—not just in the annual ESG report.',
  },
  {
    id: 3,
    image: ArticleThree,
    title: 'Inside the Aetherfield Model: How We Turn Data Into Action',
    category: 'Insights',
    time: '5 min',
    desc: 'A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning.',
  },
  {
    id: 4,
    image: ArticleFour,
    title: 'From Spreadsheets to Systems: The Evolution of Climate Reporting',
    category: 'Tooling',
    time: '6 min',
    desc: "Why legacy tools aren't enough—and what the next generation of reporting looks like.",
  },
  {
    id: 5,
    image: ArticleFive,
    title: 'Carbon Accounting: Myths, Models, and Must-Haves',
    category: 'Tooling',
    time: '8 min',
    desc: 'Debunking common assumptions and offering a framework for getting it right.',
  },
  {
    id: 6,
    image: ArticleSix,
    title: 'Seeing Clearly: Designing Feedback Loops for Sustainable Growth',
    category: 'Tooling',
    time: '5 min',
    desc: 'Building responsive systems that keep sustainability strategy adaptive and actionable.',
  },
]

const Journal = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero Sticker Banner ── */}
      <div className="w-full bg-[#C8D8F0] flex items-center justify-center py-10 px-6">
        <img
          src={JournalSticker}
          alt="Aetherfield Journal"
          className="w-full max-w-2xl h-auto object-contain"
        />
      </div>

      {/* ── Latest Articles ── */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h2
          className="text-3xl font-bold text-black text-center mb-12"
          style={{ fontFamily: 'heading, serif' }}
        >
          Latest articles
        </h2>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {articles.map(article => (
            <div
              key={article.id}
              className="flex flex-col gap-3 cursor-pointer group"
            >
              {/* Image */}
              <div className="w-full h-52 overflow-hidden rounded-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <p
                className="text-base font-semibold text-black leading-snug"
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
            </div>
          ))}
        </div>
      </div>

        <CTABanner />
    </div>

  
  )
}

export default Journal