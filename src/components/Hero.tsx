import React from 'react';
import { ArrowDown, Play, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PROGRAM_PILLARS } from '../utils/navigation.ts';

interface HeroProps {
  onWatchStory: () => void;
  onExploreJourney?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchStory, onExploreJourney }) => {
  return (
    <section 
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#FAF9F6]"
      aria-label="Welcome to Nana Advocacy and Empowerment Foundation"
    >
      {/* Subtle organic brand ambient background arcs inspired by NAEF flame and leaf curves */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#267F08]/6 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 -ml-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#F97827]/5 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Introductory Organization Kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-5">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Nana Advocacy & Empowerment Foundation</span>
              <span className="text-[#263B2A]/30">·</span>
              <span className="text-[#292929]/60 font-medium">Advocacy Starts With You</span>
            </div>

            {/* Expressive Editorial Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#263B2A] tracking-tight leading-[1.12] text-balance">
              Building empowered communities.{' '}
              <span className="text-[#F97827] block sm:inline">Creating lasting change.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 lg:mt-7 text-lg sm:text-xl text-[#292929]/80 font-normal leading-relaxed max-w-2xl font-sans">
              A non-governmental, non-profit, and volunteer-driven organization promoting social justice, gender equality, inclusive governance, education, environmental sustainability, and community empowerment.
            </p>

            {/* CTAs: Primary & Secondary */}
            <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary CTA: Explore Our Journey */}
              <a
                href="#discover"
                onClick={(e) => {
                  if (onExploreJourney) {
                    e.preventDefault();
                    onExploreJourney();
                  }
                }}
                className="group inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold text-white bg-[#F97827] hover:bg-[#E46618] active:scale-[0.98] rounded-full shadow-sm hover:shadow-md transition-all duration-200 tracking-wide font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97827]"
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Watch Our Story */}
              <button
                type="button"
                onClick={onWatchStory}
                className="group inline-flex items-center gap-3 px-6 py-4 text-sm font-semibold text-[#263B2A] hover:text-[#267F08] bg-[#F3F5F1] hover:bg-[#EAEFE8] active:scale-[0.98] rounded-full transition-all duration-200 font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#267F08] cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#263B2A] text-white group-hover:bg-[#267F08] flex items-center justify-center transition-colors shadow-xs">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Core Pillars Anchor Ribbon */}
            <div className="mt-12 lg:mt-16 pt-8 border-t border-[#263B2A]/10 w-full">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#292929]/60 font-sans mb-3">
                Five Strategic Pillars of Impact
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#292929]/80 font-sans">
                {PROGRAM_PILLARS.map((p, idx) => (
                  <span key={p.id} className="inline-flex items-center gap-1.5 hover:text-[#267F08] transition-colors">
                    <span className="font-mono text-[#F97827] font-semibold">0{idx + 1}</span>
                    <span>{p.title.split('—')[0].replace('Initiative', '').replace('Platform', '').replace('Center', '').trim()}</span>
                    {idx < PROGRAM_PILLARS.length - 1 && (
                      <span className="text-[#263B2A]/20 ml-2" aria-hidden="true">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual Photographic Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Subtle decorative framing shadow / organic backdrop */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#267F08]/15 via-[#F97827]/10 to-transparent blur-xl -z-10" aria-hidden="true" />

            {/* Main Authentic Photographic Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-[#263B2A] aspect-[4/3] lg:aspect-[5/6] group">
              <img
                src="/assets/images/naef_hero_community_1794318993744.jpg"
                alt="NAEF community empowerment session with women and youth leaders in Nigeria"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                loading="eager"
              />

              {/* Editorial Caption Bar Overlaid at Base */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-heading font-semibold text-white/95">
                      Community Empowerment in Action
                    </p>
                    <p className="text-[11px] text-white/75 font-sans mt-0.5">
                      Grassroots dialogue, leadership mentorship & collective action
                    </p>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-[#F97827] border border-white/20">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating Verified Mission Badge */}
              <div className="absolute top-4 right-4 bg-[#FAF9F6]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#263B2A]/10 shadow-md text-xs font-semibold text-[#263B2A] flex items-center gap-1.5 font-sans">
                <span className="w-2 h-2 rounded-full bg-[#267F08]" />
                <span>Active Grassroots Work</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-12 sm:mt-16 text-[#292929]/50 hover:text-[#267F08] transition-colors">
        <a 
          href="#discover"
          className="inline-flex flex-col items-center gap-2 text-xs font-medium tracking-wide uppercase font-sans group focus-visible:outline-2 focus-visible:outline-[#F97827] rounded-md px-2 py-1"
          aria-label="Scroll down to discover NAEF"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-[#F97827] animate-bounce" />
        </a>
      </div>

    </section>
  );
};
