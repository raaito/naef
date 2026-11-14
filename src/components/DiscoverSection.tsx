import React from 'react';
import { ArrowRight, MapPin, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';
import { CORE_COMMITMENTS, REGIONAL_SCOPE } from '../utils/discover.ts';

interface DiscoverSectionProps {
  onDiscoverMore: () => void;
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onDiscoverMore }) => {
  return (
    <section 
      id="about" 
      className="relative py-28 lg:py-36 bg-[#FAF9F6] border-t border-[#263B2A]/10 overflow-hidden"
      aria-label="Discover Nana Advocacy and Empowerment Foundation"
    >
      {/* Subtle organic ambient backdrop glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-48 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#267F08]/5 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 -mr-40 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#F97827]/5 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column A: Asymmetric Editorial Visual & Geographic Context (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Subtle organic contour accent */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#267F08]/10 via-[#F97827]/10 to-transparent blur-lg -z-10" aria-hidden="true" />

              {/* Documentary Photography Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#263B2A]/15 bg-[#263B2A] aspect-[4/3] group">
                <img
                  src="/src/assets/images/naef_discover_community_1794319715730.jpg"
                  alt="NAEF civic engagement workshop with youth and women in community center"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />

                {/* Scrim and Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                  <p className="text-xs font-heading font-semibold text-white/95">
                    Civic Education & Community Dialogue
                  </p>
                  <p className="text-[11px] text-white/75 font-sans mt-0.5">
                    Empowering citizens to articulate priorities and lead communal transformation
                  </p>
                </div>
              </div>

              {/* Geographic Context Card: Nigeria & Regional Scope */}
              <div className="mt-5 p-4 rounded-2xl bg-[#F3F5F1] border border-[#263B2A]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#263B2A] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4 text-[#F97827]" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-[#263B2A]">
                      {REGIONAL_SCOPE.country} · {REGIONAL_SCOPE.region}
                    </div>
                    <div className="text-[11px] text-[#292929]/70 font-mono">
                      Coord: {REGIONAL_SCOPE.coordinates}
                    </div>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#267F08] block">
                    Operating Footprint
                  </span>
                  <span className="text-xs text-[#292929]/75 font-sans">
                    Grassroots Communities
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Column B: Editorial Narrative & Organizational Identity (7 cols on lg) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            
            {/* Small Introductory Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-4">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Discover NAEF</span>
              <span className="text-[#263B2A]/30">/</span>
              <span className="text-[#292929]/60 font-medium">Our Purpose</span>
            </div>

            {/* Strong Heading as specified */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#263B2A] tracking-tight leading-[1.18] text-balance">
              "Change begins when people have the opportunity to thrive."
            </h2>

            {/* Short Organizational Introduction */}
            <p className="mt-6 lg:mt-7 text-base sm:text-lg text-[#292929]/80 font-normal leading-relaxed font-sans max-w-2xl">
              Nana Advocacy and Empowerment Foundation (NAEF) is a non-governmental, non-profit, and volunteer-driven organization committed to advancing social justice, gender equality, education, civic participation, environmental sustainability, and community empowerment through grassroots engagement, capacity building, and strategic partnerships.
            </p>

            {/* Three Institutional Commitments (No messy nested cards) */}
            <div className="mt-8 space-y-4 w-full max-w-2xl">
              {CORE_COMMITMENTS.map((item, idx) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-4 pb-4 border-b border-[#263B2A]/10 last:border-b-0"
                >
                  <span className="font-mono text-xs font-bold text-[#F97827] mt-1 shrink-0">
                    0{idx + 1}
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-heading font-bold text-[#263B2A]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#292929]/75 leading-relaxed font-sans">
                      {item.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Discover More Action */}
            <div className="mt-8 lg:mt-10 flex items-center gap-6">
              <button
                type="button"
                onClick={onDiscoverMore}
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold text-white bg-[#263B2A] hover:bg-[#1A281D] active:scale-[0.98] rounded-full shadow-xs hover:shadow transition-all duration-200 tracking-wide font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263B2A] cursor-pointer"
              >
                <span>Discover More About NAEF</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#F97827]" />
              </button>

              <a
                href="#programs"
                className="text-xs sm:text-sm font-semibold text-[#267F08] hover:text-[#1E6706] hover:underline underline-offset-4 transition-colors font-sans"
              >
                View 5 Program Pillars →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
