import  { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png'; 
import {navItems} from '../constants';


const Navbar = () => {
 const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
 const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
 };

  return (
    <nav
      className="sticky top-0 z-50 py-3 
    backdrop-blur-lg border-b 
    border-neutral-700/80"
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl font-semibold text-white">
              Virtual Labs
            </span>
          </div>

          {/* Navlinks */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a className="py-2 px-3 border rounded-md " href="#">
              Sign In
            </a>
            <a
              className="bg-gradient-to-r
                    from-orange-500 to-orange-800
                    py-2 px-3 rounded-md"
              href=""
            >
              Create an account
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end items-center">
            <button onClick={toggleNavbar} className="cursor-pointer">
              {mobileDrawerOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-20 bg-neutral-900
                w-full p-12 flex flex-col justify-center items-center lg:hidden"
          >
            <ul>
                {navItems.map((item, index) => (
                    <li key={index} className="my-4">
                    <a
                        href={item.href}
                        className="text-lg text-white hover:text-orange-500"
                    >
                        {item.label}
                    </a>
                    </li>
                ))}
                </ul>
                <div className='flex space-x-6 mt-8'>
                    <a
                    className="py-2 px-3 border rounded-md text-white"
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
                    
            
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar