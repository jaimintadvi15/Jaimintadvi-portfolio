import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 border-t border-white/5 bg-slate-950/25 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto rounded-t-3xl mt-12 text-center sm:text-left select-none">
      <div className="text-slate-500 text-xs font-mono">
        © 2026 Jaimin Tadvi. All rights reserved.
      </div>
      
      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono">
        <span>Designed with</span>
        <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 animate-pulse" />
        <span>for Web Excellence</span>
      </div>

      <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
        <a href="#home" className="hover:text-indigo-400 transition-colors uppercase">Back to Top</a>
        <span>•</span>
        <a href="#about" className="hover:text-indigo-400 transition-colors uppercase">About</a>
        <span>•</span>
        <a href="#projects" className="hover:text-indigo-400 transition-colors uppercase font-semibold text-slate-400">Projects</a>
      </div>
    </footer>
  );
}
