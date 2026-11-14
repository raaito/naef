import React, { useState } from 'react';
import { STORIES_OF_CHANGE, BeneficiaryStory } from '../utils/stories.ts';
import { Quote, ArrowRight, ShieldCheck, CheckCircle2, Heart } from 'lucide-react';

interface StoriesOfChangeProps {
  onReadFullStory: (story: BeneficiaryStory) => void;
}

export const StoriesOfChange: React.FC<StoriesOfChangeProps> = ({ onReadFullStory }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const currentStory = STORIES_OF_CHANGE[activeStoryIndex];

  return (
    <section 
      id="stories" 
      className="relative py-28 lg:py-36 bg-[#F3F5F1] border-t border-[#263B2A]/10 overflow-hidden"
      aria-label="Stories of Change - Real Human Transformation"
    >
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-3">
            <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
            <span>Human-Centered Voices</span>
            <span className="text-[#263B2A]/30">/</span>
            <span className="text-[#292929]/60 font-medium">Stories of Change</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#263B2A] tracking-tight leading-[1.15]">
            Voices from the Grassroots.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#292929]/80 font-sans leading-relaxed">
            Behind every initiative is a personal journey of courage, resilience, and transformation. Read approved accounts from community members actively authoring change.
          </p>
        </div>

        {/* Story Selector Tabs (Avoids generic auto-sliding carousels) */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {STORIES_OF_CHANGE.map((story, idx) => {
            const isActive = activeStoryIndex === idx;
            return (
              <button
                key={story.id}
                onClick={() => setActiveStoryIndex(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F97827] flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#263B2A] text-white shadow-xs'
                    : 'bg-white/80 hover:bg-white text-[#292929] border border-[#263B2A]/10'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#F97827]' : 'bg-[#267F08]'}`} />
                <span>Story 0{idx + 1}: {story.name}</span>
                <span className={`text-[11px] font-normal ${isActive ? 'text-white/70' : 'text-[#292929]/60'}`}>
                  ({story.program.split('&')[0].trim()})
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Story Composition Card */}
        <div className="bg-[#FAF9F6] rounded-3xl border border-[#263B2A]/15 overflow-hidden shadow-xl p-6 sm:p-10 lg:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Portrait Photography (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[4/5] bg-[#263B2A] shadow-md group">
                <img
                  src={currentStory.portraitImage}
                  alt={currentStory.portraitAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  key={currentStory.portraitImage}
                />

                {/* Verified Consent Badge */}
                <div className="absolute top-4 left-4 bg-[#FAF9F6]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#263B2A]/10 shadow-xs flex items-center gap-1.5 text-[11px] font-semibold text-[#263B2A] font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#267F08]" />
                  <span>Approved Beneficiary Consent</span>
                </div>

                {/* Overlaid Location Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <p className="text-xs font-semibold text-white/95 font-sans">
                    {currentStory.name} · {currentStory.location}
                  </p>
                  <p className="text-[11px] text-white/75 font-sans">
                    {currentStory.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative, Quote & Read Action (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="text-xs font-mono font-semibold text-[#F97827] uppercase tracking-wider mb-2">
                Pillar 0{currentStory.programNumber} · {currentStory.program}
              </div>

              {/* Story Headline */}
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] tracking-tight leading-snug">
                "{currentStory.headline}"
              </h3>

              {/* Approved Quotation */}
              <div className="mt-5 p-5 rounded-2xl bg-[#F3F5F1] border border-[#263B2A]/10 relative w-full">
                <Quote className="w-5 h-5 text-[#267F08]/40 mb-2" />
                <p className="text-sm sm:text-base font-serif italic text-[#263B2A]/90 leading-relaxed">
                  "{currentStory.approvedQuote}"
                </p>
              </div>

              {/* Tangible Outcome Bar */}
              <div className="mt-5 flex items-center gap-2.5 text-xs sm:text-sm text-[#263B2A] font-medium font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#267F08] shrink-0" />
                <span><strong>Outcome:</strong> {currentStory.outcome}</span>
              </div>

              {/* Action */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => onReadFullStory(currentStory)}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white text-xs font-semibold tracking-wide font-sans shadow-xs hover:shadow transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#263B2A]"
                >
                  <span>Read Full Story & Outcomes</span>
                  <ArrowRight className="w-4 h-4 text-[#F97827] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
