import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Home        from './pages/Home'
import About       from './pages/About'
import Journal     from './pages/Journal'
import Article     from './pages/Article'
import Careers     from './pages/Careers'
import JobListing  from './pages/JobListing'
import SignUp      from './pages/SignUp'        
import Layout      from './components/layout/Layout'
import ScrollToTop from './components/ui/ScrollToTop'

const NotFound = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="w-full min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-center gap-6 px-4"
  >
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-[14px] md:text-[16px] text-black/50 font-[subheading] text-center"
    >
      The page you are looking for does not exist
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 120 }}
      className="flex items-center leading-none"
    >
      <span className="font-extrabold text-black" style={{ fontFamily: 'heading, serif', fontSize: 'clamp(120px, 20vw, 380px)', lineHeight: 1 }}>4</span>
      <span className="font-black text-black"     style={{ fontFamily: 'heading, serif', fontSize: 'clamp(90px, 15vw, 300px)',  lineHeight: 1 }}>✳</span>
      <span className="font-extrabold text-black" style={{ fontFamily: 'heading, serif', fontSize: 'clamp(120px, 20vw, 380px)', lineHeight: 1 }}>4</span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Link
        to="/"
        className="bg-black text-white text-[12px] md:text-[13px] font-semibold tracking-widest px-12 md:px-20 py-4 md:py-5 hover:opacity-70 transition font-[btn] uppercase mt-2 inline-block"
      >
        Go Home
      </Link>
    </motion.div>
  </motion.div>
)

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route element={<Layout />}>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/journal"        element={<Journal />} />
          <Route path="/journal/:slug"  element={<Article />} />
          <Route path="/careers"        element={<Careers />} />
          <Route path="/careers/:jobId" element={<JobListing />} />
          <Route path="/signup"         element={<SignUp />} />
        </Route>

        <Route path="/product" element={<NotFound />} />
        <Route path="*"        element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App