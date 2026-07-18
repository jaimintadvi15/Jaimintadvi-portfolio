import { Trophy, Award, Star, Users, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { achievementsData } from '../data';

// Helper to resolve specific milestone icons
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
    <section id="achievements" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
          Milestones &{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Central connecting line drawing downwards (Desktop: Center, Mobile: Left) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2 opacity-30" />

        {/* List of achievements */}
        <div className="space-y-12 md:space-y-8">
          {achievementsData.map((ach, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={ach.title} 
                className={`flex flex-col md:flex-row items-stretch w-full relative ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline node icon placeholder */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border-2 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.4)] z-20">
                  {getAchievementIcon(ach.iconType)}
                </div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: isLeft ? -50 : 50,
                    y: 20
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    y: 0 
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: 'spring', stiffness: 90, damping: 15, delay: index * 0.1 }}
                  className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${
                    isLeft ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="glass-card rounded-3xl p-6 md:p-8 hover:border-indigo-500/30 transition-all duration-300 relative group overflow-hidden">
                    {/* Tiny neon border marker */}
                    <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-indigo-500/40" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-indigo-300 transition-colors">
                        {ach.title}
                      </h3>
                      {/* Date Badge */}
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 whitespace-nowrap">
                        <Calendar className="h-3 w-3" />
                        <span>{ach.date}</span>
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
