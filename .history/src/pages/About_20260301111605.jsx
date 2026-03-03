// src/pages/About.jsx
import React from 'react';

const About = () => {
  const values = [
    {
      title: "Climate-first action",
      description: "We prioritize measurable impact on emissions reduction and sustainability in every decision.",
      icon: "🌍", // You can replace with SVG/icon component later
    },
    {
      title: "Radical transparency",
      description: "Open data, honest forecasts, and clear communication — no greenwashing.",
      icon: "🔍",
    },
    {
      title: "Long-term thinking",
      description: "Building tools that last decades, not quarters — for real systemic change.",
      icon: "⏳",
    },
    {
      title: "Empathy & inclusion",
      description: "Diverse perspectives drive better solutions for global challenges.",
      icon: "🤝",
    },
  ];

  const team = [
    { name: "Eunji Park", role: "Founder & CEO", link: "https://linkedin.com/in/eunji-park-example" },
    { name: "Sarah Chen", role: "Senior Climate Data Scientist" },
    { name: "Alex Rivera", role: "Principal Software Engineer" },
    { name: "Maya Singh", role: "UX Designer" },
    { name: "Jordan Lee", role: "Product Manager" },
    { name: "Priya Patel", role: "Sustainability Analyst" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-white">
      {/* Hero / Intro */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our mission is clear:
            <br />
            Turn climate data into meaningful change.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Aetherfield helps organizations transform complex emissions data into actionable, measurable progress toward net-zero.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image - using your Founder.jpg with halftone feel */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/images/Founder.jpg"
                alt="Eunji Park - Founder"
                className="w-full h-auto object-cover"
              />
              {/* Optional halftone overlay effect - you can add via CSS filter or separate image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet the Founder
            </h2>
            <h3 className="text-2xl font-semibold text-cyan-700 mb-4">
              Eunji Park
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Eunji founded Aetherfield after years working at the intersection of climate science and enterprise software. 
              Her vision: make high-quality emissions intelligence accessible to every organization serious about decarbonization.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              She believes radical transparency and long-term thinking are the only paths to meaningful climate progress.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cyan-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  {/* Placeholder avatar - replace with real images */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We're hiring!
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Join a mission-driven team building tools that help organizations reach net-zero faster.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center px-10 py-5 bg-black text-white font-medium text-xl rounded-xl hover:bg-gray-900 transition-colors shadow-lg"
          >
            View Open Roles →
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;