import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Journal from './pages/Journal'
import Article from './pages/Article'
import Careers from './pages/Careers'
import Signup from './pages/Signup'
import JobListing from './pages/JobListing'
import Navbar from './components/layout/Navbar'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job-listing/:id" element={<JobListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
