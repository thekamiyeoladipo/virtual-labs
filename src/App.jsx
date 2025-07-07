import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BackToTop from './components/BackToTop';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';   

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <Hero />
      </div>
      <Features />
      <BackToTop />
      <Workflow />
      <Pricing />
    </>
  );
};

export default App
