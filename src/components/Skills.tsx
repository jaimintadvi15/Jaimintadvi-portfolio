import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Briefcase, GraduationCap, Calendar, ChevronRight } from 'lucide-react';
import { skillCategories, experienceData } from '../data';
import TechOrbit from './TechOrbit';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
          Journey &amp;{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
      </div>

      {/* Primary View Switcher Buttons (Skills vs Experience vs Education) */}
      <div className="flex justify-center items-center gap-2 mb-10 bg-slate-900/60 p-1.5 rounded-2xl border border-white/10 w-fit mx-auto backdrop-blur-md shadow-xl">
        {/* SKILLS TAB */}
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            activeTab === 'skills'
              ? 'bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.15)]'
              : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {activeTab === 'skills' && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />}
          <Code2 className="h-4 w-4" />
          <span>Skills</span>
        </button>

        {/* EXPERIENCE TAB */}
        <button
          onClick={() => setActiveTab('experience')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            activeTab === 'experience'
              ? 'bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.15)]'
              : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {activeTab === 'experience' && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />}
          <Briefcase className="h-4 w-4" />
          <span>Experience</span>
        </button>

        {/* EDUCATION TAB */}
        <button
          onClick={() => setActiveTab('education')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            activeTab === 'education'
              ? 'bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.15)]'
              : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {activeTab === 'education' && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />}
          <GraduationCap className="h-4 w-4" />
          <span>Education</span>
        </button>
      </div>

      {/* Main Tabbed Container Panel */}
      <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 bg-slate-950/40 backdrop-blur-xl relative overflow-hidden min-h-[380px] flex flex-col justify-center">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" />

        {/* 1. SKILLS VIEW */}
        {activeTab === 'skills' && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            {/* Tech Orbit Interactive System */}
            <div className="w-full flex flex-col items-center justify-center">
              <TechOrbit />
            </div>

            {/* Sub-Category Selector Pills */}
            <div className="flex flex-wrap justify-center gap-2 border-t border-white/5 pt-6">
              {skillCategories.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => setSelectedCategoryIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    selectedCategoryIndex === idx
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold shadow-md'
                      : 'bg-white/5 border border-white/5 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Selected Category Skill Badges Grid */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategoryIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                >
                  {skillCategories[selectedCategoryIndex].skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-card rounded-xl p-3 border border-white/5 bg-slate-900/40 hover:border-emerald-500/30 transition-all flex items-center gap-2.5 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-xs group-hover:scale-110 transition-transform">
                        {skill.name.substring(0, 2)}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono">Proficient</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* 2. EXPERIENCE VIEW */}
        {activeTab === 'experience' && (
          <div className="space-y-8 text-left animate-fadeIn">
            {experienceData.map((exp) => (
              <div
                key={exp.role}
                className="relative overflow-hidden group rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase mb-0.5 block font-semibold">
                      {exp.company}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono self-start sm:self-center">
                    <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Descriptions */}
                <ul className="space-y-2.5 mb-5 text-slate-400 text-sm leading-relaxed">
                  {exp.description.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2">
                      <ChevronRight className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 uppercase shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. EDUCATION VIEW */}
        {activeTab === 'education' && (
          <div className="space-y-6 text-left animate-fadeIn">
            <div className="relative overflow-hidden group rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase mb-0.5 block font-semibold">
                    The Maharaja Sayajirao University of Baroda
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    Bachelor of Engineering in Computer Science & Engineering
                  </h3>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono self-start sm:self-center">
                  <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                  <span>2022 — 2026</span>
                </div>
              </div>

              {/* Descriptions */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Currently pursuing a B.E. in Computer Science & Engineering at MSU Baroda, Vadodara, Gujarat. Focuses on core software engineering methodologies, design patterns, database architectures, algorithms, and artificial intelligence.
              </p>

              {/* Coursework Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {["Data Structures", "Algorithms", "Database Management Systems", "Object Oriented Programming", "Operating Systems", "Computer Networks"].map((course) => (
                  <span
                    key={course}
                    className="text-[10px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 uppercase shadow-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
