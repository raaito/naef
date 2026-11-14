import React from 'react';
import { Eye, CheckCircle2, Newspaper } from 'lucide-react';

export const NewsTeaser: React.FC = () => {
  return (
    <section 
      id="news" 
      className="py-24 lg:py-32 bg-[#FAF9F6] border-t border-[#263B2A]/10 relative overflow-hidden"
      aria-label="Upcoming Section 8 - News & Resources Preview"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#263B2A]/10 text-xs font-semibold text-[#263B2A] tracking-wider uppercase font-sans mb-4">
            <Eye className="w-3.5 h-3.5 text-[#267F08]" />
            <span>Next Stage · Sections 8, 9 & 10: News, Closing CTA & Footer</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight leading-tight">
            "News, Closing Invitation & Deep Green Footer."
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#292929]/75 font-sans leading-relaxed">
            The final chapter will feature restrained editorial news cards, the "Be Part of the Change" closing invitation (Donate, Volunteer, Partner), and the comprehensive organizational footer.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-white/70 border border-[#263B2A]/10 shadow-xs text-left max-w-xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-[#267F08] font-sans mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Awaiting Your Review of Sections 6 & 7</span>
            </div>
            <p className="text-sm text-[#292929]/80 font-sans">
              Sections 6 & 7 (Featured Projects and Stories of Change) are live above for your inspection. Once you share your review, we will complete the final chapter!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
