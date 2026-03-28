import React from 'react';
import Hero          from '../components/sections/Hero';
import Features      from '../components/sections/Features';
import ValueSection  from '../components/sections/ValueSection';
import CaseStudy     from '../components/sections/CaseStudy';
import JournalPreview from '../components/sections/JournalPreview';
import Testimonial   from '../components/sections/Testimonial';
import CTABanner     from '../components/sections/CTABanner';

const Home = () => (
  <div className="bg-white w-full">
    <Hero />
    <Features />
    <ValueSection />
    <CaseStudy />
    <JournalPreview />
    <Testimonial />
    <CTABanner />
  </div>
);

export default Home;