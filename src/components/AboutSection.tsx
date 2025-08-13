import React from 'react';
import { Sparkles } from 'lucide-react';

interface AboutSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollToSection }) => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="videos">
          <img 
            src="src/asset/ChatGPT Image Apr 20, 2025 at 07_12_54 AM (1).png" 
            alt="Arshaan Khan"
            className="about-video"
          />
          <img 
            src="###################" 
            alt="Coding"
            className="about-video-overlay"
          />
        </div>
        <div className="text">
          <p>
            <span className="word">I'm </span>
            <span className="word">an</span>
            <span className="word">AI </span>
            <span className="word">Automater </span>
            <span className="word">,business </span>
            <span className="word">Analyst </span>
            <span className="word">& </span>
            <span className="word">WebDesingner </span>
            <span className="word">based </span>
            <span className="word">in </span>
            <span className="word">India </span>
            <span className="word">I </span>
            <span className="word">specialize </span>
            <span className="word">in </span>
            <span className="word">AI </span>
            <span className="word">Engineering, </span>
            <span className="word">focusing </span>
            <span className="word">on </span>
            <span className="word">building </span>
            <span className="word">high </span>
            <span className="word">quality </span>
            <span className="word">Optimized </span>
            <span className="word">experiences </span>
            <span className="word">through </span>
            <span className="word">clean </span>
            <span className="word">Workflows,Code </span>
            <span className="word">and </span>
            <span className="word">thoughtful </span>
            <span className="word">design. </span>
          </p>
          <a 
            href="#contact" 
            className="star-button blur blur-visible"
            onClick={() => scrollToSection('contact')}
          >
            <span>✦</span>Get in touch<span>✦</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;