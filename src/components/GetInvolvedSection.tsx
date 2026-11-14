import React from 'react';
import { Heart, Users2, Handshake, ArrowRight, Sparkles } from 'lucide-react';

interface GetInvolvedProps {
  onDonateClick: () => void;
  onVolunteerClick: () => void;
  onPartnerClick: () => void;
}

export const GetInvolvedSection: React.FC<GetInvolvedProps> = ({
  onDonateClick,
  onVolunteerClick,
  onPartnerClick,
}) => {
  return (
    <section 
      id="get-involved" 
      className="relative py-28 lg:py-36 bg-[#263B2A] text-white overflow-hidden border-t border-white/10"
      aria-label="Get Involved - Be Part of the Change"
    >
      {/* Wide Photographic Composition */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/naef_hero_community_1794318993744.jpg"
          alt="NAEF community members and volunteers in circle of solidarity"
          className="w-full h-full object-cover opacity-25 filter saturate-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#263B2A] via-[#263B2A]/90 to-[#263B2A]/85" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Editorial Invitation Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#F97827] tracking-wider uppercase font-sans mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F97827]" aria-hidden="true"></span>
            <span>Join Our Mission</span>
          </div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Be Part of the Change.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white/85 font-sans leading-relaxed max-w-2xl mx-auto">
            Together, we can build more inclusive, empowered and sustainable communities. Choose how you would like to stand with us today.
          </p>
        </div>

        {/* Three Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Opportunity 1: Donate */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/15 hover:border-[#F97827] transition-all duration-300 group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F97827] text-white flex items-center justify-center mb-6 shadow-sm">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-[#F97827] transition-colors">
                Donate
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                Directly fund scholarships, girls’ leadership incubators, peace dialogues, and grassroots reforestation with transparent financial stewardship.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={onDonateClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#F97827] hover:bg-[#E46618] active:scale-[0.98] text-white text-xs font-semibold shadow-xs hover:shadow transition-all font-sans cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Make a Gift</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Opportunity 2: Volunteer */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/15 hover:border-[#267F08] transition-all duration-300 group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#267F08] text-white flex items-center justify-center mb-6 shadow-sm">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-[#F97827] transition-colors">
                Become a Volunteer
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                Lend your skills as a literacy tutor, youth peace mentor, tree-planting mobilizer, or field documentation specialist in your community.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={onVolunteerClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white text-[#263B2A] hover:bg-[#FAF9F6] active:scale-[0.98] text-xs font-semibold shadow-xs hover:shadow transition-all font-sans cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Join Volunteer Network</span>
                <ArrowRight className="w-4 h-4 text-[#F97827]" />
              </button>
            </div>
          </div>

          {/* Opportunity 3: Partner */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/15 hover:border-white/35 transition-all duration-300 group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-6 border border-white/20">
                <Handshake className="w-6 h-6 text-[#F97827]" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-[#F97827] transition-colors">
                Partner With Us
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                Collaborate with NAEF on institutional research, corporate social responsibility initiatives, grant-backed development programs, or policy advocacy.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={onPartnerClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white text-xs font-semibold border border-white/20 hover:border-white/40 transition-all font-sans cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Explore Partnership</span>
                <ArrowRight className="w-4 h-4 text-[#F97827]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
