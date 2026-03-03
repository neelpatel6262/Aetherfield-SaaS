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
  <div className="w-full min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-center gap-8">

    {/* Top message */}
    <p className="text-[16px] text-black/50 font-[subheading]">
      The page you are looking for does not exist
    </p>

    {/* 4 ✳ 4 */}
    <div className="flex items-center leading-none">
      <span
        className="font-extrabold text-black"
        style={{ fontFamily: 'heading, serif', fontSize: '380px', lineHeight: 1 }}
      >
        4
      </span>
      <span
        className="font-black text-black"
        style={{ fontFamily: 'heading, serif', fontSize: '300px', lineHeight: 1 }}
      >
        ✳
      </span>
      <span
        className="font-extrabold text-black"
        style={{ fontFamily: 'heading, serif', fontSize: '380px', lineHeight: 1 }}
      >
        4
      </span>
    </div>

    {/* GO HOME button */}
    <Link
      to="/"
      className="bg-black text-white text-[13px] font-semibold tracking-widest px-20 py-5 hover:opacity-70 transition font-[btn] uppercase"
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