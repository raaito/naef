import React, { useState, useEffect } from 'react';
import { NaefLogo } from './NaefLogo.tsx';
import { NAV_LINKS, PROGRAM_PILLARS } from '../utils/navigation.ts';
import { ChevronDown, Menu, X, Heart, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  currentPage?: 'home' | 'about' | 'programs' | 'impact' | 'news' | 'contact';
  onNavigate?: (page: 'home' | 'about' | 'programs' | 'impact' | 'news' | 'contact', anchor?: string) => void;
  onDonateClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  currentPage = 'home',
  onNavigate,
  onDonateClick 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs border-b border-[#263B2A]/10 py-3.5' 
          : 'bg-[#FAF9F6]/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Emblem */}
        <div className="shrink-0">
          <NaefLogo 
            variant="full" 
            onClick={() => {
              if (onNavigate) onNavigate('home');
            }} 
          />
        </div>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#292929]" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = 
              (currentPage === 'home' && link.id === 'home') || 
              (currentPage === 'about' && link.id === 'about') ||
              (currentPage === 'programs' && link.id === 'programs') ||
              (currentPage === 'impact' && link.id === 'impact') ||
              (currentPage === 'news' && link.id === 'news') ||
              (currentPage === 'contact' && link.id === 'contact');

            if (link.hasDropdown) {
              return (
                <div 
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => setProgramsDropdownOpen(true)}
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 py-1 transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827] rounded-sm cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#267F08] after:transition-transform after:origin-left ${
                      isActive 
                        ? 'text-[#267F08] font-bold after:scale-x-100' 
                        : 'text-[#292929] hover:text-[#267F08] after:scale-x-0 hover:after:scale-x-100'
                    }`}
                    aria-expanded={programsDropdownOpen}
                    aria-haspopup="true"
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('programs');
                      } else {
                        setProgramsDropdownOpen(!programsDropdownOpen);
                      }
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${programsDropdownOpen ? 'rotate-180 text-[#267F08]' : 'text-[#292929]/50'}`} />
                  </button>

                  {/* Mega Dropdown Panel for 5 Pillars */}
                  {programsDropdownOpen && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[380px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      role="menu"
                    >
                      <div className="bg-[#FAF9F6] border border-[#263B2A]/15 rounded-2xl shadow-xl p-3.5 divide-y divide-[#263B2A]/10">
                        <div className="px-3 py-2 text-[11px] font-semibold tracking-wider text-[#263B2A]/70 uppercase font-sans">
                          Our 5 Strategic Pillars
                        </div>
                        <div className="py-1">
                          {PROGRAM_PILLARS.map((pillar) => (
                            <a
                              key={pillar.id}
                              href={`#pillar-${pillar.id}`}
                              onClick={(e) => {
                                setProgramsDropdownOpen(false);
                                if (onNavigate) {
                                  e.preventDefault();
                                  onNavigate('programs', pillar.id);
                                }
                              }}
                              className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F3F5F1] transition-colors"
                              role="menuitem"
                            >
                              <div className="w-6 h-6 rounded-md bg-[#263B2A]/10 text-[#263B2A] group-hover/item:bg-[#267F08] group-hover/item:text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors">
                                {pillar.pillarNumber}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-heading font-semibold text-[#292929] group-hover/item:text-[#267F08] flex items-center justify-between transition-colors">
                                  <span>{pillar.title}</span>
                                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#267F08]" />
                                </div>
                                <p className="text-[11px] text-[#292929]/70 line-clamp-1 mt-0.5 font-normal">
                                  {pillar.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  if (link.id === 'about' && onNavigate) {
                    e.preventDefault();
                    onNavigate('about');
                  } else if (link.id === 'home' && onNavigate) {
                    e.preventDefault();
                    onNavigate('home');
                  } else if (link.id === 'programs' && onNavigate) {
                    e.preventDefault();
                    onNavigate('programs');
                  } else if (link.id === 'impact' && onNavigate) {
                    e.preventDefault();
                    onNavigate('impact');
                  } else if (link.id === 'news' && onNavigate) {
                    e.preventDefault();
                    onNavigate('news');
                  } else if (link.id === 'contact' && onNavigate) {
                    e.preventDefault();
                    onNavigate('contact');
                  } else if (currentPage !== 'home' && onNavigate) {
                    e.preventDefault();
                    onNavigate('home', link.href.replace('#', ''));
                  }
                }}
                className={`py-1 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#F97827] rounded-sm relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#267F08] after:transition-transform after:origin-left ${
                  isActive 
                    ? 'text-[#267F08] font-bold after:scale-x-100' 
                    : 'text-[#292929] hover:text-[#267F08] after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA Button (Donate) & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#donate"
            onClick={(e) => {
              if (onDonateClick) {
                e.preventDefault();
                onDonateClick();
              }
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#F97827] hover:bg-[#E46618] active:scale-[0.98] rounded-full shadow-xs hover:shadow transition-all duration-200 tracking-wide font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97827]"
            aria-label="Donate to support NAEF initiatives"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Donate</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#263B2A] hover:bg-[#F3F5F1] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-full bg-[#FAF9F6] border-b border-[#263B2A]/15 shadow-xl px-6 py-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300"
          id="mobile-navigation"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home');
                  }
                }}
                className={`text-base font-semibold py-1 transition-colors ${
                  currentPage === 'home' ? 'text-[#267F08]' : 'text-[#292929] hover:text-[#267F08]'
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('about');
                  }
                }}
                className={`text-base font-semibold py-1 transition-colors ${
                  currentPage === 'about' ? 'text-[#267F08]' : 'text-[#292929] hover:text-[#267F08]'
                }`}
              >
                About Us
              </a>

              {/* Accordion for Programs */}
              <div>
                <button
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  className="flex items-center justify-between w-full text-base font-semibold text-[#292929] hover:text-[#267F08] py-1"
                  aria-expanded={mobileProgramsOpen}
                >
                  <span>Our Programs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProgramsOpen ? 'rotate-180 text-[#267F08]' : ''}`} />
                </button>
                {mobileProgramsOpen && (
                  <div className="pl-3 mt-2 space-y-2 border-l-2 border-[#267F08]/20 py-1">
                    {PROGRAM_PILLARS.map((p) => (
                      <a
                        key={p.id}
                        href={`#pillar-${p.id}`}
                        onClick={(e) => {
                          setMobileMenuOpen(false);
                          if (onNavigate) {
                            e.preventDefault();
                            onNavigate('programs', p.id);
                          }
                        }}
                        className="block text-sm text-[#292929]/80 hover:text-[#267F08] py-1"
                      >
                        <span className="font-mono text-xs text-[#F97827] mr-1.5 font-bold">0{p.pillarNumber}</span>
                        {p.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#impact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('impact');
                  }
                }}
                className={`text-base font-semibold py-1 transition-colors ${
                  currentPage === 'impact' ? 'text-[#267F08]' : 'text-[#292929] hover:text-[#267F08]'
                }`}
              >
                Our Impact
              </a>
              <a
                href="#news"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('news');
                  }
                }}
                className={`text-base font-semibold py-1 transition-colors ${
                  currentPage === 'news' ? 'text-[#267F08]' : 'text-[#292929] hover:text-[#267F08]'
                }`}
              >
                News & Resources
              </a>
              <a
                href="#get-involved"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (currentPage !== 'home' && onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'get-involved');
                  }
                }}
                className="text-base font-semibold text-[#292929] hover:text-[#267F08] py-1"
              >
                Get Involved
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('contact');
                  }
                }}
                className={`text-base font-semibold py-1 transition-colors ${
                  currentPage === 'contact' ? 'text-[#267F08]' : 'text-[#292929] hover:text-[#267F08]'
                }`}
              >
                Contact
              </a>
            </div>

            {/* Mobile Action Row */}
            <div className="pt-4 border-t border-[#263B2A]/10 flex flex-col gap-3">
              <a
                href="#donate"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onDonateClick) onDonateClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#F97827] hover:bg-[#E46618] rounded-xl shadow-xs transition-colors"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Donate to NAEF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
