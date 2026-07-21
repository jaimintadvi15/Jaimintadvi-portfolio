import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";
const SPOTLIGHT_R = 260;

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
}

function RevealLayer({ image, cursorX, cursorY }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [maskUrl, setMaskUrl] = useState<string>('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || canvas.width === 0 || canvas.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (cursorX >= 0 && cursorY >= 0) {
      const gradient = ctx.createRadialGradient(
        cursorX,
        cursorY,
        0,
        cursorX,
        cursorY,
        SPOTLIGHT_R
      );

      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.75)');
      gradient.addColorStop(0.75, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(0.88, 'rgba(255, 255, 255, 0.12)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    try {
      const url = canvas.toDataURL();
      setMaskUrl(url);
    } catch {
      // Fallback if dataURL fails
    }
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ display: 'none' }} />
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
        style={{
          backgroundImage: `url(${image})`,
          maskImage: maskUrl ? `url(${maskUrl})` : 'none',
          WebkitMaskImage: maskUrl ? `url(${maskUrl})` : 'none',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      />
    </>
  );
}

export default function LithosHero() {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -999, y: -999 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mouseRef = useRef({ x: -999, y: -999 });
  const smoothRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (smoothRef.current.x === -999) {
        smoothRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const loop = () => {
      if (mouseRef.current.x !== -999) {
        smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.1;
        smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.1;

        setCursorPos({
          x: Math.round(smoothRef.current.x * 10) / 10,
          y: Math.round(smoothRef.current.y * 10) / 10,
        });
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        {/* Left Logo + Wordmark */}
        <div className="flex items-center gap-2">
          <svg className="w-6.5 h-6.5" width="26" height="26" viewBox="0 0 256 256" fill="#ffffff">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white text-2xl font-playfair italic select-none">Lithos</span>
        </div>

        {/* Center Pill Nav */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
          <button className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
            Course
          </button>
          <button className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium">
            Field Guides
          </button>
          <button className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium">
            Geology
          </button>
          <button className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium">
            Plans
          </button>
          <button className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium">
            Live Tour
          </button>
        </div>

        {/* Right Desktop Button */}
        <button className="hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors">
          Sign Up
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-[99] bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          <button className="text-left text-white font-medium py-2 border-b border-white/10">Course</button>
          <button className="text-left text-white/80 font-medium py-2 border-b border-white/10">Field Guides</button>
          <button className="text-left text-white/80 font-medium py-2 border-b border-white/10">Geology</button>
          <button className="text-left text-white/80 font-medium py-2 border-b border-white/10">Plans</button>
          <button className="text-left text-white/80 font-medium py-2 border-b border-white/10">Live Tour</button>
          <button className="bg-white text-gray-900 font-semibold py-3 rounded-full text-center mt-2">Sign Up</button>
        </div>
      )}

      {/* Main Full-Screen Hero Section */}
      <section className="relative w-full overflow-hidden h-screen bg-black" style={{ height: '100dvh' }}>
        {/* Layer 1: Base Image (z-10) */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
          style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
        />

        {/* Layer 2: Reveal Spotlight Layer (z-30) */}
        <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

        {/* Layer 3: Heading (z-50) */}
        <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
          <h1 className="text-white leading-[0.95]">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
              style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
            >
              Layers hold
            </span>
            <span
              className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
              style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
            >
              tales of time
            </span>
          </h1>
        </div>

        {/* Layer 4: Bottom-Left Paragraph (z-50) */}
        <div
          className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50 hero-anim hero-fade pointer-events-none"
          style={{ animationDelay: '0.7s' }}
        >
          <p className="text-sm text-white/80 leading-relaxed">
            Every layer of sediment records a chapter of our planet, from ancient seabeds to drifting ash, layered across millions of years beneath us.
          </p>
        </div>

        {/* Layer 5: Bottom-Right Block + CTA (z-50) */}
        <div
          className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
          style={{ animationDelay: '0.85s' }}
        >
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Our interactive maps let you peel back the crust to trace how stones, fossils, and deep time combine to shape the ground beneath your feet.
          </p>
          <button className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer">
            Start Digging
          </button>
        </div>
      </section>
    </div>
  );
}
