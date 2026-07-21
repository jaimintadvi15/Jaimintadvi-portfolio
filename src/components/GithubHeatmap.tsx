import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GitCommit, Trophy, Flame, Code, Sparkles, CheckCircle2, Terminal } from 'lucide-react';

export default function GithubHeatmap() {
  const [hoveredTile, setHoveredTile] = useState<{ day: number; count: number } | null>(null);

  // Generate 52 weeks * 7 days pseudo-data for GitHub heatmap
  const totalDays = 52 * 7;
  const heatmapData = Array.from({ length: totalDays }, (_, i) => {
    // Generate realistic contribution distribution
    const rand = Math.sin(i * 0.15) * 0.5 + Math.cos(i * 0.3) * 0.5;
    let count = 0;
    if (rand > 0.45) count = Math.floor((rand - 0.45) * 12) + 1;
    if (i % 7 === 0 && Math.random() > 0.6) count = 0; // Weekend rest days
    return { day: i + 1, count };
  });

  const getTileColor = (count: number) => {
    if (count === 0) return 'bg-[#111322] border-white/5';
    if (count <= 2) return 'bg-indigo-950/80 border-indigo-700/40 text-indigo-300';
    if (count <= 5) return 'bg-indigo-700/80 border-indigo-500/50 text-indigo-200';
    if (count <= 8) return 'bg-indigo-500 border-indigo-400 text-white shadow-[0_0_8px_rgba(99,102,241,0.5)]';
    return 'bg-purple-500 border-purple-300 text-white shadow-[0_0_12px_rgba(168,85,247,0.7)]';
  };

  return (
    <section id="stats" className="py-20 px-4 max-w-6xl mx-auto relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
          <span>✦ CODING STATS & HEATMAP</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
          Engineered for{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Consistency
          </span>
        </h2>
        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
          Tracking daily commit activity, open-source contributions, and algorithmic problem solving.
        </p>
      </div>

      {/* Grid Container: Heatmap (Left) + LeetCode Stats (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 7 Columns: GitHub Contributions Heatmap */}
        <div className="lg:col-span-7 flex flex-col justify-between glass-card rounded-3xl p-6 border border-white/10 bg-slate-950/40 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <GitCommit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">GitHub Contribution Grid</h3>
                <p className="text-slate-400 text-xs font-mono">480+ Contributions in the last year</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#111322]" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-indigo-950" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-indigo-700" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-indigo-500" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-purple-500" />
              <span>More</span>
            </div>
          </div>

          {/* 52-Week Activity Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[580px] grid grid-rows-7 grid-flow-col gap-1.5 py-2">
              {heatmapData.map((tile) => (
                <div
                  key={tile.day}
                  onMouseEnter={() => setHoveredTile(tile)}
                  onMouseLeave={() => setHoveredTile(null)}
                  className={`w-3 h-3 rounded-[3px] border transition-all duration-200 cursor-pointer hover:scale-150 hover:z-20 ${getTileColor(
                    tile.count
                  )}`}
                />
              ))}
            </div>
          </div>

          {/* Hover Status Footer */}
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <div>
              {hoveredTile ? (
                <span className="text-indigo-300">
                  Day #{hoveredTile.day}: <strong className="text-white">{hoveredTile.count} contributions</strong>
                </span>
              ) : (
                <span>Hover over tiles to inspect daily activity</span>
              )}
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Flame className="w-3.5 h-3.5" /> 14 Day Streak
              </span>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: LeetCode & DSA Metrics */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-white/10 bg-slate-950/40 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Algorithmic Problem Solving</h3>
              <p className="text-slate-400 text-xs font-mono">MSU Rank 12 • 120+ Solved</p>
            </div>
          </div>

          {/* Total Progress Bar */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                <span className="text-slate-300 font-semibold">Total Problems Solved</span>
                <span className="text-indigo-400 font-bold">120 / 250</span>
              </div>
              <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full w-[48%]" />
              </div>
            </div>

            {/* Problem Difficulty Breakdown */}
            <div className="space-y-2.5 pt-2">
              {/* Easy */}
              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span className="text-emerald-400 font-semibold">Easy</span>
                  <span className="text-slate-300">55 Solved</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[65%]" />
                </div>
              </div>

              {/* Medium */}
              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span className="text-amber-400 font-semibold">Medium</span>
                  <span className="text-slate-300">52 Solved</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[52%]" />
                </div>
              </div>

              {/* Hard */}
              <div>
                <div className="flex justify-between text-[11px] font-mono mb-1">
                  <span className="text-rose-400 font-semibold">Hard</span>
                  <span className="text-slate-300">13 Solved</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full w-[28%]" />
                </div>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="pt-3 border-t border-white/5 flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">Primary Languages:</span>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold">C++ (65%)</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold">Python (25%)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
