import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, Code2, Rocket, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface TimelineItem {
  number: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: React.ReactNode;
  category: string;
}

export default function Timeline() {
  const timelineData: TimelineItem[] = [
    {
      number: "01",
      title: "B.E. Computer Science & Engineering",
      subtitle: "The Maharaja Sayajirao University of Baroda",
      period: "2022 — 2026 (Present)",
      location: "Vadodara, Gujarat",
      description: "Pursuing Bachelor of Engineering with a deep focus on Data Structures, Algorithms, System Design, Operating Systems, and Artificial Intelligence.",
      highlights: [
        "Core Coursework: DSA, OOP, DBMS, Networks, OS, AI",
        "Ranked 12th in MSU Algorithmic Coding Challenge (C++)"
      ],
      tags: ["C++", "DSA", "DBMS", "OOP", "OS"],
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      category: "Education"
    },
    {
      number: "02",
      title: "Web Team Member & Tech Lead",
      subtitle: "Code Vimarsh Club",
      period: "2024 — Present",
      location: "MSU Baroda",
      description: "Collaborating with a team of developers to design, launch, and maintain responsive web portals and organize hands-on technical bootcamps.",
      highlights: [
        "Built responsive portals supporting 200+ active club members",
        "Mentored junior peers in Git, React, and glassmorphic UI design"
      ],
      tags: ["React 19", "Tailwind CSS", "Git", "UI/UX"],
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      category: "Experience"
    },
    {
      number: "03",
      title: "Full-Stack Web & AI Engineering",
      subtitle: "Independent Projects & Research",
      period: "2024 — 2025",
      location: "Remote / Open Source",
      description: "Diving into modern web frameworks, AI agent orchestration with LangGraph, local LLMs, vector search (ChromaDB), and computer vision with YOLOv11.",
      highlights: [
        "Developed multi-agent RAG chatbot workflows & vision tools",
        "Built high-performance React 19 web applications with Vite"
      ],
      tags: ["LangGraph", "YOLOv11", "ChromaDB", "Python", "React"],
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      category: "Innovation"
    },
    {
      number: "04",
      title: "Hackathon Winner & Contributor",
      subtitle: "Inter-College Tech Fest",
      period: "2025",
      location: "Vadodara",
      description: "Developed a rapid decentralized resource-sharing application prototype in a intense 36-hour sprint, taking top honours.",
      highlights: [
        "Won Top Contributor award out of 40+ participating teams",
        "Contributed bug fixes to community open-source repositories"
      ],
      tags: ["Node.js", "Express", "MongoDB", "Hackathon"],
      icon: <Award className="w-5 h-5 text-amber-400" />,
      category: "Achievement"
    },
    {
      number: "05",
      title: "Open to Internships & Roles",
      subtitle: "Full-Stack / AI Engineer",
      period: "Summer 2026",
      location: "Hybrid / Remote",
      description: "Ready to bring high energy, clean software architecture, and modern full-stack / AI skills to forward-thinking tech teams.",
      highlights: [
        "Available for Summer 2026 Software Development Internships",
        "Skilled in rapid prototyping, clean code, & modern UI/UX"
      ],
      tags: ["Full-Stack", "AI Agents", "React", "Python"],
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      category: "Future"
    }
  ];

  return (
    <section id="pathways" className="py-20 px-4 max-w-6xl mx-auto relative scroll-mt-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4">
          <span>✦ JOURNEY & EXPERIENCE</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
          Pathways &{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Milestones
          </span>
        </h2>
        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
          My academic foundation, leadership in tech communities, and practical engineering achievements.
        </p>
      </div>

      {/* Timeline Beam Container */}
      <div className="relative">
        {/* Central glowing beam line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 -translate-x-1/2 opacity-30 shadow-[0_0_15px_rgba(99,102,241,0.5)] hidden md:block" />

        {/* Timeline Items List */}
        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Badge with step number */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#080914] border-2 border-indigo-500/60 flex items-center justify-center text-xs font-mono font-bold text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] group hover:scale-110 transition-transform">
                    {item.number}
                  </div>
                </div>

                {/* Card Container */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="glass-card rounded-3xl p-6 border border-white/10 bg-slate-950/50 backdrop-blur-xl hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 relative group overflow-hidden">
                    {/* Background subtle radial glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />

                    {/* Top Row: Category Pill & Period */}
                    <div className={`flex flex-wrap items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-indigo-300">
                        {item.icon}
                        <span>{item.category}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.period}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-medium mt-1 flex items-center gap-1 justify-start">
                      <MapPin className="w-3 h-3 text-indigo-400" />
                      <span>{item.subtitle} • {item.location}</span>
                    </p>

                    {/* Description */}
                    <p className="text-slate-300 text-xs leading-relaxed mt-3">
                      {item.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className={`mt-3 space-y-1.5 text-[11px] text-slate-400 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-1.5 justify-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className={`flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for opposing side in 2-column layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
