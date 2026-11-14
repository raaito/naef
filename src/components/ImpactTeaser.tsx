import React from 'react';
import { Sparkles, Eye, CheckCircle2, TrendingUp } from 'lucide-react';

export const ImpactTeaser: React.FC = () => {
  return (
    <section 
      id="impact" 
      className="py-24 lg:py-32 bg-[#263B2A] text-white border-t border-white/10 relative overflow-hidden"
      aria-label="Upcoming Section 5 - Impact Preview"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white/90 tracking-wider uppercase font-sans mb-4">
            <Eye className="w-3.5 h-3.5 text-[#F97827]" />
            <span>Next Stage · Section 5: Impact Metrics</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            "Real Change. Lasting Impact."
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/80 font-sans leading-relaxed">
            The upcoming deep green impact chapter will feature verified key indicators: people reached, communities supported, projects completed, and volunteers engaged with animated metrics.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 text-left max-w-xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F97827] font-sans mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Awaiting Your Review of Section 4</span>
            </div>
            <p className="text-sm text-white/85 font-sans">
              Section 4 (Program Explorer) is live above for your inspection. Once you share your feedback or approval, we will build the deep green impact chapter right here!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
