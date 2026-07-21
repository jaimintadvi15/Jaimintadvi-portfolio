import React from 'react';
import { motion } from 'motion/react';
import {
  Brain,
  Code2,
  Database,
  Globe,
  Palette,
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Box,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  ring: 1 | 2 | 3;
  angle: number; // in degrees
  glowColor: string;
}

export default function TechOrbit() {
  const nodes: TechNode[] = [
    // --- Ring 1 (Inner) ---
    {
      id: 'react',
      name: 'React 19',
      category: 'Frontend',
      icon: (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </svg>
      ),
      ring: 1,
      angle: 0,
      glowColor: 'rgba(6, 182, 212, 0.4)',
    },
    {
      id: 'ts',
      name: 'TypeScript',
      category: 'Language',
      icon: <span className="font-mono font-bold text-xs text-blue-400 tracking-tighter">TS</span>,
      ring: 1,
      angle: 90,
      glowColor: 'rgba(59, 130, 246, 0.4)',
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Language / AI',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2c-4 0-3.8 1.7-3.8 1.7l.1 1.8h3.9v.6H6.6S4 5.8 4 9.9c0 4.1 2.3 4 2.3 4h1.4v-2s-.1-2.3 2.3-2.3h3.8s2.2 0 2.2-2.2V5.7s.4-3.7-4.1-3.7z" fill="#387eb8"/>
          <path d="M12.1 22c4 0 3.8-1.7 3.8-1.7l-.1-1.8h-3.9v-.6h5.5s2.6.3 2.6-3.8c0-4.1-2.3-4-2.3-4h-1.4v2s.1 2.3-2.3 2.3h-3.8s-2.2 0-2.2 2.2v3.6s-.4 3.8 4.1 3.8z" fill="#ffe052"/>
        </svg>
      ),
      ring: 1,
      angle: 180,
      glowColor: 'rgba(234, 179, 8, 0.4)',
    },
    {
      id: 'cpp',
      name: 'C++',
      category: 'Systems / DSA',
      icon: <span className="font-mono font-extrabold text-[11px] text-indigo-400">C++</span>,
      ring: 1,
      angle: 270,
      glowColor: 'rgba(99, 102, 241, 0.4)',
    },

    // --- Ring 2 (Middle) ---
    {
      id: 'ai',
      name: 'LangGraph & AI Agents',
      category: 'AI / ML',
      icon: <Brain className="w-5 h-5 text-pink-400" />,
      ring: 2,
      angle: 30,
      glowColor: 'rgba(244, 114, 182, 0.4)',
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'DevOps',
      icon: (
        <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.185.185 0 00.186-.186V3.575a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m0 2.716h2.118a.185.185 0 00.186-.186V6.291a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.955 0h2.119a.186.186 0 00.185-.186V6.291a.186.186 0 00-.185-.185H8.074a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m0 2.714h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.074a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.955 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.955 0h2.118a.185.185 0 00.186-.185V9.006a.186.186 0 00-.186-.186H2.164a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185"/>
        </svg>
      ),
      ring: 2,
      angle: 120,
      glowColor: 'rgba(56, 189, 248, 0.4)',
    },
    {
      id: 'next',
      name: 'Next.js',
      category: 'Framework',
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z"/>
        </svg>
      ),
      ring: 2,
      angle: 210,
      glowColor: 'rgba(255, 255, 255, 0.4)',
    },
    {
      id: 'db',
      name: 'PostgreSQL / Supabase',
      category: 'Database',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      ring: 2,
      angle: 300,
      glowColor: 'rgba(52, 211, 153, 0.4)',
    },

    // --- Ring 3 (Outer) ---
    {
      id: 'palette',
      name: 'Tailwind CSS v4',
      category: 'Styling',
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      ring: 3,
      angle: 15,
      glowColor: 'rgba(192, 132, 252, 0.4)',
    },
    {
      id: 'target',
      name: 'YOLOv11 & Vision',
      category: 'Computer Vision',
      icon: <Target className="w-5 h-5 text-rose-400" />,
      ring: 3,
      angle: 87,
      glowColor: 'rgba(251, 113, 133, 0.4)',
    },
    {
      id: 'node',
      name: 'Node.js & Express',
      category: 'Backend',
      icon: <Box className="w-5 h-5 text-green-400" />,
      ring: 3,
      angle: 159,
      glowColor: 'rgba(74, 222, 128, 0.4)',
    },
    {
      id: 'trend',
      name: 'Vector DBs (Chroma)',
      category: 'RAG / Search',
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      ring: 3,
      angle: 231,
      glowColor: 'rgba(251, 191, 36, 0.4)',
    },
    {
      id: 'git',
      name: 'Git & Linux',
      category: 'Tools',
      icon: <Terminal className="w-5 h-5 text-orange-400" />,
      ring: 3,
      angle: 303,
      glowColor: 'rgba(251, 146, 60, 0.4)',
    },
  ];

  // Ring radii configuration (in percentage of container radius or pixels)
  const ringSizes = {
    1: { diameter: 'w-[190px] h-[190px] sm:w-[220px] sm:h-[220px]', radiusPx: 100, anim: 'animate-orbit-cw-slow' },
    2: { diameter: 'w-[310px] h-[310px] sm:w-[360px] sm:h-[360px]', radiusPx: 165, anim: 'animate-orbit-ccw-slow' },
    3: { diameter: 'w-[430px] h-[430px] sm:w-[500px] sm:h-[500px]', radiusPx: 230, anim: 'animate-orbit-cw-fast' },
  };

  return (
    <div className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none overflow-hidden py-4">
      {/* Background ambient lighting core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 bg-indigo-600/10 rounded-full blur-[90px] animate-pulse" />
        <div className="w-40 h-40 bg-purple-600/15 rounded-full blur-[50px]" />
      </div>

      {/* --- Orbit Rings (Concentric circles) --- */}
      {/* Ring 1 */}
      <div className={`absolute rounded-full border border-indigo-500/15 bg-indigo-500/[0.01] ${ringSizes[1].diameter}`} />
      
      {/* Ring 2 */}
      <div className={`absolute rounded-full border border-purple-500/15 bg-purple-500/[0.01] ${ringSizes[2].diameter}`} />

      {/* Ring 3 */}
      <div className={`absolute rounded-full border border-white/10 bg-white/[0.005] ${ringSizes[3].diameter}`} />

      {/* --- Orbiting Nodes Containers --- */}

      {/* Ring 1 Orbit Group */}
      <div className={`absolute inset-0 flex items-center justify-center ${ringSizes[1].anim} hover:[animation-play-state:paused]`}>
        {nodes.filter(n => n.ring === 1).map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const r = 100; // Radius in px for Ring 1
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <div
              key={node.id}
              className="absolute group transition-transform duration-300 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="animate-orbit-ccw-slow hover:[animation-play-state:paused]">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0b0c16]/90 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] relative"
                >
                  {node.icon}

                  {/* Floating Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
                    <div className="bg-slate-900 border border-white/10 text-white text-[10px] font-mono px-2.5 py-1 rounded-md shadow-xl flex flex-col items-center">
                      <span className="font-bold text-indigo-300">{node.name}</span>
                      <span className="text-[9px] text-slate-400">{node.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ring 2 Orbit Group */}
      <div className={`absolute inset-0 flex items-center justify-center ${ringSizes[2].anim} hover:[animation-play-state:paused]`}>
        {nodes.filter(n => n.ring === 2).map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const r = 165; // Radius in px for Ring 2
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <div
              key={node.id}
              className="absolute group transition-transform duration-300 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="animate-orbit-cw-slow hover:[animation-play-state:paused]">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0b0c16]/90 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] relative"
                >
                  {node.icon}

                  {/* Floating Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
                    <div className="bg-slate-900 border border-white/10 text-white text-[10px] font-mono px-2.5 py-1 rounded-md shadow-xl flex flex-col items-center">
                      <span className="font-bold text-purple-300">{node.name}</span>
                      <span className="text-[9px] text-slate-400">{node.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ring 3 Orbit Group */}
      <div className={`absolute inset-0 flex items-center justify-center ${ringSizes[3].anim} hover:[animation-play-state:paused]`}>
        {nodes.filter(n => n.ring === 3).map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const r = 230; // Radius in px for Ring 3
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <div
              key={node.id}
              className="absolute group transition-transform duration-300 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="animate-orbit-ccw-fast hover:[animation-play-state:paused]">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0b0c16]/90 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] relative"
                >
                  {node.icon}

                  {/* Floating Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
                    <div className="bg-slate-900 border border-white/10 text-white text-[10px] font-mono px-2.5 py-1 rounded-md shadow-xl flex flex-col items-center">
                      <span className="font-bold text-cyan-300">{node.name}</span>
                      <span className="text-[9px] text-slate-400">{node.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Center Core Badge ("JT") --- */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-30 cursor-pointer group"
      >
        {/* Pulsing ring aura */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-full blur-md opacity-60 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
        
        {/* Core Node circle */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#070814] border-2 border-indigo-500/50 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(99,102,241,0.4)]">
          <span className="font-display font-extrabold text-2xl sm:text-3xl bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            JT
          </span>
          <span className="text-[9px] font-mono text-indigo-300/80 tracking-widest uppercase mt-0.5">
            Stack
          </span>
        </div>

        {/* Core Hover Badge */}
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
          <div className="bg-indigo-950/90 border border-indigo-500/30 text-indigo-200 text-[10px] font-mono px-3 py-1.5 rounded-full shadow-2xl backdrop-blur-md">
            Jaimin Tadvi • Full Stack & AI
          </div>
        </div>
      </motion.div>
    </div>
  );
}
