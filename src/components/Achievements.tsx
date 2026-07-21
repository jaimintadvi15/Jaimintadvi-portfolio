import { useRef } from 'react';
import { Trophy, Award, Star, Users, Calendar } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { achievementsData } from '../data';
import TiltSpotlightCard from './TiltSpotlightCard';

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
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the timeline container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"]
  });

  // Smooth the scroll progress values using a spring physics effect
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

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
      <div ref={containerRef} className="relative">
        {/* Background track (Desktop: Center, Mobile: Left) with soft glass border */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[6px] bg-slate-900/60 border border-white/5 rounded-full -translate-x-1/2 backdrop-blur-[2px]" />

        {/* Dynamic active connecting line: Ambient Glow blur layer */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[8px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 -translate-x-1/2 origin-top blur-[4px] z-10 opacity-70"
        />

        {/* Dynamic active connecting line: Sharp glowing core line */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 -translate-x-1/2 origin-top z-10 shadow-[0_0_12px_rgba(99,102,241,1)]"
        />

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
                {/* Timeline node icon with frosted glass appearance and entry spring transition */}
                <motion.div 
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.5),0_0_12px_rgba(99,102,241,0.3)] hover:border-indigo-400/60 transition-all duration-300 z-20"
                >
                  {getAchievementIcon(ach.iconType)}
                </motion.div>

                {/* Timeline Card with 3D Tilt and Mouse Spotlight (Frosted Glass) */}
                <TiltSpotlightCard
                  delay={index * 0.1}
                  yOffset={20}
                  className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 glass-card rounded-3xl p-6 md:p-8 hover:border-indigo-500/30 transition-all duration-300 relative group overflow-hidden ${
                    isLeft ? 'md:pr-8 md:pl-0' : 'md:pl-8'
                  }`}
                >
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
                </TiltSpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
