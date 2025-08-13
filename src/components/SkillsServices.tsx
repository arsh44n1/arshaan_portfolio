import React, { useEffect, useRef } from 'react';

const SkillsServices: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const skills = [
    {
      text: ["AI", "Automation"],
      videoSrc: "src/asset/artificial-intelligence_17556437.webp&w=200&h=150&fit=crop"
    },
    {
      text: ["Web", "development"],
      videoSrc: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
    },
    {
      text: ["Interface", "design"],
      videoSrc: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
    },
    {
      text: ["Data", "Analysis"],
      videoSrc: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
    },
    {
      text: ["Adaptive", "engineering"],
      videoSrc: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoWrapper = entry.target.querySelector('.video-wrapper');
          if (entry.isIntersecting) {
            videoWrapper?.classList.add('video-visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillSections = document.querySelectorAll('.skill-section');
    skillSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills">
      <p className="skills-title">Skills & Services</p>
      {skills.map((skill, index) => (
        <div key={index} className="skill-section">
          <p>{skill.text[0]}</p>
          <span className="video-wrapper">
            <img
              src={skill.videoSrc}
              alt={`${skill.text[0]} ${skill.text[1]} animation`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '30px',
                display: 'block'
              }}
            />
          </span>
          <p>{skill.text[1]}</p>
        </div>
      ))}
    </section>
  );
};

export default SkillsServices;