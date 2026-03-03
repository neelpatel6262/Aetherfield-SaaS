// src/components/layout/Layout.jsx
import React from 'react';
import { motion } from 'motion/react';   
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />

 
      <motion.main
        key={location.pathname} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>

      <Footer />
    </motion.div>
  );
};

export default Layout;