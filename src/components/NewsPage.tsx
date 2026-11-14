import React, { useState } from 'react';
import { 
  ALL_HUB_ARTICLES, 
  RESOURCE_TOOLKITS, 
  HubArticle, 
  ResourceToolkit, 
  filterArticles, 
  filterResources, 
  getFeaturedArticle 
} from '../utils/newsPage.ts';
import { 
  ChevronRight, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Download, 
  FileText, 
  CheckCircle2, 
  X, 
  Share2, 
  Mail, 
  ExternalLink,
  Sparkles,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

interface NewsPageProps {
  onNavigateHome: () => void;
  onExplorePrograms: () => void;
  onDonateClick: () => void;
  onPartnerClick: () => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({
  onNavigateHome,
  onExplorePrograms,
  onDonateClick,
  onPartnerClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedResourcePillar, setSelectedResourcePillar] = useState<string>('all');
  const [activeArticleForReader, setActiveArticleForReader] = useState<HubArticle | null>(null);
  const [downloadedToolkit, setDownloadedToolkit] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const featuredArticle = getFeaturedArticle(ALL_HUB_ARTICLES);
  const filteredArticlesList = filterArticles(ALL_HUB_ARTICLES, selectedCategory, searchQuery);
  const filteredResourcesList = filterResources(RESOURCE_TOOLKITS, selectedResourcePillar, searchQuery);

  const handleDownloadToolkit = (toolkit: ResourceToolkit) => {
    setDownloadedToolkit(toolkit.title);
    setTimeout(() => {
      setDownloadedToolkit(null);
    }, 4000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => {
        setNewsletterSubscribed(false);
      }, 5000);
    }
  };

  return (
    <div className="bg-[#FAF9F6] text-[#292929] pt-24 sm:pt-28 pb-20 overflow-hidden font-sans">
      
      {/* CHAPTER 1: Hero & Searchroom Bar */}
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
            <span className="text-[#263B2A] font-semibold">News & Resources</span>
          </nav>

          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#267F08]/10 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-6">
            <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
            <span>NAEF Knowledge & Field Dispatches</span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#263B2A] tracking-tight leading-[1.12]">
              Grassroots Realities. Policy Insights. Field Dispatches.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#292929]/80 font-sans leading-relaxed max-w-3xl">
              Documenting community transformation, policy analysis, and practical field resources from across our five strategic pillars in Nigeria. Read verified updates directly from our community facilitators.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mt-12 pt-8 border-t border-[#263B2A]/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#263B2A]/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, policy briefs, or toolkits..."
                className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-[#263B2A]/15 text-xs text-[#263B2A] placeholder:text-[#292929]/50 focus:outline-none focus:border-[#267F08] focus:ring-1 focus:ring-[#267F08] transition-all font-sans"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#292929]/40 hover:text-[#292929] p-1"
                  aria-label="Clear search input"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Content' },
                { id: 'Field Dispatches', label: 'Field Dispatches' },
                { id: 'Policy Briefs', label: 'Policy Briefs' },
                { id: 'Research & Reports', label: 'Research & Reports' },
                { id: 'Press Releases', label: 'Press Releases' },
              ].map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer font-sans ${
                    selectedCategory === category.id
                      ? 'bg-[#263B2A] text-white shadow-xs'
                      : 'bg-white text-[#292929] border border-[#263B2A]/15 hover:border-[#267F08]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CHAPTER 2: Featured Lead Editorial Dispatch */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="py-16 sm:py-20 lg:py-24 border-b border-[#263B2A]/10">
          <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97827] font-sans">
                Featured Editorial Dispatch
              </span>
              <span className="text-xs text-[#292929]/60 font-sans">
                Editorial Priority
              </span>
            </div>

            <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#263B2A]/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Image Col (5 cols) */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-[#263B2A] relative shadow-md group">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 bg-[#FAF9F6]/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#263B2A] font-sans border border-[#263B2A]/10 shadow-xs">
                  {featuredArticle.pillar}
                </div>
              </div>

              {/* Text Col (7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="flex items-center gap-3 text-xs text-[#292929]/60 font-sans mb-3">
                  <span className="font-semibold text-[#267F08]">{featuredArticle.category}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredArticle.date}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#263B2A] tracking-tight leading-tight mb-4">
                  {featuredArticle.headline}
                </h2>

                <p className="text-sm sm:text-base text-[#292929]/80 font-sans leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#263B2A]/10 w-full justify-between">
                  <span className="text-xs text-[#292929]/70 font-sans">
                    By: <strong className="text-[#263B2A]">{featuredArticle.author}</strong>
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveArticleForReader(featuredArticle)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white text-xs font-semibold tracking-wide transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F97827]" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* CHAPTER 3: Multi-Category Article Archive Grid */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex items-center justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-2">
                <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
                <span>Publication Archive</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] tracking-tight">
                {selectedCategory === 'all' ? 'All Field Publications' : selectedCategory} ({filteredArticlesList.length})
              </h2>
            </div>

            {searchQuery && (
              <span className="text-xs text-[#292929]/70 font-sans">
                Filtering by query: <strong className="text-[#263B2A]">"{searchQuery}"</strong>
              </span>
            )}
          </div>

          {filteredArticlesList.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-[#263B2A]/10">
              <p className="text-base text-[#263B2A] font-semibold mb-2">No publications matched your search criteria.</p>
              <p className="text-xs text-[#292929]/70 mb-4">Try clearing your search query or selecting a different category filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2.5 rounded-full bg-[#267F08] text-white text-xs font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticlesList.map((article) => (
                <article
                  key={article.id}
                  className="p-6 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs hover:border-[#267F08]/40 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#263B2A] relative mb-5">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-[#FAF9F6]/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#263B2A] border border-[#263B2A]/10">
                        {article.category}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-2 text-[11px] text-[#292929]/60 font-sans mb-2">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#263B2A] group-hover:text-[#267F08] transition-colors leading-snug mb-3">
                      {article.headline}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-[#292929]/75 font-sans leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#263B2A]/10 flex items-center justify-between">
                    <span className="text-[11px] text-[#292929]/60 font-sans truncate max-w-[180px]">
                      {article.pillar}
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveArticleForReader(article)}
                      className="text-xs font-semibold text-[#F97827] hover:text-[#E46618] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Dispatch</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* CHAPTER 4: The Knowledge & Resource Library (Downloadable Toolkits) */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#F3F5F1] border-y border-[#263B2A]/10">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] uppercase tracking-wider font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Open Toolkits & Field Manuals</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#263B2A] tracking-tight">
              Community Toolkits & Practitioner Playbooks.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#292929]/75 font-sans leading-relaxed">
              We translate our grassroots methodologies into free, open-access manuals for traditional leaders, community associations, non-profits, and civil society organizers.
            </p>
          </div>

          {/* Download Notification Toast */}
          {downloadedToolkit && (
            <div 
              role="alert" 
              className="mb-8 p-4 rounded-2xl bg-[#263B2A] text-white flex items-center justify-between gap-4 animate-in fade-in duration-200"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#267F08]" />
                <span className="text-xs sm:text-sm font-sans">
                  Toolkit downloaded: <strong>"{downloadedToolkit}"</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setDownloadedToolkit(null)}
                className="text-xs text-white/70 hover:text-white underline cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Toolkits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResourcesList.map((toolkit) => (
              <div
                key={toolkit.id}
                className="p-7 rounded-3xl bg-white border border-[#263B2A]/10 shadow-xs flex flex-col justify-between hover:border-[#267F08]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F97827] bg-[#F97827]/10 px-2.5 py-0.5 rounded-md">
                      {toolkit.category}
                    </span>
                    <span className="text-[11px] text-[#292929]/50 font-sans">
                      {toolkit.pages} pages · {toolkit.fileSize}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#263B2A] leading-snug mb-2">
                    {toolkit.title}
                  </h3>

                  <p className="text-xs text-[#292929]/75 font-sans leading-relaxed mb-4">
                    {toolkit.summary}
                  </p>

                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#263B2A]/10 text-[11px] font-sans text-[#263B2A] mb-4">
                    <strong>Target Audience:</strong> {toolkit.targetAudience}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#263B2A]/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#267F08] font-sans">
                    {toolkit.pillar}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleDownloadToolkit(toolkit)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white text-xs font-semibold transition-colors cursor-pointer"
                    aria-label={`Download ${toolkit.title}`}
                  >
                    <Download className="w-3.5 h-3.5 text-[#F97827]" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHAPTER 5: Media & Press Relations Desk */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F6]">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#263B2A]/15 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97827] font-sans block mb-2">
                Press & Media Inquiries
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] tracking-tight">
                Connect With Our Communications Bureau.
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed max-w-2xl">
                Under NAEF’s Communication &amp; Media Policy, all official statements require formal authorization and only approved personnel manage media inquiries to uphold branding consistency and accurate, respectful public messaging.
              </p>
              
              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-[#263B2A] font-sans">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#267F08]" />
                  <span>media@naef-foundation.org</span>
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F97827]" />
                  <span>Official Spokesperson Accreditation</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={onPartnerClick}
                className="w-full px-6 py-3 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer text-center"
              >
                Request Media Interview
              </button>
              <button
                type="button"
                onClick={onExplorePrograms}
                className="w-full px-6 py-3 rounded-full bg-white hover:bg-[#F3F5F1] text-[#263B2A] border border-[#263B2A]/15 text-xs font-semibold transition-colors cursor-pointer text-center"
              >
                Browse Focal Programs
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CHAPTER 6: Field Dispatches Quarterly Newsletter */}
      <section className="py-20 sm:py-24 bg-[#263B2A] text-white">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97827] font-sans block mb-3">
              Quarterly Field Intelligence
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Subscribe to NAEF Field Dispatches.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
              Receive quarterly grassroots policy analyses, community case studies, and photographic updates directly from our regional bureaus. No spam, only verified insights.
            </p>

            {newsletterSubscribed ? (
              <div 
                role="alert" 
                className="mt-8 p-4 rounded-2xl bg-[#267F08]/30 border border-[#267F08] text-white flex items-center justify-center gap-2 text-xs font-sans"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F97827]" />
                <span>Thank you for subscribing to NAEF Field Dispatches. Check your inbox for confirmation.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your official email address..."
                  className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-xs focus:outline-none focus:border-[#F97827] font-sans"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold shrink-0 transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {activeArticleForReader && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-xs transition-opacity"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-reader-title"
          onClick={() => setActiveArticleForReader(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF9F6] text-[#292929] rounded-3xl shadow-2xl overflow-y-auto border border-[#263B2A]/15 p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveArticleForReader(null)}
              className="absolute top-6 right-6 p-2 text-[#292929]/60 hover:text-[#292929] rounded-full hover:bg-[#F3F5F1] transition-colors cursor-pointer"
              aria-label="Close article reader"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Metadata */}
            <div className="flex items-center gap-3 text-xs text-[#292929]/60 font-sans mb-3">
              <span className="font-bold text-[#F97827] uppercase tracking-wider">{activeArticleForReader.category}</span>
              <span>·</span>
              <span>{activeArticleForReader.date}</span>
              <span>·</span>
              <span>{activeArticleForReader.readTime}</span>
            </div>

            <h2 id="article-reader-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] leading-tight mb-4">
              {activeArticleForReader.headline}
            </h2>

            <div className="text-xs text-[#267F08] font-semibold font-sans mb-6">
              Pillar Focus: {activeArticleForReader.pillar} · By {activeArticleForReader.author}
            </div>

            {/* Photo */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-md bg-[#263B2A] mb-8">
              <img
                src={activeArticleForReader.image}
                alt={activeArticleForReader.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Body */}
            <div className="space-y-4 text-sm sm:text-base text-[#292929]/85 font-sans leading-relaxed">
              {activeArticleForReader.fullBody.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-[#263B2A]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#292929]/60 font-sans">
                NAEF Communications Bureau Verified Dispatch
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onDonateClick}
                  className="px-5 py-2.5 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold cursor-pointer"
                >
                  Support This Work
                </button>
                <button
                  type="button"
                  onClick={() => setActiveArticleForReader(null)}
                  className="px-5 py-2.5 rounded-full bg-[#F3F5F1] text-[#263B2A] hover:bg-[#263B2A]/10 text-xs font-semibold cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
