import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home        from './pages/Home'
import About       from './pages/About'
import Journal     from './pages/Journal'
import Article     from './pages/Article'
import Careers     from './pages/Careers'
import JobListing  from './pages/JobListing'
import SignUp      from './pages/SignUp'
import NotFound    from './pages/NotFound'        
import Layout      from './components/layout/Layout'
import ScrollToTop from './components/ui/ScrollToTop'

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

        <Route path="/product"          element={<NotFound />} />
        <Route path="*"                 element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App