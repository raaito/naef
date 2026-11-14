import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { ProgramPillarDetail } from '../utils/programs.ts';

interface ProgramDetailModalProps {
  pillar: ProgramPillarDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onSupportPillar: (pillarId: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  pillar,
  isOpen,
  onClose,
  onSupportPillar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  if (!isOpen || !pillar) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pillar-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF9F6] text-[#292929] rounded-3xl shadow-2xl overflow-y-auto border border-[#263B2A]/15 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#292929]/60 hover:text-[#292929] rounded-full hover:bg-[#F3F5F1] transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
          aria-label="Close program details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#267F08] tracking-wider uppercase font-sans mb-2">
          <span className="font-mono text-xs font-bold text-[#F97827]">Pillar 0{pillar.pillarNumber}</span>
          <span className="text-[#263B2A]/30">·</span>
          <span>Strategic Program Initiative</span>
        </div>

        {/* Title */}
        <h3 id="pillar-modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] leading-tight">
          {pillar.title}
        </h3>

        <p className="mt-2 text-sm sm:text-base font-medium text-[#F97827] font-sans">
          {pillar.tagline}
        </p>

        {/* Image Preview */}
        <div className="mt-6 relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md bg-[#263B2A]">
          <img
            src={pillar.image}
            alt={pillar.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
            <span className="text-xs text-white/90 font-sans italic">
              "{pillar.fieldQuote.text}" — {pillar.fieldQuote.speaker}
            </span>
          </div>
        </div>

        {/* Narrative Description */}
        <div className="mt-6 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans">
            Program Overview
          </h4>
          <p className="text-sm sm:text-base text-[#292929]/80 leading-relaxed font-sans">
            {pillar.description}
          </p>
        </div>

        {/* Strategic Objectives */}
        <div className="mt-6 pt-6 border-t border-[#263B2A]/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans mb-3">
            Core Program Objectives
          </h4>
          <div className="space-y-2.5">
            {pillar.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#292929]/80 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#267F08] shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Areas List */}
        <div className="mt-6 pt-6 border-t border-[#263B2A]/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans mb-2.5">
            Key Interventions
          </h4>
          <div className="flex flex-wrap gap-2">
            {pillar.keyFocusAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-lg bg-[#F3F5F1] text-[#263B2A] text-xs font-medium border border-[#263B2A]/10"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-8 pt-6 border-t border-[#263B2A]/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onSupportPillar(pillar.id);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold shadow-xs hover:shadow transition-all font-sans"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Support This Program</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-[#263B2A] hover:bg-[#F3F5F1] rounded-full transition-colors font-sans"
          >
            Close Brief
          </button>
        </div>
      </div>
    </div>
  );
};
