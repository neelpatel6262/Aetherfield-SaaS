import React from 'react'
import ValueImageBG from '../../assets/images/Values section.jpg'
import { PieChart, Globe, ArrowUpRight } from 'lucide-react'

const values = [
  {
    icon: <PieChart size={28} strokeWidth={1.5} />,
    title: 'Clarity drives action',
    desc: 'We believe better decisions start with better data—measured, visible, and trusted.',
  },
  {
    icon: <Globe size={28} strokeWidth={1.5} />,
    title: 'Sustainability is a systems problem',
    desc: 'We build tools that help teams connect the dots between operations, impact, and accountability.',
  },
  {
    icon: <ArrowUpRight size={28} strokeWidth={1.5} />,
    title: 'Progress over perfection',
    desc: 'We support real-world momentum—helping organizations move from ambition to measurable change.',
  },
]

function ValueSection() {
  return (
    <section
      className="relative w-full py-24 px-10 md:px-20 overflow-hidden"
      style={{ backgroundColor: '#EDE8DC' }}
    >

      {/* Background texture image */}
      <img
        src={ValueImageBG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />

      {/* Content sits above bg */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl text-black leading-tight"
            style={{ fontFamily: 'heading, serif', fontWeight: 400 }}
          >
            Built for clarity
          </h2>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-black leading-tight"
            style={{ fontFamily: 'heading, serif' }}
          >
            Designed for action
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm"
            >
              {/* Icon */}
              <div className="text-black">
                {v.icon}
              </div>

              {/* Title */}
              <p
                className="text-base font-bold text-black"
                style={{ fontFamily: 'heading, serif' }}
              >
                {v.title}
              </p>

              {/* Description */}
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: 'subheading, sans-serif' }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ValueSection