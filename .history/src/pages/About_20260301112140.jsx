// src/pages/About.jsx
import React from 'react';
import AboutImage from '../assets/images/About.jpg';           // hero/about section image
import FounderImage from '../assets/images/Founder.jpg';       // founder portrait
import ValueImageBG from '../assets/images/Values section.jpg'; // for ValueSection background

import { PieChart, Globe, ArrowUpRight } from 'lucide-react';

const values = [
  {
    icon: <PieChart size={32} strokeWidth={1.5} />,
    title: 'Clarity drives action',
    desc: 'We believe better decisions start with better data—measured, visible, and trusted.',
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: 'Sustainability is a systems problem',
    desc: 'We build tools that help teams connect the dots between operations, impact, and accountability.',
  },
  {
    icon: <ArrowUpRight size={32} strokeWidth={1.5} />,
    title: 'Progress over perfection',
    desc: 'We support real-world momentum—helping organizations move from ambition to measurable change.',
  },
];

function ValueSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EDE8DC] py-16 md:py-20 lg:py-24">
      {/* Background image with subtle opacity */}
      <img
        src={ValueImageBG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none"
      />

      {/* Content layer */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Headline */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="text-4xl font-normal leading-tight text-black md:text-5xl lg:text-6xl">
            Built for clarity
          </h2>
          <h2 className="text-4xl font-extrabold leading-tight text-black md:text-5xl lg:text-6xl">
            Designed for action
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="
                flex flex-col gap-5 rounded-2xl bg-white 
                p-7 shadow-sm transition hover:shadow-md 
                lg:p-8
              "
            >
              <div className="text-black">{value.icon}</div>

              <h3 className="text-xl font-bold text-black md:text-2xl">
                {value.title}
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-white">
      {/* Hero Section with About.jpg */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <img
          src={AboutImage}
          alt="Aetherfield mission"
          className="absolute inset-0 h-full w-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Turning climate data into meaningful change
            </h1>
            <p className="mt-6 text-xl text-gray-200 md:text-2xl">
              We help organizations see, understand, and act on their environmental impact with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Intro Text */}
      <section className="py-16 md:py-20 px-5 md:px-8 lg:px-12 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
            At Aetherfield, we believe the path to net-zero starts with radical transparency and precise intelligence. 
            Our platform transforms complex emissions data into clear, actionable insights — empowering teams to make better decisions faster.
          </p>
        </div>
      </section>

      {/* Values Section – using your component */}
      <ValueSection />

      {/* Founder Spotlight with Founder.jpg */}
      <section className="py-20 px-5 md:px-8 lg:px-12 bg-gradient-to-b from-white to-cyan-50/30">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            {/* Founder Image */}
            <div className="w-full max-w-md lg:max-w-lg flex-shrink-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={FounderImage}
                  alt="Founder portrait"
                  className="w-full h-auto object-cover"
                />
                {/* Optional subtle overlay for halftone vibe */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 lg:text-5xl">
                Meet the Founder
              </h2>
              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
                Eunji Park
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Eunji founded Aetherfield with a clear vision: make high-quality climate intelligence accessible to every organization serious about decarbonization.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                With a background bridging climate science, data engineering, and enterprise software, she is driven by the belief that transparency and long-term thinking are the only ways to achieve meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Team Teaser / CTA */}
      <section className="py-20 px-5 md:px-8 lg:px-12 text-center bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            We're building the future — join us
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            A small, mission-driven team working on one of the most important problems of our time.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-3 rounded-xl bg-black px-10 py-5 text-xl font-medium text-white hover:bg-gray-900 transition-colors shadow-lg"
          >
            See open roles →
          </a>
        </div>
      </section>
    </div>
  );
}