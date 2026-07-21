import React, { useEffect, useRef, useState } from 'react';

export default function CosmicVortexBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Opacity fades out linearly as user scrolls past 60% of hero height
      const fadeProgress = Math.max(0, 1 - scrollY / (heroHeight * 0.75));
      setHeroOpacity(fadeProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle vortex tilt
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particle Colors matching the image: Electric Cyan, Bright Teal, Neon Purple, Deep Indigo
    const colors = [
      '#00f2fe', // Electric Cyan
      '#00c9a7', // Bright Teal
      '#a855f7', // Neon Purple
      '#38bdf8', // Sky Cyan
      '#818cf8', // Electric Indigo
      '#c084fc', // Light Violet
    ];

    interface Particle {
      angle: number;
      radius: number;
      z: number;
      speed: number;
      radialSpeed: number;
      size: number;
      color: string;
      alpha: number;
    }

    const PARTICLE_COUNT = 900;
    const particles: Particle[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * Math.max(width, height) * 0.7 + 40,
        z: Math.random() * 800,
        speed: 0.002 + Math.random() * 0.006,
        radialSpeed: 0.2 + Math.random() * 0.8,
        size: 0.8 + Math.random() * 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.2 + Math.random() * 0.8,
      });
    }

    let vortexAngle = 0;

    const render = () => {
      // Save CPU/GPU resources when scrolled past landing page!
      if (window.scrollY > window.innerHeight * 1.2) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Dark space background with slight trails
      ctx.fillStyle = 'rgba(5, 6, 18, 0.25)';
      ctx.fillRect(0, 0, width, height);

      vortexAngle += 0.002;

      // Dynamic center shifting slightly toward mouse
      const targetCenterX = width / 2 + (mouseX - width / 2) * 0.05;
      const targetCenterY = height / 2 + (mouseY - height / 2) * 0.05;

      const FOV = 400;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];

        // Orbit update
        p.angle += p.speed;
        p.z -= p.radialSpeed * 1.5;

        // Reset particle if it gets too close
        if (p.z <= 0 || p.radius < 10) {
          p.z = 800;
          p.radius = Math.random() * Math.max(width, height) * 0.7 + 60;
          p.angle = Math.random() * Math.PI * 2;
        }

        // Perspective calculation
        const scale = FOV / (FOV + p.z);
        const x = targetCenterX + Math.cos(p.angle) * p.radius * scale;
        const y = targetCenterY + Math.sin(p.angle) * p.radius * scale;

        // Render point if within bounds
        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          ctx.beginPath();
          ctx.arc(x, y, p.size * scale * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * scale;
          ctx.fill();

          // Subtle glow for larger particles
          if (p.size > 1.4) {
            ctx.shadowBlur = 8 * scale;
            ctx.shadowColor = p.color;
          } else {
            ctx.shadowBlur = 0;
          }
        }
      }

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      // Central dark vortex hole circle effect (as in image)
      const coreRadius = 45;
      const coreGradient = ctx.createRadialGradient(
        targetCenterX,
        targetCenterY,
        0,
        targetCenterX,
        targetCenterY,
        coreRadius * 2.5
      );
      coreGradient.addColorStop(0, '#03030a');
      coreGradient.addColorStop(0.3, '#050614');
      coreGradient.addColorStop(0.6, 'rgba(168, 85, 247, 0.15)');
      coreGradient.addColorStop(1, 'rgba(5, 6, 18, 0)');

      ctx.beginPath();
      ctx.arc(targetCenterX, targetCenterY, coreRadius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      // Sharp central black hole
      ctx.beginPath();
      ctx.arc(targetCenterX, targetCenterY, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#030308';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity: heroOpacity }}
      className="fixed inset-0 pointer-events-none -z-50 w-full h-full transition-opacity duration-300"
    />
  );
}
