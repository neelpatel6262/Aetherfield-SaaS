// src/pages/Journal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/article';
import JournalSticker from '../assets/images/Journal.png';
import CTABanner from '../components/sections/CTABanner';

const Journal = () => {
  return (
   return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header with diamond sticker */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-12 md:mb-16">
          {/* Diamond sticker */}
          <div className="relative w-40 md:w-48 lg:w-56 flex-shrink-0">
            <img
              src={JournalLogo}
              alt="Aetherfield Journal"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Title */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
              From the journal
            </h2>
            <p className="mt-2 text-xl md:text-2xl text-gray-600">
              Insights from the Aetherfield team
            </p>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-10 md:space-y-12">
          {recentArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/journal/${article.slug}`}
              className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:bg-white/50 p-4 md:p-6 rounded-xl transition-all duration-300"
            >
              {/* Article Image */}
              <div className="w-full md:w-64 lg:w-72 aspect-[4/3] overflow-hidden rounded-xl flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-black group-hover:text-cyan-700 transition-colors mb-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="font-medium">{article.category}</span>
                  <span>•</span>
                  <span>{article.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            to="/journal"
            className="inline-flex items-center px-10 py-5 bg-black text-white font-medium text-lg rounded-xl hover:bg-gray-900 transition shadow-lg"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Journal;