import React from 'react';
import CyberHudBackground from './CyberHudBackground';

export default function AnimatedBackground() {
  return (
    <div id="animated-background" className="fixed inset-0 -z-50 overflow-hidden bg-[#040806]">
      {/* Animated Cyber Green HUD Background */}
      <CyberHudBackground />
    </div>
  );
}
