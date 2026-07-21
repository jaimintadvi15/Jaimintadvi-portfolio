import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Rocket,
  Calendar,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Terminal,
  Layers,
  LayoutGrid,
  CheckCircle2
} from 'lucide-react';

interface TimelineItem {
  id: string;
  number: string;
  year: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  icon: React.ReactNode;
  category: string;
  cmd: string;
}

export default function Timeline() {
  const [activeStage, setActiveStage] = useState(0);
  const [viewMode, setViewMode] = useState<'console' | 'blueprint'>('console');

  const timelineData: TimelineItem[] = [
    {
      id: 'degree',
      number: '01',
      year: '2022 — 2026',
      title: 'B.E. Computer Science & Engineering',
      subtitle: 'The Maharaja Sayajirao University of Baroda',
      period: '2022 — 2026 (Present)',
      location: 'Vadodara, Gujarat',
      description:
        'Pursuing Bachelor of Engineering with a rigorous focus on Data Structures, Algorithms, Operating Systems, Database Management, and Artificial Intelligence.',
      highlights: [
        'Core Coursework: DSA, OOP, DBMS, Networks, OS, Machine Learning',
        'Ranked 12th in MSU Algorithmic Coding Challenge (C++)',
        'Active core participant in Department Tech Fest initiatives'
      ],
      metrics: [
        { label: 'MSU Code Rank', value: '#12 / 150+' },
        { label: 'Degree Track', value: 'Computer Science' },
        { label: 'Status', value: 'Final Year' }
      ],
      tags: ['C++', 'DSA', 'DBMS', 'OOP', 'OS', 'Networks'],
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      category: 'Academic Foundation',
      cmd: 'exec pathway --fetch=degree'
    },
    {
      id: 'codevimarsh',
      number: '02',
      year: '2024 — Present',
      title: 'Web Team Member & Tech Lead',
      subtitle: 'Code Vimarsh Club',
      period: '2024 — Present',
      location: 'MSU Baroda',
      description:
        'Collaborating with a dedicated team of student engineers to design, build, and maintain responsive web portals, manage event registrations, and host technical bootcamps.',
      highlights: [
        'Built responsive portals supporting 200+ active club members',
        'Mentored junior peers in Git, React 19, and glassmorphic UI design',
        'Engineered live event lead boards & registration workflows'
      ],
      metrics: [
        { label: 'Active Users', value: '200+ Members' },
        { label: 'Role', value: 'Web Lead' },
        { label: 'Impact', value: 'Club Web Hub' }
      ],
      tags: ['React 19', 'Tailwind CSS', 'Git', 'UI/UX', 'Node.js'],
      icon: <Briefcase className="w-5 h-5 text-teal-300" />,
      category: 'Tech Community Leadership',
      cmd: 'exec pathway --fetch=codevimarsh'
    },
    {
      id: 'innovation',
      number: '03',
      year: '2024 — 2025',
      title: 'Full-Stack Web & AI Engineering',
      subtitle: 'Independent Projects & Research',
      period: '2024 — 2025',
      location: 'Remote / Open Source',
      description:
        'Diving deep into modern web architectures, AI agent orchestration with LangGraph, local LLM integration, vector databases (ChromaDB), and computer vision models (YOLOv11).',
      highlights: [
        'Developed multi-agent RAG chatbot workflows & vision tools',
        'Built high-performance React 19 web applications with Vite',
        'Crafted responsive CSS design systems with dark glassmorphism'
      ],
      metrics: [
        { label: 'Tech Stack', value: 'Full-Stack + AI' },
        { label: 'Projects Built', value: '6+ Live Apps' },
        { label: 'Focus', value: 'Agent Workflows' }
      ],
      tags: ['LangGraph', 'YOLOv11', 'ChromaDB', 'Python', 'React 19'],
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      category: 'Technical Innovation',
      cmd: 'exec pathway --fetch=ai-research'
    },
    {
      id: 'hackathon',
      number: '04',
      year: '2025',
      title: 'Hackathon Winner & Top Contributor',
      subtitle: 'Inter-College Tech Fest',
      period: '2025',
      location: 'Vadodara',
      description:
        'Architected and delivered a rapid decentralized resource-sharing web application prototype in an intense 36-hour hackathon sprint, earning top honours.',
      highlights: [
        'Won Top Contributor award out of 40+ participating teams',
        'Delivered full REST API backend + React UI in under 36 hours',
        'Contributed bug fixes to community open-source repositories'
      ],
      metrics: [
        { label: 'Hackathon Duration', value: '36 Hours' },
        { label: 'Placement', value: 'Top Contributor' },
        { label: 'Teams Competed', value: '40+ Teams' }
      ],
      tags: ['Node.js', 'Express', 'MongoDB', 'Hackathon', 'REST APIs'],
      icon: <Award className="w-5 h-5 text-amber-400" />,
      category: 'Hackathon Milestone',
      cmd: 'exec pathway --fetch=hackathon-win'
    },
    {
      id: 'future',
      number: '05',
      year: 'Summer 2026',
      title: 'Open to Internships & Roles',
      subtitle: 'Full-Stack / AI Engineer',
      period: 'Summer 2026',
      location: 'Hybrid / Remote',
      description:
        'Ready to bring high energy, clean software architecture, and modern full-stack / AI skills to forward-thinking tech teams.',
      highlights: [
        'Available for Summer 2026 Software Development Internships',
        'Skilled in rapid prototyping, clean code, & modern UI/UX',
        'Eager to solve real-world industry challenges'
      ],
      metrics: [
        { label: 'Availability', value: 'Summer 2026' },
        { label: 'Target Roles', value: 'Full-Stack / AI' },
        { label: 'Work Preference', value: 'Remote / On-site' }
      ],
      tags: ['Full-Stack', 'AI Agents', 'React 19', 'Python', 'Node.js'],
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      category: 'Future Horizon',
      cmd: 'exec pathway --fetch=internships'
    }
  ];

  const currentItem = timelineData[activeStage];

  const handleNext = () => {
    setActiveStage((prev) => (prev + 1) % timelineData.length);
  };

  const handlePrev = () => {
    setActiveStage((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  return (
    <section id="pathways" className="py-20 px-4 max-w-6xl mx-auto relative scroll-mt-24">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE CAREER CONSOLE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Journey &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2 leading-relaxed max-w-xl font-sans">
            Explore my academic foundation, web team leadership, AI research, and hackathon wins through an interactive console.
          </p>
        </div>

        {/* View Mode Toggle Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#080918] border border-cyan-500/30 backdrop-blur-md shadow-xl font-mono text-xs">
          <button
            onClick={() => setViewMode('console')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              viewMode === 'console'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Console</span>
          </button>
          <button
            onClick={() => setViewMode('blueprint')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              viewMode === 'blueprint'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Full Blueprint</span>
          </button>
        </div>
      </div>

      {/* MODE 1: INTERACTIVE CAREER CONSOLE */}
      {viewMode === 'console' && (
        <div className="space-y-8">
          {/* Horizontal Interactive Stage Selector Track */}
          <div className="glass-card rounded-2xl p-3 border border-cyan-500/20 bg-[#080918]/80 backdrop-blur-xl shadow-2xl overflow-x-auto custom-scrollbar">
            <div className="flex items-center justify-between min-w-[680px] gap-2">
              {timelineData.map((item, index) => {
                const isActive = activeStage === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveStage(index)}
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-mono text-xs text-left group ${
                      isActive
                        ? 'bg-cyan-500/15 border border-cyan-500/40 text-white shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                        : 'bg-white/[0.02] border border-white/5 text-slate-400 hover:bg-white/[0.05] hover:text-slate-200'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition-all ${
                        isActive
                          ? 'bg-cyan-400 text-slate-950 font-black shadow-[0_0_10px_rgba(6,182,212,0.6)]'
                          : 'bg-white/10 text-slate-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-300'
                      }`}
                    >
                      {item.number}
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-bold ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
                        {item.category}
                      </span>
                      <span className="text-[10px] text-slate-400">{item.year}</span>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeStageIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Stage Interactive Display Console Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 bg-[#060714]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
            >
              {/* Top Bar: Terminal Directive & Stage Nav Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>${currentItem.cmd}</span>
                  </div>
                  <span className="text-slate-400 hidden sm:inline">• Stage {currentItem.number} of 05</span>
                </div>

                {/* Stage Stepper Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    title="Previous Stage"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    title="Next Stage"
                    className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Title, Subtitle, Description & Highlights */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                      <span className="p-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                        {currentItem.icon}
                      </span>
                      <span className="uppercase tracking-wider font-bold">{currentItem.category}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {currentItem.period}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                      {currentItem.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm font-mono mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{currentItem.subtitle} ({currentItem.location})</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    {currentItem.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase block">
                      KEY DELIVERABLES &amp; IMPACT:
                    </span>
                    <ul className="space-y-2">
                      {currentItem.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-slate-400 font-bold tracking-wider uppercase block mb-2.5">
                      TECHNOLOGIES &amp; CONCEPTS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-semibold hover:border-cyan-400 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Key Metrics Cards */}
                <div className="lg:col-span-4 w-full space-y-4">
                  <div className="p-4 rounded-2xl bg-[#090b1c] border border-cyan-500/20 text-xs font-mono mb-2">
                    <span className="text-cyan-400 font-bold block mb-1">// IMPACT METRICS</span>
                    <span className="text-slate-400">Verified milestone achievements for this stage.</span>
                  </div>

                  {currentItem.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-2xl bg-[#080918] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-between group shadow-lg"
                    >
                      <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                        {m.label}
                      </span>
                      <span className="font-display font-extrabold text-base sm:text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* MODE 2: FULL BLUEPRINT CARDS GRID */}
      {viewMode === 'blueprint' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-6 border border-cyan-500/20 bg-[#060714]/80 backdrop-blur-xl hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold">
                    {item.icon}
                    <span>{item.category}</span>
                  </span>
                  <span className="text-slate-400">{item.period}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs font-mono mt-1">
                  {item.subtitle} • {item.location}
                </p>

                <p className="text-slate-300 text-xs leading-relaxed mt-3 font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
