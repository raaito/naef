import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { NewsArticle } from '../utils/news.ts';

interface ArticleModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF9F6] text-[#292929] rounded-3xl shadow-2xl overflow-y-auto border border-[#263B2A]/15 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#292929]/60 hover:text-[#292929] rounded-full hover:bg-[#F3F5F1] transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#267F08] font-sans font-semibold uppercase tracking-wider mb-2">
          <span>{article.category}</span>
          <span className="text-[#263B2A]/30">·</span>
          <span className="flex items-center gap-1 text-[#292929]/70 font-normal">
            <Calendar className="w-3.5 h-3.5 text-[#F97827]" />
            {article.date}
          </span>
          <span className="text-[#263B2A]/30">·</span>
          <span className="flex items-center gap-1 text-[#292929]/70 font-normal">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Headline */}
        <h3 id="article-modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] leading-tight">
          {article.headline}
        </h3>

        {/* Author / Source */}
        <div className="flex items-center gap-2 mt-2 text-xs text-[#292929]/60 font-sans">
          <User className="w-3.5 h-3.5 text-[#267F08]" />
          <span>By {article.author}</span>
        </div>

        {/* Image */}
        <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9] shadow-md bg-[#263B2A]">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Excerpt Lead */}
        <div className="mt-6 p-4 rounded-xl bg-[#F3F5F1] border-l-2 border-[#267F08] text-sm text-[#263B2A] font-medium leading-relaxed font-sans">
          {article.excerpt}
        </div>

        {/* Full Body Prose */}
        <div className="mt-6 space-y-4 text-sm sm:text-base text-[#292929]/80 leading-relaxed font-sans">
          <p>{article.fullBody}</p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[#263B2A]/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#263B2A] text-white text-xs font-semibold hover:bg-[#1A281D] transition-colors font-sans"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to News</span>
          </button>
        </div>
      </div>
    </div>
  );
};
