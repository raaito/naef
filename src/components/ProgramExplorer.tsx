import React, { useState } from 'react';
import { PROGRAM_DETAILS, ProgramPillarDetail } from '../utils/programs.ts';
import { ArrowRight, CheckCircle2, Quote, Sparkles, ChevronRight, Layers } from 'lucide-react';

interface ProgramExplorerProps {
  onOpenPillarModal: (pillar: ProgramPillarDetail) => void;
  onSupportPillar: (pillarId: string) => void;
}

export const ProgramExplorer: React.FC<ProgramExplorerProps> = ({
  onOpenPillarModal,
  onSupportPillar,
}) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = PROGRAM_DETAILS[activePillarIndex];

  return (
    <section 
      id="programs" 
      className="relative py-28 lg:py-36 bg-[#F3F5F1] border-t border-[#263B2A]/10 overflow-hidden"
      aria-label="Where We Focus Our Efforts - NAEF Program Pillars"
    >
      {/* Subtle organic background curves */}
      <div className="absolute top-0 right-1/4 -mt-32 w-96 h-96 rounded-full bg-gradient-to-b from-[#267F08]/5 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-10 -mb-32 w-80 h-80 rounded-full bg-gradient-to-t from-[#F97827]/5 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-3">
            <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
            <span>Five Strategic Pillars</span>
            <span className="text-[#263B2A]/30">/</span>
            <span className="text-[#292929]/60 font-medium">Program Architecture</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#263B2A] tracking-tight leading-[1.15]">
            Where We Focus Our Efforts.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#292929]/80 font-sans leading-relaxed">
            Our programs address the interconnected root causes of inequality and poverty. Select a pillar below to explore its field objectives, community methodology, and active grassroots initiatives.
          </p>
        </div>

        {/* Horizontal Program Selector Bar (Desktop: 5 segmented buttons; Mobile: touch scroll rail) */}
        <div className="relative mb-8 lg:mb-12">
          <div 
            className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-3 sm:pb-0 no-scrollbar"
            role="tablist"
            aria-label="NAEF Program Pillars Selector"
          >
            {PROGRAM_DETAILS.map((pillar, idx) => {
              const isActive = activePillarIndex === idx;
              return (
                <button
                  key={pillar.id}
                  role="tab"
                  id={`tab-${pillar.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${pillar.id}`}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`group shrink-0 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F97827] flex-1 min-w-[200px] sm:min-w-0 ${
                    isActive
                      ? 'bg-[#263B2A] text-white border-[#263B2A] shadow-md -translate-y-0.5'
                      : 'bg-white/80 hover:bg-white border-[#263B2A]/10 text-[#292929] hover:border-[#267F08]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#F97827]' : 'text-[#267F08]'
                    }`}>
                      0{pillar.pillarNumber}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${
                      isActive ? 'text-white/60' : 'text-[#292929]/40'
                    }`}>
                      Pillar
                    </span>
                  </div>
                  <div className={`text-xs sm:text-sm font-heading font-bold truncate leading-tight ${
                    isActive ? 'text-white' : 'text-[#263B2A] group-hover:text-[#267F08]'
                  }`}>
                    {pillar.shortName}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Program Showcase Content Area */}
        <div 
          id={`panel-${activePillar.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activePillar.id}`}
          className="bg-[#FAF9F6] border border-[#263B2A]/15 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Visual Photography Column (5 cols on lg) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#263B2A]/10 aspect-[4/3] bg-[#263B2A] group">
                <img
                  src={activePillar.image}
                  alt={activePillar.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  key={activePillar.image}
                />

                {/* Subtle scrim & field quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-start gap-2.5">
                    <Quote className="w-4 h-4 text-[#F97827] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-white/95 font-sans italic leading-relaxed">
                        "{activePillar.fieldQuote.text}"
                      </p>
                      <p className="text-[11px] text-white/70 font-sans mt-1">
                        — {activePillar.fieldQuote.speaker}, <span className="text-[#F97827]">{activePillar.fieldQuote.role}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Focus tags bar */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {activePillar.keyFocusAreas.map((area) => (
                  <span 
                    key={area}
                    className="px-2.5 py-1 rounded-md bg-white border border-[#263B2A]/10 text-[11px] font-medium text-[#263B2A]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Content & Objectives Column (7 cols on lg) */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              
              {/* Pillar Number & Tagline */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#F97827] bg-[#F97827]/10 px-2.5 py-0.5 rounded-md">
                  Pillar 0{activePillar.pillarNumber}
                </span>
                <span className="text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans">
                  Strategic Domain
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#263B2A] tracking-tight leading-tight">
                {activePillar.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base font-medium text-[#F97827] font-sans">
                {activePillar.tagline}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-[#292929]/80 font-sans leading-relaxed">
                {activePillar.description}
              </p>

              {/* Objectives List */}
              <div className="mt-6 w-full space-y-2.5 pt-6 border-t border-[#263B2A]/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans mb-1">
                  Key Strategic Objectives
                </div>
                {activePillar.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#267F08] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#292929]/80 font-sans">
                      {obj}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenPillarModal(activePillar)}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white text-xs font-semibold tracking-wide font-sans shadow-xs hover:shadow transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#263B2A]"
                >
                  <span>Explore Full Program Brief</span>
                  <ArrowRight className="w-4 h-4 text-[#F97827] transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onSupportPillar(activePillar.id)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F97827]/10 hover:bg-[#F97827]/20 text-[#E46618] text-xs font-semibold transition-colors font-sans cursor-pointer"
                >
                  <span>Support {activePillar.shortName}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
