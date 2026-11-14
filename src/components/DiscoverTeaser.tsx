import React from 'react';
import { Sparkles, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

export const DiscoverTeaser: React.FC = () => {
  return (
    <section 
      id="discover" 
      className="py-24 lg:py-32 bg-[#F3F5F1] border-t border-[#263B2A]/10 relative overflow-hidden"
      aria-label="Upcoming Section 3 - Discover NAEF Preview"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#263B2A]/10 text-xs font-semibold text-[#263B2A] tracking-wider uppercase font-sans mb-4">
            <Eye className="w-3.5 h-3.5 text-[#267F08]" />
            <span>Next Stage · Section 3: Discover NAEF</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight leading-tight">
            "Change begins when people have the opportunity to thrive."
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#292929]/75 font-sans leading-relaxed">
            This upcoming section introduces NAEF through an asymmetrical editorial layout with authentic community photography, geographic context, and organizational story without overwhelming the visitor.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-white/70 border border-[#263B2A]/10 shadow-xs text-left max-w-xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-[#267F08] font-sans mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Current Status</span>
            </div>
            <p className="text-sm text-[#292929]/80 font-sans">
              Sections 1 & 2 (Navigation & Cinematic Hero) are ready for your inspection above. Once you review and share your feedback or approval, Section 3 will be seamlessly developed here!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
