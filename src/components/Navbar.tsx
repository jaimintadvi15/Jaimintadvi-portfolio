import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Web Orbit', href: '#skill-orbit' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
      <nav
        id="navbar-pill"
        className={`w-full flex items-center justify-between transition-all duration-500 rounded-full px-5 py-3 md:px-7 ${
          isScrolled
            ? 'max-w-6xl bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2.5'
            : 'max-w-6xl bg-transparent border border-transparent py-4'
        }`}
      >
        {/* Logo / Brand Name */}
        <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 group-hover:bg-[#22c55e]/20 group-hover:border-[#22c55e] transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <span className="font-mono text-xs font-bold text-[#22c55e]">&gt;_</span>
          </div>
          <span className="font-display font-bold text-base tracking-tight text-white transition-all whitespace-nowrap">
            Jaimin<span className="text-[#22c55e] font-bold">.T</span>
          </span>
        </a>

        {/* Desktop Links (One Line Always) */}
        <ul className="hidden md:flex items-center gap-1 flex-nowrap">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.label} className="flex-shrink-0">
                <a
                  href={item.href}
                  className={`group relative text-[11px] font-mono font-medium tracking-wider uppercase px-3 py-2 flex items-center justify-center whitespace-nowrap transition-colors duration-300 ease-in-out hover:text-white ${
                    isActive ? 'text-[#22c55e] font-bold' : 'text-slate-400'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {/* Smooth Cyber Green Gradient Underline */}
                  <span className={`absolute bottom-0 h-[2px] bg-gradient-to-r from-[#22c55e] to-teal-400 transition-all duration-300 ease-in-out ${isActive ? 'w-5' : 'w-0 group-hover:w-5'}`} />

                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden p-1.5 rounded-full hover:bg-slate-800/50 transition-colors text-slate-400 hover:text-white flex-shrink-0"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden z-50"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-indigo-600/20 text-indigo-400 border-l-4 border-indigo-500 font-bold'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
