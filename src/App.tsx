import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SelectedWork from './components/SelectedWork';
import AboutSection from './components/AboutSection';
import SkillsServices from './components/SkillsServices';
import CTAFooter from './components/CTAFooter';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen">
      <Header 
        scrollToSection={scrollToSection} 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <main>
        <HeroSection 
          scrollToSection={scrollToSection}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        <SelectedWork />
        <AboutSection scrollToSection={scrollToSection} />
        <SkillsServices />
        <CTAFooter />
      </main>
    </div>
  );
}

export default App;