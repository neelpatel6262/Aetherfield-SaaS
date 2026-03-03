import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home       from './pages/Home'
import About      from './pages/About'
import Journal    from './pages/Journal'
import Article    from './pages/Article'
import Careers    from './pages/Careers'
import JobListing from './pages/JobListing'
import Signup     from './pages/Signup'
import Layout     from './components/layout/Layout'

const NotFound = () => (
  <div className="w-full min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-center gap-6">

    {/* Top message */}
    <p className="text-[16px] text-[#1a1a2e]/60 font-[subheading]">
      The page you are looking for does not exist
    </p>

    {/* 4 ✳ 4 */}
    <div className="flex items-center gap-2">
      <span
        className="text-[220px] font-extrabold text-[#1a1a2e] leading-none"
        style={{ fontFamily: 'heading, serif' }}
      >
        4
      </span>
      <span
        className="text-[180px] font-black text-[#1a1a2e] leading-none"
        style={{ fontFamily: 'heading, serif' }}
      >
        ✳
      </span>
      <span
        className="text-[220px] font-extrabold text-[#1a1a2e] leading-none"
        style={{ fontFamily: 'heading, serif' }}
      >
        4
      </span>
    </div>

    {/* GO HOME button */}
    <Link
      to="/"
      className="bg-[#1a1a2e] text-white text-[13px] font-semibold tracking-widest px-16 py-4 hover:opacity-80 transition font-[btn] uppercase"
    >
      Go Home
    </Link>

  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/journal"        element={<Journal />} />
          <Route path="/journal/:slug"  element={<Article />} />
          <Route path="/careers"        element={<Careers />} />
          <Route path="/careers/:jobId" element={<JobListing />} />
          <Route path="/signup"         element={<Signup />} />
          <Route path="/product"        element={<Home />} />
          <Route path="*"               element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App