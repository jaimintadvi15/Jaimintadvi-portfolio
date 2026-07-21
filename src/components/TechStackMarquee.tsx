import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Sparkles, Orbit, Layers } from 'lucide-react';
import TechOrbit from './TechOrbit';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'tools';
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

export default function TechStackMarquee() {
  const [viewMode, setViewMode] = useState<'marquee' | 'orbit'>('marquee');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const techList: TechItem[] = [
    {
      name: "React 19",
      category: "frontend",
      color: "text-cyan-400 border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
      bgColor: "bg-cyan-500/10",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </svg>
      )
    },
    {
      name: "TypeScript",
      category: "frontend",
      color: "text-blue-400 border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
      bgColor: "bg-blue-500/10",
      icon: <span className="font-mono font-bold text-sm text-blue-400">TS</span>
    },
    {
      name: "JavaScript",
      category: "frontend",
      color: "text-amber-400 border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]",
      bgColor: "bg-amber-500/10",
      icon: <span className="font-mono font-bold text-sm text-amber-400">JS</span>
    },
    {
      name: "Next.js",
      category: "frontend",
      color: "text-white border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
      bgColor: "bg-white/10",
      icon: <span className="font-display font-black text-sm text-white">N</span>
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      color: "text-cyan-300 border-cyan-400/30 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
      bgColor: "bg-cyan-400/10",
      icon: (
        <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "backend",
      color: "text-emerald-400 border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
      bgColor: "bg-emerald-500/10",
      icon: <span className="font-mono font-bold text-sm text-emerald-400">Node</span>
    },
    {
      name: "Python",
      category: "ai",
      color: "text-yellow-400 border-yellow-500/30 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]",
      bgColor: "bg-yellow-500/10",
      icon: <span className="font-mono font-bold text-sm text-yellow-400">Py</span>
    },
    {
      name: "C++",
      category: "backend",
      color: "text-indigo-400 border-indigo-500/30 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]",
      bgColor: "bg-indigo-500/10",
      icon: <span className="font-mono font-extrabold text-sm text-indigo-400">C++</span>
    },
    {
      name: "Supabase",
      category: "database",
      color: "text-emerald-400 border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
      bgColor: "bg-emerald-500/10",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.359 1.412a1.32 1.32 0 00-2.164.298L4.257 14.851a.987.987 0 00.865 1.458h6.249l-1.077 6.279a1.32 1.32 0 002.164-.298l6.938-13.141a.987.987 0 00-.865-1.458h-6.249l1.076-6.279z"/>
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      category: "database",
      color: "text-blue-300 border-blue-400/30 group-hover:shadow-[0_0_20px_rgba(147,197,253,0.4)]",
      bgColor: "bg-blue-400/10",
      icon: <span className="font-mono font-bold text-xs text-blue-300">PG</span>
    },
    {
      name: "MongoDB",
      category: "database",
      color: "text-green-400 border-green-500/30 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]",
      bgColor: "bg-green-500/10",
      icon: (
        <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.193 9.555c-1.264-4.896-4.61-7.795-5.193-8.293-.19-.163-.48-.163-.67 0-.583.498-3.929 3.397-5.193 8.293-1.414 5.48.51 10.364 5.251 13.344.175.11.396.11.57 0 4.743-2.98 6.666-7.864 5.235-13.344z"/>
        </svg>
      )
    },
    {
      name: "LangGraph AI",
      category: "ai",
      color: "text-purple-400 border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
      bgColor: "bg-purple-500/10",
      icon: <Cpu className="w-6 h-6 text-purple-400" />
    },
    {
      name: "NVIDIA AI",
      category: "ai",
      color: "text-emerald-400 border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]",
      bgColor: "bg-emerald-500/10",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.75 4.25h8.5v15.5h-8.5z" opacity="0.3"/>
          <path d="M3 3h18v18H3V3zm3 3v12h12V6H6z"/>
        </svg>
      )
    },
    {
      name: "Docker",
      category: "tools",
      color: "text-sky-400 border-sky-500/30 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]",
      bgColor: "bg-sky-500/10",
      icon: <span className="font-mono font-bold text-xs text-sky-400">Docker</span>
    },
    {
      name: "Git & GitHub",
      category: "tools",
      color: "text-rose-400 border-rose-500/30 group-hover:shadow-[0_0_20px_rgba(251,113,133,0.4)]",
      bgColor: "bg-rose-500/10",
      icon: <span className="font-mono font-bold text-xs text-rose-400">Git</span>
    }
  ];

  const filteredTech = activeCategory === 'all'
    ? techList
    : techList.filter(t => t.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20 relative select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Build With
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full mt-3" />
        </div>

        {/* View Mode & Category Switchers */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category Filter Pills */}
          {['all', 'frontend', 'backend', 'database', 'ai', 'tools'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-bold shadow-[0_0_12px_rgba(99,102,241,0.25)]'
                  : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Toggle View Mode (Marquee Grid vs Tech Orbit) */}
          <button
            onClick={() => setViewMode(viewMode === 'marquee' ? 'orbit' : 'marquee')}
            className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:text-white text-xs font-mono font-bold transition-all hover:scale-105"
          >
            {viewMode === 'marquee' ? <Orbit className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
            <span>{viewMode === 'marquee' ? '3D Orbit View' : 'Grid View'}</span>
          </button>
        </div>
      </div>

      {/* View 1: 3D Tech Orbit */}
      {viewMode === 'orbit' && (
        <div className="glass-card rounded-3xl p-8 border border-white/10 bg-slate-950/40 backdrop-blur-xl flex justify-center items-center min-h-[420px] animate-fadeIn">
          <TechOrbit />
        </div>
      )}

      {/* View 2: Unique Infinite Marquee & Circular Glow Grid */}
      {viewMode === 'marquee' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Main Grid of Glowing Tech Circles (Matching Reference Screenshot) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 justify-items-center">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                {/* Outer Glowing Circle Badge */}
                <div
                  className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 ${tech.bgColor} ${tech.color} shadow-lg relative`}
                >
                  {/* Subtle Pulse Aura */}
                  <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                  
                  {tech.icon}
                </div>

                {/* Tech Name Label Underneath */}
                <span className="font-mono text-xs text-slate-400 group-hover:text-white transition-colors text-center whitespace-nowrap font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Marquee Banner Bar below Grid */}
          <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-950/40 py-3 backdrop-blur-md">
            <div className="flex items-center gap-8 animate-orbit-cw-slow whitespace-nowrap font-mono text-xs text-indigo-300/70">
              {techList.map((t, idx) => (
                <span key={`${t.name}-${idx}`} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>{t.name}</span>
                </span>
              ))}
            </div>
          </div>

        </div>
      )}
    </section>
  );
}
