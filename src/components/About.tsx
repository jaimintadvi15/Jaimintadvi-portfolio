import { MapPin, GraduationCap, School, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function About() {
  const facts = [
    { icon: MapPin, label: "Location", value: personalInfo.location, color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
    { icon: GraduationCap, label: "Degree", value: personalInfo.degree, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { icon: School, label: "University", value: personalInfo.university, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { icon: BookOpen, label: "Currently Learning", value: personalInfo.currentlyLearning, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Biography Card */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-xs text-indigo-400 tracking-wider uppercase mb-3 block">Who I Am</span>
            <h3 className="font-display font-semibold text-2xl text-white mb-6">
              I am a 2nd year student at MSU Baroda driven by engineering beautiful digital spaces.
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not studying core academic subjects, I am deep into coding libraries, playing with animation frameworks, and writing clean backend APIs. I believe in writing code that is not just functional, but an absolute joy to interact with.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs text-slate-500">Degree Focus</p>
              <p className="text-slate-300 font-medium text-sm">Computer Science & Engineering</p>
            </div>
            <div>
              <p className="font-mono text-xs text-slate-500">Club Affiliation</p>
              <p className="text-indigo-400 font-medium text-sm">Code Vimarsh Club Web Team</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Avatar Platform */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          className="lg:col-span-5 glass-card rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Neon Orb background glowing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-[40px] -z-10" />

          {/* Interactive Abstract 3D Avatar Frame */}
          <div className="relative h-60 w-60 flex items-center justify-center rounded-2xl bg-slate-900/40 border border-white/10 overflow-hidden group shadow-2xl">
            {/* Pulsing rings */}
            <div className="absolute inset-0 border border-indigo-500/20 rounded-2xl animate-pulse scale-90" />
            <div className="absolute inset-2 border border-purple-500/10 rounded-2xl animate-pulse delay-500 scale-95" />

            {/* Futuristic Tech HUD / Silhouette */}
            <div className="relative z-10 text-center p-4">
              <div className="text-7xl font-display font-extrabold bg-gradient-to-br from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent select-none">
                JT
              </div>
              <div className="mt-4 font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                &lt; Developer_ID &gt;
              </div>
              <div className="mt-1.5 font-mono text-xs text-indigo-400 font-semibold">
                Baroda_BE2_CS
              </div>
            </div>

            {/* Corner decorative anchors */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-indigo-500/60" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-indigo-500/60" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-indigo-500/60" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-indigo-500/60" />
            
            {/* Scanning line animation */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500/30 blur-sm shadow-[0_0_10px_rgba(99,102,241,0.5)] animate-bounce" />
          </div>

          <div className="mt-8 text-center">
            <h4 className="font-display font-bold text-lg text-white">{personalInfo.name}</h4>
            <p className="text-slate-400 text-xs mt-1">{personalInfo.university}</p>
          </div>
        </motion.div>
      </div>

      {/* Facts Strip / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {facts.map((fact, index) => {
          const IconComponent = fact.icon;
          return (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className={`p-3 rounded-xl border flex-shrink-0 ${fact.color}`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">{fact.label}</p>
                <p className="text-slate-300 font-medium text-xs mt-1 leading-relaxed">{fact.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
