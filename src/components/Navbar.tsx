import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1e1b4b] py-4 px-6 shadow-lg">
      <div className=" container mx-auto">
        <div className=" flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 size={32} />
            <span className="text-xl font-bold">E-Cell AIET</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 hover:text-gray-300"
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}
              >
                <Link to="/about-us" className="hover:text-gray-300">About Us</Link>
                <ChevronDown size={16} />
              </button>
              
              {showAboutDropdown && (
                <div 
                  className="absolute top-full left-0 bg-[#1e1b4b] py-2 w-48 shadow-xl rounded-md"
                  onMouseEnter={() => setShowAboutDropdown(true)}
                  onMouseLeave={() => setShowAboutDropdown(false)}
                >
                  <Link to="/chairman-message" className="block px-4 py-2 hover:bg-[#2d2a5a]">
                    Message from Chairman
                  </Link>
                  <Link to="/trustee-message" className="block px-4 py-2 hover:bg-[#2d2a5a]">
                    Message from Trustee
                  </Link>
                </div>
              )}
            </div>

            <Link to="/what-we-do" className="hover:text-gray-300">What We Do</Link>
            <Link to="/events" className="hover:text-gray-300">Events</Link>
            <Link to="/startups" className="hover:text-gray-300">Start Ups</Link>
            <Link to="/success-stories" className="hover:text-gray-300">Success Stories</Link>
            <Link to="/join-us" className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-gray-300">Home</Link>
            <div className="space-y-2">
              <button 
                className="flex items-center space-x-1"
                onClick={() => setShowAboutDropdown(!showAboutDropdown)}
              >
                <span>About Us</span>
                <ChevronDown size={16} />
              </button>
              {showAboutDropdown && (
                <div className="pl-4 space-y-2">
                  <Link to="/chairman-message" className="block hover:text-gray-300">
                    Message from Chairman
                  </Link>
                  <Link to="/trustee-message" className="block hover:text-gray-300">
                    Message from Trustee
                  </Link>
                </div>
              )}
            </div>
            <Link to="/what-we-do" className="block hover:text-gray-300">What We Do</Link>
            <Link to="/events" className="block hover:text-gray-300">Events</Link>
            <Link to="/startups" className="block hover:text-gray-300">Start Ups</Link>
            <Link to="/success-stories" className="block hover:text-gray-300">Success Stories</Link>
            <Link to="/join-us" className="block bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 text-center">
              Join Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;