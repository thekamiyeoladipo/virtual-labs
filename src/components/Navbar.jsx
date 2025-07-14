import  { Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png'; 
import {navItems} from '../constants';
import { gsap } from 'gsap';

const Navbar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const navLinkItemsRef = useRef([]);
  const buttonsRef = useRef(null);
  const mobileDrawerRef = useRef(null);

  // Initialize animations on component mount
  useEffect(() => {
    // Initial setup - hide navbar elements
    gsap.set([logoRef.current, navLinksRef.current, buttonsRef.current], { 
      opacity: 0,
      y: -20
    });

    // Hide mobile drawer initially
    gsap.set(mobileDrawerRef.current, {
      opacity: 0,
      y: -50,
      display: 'none'
    });

    // Entrance animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(navbarRef.current, {
      duration: 0.5,
      opacity: 1,
      y: 0
    })
    .to(logoRef.current, {
      duration: 0.6,
      opacity: 1,
      y: 0
    })
    .to(navLinksRef.current, {
      duration: 0.6,
      opacity: 1,
      y: 0
    }, "-=0.3")
    .to(buttonsRef.current, {
      duration: 0.6,
      opacity: 1,
      y: 0
    }, "-=0.3");

    // Add hover animations to nav links
    const navLinks = navLinksRef.current?.querySelectorAll('a') || [];
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          duration: 0.3,
          color: '#f97316', // orange-500
          scale: 1.05,
          ease: 'power1.out'
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          duration: 0.3,
          color: 'white',
          scale: 1,
          ease: 'power1.in'
        });
      });
    });

    return () => {
      // Clean up event listeners
      navLinks.forEach(link => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Toggle mobile navbar with GSAP animation
  const toggleNavbar = () => {
    if (mobileDrawerOpen) {
      // Close drawer with animation
      gsap.to(mobileDrawerRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -50,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(mobileDrawerRef.current, { display: 'none' });
        }
      });
      setmobileDrawerOpen(false);
    } else {
      // Open drawer with animation
      gsap.set(mobileDrawerRef.current, { 
        display: 'flex',
        y: -50
      });
      gsap.to(mobileDrawerRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power3.out'
      });

      // Animate mobile menu items with stagger
      const mobileLinks = mobileDrawerRef.current?.querySelectorAll('li') || [];
      gsap.from(mobileLinks, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.2
      });

      // Animate buttons
      const mobileButtons = mobileDrawerRef.current?.querySelectorAll('a') || [];
      gsap.from(mobileButtons, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.4
      });

      setmobileDrawerOpen(true);
    }
  };

  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 z-50 py-3 
    backdrop-blur-lg border-b 
    border-neutral-700/80"
      style={{
        background: "linear-gradient(to right, rgba(15, 15, 15, 0.8), rgba(23, 23, 23, 0.8))",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div ref={logoRef} className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl font-semibold text-white">
              Virtual Labs
            </span>
          </div>

          {/* Navlinks */}
          <ul ref={navLinksRef} className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="relative text-white hover:text-orange-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div ref={buttonsRef} className="hidden lg:flex justify-center space-x-12 items-center">
            <a 
              className="py-2 px-3 border rounded-md hover:bg-white hover:text-black hover:border-white" 
              href="#"
            >
              Sign In
            </a>
            <a
              className="bg-gradient-to-r from-orange-500 to-orange-800
                    py-2 px-3 rounded-md text-white"
              href=""
            >
              Create an account
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end items-center">
            <button 
              onClick={toggleNavbar} 
              className="cursor-pointer"
            >
              {mobileDrawerOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer - Always in DOM but controlled by GSAP */}
        <div
          ref={mobileDrawerRef}
          className="fixed right-0 z-20 
              bg-gradient-to-br from-neutral-900 to-neutral-950
              w-full p-12 flex flex-col justify-center items-center lg:hidden
              shadow-xl border-t border-neutral-800/30 backdrop-blur-sm"
          style={{
            backgroundImage: "linear-gradient(to bottom right, #0f0f0f, #1a1a1a)"
          }}
        >
          <ul className="w-full flex flex-col items-center">
            {navItems.map((item, index) => (
              <li key={index} className="my-4">
                <a
                  href={item.href}
                  onClick={toggleNavbar}
                  className="text-xl font-medium text-white block
                  relative pl-4 border-l-2 border-transparent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-10 w-full sm:w-auto'>
            <a
              className="py-3 px-6 border border-white/20 rounded-md text-white
              backdrop-blur-sm text-center"
              href="#"
            >
              Sign In
            </a>

            <a
              className="bg-gradient-to-r from-orange-500 to-orange-800
                      py-3 px-6 rounded-md text-white
                      text-center font-medium"
              href=""
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
