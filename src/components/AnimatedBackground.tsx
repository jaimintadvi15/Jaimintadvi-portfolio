import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div id="animated-background" className="fixed inset-0 -z-50 overflow-hidden bg-[#030307]">
      {/* Mesh Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-600/10 blur-[130px] animate-pulse-slow-reverse" />
      <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-cyan-600/8 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[30%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-700/8 blur-[110px] animate-pulse-slow-reverse" />

      {/* Subtle vignettes or lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#020205] via-transparent to-[#040409]/40 opacity-80" />
    </div>
  );
}
