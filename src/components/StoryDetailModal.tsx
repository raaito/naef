import React, { useEffect } from 'react';
import { X, CheckCircle2, Shield, Heart, ArrowRight, Quote } from 'lucide-react';
import { BeneficiaryStory } from '../utils/stories.ts';

interface StoryDetailModalProps {
  story: BeneficiaryStory | null;
  isOpen: boolean;
  onClose: () => void;
  onSupportProgram: (programNumber: number) => void;
}

export const StoryDetailModal: React.FC<StoryDetailModalProps> = ({
  story,
  isOpen,
  onClose,
  onSupportProgram,
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

  if (!isOpen || !story) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF9F6] text-[#292929] rounded-3xl shadow-2xl overflow-y-auto border border-[#263B2A]/15 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#292929]/60 hover:text-[#292929] rounded-full hover:bg-[#F3F5F1] transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
          aria-label="Close story modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Safeguarding & Consent Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#267F08] tracking-wider uppercase font-sans mb-3">
          <Shield className="w-4 h-4 text-[#267F08]" />
          <span>Verified Beneficiary Voice · Consent Approved</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#F97827] shadow-xs">
            <img
              src={story.portraitImage}
              alt={story.portraitAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 id="story-modal-title" className="font-heading font-extrabold text-xl sm:text-2xl text-[#263B2A]">
              {story.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#292929]/75 font-sans">
              {story.role} · <span className="font-medium text-[#267F08]">{story.location}</span>
            </p>
          </div>
        </div>

        {/* Pull Quote Box */}
        <div className="mt-6 p-5 rounded-2xl bg-[#F3F5F1] border border-[#263B2A]/10 relative">
          <Quote className="w-6 h-6 text-[#F97827]/40 absolute top-4 right-4" />
          <p className="text-sm sm:text-base font-serif italic text-[#263B2A] leading-relaxed">
            "{story.approvedQuote}"
          </p>
        </div>

        {/* Narrative */}
        <div className="mt-6 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans">
            Full Story & Journey
          </h4>
          <p className="text-sm sm:text-base text-[#292929]/80 leading-relaxed font-sans">
            {story.fullStory}
          </p>
        </div>

        {/* Tangible Outcome */}
        <div className="mt-6 p-4 rounded-xl bg-[#263B2A] text-white flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#F97827] block">
              Tangible Grassroots Outcome
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white/95 font-sans">
              {story.outcome}
            </span>
          </div>
          <CheckCircle2 className="w-5 h-5 text-[#267F08] shrink-0" />
        </div>

        {/* Action Row */}
        <div className="mt-8 pt-6 border-t border-[#263B2A]/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onSupportProgram(story.programNumber);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold shadow-xs hover:shadow transition-all font-sans"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Support Similar Impact Stories</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-[#263B2A] hover:bg-[#F3F5F1] rounded-full transition-colors font-sans"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
