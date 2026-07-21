import React, { useState, useEffect } from 'react';
import { Calendar, Code2, Briefcase, GraduationCap, ArrowRight, MapPin, Sparkles, Terminal, Award } from 'lucide-react';
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

  useEffect(() => {
    if (activeSection === 'skills' || activeSection === 'experience' || activeSection === 'education') {
      setActiveTab(activeSection as any);
    }
  }, [activeSection]);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto scroll-mt-24 relative">
      {/* Absolute scroll spy target elements for Navbar */}
      <div id="about" className="absolute top-0 left-0 scroll-mt-24" />
      <div id="skills" className="absolute top-0 left-0 scroll-mt-24" />
      <div id="experience" className="absolute top-0 left-0 scroll-mt-24" />
      <div id="education" className="absolute top-0 left-0 scroll-mt-24" />

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 1. Header Row: Title & High-Impact Bio Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 border-b border-white/5 pb-8">
        <div className="lg:col-span-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Terminal className="w-3.5 h-3.5" />
            <span>$ cat about_jaimin.md</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight select-none">
            About <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 rounded-full mt-3 shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
        </div>

        <div className="lg:col-span-8">
          <p className="text-slate-200 text-base md:text-lg leading-relaxed font-sans font-normal">
            I am <strong className="text-white font-semibold">Jaimin Tadvi</strong>, a Computer Science Engineering student at <strong className="text-cyan-300 font-semibold">The Maharaja Sayajirao University of Baroda</strong>. I&apos;m passionate about building modern web applications, exploring full-stack development, and solving real-world problems through clean and efficient code. I enjoy learning new technologies, participating in hackathons, and continuously improving my skills as a developer.
          </p>
        </div>
      </div>

      {/* 2. Main Grid: Left Column (Photo & Banner) | Right Column (Tabbed Showcase) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT COLUMN: Profile Photo & Sub-Role Banner */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Main Photo Card */}
          <div className="glass-card rounded-3xl p-4 border border-cyan-500/30 bg-[#060714]/90 backdrop-blur-2xl relative overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            {/* Ambient Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/15 rounded-full blur-[60px] -z-10" />

            {/* Profile Photo Container */}
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-[#090b1c] relative">
              <img
                src="/WhatsApp%20Image%202026-07-19%20at%206.24.16%20PM.jpeg"
                alt="Jaimin Tadvi"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
              />

              {/* Status Badge Tag */}
              <div className="absolute top-3 right-3 bg-[#080a18]/90 border border-cyan-500/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-[10px] font-mono text-cyan-300 font-bold shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                ONLINE
              </div>
            </div>

            {/* Monospace Card Footer Metadata */}
            <div className="mt-3.5 px-1 flex items-center justify-between font-mono text-xs text-slate-400">
              <span className="text-cyan-400 font-bold tracking-wider">JAIMIN_TADVI_PROFILE.SYS</span>
              <span className="text-slate-500">MSU BARODA</span>
            </div>
          </div>

          {/* Sub-Card: Code Vimarsh Web Team Lead Banner */}
          <div className="glass-card rounded-3xl p-5 border border-purple-500/30 bg-[#070918]/90 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold text-purple-400 tracking-wider uppercase">
                // CODE VIMARSH CLUB DEVELOPER
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30 font-bold">
                <Sparkles className="w-3 h-3 text-cyan-400" /> WEB LEAD
              </span>
            </div>

            <h3 className="font-display font-bold text-base text-white mb-1">
              Building Community Web Hubs
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-4 font-mono">
              Directing responsive web portals, collaborative workshops, &amp; high-performance applications for 200+ active members.
            </p>

            <a
              href="https://github.com/jaimintadvi"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/30 hover:to-purple-600/30 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <span>Explore GitHub Repository</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Tabbed Technical Experience Showcase */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          
          {/* Tab Switcher Controls (Skills, Experience, Education) */}
          <div className="flex flex-wrap items-center gap-2 bg-[#060714] border border-cyan-500/25 rounded-2xl p-1.5 w-fit shadow-xl font-mono">
            
            {/* SKILLS TAB */}
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Code2 className="h-4 w-4" />
              <span>Skills</span>
            </button>

            {/* EXPERIENCE TAB */}
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Briefcase className="h-4 w-4" />
              <span>Experience</span>
            </button>

            {/* EDUCATION TAB */}
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/25 bg-[#060714]/90 backdrop-blur-2xl relative overflow-hidden min-h-[360px] flex flex-col justify-between shadow-2xl">
            
            {/* 1. SKILLS VIEW */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                
                {/* Section 1: Programming & Web */}
                <div className="space-y-3">
                  <h3 className="font-mono font-bold text-xs text-cyan-400 tracking-wider flex items-center gap-1.5 uppercase">
                    <span className="text-teal-400 font-extrabold">&gt;</span> PROGRAMMING &amp; WEB
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {programmingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium text-slate-200 border border-cyan-500/20 bg-[#090b1c] px-3 py-1.5 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 2: Frameworks & Systems */}
                <div className="space-y-3">
                  <h3 className="font-mono font-bold text-xs text-cyan-400 tracking-wider flex items-center gap-1.5 uppercase">
                    <span className="text-teal-400 font-extrabold">&gt;</span> FRAMEWORKS &amp; SYSTEMS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frameworksSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium text-slate-200 border border-cyan-500/20 bg-[#090b1c] px-3 py-1.5 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 3: Databases & Tools */}
                <div className="space-y-3">
                  <h3 className="font-mono font-bold text-xs text-cyan-400 tracking-wider flex items-center gap-1.5 uppercase">
                    <span className="text-teal-400 font-extrabold">&gt;</span> DATABASES &amp; TOOLS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {databasesToolsSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium text-slate-200 border border-cyan-500/20 bg-[#090b1c] px-3 py-1.5 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 4: AI/ML & Core Skills */}
                <div className="space-y-3">
                  <h3 className="font-mono font-bold text-xs text-cyan-400 tracking-wider flex items-center gap-1.5 uppercase">
                    <span className="text-teal-400 font-extrabold">&gt;</span> AI/ML &amp; CORE SKILLS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {aiMlCoreSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium text-slate-200 border border-cyan-500/20 bg-[#090b1c] px-3 py-1.5 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 cursor-default"
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
              <div className="space-y-6 text-left">
                {experienceData.map((exp) => (
                  <div
                    key={`${exp.company}-${exp.role}`}
                    className="relative overflow-hidden rounded-2xl p-5 bg-[#080918] border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-bold block mb-0.5">
                          {exp.company}
                        </span>
                        <h3 className="font-display font-bold text-lg text-white">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-mono font-bold">
                        <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-slate-300 text-xs leading-relaxed mb-3">
                      {Array.isArray(exp.description) ? (
                        exp.description.map((desc, dIdx) => <p key={dIdx}>• {desc}</p>)
                      ) : (
                        <p>{exp.description}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {(exp.tags || []).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. EDUCATION VIEW */}
            {activeTab === 'education' && (
              <div className="space-y-6 text-left">
                <div className="rounded-2xl p-5 bg-[#080918] border border-cyan-500/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase font-bold block mb-0.5">
                        {personalInfo.university}
                      </span>
                      <h3 className="font-display font-bold text-xl text-white">
                        {personalInfo.degree}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-mono font-bold">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                      <span>2022 — 2026 (Present)</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Bachelor of Engineering degree specializing in Computer Science &amp; Engineering. Core focus on Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, and Artificial Intelligence.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-[#0b0d24] border border-cyan-500/20">
                      <span className="text-cyan-400 font-bold block">Coding Showdown Rank</span>
                      <span className="text-slate-200">Rank #12 / 150+ in MSU C++ Contest</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0b0d24] border border-purple-500/20">
                      <span className="text-purple-400 font-bold block">Technical Lead</span>
                      <span className="text-slate-200">Code Vimarsh Web Team Lead</span>
                    </div>
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
