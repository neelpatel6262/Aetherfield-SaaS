// src/pages/Journal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/article';
import JournalSticker from '../assets/images/Journal.png';
import CTABanner from '../components/sections/CTABanner';

const Journal = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Sticker Banner */}
      <div className="w-full bg-gradient-to-b from-[#C8D8F0] to-[#E0E8F5] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-center">
          <img
            src={JournalSticker}
            alt="Aetherfield Journal"
            className="w-full max-w-4xl h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Latest Articles Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-12 md:mb-16">
            Latest Articles
          </h2>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/journal/${article.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Article Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 line-clamp-2 group-hover:text-gray-800 transition-colors">
                    {article.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span className="font-medium">{article.category}</span>
                    <span>•</span>
                    <span>{article.time}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                    {article.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Optional: "View all articles" button */}
          {articles.length > 6 && (
            <div className="mt-12 md:mt-16 text-center">
              <Link
                to="/journal"
                className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition"
              >
                View all articles →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
};

export default Journal;