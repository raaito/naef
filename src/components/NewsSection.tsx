import React from 'react';
import { RECENT_ARTICLES, NewsArticle } from '../utils/news.ts';
import { ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';

interface NewsSectionProps {
  onReadArticle: (article: NewsArticle) => void;
  onViewAllNews?: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onReadArticle, onViewAllNews }) => {
  return (
    <section 
      id="news" 
      className="relative py-28 lg:py-36 bg-[#FAF9F6] border-t border-[#263B2A]/10 overflow-hidden"
      aria-label="News and Updates - NAEF Field Dispatches"
    >
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Field Dispatches</span>
              <span className="text-[#263B2A]/30">/</span>
              <span className="text-[#292929]/60 font-medium">News & Resources</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#263B2A] tracking-tight leading-[1.15]">
              Latest News & Perspectives.
            </h2>
          </div>

          {/* View All News Action */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={onViewAllNews}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#267F08] hover:text-[#1E6706] transition-colors font-sans cursor-pointer"
            >
              <span>View All News & Publications</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3 Editorial Article Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {RECENT_ARTICLES.map((article) => (
            <article 
              key={article.id}
              className="flex flex-col justify-between group bg-white rounded-3xl border border-[#263B2A]/10 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image-led preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#263B2A]">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-[#FAF9F6]/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#263B2A] font-sans border border-[#263B2A]/10 shadow-xs">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Date & Read time */}
                  <div className="flex items-center gap-2 text-[11px] text-[#292929]/60 font-sans mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#F97827]" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#263B2A] group-hover:text-[#267F08] transition-colors leading-snug line-clamp-2">
                    {article.headline}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-xs sm:text-sm text-[#292929]/75 font-sans leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => onReadArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97827] hover:text-[#E46618] font-sans transition-colors cursor-pointer group-hover:underline underline-offset-4"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
