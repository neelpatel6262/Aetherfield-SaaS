import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../data/articles'; // assuming file is articles.js (plural)
import Sticker from '../../assets/images/Sticker.png';

function JournalPreview() {
  const previewArticles = articles.slice(0, 3);

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Section title */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-black md:mb-16 md:text-4xl lg:text-5xl">
          From the journal
        </h2>

        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-12">
          {/* Decorative sticker */}
          <div className="flex-shrink-0 pt-2">
            <img
              src={Sticker}
              alt="Aetherfield Journal badge"
              className="h-auto w-44 object-contain md:w-52 lg:w-60"
            />
          </div>

          {/* Articles list + CTA */}
          <div className="w-full flex-1">
            <div className="divide-y divide-gray-200">
              {previewArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/journal/${article.slug}`}
                  className="
                    group flex items-center gap-5 py-6 transition-all duration-200
                    hover:bg-gray-50 hover:rounded-lg hover:px-4 focus:outline-none focus:ring-2 focus:ring-black/20
                  "
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="
                      h-20 w-32 flex-shrink-0 rounded-lg object-cover shadow-sm 
                      transition-transform duration-300 group-hover:scale-[1.03]
                      md:h-24 md:w-40
                    "
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-black group-hover:text-black/80 md:text-xl">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {article.category} · {article.time}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-10">
              <Link
                to="/journal"
                className="
                  inline-flex items-center rounded-full bg-black px-8 py-4 
                  text-base font-semibold text-white transition 
                  hover:bg-black/90 active:opacity-80 md:px-10 md:text-lg
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