import React from 'react';
import { 
  FOUNDING_STORY, 
  CORE_VALUES, 
  TIMELINE_MILESTONES, 
  THEORY_OF_CHANGE, 
  LEADERSHIP_TEAM 
} from '../utils/aboutPage.ts';
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  HeartHandshake, 
  Scale, 
  Compass, 
  FileCheck2, 
  ArrowUpRight 
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onExplorePrograms: () => void;
  onDonateClick: () => void;
  onVolunteerClick: () => void;
  onPartnerClick: () => void;
  onOpenPolicy: (type: 'privacy' | 'safeguarding' | 'conduct') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onExplorePrograms,
  onDonateClick,
  onVolunteerClick,
  onPartnerClick,
  onOpenPolicy,
}) => {
  return (
    <div className="bg-[#FAF9F6] text-[#292929] pt-24 sm:pt-28 pb-20 overflow-hidden font-sans">
      
      {/* CHAPTER 1: Hero & Editorial Breadcrumb */}
      <section className="relative pt-8 pb-20 sm:pb-24 lg:pb-28 border-b border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#292929]/60 font-sans mb-8">
            <button 
              type="button" 
              onClick={onNavigateHome}
              className="hover:text-[#267F08] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#263B2A]/30" />
            <span className="text-[#263B2A] font-semibold">About Us</span>
          </nav>

          {/* Section Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#267F08]/10 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-6">
            <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
            <span>Institutional Profile · Nana Advocacy and Empowerment Foundation</span>
          </div>

          {/* Main Display Headline */}
          <div className="max-w-4xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#263B2A] tracking-tight leading-[1.12]">
              Rooted in Community. Dedicated to Justice, Dignity, and Lasting Opportunity.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#292929]/80 font-sans leading-relaxed max-w-3xl">
              Nana Advocacy and Empowerment Foundation (NAEF) is a non-governmental, non-profit, and volunteer-driven organization advancing social justice, gender equality, education, civic participation, environmental sustainability, and community empowerment.
            </p>
          </div>

          {/* Cinematic Hero Photography */}
          <div className="mt-12 sm:mt-16 rounded-3xl overflow-hidden shadow-xl border border-[#263B2A]/15 bg-[#263B2A] relative group">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src="/src/assets/images/naef_about_hero_1794323159180.jpg"
                alt="Nigerian community development leaders, women organizers, and elders gathered in a peaceful strategic circle"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>

            {/* Photo Caption Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:right-auto max-w-xl bg-[#FAF9F6]/95 backdrop-blur-md p-4 rounded-2xl border border-[#263B2A]/10 shadow-lg text-xs font-sans">
              <p className="font-semibold text-[#263B2A] leading-snug">
                Participatory Grassroots Convergence
              </p>
              <p className="text-[#292929]/75 text-[11px] mt-0.5 leading-relaxed">
                Customary community elders, women organizers, and youth delegates in North-Central Nigeria convening to co-design local peace and education priorities.
              </p>
            </div>
          </div>

          {/* Institutional Fast Facts Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#263B2A]/10">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#267F08] block mb-1">
                Legal Status
              </span>
              <p className="text-sm sm:text-base font-bold text-[#263B2A] font-heading">
                Incorporated Trustees NGO
              </p>
              <span className="text-xs text-[#292929]/60 font-sans">CAC Verification Placeholder</span>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#267F08] block mb-1">
                Strategic Scope
              </span>
              <p className="text-sm sm:text-base font-bold text-[#263B2A] font-heading">
                5 Impact Pillars
              </p>
              <span className="text-xs text-[#292929]/60 font-sans">Peace, Gender, Civic, Education, Climate</span>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#267F08] block mb-1">
                Community Footprint
              </span>
              <p className="text-sm sm:text-base font-bold text-[#263B2A] font-heading">
                85+ Settlements
              </p>
              <span className="text-xs text-[#292929]/60 font-sans">Across Northern & Central Nigeria</span>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#267F08] block mb-1">
                Operational Ethos
              </span>
              <p className="text-sm sm:text-base font-bold text-[#263B2A] font-heading">
                Community-Led
              </p>
              <span className="text-xs text-[#292929]/60 font-sans">Zero external prescription</span>
            </div>
          </div>

        </div>
      </section>

      {/* CHAPTER 2: The Founding Narrative & Milestones */}
      <section className="py-24 sm:py-28 lg:py-32 border-b border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Founding Prose (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
                <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
                <span>{FOUNDING_STORY.kicker}</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight leading-tight">
                {FOUNDING_STORY.headline}
              </h2>

              <div className="mt-6 p-5 rounded-2xl bg-[#F3F5F1] border-l-2 border-[#267F08] text-sm sm:text-base text-[#263B2A] font-medium leading-relaxed font-sans">
                {FOUNDING_STORY.summary}
              </div>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#292929]/80 font-sans leading-relaxed">
                {FOUNDING_STORY.prose.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExplorePrograms}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#263B2A] text-white hover:bg-[#1A281D] text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <span>Explore the 5 Pillars</span>
                  <ArrowRight className="w-4 h-4 text-[#F97827]" />
                </button>
                <button
                  type="button"
                  onClick={onDonateClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F97827] text-white hover:bg-[#E46618] text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <span>Support Our Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Organizational Milestones (5 cols) */}
            <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-3xl border border-[#263B2A]/10 shadow-xs">
              <div className="flex items-center justify-between pb-5 border-b border-[#263B2A]/10 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#263B2A]">
                    Key Evolution Milestones
                  </h3>
                  <p className="text-xs text-[#292929]/60 font-sans">
                    Chronological journey of grassroots growth
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#267F08]/15 text-[#267F08] flex items-center justify-center font-mono text-xs font-bold">
                  ★
                </div>
              </div>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#267F08]/20">
                {TIMELINE_MILESTONES.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Bullet marker */}
                    <span 
                      className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#267F08] group-hover:bg-[#F97827] group-hover:border-[#F97827] transition-colors" 
                      aria-hidden="true"
                    />
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#F97827] bg-[#F97827]/10 px-2 py-0.5 rounded-md">
                        {item.year}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-[#263B2A]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-xs text-[#292929]/75 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CHAPTER 3: Vision, Mission & 4 Core Values */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#F3F5F1] border-b border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Dual Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 lg:mb-20">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#267F08]/15 text-[#267F08] flex items-center justify-center mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#267F08] tracking-widest uppercase font-sans">
                Our Vision
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] mt-2 mb-4 leading-snug">
                Empowered, Informed, and Resilient Communities.
              </h3>
              <p className="text-sm text-[#292929]/80 font-sans leading-relaxed">
                Empowered, informed, and resilient communities where every individual lives with dignity, equal opportunity, and access to sustainable development.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#263B2A] text-white border border-[#263B2A] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F97827] text-white flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#F97827] tracking-widest uppercase font-sans">
                Our Mission
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-2 mb-4 leading-snug">
                Advocacy, Capacity Building &amp; Strategic Partnerships.
              </h3>
              <p className="text-sm text-white/80 font-sans leading-relaxed">
                To promote social justice, gender equality, inclusive governance, education, environmental sustainability, and community empowerment through advocacy, capacity building, and strategic partnerships.
              </p>
            </div>
          </div>

          {/* 7 Foundational Values Header */}
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Ethical Foundation · 7 Core Values</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight">
              Values That Govern Our Every Action.
            </h2>
          </div>

          {/* 7 Core Values Grid (Balanced 4 + 3 rows on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={val.id}
                className={`p-7 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs hover:border-[#267F08] transition-colors ${
                  idx < 4
                    ? 'md:col-span-3 lg:col-span-3'
                    : idx === 6
                    ? 'md:col-span-6 lg:col-span-4'
                    : 'md:col-span-3 lg:col-span-4'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-[#F97827]">
                    {val.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#267F08]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#263B2A] leading-snug">
                  {val.title}
                </h3>
                <p className="mt-2 text-xs font-semibold text-[#267F08] font-sans">
                  "{val.statement}"
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHAPTER 4: Theory of Change (Systemic Transformation Roadmap) */}
      <section className="py-24 sm:py-28 lg:py-32 border-b border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Theory of Change</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#263B2A] tracking-tight">
              How We Create Sustainable Impact.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#292929]/75 font-sans leading-relaxed">
              Our 4-stage transformation model bridges customary community wisdom with modern participatory development, ensuring programs don't collapse when project funding finishes.
            </p>
          </div>

          {/* 4 Steps Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {THEORY_OF_CHANGE.map((step, idx) => (
              <div 
                key={step.stepNumber}
                className="relative p-7 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#263B2A] text-white flex items-center justify-center font-mono text-xs font-bold">
                      {step.stepNumber}
                    </span>
                    {idx < 3 && (
                      <span className="hidden lg:inline text-xs font-mono text-[#267F08]">→ Step 0{idx + 2}</span>
                    )}
                  </div>

                  <span className="text-[11px] font-semibold text-[#F97827] uppercase tracking-wider font-sans block mb-1">
                    {step.concept}
                  </span>

                  <h3 className="font-heading font-bold text-xl text-[#263B2A]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#263B2A]/10 text-[11px] text-[#267F08] font-semibold flex items-center gap-1 font-sans">
                  <span>Phase {step.stepNumber} Complete</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHAPTER 5: Governance & Institutional Leadership */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
                <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
                <span>Institutional Governance</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight">
                Leadership, Trustees & Accountability.
              </h2>
              <p className="mt-3 text-sm text-[#292929]/75 font-sans leading-relaxed">
                NAEF operates a hybrid governance structure spanning six tiers: the Board of Trustees (highest authority), Advisory Council, Executive Management Team, Program Directors, State Coordinators, and community Volunteers—enforcing strict financial transparency, expenditure approval hierarchies, and anti-corruption standards.
              </p>
            </div>

            {/* Policy Accords Actions */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onOpenPolicy('safeguarding')}
                className="px-4 py-2 rounded-full bg-white border border-[#263B2A]/15 text-xs font-semibold text-[#263B2A] hover:border-[#267F08] transition-colors cursor-pointer"
              >
                Safeguarding Accord
              </button>
              <button
                type="button"
                onClick={() => onOpenPolicy('conduct')}
                className="px-4 py-2 rounded-full bg-white border border-[#263B2A]/15 text-xs font-semibold text-[#263B2A] hover:border-[#267F08] transition-colors cursor-pointer"
              >
                Code of Conduct
              </button>
            </div>
          </div>

          {/* 6 Governance Structure Tier Cards (3x2 grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP_TEAM.map((member) => (
              <div 
                key={member.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs flex flex-col justify-between hover:border-[#267F08]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#263B2A]/10 flex items-center justify-center text-[#263B2A]">
                      <Users className="w-6 h-6 text-[#267F08]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#F97827] bg-[#F97827]/10 px-2.5 py-1 rounded-full">
                      Tier {member.tierNumber}
                    </span>
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97827] font-sans block mb-1">
                    {member.role}
                  </span>

                  <h3 className="font-heading font-bold text-lg text-[#263B2A] leading-snug">
                    {member.tierTitle}
                  </h3>

                  <p className="text-xs font-semibold text-[#267F08] font-sans mt-0.5">
                    {member.name}
                  </p>

                  <p className="mt-3 text-xs text-[#292929]/75 font-sans leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#263B2A]/10 text-[11px] text-[#292929]/60 font-sans">
                  <span>Focus: {member.focusArea}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Institutional Stewardship Card */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#263B2A] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#F97827] uppercase tracking-wider font-sans block mb-2">
                Join Our Work
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Be a Catalyst for Community Empowerment.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Whether through institutional collaboration, strategic philanthropic giving, or community volunteerism, your partnership transforms lives across Nigeria.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onPartnerClick}
                className="px-6 py-3 rounded-full bg-white text-[#263B2A] hover:bg-[#FAF9F6] text-xs font-semibold transition-colors shadow-xs cursor-pointer"
              >
                Institutional Partnership
              </button>
              <button
                type="button"
                onClick={onDonateClick}
                className="px-6 py-3 rounded-full bg-[#F97827] text-white hover:bg-[#E46618] text-xs font-semibold transition-colors shadow-xs cursor-pointer"
              >
                Support with a Gift
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
