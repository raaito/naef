import React, { useEffect } from 'react';
import { X, ArrowRight, ShieldCheck, HeartHandshake, Compass, CheckCircle2 } from 'lucide-react';
import { PROGRAM_PILLARS } from '../utils/navigation.ts';

interface AboutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutDrawer: React.FC<AboutDrawerProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-drawer-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl h-full bg-[#FAF9F6] text-[#292929] shadow-2xl overflow-y-auto border-l border-[#263B2A]/15 p-6 sm:p-10 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#263B2A]/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span className="text-xs uppercase tracking-widest text-[#267F08] font-bold font-sans">
                About NAEF · Foundation Profile
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#292929]/70 hover:text-[#292929] rounded-full hover:bg-[#F3F5F1] transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
              aria-label="Close about foundation drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Narrative Content */}
          <div className="mt-8 space-y-6">
            <h3 id="about-drawer-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] leading-tight">
              Rooted in Community. Driven by Purpose.
            </h3>

            <p className="text-sm sm:text-base text-[#292929]/80 font-sans leading-relaxed">
              Nana Advocacy and Empowerment Foundation (NAEF) is a non-governmental, non-profit, and volunteer-driven organization committed to advancing social justice, gender equality, education, civic participation, environmental sustainability, and community empowerment through grassroots engagement, capacity building, and strategic partnerships.
            </p>

            <div className="p-5 rounded-2xl bg-[#F3F5F1] border border-[#263B2A]/10 text-xs sm:text-sm text-[#263B2A] space-y-2">
              <div className="font-heading font-bold text-sm text-[#263B2A] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#F97827]" />
                <span>Our Official Mission</span>
              </div>
              <p className="text-[#292929]/75 font-sans leading-relaxed">
                To promote social justice, gender equality, inclusive governance, education, environmental sustainability, and community empowerment through advocacy, capacity building, and strategic partnerships.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#263B2A]/10">
              <div className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans">
                Our Strategic Operating Framework
              </div>

              <div className="space-y-3">
                {PROGRAM_PILLARS.map((p) => (
                  <div key={p.id} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#263B2A]/10">
                    <span className="font-mono text-xs font-bold text-[#F97827] mt-0.5">
                      0{p.pillarNumber}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-heading font-semibold text-[#263B2A]">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#292929]/70 mt-0.5 font-sans">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-8 mt-8 border-t border-[#263B2A]/10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="w-full py-3 px-5 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white font-semibold text-xs text-center transition-colors font-sans"
          >
            Close & Return to Journey
          </button>
        </div>
      </div>
    </div>
  );
};
