import { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      {/* Decorative center grid light */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-indigo-500/10 blur-[80px] rounded-full -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center flex flex-col items-center justify-center"
      >
        {/* Upper Accent badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-6 tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Currently Open For Opportunities
        </motion.div>

        {/* Name with text reveal */}
        <motion.h1 
          variants={itemVariants}
          className="font-display font-bold text-5xl md:text-8xl tracking-tight text-white mb-4"
        >
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-glow">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Typewriter Rotator Subtitle */}
        <motion.div 
          variants={itemVariants}
          className="h-10 md:h-12 flex items-center justify-center mb-6"
        >
          <p className="font-mono text-lg md:text-2xl text-slate-300 font-medium">
            <span className="text-indigo-400">&gt; </span>
            <span>{displayText}</span>
            <span className="animate-pulse font-bold text-indigo-400">|</span>
          </p>
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
          <a 
            href="#projects" 
            className="group relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
          >
            <span>View My Projects</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 font-medium px-8 py-3.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 text-sm shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
          >
            <span>Contact Me</span>
            <Send className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Quick Social Badges */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-4"
        >
          <a 
            href="https://github.com/jaimintadvi" 
            target="_blank" 
            referrerPolicy="no-referrer"
            className="p-3 bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 text-slate-400 hover:text-indigo-400 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/jaimintadvi" 
            target="_blank" 
            referrerPolicy="no-referrer"
            className="p-3 bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 text-slate-400 hover:text-indigo-400 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Linkedin className="h-5 w-5" />
          </a>
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
