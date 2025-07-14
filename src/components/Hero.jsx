import React, { useRef, useEffect } from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Create refs for elements to animate
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const gradientTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const videosRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  useEffect(() => {
    // Initial setup - hide elements
    gsap.set([headingRef.current, gradientTextRef.current, paragraphRef.current, buttonsRef.current], {
      opacity: 0,
      y: 30
    });

    gsap.set([video1Ref.current, video2Ref.current], {
      opacity: 0,
      scale: 0.9
    });

    // Create animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2
    })
    .to(gradientTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      backgroundPosition: '200% center',
      ease: 'power2.out'
    }, "-=0.4")
    .to(paragraphRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.4")
    .to(buttonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.6");

    // Animate videos with ScrollTrigger
    gsap.to([video1Ref.current, video2Ref.current], {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: videosRef.current,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    // Add hover animations to buttons
    primaryBtnRef.current.addEventListener('mouseenter', () => {
      gsap.to(primaryBtnRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power1.out'
      });
    });

    primaryBtnRef.current.addEventListener('mouseleave', () => {
      gsap.to(primaryBtnRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power1.in'
      });
    });

    secondaryBtnRef.current.addEventListener('mouseenter', () => {
      gsap.to(secondaryBtnRef.current, {
        scale: 1.05,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        duration: 0.3,
        ease: 'power1.out'
      });
    });

    secondaryBtnRef.current.addEventListener('mouseleave', () => {
      gsap.to(secondaryBtnRef.current, {
        scale: 1,
        backgroundColor: 'transparent',
        duration: 0.3,
        ease: 'power1.in'
      });
    });

    // Cleanup event listeners
    return () => {
      primaryBtnRef.current?.removeEventListener('mouseenter', () => {});
      primaryBtnRef.current?.removeEventListener('mouseleave', () => {});
      secondaryBtnRef.current?.removeEventListener('mouseenter', () => {});
      secondaryBtnRef.current?.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <div ref={heroRef} className="flex flex-col items-center justify-center mt-6 lg:mt-15">
      {/* text */}
      <h1 ref={headingRef} className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-tight">
        VirtualR build tools
        <span
          ref={gradientTextRef}
          className="bg-gradient-to-r from-orange-500 to-red-800
      text-transparent bg-clip-text"
        >
          {" "}
          for developers
        </span>
      </h1>

      <p ref={paragraphRef} className="mt-10 text-center text-lg text-neutral-300 max-w-4xl">
        VirtualR is your go-to platform for building and deploying virtual labs.
        Explore our tools and resources to enhance your development experience.
        Empower your coding journey with VirtualR.
      </p>
      {/* buttons */}
      <div ref={buttonsRef} className="flex justify-center my-10">
        <a
          ref={primaryBtnRef}
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4
        mx-3 rounded-md cursor-pointer"
          href="#"
        >
          Start for Free
        </a>
        <a 
          ref={secondaryBtnRef} 
          href="#" 
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Documentation
        </a>
      </div>
      {/* videos */}
      <div ref={videosRef} className="flex justify-center mt-10">
        <video
          ref={video1Ref}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-orange-700b shadow-orange-400 mx-2 my-4"
        >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <video
          ref={video2Ref}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-orange-700b shadow-orange-400 mx-2 my-4"
        >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Hero
