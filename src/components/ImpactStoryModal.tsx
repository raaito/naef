import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, TrendingUp, BarChart3, Users, Award, ArrowRight } from 'lucide-react';
import { IMPACT_INDICATORS } from '../utils/impact.ts';

interface ImpactStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSupportWork: () => void;
}

export const ImpactStoryModal: React.FC<ImpactStoryModalProps> = ({
  isOpen,
  onClose,
  onSupportWork,
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="impact-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#263B2A] text-white rounded-3xl shadow-2xl overflow-y-auto border border-white/15 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
          aria-label="Close impact story modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#F97827] tracking-wider uppercase font-sans mb-2">
          <BarChart3 className="w-4 h-4" />
          <span>Evidence-Based Accountability</span>
        </div>

        {/* Title */}
        <h3 id="impact-modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
          How We Measure What Matters
        </h3>

        <p className="mt-2 text-sm sm:text-base text-white/80 font-sans leading-relaxed">
          At NAEF, impact is never an abstract tally or fabricated vanity metric. Every outcome is documented through our Monitoring, Evaluation &amp; Learning (MEL) framework—combining data-driven program tracking, continuous evaluation, impact reporting, and learning integration validated with the communities we serve.
        </p>

        {/* 4 Indicators Snapshot Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {IMPACT_INDICATORS.map((ind) => (
            <div key={ind.id} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#F97827] font-mono">
                {ind.targetValue.toLocaleString()}{ind.suffix}
              </div>
              <div className="text-xs font-semibold text-white/90 mt-1 font-sans">
                {ind.label}
              </div>
              <div className="text-[10px] text-white/60 mt-0.5 font-sans">
                {ind.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation Pillars */}
        <div className="mt-8 space-y-4 pt-6 border-t border-white/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97827] font-sans">
            Our 3-Stage Verification Protocol
          </h4>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#267F08] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-heading font-bold text-white">
                  1. Participatory Community Baseline Audits
                </h5>
                <p className="text-xs text-white/75 mt-1 leading-relaxed font-sans">
                  Before launching any project, field teams map local baseline indicators together with residents, identifying critical challenges and co-defining success criteria.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Users className="w-5 h-5 text-[#F97827] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-heading font-bold text-white">
                  2. Continuous Citizen Scorecards & Feedback Loops
                </h5>
                <p className="text-xs text-white/75 mt-1 leading-relaxed font-sans">
                  Beneficiaries hold regular feedback sessions, scoring program effectiveness and guiding rapid course adjustments in real time.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Award className="w-5 h-5 text-[#267F08] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-heading font-bold text-white">
                  3. Long-Term Cohort Tracking & Sustainability Verification
                </h5>
                <p className="text-xs text-white/75 mt-1 leading-relaxed font-sans">
                  We monitor participant progress 6, 12, and 24 months post-initiative to ensure that economic self-sufficiency, peace dialogues, and educational achievements remain durable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onSupportWork();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold shadow-xs hover:shadow transition-all font-sans"
          >
            <span>Partner With Our Impact Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors font-sans"
          >
            Close Impact Story
          </button>
        </div>
      </div>
    </div>
  );
};
