import { useState, useEffect } from 'react';
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
    </div>
  );
}
