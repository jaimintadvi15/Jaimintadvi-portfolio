import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillOrbitSection from './components/SkillOrbitSection';
import WhyChooseMe from './components/WhyChooseMe';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'skill-orbit',
      'why-me',
      'projects',
      'achievements',
      'contact'
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div id="app-container" className="relative min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 via-indigo-400 to-purple-500 origin-left z-50 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
        style={{ scaleX }}
      />

      {/* Floating cosmic background */}
      <AnimatedBackground />

      {/* Floating Centered Pill Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections in Reference Sequence */}
      <main className="relative z-10 w-full space-y-8">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About activeSection={activeSection} />

        {/* 3. Dedicated Interactive Skill/Website Orbit System */}
        <SkillOrbitSection />

        {/* 5. Why Choose Jaimin? (Pillars of Value) */}
        <WhyChooseMe />

        {/* 6. Creative Projects Showcase */}
        <Projects />

        {/* 7. Latest Achievements & Certificates Grid */}
        <Achievements />

        {/* 10. Contact Form */}
        <Contact />
      </main>

      {/* Footer Area with Watermark */}
      <Footer />

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}
