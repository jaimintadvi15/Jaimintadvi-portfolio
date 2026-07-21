import React from 'react';
import { Trophy, Award, Star, Users, Calendar, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { achievementsData } from '../data';
import TiltSpotlightCard from './TiltSpotlightCard';

function getAchievementIcon(type: string) {
  switch (type) {
    case 'trophy':
      return <Trophy className="h-5 w-5 text-amber-400" />;
    case 'certificate':
      return <Award className="h-5 w-5 text-cyan-400" />;
    case 'star':
      return <Star className="h-5 w-5 text-purple-400" />;
    case 'users':
      return <Users className="h-5 w-5 text-indigo-400" />;
    default:
      return <Star className="h-5 w-5 text-indigo-400" />;
  }
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>RECOGNITION & CERTIFICATIONS</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
          Latest{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
          Official certifications, competitive programming ranks, and university hackathon recognitions.
        </p>
      </div>

      {/* 2-Column Grid of Certificate / Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievementsData.map((ach, index) => (
          <TiltSpotlightCard
            key={ach.title}
            delay={index * 0.1}
            yOffset={20}
            className="glass-card rounded-3xl border border-white/5 bg-slate-950/40 backdrop-blur-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Top Certificate Header Banner Frame */}
            <div className="relative p-6 border-b border-white/5 bg-gradient-to-r from-purple-950/20 via-indigo-950/20 to-slate-950/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getAchievementIcon(ach.iconType)}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-purple-400 tracking-wider uppercase block">
                    Verified Credential
                  </span>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                    {ach.title}
                  </h3>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-semibold">
                <CheckCircle className="w-3 h-3" />
                <span>VERIFIED</span>
              </div>
            </div>

            {/* Body Description & Date */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                {ach.description}
              </p>

              {/* Footer Info Row */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{ach.date}</span>
                </div>

                <div className="flex items-center gap-1 text-indigo-400 hover:text-white transition-colors cursor-pointer text-[11px]">
                  <span>Credential Details</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          </TiltSpotlightCard>
        ))}
      </div>
    </section>
  );
}
