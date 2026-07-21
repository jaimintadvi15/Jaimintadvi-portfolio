import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Triggers when section is largely in middle of view
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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left z-50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
      />

      {/* Premium floating cosmic background */}
      <AnimatedBackground />

      {/* Floating Centered Pill Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main className="relative z-10 w-full">
        {/* Hero Banner Section */}
        <Hero />

        {/* About Me Section */}
        <About activeSection={activeSection} />

        {/* Creative Projects Showcase */}
        <Projects />

        {/* Milestones & Achievements Vertical Tracker */}
        <Achievements />

        {/* Contact Form with real-time feedback */}
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />

      {/* AI Chatbot for queries */}
      <Chatbot />
    </div>
  );
}
