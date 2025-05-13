import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import logo from '../images/image1.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop >= 0 && sectionTop <= window.innerHeight / 2 && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'articles', label: 'Articles' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 shadow-md py-3' : 'bg-white py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="logo">
          <a 
            href="#home" 
            className="font-bold text-2xl text-gray-900 tracking-tight flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-11  w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mx-3 py-2 px-2 text-gray-700 font-medium transition-colors duration-200 hover:text-blue-600 ${activeSection === item.id ? 'text-blue-600' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button 
            className="md:hidden text-blue-600 hover:text-blue-800 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button className="button-blue-sm hidden md:inline-block ml-4">Dashboard</button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-blue-600"><X size={28} /></button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <ul className="flex flex-col items-center space-y-6">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;