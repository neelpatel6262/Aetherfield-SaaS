import React from 'react';
import FeatureImage from '../../assets/images/Feature.jpg';

const features = [
  {
    number: '001',
    title: 'Track',
    desc: 'Emissions, energy, and waste across your value chain',
  },
  {
    number: '002',
    title: 'Model',
    desc: 'Forecast performance and goal alignment',
  },
  {
    number: '003',
    title: 'Report',
    desc: 'Generate ESG disclosures, automate frameworks',
  },
  {
    number: '004',
    title: 'Act',
    desc: 'Surface insights and operational next steps',
  },
];

function Features() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="mb-12 text-center text-3xl font-extrabold leading-tight text-black md:mb-16 md:text-4xl lg:text-5xl">
          Everything you need to measure,<br className="hidden sm:inline" /> model, and act on sustainability
        </h2>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch">
          {/* Left: Image with overlay card */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={FeatureImage}
              alt="Sustainability dashboard showing energy metrics"
              className="h-full w-full rounded-2xl object-cover"
              style={{ minHeight: '420px' }}
            />

            {/* Floating stats card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Energy consumption
                </p>
                <span className="text-2xl text-gray-300">✳</span>
              </div>

              <div className="flex items-end justify-between">
                <p className="text-4xl font-extrabold text-black">
                  583.7
                  <span className="ml-2 text-base font-normal text-gray-500">MWh</span>
                </p>
                <p className="text-base font-semibold text-blue-600">+12.4%</p>
              </div>
            </div>
          </div>

          {/* Right: Feature list + CTA */}
          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <div className="divide-y divide-gray-200">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="flex items-start justify-between py-6 first:pt-0 last:pb-0"
                >
                  <div className="pr-8">
                    <h3 className="text-2xl font-bold text-black">{feature.title}</h3>
                    <p className="mt-1.5 text-base text-gray-600">{feature.desc}</p>
                  </div>
                  <span className="mt-1 text-xs font-medium text-gray-400">
                    {feature.number}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="
                mt-10 self-start rounded-full bg-black px-8 py-4 
                text-base font-semibold text-white 
                transition hover:bg-black/90 active:opacity-80
                md:px-10 md:text-lg
              "
            >
              Explore features →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;