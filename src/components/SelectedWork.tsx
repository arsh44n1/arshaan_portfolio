import React from 'react';

const SelectedWork: React.FC = () => {
  const projects = [
    {
      title: "Neurion AI",
      description: "AI Automation Agency",
      url: "https://neurionai.netlify.app/"
    },
    {
      title: "AI Voice prescription",
      description: "Animated UI Components",
      url: "https://github.com/arsh44n/AI-Voice-Prescription"
    },
    {
      title: "IP Wire",
      description: "Straightforward IP Tracker",
      url: "https://github.com/arshaan-khan"
    },
    {
      title: "GitHub",
      description: "See More On",
      url: "https://github.com/arshaan-khan"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <p className="projects-title">Selected Work</p>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} style={{ transform: 'translateY(0px) scale(1)', opacity: 1 }}>
              <a 
                target="_blank" 
                href={project.url} 
                className="card"
                rel="noopener noreferrer"
              >
                <div className="card-text">
                  <p className="description">{project.description}</p>
                  <h2 className="title">{project.title}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;