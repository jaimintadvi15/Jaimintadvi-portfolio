import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Code2, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo, experienceData } from '../data';
import MSULogo from './MSULogo';

const programmingSkills = ["C++", "C", "Java", "HTML5", "CSS3"];
const frameworksSkills = ["React.js", "Node.js"];
const databasesToolsSkills = ["Git", "GitHub", "VS Code"];

interface AboutProps {
  activeSection: string;
}

export default function About({ activeSection }: AboutProps) {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');

  // Sync active section from scroll spy to tab selection
  useEffect(() => {
    if (activeSection === 'skills' || activeSection === 'experience' || activeSection === 'education') {
      setActiveTab(activeSection as any);
    }
  }, [activeSection]);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto scroll-mt-16 relative">
      {/* Absolute scroll spy target elements for Navbar */}
      <div id="about" className="absolute top-0 left-0 scroll-mt-20" />
      <div id="skills" className="absolute top-0 left-0 scroll-mt-20" />
      <div id="experience" className="absolute top-0 left-0 scroll-mt-20" />
      <div id="education" className="absolute top-0 left-0 scroll-mt-20" />

      {/* 1. About Me Biography (above the grid, spanning full width) */}
      <div className="mb-10 text-left max-w-4xl">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight mb-3 select-none">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
          {personalInfo.bio}
        </p>
      </div>

      {/* 2. Side-by-Side: Photo & Skills Switcher Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Photo / Logo Card (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <div className="glass-card rounded-3xl p-6 border border-white/5 bg-slate-950/40 backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden min-h-[260px]">
            {/* Neon Orb background glowing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] -z-10" />

            {/* Jaimin's Profile Photo */}
            <div className="w-40 h-52 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 flex items-center justify-center relative group">
              <img
                src="/WhatsApp%20Image%202026-07-19%20at%206.24.16%20PM.jpeg"
                alt="Jaimin Tadvi"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="mt-5 text-center">
              <h4 className="font-display font-bold text-sm text-white">{personalInfo.name}</h4>
              <p className="text-slate-400 text-[10px] mt-1">{personalInfo.university}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Switcher Container (lg:col-span-8) */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Tab Switcher Controls */}
          <div className="flex items-center gap-1 bg-[#0a0a0c] border border-white/5 rounded-2xl p-1.5 w-fit mb-6 shadow-inner">
            {/* SKILLS TAB */}
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeTab === 'skills'
                  ? 'bg-red-500/10 border border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.07)]'
                  : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {activeTab === 'skills' && <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />}
              <Code2 className="h-4 w-4" />
              <span>Skills</span>
            </button>

            {/* EXPERIENCE TAB */}
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeTab === 'experience'
                  ? 'bg-red-500/10 border border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.07)]'
                  : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {activeTab === 'experience' && <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />}
              <Briefcase className="h-4 w-4" />
              <span>Experience</span>
            </button>

            {/* EDUCATION TAB */}
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeTab === 'education'
                  ? 'bg-red-500/10 border border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.07)]'
                  : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {activeTab === 'education' && <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />}
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </button>
          </div>

          {/* Switcher Content Card */}
          <div className="glass-card rounded-3xl p-6 border border-white/5 bg-slate-950/40 backdrop-blur-xl relative overflow-hidden flex-1 flex flex-col justify-center min-h-[340px]">
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" />

            {/* 1. SKILLS VIEW */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left animate-fadeIn">

                {/* Column 1: Programming & Web */}
                <div className="space-y-4">
                  <h3 className="font-mono font-bold text-xs text-red-400 mb-2 tracking-wider flex items-center gap-1.5">
                    <span className="text-red-500">&gt;</span> PROGRAMMING & WEB
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {programmingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-slate-300 border border-white/5 bg-[#0a0a0c] px-3 py-1.5 rounded-lg hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 2: Frameworks & Systems */}
                <div className="space-y-4">
                  <h3 className="font-mono font-bold text-xs text-red-400 mb-2 tracking-wider flex items-center gap-1.5">
                    <span className="text-red-500">&gt;</span> FRAMEWORKS & SYSTEMS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frameworksSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-slate-300 border border-white/5 bg-[#0a0a0c] px-3 py-1.5 rounded-lg hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 3: Databases & Tools */}
                <div className="space-y-4">
                  <h3 className="font-mono font-bold text-xs text-red-400 mb-2 tracking-wider flex items-center gap-1.5">
                    <span className="text-red-500">&gt;</span> DATABASE & TOOLS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {databasesToolsSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-slate-300 border border-white/5 bg-[#0a0a0c] px-3 py-1.5 rounded-lg hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 2. EXPERIENCE VIEW */}
            {activeTab === 'experience' && (
              <div className="space-y-6 text-left animate-fadeIn">
                {experienceData.map((exp) => (
                  <div
                    key={`${exp.company}-${exp.role}`}
                    className="relative overflow-hidden group rounded-2xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="font-mono text-[10px] text-red-400 tracking-wider uppercase mb-0.5 block font-semibold">
                          {exp.company}
                        </span>
                        <h3 className="font-display font-bold text-xl text-white">
                          {exp.role}
                        </h3>
                      </div>

                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono self-start sm:self-center">
                        <Calendar className="h-3.5 w-3.5 text-red-400" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Descriptions */}
                    <ul className="space-y-2 mb-5 text-slate-400 text-xs md:text-sm leading-relaxed">
                      {exp.description.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2">
                          <ChevronRight className="h-4.5 w-4.5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-300 uppercase shadow-sm"
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
                      <span className="font-mono text-[10px] text-red-400 tracking-wider uppercase mb-0.5 block font-semibold">
                        The Maharaja Sayajirao University of Baroda
                      </span>
                      <h3 className="font-display font-bold text-xl text-white">
                        Bachelor of Engineering in Computer Science & Engineering
                      </h3>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono self-start sm:self-center">
                      <Calendar className="h-3.5 w-3.5 text-red-400" />
                      <span>2022 — 2026</span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-5">
                    Currently pursuing a B.E. in Computer Science & Engineering at MSU Baroda, Vadodara, Gujarat. Focuses on core software engineering methodologies, design patterns, database architectures, algorithms, and artificial intelligence.
                  </p>

                  {/* Coursework Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {["Data Structures", "Algorithms", "Database Management Systems", "Object Oriented Programming", "Operating Systems", "Computer Networks"].map((course) => (
                      <span
                        key={course}
                        className="text-[10px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-300 uppercase shadow-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
