import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 size={32} />
              <span className="text-xl font-bold">E-Cell AIET</span>
            </div>
            <p className="text-gray-400">
              Powering Entrepreneurship at Alva's Institute of Engineering and Technology
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/events" className="hover:text-gray-300">Events</Link></li>
              <li><Link to="/team" className="hover:text-gray-300">Team</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link to="/newsletter" className="hover:text-gray-300">Newsletter</Link></li>
              <li><Link to="/mentorship" className="hover:text-gray-300">Mentorship</Link></li>
              <li><Link to="/partners" className="hover:text-gray-300">Partners</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Alva's Institute of Engineering and Technology<br />
              Shobhavana Campus, Mijar<br />
              Moodbidri, Karnataka 574225
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;