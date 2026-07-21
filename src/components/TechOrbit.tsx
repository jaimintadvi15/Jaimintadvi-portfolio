import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  ShoppingBag,
  GraduationCap,
  CloudSun,
  Brain,
  Code2,
  Database,
  Users,
  Building2,
  GitBranch,
  Trophy,
  Zap,
  Layers,
  BarChart3,
  ExternalLink
} from 'lucide-react';

interface WebsiteNode {
  id: string;
  name: string;
  category: string;
  url?: string;
  icon: React.ReactNode;
  ring: 1 | 2 | 3;
  angle: number; // in degrees
}

export default function TechOrbit() {
  const nodes: WebsiteNode[] = [
    // --- Ring 1 (Inner Websites) ---
    {
      id: 'code-vimarsh',
      name: 'Code Vimarsh Portal',
      category: 'Official Club Web Hub',
      url: 'https://github.com/jaimintadvi',
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
      ring: 1,
      angle: 0,
    },
    {
      id: 'edulink',
      name: 'Edulink Records',
      category: 'Academic Records Web App',
      url: 'https://github.com/jaimintadvi',
      icon: <GraduationCap className="w-4 h-4 text-teal-300" />,
      ring: 1,
      angle: 90,
    },
    {
      id: 'portfolio',
      name: 'Developer Portfolio',
      category: 'Interactive Glassmorphism Web App',
      url: 'https://jaimintadvi.dev',
      icon: <Code2 className="w-4 h-4 text-purple-400" />,
      ring: 1,
      angle: 180,
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Store UI',
      category: 'React Shopping Engine App',
      url: 'https://jaimintadvi-shop.netlify.app',
      icon: <ShoppingBag className="w-4 h-4 text-sky-400" />,
      ring: 1,
      angle: 270,
    },

    // --- Ring 2 (Middle Websites) ---
    {
      id: 'student-app',
      name: 'Student CRUD Portal',
      category: 'Node & Mongo Management App',
      url: 'https://jaimintadvi-student-app.herokuapp.com',
      icon: <Database className="w-4 h-4 text-indigo-400" />,
      ring: 2,
      angle: 30,
    },
    {
      id: 'weather',
      name: 'Weather Analytics Web App',
      category: 'Real-time API Forecast Dashboard',
      url: 'https://jaimintadvi-weather.netlify.app',
      icon: <CloudSun className="w-4 h-4 text-amber-400" />,
      ring: 2,
      angle: 120,
    },
    {
      id: 'msu-hub',
      name: 'MSU Baroda CSE Portal',
      category: 'Department Resource Web Hub',
      url: 'https://github.com/jaimintadvi',
      icon: <Building2 className="w-4 h-4 text-cyan-400" />,
      ring: 2,
      angle: 210,
    },
    {
      id: 'open-source',
      name: 'GitHub Open Source Hub',
      category: 'Community Web Toolkits & Repos',
      url: 'https://github.com/jaimintadvi',
      icon: <GitBranch className="w-4 h-4 text-orange-400" />,
      ring: 2,
      angle: 300,
    },

    // --- Ring 3 (Outer Websites) ---
    {
      id: 'hackathon-app',
      name: 'Inter-College Hackathon Portal',
      category: 'Resource Sharing Web App',
      url: 'https://github.com/jaimintadvi',
      icon: <Trophy className="w-4 h-4 text-yellow-400" />,
      ring: 3,
      angle: 15,
    },
    {
      id: 'showdown-board',
      name: 'Algorithmic Showdown Board',
      category: 'Live Coding Competition Leaderboard',
      url: 'https://github.com/jaimintadvi',
      icon: <Zap className="w-4 h-4 text-cyan-300" />,
      ring: 3,
      angle: 87,
    },
    {
      id: 'ai-assistant',
      name: 'AI Agent Web Assistant',
      category: 'LangGraph & AI Workflow App',
      url: 'https://github.com/jaimintadvi',
      icon: <Brain className="w-4 h-4 text-purple-400" />,
      ring: 3,
      angle: 159,
    },
    {
      id: 'web-design-kit',
      name: 'Responsive Layouts Showcase',
      category: 'Flexbox & CSS Grid Design Web Kit',
      url: 'https://github.com/jaimintadvi',
      icon: <Layers className="w-4 h-4 text-teal-300" />,
      ring: 3,
      angle: 231,
    },
    {
      id: 'analytics-dash',
      name: 'Edulink Analytics System',
      category: 'Cloud Data Metrics Platform',
      url: 'https://github.com/jaimintadvi',
      icon: <BarChart3 className="w-4 h-4 text-indigo-400" />,
      ring: 3,
      angle: 303,
    },
  ];

  // Compact Ring radii configuration (Small & sleek orbit)
  const ringSizes = {
    1: { diameter: 'w-[150px] h-[150px]', radiusPx: 75, anim: 'animate-orbit-cw-slow' },
    2: { diameter: 'w-[250px] h-[250px]', radiusPx: 125, anim: 'animate-orbit-ccw-slow' },
    3: { diameter: 'w-[350px] h-[350px]', radiusPx: 175, anim: 'animate-orbit-cw-fast' },
  };

  return (
    <div className="relative w-full max-w-[400px] aspect-square mx-auto flex items-center justify-center select-none overflow-hidden py-2">
      {/* Ambient Cosmic Background Lighting Core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 bg-cyan-500/10 rounded-full blur-[80px]" />
        <div className="w-32 h-32 bg-purple-600/15 rounded-full blur-[50px]" />
      </div>

      {/* --- Cosmic Orbit Rings --- */}
      <div className={`absolute rounded-full border border-cyan-500/20 bg-cyan-500/[0.01] ${ringSizes[1].diameter}`} />
      <div className={`absolute rounded-full border border-indigo-500/20 bg-indigo-500/[0.01] ${ringSizes[2].diameter}`} />
      <div className={`absolute rounded-full border border-purple-500/20 bg-purple-500/[0.005] ${ringSizes[3].diameter}`} />

      {/* --- Orbiting Website Nodes Containers --- */}

      {/* Ring 1 Orbit Group */}
      <div className={`absolute inset-0 flex items-center justify-center ${ringSizes[1].anim} hover:[animation-play-state:paused]`}>
        {nodes.filter(n => n.ring === 1).map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const r = ringSizes[1].radiusPx;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <a
              key={node.id}
              href={node.url || '#projects'}
              target="_blank"
              rel="noreferrer"
              className="absolute group transition-transform duration-300 cursor-pointer"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <div className="animate-orbit-ccw-slow hover:[animation-play-state:paused]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#090b1c]/90 border border-cyan-500/30 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] relative">
                  {node.icon}

                  {/* Floating Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
                    <div className="bg-[#080a18] border border-cyan-500/30 text-white text-[10px] font-mono px-2.5 py-1 rounded-lg shadow-2xl flex flex-col items-center backdrop-blur-xl">
                      <div className="flex items-center gap-1 font-bold text-cyan-300">
                        <span>{node.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-cyan-400" />
                      </div>
                      <span className="text-[9px] text-slate-400">{node.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Ring 2 Orbit Group */}
      <div className={`absolute inset-0 flex items-center justify-center ${ringSizes[2].anim} hover:[animation-play-state:paused]`}>
        {nodes.filter(n => n.ring === 2).map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const r = ringSizes[2].radiusPx;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <a
              key={node.id}
              href={node.url || '#projects'}
              target="_blank"
              rel="noreferrer"
              className="absolute group transition-transform duration-300 cursor-pointer"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <div className="animate-orbit-cw-slow hover:[animation-play-state:paused]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#090b1c]/90 border border-indigo-500/30 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] relative">
                  {node.icon}

                  {/* Floating Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
                    <div className="bg-[#080a18] border border-indigo-500/30 text-white text-[10px] font-mono px-2.5 py-1 rounded-lg shadow-2xl flex flex-col items-center backdrop-blur-xl">
                      <div className="flex items-center gap-1 font-bold text-indigo-300">
                        <span>{node.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-cyan-400" />
                      </div>
                      <span className="text-[9px] text-slate-400">{node.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Ring 3 Orbit Group */}
      <div className={`absolute inset-0 flex items-center justify-center ${ringSizes[3].anim} hover:[animation-play-state:paused]`}>
        {nodes.filter(n => n.ring === 3).map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const r = ringSizes[3].radiusPx;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <a
              key={node.id}
              href={node.url || '#projects'}
              target="_blank"
              rel="noreferrer"
              className="absolute group transition-transform duration-300 cursor-pointer"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <div className="animate-orbit-ccw-fast hover:[animation-play-state:paused]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#090b1c]/90 border border-purple-500/30 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] relative">
                  {node.icon}

                  {/* Floating Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
                    <div className="bg-[#080a18] border border-purple-500/30 text-white text-[10px] font-mono px-2.5 py-1 rounded-lg shadow-2xl flex flex-col items-center backdrop-blur-xl">
                      <div className="flex items-center gap-1 font-bold text-purple-300">
                        <span>{node.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-cyan-400" />
                      </div>
                      <span className="text-[9px] text-slate-400">{node.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* --- Cosmic Center Core Badge ("WEB") --- */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-30 cursor-pointer group"
      >
        <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full blur-md opacity-60 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
        
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#060714] border-2 border-cyan-500/50 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.4)]">
          <span className="font-display font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent tracking-tight">
            WEB
          </span>
          <span className="text-[8px] font-mono text-cyan-300/80 tracking-widest uppercase">
            HUBS
          </span>
        </div>

        <div className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
          <div className="bg-[#080918] border border-cyan-500/30 text-cyan-300 font-bold text-[10px] font-mono px-3 py-1 rounded-full shadow-2xl backdrop-blur-md">
            Jaimin Tadvi • Web Universe
          </div>
        </div>
      </motion.a>
    </div>
  );
}
