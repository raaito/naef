import React, { useState } from 'react';
import { 
  PILLARS_DEEP_DIVE, 
  CROSS_PILLAR_SYNERGIES, 
  DELIVERY_PRINCIPLES,
  PillarDeepDive
} from '../utils/programsPage.ts';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Heart, 
  Handshake, 
  Quote, 
  ArrowUpRight 
} from 'lucide-react';

interface ProgramsPageProps {
  onNavigateHome: () => void;
  onDonateClick: () => void;
  onVolunteerClick: () => void;
  onPartnerClick: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onNavigateHome,
  onDonateClick,
  onVolunteerClick,
  onPartnerClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const scrollToPillar = (id: string) => {
    setActiveFilter(id);
    if (id === 'all') {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } else {
      const el = document.getElementById(`pillar-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const filteredPillars = activeFilter === 'all' 
    ? PILLARS_DEEP_DIVE 
    : PILLARS_DEEP_DIVE.filter((p) => p.id === activeFilter);

  return (
    <div className="bg-[#FAF9F6] text-[#292929] pt-24 sm:pt-28 pb-20 overflow-hidden font-sans">
      
      {/* CHAPTER 1: Hero & Strategic Framework */}
      <section className="relative pt-8 pb-16 sm:pb-20 lg:pb-24 border-b border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#292929]/60 font-sans mb-8">
            <button 
              type="button" 
              onClick={onNavigateHome}
              className="hover:text-[#267F08] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#263B2A]/30" />
            <span className="text-[#263B2A] font-semibold">Our Programs & Pillars</span>
          </nav>

          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#267F08]/10 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-6">
            <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
            <span>Strategic Architecture · 5 Interconnected Impact Pillars</span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#263B2A] tracking-tight leading-[1.12]">
              Five Interconnected Pillars of Grassroots Transformation.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#292929]/80 font-sans leading-relaxed max-w-3xl">
              NAEF does not treat community challenges as isolated symptoms. Poverty, displacement, conflict, and environmental degradation are structurally intertwined. Our five program pillars operate as a mutually reinforcing ecosystem designed for lasting local ownership.
            </p>
          </div>

          {/* Quick Pillar Jump Navigation Bar */}
          <div className="mt-12 pt-8 border-t border-[#263B2A]/10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans block mb-4">
              Explore By Strategic Pillar
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => scrollToPillar('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer font-sans ${
                  activeFilter === 'all'
                    ? 'bg-[#263B2A] text-white shadow-xs'
                    : 'bg-white text-[#292929] border border-[#263B2A]/15 hover:border-[#267F08]'
                }`}
              >
                All 5 Pillars
              </button>

              {PILLARS_DEEP_DIVE.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => scrollToPillar(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer font-sans flex items-center gap-1.5 ${
                    activeFilter === p.id
                      ? 'bg-[#267F08] text-white shadow-xs'
                      : 'bg-white text-[#292929] border border-[#263B2A]/15 hover:border-[#267F08]'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-70">{p.number}</span>
                  <span>{p.title}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CHAPTER 2: The 5 Comprehensive Pillar Showcases */}
      <section className="py-20 sm:py-28 lg:py-32 space-y-24 sm:space-y-32">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 space-y-28 sm:space-y-36">
          
          {filteredPillars.map((pillar, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <article
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                className="scroll-mt-28 pt-8 border-t border-[#263B2A]/10 first:border-t-0 first:pt-0"
              >
                {/* Pillar Header Bar */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10 sm:mb-12">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-[#263B2A] text-white flex items-center justify-center font-mono font-bold text-sm">
                      {pillar.number}
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97827] font-sans block">
                        Strategic Pillar {pillar.number}
                      </span>
                      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#263B2A] tracking-tight">
                        {pillar.title}
                      </h2>
                    </div>
                  </div>

                  <span className="text-xs sm:text-sm font-semibold text-[#267F08] font-sans">
                    {pillar.tagline}
                  </span>
                </div>

                {/* 2-Column Editorial Showcase */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Column 1: Image & Quote (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-[#263B2A]/15 bg-[#263B2A] aspect-[4/3] relative group">
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-[#FAF9F6]/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-[#263B2A] font-sans border border-[#263B2A]/10 shadow-xs">
                        Pillar {pillar.number} in Field
                      </div>
                    </div>

                    {/* Beneficiary Quote Box */}
                    <div className="mt-6 p-6 rounded-2xl bg-white border border-[#263B2A]/10 shadow-xs">
                      <div className="flex items-start gap-3">
                        <Quote className="w-5 h-5 text-[#F97827] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs sm:text-sm text-[#263B2A] italic font-sans leading-relaxed">
                            "{pillar.quote.quoteText}"
                          </p>
                          <div className="mt-3 pt-3 border-t border-[#263B2A]/10 text-xs font-sans">
                            <span className="font-bold text-[#263B2A] block">{pillar.quote.speaker}</span>
                            <span className="text-[#292929]/60 text-[11px]">{pillar.quote.context}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Lead Narrative, Interventions & Outcomes (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : ''}`}>
                    <p className="text-base sm:text-lg text-[#263B2A] font-medium leading-relaxed font-sans mb-8">
                      {pillar.leadParagraph}
                    </p>

                    {/* Strategic Focus Bullet Points */}
                    <div className="p-5 rounded-2xl bg-[#F3F5F1] mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#267F08] font-sans mb-3">
                        Core Focus Areas
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#292929]/85 font-sans">
                        {pillar.strategicFocus.map((focus, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#267F08] mt-1.5 shrink-0" />
                            <span>{focus}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Interventions */}
                    <div className="space-y-4 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans">
                        Signature Field Interventions
                      </h4>

                      {pillar.interventions.map((intervention, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white border border-[#263B2A]/10 shadow-2xs">
                          <div className="flex items-baseline justify-between gap-2">
                            <h5 className="font-heading font-bold text-sm text-[#263B2A]">
                              {intervention.title}
                            </h5>
                            <span className="text-[10px] font-semibold text-[#F97827] uppercase tracking-wider font-sans bg-[#F97827]/10 px-2 py-0.5 rounded-md shrink-0">
                              Target Beneficiaries
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-[#292929]/75 font-sans leading-relaxed">
                            {intervention.description}
                          </p>
                          <span className="mt-2 block text-[11px] font-medium text-[#267F08] font-sans">
                            Focus: {intervention.communityBeneficiary}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tangible Verified Outcomes */}
                    <div className="mb-8 pt-4 border-t border-[#263B2A]/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans mb-3">
                        Verified Outcomes & Impact Targets
                      </h4>
                      <div className="space-y-2">
                        {pillar.keyOutcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#292929]/85 font-sans">
                            <CheckCircle2 className="w-4 h-4 text-[#267F08] shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#263B2A]/10">
                      <button
                        type="button"
                        onClick={onDonateClick}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F97827] text-white hover:bg-[#E46618] text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                        <span>Support {pillar.title}</span>
                      </button>
                      <button
                        type="button"
                        onClick={onPartnerClick}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#263B2A] text-white hover:bg-[#1A281D] text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                      >
                        <Handshake className="w-3.5 h-3.5" />
                        <span>Partner on This Pillar</span>
                      </button>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}

        </div>
      </section>

      {/* CHAPTER 3: Cross-Pillar Interconnection & Synergy Matrix */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#F3F5F1] border-y border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Intersectional Architecture</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight leading-tight">
              Why We Connect the Five Pillars.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#292929]/75 font-sans leading-relaxed">
              Real community challenges do not exist in academic silos. A breakdown in peace disrupts girl-child school attendance; a failing climate economy exacerbates ethnic resource competition; civic disengagement allows public services to decay. Here is how our interventions reinforce one another:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CROSS_PILLAR_SYNERGIES.map((synergy, i) => (
              <div 
                key={i} 
                className="p-7 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#F97827] bg-[#F97827]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {synergy.pillarPair}
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#263B2A] mt-4 mb-2">
                    {synergy.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed">
                    {synergy.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#263B2A]/10 text-xs font-semibold text-[#267F08] flex items-center gap-1">
                  <span>Compound Impact Multiplier</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHAPTER 4: Program Delivery Methodology (4 Steps) */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Field Methodology</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight">
              Our 4-Stage Community Delivery Protocol.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed">
              Every NAEF program follows an unbending standard of community consultation, respectful entry, and long-term capability transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_PRINCIPLES.map((principle) => (
              <div 
                key={principle.step}
                className="p-6 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-full bg-[#263B2A] text-white flex items-center justify-center font-mono text-xs font-bold mb-4">
                    {principle.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#263B2A] mb-2 leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-[#292929]/75 font-sans leading-relaxed">
                    {principle.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#263B2A]/10 text-[10px] font-bold text-[#267F08] uppercase tracking-widest">
                  Standard Operating Protocol
                </div>
              </div>
            ))}
          </div>

          {/* Closing Strategic Call to Action Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#263B2A] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#F97827] uppercase tracking-wider font-sans block mb-2">
                Partner With Us
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Co-Design Grassroots Solutions With NAEF.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Whether you are a philanthropic foundation, an institutional development partner, or a prospective volunteer, we invite you to join hands with us across our five strategic pillars.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onVolunteerClick}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors shadow-xs cursor-pointer"
              >
                Volunteer on a Pillar
              </button>
              <button
                type="button"
                onClick={onPartnerClick}
                className="px-6 py-3 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
              >
                Strategic Partnership
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
