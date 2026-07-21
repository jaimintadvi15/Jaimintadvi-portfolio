import { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin, Send, Activity, Compass, Sparkles, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import Magnetic from './Magnetic';

export default function Hero() {
  const subtitles = [
    "Computer Science Student",
    "Full-Stack Web Developer",
    "Web Team @ Code Vimarsh Club",
    "MSU Baroda Engineer"
  ];

  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = subtitles[currentSubtitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentFullText) {
          // Pause at the end before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSubtitleIndex]);

  // Framer motion containers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 md:pt-36 pb-12 scroll-mt-28"
    >
      {/* Decorative center grid light */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-indigo-500/10 blur-[80px] rounded-full -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center flex flex-col items-center justify-center"
      >
        {/* Horizontal Badges / Pills */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {/* Pill 1: Open to Internship */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] md:text-xs font-mono font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Open to Internship 2026
          </div>

          {/* Pill 2: Building */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] md:text-xs font-mono font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(244,63,94,0.1)]">
            <Activity className="h-3.5 w-3.5" />
            Building: Edulink Records
          </div>

          {/* Pill 3: Cmd + K Palette */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/40 border border-slate-700/60 text-slate-300 text-[10px] md:text-xs font-mono font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <Compass className="h-3.5 w-3.5" />
            Cmd + K Palette
          </div>
        </motion.div>

        {/* Center Glowing Sparkles Circle Badge */}
        <motion.div 
          variants={itemVariants}
          className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-[1.5px] bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.35)] mb-8 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="w-full h-full rounded-full bg-slate-950/95 flex items-center justify-center">
            <Sparkles className="h-10 w-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)] group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </motion.div>

        {/* Name with metallic vertical gradient */}
        <motion.h1 
          variants={itemVariants}
          className="font-display font-extrabold text-5xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 mb-2 select-none"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Subtitle with Glowing Text */}
        <motion.div 
          variants={itemVariants}
          className="mb-6"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            Full-Stack Web Developer
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          variants={itemVariants}
          className="max-w-xl md:max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Actions */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Magnetic>
            <a 
              href="#projects" 
              className="group relative flex items-center gap-2 text-white font-medium px-8 py-3.5 rounded-full shadow-[0_4px_15px_rgba(244,63,94,0.25)] hover:shadow-[0_8px_25px_rgba(244,63,94,0.45)] transition-all duration-500 ease-in-out hover:-translate-y-[2px] text-sm overflow-hidden"
            >
              {/* Default background gradient (subtle version) */}
              <span className="absolute inset-0 bg-gradient-to-r from-rose-500/90 via-orange-500/90 to-amber-500/90 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out -z-10 rounded-full" />
              {/* Hover background gradient (intensified version) */}
              <span className="absolute inset-0 bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out -z-10 rounded-full" />
              
              <span>View My Projects</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
            </a>
          </Magnetic>
          <Magnetic>
            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-slate-950/60 hover:bg-slate-900/80 text-slate-300 hover:text-white border border-emerald-500/30 hover:border-emerald-500/60 font-medium px-8 py-3.5 rounded-full transition-all duration-500 ease-in-out hover:-translate-y-[2px] text-sm shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              <span>Contact Me</span>
              <Send className="h-4 w-4" />
            </a>
          </Magnetic>
        </motion.div>

        {/* Quick Social Badges */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-4 mb-12"
        >
          <Magnetic strength={0.4}>
            <a 
              href="https://github.com/jaimintadvi" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="p-3 bg-white/5 border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-cyan-400 rounded-full transition-all duration-500 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] shadow-lg block"
            >
              <Github className="h-5 w-5" />
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a 
              href="https://linkedin.com/in/jaimintadvi" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="p-3 bg-white/5 border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-cyan-400 rounded-full transition-all duration-500 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] shadow-lg block"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a 
              href="mailto:jaimintadvi15@gmail.com" 
              className="p-3 bg-white/5 border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-cyan-400 rounded-full transition-all duration-500 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] shadow-lg block"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Magnetic>
        </motion.div>

        {/* Hero Quick Stat Counter Cards (Lovable Feature) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl"
        >
          <div className="glass-card rounded-2xl p-4 border border-white/10 bg-slate-950/40 backdrop-blur-xl text-center group hover:border-indigo-500/30 transition-all">
            <h4 className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">15+</h4>
            <p className="text-[11px] font-mono text-slate-400 mt-1">Projects Built</p>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-white/10 bg-slate-950/40 backdrop-blur-xl text-center group hover:border-purple-500/30 transition-all">
            <h4 className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">120+</h4>
            <p className="text-[11px] font-mono text-slate-400 mt-1">LeetCode Solved</p>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-white/10 bg-slate-950/40 backdrop-blur-xl text-center group hover:border-cyan-500/30 transition-all">
            <h4 className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">480+</h4>
            <p className="text-[11px] font-mono text-slate-400 mt-1">GitHub Commits</p>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-white/10 bg-slate-950/40 backdrop-blur-xl text-center group hover:border-amber-500/30 transition-all">
            <h4 className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">4+ Yrs</h4>
            <p className="text-[11px] font-mono text-slate-400 mt-1">Coding & Systems</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bouncing Scroll down anchor */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-slate-500 hover:text-indigo-400 transition-colors"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll Down</span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
