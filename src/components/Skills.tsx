import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData } from '../data';
import { C as CppIcon } from './icons/CppIcon';

// Helper to resolve icon by string name
function getIcon(name: string, skillName: string) {
  if (skillName === "C++") {
    return <CppIcon className="h-6 w-6" />;
  }
  // Fallback if not found
  const LucideIcon = (Icons as any)[name] || Icons.Code2;
  return <LucideIcon className="h-6 w-6" />;
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
          Core{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        <p className="text-slate-400 text-xs md:text-sm mt-4 max-w-md mx-auto">
          Hover over each technology to see full-spectrum details and modern glass-glow reactions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillsData.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="glass-card rounded-3xl p-6 md:p-8 flex flex-col h-full border border-white/5"
          >
            <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center justify-between">
              <span>{category.title}</span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-500 font-normal">
                {category.skills.length} Items
              </span>
            </h3>

            {/* Grid of items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] hover:bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 text-center cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.15)]"
                >
                  {/* Subtle color flare on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300" />
                  
                  {/* Dynamic Skill Icon */}
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-indigo-400 group-hover:text-glow block">
                      {getIcon(skill.iconName, skill.name)}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <span className="font-sans text-xs font-medium text-slate-300 group-hover:text-white transition-colors mt-2">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
