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
  const [currentBlogSlide, setCurrentBlogSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const circleStats = [
    { number: "2025", text: "College ended this year" },
    { number: "52", text: "Liters of coffee consumed this year" },
    { number: "73K", text: "Total lines of code deployed" },
    { number: "6+", text: "Projects delivered successfully" }
  ];

  const blogPosts = [
    {
      title: "Creating Creative Creations🧬🤖",
      image: "src/asset/graident-ai-robot-vectorart.png" 
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
      title: "Building a responjnjsive design system with Tailwind CSS.",
      image: "/api/placeholder/280/150"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoSliding) {
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentBlogSlide(prev => (prev + 1) % blogPosts.length);
      }, 2000);
    }

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [isAutoSliding, blogPosts.length]);

  // Manual navigation handler
  const handleManualNavigation = () => {
    setIsAutoSliding(false);
    setCurrentBlogSlide(prev => (prev + 1) % blogPosts.length);
    
    // Resume auto-sliding after 5 seconds of manual interaction
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 5000);
  };

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
    handleManualNavigation();
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
                  <span className="word">CrEaTiVe </span>
                  <span className="word">Engineer </span>
                  <span className="word"> & </span>
                  <span className="word">Designer </span>
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
              <div className="blog-slider" style={{ position: 'relative', overflow: 'hidden' }}>
                <div 
                  className="blog-slides-container" 
                  style={{
                    display: 'flex',
                    transform: `translateX(-${currentBlogSlide * 100}%)`,
                    transition: 'transform 0.5s ease-in-out',
                    width: `${blogPosts.length * 100}%`
                  }}
                >
                  {blogPosts.map((post, index) => (
                    <div 
                      key={index}
                      className="blog-slide"
                      style={{
                        width: `${100 / blogPosts.length}%`,
                        flexShrink: 0
                      }}
                    >
                      <img 
                        src={post.image} 
                        alt={post.title}
                        style={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'cover',
                          borderRadius: '20px',
                          marginBottom: '1em'
                        }}
                      />
                      <p style={{
                        width: '15ch',
                        fontSize: '1.6rem',
                        fontWeight: '400',
                        color: '#f9f8f6',
                        lineHeight: '1.2'
                      }}>
                        {post.title}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Slide indicators */}
                <div 
                  className="blog-slide-indicators"
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px',
                    zIndex: 10
                  }}
                >
                  {blogPosts.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: index === currentBlogSlide ? '#f9f8f6' : 'rgba(249, 248, 246, 0.3)',
                        transition: 'background-color 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        setCurrentBlogSlide(index);
                        setIsAutoSliding(false);
                        setTimeout(() => setIsAutoSliding(true), 5000);
                      }}
                    />
                  ))}
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