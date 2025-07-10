import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const BackToTop = () => {
  const buttonRef = useRef(null);

  // Initialize and handle button visibility with GSAP
  useEffect(() => {
    // Initially hide the button
    gsap.set(buttonRef.current, { 
      opacity: 0, 
      scale: 0.5, 
      display: 'none' 
    });

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        // Show button with animation
        gsap.to(buttonRef.current, {
          duration: 0.5,
          opacity: 1,
          scale: 1,
          display: 'block',
          ease: 'back.out(1.7)'
        });
      } else {
        // Hide button with animation
        gsap.to(buttonRef.current, {
          duration: 0.3,
          opacity: 0,
          scale: 0.5,
          display: 'none',
          ease: 'power2.in'
        });
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check initial state

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Enhanced scroll to top function with GSAP
  const scrollToTop = () => {
    // Button press animation
    gsap.to(buttonRef.current, {
      duration: 0.1,
      scale: 0.9,
      yoyo: true,
      repeat: 1
    });

    // Scroll animation
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0, autoKill: true },
      ease: 'power3.inOut'
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="cursor-pointer fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-800 text-white shadow-lg hover:shadow-xl z-50"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
