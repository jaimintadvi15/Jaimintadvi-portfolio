import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { experienceData } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
          Club & Work{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
      </div>

      <div className="relative border-l border-white/10 md:pl-8 ml-4 md:ml-12 space-y-12">
        {experienceData.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
          >
            {/* Timeline bullet / anchor */}
            <div className="absolute -left-4 md:-left-12 top-0 mt-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.3)] z-10 text-indigo-400">
              <Briefcase className="h-4 w-4" />
            </div>

            {/* Content Glassy Card */}
            <div className="glass-card rounded-3xl p-6 md:p-8 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden group">
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-xs text-indigo-400 tracking-wider uppercase mb-1 block">
                    {exp.company}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white">
                    {exp.role}
                  </h3>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono self-start md:self-center">
                  <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Descriptions */}
              <ul className="space-y-3.5 mb-8 text-slate-400 text-sm md:text-base leading-relaxed">
                {exp.description.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono tracking-wider font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 uppercase shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
