import { Github, ExternalLink, Code2, ShoppingBag, Users, CloudSun, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { projectsData } from '../data';
import TiltSpotlightCard from './TiltSpotlightCard';

// Helper to render responsive customized CSS vector illustrations based on project type
function renderProjectVisual(imageName: string) {
  switch (imageName) {
    case 'portfolio':
      return (
        <div className="relative w-full h-full bg-[#080811] flex flex-col p-4 font-mono text-[10px] text-slate-500 select-none overflow-hidden">
          {/* Mock Window Top Bar */}
          <div className="flex items-center gap-1.5 pb-3 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            <span className="ml-2 text-[9px] text-slate-600">portfolio-v2.tsx</span>
          </div>
          {/* Simulated Web Elements */}
          <div className="flex-1 flex flex-col justify-center gap-2 pt-2">
            <div className="flex items-center gap-2 text-indigo-400">
              <Code2 className="h-4.5 w-4.5 text-glow" />
              <span className="font-semibold text-white">const portfolio = () =&gt; &#123;</span>
            </div>
            <div className="pl-4 text-cyan-400">name: <span className="text-amber-300">"Jaimin Tadvi"</span>,</div>
            <div className="pl-4 text-purple-400">focus: <span className="text-indigo-300">["UI/UX", "Backend"]</span></div>
            <div className="text-indigo-400">&#125;</div>
          </div>
          {/* Floating visual absolute elements */}
          <div className="absolute right-4 bottom-4 h-16 w-16 rounded-full border border-indigo-500/20 flex items-center justify-center bg-indigo-500/5 animate-pulse">
            <span className="text-indigo-400 font-bold text-xs">98%</span>
          </div>
        </div>
      );
    case 'ecommerce':
      return (
        <div className="relative w-full h-full bg-[#0a060e] flex flex-col p-4 select-none overflow-hidden font-sans">
          {/* Mock Shop Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <ShoppingBag className="h-4 w-4 text-purple-400" />
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider">NEO-STORES</span>
            </div>
            <div className="h-4 w-8 rounded bg-purple-500/20 text-purple-300 text-[8px] flex items-center justify-center font-mono">
              CART (3)
            </div>
          </div>
          {/* Simulated Shopping grid */}
          <div className="flex-1 grid grid-cols-2 gap-2 pt-2.5">
            <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div className="h-10 rounded bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 border border-purple-500/10" />
              <div className="flex justify-between items-center mt-1">
                <span className="text-[9px] text-slate-300">Tech Hoodie</span>
                <span className="text-[9px] font-semibold text-purple-400 font-mono">$45</span>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div className="h-10 rounded bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 border border-cyan-500/10" />
              <div className="flex justify-between items-center mt-1">
                <span className="text-[9px] text-slate-300">Pixel Cap</span>
                <span className="text-[9px] font-semibold text-cyan-400 font-mono">$18</span>
              </div>
            </div>
          </div>
        </div>
      );
    case 'students':
      return (
        <div className="relative w-full h-full bg-[#030806] flex flex-col p-4 select-none overflow-hidden font-sans">
          {/* Mock DB Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-emerald-400" />
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider">STUDENT ROSTER</span>
            </div>
            <span className="text-[8px] text-emerald-500 font-mono">CONNECTED</span>
          </div>
          {/* Simulated Roster records */}
          <div className="flex-1 flex flex-col gap-2 pt-2.5">
            <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[9px] text-emerald-400 font-bold">JD</div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-white font-medium">Jaimin Tadvi</span>
                  <span className="text-[8px] text-slate-500">BE-2 CS</span>
                </div>
              </div>
              <span className="text-[9px] font-mono font-semibold text-emerald-400">9.4 CGPA</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-slate-700/30 border border-white/5 flex items-center justify-center text-[9px] text-slate-400 font-bold">AS</div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-300 font-medium">Aryan Shah</span>
                  <span className="text-[8px] text-slate-500">BE-2 ME</span>
                </div>
              </div>
              <span className="text-[9px] font-mono font-semibold text-slate-400">8.8 CGPA</span>
            </div>
          </div>
        </div>
      );
    case 'weather':
      return (
        <div className="relative w-full h-full bg-[#040810] flex flex-col p-4 select-none overflow-hidden font-sans">
          {/* Mock Weather Panel */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <CloudSun className="h-4 w-4 text-amber-400 animate-pulse" />
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider">AETHER WEATHER</span>
            </div>
            <span className="text-[8px] text-slate-500 font-mono">LIVE API</span>
          </div>
          {/* Weather gauge visuals */}
          <div className="flex-1 flex items-center gap-4 pt-2.5">
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-3xl font-display font-light text-white leading-none">32°C</span>
              <span className="text-[9px] text-slate-400 mt-1">Vadodara, IN</span>
              <span className="text-[8px] text-indigo-400 mt-0.5">Scattered Clouds</span>
            </div>
            {/* Visual weather circle */}
            <div className="h-16 w-16 rounded-full border border-amber-500/20 bg-amber-500/5 flex flex-col items-center justify-center">
              <CloudSun className="h-6 w-6 text-amber-400" />
              <span className="text-[8px] font-mono text-slate-400 mt-1">62% RH</span>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 mx-auto rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <TiltSpotlightCard
            key={project.title}
            delay={index * 0.15}
            yOffset={40}
            className="glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] flex flex-col h-full cursor-pointer font-sans"
          >
            {/* Top Showcase Frame */}
            <div className="relative h-48 w-full border-b border-white/5 overflow-hidden">
              {renderProjectVisual(project.imageName)}
              {/* Blur accent glow over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-80" />
            </div>

            {/* Bottom Details Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Title */}
                <div className="flex items-center justify-between mb-3 gap-2">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono tracking-wider font-semibold px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all shadow-sm"
                >
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 hover:border-indigo-500/50 text-xs font-semibold text-indigo-300 hover:text-white transition-all shadow-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </TiltSpotlightCard>
        ))}
      </div>
    </section>
  );
}
