import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../data/articles'; // corrected plural if your file is articles.js
import Sticker from '../../assets/images/Sticker.png';

function JournalPreview() {
  const previewArticles = articles.slice(0, 3);

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-black md:mb-16 md:text-4xl lg:text-5xl">
          From the journal
        </h2>

        <div className="flex flex-col items-start gap-10 lg:flex-row">
          {/* Sticker / decorative image on left */}
          <div className="flex-shrink-0 pt-3">
            <img
              src={Sticker}
              alt="Aetherfield Journal sticker"
              className="h-auto w-48 object-contain md:w-56 lg:w-64"
            />
          </div>

          {/* Article list + CTA */}
          <div className="flex-1">
            <div className="divide-y divide-gray-200">
              {previewArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/journal/${article.slug}`}
                  className="
                    group flex items-center gap-6 py-6 transition 
                    hover:opacity-90 focus:opacity-90 focus:outline-none
                  "
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-24 w-36 flex-shrink-0 rounded-lg object-cover shadow-sm transition group-hover:shadow-md md:h-28 md:w-40"
                  />

                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="line-clamp-2 text-xl font-semibold leading-tight text-black group-hover:text-black/80 md:text-2xl">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {article.category} · {article.time}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* View all CTA */}
            <div className="mt-10">
              <Link
                to="/journal"
                className="
                  inline-flex items-center rounded-full bg-black 
                  px-8 py-4 text-base font-semibold text-white 
                  transition hover:bg-black/90 active:opacity-80
                  md:px-10 md:text-lg
                "
              >
                View all articles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JournalPreview;