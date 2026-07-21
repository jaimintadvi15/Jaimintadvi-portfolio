import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import Magnetic from './Magnetic';

interface CommandOutput {
  id: string;
  command: string;
  response: React.ReactNode;
}

export default function Hero() {
  const subtitles = [
    "Hackathon Champion",
    "Full-Stack Web Developer",
    "Computer Science Engineer",
    "Web Team @ Code Vimarsh"
  ];

  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [commandHistory, setCommandHistory] = useState<CommandOutput[]>([]);
  const terminalLogsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = subtitles[currentSubtitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
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

  useEffect(() => {
    if (terminalLogsRef.current) {
      terminalLogsRef.current.scrollTop = terminalLogsRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const executeCommand = (cmdRaw: string) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setCommandHistory([]);
      return;
    }

    let response: React.ReactNode;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">Available Shell Commands:</p>
            <p><span className="text-teal-300 font-bold">skills</span> - Technical skills &amp; frameworks</p>
            <p><span className="text-teal-300 font-bold">about</span> - Background &amp; engineering degree</p>
            <p><span className="text-teal-300 font-bold">why-me</span> - Core technical advantages</p>
            <p><span className="text-teal-300 font-bold">projects</span> - Top featured web builds</p>
            <p><span className="text-teal-300 font-bold">achievements</span> - Milestones &amp; hackathons</p>
            <p><span className="text-teal-300 font-bold">contact</span> - Email, GitHub &amp; LinkedIn</p>
            <p><span className="text-teal-300 font-bold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">🚀 Tech Stack &amp; Languages:</p>
            <p>• <span className="text-white font-medium">Languages:</span> C++, C, Java, HTML5, CSS3, JavaScript</p>
            <p>• <span className="text-white font-medium">Frontend:</span> React.js, Tailwind CSS, Vite, Framer Motion</p>
            <p>• <span className="text-white font-medium">Backend &amp; Tools:</span> Node.js, Express, Git, GitHub, VS Code</p>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">🎓 About Jaimin Tadvi:</p>
            <p>• B.E. Computer Science &amp; Engineering @ MSU Baroda</p>
            <p>• Web Team Member @ Code Vimarsh Club</p>
            <p>• Focused on high-performance full-stack web applications &amp; clean code.</p>
          </div>
        );
        break;

      case 'why-me':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">⚡ Why Choose Jaimin:</p>
            <p>1. Fast learner with strong DSA &amp; algorithmic fundamentals (MSU Rank 12)</p>
            <p>2. Experienced in hackathon builds &amp; collaborative web team projects</p>
            <p>3. Obsessed with pixel-perfect, accessible UI &amp; modern design systems</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">💻 Featured Projects:</p>
            <p>• <span className="text-white font-bold">Developer Portfolio:</span> Futuristic dark glassmorphic interactive web app</p>
            <p>• <span className="text-white font-bold">E-Commerce UI Clone:</span> React Context engine &amp; modern shopping flow</p>
            <p>• <span className="text-white font-bold">Student Management System:</span> Full CRUD portal with Node.js &amp; MongoDB</p>
            <p>• <span className="text-white font-bold">Weather Dashboard:</span> Real-time OpenWeather API analytics</p>
          </div>
        );
        break;

      case 'achievements':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">🏆 Key Achievements:</p>
            <p>• Code Vimarsh Web Team Member Induction (2024)</p>
            <p>• MSU Algorithmic Coding Showdown - Rank 12 / 150+</p>
            <p>• Inter-College Hackathon Top Contributor</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">📫 Get in Touch:</p>
            <p>• Email: <a href="mailto:jaimintadvi15@gmail.com" className="text-cyan-400 underline">jaimintadvi15@gmail.com</a></p>
            <p>• GitHub: <a href="https://github.com/jaimintadvi" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/jaimintadvi</a></p>
            <p>• LinkedIn: <a href="https://linkedin.com/in/jaimintadvi" target="_blank" rel="noreferrer" className="text-cyan-400 underline">linkedin.com/in/jaimintadvi</a></p>
          </div>
        );
        break;

      default:
        response = (
          <p className="text-amber-400">
            Command not found: &apos;{cmdRaw}&apos;. Type <span className="text-white font-bold">&apos;help&apos;</span> to see options.
          </p>
        );
        break;
    }

    setCommandHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdRaw,
        response,
      },
    ]);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    executeCommand(terminalInput);
    setTerminalInput('');
  };

  const handleCopyShell = () => {
    setCopied(true);
    navigator.clipboard.writeText('jaimin@portfolio:~$ help');
    setTimeout(() => setCopied(false), 2000);
  };

  // Split name for highlighting
  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts[0] || 'Jaimin';
  const lastName = nameParts.slice(1).join(' ') || 'Tadvi';

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 scroll-mt-28 overflow-hidden bg-transparent"
    >
      {/* Background Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15" 
        style={{
          backgroundImage: `radial-gradient(rgba(0, 242, 254, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(0, 242, 254, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px'
        }}
      />

      {/* Ambient Cosmic Cyan & Purple Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />

      {/* Faint Background Code Watermarks */}
      <div className="absolute top-12 left-10 text-[11px] font-mono text-cyan-500/20 pointer-events-none select-none hidden md:block">
        const user = &quot;{personalInfo.name}&quot;;
      </div>
      <div className="absolute top-16 right-16 text-[11px] font-mono text-purple-400/20 pointer-events-none select-none hidden md:block">
        01101001
      </div>
      <div className="absolute bottom-12 left-12 text-[11px] font-mono text-teal-400/20 pointer-events-none select-none hidden md:block">
        &lt;React.StrictMode&gt;
      </div>
      <div className="absolute bottom-16 right-24 text-[11px] font-mono text-cyan-400/20 pointer-events-none select-none hidden md:block">
        model.fit(X, y)
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Bio & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Status Badge Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#060c09]/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            $ NPM RUN START:DEV
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]">
            Hi, I&apos;m {firstName}{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]">
              {lastName}
            </span>
          </h1>

          {/* Dynamic Monospace Role Line */}
          <div className="text-xl sm:text-2xl font-mono text-slate-200 font-medium">
            I am a{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 bg-clip-text text-transparent font-bold underline decoration-emerald-500/40 underline-offset-4">
              {displayText}
            </span>
            <span className="animate-pulse text-emerald-400 font-bold ml-0.5">|</span>
          </div>

          {/* Bio Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            Engineering student at MSU Baroda passionate about full-stack web systems, modern UI/UX design, and clean scalable software architectures. Thriving in hackathons and team-focused builds.
          </p>

          {/* Compiler Message Directive Box */}
          <div className="w-full max-w-xl rounded-xl bg-[#060c09]/90 border border-emerald-500/30 p-4 sm:p-5 font-mono shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="text-emerald-400 text-xs font-bold tracking-wider mb-2 flex items-center gap-1.5">
              // SYSTEM DIRECTIVE :: CODE LOGIC
            </div>
            <p className="text-slate-200 text-sm sm:text-base italic tracking-wide">
              &quot;Driven by relentless curiosity, obsessed with clean architecture, and built to transform complex ideas into high-impact software. ⚡&quot;
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Magnetic>
              <a
                href="#achievements"
                className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] hover:-translate-y-0.5"
              >
                <span>View Achievements</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-[#0a120e] hover:bg-[#101c16] border border-emerald-500/30 hover:border-emerald-400 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Let&apos;s Connect</span>
                <span className="text-base">👏</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Terminal Shell Window */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 w-full flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-xl rounded-2xl border border-emerald-500/30 bg-[#060c09]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden font-mono text-left">
            
            {/* Window Top Title Bar */}
            <div className="px-4 py-3 bg-[#0a120e] border-b border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />

                <span className="ml-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase tracking-wider font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  [LIVE LINK]
                </span>

                <span className="text-slate-400 text-xs font-mono ml-2 hidden sm:inline">
                  &gt;_ bash - jaimin@msu-box:~
                </span>
              </div>

              <button
                onClick={handleCopyShell}
                title="Copy shell line"
                className="text-slate-400 hover:text-white text-xs flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Terminal Body Log */}
            <div 
              ref={terminalLogsRef}
              className="p-4 space-y-3 text-xs font-mono min-h-[250px] max-h-[340px] overflow-y-auto custom-scrollbar bg-[#030604]"
            >
              {/* Default Welcome Command & Card */}
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-slate-400">jaimin@portfolio:~$</span>
                <span className="text-emerald-400 font-bold">help</span>
              </div>

              <div className="bg-[#08100b] border border-emerald-500/20 rounded-xl p-3.5 space-y-1.5 text-slate-300 shadow-inner">
                <p className="font-semibold text-slate-100">Welcome to Jaimin&apos;s Portfolio interactive shell!</p>
                <p className="text-slate-400 text-xs">Type or click a command below to explore.</p>
              </div>

              {/* Dynamic Command History */}
              {commandHistory.map((item) => (
                <div key={item.id} className="space-y-2 pt-1">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-slate-400">jaimin@portfolio:~$</span>
                    <span className="text-emerald-400 font-bold">{item.command}</span>
                  </div>
                  <div className="pl-3 border-l-2 border-emerald-500/40 py-1">
                    {item.response}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Shell Command Chips */}
            <div className="px-4 py-2.5 bg-[#08100b] border-t border-b border-emerald-500/20 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mr-1">
                QUICK SHELL:
              </span>
              {['skills', 'about', 'why-me', 'projects', 'achievements', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="px-2.5 py-1 rounded-md bg-[#0e1c14] hover:bg-[#162a1e] border border-emerald-500/20 hover:border-emerald-400/60 text-slate-300 hover:text-emerald-300 text-[11px] font-mono transition-all hover:scale-105 cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Command Input */}
            <form onSubmit={handleTerminalSubmit} className="px-4 py-3 bg-[#030604] flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-sm font-mono">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type command (e.g., skills, help)..."
                className="bg-transparent w-full text-slate-200 font-mono text-xs focus:outline-none placeholder:text-slate-600"
              />
            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
