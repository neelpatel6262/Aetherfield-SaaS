// src/pages/About.jsx
import React from 'react';
import AboutSectionImg from '../assets/images/AboutSection.jpg';   // Left side image
import FounderImg from '../assets/images/Founder.jpg';             // Founder portrait
import StickerPng from '../assets/images/Sticker.png';             // Founder portrait


import { PieChart, Globe, ArrowUpRight } from 'lucide-react';

const values = [
  {
    icon: <PieChart size={40} strokeWidth={1.5} />,
    title: "Clarity drives action",
    desc: "We believe better decisions start with better data—measured, visible, and trusted.",
  },
  {
    icon: <Globe size={40} strokeWidth={1.5} />,
    title: "Sustainability is a systems problem",
    desc: "We build tools that help teams connect the dots between operations, impact, and accountability.",
  },
  {
    icon: <ArrowUpRight size={40} strokeWidth={1.5} />,
    title: "Progress over perfection",
    desc: "We support real-world momentum—helping organizations move from ambition to measurable change.",
  },
];

const teamMembers = [
  { name: "Eunji Park", title: "Founder", email: "e.park@aetherfield.com" },
  { name: "Al Gorithm", title: "Senior Systems Architect", email: "a.gorithm@aetherfield.com" },
  { name: "Cassandra Query", title: "Head of Data Platforms", email: "c.query@aetherfield.com" },
  { name: "Sue Logic", title: "Principal Software Engineer", email: "s.logic@aetherfield.com" },
  { name: "Dash Bordman", title: "Product Manager", email: "d.bordman@aetherfield.com" },
  { name: "Greta Watt", title: "Director of Climate Strategy", email: "g.watt@aetherfield.com" },
  { name: "Gail Force", title: "Environmental Risk Analyst", email: "g.force@aetherfield.com" },
  { name: "Polly Nation", title: "UX Designer", email: "p.nation@aetherfield.com" },
  { name: "Will O'Watt", title: "Clean Energy Solutions Manager", email: "w.watt@aetherfield.com" },
  { name: "Lana Terra", title: "Earth Systems Researcher", email: "l.terra@aetherfield.com" },
  { name: "Ella Vation", title: "Earth Systems Researcher", email: "e.vation@aetherfield.com" },
  { name: "Phil Scope", title: "Lifecycle Assessment Lead", email: "p.scope@aetherfield.com" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-blue-50 to-amber-50/30">
      {/* Mission Section - Left: Image | Right: Text + Button */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 w-full h-full">
          {/* Left: AboutSection.jpg image */}
          <div className="relative h-full min-h-[50vh] lg:min-h-screen">
            <img
              src={AboutSectionImg}
              alt="Aetherfield vision"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Mission headline, text, button */}
          <div className="flex items-center justify-center px-6 py-16 lg:py-0 lg:px-12 bg-white/70 backdrop-blur-sm">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Our mission
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-10">
                Climate action starts with better information. We help organizations turn complex data into measurable, meaningful change.
              </p>
              <button className="bg-black text-white px-10 py-5 text-xl font-medium hover:bg-gray-900 transition">
                Meet the team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 lg:px-12 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Our values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="text-cyan-600 mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Founder Story */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Founder's story
            </h2>
            <h3 className="text-4xl font-semibold text-gray-600 mb-6">
              Eunji Park
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Eunji founded Aetherfield with one goal: to help companies take climate action without waiting for a perfect plan.
              With a background in environmental systems and software design, she's spent the past decade building tools that
              turn impact goals into real-world outcomes. She still insists on biking to every investor meeting.
            </p>
          </div>

          {/* Right — image + sticker */}
          <div className="order-1 lg:order-2 relative">

            {/* Sticker — top RIGHT corner */}
            <img
              src={StickerPng}
              alt="Aetherfield Sticker"
              className="absolute top-[-88px] right-[-88px] z-10"
              style={{ width: '444px', height: '222px', objectFit: 'contain' }}  // ✅ exact size
            />

            {/* Founder image — real color, no filter */}
            <div className="overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={FounderImg}
                alt="Eunji Park"
                className="w-full h-auto object-cover"
              // ✅ no filter, no blue tint — real color
              />
            </div>

          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Meet the team
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-6 px-4 font-semibold text-gray-900">Name</th>
                  <th className="py-6 px-4 font-semibold text-gray-900">Title</th>
                  <th className="py-6 px-4 font-semibold text-gray-900">Contact</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-5 px-4 font-medium">{member.name}</td>
                    <td className="py-5 px-4 text-gray-700">{member.title}</td>
                    <td className="py-5 px-4 text-cyan-700">{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-24 px-6 lg:px-12 text-center bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            We're hiring! Want to join the team?
          </h2>
          <button className="bg-black text-white px-12 py-6 text-xl font-medium hover:bg-gray-900 transition">
            View open roles
          </button>
        </div>
      </section>
    </div>
  );
}