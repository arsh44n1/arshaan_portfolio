import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  scrollToSection, 
  currentSlide, 
  setCurrentSlide 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const grainCanvasRef = useRef<HTMLCanvasElement>(null);

  const circleStats = [
    { number: "132", text: "Liters of coffee consumed this year" },
    { number: "453K", text: "Total lines of code written" },
    { number: "3,744", text: "Critical bugs fixed ...and counting" },
    { number: "10+", text: "Major projects delivered successfully" },
    { number: "160K", text: "Developers inspired worldwide" }
  ];

  const blogPosts = [
    {
      title: "Performance optimization for React 19 - all you need.",
      image: "/api/placeholder/280/150"
    },
    {
      title: "The 7 steps of building scalable React apps.",
      image: "/api/placeholder/280/150"
    },
    {
      title: "Getting started with WebGL shaders in JavaScript.",
      image: "/api/placeholder/280/150"
    },
    {
      title: "Mastering dynamic routing in Next.JS, step by step.",
      image: "/api/placeholder/280/150"
    },
    {
      title: "Building a responsive design system with Tailwind CSS.",
      image: "/api/placeholder/280/150"
    }
  ];

  useEffect(() => {
    // Animated gradient canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 463;
    canvas.height = 855;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${240 + Math.sin(time) * 30}, 70%, 60%)`);
      gradient.addColorStop(0.5, `hsl(${280 + Math.cos(time * 0.7) * 40}, 80%, 65%)`);
      gradient.addColorStop(1, `hsl(${160 + Math.sin(time * 1.2) * 50}, 75%, 55%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  useEffect(() => {
    // Grain effect
    const grainCanvas = grainCanvasRef.current;
    if (!grainCanvas) return;

    const ctx = grainCanvas.getContext('2d');
    if (!ctx) return;

    grainCanvas.width = 1686;
    grainCanvas.height = 1800;

    const imageData = ctx.createImageData(grainCanvas.width, grainCanvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 255;
      data[i] = noise;     // Red
      data[i + 1] = noise; // Green
      data[i + 2] = noise; // Blue
      data[i + 3] = 20;    // Alpha
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  const nextCircleSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % circleStats.length);
  };

  const nextBlogSlide = () => {
    const blogSlider = document.querySelector('#blog-slider') as any;
    if (blogSlider && blogSlider.swiper) {
      blogSlider.swiper.slideNext();
    }
  };

  return (
    <div className="hero">
      <div className="main-container">
        <div className="hero-container">
          <div className="hero-left">
            <div className="gradient-container">
              <canvas ref={grainCanvasRef} className="grain"></canvas>
              <div className="hero-gradient">
                <canvas ref={canvasRef}></canvas>
              </div>
            </div>
            <div className="content-box">
              <svg className="svg-corner corner-content-box-one" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clipPath="url(#clip0_310_2)">
                  <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clipPath id="clip0_310_2">
                    <rect width="30" height="30" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg className="svg-corner corner-content-box-two" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clipPath="url(#clip0_310_2)">
                  <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clipPath id="clip0_310_2">
                    <rect width="30" height="30" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <h1 className="title">
                <p>
                  <span className="word">Equal </span>
                  <span className="word">parts </span>
                  <span className="word">creative </span>
                  <span className="word">developer </span>
                  <span className="word">& </span>
                  <span className="word">designer </span>
                </p>
              </h1>
              <a className="scroll-indicator" href="#about" onClick={() => scrollToSection('about')}>
                <ArrowDown size={19} className="transform rotate-90" />
              </a>
            </div>
          </div>

          <div className="hero-right">
            {/* Circle Stats */}
            <div className="circle-stats">
              <div className="circle-overflow">
                <div className="swiper-container" onClick={nextCircleSlide}>
                  <div className="swiper-slide">
                    <h2>{circleStats[currentSlide].number}</h2>
                    <p>{circleStats[currentSlide].text}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="blog-posts">
              <div className="blog-slider-button" onClick={nextBlogSlide}>
                <span>
                  <ArrowDown size={19} className="transform rotate-90" />
                </span>
                <svg className="svg-corner corner-slider-button-one" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <g clipPath="url(#clip0_310_2)">
                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_310_2">
                      <rect width="30" height="30" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <svg className="svg-corner corner-slider-button-two" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <g clipPath="url(#clip0_310_2)">
                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_310_2">
                      <rect width="30" height="30" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="blog-slider">
                <div className="blog-slide">
                  <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=280&h=150&fit=crop" alt="React Performance" />
                  <p>Performance optimization for React 19 - all you need.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;