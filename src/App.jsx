import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto px-6 pt-20'>
        <Hero />
      </div>
      <Features />
    </>
  );
}

export default App