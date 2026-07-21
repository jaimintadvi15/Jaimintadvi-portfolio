import { motion } from 'motion/react';
import { Atom, Code2, Cpu, Database, Figma, GitBranch } from 'lucide-react';

export default function AnimatedBackground() {
  const floatingIcons = [
    { Icon: Atom, color: "text-cyan-500/10", size: 48, top: "15%", left: "10%", delay: 0, duration: 25 },
    { Icon: GitBranch, color: "text-orange-500/10", size: 36, top: "45%", left: "80%", delay: 2, duration: 20 },
    { Icon: Figma, color: "text-pink-500/10", size: 40, top: "75%", left: "15%", delay: 4, duration: 28 },
    { Icon: Database, color: "text-emerald-500/10", size: 42, top: "25%", left: "85%", delay: 1, duration: 22 },
    { Icon: Cpu, color: "text-purple-500/10", size: 38, top: "60%", left: "70%", delay: 3, duration: 24 },
    { Icon: Code2, color: "text-blue-500/10", size: 44, top: "80%", left: "85%", delay: 5, duration: 26 },
  ];

  return (
    <div id="animated-background" className="fixed inset-0 -z-50 overflow-hidden bg-[#09090b]">
      {/* Mesh Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Ambient Aurora Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-blue-600/10 to-indigo-600/15 blur-[120px] animate-pulse-slow opacity-70" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/15 blur-[140px] animate-pulse-slow-reverse opacity-70" />
      <div className="absolute top-[35%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-bl from-cyan-600/8 to-blue-500/10 blur-[110px] animate-pulse-slow opacity-60" />
      <div className="absolute bottom-[25%] left-[5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-purple-700/8 to-violet-600/8 blur-[120px] animate-pulse-slow-reverse opacity-60" />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden md:block"
          style={{
            top: item.top,
            left: item.left,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon className={item.color} style={{ width: item.size, height: item.size }} />
        </motion.div>
      ))}

      {/* Subtle vignettes or lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#09090b] via-transparent to-[#09090b]/50 opacity-90" />
    </div>
  );
}
