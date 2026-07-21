import React from 'react';
import { Globe, Sparkles } from 'lucide-react';
import TechOrbit from './TechOrbit';

export default function SkillOrbitSection() {
  return (
    <section id="skill-orbit" className="py-20 px-4 max-w-6xl mx-auto relative scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Globe className="w-3.5 h-3.5 animate-spin-orbit" />
          <span>INTERACTIVE WEBSITE ORBIT</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
          Websites &amp; Live Projects{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
            Orbit System
          </span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-3 leading-relaxed font-sans">
          Explore the web portals, applications, and digital platforms I design, build, and maintain. Hover over any orbiting website node to inspect its live link and features.
        </p>
      </div>

      {/* Orbit Container Glass Card */}
      <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/10 bg-slate-950/60 backdrop-blur-2xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
        {/* Top Control Hint */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-slate-400 mb-4 pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Live Website Orbit Rotations</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-cyan-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hover website nodes to inspect &amp; visit</span>
          </div>
        </div>

        {/* Orbit Visualization */}
        <div className="w-full py-4 flex items-center justify-center">
          <TechOrbit />
        </div>

        {/* Bottom Orbit Legend / Website Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-6 pt-6 border-t border-white/5 font-mono text-xs text-center">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
            <span className="text-cyan-400 font-bold block mb-0.5">Inner Orbit</span>
            <span className="text-slate-400 text-[11px]">Primary Apps (Code Vimarsh, Edulink, Portfolio, Shop)</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
            <span className="text-indigo-400 font-bold block mb-0.5">Middle Orbit</span>
            <span className="text-slate-400 text-[11px]">Data Portals (Student CRUD, Weather, MSU Hub)</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
            <span className="text-purple-400 font-bold block mb-0.5">Outer Orbit</span>
            <span className="text-slate-400 text-[11px]">Hackathons, Leaderboards &amp; AI Tools</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
            <span className="text-teal-300 font-bold block mb-0.5">Central Hub</span>
            <span className="text-slate-400 text-[11px]">Jaimin Tadvi Web Creator</span>
          </div>
        </div>
      </div>
    </section>
  );
}
