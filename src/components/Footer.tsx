import { ArrowUp, Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} Ravisha Abeysekara. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop} 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-800 transition-all duration-300 shadow"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;