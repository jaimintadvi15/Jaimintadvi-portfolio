import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Code2, Briefcase, GraduationCap } from 'lucide-react';
import { experienceData } from '../data';

const programmingSkills = ["Python", "JavaScript", "Java", "C++", "C", "HTML5", "CSS3"];
const frameworksSkills = ["React 19", "Next.js", "Vite", "Tailwind CSS v4", "Framer Motion", "Node.js", "Express.js", "FastAPI", "Flask"];
const databasesToolsSkills = ["Supabase", "PostgreSQL", "MongoDB", "SQLite", "Git", "GitHub", "Docker", "Vercel", "VS Code"];
const aiMlCoreSkills = ["LangGraph (Agents)", "YOLOv11 (Vision)", "ChromaDB (RAG)", "Generative AI", "Local LLMs", "XGBoost", "Scikit-learn", "TensorFlow", "DSA", "OOP"];

interface SkillsProps {
  activeSection: string;
}

export default function Skills({ activeSection }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');

  // Sync active section from page scroll to the container tab
  useEffect(() => {
    if (activeSection === 'skills' || activeSection === 'experience' || activeSection === 'education') {
      setActiveTab(activeSection as any);
    }
  }, [activeSection]);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto scroll-mt-20 relative">
      {/* Scroll targets for Navbar spy */}
      <div id="skills" className="absolute top-0 left-0 scroll-mt-20" />
      <div id="experience" className="absolute top-0 left-0 scroll-mt-20" />
      <div id="education" className="absolute top-0 left-0 scroll-mt-20" />
      
      {/* Tab Switcher Controls (Just like the image!) */}
      <div className="flex items-center gap-1 bg-[#0a0a0c] border border-white/5 rounded-2xl p-1.5 w-fit mb-8 shadow-inner">
        {/* SKILLS TAB */}
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            activeTab === 'skills'
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
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            activeTab === 'experience'
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
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            activeTab === 'education'
              ? 'bg-red-500/10 border border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.07)]'
              : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {activeTab === 'education' && <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />}
          <GraduationCap className="h-4 w-4" />
          <span>Education</span>
        </button>
      </div>

      {/* Main Tabbed Container Panel */}
      <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 bg-slate-950/40 backdrop-blur-xl relative overflow-hidden min-h-[380px] flex flex-col justify-center">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" />

        {/* 1. SKILLS VIEW */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left animate-fadeIn">
            {/* Column 1 */}
            <div className="space-y-6">
              {/* Programming & Web */}
              <div>
                <h3 className="font-mono font-bold text-sm text-red-400 mb-3 tracking-wider flex items-center gap-1.5">
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

              {/* Databases & Tools */}
              <div>
                <h3 className="font-mono font-bold text-sm text-red-400 mb-3 tracking-wider flex items-center gap-1.5">
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

            {/* Column 2 */}
            <div className="space-y-6">
              {/* Frameworks & Systems */}
              <div>
                <h3 className="font-mono font-bold text-sm text-red-400 mb-3 tracking-wider flex items-center gap-1.5">
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

              {/* AI/ML & Core Skills */}
              <div>
                <h3 className="font-mono font-bold text-sm text-red-400 mb-3 tracking-wider flex items-center gap-1.5">
                  <span className="text-red-500">&gt;</span> AI/ML & CORE SKILLS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aiMlCoreSkills.map((skill) => (
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
                <ul className="space-y-2.5 mb-5 text-slate-400 text-sm leading-relaxed">
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
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
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

    </section>
  );
}
