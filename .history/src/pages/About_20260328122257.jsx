import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../assets/images/AboutSection.jpg';
import FounderImg from '../assets/images/Founder.jpg';
import StickerPng from '../assets/images/Sticker.png';
import { PieChart, Globe, ArrowUpRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const values = [
  { icon: <PieChart size={40} strokeWidth={1.5} />, title: 'Clarity drives action', desc: 'We believe better decisions start with better data—measured, visible, and trusted.' },
  { icon: <Globe size={40} strokeWidth={1.5} />, title: 'Sustainability is a systems problem', desc: 'We build tools that help teams connect the dots between operations, impact, and accountability.' },
  { icon: <ArrowUpRight size={40} strokeWidth={1.5} />, title: 'Progress over perfection', desc: 'We support real-world momentum—helping organizations move from ambition to measurable change.' },
];

const teamMembers = [
  { name: 'Eunji Park', title: 'Founder', email: 'e.park@aetherfield.com' },
  { name: 'Al Gorithm', title: 'Senior Systems Architect', email: 'a.gorithm@aetherfield.com' },
  { name: 'Cassandra Query', title: 'Head of Data Platforms', email: 'c.query@aetherfield.com' },
  { name: 'Sue Logic', title: 'Principal Software Engineer', email: 's.logic@aetherfield.com' },
  { name: 'Dash Bordman', title: 'Product Manager', email: 'd.bordman@aetherfield.com' },
  { name: 'Greta Watt', title: 'Director of Climate Strategy', email: 'g.watt@aetherfield.com' },
  { name: 'Gail Force', title: 'Environmental Risk Analyst', email: 'g.force@aetherfield.com' },
  { name: 'Polly Nation', title: 'UX Designer', email: 'p.nation@aetherfield.com' },
  { name: "Will O'Watt", title: 'Clean Energy Solutions Manager', email: 'w.watt@aetherfield.com' },
  { name: 'Lana Terra', title: 'Earth Systems Researcher', email: 'l.terra@aetherfield.com' },
  { name: 'Ella Vation', title: 'Earth Systems Researcher', email: 'e.vation@aetherfield.com' },
  { name: 'Phil Scope', title: 'Lifecycle Assessment Lead', email: 'p.scope@aetherfield.com' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};
const tableContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const tableRow = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  // Hero
  const heroImgAnim = useScrollAnimation({ duration: 1 })
  const heroTextAnim = useScrollAnimation({ duration: 0.7, delay: 0.2 })

  // Values
  const valuesTitleAnim = useScrollAnimation({ duration: 0.7 })
  const { ref: valuesGridRef, inView: valuesInView } = useScrollAnimation({ amount: 0.2 })

  // Founder
  const founderTextAnim = useScrollAnimation({ duration: 0.7 })
  const founderImgAnim = useScrollAnimation({ duration: 0.9 })

  // Team
  const teamTitleAnim = useScrollAnimation({ duration: 0.7 })
  const { ref: tableRef, inView: tableInView } = useScrollAnimation({ amount: 0.1 })

  // CTA
  const ctaAnim = useScrollAnimation({ duration: 0.8 })

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
    >

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 w-full h-full">

          <motion.div {...heroImgAnim} className="relative h-full min-h-[50vh] lg:min-h-screen">
            <img
              src={AboutSectionImg}
              alt="Aetherfield vision"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            {...heroTextAnim}
            className="flex items-center justify-center px-6 py-16 lg:py-0 lg:px-12 bg-white/70 backdrop-blur-sm"
          >
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8 font-[heading]">
                Our mission
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-black/70 leading-relaxed mb-10 font-[subheading]">
                Climate action starts with better information. We help organizations turn complex data into measurable, meaningful change.
              </p>
              <button className="bg-black text-white px-10 py-5 text-xl font-medium hover:bg-black/90 transition font-[btn]">
                Meet the team
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-6 lg:px-12 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">

          <motion.h2 {...valuesTitleAnim} className="text-5xl font-bold text-center text-black mb-16 font-[heading]">
            Our values
          </motion.h2>

          <motion.div
            ref={valuesGridRef}
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? 'show' : 'hidden'}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-all"
              >
                <div className="text-black mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4 font-[heading]">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-[subheading]">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-24 px-6 lg:px-12 bg-white/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div {...founderTextAnim} className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-black/60 mb-6 font-[subheading]">Founder's story</h3>
            <h2 className="text-5xl font-bold text-black mb-8 font-[heading]">Eunji Park</h2>
            <p className="text-xl text-black/70 leading-relaxed font-[subheading]">
              Eunji founded Aetherfield with one goal: to help companies take climate action without waiting for a perfect plan.
              With a background in environmental systems and software design, she's spent the past decade building tools that
              turn impact goals into real-world outcomes. She still insists on biking to every investor meeting.
            </p>
          </motion.div>

          <motion.div {...founderImgAnim} className="order-1 lg:order-2 relative">
            <img
              src={StickerPng}
              alt="Aetherfield Sticker"
              className="absolute top-[-100px] right-[-50px] z-10"
              style={{ width: '308px', height: '202px', objectFit: 'contain' }}
            />
            <div className="overflow-hidden shadow-2xl border-8 border-white">
              <img src={FounderImg} alt="Eunji Park" className="w-full h-auto object-cover" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          <motion.h2 {...teamTitleAnim} className="text-5xl font-bold text-center text-black mb-16 font-[heading]">
            Meet the team
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-6 px-4 font-semibold text-black font-[subheading]">Name</th>
                  <th className="py-6 px-4 font-semibold text-black font-[subheading]">Title</th>
                  <th className="py-6 px-4 font-semibold text-black font-[subheading]">Contact</th>
                </tr>
              </thead>
              <motion.tbody
                ref={tableRef}
                variants={tableContainer}
                initial="hidden"
                animate={tableInView ? 'show' : 'hidden'}
              >
                {teamMembers.map((member, i) => (
                  <motion.tr
                    key={i}
                    variants={tableRow}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-5 px-4 font-medium font-[subheading]">{member.name}</td>
                    <td className="py-5 px-4 text-black/60 font-[subheading]">{member.title}</td>
                    <td className="py-5 px-4 text-black/50 font-[btn] text-sm">{member.email}</td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-12 text-center bg-white/30">
        <motion.div {...ctaAnim} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 font-[heading]">
            We're hiring! Want to join the team?
          </h2>
          <Link to="/careers">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-black text-white px-12 py-6 text-xl font-medium hover:bg-black/90 transition font-[btn]"
            >
              View open roles
            </motion.button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}