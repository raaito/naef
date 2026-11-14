import React, { useState } from 'react';
import { NaefLogo } from './NaefLogo.tsx';
import { PROGRAM_PILLARS } from '../utils/navigation.ts';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUp, 
  CheckCircle2, 
  Send,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'safeguarding' | 'conduct') => void;
  onOpenAbout: () => void;
  onDonateClick: () => void;
  onVolunteerClick: () => void;
  onPartnerClick: () => void;
  onNavigate?: (page: 'home' | 'about' | 'programs' | 'impact' | 'news' | 'contact', anchor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPolicy,
  onOpenAbout,
  onDonateClick,
  onVolunteerClick,
  onPartnerClick,
  onNavigate,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative bg-[#263B2A] text-white border-t border-white/15 overflow-hidden" 
      aria-label="NAEF Site Footer"
    >
      {/* Subtle organic background accent */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#267F08]/15 to-transparent blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#F97827]/10 to-transparent blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-28">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Column 1: Organization Info & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <NaefLogo 
                variant="white" 
                onClick={() => {
                  if (onNavigate) onNavigate('home');
                }}
              />
              
              <p className="mt-6 text-sm text-white/80 font-sans leading-relaxed max-w-sm">
                Nana Advocacy and Empowerment Foundation (NAEF) is a non-governmental, non-profit, and volunteer-driven organization promoting social justice, gender equality, inclusive governance, education, environmental sustainability, and community empowerment.
              </p>

              <div className="mt-6 text-xs text-white/50 font-sans">
                <span>Non-Profit NGO · Advocacy Starts With You</span>
                <div className="mt-0.5">CAC / IT / Verification Placeholder</div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wider font-sans block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="NAEF on X / Twitter"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F97827] flex items-center justify-center transition-colors text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="NAEF on LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#267F08] flex items-center justify-center transition-colors text-white"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="NAEF on Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#267F08] flex items-center justify-center transition-colors text-white"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="NAEF on Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F97827] flex items-center justify-center transition-colors text-white"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="NAEF on YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F97827] flex items-center justify-center transition-colors text-white"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Program Pillars (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97827] font-sans mb-4">
              Our Five Program Pillars
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              {PROGRAM_PILLARS.map((pillar) => (
                <li key={pillar.id}>
                  <a 
                    href={`#pillar-${pillar.id}`}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('programs', pillar.id);
                      }
                    }}
                    className="text-white/80 hover:text-white transition-colors block py-0.5 leading-snug group cursor-pointer"
                  >
                    <span className="text-white/40 text-[11px] mr-1.5 font-mono">0{pillar.pillarNumber}</span>
                    <span className="group-hover:translate-x-0.5 inline-block transition-transform">{pillar.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97827] font-sans mt-8 mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={onDonateClick}
                  className="text-white/80 hover:text-[#F97827] transition-colors cursor-pointer text-left"
                >
                  Donate to NAEF
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onVolunteerClick}
                  className="text-white/80 hover:text-[#267F08] transition-colors cursor-pointer text-left"
                >
                  Volunteer Opportunities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onPartnerClick}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Strategic Partnerships
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#267F08] font-sans mb-4">
              Organization
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/80">
              <li>
                <button 
                  type="button" 
                  onClick={() => {
                    if (onNavigate) onNavigate('about');
                    else onOpenAbout();
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About NAEF
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigate) onNavigate('about');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Mission & Values
                </button>
              </li>
              <li>
                <a 
                  href="#impact" 
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('impact');
                    }
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Measurable Impact
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('home', 'projects');
                    }
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a 
                  href="#stories" 
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('home', 'stories');
                    }
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Stories of Change
                </a>
              </li>
              <li>
                <a 
                  href="#news" 
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('news');
                    }
                  }}
                  className="hover:text-white transition-colors block"
                >
                  Field Dispatches
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 font-sans mb-4">
              Institutional Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-white/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F97827] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Plot 14, Community Advocacy Way, Central Business District, Abuja, FCT, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#267F08] shrink-0" />
                <a href="mailto:info@naef-foundation.org" className="hover:text-white transition-colors">
                  info@naef-foundation.org
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/50 shrink-0" />
                <span>+234 (0) 901 NAEF NGO</span>
              </div>
              {onNavigate && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-semibold text-[#F97827] hover:text-white transition-colors cursor-pointer underline underline-offset-4"
                  >
                    Open Contact Desk &amp; Regional Bureaus →
                  </button>
                </div>
              )}
            </div>

            {/* Newsletter Stay Connected Card */}
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-semibold text-white block mb-1 font-sans">
                Stay Connected
              </span>
              <p className="text-[11px] text-white/70 font-sans leading-relaxed mb-3">
                Receive our quarterly field dispatches and community impact reports.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full text-xs bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#F97827] pr-8"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                      aria-label="Subscribe to NAEF newsletter"
                    >
                      <Send className="w-3.5 h-3.5 text-[#F97827]" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-xs text-[#267F08] font-sans bg-[#267F08]/20 px-3 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Thank you for staying connected.</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Legal & Meta Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/60 font-sans">
          
          {/* Copyright */}
          <div>
            © 2026 Nana Advocacy and Empowerment Foundation (NAEF). All rights reserved.
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onOpenPolicy('safeguarding')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Safeguarding Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onOpenPolicy('conduct')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Code of Conduct
            </button>
          </div>

          {/* Back to Top */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer group"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-[#F97827]" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
