import React from 'react';

function CTABanner() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-100 px-6 py-16 text-center md:py-20 lg:py-24 lg:px-12">
          <h2 className="mx-auto mb-8 max-w-3xl text-3xl font-extrabold leading-tight text-black md:text-4xl lg:text-5xl">
            Ready to operationalize your sustainability goals?
          </h2>

          <button
            className="
              rounded-full bg-black px-8 py-4 text-base font-semibold 
              text-white transition hover:bg-black/90 active:opacity-80
              md:px-10 md:py-4 md:text-lg
            "
          >
            Request a demo →
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;