import React from 'react';
import CosmicVortexBackground from './CosmicVortexBackground';

export default function AnimatedBackground() {
  return (
    <div id="animated-background" className="fixed inset-0 -z-50 overflow-hidden bg-[#04040a]">
      {/* 3D Cosmic Particle Vortex Canvas */}
      <CosmicVortexBackground />

      {/* Mesh Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 242, 254, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Ambient Cosmic Neon Light Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-slow opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[65vw] h-[65vw] rounded-full bg-purple-600/12 blur-[150px] animate-pulse-slow-reverse opacity-60 pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-teal-500/8 blur-[120px] animate-pulse-slow opacity-50 pointer-events-none" />
    </div>
  );
}
