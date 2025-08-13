import React, { useEffect, useRef } from 'react';

const CTAFooter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const grainCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Animated gradient canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1800;
    canvas.height = 1000;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.008;
      
      // Create flowing gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 200, 
        canvas.height / 2 + Math.cos(time * 0.7) * 150, 
        100,
        canvas.width / 2, 
        canvas.height / 2, 
        Math.max(canvas.width, canvas.height)
      );
      
      gradient.addColorStop(0, `hsl(${240 + Math.sin(time) * 30}, 70%, 60%)`);
      gradient.addColorStop(0.3, `hsl(${280 + Math.cos(time * 0.7) * 40}, 80%, 65%)`);
      gradient.addColorStop(0.7, `hsl(${160 + Math.sin(time * 1.2) * 50}, 75%, 55%)`);
      gradient.addColorStop(1, `hsl(${200 + Math.cos(time * 0.5) * 60}, 65%, 50%)`);

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
      data[i + 3] = 15;    // Alpha
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@arsh44n.work@gmail.com';
  };

  const handleMailLinkClick = () => {
    window.location.href = 'mailto:contact@arsh44n.work@gmail.com';
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact">
        <div className="contact-gradient">
          <canvas ref={canvasRef} className="contact-video"></canvas>
          <canvas ref={grainCanvasRef} className="grain"></canvas>
        </div>
        <div className="contact-content">
          <h2>
            Wanna create <br /> 
            something <span>awesome</span> <br /> 
            together?
          </h2>
          <div className="contact-details">
            <a 
              href="mailto:contact@arsh44n.work@gmail.com" 
              className="star-button"
              onClick={handleEmailClick}
            >
              <span>✦</span>Let's talk<span>✦</span>
            </a>
            <p className="mail-link">
              Don't like flashy buttons? Reach out at&nbsp;
              <a onClick={handleMailLinkClick} style={{ cursor: 'pointer' }}>
                contact@arsh44n.work@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;