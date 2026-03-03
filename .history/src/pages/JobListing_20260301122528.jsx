// src/pages/JobListing.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // for back button if needed

const JobListing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <div className="mb-8">
          <Link
            to="/careers"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 text-lg"
          >
            ← Back to Careers
          </Link>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header with title and Apply button */}
          <div className="p-8 md:p-12 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Data Scientist
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-lg text-gray-700">
                  <span>Full-time</span>
                  <span>•</span>
                  <span>Denver, CO</span>
                </div>
              </div>

              <button className="bg-black text-white px-10 py-4 rounded-lg text-xl font-medium hover:bg-gray-900 transition mt-4 md:mt-0">
                Apply now
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Help build... */}
            <div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams.
              </p>
            </div>

            {/* Company description */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Company description</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability, waste, and energy teams make sense of complex environmental data—transforming emissions, operations, and impact into measurable, meaningful action.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.
              </p>
            </div>

            {/* About the role */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">About the role</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a Data Scientist at Aetherfield, you'll help shape the analytical engine behind our platform. You'll collaborate with product and engineering teams to design models that interpret environmental impact, forecast future trends, and uncover actionable insights for our customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your work will directly influence how companies plan, report, and act on their sustainability strategies.
              </p>
            </div>

            {/* Requirements */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Requirements</h2>
              <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6">
                <li>3+ years of experience in data science or applied analytics (Python, SQL, etc.)</li>
                <li>Experience working with climate, sustainability, or supply chain datasets is a plus</li>
                <li>Strong foundation in statistics and data modeling</li>
                <li>Ability to communicate complex insights clearly to both technical and non-technical teams</li>
                <li>Curiosity and care in how you approach data problems</li>
                <li>Passion for solving real-world problems with purpose and precision</li>
              </ul>
            </div>

            {/* Company benefits */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Company benefits</h2>
              <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6">
                <li>Competitive salary and equity options</li>
                <li>Flexible, hybrid work environment</li>
                <li>Generous PTO and paid volunteer days</li>
                <li>Annual sustainability-focused stipend</li>
                <li>Team offsites and climate-focused retreats</li>
                <li>A mission-first culture that values clarity, impact, and integrity</li>
              </ul>
            </div>

            {/* Closing CTA */}
            <div className="pt-12 text-center border-t border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to help build the future of climate intelligence?
              </h3>
              <button className="bg-black text-white px-12 py-6 text-xl font-medium rounded-lg hover:bg-gray-900 transition">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobListing;