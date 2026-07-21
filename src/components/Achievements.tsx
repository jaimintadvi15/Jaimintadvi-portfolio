import React from 'react';
import { Trophy, Award, Star, Users, Calendar, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { achievementsData } from '../data';
import TiltSpotlightCard from './TiltSpotlightCard';

function getAchievementIcon(type: string) {
  switch (type) {
    case 'trophy':
      return <Trophy className="h-5 w-5 text-amber-400" />;
    case 'certificate':
      return <Award className="h-5 w-5 text-emerald-400" />;
    case 'star':
      return <Star className="h-5 w-5 text-teal-300" />;
    case 'users':
      return <Users className="h-5 w-5 text-green-400" />;
    default:
      return <Star className="h-5 w-5 text-emerald-400" />;
  }
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20 relative">
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono mb-4 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>RECOGNITION &amp; CERTIFICATIONS</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
          Latest{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <p className="text-slate-400 text-sm mt-3 leading-relaxed font-sans">
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
            className="glass-card rounded-3xl border border-[#22c55e]/30 bg-[#040806]/90 backdrop-blur-xl overflow-hidden hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_40px_rgba(0,0,0,0.85)]"
          >
            {/* Top Certificate Header Banner Frame */}
            <div className="relative p-6 border-b border-[#22c55e]/20 bg-[#060c09] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/30 group-hover:scale-110 transition-transform">
                  {getAchievementIcon(ach.iconType)}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 tracking-wider uppercase block">
                    Verified Credential
                  </span>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                    {ach.title}
                  </h3>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold shadow-sm">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>VERIFIED</span>
              </div>
            </div>

            {/* Body Description & Date */}
            <div className="p-6 flex-1 flex flex-col justify-between font-mono">
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                {ach.description}
              </p>

              {/* Footer Info Row */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{ach.date}</span>
                </div>

                <div className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer text-[11px] font-bold">
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
