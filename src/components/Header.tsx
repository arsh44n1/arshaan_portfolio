import React, { useState } from 'react';
import { Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-main">
      <div className="top-line"></div>
      <div className="header-container">
        <div className="header-logo-box">
          <a href="#" className="logo-link">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border-2 border-current rounded-lg flex items-center justify-center logo-icon">
                <span className="font-bold text-lg">A</span>
              </div>
              <span className="font-semibold text-lg logo-text">Arshaan Khan</span>
            </div>
          </a>
          
          {/* SVG Corners */}
          <svg className="svg-corner corner-logo-box-one" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <svg className="svg-corner corner-logo-box-two" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>

          {/* Mobile Menu Button */}
          <div 
            className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            <svg className="svg-corner corner-menu-one" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clipPath="url(#clip0_310_2)">
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#5c54f9"></path>
              </g>
              <defs>
                <clipPath id="clip0_310_2">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Mobile Menu Container */}
          <div className={`menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#projects" className="mobile-link" onClick={() => { scrollToSection('projects'); setIsMobileMenuOpen(false); }}>Projects</a>
            <a href="#about" className="mobile-link" onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}>About</a>
            <a href="#blog" className="mobile-link" onClick={() => { scrollToSection('blog'); setIsMobileMenuOpen(false); }}>Blog</a>
            <a href="#contact" className="mobile-link" onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}>Contact</a>
            <div className="mobile-theme-switch">
              <label className={`container ${isDarkMode ? 'IsDark' : 'IsLight'}`}>
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                <div></div>
              </label>
              <p>Dark Mode</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div style={{ transform: 'translateX(0px)' }}>
          <nav className="navigation">
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#blog" target="_blank">Blog</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            <label className={`container ${isDarkMode ? 'IsDark' : 'IsLight'}`}>
              <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
              <div></div>
            </label>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;