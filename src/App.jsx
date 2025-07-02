import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto px-6 pt-20'>
        <Hero />
      </div>
    </>
  );
}

export default App