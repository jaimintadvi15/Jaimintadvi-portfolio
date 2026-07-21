import React from 'react';
import { motion } from 'motion/react';
import { Code2, Brain, Cpu, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import TiltSpotlightCard from './TiltSpotlightCard';

export default function WhyChooseMe() {
  const pillars = [
    {
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      title: "Full-Stack Architecture",
      badge: "Modern Stack",
      description: "Proficient in building scalable, production-ready web apps using React 19, Next.js, Node.js, Express, and PostgreSQL/MongoDB.",
      bullets: [
        "Component modularity & clean state management",
        "RESTful & GraphQL API integration",
        "Responsive, mobile-first glassmorphic UI"
      ],
      glowColor: "group-hover:border-indigo-500/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: "AI & RAG Engineering",
      badge: "Autonomous Agents",
      description: "Hands-on experience orchestrating multi-agent graph workflows using LangGraph, ChromaDB vector databases, and local LLM pipelines.",
      bullets: [
        "Context-aware RAG search systems",
        "YOLOv11 computer vision integrations",
        "Automated AI agent decision loops"
      ],
      glowColor: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "Algorithmic Precision",
      badge: "C++ & DSA",
      description: "Strong foundation in data structures, memory optimization, and algorithmic efficiency with 120+ problems solved.",
      bullets: [
        "Ranked #12 in MSU Algorithmic Coding Challenge",
        "Deep understanding of OS, DBMS, & Networks",
        "Optimal space-time complexity analysis"
      ],
      glowColor: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
      title: "Clean Code & UX Polish",
      badge: "Pixel Perfect",
      description: "Obsessed with clean code hygiene, fluid animations, micro-interactions, and accessible developer ergonomics.",
      bullets: [
        "Framer Motion spring physics & micro-interactions",
        "Code Vimarsh club tech mentor & contributor",
        "Rapid prototyping with high reliability"
      ],
      glowColor: "group-hover:border-emerald-500/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
    }
  ];

  return (
    <section id="why-me" className="py-24 px-4 max-w-6xl mx-auto relative scroll-mt-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>VALUE & ENGINEERING PILLARS</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
            Jaimin?
          </span>
        </h2>
        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
          Combining technical rigor, modern full-stack engineering, and AI innovation to build impactful software.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((item, idx) => (
          <TiltSpotlightCard
            key={item.title}
            delay={idx * 0.1}
            yOffset={25}
            className={`glass-card rounded-3xl p-8 border border-white/5 bg-slate-950/40 backdrop-blur-xl transition-all duration-300 relative group flex flex-col justify-between ${item.glowColor}`}
          >
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-indigo-300 font-semibold tracking-wider uppercase">
                  {item.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Bullet Highlights */}
              <ul className="space-y-2.5 text-xs text-slate-300">
                {item.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom accent line */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Pillar 0{idx + 1}</span>
              <span className="group-hover:text-white transition-colors">Engineering Excellence →</span>
            </div>
          </TiltSpotlightCard>
        ))}
      </div>
    </section>
  );
}
