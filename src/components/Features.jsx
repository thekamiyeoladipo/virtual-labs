import { features } from '../constants';
import { useRef, useEffect, createRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  // Create refs for elements to animate
  const featuresRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const gradientTextRef = useRef(null);
  const featureItemsRef = useRef(null);
  const featureRefs = useRef(features.map(() => createRef()));

  useEffect(() => {
    // Initial setup - hide elements
    gsap.set(labelRef.current, {
      opacity: 0,
      y: -20
    });

    gsap.set([headingRef.current, gradientTextRef.current], {
      opacity: 0,
      y: 30
    });

    // Create animations with ScrollTrigger

    // Animate label
    gsap.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: featuresRef.current,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate heading
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: featuresRef.current,
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse'
      }
    });

    headingTl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8
    })
    .to(gradientTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      backgroundPosition: '200% center',
      ease: 'power2.out'
    }, "-=0.6");

    // Animate feature items with stagger
    const featureElements = featureRefs.current.map(ref => ref.current);

    gsap.from(featureElements, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: featureItemsRef.current,
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse'
      }
    });

    // Add hover effect to feature items
    featureElements.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          y: -10,
          scale: 1.03,
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          y: 0,
          scale: 1,
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power2.in'
        });
      });
    });

    // Cleanup
    return () => {
      featureElements.forEach(item => {
        item?.removeEventListener('mouseenter', () => {});
        item?.removeEventListener('mouseleave', () => {});
      });

      // Kill ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={featuresRef}
      id="features"
      className="relative mt-20 border-b border-neutral-800
    min-h-[800px]"
    >
      <div className="text-center">
        <span
          ref={labelRef}
          className="font-medium bg-neutral-900 text-orange-500
            rounded-full px-2 py-1 uppercase
            "
        >
          {" "}
          Features
        </span>
        <h2
          ref={headingRef}
          className="text-3xl sm:text-5xl lg:text-6xl
            mt-20 tracking-wide lg:mt-10"
        >
          Easily build
          <span
            ref={gradientTextRef}
            className="
                bg-gradient-to-r from-orange-500 to-orange-800
                text-transparent bg-clip-text"
          >
            {" "}
            your code.
          </span>
        </h2>
      </div>

      <div ref={featureItemsRef} className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div 
            key={index} 
            ref={featureRefs.current[index]}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="flex bg-neutral-900/30 p-4 rounded-lg h-full transition-all">
              <div
                className="flex justify-center 
                items-center text-orange-700
                 mx-6 h-10 w-10 p-2 bg-neutral-900 rounded-full "
              >
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className='text-md p-2 mb-6 text-neutral-500'>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features
