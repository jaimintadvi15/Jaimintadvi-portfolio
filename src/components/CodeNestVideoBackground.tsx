import React, { useEffect, useRef } from 'react';

export default function CodeNestVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamUrl = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: any = null;

    const initHLS = (HlsClass: any) => {
      if (HlsClass.isSupported()) {
        hlsInstance = new HlsClass({
          enableWorker: false, // Required specification
        });
        hlsInstance.loadSource(streamUrl);
        hlsInstance.attachMedia(video);
        hlsInstance.on(HlsClass.Events.MANIFEST_PARSED, () => {
          video.play().catch((e) => console.log('Autoplay prevented:', e));
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native Safari HLS support
        video.src = streamUrl;
        video.play().catch((e) => console.log('Autoplay prevented:', e));
      }
    };

    // Dynamically load hls.js if not available
    if ((window as any).Hls) {
      initHLS((window as any).Hls);
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest';
      script.async = true;
      script.onload = () => {
        if ((window as any).Hls) {
          initHLS((window as any).Hls);
        }
      };
      document.head.appendChild(script);
    }

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, [streamUrl]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#070b0a] pointer-events-none select-none">
      {/* 1. Background HLS Video (60% Opacity) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
      />

      {/* 2. Overlays: Left Gradient (#070b0a to transparent) & Bottom-Up Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b0a] via-[#070b0a]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b0a] via-[#070b0a]/40 to-transparent" />

      {/* 3. Three Thin Vertical Grid Lines (25%, 50%, 75% marks) */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-white/10" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/10" />
        <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-white/10" />
      </div>

      {/* 4. Central Glow: Large Horizontal SVG Ellipse Glow (Cyan/Dark Green #5ed29c, 25px Gaussian Blur Filter) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[350px] pointer-events-none z-10 opacity-75">
        <svg
          viewBox="0 0 800 300"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="25" />
            </filter>
          </defs>
          <ellipse
            cx="400"
            cy="40"
            rx="320"
            ry="90"
            fill="#5ed29c"
            opacity="0.35"
            filter="url(#glowBlur)"
          />
        </svg>
      </div>
    </div>
  );
}
