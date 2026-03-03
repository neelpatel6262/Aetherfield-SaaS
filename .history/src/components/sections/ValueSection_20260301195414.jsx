import React from 'react';
import ValueImageBG from '../../assets/images/Values section.jpg';
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
          <h2 className="text-xl font-normal leading-tight text-black md:text-5xl lg:text-6xl">
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

export default ValueSection;