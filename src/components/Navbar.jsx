import  { Menu, X } from 'lucide-react';
import { useState, useRef } from 'react';
import logo from '../assets/logo.png'; 
import {navItems} from '../constants';


const Navbar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const buttonsRef = useRef(null);
  const mobileDrawerRef = useRef(null);

  // Toggle mobile navbar
  const toggleNavbar = () => {
    if (mobileDrawerOpen) {
      setmobileDrawerOpen(false);
      setDrawerVisible(false);
    } else {
      setmobileDrawerOpen(true);
      setDrawerVisible(true);
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

        {/* Mobile Drawer */}
        {drawerVisible && (
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
                        hover:text-orange-500 relative
                        pl-4 border-l-2 border-transparent hover:border-orange-500"
                    >
                        {item.label}
                    </a>
                    </li>
                ))}
                </ul>
                <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-10 w-full sm:w-auto'>
                    <a
                    className="py-3 px-6 border border-white/20 rounded-md text-white
                    hover:bg-white hover:text-black
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
        )}
      </div>
    </nav>
  );
}

export default Navbar
