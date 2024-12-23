import React, { useEffect, useRef } from 'react';

export function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const speedRef = useRef(0);
  const lastScrollY = useRef(window.scrollY);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
    }[] = [];

    // Create stars
    const starCount = 300; // Reduced number of stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 1000,
        size: Math.random() * 0.5 + 0.5, // Slightly smaller stars
        speed: Math.random() * 0.3 + 0.2, // Slower base speed
      });
    }

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    function drawStars() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Reduced opacity for smoother trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move stars towards viewer (out of screen) even without scrolling
        star.z -= star.speed + speedRef.current;

        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
        }

        const x = (star.x / star.z) * 500 + centerX;
        const y = (star.y / star.z) * 500 + centerY;
        const size = (1 - star.z / 1000) * 3; // Reduced maximum size

        // Create gradient for each star
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Gradually decrease speed when not scrolling
      if (!scrollTimeout.current) {
        speedRef.current = Math.max(0, speedRef.current * 0.95);
      }

      animationRef.current = requestAnimationFrame(drawStars);
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDelta = Math.abs(currentScroll - lastScrollY.current);
      lastScrollY.current = currentScroll;

      // Increase speed based on scroll intensity
      speedRef.current = Math.min(10, scrollDelta * 0.1); // Reduced maximum speed and sensitivity

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set new timeout
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = undefined;
      }, 150);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    animationRef.current = requestAnimationFrame(drawStars);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}

