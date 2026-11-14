import React, { useState, useEffect, useRef } from 'react';
import { IMPACT_INDICATORS, formatImpactNumber, calculateAnimatedValue } from '../utils/impact.ts';
import { ArrowRight, BarChart3, ShieldCheck, Sparkles, Info } from 'lucide-react';

interface ImpactSectionProps {
  onExploreImpactStory: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onExploreImpactStory }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(IMPACT_INDICATORS.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    const duration = 1600; // 1.6s smooth easing

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setAnimatedValues(
        IMPACT_INDICATORS.map((indicator) =>
          calculateAnimatedValue(progress, indicator.targetValue)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-28 lg:py-36 bg-[#263B2A] text-white overflow-hidden border-t border-white/10"
      aria-label="Real Change Lasting Impact - NAEF Impact Metrics"
    >
      {/* Background Darkened Documentary Image with Atmospheric Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/naef_impact_bg_1794320845306.jpg"
          alt="NAEF Community members standing together at sunset"
          className="w-full h-full object-cover opacity-20 filter saturate-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#263B2A] via-[#263B2A]/90 to-[#263B2A]/95" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F97827] tracking-widest uppercase font-sans mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F97827]" aria-hidden="true"></span>
            <span>Measurable Outcomes</span>
            <span className="text-white/30">/</span>
            <span className="text-white/70 font-medium">Field Accountability</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
            Real Change. Lasting Impact.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/80 font-sans leading-relaxed">
            Sustainable progress is reflected in the lives strengthened, the disputes peacefully resolved, and the communities actively authoring their own future. Every figure below represents an ongoing relationship of trust.
          </p>
        </div>

        {/* 4 Impact Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {IMPACT_INDICATORS.map((indicator, index) => {
            const displayVal = hasAnimated ? animatedValues[index] : indicator.targetValue;

            return (
              <div
                key={indicator.id}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-300 group"
              >
                <div>
                  {/* Pillar Context Pill */}
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#F97827] font-semibold mb-3">
                    {indicator.pillarContext}
                  </div>

                  {/* Big Number Typography */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight tabular-nums">
                      {formatImpactNumber(displayVal)}
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F97827]">
                      {indicator.suffix}
                    </span>
                  </div>

                  {/* Indicator Label */}
                  <h3 className="mt-3 text-base sm:text-lg font-heading font-bold text-white group-hover:text-[#F97827] transition-colors">
                    {indicator.label}
                  </h3>

                  {/* Sublabel */}
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-wider font-sans mt-0.5">
                    {indicator.sublabel}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                    {indicator.description}
                  </p>
                </div>

                {/* Subtle indicator bottom line */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50 font-sans">
                  <span>Field Verified</span>
                  <span className="font-mono text-white/40">#0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Interaction & CMS Notice Bar */}
        <div className="mt-14 lg:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-white/70 max-w-xl font-sans">
            <Info className="w-4 h-4 text-[#F97827] shrink-0" />
            <p>
              <strong className="text-white">Continuous Field Audit:</strong> Figures reflect preliminary community impact audits, structured for automated CMS synchronization through NAEF's verified reporting portal.
            </p>
          </div>

          <button
            type="button"
            onClick={onExploreImpactStory}
            className="group shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#263B2A] hover:bg-[#FAF9F6] active:scale-[0.98] text-xs font-semibold tracking-wide font-sans shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <span>Explore Our Impact Story</span>
            <ArrowRight className="w-4 h-4 text-[#F97827] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
