import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROGRAM_PILLARS } from '../utils/navigation.ts';

interface WatchStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WatchStoryModal: React.FC<WatchStoryModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#263B2A] text-white rounded-2xl shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1A281D]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F97827] animate-pulse" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-widest text-white/70 font-sans font-medium">Documentary Feature</span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-white/90">Nana Advocacy & Empowerment Foundation</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
            aria-label="Close documentary video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Player Area */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          {/* Background image preview with simulated cinematic grade */}
          <img
            src="/assets/images/naef_hero_community_1794318993744.jpg"
            alt="NAEF Community story scene"
            className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-102"
          />

          {/* Cinematic lighting gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40"></div>

          {/* Documentary Title Overlay */}
          <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
            <div className="max-w-md">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#F97827] mb-1">
                Chapter {String(activeChapter + 1).padStart(2, '0')}
              </span>
              <h3 id="story-modal-title" className="text-lg sm:text-2xl font-heading font-bold text-white leading-snug">
                {PROGRAM_PILLARS[activeChapter]?.title || 'Building Empowered Communities'}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1 line-clamp-2">
                {PROGRAM_PILLARS[activeChapter]?.description}
              </p>
            </div>
          </div>

          {/* Center Play/Pause indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F97827] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 group-hover:bg-[#E46618]"
              aria-label={isPlaying ? 'Pause story' : 'Play story'}
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </button>
          </div>

          {/* Player Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
            {/* Progress bar */}
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-3 cursor-pointer" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress(Math.round((clickX / rect.width) * 100));
            }}>
              <div 
                className="bg-[#F97827] h-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs text-white/80">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <span>02:14 / 08:45</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors p-1"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-[#F97827]" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/10 text-[10px] uppercase font-mono">1080p HD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar Chapters Selector */}
        <div className="p-4 sm:p-6 bg-[#263B2A] border-t border-white/10">
          <div className="text-xs uppercase tracking-wider text-white/60 font-sans mb-3 font-medium">
            Select Story Chapter
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {PROGRAM_PILLARS.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => {
                  setActiveChapter(idx);
                  setProgress((idx + 1) * 20 - 5);
                }}
                className={`text-left p-2.5 rounded-lg border transition-all text-xs ${
                  activeChapter === idx
                    ? 'bg-white/15 border-[#F97827] text-white shadow-xs'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-mono text-[#F97827] font-semibold mb-0.5">
                  Part 0{pillar.pillarNumber}
                </div>
                <div className="font-heading font-medium truncate text-[11px] leading-tight">
                  {pillar.title.split('—')[0].replace('Initiative', '').replace('Platform', '').replace('Center', '')}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
