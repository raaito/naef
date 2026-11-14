import React, { useState } from 'react';
import { 
  HEADLINE_METRICS, 
  STATE_FOOTPRINTS, 
  MEAL_TIERS, 
  TRANSPARENCY_REPORTS,
  ImpactMetric,
  StateFootprint,
  TransparencyReport,
  getTotalCommunitiesCount
} from '../utils/impactPage.ts';
import { 
  ChevronRight, 
  CheckCircle2, 
  FileText, 
  Download, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Sparkles, 
  Heart, 
  Handshake, 
  ExternalLink,
  Filter,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface ImpactPageProps {
  onNavigateHome: () => void;
  onExplorePrograms: () => void;
  onDonateClick: () => void;
  onPartnerClick: () => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({
  onNavigateHome,
  onExplorePrograms,
  onDonateClick,
  onPartnerClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStateIndex, setSelectedStateIndex] = useState<number>(0);
  const [downloadedReport, setDownloadedReport] = useState<string | null>(null);

  const filteredMetrics = selectedCategory === 'all'
    ? HEADLINE_METRICS
    : HEADLINE_METRICS.filter((m) => m.category === selectedCategory);

  const selectedState: StateFootprint = STATE_FOOTPRINTS[selectedStateIndex];
  const totalCommunities = getTotalCommunitiesCount();

  const handleDownload = (report: TransparencyReport) => {
    setDownloadedReport(report.title);
    setTimeout(() => {
      setDownloadedReport(null);
    }, 4000);
  };

  return (
    <div className="bg-[#FAF9F6] text-[#292929] pt-24 sm:pt-28 pb-20 overflow-hidden font-sans">
      
      {/* CHAPTER 1: Hero & Verification Charter */}
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
            <span className="text-[#263B2A] font-semibold">Our Impact & Field Audit</span>
          </nav>

          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#267F08]/10 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-6">
            <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
            <span>Radical Transparency & Verified Grassroots Evidence</span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#263B2A] tracking-tight leading-[1.12]">
              Measurable Transformation. Uncompromising Accountability.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#292929]/80 font-sans leading-relaxed max-w-3xl">
              At NAEF, credibility is not an afterthought—it is our primary operating asset. We reject inflated non-profit claims. Every beneficiary recorded, tree nurtured, mediation concluded, and classroom equipped is cataloged through customary verification, real-time field monitoring, and third-party audit.
            </p>
          </div>

          {/* Verification Protocol Badges */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#263B2A]/10 max-w-4xl">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#263B2A]/10 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-[#267F08] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#263B2A] font-sans block">Primary Field Logs</span>
                <span className="text-[11px] text-[#292929]/70 font-sans">Verified through customary leader signatures</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#263B2A]/10 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-[#F97827] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#263B2A] font-sans block">Data-Driven MEL Tracking</span>
                <span className="text-[11px] text-[#292929]/70 font-sans">Continuous evaluation &amp; learning integration</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#263B2A]/10 shadow-2xs">
              <FileText className="w-5 h-5 text-[#263B2A] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#263B2A] font-sans block">Public Open Data</span>
                <span className="text-[11px] text-[#292929]/70 font-sans">Annual audited financials available for open review</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CHAPTER 2: Quantitative Field Indicators & Verified Metrics */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
                <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
                <span>Verified Impact Indicators</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight">
                Our Cumulative Field Outcomes.
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#263B2A]/60 uppercase tracking-wider font-sans mr-1">
                Filter:
              </span>
              {[
                { id: 'all', label: 'All Indicators' },
                { id: 'people', label: 'People & Circles' },
                { id: 'peace', label: 'Peace Accords' },
                { id: 'education', label: 'Education' },
                { id: 'climate', label: 'Climate & Land' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setSelectedCategory(filter.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer font-sans ${
                    selectedCategory === filter.id
                      ? 'bg-[#263B2A] text-white shadow-xs'
                      : 'bg-white text-[#292929] border border-[#263B2A]/15 hover:border-[#267F08]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMetrics.map((metric) => (
              <div
                key={metric.id}
                className="p-8 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs hover:border-[#267F08]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-baseline gap-1 text-[#263B2A]">
                    <span className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight">
                      {metric.metricNumber}
                    </span>
                    <span className="font-heading font-bold text-3xl text-[#F97827]">
                      {metric.metricSuffix}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#263B2A] mt-2 mb-3">
                    {metric.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed mb-6">
                    {metric.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#263B2A]/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#267F08] block mb-1 font-mono">
                    Audit Verification Source
                  </span>
                  <p className="text-[11px] text-[#292929]/70 font-sans">
                    {metric.verificationSource}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHAPTER 3: State-by-State Impact Registry & Geographic Footprint */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#F3F5F1] border-y border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Geographic Footprint</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight leading-tight">
              Active Presence Across {totalCommunities}+ Nigerian Communities.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#292929]/75 font-sans leading-relaxed">
              NAEF focuses its grassroots resources where the intersection of vulnerability, conflict risk, and institutional neglect is most acute. Select a focal state below to explore local LGA deployments and verified milestones.
            </p>
          </div>

          {/* State Tabs & Detail Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: State Selection List (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              {STATE_FOOTPRINTS.map((footprint, idx) => {
                const isSelected = selectedStateIndex === idx;
                return (
                  <button
                    key={footprint.state}
                    type="button"
                    onClick={() => setSelectedStateIndex(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#263B2A] text-white border-[#263B2A] shadow-md'
                        : 'bg-white text-[#292929] border-[#263B2A]/10 hover:border-[#267F08]'
                    }`}
                  >
                    <div>
                      <span className={`text-[11px] font-mono uppercase tracking-wider block ${
                        isSelected ? 'text-[#F97827]' : 'text-[#267F08]'
                      }`}>
                        {footprint.zone}
                      </span>
                      <h4 className="font-heading font-bold text-base mt-0.5">
                        {footprint.state}
                      </h4>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold block">
                        {footprint.communitiesCount} Wards
                      </span>
                      <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                        isSelected ? 'text-[#F97827] translate-x-1' : 'text-[#263B2A]/30'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Selected State Deep Dive Panel (8 cols) */}
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white border border-[#263B2A]/15 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#263B2A]/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F97827] font-sans">
                    {selectedState.zone} Operations
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A]">
                    {selectedState.state} Field Registry
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#267F08]/10 text-xs font-semibold text-[#267F08] font-sans">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedState.communitiesCount} Active Grassroots Settlements</span>
                </div>
              </div>

              {/* Highlight Milestone */}
              <div className="my-6 p-5 rounded-2xl bg-[#FAF9F6] border border-[#263B2A]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#267F08] font-sans block mb-1">
                  Key Field Milestone
                </span>
                <p className="text-sm sm:text-base text-[#263B2A] font-medium font-sans leading-relaxed">
                  "{selectedState.highlightMilestone}"
                </p>
              </div>

              {/* Active Pillars in this State */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans block mb-3">
                  Deployed Program Pillars
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedState.activePillars.map((pillar) => (
                    <span 
                      key={pillar}
                      className="px-3 py-1.5 rounded-xl bg-[#F3F5F1] text-xs font-semibold text-[#263B2A] border border-[#263B2A]/10"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>

              {/* Focal LGA Clusters */}
              <div className="mb-6 pt-4 border-t border-[#263B2A]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans block mb-3">
                  Focal Local Government Areas (LGAs)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-sans text-[#292929]/80">
                  {selectedState.focalLGAs.map((lga) => (
                    <div key={lga} className="p-2.5 rounded-xl bg-white border border-[#263B2A]/10 text-center font-medium">
                      {lga} LGA
                    </div>
                  ))}
                </div>
              </div>

              {/* Field Coordinator Attribution */}
              <div className="pt-4 border-t border-[#263B2A]/10 flex items-center justify-between text-xs text-[#292929]/70 font-sans">
                <span>Field Leadership: <strong className="text-[#263B2A]">{selectedState.leadCoordinator}</strong></span>
                <button
                  type="button"
                  onClick={onExplorePrograms}
                  className="text-[#267F08] hover:text-[#1F6406] font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View Pillar Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CHAPTER 4: The 4-Stage MEAL Protocol */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Verification Methodology</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight">
              Our 4-Stage MEL &amp; Field Accountability Protocol.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed">
              Every NAEF project follows our Monitoring, Evaluation &amp; Learning (MEL) lifecycle—combining data-driven program tracking, continuous evaluation, impact reporting, and expenditure approval accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEAL_TIERS.map((tier) => (
              <div 
                key={tier.phase}
                className="p-7 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#263B2A] text-white flex items-center justify-center font-mono text-xs font-bold">
                      {tier.phase.replace('Stage ', '')}
                    </span>
                    <span className="text-[10px] font-bold text-[#F97827] uppercase tracking-widest font-mono">
                      {tier.leadResponsible}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#263B2A] mb-2 leading-snug">
                    {tier.title}
                  </h3>

                  <p className="text-xs text-[#292929]/75 font-sans leading-relaxed mb-6">
                    {tier.methodology}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#263B2A]/10">
                  <span className="text-[10px] font-bold text-[#267F08] uppercase tracking-wider block mb-2 font-mono">
                    Audit Deliverables:
                  </span>
                  <ul className="space-y-1 text-[11px] text-[#292929]/80 font-sans">
                    {tier.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#267F08]">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHAPTER 5: Transparency Repository & Downloadable Reports */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#F3F5F1] border-y border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Open Records & Accountability</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight">
              Transparency & Public Audit Repository.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed">
              In line with our Finance &amp; Accountability Principles, NAEF enforces strict financial transparency, proper documentation of all funds, expenditure approval hierarchies, and zero tolerance for corruption across all public reports.
            </p>
          </div>

          {/* Download Notification Toast */}
          {downloadedReport && (
            <div 
              role="alert" 
              className="mb-8 p-4 rounded-2xl bg-[#263B2A] text-white flex items-center justify-between gap-4 animate-in fade-in duration-200"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#267F08]" />
                <span className="text-xs sm:text-sm font-sans">
                  Verification Package downloaded: <strong>"{downloadedReport}"</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setDownloadedReport(null)}
                className="text-xs text-white/70 hover:text-white underline cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Reports Table/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRANSPARENCY_REPORTS.map((report) => (
              <div
                key={report.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#267F08]/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#263B2A]/5 text-[#263B2A] flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-[#267F08]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F97827] bg-[#F97827]/10 px-2.5 py-0.5 rounded-md">
                      {report.category} · {report.year}
                    </span>
                    <h3 className="font-heading font-bold text-base text-[#263B2A] mt-2 mb-1">
                      {report.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-[#292929]/60 font-sans">
                      <span>{report.fileFormat} ({report.fileSize})</span>
                      <span>·</span>
                      <span className="text-[#267F08] font-medium">{report.auditorStatus}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDownload(report)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white text-xs font-semibold shrink-0 transition-colors shadow-xs cursor-pointer"
                  aria-label={`Download ${report.title}`}
                >
                  <Download className="w-3.5 h-3.5 text-[#F97827]" />
                  <span>Download Report</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHAPTER 6: Strategic Co-Investment Call to Action */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#263B2A] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#F97827] tracking-wider uppercase font-sans mb-4">
                <span>Accountable Partnership</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Co-Invest in Verified Community Transformation.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                We provide our institutional partners with disaggregated MEL dashboards, GPS-tagged intervention registries, and joint review sessions. Partner with an organization that values your trust as deeply as our community mission.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={onPartnerClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Handshake className="w-4 h-4" />
                <span>Institutional Partnership</span>
              </button>
              <button
                type="button"
                onClick={onDonateClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Support Our Field Work</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
