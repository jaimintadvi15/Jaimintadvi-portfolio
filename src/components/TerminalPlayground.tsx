import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export default function TerminalPlayground() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const initialHistory: HistoryEntry[] = [
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-indigo-400 font-bold">✦ Welcome to Jaimin Tadvi&apos;s Interactive Shell v2.4</p>
          <p className="text-xs text-slate-400">Type <span className="text-emerald-400 font-bold">&apos;help&apos;</span> to see available commands or click shortcut chips below.</p>
        </div>
      ),
    },
  ];

  const [history, setHistory] = useState<HistoryEntry[]>(initialHistory);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-indigo-300 font-bold mb-1">Available Commands:</p>
            <p><span className="text-emerald-400 font-semibold">about</span>    - Brief developer bio & education</p>
            <p><span className="text-emerald-400 font-semibold">skills</span>   - List core programming languages & AI stack</p>
            <p><span className="text-emerald-400 font-semibold">projects</span> - Display featured web & AI projects</p>
            <p><span className="text-emerald-400 font-semibold">stats</span>    - Show GitHub commits & LeetCode solved count</p>
            <p><span className="text-emerald-400 font-semibold">contact</span>  - Get email, LinkedIn, & GitHub profiles</p>
            <p><span className="text-emerald-400 font-semibold">whoami</span>   - Inspect current session context</p>
            <p><span className="text-emerald-400 font-semibold">clear</span>    - Clear terminal buffer</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-indigo-300 font-bold">Jaimin Tadvi</p>
            <p>• B.E. Computer Science & Engineering @ MSU Baroda (2022-2026)</p>
            <p>• Web Team Member @ Code Vimarsh Club</p>
            <p>• Passionate about Full-Stack Systems, LangGraph AI Agents, & Computer Vision.</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-purple-300 font-bold">Technical Arsenal:</p>
            <p>• Languages: C++, Python, JavaScript, TypeScript, C, Java</p>
            <p>• Web Stack: React 19, Next.js, Node.js, Express, Tailwind CSS v4, Vite</p>
            <p>• AI / Vision: LangGraph, YOLOv11, ChromaDB RAG, Local LLMs</p>
            <p>• Databases: PostgreSQL, Supabase, MongoDB, SQLite</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs font-mono space-y-1.5 text-slate-300">
            <p className="text-cyan-300 font-bold">Featured Projects:</p>
            <p>1. <strong className="text-white">Developer Portfolio</strong> - Dark Glassmorphism, Orbit Visualization, & AI Assistant</p>
            <p>2. <strong className="text-white">Student Management System</strong> - Node.js, Express, MongoDB CRUD application</p>
            <p>3. <strong className="text-white">Weather Analytics Dashboard</strong> - OpenWeather API & live forecast analytics</p>
            <p>4. <strong className="text-white">E-Commerce UI</strong> - React Context API shopping engine</p>
          </div>
        );
        break;

      case 'stats':
        output = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-emerald-300 font-bold font-mono">Performance & Metrics:</p>
            <p>• GitHub Commits: <span className="text-white font-bold">480+ in 2025-2026</span></p>
            <p>• Algorithmic Problems: <span className="text-white font-bold">120+ Solved (MSU Rank 12)</span></p>
            <p>• Code Consistency: <span className="text-white font-bold">14 Day Current Streak</span></p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-indigo-300 font-bold">Contact Info:</p>
            <p>• Email: <a href="mailto:jaimintadvi@example.com" className="text-cyan-400 underline">jaimintadvi@example.com</a></p>
            <p>• GitHub: <a href="https://github.com/jaimintadvi" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/jaimintadvi</a></p>
            <p>• LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">linkedin.com/in/jaimintadvi</a></p>
          </div>
        );
        break;

      case 'whoami':
        output = <p className="text-xs font-mono text-emerald-400">visitor@jaimin-portfolio:~# Welcome future collaborator!</p>;
        break;

      case 'sudo':
        output = <p className="text-xs font-mono text-amber-400 font-bold">⚡ Permission granted! Jaimin is open to Summer 2026 internships & full-stack roles!</p>;
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        return;

      default:
        output = (
          <p className="text-xs font-mono text-amber-400">
            Command not recognized: &apos;{trimmed}&apos;. Type <span className="text-white font-bold">&apos;help&apos;</span> for a list of available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  const copyTerminalOutput = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 px-4 max-w-4xl mx-auto relative scroll-mt-20">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>INTERACTIVE SHELL</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
          Command Line{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Playground
          </span>
        </h2>
        <p className="text-slate-400 text-xs mt-2 font-mono">
          Explore my portfolio directly from the CLI. Try typing &apos;help&apos;, &apos;skills&apos;, or &apos;projects&apos;.
        </p>
      </div>

      {/* Terminal Window Card */}
      <div className="glass-card rounded-2xl border border-white/10 bg-[#080914]/90 backdrop-blur-2xl shadow-2xl overflow-hidden text-left font-mono">
        {/* Mac OS Top Bar */}
        <div className="bg-[#0e101d] px-4 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 text-xs text-slate-400 font-mono font-medium">jaimin@portfolio:~ (bash)</span>
          </div>

          <button
            onClick={copyTerminalOutput}
            className="text-slate-400 hover:text-white text-xs flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded border border-white/5 transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Command Chip Shortcuts */}
        <div className="px-4 py-2 bg-[#0a0b16] border-b border-white/5 flex flex-wrap gap-2 text-[11px]">
          {['help', 'about', 'skills', 'projects', 'stats', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-300 font-semibold transition-all hover:scale-105"
            >
              $&nbsp;{cmd}
            </button>
          ))}
        </div>

        {/* Scrollable Terminal Output Body */}
        <div className="p-5 min-h-[260px] max-h-[380px] overflow-y-auto space-y-4 text-xs leading-relaxed">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1.5">
              {entry.command !== 'welcome' && (
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">jaimin@portfolio:~$</span>
                  <span className="text-white font-semibold">{entry.command}</span>
                </div>
              )}
              <div className="pl-2 border-l-2 border-indigo-500/30">{entry.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={onSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-bold">jaimin@portfolio:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a command (e.g. 'help', 'projects', 'clear')..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs focus:ring-0 placeholder:text-slate-600"
              autoFocus
            />
            <button type="submit" className="text-slate-500 hover:text-indigo-400">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

          <div ref={terminalEndRef} />
        </div>
      </div>
    </section>
  );
}
