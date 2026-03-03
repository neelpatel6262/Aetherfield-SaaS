import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Journal from './pages/Journal';
import Article from './pages/Article';
import Careers from './pages/Careers';
import JobListing from './pages/JobListing';
import Signup from './pages/Signup';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<Article />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/job-listing/:id" element={<JobListing />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

     
      </Routes>
    </BrowserRouter>
  );
};

export default App;