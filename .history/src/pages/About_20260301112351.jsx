// src/pages/About.jsx
import React from 'react';
import FounderImg from '../assets/images/Founder.jpg';           // large portrait
import ValuesBG from '../assets/images/Values section.jpg';      // optional for values bg
import ForecastImg from '../assets/images/AboutSection.jpg';     // forecast card example

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
      {/* Header / Navigation (simplified) */}
      <header className="py-6 px-6 lg:px-12 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900">Aetherfield</div>
        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="/product" className="hover:text-black">Product</a>
          <a href="/journal" className="hover:text-black">Journal</a>
          <a href="/about" className="hover:text-black">About</a>
          <a href="/careers" className="hover:text-black">Careers</a>
          <a href="/get-started" className="hover:text-black">Get started →</a>
        </nav>
      </header>

      {/* Mission + Forecast Card Section */}
      <section className="relative py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Forecast Card */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-sm mx-auto lg:mx-0">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={ForecastImg}
                  alt="Forecast moss"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Forecast
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                You're 16% off your 2027 emissions goal
              </h3>
              <p className="mt-2 text-gray-600">
                Adjust your targets →
              </p>
            </div>
          </div>

          {/* Right: Mission Text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Our mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              Climate action starts with better information. We help organizations turn complex data into measurable, meaningful change.
            </p>
            <div className="mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-900 transition">
                • Meet the team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 lg:px-12 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="text-cyan-600 mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Orbit graphic + text */}
          <div className="relative">
            <div className="absolute -left-20 -top-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Founder's story
              </h2>
              <h3 className="text-4xl font-semibold text-cyan-700 mb-6">
                Eunji Park
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Eunji founded Aetherfield with one goal: to help companies take climate action without waiting for a perfect plan. 
                With a background in environmental systems and software design, she’s spent the past decade building tools that turn impact goals into real-world outcomes. 
                She still insists on biking to every investor meeting.
              </p>
            </div>
          </div>

          {/* Right: Founder Portrait */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={FounderImg}
                alt="Eunji Park"
                className="w-full h-auto object-cover"
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
          <button className="bg-black text-white px-12 py-6 rounded-xl text-xl font-medium hover:bg-gray-900 transition shadow-xl">
            View open roles
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-black text-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-3xl font-bold mb-4">Aetherfield</div>
          <p className="text-gray-400">
            © 2025 • All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}