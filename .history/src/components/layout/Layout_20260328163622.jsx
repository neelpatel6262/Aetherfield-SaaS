import React from 'react';
import { motion } from 'motion/react';
import { Outlet, useLocation } from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation(); 

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;