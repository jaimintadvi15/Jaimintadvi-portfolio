import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Code2, Briefcase, GraduationCap, ArrowRight, ExternalLink } from 'lucide-react';
import { personalInfo, experienceData } from '../data';

const programmingSkills = ["C++", "C", "Java", "Python", "JavaScript", "HTML5", "CSS3"];
const frameworksSkills = ["React 19", "Next.js", "Vite", "Tailwind CSS v4", "Framer Motion", "Node.js", "Express.js", "FastAPI", "Flask"];
const databasesToolsSkills = ["Supabase", "PostgreSQL", "MongoDB", "SQLite", "Git", "GitHub", "Docker", "Vercel", "VS Code"];
const aiMlCoreSkills = ["LangGraph (Agents)", "YOLOv11 (Vision)", "ChromaDB (RAG)", "Generative AI", "Local LLMs", "XGBoost", "Scikit-learn", "TensorFlow", "DSA", "OOP"];

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
    <section className="py-16 px-4 max-w-6xl mx-auto scroll-mt-16 relative">
      {/* Absolute scroll spy target elements for Navbar */}
      <div id="about" className="absolute top-0 left-0 scroll-mt-20" />
      <div id="skills" className="absolute top-0 left-0 scroll-mt-20" />
      <div id="experience" className="absolute top-0 left-0 scroll-mt-20" />
      <div id="education" className="absolute top-0 left-0 scroll-mt-20" />

      {/* 1. Header Row: Heading on Left, Bio Paragraph on Right (As in Reference Image 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        <div className="lg:col-span-4">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight select-none">
            About <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3" />
        </div>

        <div className="lg:col-span-8">
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
            I am {personalInfo.name}, a Computer Science Engineering student at {personalInfo.university}. I focus on building intelligent, scalable digital architectures, AI-powered automation systems, and high-performance full-stack applications. I thrive in high-stress, high-energy hackathons and collaborative builds, transforming complex ideas into functional, premium software.
          </p>
        </div>
      </div>

      {/* 2. Side-by-Side Content Grid (As in Reference Image 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Photo Card + Role Sub-Card (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Main Photo Card */}
          <div className="glass-card rounded-3xl p-4 border border-white/10 bg-slate-950/50 backdrop-blur-xl relative overflow-hidden group">
            {/* Ambient Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-600/10 rounded-full blur-[50px] -z-10" />

            {/* Profile Photo Container */}
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 relative">
              <img
                src="/WhatsApp%20Image%202026-07-19%20at%206.24.16%20PM.jpeg"
                alt="Jaimin Tadvi"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Monospace Card Footer Metadata */}
            <div className="mt-3 px-2 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span className="text-indigo-300 font-semibold">Jaimin_Tadvi.bin</span>
              <span>SIZE: 167KB</span>
            </div>
          </div>

          {/* Sub-Card below Photo (Sub-Role Banner as in Reference 2) */}
          <div className="glass-card rounded-3xl p-5 border border-white/10 bg-slate-950/50 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold text-indigo-400 tracking-wider uppercase">
                // WEB TEAM MEMBER @ CODE VIMARSH
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
              </span>
            </div>

            <h3 className="font-display font-bold text-base text-white mb-1">
              Code Vimarsh Club Developer
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4 font-mono">
              Directing responsive web portals, collaborative workshops, & high-performance applications.
            </p>

            <a
              href="https://github.com/jaimintadvi"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 hover:border-indigo-500/50 text-indigo-300 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-sm group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
            >
              <span>Visit github.com/jaimintadvi</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Tab Switcher & Skills Categorized Grid (lg:col-span-8) */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Tab Switcher Controls (Skills, Experience, Education) */}
          <div className="flex items-center gap-1.5 bg-[#080914] border border-white/10 rounded-2xl p-1.5 w-fit mb-6 shadow-inner">
            {/* SKILLS TAB */}
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'skills'
                  ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                  : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeTab === 'skills' && <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />}
              <Code2 className="h-4 w-4" />
              <span>Skills</span>
            </button>

            {/* EXPERIENCE TAB */}
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                  : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeTab === 'experience' && <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />}
              <Briefcase className="h-4 w-4" />
              <span>Experience</span>
            </button>

            {/* EDUCATION TAB */}
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                  : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeTab === 'education' && <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />}
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </button>
          </div>

          {/* Tab Content Panel (Matching Reference Image 2 Grid Layout) */}
          <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 bg-slate-950/50 backdrop-blur-xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            
            {/* 1. SKILLS VIEW */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left animate-fadeIn">
                
                {/* Section 1: Programming & Web */}
                <div className="space-y-3">
                  <h3 className="font-mono font-bold text-xs text-indigo-400 tracking-wider flex items-center gap-1.5">
                    <span className="text-indigo-500 font-extrabold">&gt;</span> PROGRAMMING & WEB
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {programmingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium text-slate-200 border border-white/10 bg-[#080914] px-3 py-1.5 rounded-lg hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-300 shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 2: Frameworks & Systems */}
                <div className="space-y-3">
                  <h3 className="font-mono font-bold text-xs text-indigo-400 tracking-wider flex items-center gap-1.5">
                    <span className="text-indigo-500 font-extrabold">&gt;</span> FRAMEWORKS & SYSTEMS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frameworksSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium text-slate-200 border border-white/10 bg-[#080914] px-3 py-1.5 rounded-lg hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-300 shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 3: Databases & Tools */}
                <div className="space-y-3">
                  <h3 className="font-mono font-bold text-xs text-indigo-400 tracking-wider flex items-center gap-1.5">
                    <span className="text-indigo-500 font-extrabold">&gt;</span> DATABASES & TOOLS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {databasesToolsSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium text-slate-200 border border-white/10 bg-[#080914] px-3 py-1.5 rounded-lg hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-300 shadow-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 4: AI/ML & Core Skills */}
                <div className="space-y-3">
                  <h3 className="font-mono font-bold text-xs text-indigo-400 tracking-wider flex items-center gap-1.5">
                    <span className="text-indigo-500 font-extrabold">&gt;</span> AI/ML & CORE SKILLS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {aiMlCoreSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium text-slate-200 border border-white/10 bg-[#080914] px-3 py-1.5 rounded-lg hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-300 shadow-sm cursor-default"
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
                    className="relative overflow-hidden group rounded-2xl p-4 bg-[#080914] border border-white/5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="font-mono text-[10px] text-indigo-400 tracking-wider uppercase mb-0.5 block font-semibold">
                          {exp.company}
                        </span>
                        <h3 className="font-display font-bold text-lg text-white">
                          {exp.role}
                        </h3>
                      </div>

                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono self-start sm:self-center">
                        <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Bullet descriptions */}
                    <ul className="space-y-1.5 mb-4 text-slate-400 text-xs leading-relaxed font-sans">
                      {exp.description.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono tracking-wider font-semibold px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 uppercase shadow-sm"
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
                <div className="relative overflow-hidden group rounded-2xl p-4 bg-[#080914] border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="font-mono text-[10px] text-indigo-400 tracking-wider uppercase mb-0.5 block font-semibold">
                        The Maharaja Sayajirao University of Baroda
                      </span>
                      <h3 className="font-display font-bold text-lg text-white">
                        Bachelor of Engineering in Computer Science & Engineering
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono self-start sm:self-center">
                      <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                      <span>2022 — 2026</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4 font-sans">
                    Currently pursuing a B.E. in Computer Science & Engineering at MSU Baroda, Vadodara, Gujarat. Deep focus on data structures, system design, database management systems, operating systems, & artificial intelligence.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {["Data Structures", "Algorithms", "Database Management Systems", "Object Oriented Programming", "Operating Systems", "Computer Networks"].map((course) => (
                      <span
                        key={course}
                        className="text-[10px] font-mono tracking-wider font-semibold px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 uppercase shadow-sm"
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
