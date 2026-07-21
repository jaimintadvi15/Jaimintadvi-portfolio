import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#04050b] border-t border-white/5 pt-16 pb-12 overflow-hidden select-none">
      {/* Top Background Radial Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[15rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Row: Brand Info + Navigation + Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Bio (col-span-5) */}
          <div className="md:col-span-5 space-y-3">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30 font-mono text-xs font-bold text-purple-400">
                &gt;_
              </div>
              <span className="font-display font-bold text-xl text-white">
                Jaimin<span className="text-cyan-400">.T</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Full-Stack Developer & Computer Science Student @ MSU Baroda. Focused on building high-performance web systems and AI agent workflows.
            </p>
          </div>

          {/* Quick Links (col-span-4) */}
          <div className="md:col-span-4 flex flex-col gap-2 font-mono text-xs text-slate-400">
            <span className="text-white font-bold tracking-wider uppercase mb-1">Navigation</span>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="hover:text-indigo-400 transition-colors">✦ Home</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">✦ About Me</a>
              <a href="#pathways" className="hover:text-indigo-400 transition-colors">✦ Expertise</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors">✦ Tech Stack</a>
              <a href="#why-me" className="hover:text-indigo-400 transition-colors">✦ Why Me</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors">✦ Projects</a>
              <a href="#achievements" className="hover:text-indigo-400 transition-colors">✦ Certificates</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">✦ Contact</a>
            </div>
          </div>

          {/* Back to Top & Socials (col-span-3) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
            </button>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/jaimintadvi"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/jaimintadvi"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:jaimintadvi15@gmail.com"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright sub-row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>© {new Date().getFullYear()} Jaimin Tadvi. Engineered with precision.</div>
          <div className="flex items-center gap-1.5">
            <span>Built with React 19 & Tailwind</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse ml-1" />
          </div>
        </div>

        {/* Large Name Bottom Watermark (as seen in reference design) */}
        <div className="w-full text-center mt-12 overflow-hidden pointer-events-none">
          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 via-slate-800/10 to-transparent uppercase opacity-80 leading-none">
            JAIMIN TADVI
          </h1>
        </div>
      </div>
    </footer>
  );
}
