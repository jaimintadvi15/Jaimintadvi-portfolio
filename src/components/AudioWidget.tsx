import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

export default function AudioWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const togglePlay = () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        }

        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, ctx.currentTime); // A3 ambient synth note

        gain.gain.setValueAtTime(isMuted ? 0 : 0.05, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;
        setIsPlaying(true);
      } catch (err) {
        console.error('Audio playback error:', err);
      }
    } else {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (gainRef.current && audioCtxRef.current) {
      if (isMuted) {
        gainRef.current.gain.setValueAtTime(0.05, audioCtxRef.current.currentTime);
        setIsMuted(false);
      } else {
        gainRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
        setIsMuted(true);
      }
    } else {
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block select-none">
      <div className="glass-card rounded-2xl p-2.5 px-4 border border-cyan-500/30 bg-[#060714]/90 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3 transition-all duration-300 hover:border-cyan-400">
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          title={isPlaying ? 'Pause Audio' : 'Play Ambient Music'}
          className="w-8 h-8 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center justify-center hover:scale-105 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
        </button>

        {/* Track Metadata & Equalizer Waveform */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <Music className="w-3 h-3 text-cyan-400" />
            <span className="text-[11px] font-mono font-bold text-white tracking-tight">
              {isPlaying ? 'Coding Lofi Synthwave' : 'Ambient Coding Mode'}
            </span>
          </div>

          {/* Equalizer Frequency Bars */}
          <div className="flex items-center gap-0.5 h-3 mt-1">
            {[1, 2, 3, 4, 5, 6].map((bar) => (
              <span
                key={bar}
                className={`w-1 rounded-full ${
                  isPlaying ? 'bg-cyan-400 animate-pulse' : 'h-1 bg-slate-700'
                }`}
                style={{
                  height: isPlaying ? `${(bar % 3 + 1) * 35}%` : '4px',
                  animationDelay: `${bar * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          title={isMuted ? 'Unmute' : 'Mute'}
          className="text-slate-400 hover:text-white p-1 transition-colors ml-1 cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

      </div>
    </div>
  );
}
