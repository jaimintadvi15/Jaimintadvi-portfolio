import { useState, ReactNode } from 'react';
import { motion } from 'motion/react';

interface TiltSpotlightCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export default function TiltSpotlightCard({ children, className = "", delay = 0, yOffset = 30 }: TiltSpotlightCardProps) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlight({ x, y });

    // Calculate rotation angles (max 6 degrees tilt for premium, soft feel)
    const rotateX = -((y - rect.height / 2) / rect.height) * 6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 90, damping: 18, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`group relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Mouse Spotlight effect layer */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, rgba(99, 102, 241, 0.12), transparent 80%)`
        }}
      />
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
