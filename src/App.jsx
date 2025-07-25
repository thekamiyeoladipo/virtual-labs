import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BackToTop from './components/BackToTop';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';   
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SecondFooter from './components/SecondFooter';

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
      <Testimonials />
      <Footer />
      <SecondFooter />
    </>
  );
};

export default App
