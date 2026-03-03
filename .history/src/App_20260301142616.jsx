import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home       from './pages/Home'
import About      from './pages/About'
import Journal    from './pages/Journal'
import Article    from './pages/Article'
import Careers    from './pages/Careers'
import JobListing from './pages/JobListing'
import Signup     from './pages/Signup'
import Layout     from './components/layout/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/journal"        element={<Journal />} />
          <Route path="/journal/:slug"  element={<Article />} />   {/* ✅ article */}
          <Route path="/careers"        element={<Careers />} />
          <Route path="/careers/:jobId" element={<JobListing />} /> {/* ✅ job */}
          <Route path="/signup"         element={<Signup />} />
          <Route path="/product"        element={<Home />} />
          <Route path="*"              element={<NotFound />} />    {/* ✅ catch all */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const NotFound = () => (
  <div className="w-container max-w-container mx-auto px-5 py-32 text-center">
    <h1 className="text-[48px] font-extrabold text-black mb-4 font-[heading]">404</h1>
    <p className="text-[16px] text-gray-500 mb-8 font-[subheading]">Page not found.</p>
    <a href="/" className="bg-black text-white text-[14px] px-7 py-3 font-[btn]">Go Home</a>
  </div>
)

export default App