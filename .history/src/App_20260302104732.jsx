import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home        from './pages/Home'
import About       from './pages/About'
import Journal     from './pages/Journal'
import Article     from './pages/Article'
import Careers     from './pages/Careers'
import JobListing  from './pages/JobListing'
import Signup      from './pages/Signup'
import Layout      from './components/layout/Layout'
import ScrollToTop from './components/ui/ScrollToTop'




const NotFound = () => (
  <div className="w-full min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-center gap-6 px-4">
    <p className="text-[14px] md:text-[16px] text-black/50 font-[subheading] text-center">
      The page you are looking for does not exist
    </p>
    <div className="flex items-center leading-none">
      <span
        className="font-extrabold text-black"
        style={{ fontFamily: 'heading, serif', fontSize: 'clamp(120px, 20vw, 380px)', lineHeight: 1 }}
      >
        4
      </span>
      <span
        className="font-black text-black"
        style={{ fontFamily: 'heading, serif', fontSize: 'clamp(90px, 15vw, 300px)', lineHeight: 1 }}
      >
        ✳
      </span>
      <span
        className="font-extrabold text-black"
        style={{ fontFamily: 'heading, serif', fontSize: 'clamp(120px, 20vw, 380px)', lineHeight: 1 }}
      >
        4
      </span>
    </div>
    <Link
      to="/"
      className="bg-black text-white text-[12px] md:text-[13px] font-semibold tracking-widest px-12 md:px-20 py-4 md:py-5 hover:opacity-70 transition font-[btn] uppercase mt-2"
    >
      Go Home
    </Link>
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* ✅ Pages WITH Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/journal"        element={<Journal />} />
          <Route path="/journal/:slug"  element={<Article />} />
          <Route path="/careers"        element={<Careers />} />
          <Route path="/careers/:jobId" element={<JobListing />} />
          <Route path="/signup"         element={<Signup />} />
          <Route path="/product"        element={<Home />} />
        </Route>

        {/* ✅ Pages WITHOUT Navbar + Footer */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App