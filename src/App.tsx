import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

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
      {/* Premium floating cosmic background */}
      <AnimatedBackground />

      {/* Floating Centered Pill Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main className="relative z-10 w-full">
        {/* Hero Banner Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Club & Project Experience Timeline */}
        <Experience />

        {/* Creative Projects Showcase */}
        <Projects />

        {/* Milestones & Achievements Vertical Tracker */}
        <Achievements />

        {/* Contact Form with real-time feedback */}
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="relative p-4 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white shadow-[0_8px_30px_rgba(124,58,237,0.4)] hover:shadow-[0_8px_35px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-105 group border border-purple-500/20"
          aria-label="Open chat"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <MessageSquare className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-[10px] font-bold text-slate-950 border-2 border-slate-950 shadow-md">
            1
          </span>
        </button>
      </div>
    </div>
  );
}
