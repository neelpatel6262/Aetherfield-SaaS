// src/pages/JobListing.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import StickerPng from '../assets/images/Sticker container.png'; // or Sticker.png

const JobListing = () => {
  const { jobId } = useParams();

  // Find job by id (you can use title slug or any unique key)
  const job = jobs.find((j) => j.id === jobId || j.title.toLowerCase().replace(/\s+/g, '-') === jobId);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-50 to-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Job not found</h2>
          <Link to="/careers" className="text-blue-600 hover:underline">
            ← Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <div className="mb-8">
          <Link
            to="/careers"
            className="inline-flex items-center text-sm text-gray-700 hover:text-black transition"
          >
            ← Back to Careers
          </Link>
        </div>

        {/* Main dashed card */}
        <div className="border-2 border-dashed border-gray-400 rounded-2xl bg-white p-8 md:p-12 shadow-lg">
          {/* Header: Title + Apply button */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                {job.title}
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                {job.type} • {job.location}
              </p>
            </div>

            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition mt-4 md:mt-0">
              Apply now
            </button>
          </div>

          {/* Short summary */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {job.description}
          </p>

          {/* Company description */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Company description</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              At Aetherfield, we build software that empowers companies to lead with climate accountability. Our platform helps sustainability, waste, and energy teams make sense of complex environmental data—transforming emissions, operations, and impact into measurable, meaningful action. We're a mission-driven team of technologists, designers, and scientists working to accelerate the shift toward a low-carbon future.
            </p>
          </div>

          {/* About the role */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">About the role</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              As a Data Scientist at Aetherfield, you'll help shape the analytical engine behind our platform. You'll collaborate with product and engineering teams to design models that interpret environmental impact, forecast future trends, and uncover actionable insights for our customers. Your work will directly influence how companies plan, report, and act on their sustainability strategies.
            </p>
          </div>

          {/* Requirements */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-black mb-4">Requirements</h2>
            <ul className="space-y-3 text-base text-gray-700 list-disc pl-6">
              {job.requirements?.map((req, i) => (
                <li key={i}>{req}</li>
              )) || (
                <li className="text-gray-500">No requirements listed</li>
              )}
            </ul>
          </div>

          {/* Company benefits */}
          <div className="mb-12 relative">
            <h2 className="text-2xl font-bold text-black mb-4">Company benefits</h2>
            <ul className="space-y-3 text-base text-gray-700 list-disc pl-6">
              {job.benefits?.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              )) || (
                <li className="text-gray-500">No benefits listed</li>
              )}
            </ul>

            {/* Sticker positioned bottom-right */}
            <img
              src={StickerPng}
              alt="Aetherfield sticker"
              className="absolute -bottom-12 right-0 w-32 md:w-40 h-auto object-contain opacity-90"
            />
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-12 border-t border-dashed border-gray-300">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Ready to help build the future of climate intelligence?
            </h3>
            <button className="bg-black text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;