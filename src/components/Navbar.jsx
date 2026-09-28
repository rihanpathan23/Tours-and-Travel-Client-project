import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect detect karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Direct smooth scroll function
  const scrollToSection = (id) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      // Thoda offset add karte hain taaki sticky navbar content ko cover na kare
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Destinations', id: 'destinations' },
    { name: 'Packages', id: 'packages' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-gray-100/50 py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-3xl font-extrabold tracking-tighter text-blue-600 focus:outline-none cursor-pointer flex items-center gap-1 group"
            >
              Travel<span className="text-gray-900 transition-colors duration-300 group-hover:text-blue-500">Go</span>
              <span className="text-blue-500 w-2 h-2 rounded-full bg-blue-500 ml-1 mb-2 animate-pulse"></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="relative text-gray-600 hover:text-blue-600 font-semibold text-sm uppercase tracking-wide transition-colors duration-300 focus:outline-none cursor-pointer group py-2"
              >
                {link.name}
                {/* Animated Underline */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Book Now Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('booking')}
              className="relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)] hover:shadow-[0_14px_24px_-6px_rgba(37,99,235,0.6)] transform hover:-translate-y-0.5 focus:outline-none"
            >
              <span className="relative z-10">Book Now</span>
              {/* Button Hover Glow Effect */}
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-400 ease-in-out shadow-2xl ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`} 
        id="mobile-menu"
      >
        <div className="px-6 pt-4 pb-8 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-4 py-3.5 text-base font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-200 cursor-pointer uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-6 pb-2">
            <button 
              onClick={() => scrollToSection('booking')}
              className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)] focus:outline-none"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;