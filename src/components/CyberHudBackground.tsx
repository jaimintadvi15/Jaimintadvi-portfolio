import React, { useEffect, useState, useRef } from 'react';

export default function CyberHudBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [telemetry, setTelemetry] = useState({ alt: 420, sync: 99.8 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const interval = setInterval(() => {
      setTelemetry({
        alt: 410 + Math.floor(Math.random() * 25),
        sync: +(99.4 + Math.random() * 0.5).toFixed(1),
      });
    }, 1500);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-50 overflow-hidden bg-[#040806] pointer-events-none select-none text-[#22c55e] font-mono"
    >
      {/* 1. Ambient Background Dark Grid Texture & Vignette */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #22c55e 1px, transparent 1px),
            linear-gradient(to bottom, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#030604_100%)] opacity-90" />

      {/* 2. Top Futuristic Cyber Bevel Frame */}
      <div 
        className="absolute top-0 left-0 right-0 h-16 md:h-20 flex flex-col justify-between p-4 transition-transform duration-300 ease-out opacity-85"
        style={{ transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)` }}
      >
        {/* Top Outer Bracket Bar */}
        <div className="w-full flex items-center justify-between border-t-2 border-[#22c55e]/70 pt-2 px-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#22c55e] rounded-xs animate-pulse inline-block shadow-[0_0_10px_#22c55e]" />
            <span className="text-xs font-bold tracking-widest text-[#22c55e]">SYS.MODE // CYBER_GREEN_v4.2</span>
          </div>

          {/* Top Notch Pattern */}
          <div className="hidden sm:flex items-center gap-2">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full border border-[#22c55e]/60 bg-[#22c55e]/20" />
            ))}
          </div>

          <div className="text-xs tracking-wider text-[#22c55e]/80">
            SYNC: <span className="font-bold text-[#22c55e]">{telemetry.sync}%</span>
          </div>
        </div>

        {/* Angled Top Wing Accents */}
        <svg className="w-full h-6 text-[#22c55e]/50 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 24">
          <path d="M0 0 L250 0 L290 20 L910 20 L950 0 L1200 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M300 24 L900 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* 3. Bottom Futuristic Cyber Bevel Frame */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 md:h-20 flex flex-col justify-between p-4 transition-transform duration-300 ease-out opacity-85"
        style={{ transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)` }}
      >
        <svg className="w-full h-6 text-[#22c55e]/50 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 24">
          <path d="M0 24 L250 24 L290 4 L910 4 L950 24 L1200 24" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M300 0 L900 0" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 6" />
        </svg>

        <div className="w-full flex items-center justify-between border-b-2 border-[#22c55e]/70 pb-2 px-6">
          <div className="text-xs tracking-wider text-[#22c55e]/80">
            MSU_BARODA :: CSE_CORE
          </div>

          {/* Bottom Dot Pattern */}
          <div className="hidden sm:flex items-center gap-2">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full border border-[#22c55e]/60 bg-[#22c55e]/20" />
            ))}
          </div>

          <div className="text-xs font-bold tracking-widest text-[#22c55e] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
            TARGET LOCK // ACTIVE
          </div>
        </div>
      </div>

      {/* 4. Left & Right Tactical Altitude Scale Gauges */}
      {/* Left Scale Gauge */}
      <div 
        className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-6 opacity-75 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * -12}px, calc(-50% + ${mousePos.y * -12}px))` }}
      >
        <div className="h-72 w-12 border-r-2 border-[#22c55e]/60 flex flex-col justify-between items-end pr-2 text-[10px] font-bold text-[#22c55e]/80">
          {[500, 400, 300, 200, 100].map((num) => (
            <div key={num} className="flex items-center gap-1.5">
              <span>{num}</span>
              <span className="w-2 h-[1px] bg-[#22c55e]" />
            </div>
          ))}
        </div>
        <div className="text-[10px] tracking-widest text-[#22c55e] font-bold bg-[#22c55e]/10 border border-[#22c55e]/30 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(34,197,94,0.2)]">
          ALT: {telemetry.alt}M
        </div>
      </div>

      {/* Right Scale Gauge */}
      <div 
        className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-6 opacity-75 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * -12}px, calc(-50% + ${mousePos.y * -12}px))` }}
      >
        <div className="h-72 w-12 border-l-2 border-[#22c55e]/60 flex flex-col justify-between items-start pl-2 text-[10px] font-bold text-[#22c55e]/80">
          {[500, 400, 300, 200, 100].map((num) => (
            <div key={num} className="flex items-center gap-1.5">
              <span className="w-2 h-[1px] bg-[#22c55e]" />
              <span>{num}</span>
            </div>
          ))}
        </div>
        <div className="text-[10px] tracking-widest text-[#22c55e] font-bold bg-[#22c55e]/10 border border-[#22c55e]/30 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(34,197,94,0.2)]">
          RADAR: SCANNING
        </div>
      </div>

      {/* 5. Central Animated Rotating Cyber HUD Reticle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] pointer-events-none transition-transform duration-300 ease-out flex items-center justify-center opacity-70"
        style={{ transform: `translate(calc(-50% + ${mousePos.x * 15}px), calc(-50% + ${mousePos.y * 15}px))` }}
      >
        {/* Outer Rotating Segmented Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#22c55e]/40 animate-spin-orbit" style={{ animationDuration: '24s' }} />

        {/* Middle Clockwise Arc Ring */}
        <svg className="absolute inset-0 w-full h-full animate-spin-orbit" style={{ animationDuration: '16s' }} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="75" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="30 15 60 20" opacity="0.6" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="10 5 40 10" opacity="0.4" />
        </svg>

        {/* Middle Counter-Clockwise Arc Ring */}
        <svg className="absolute inset-0 w-full h-full animate-spin-orbit-ccw" style={{ animationDuration: '12s' }} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="50" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="40 20 80 30" opacity="0.7" />
        </svg>

        {/* Center Target Reticle & Crosshairs */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#22c55e]/70 flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.3)]">
          {/* Inner Pulsing Core Circle */}
          <div className="w-10 h-10 rounded-full border-2 border-[#22c55e] flex items-center justify-center animate-pulse">
            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-[0_0_10px_#22c55e]" />
          </div>

          {/* Crosshair Ticks */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-[#22c55e]" />
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-[#22c55e]" />
          <span className="absolute top-1/2 -left-3 -translate-y-1/2 h-[1px] w-3 bg-[#22c55e]" />
          <span className="absolute top-1/2 -right-3 -translate-y-1/2 h-[1px] w-3 bg-[#22c55e]" />
        </div>
      </div>

      {/* 6. Sweeping Laser Scanline Effect */}
      <div 
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#22c55e]/80 to-transparent shadow-[0_0_15px_#22c55e] pointer-events-none"
        style={{
          animation: 'hudScan 8s linear infinite',
        }}
      />
      <style>{`
        @keyframes hudScan {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
