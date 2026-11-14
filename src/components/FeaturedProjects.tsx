import React, { useState } from 'react';
import { FEATURED_PROJECTS, FeaturedProject } from '../utils/projects.ts';
import { ArrowLeft, ArrowRight, MapPin, CheckCircle2, Sparkles, FolderGit2 } from 'lucide-react';

interface FeaturedProjectsProps {
  onLearnMore: (project: FeaturedProject) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onLearnMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = FEATURED_PROJECTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? FEATURED_PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === FEATURED_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="projects" 
      className="relative py-28 lg:py-36 bg-[#FAF9F6] border-t border-[#263B2A]/10 overflow-hidden"
      aria-label="Featured Projects - Field Interventions"
    >
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Subtle Previous/Next Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#267F08] tracking-widest uppercase font-sans mb-3">
              <span className="w-2 h-2 rounded-full bg-[#267F08]" aria-hidden="true"></span>
              <span>Field Spotlight</span>
              <span className="text-[#263B2A]/30">/</span>
              <span className="text-[#292929]/60 font-medium">Featured Projects</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#263B2A] tracking-tight leading-[1.15]">
              Transforming Communities One Project at a Time.
            </h2>
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xs font-mono font-semibold text-[#263B2A] tabular-nums">
              0{currentIndex + 1} <span className="text-[#263B2A]/30">/</span> 0{FEATURED_PROJECTS.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-[#263B2A]/20 bg-white hover:bg-[#F3F5F1] text-[#263B2A] flex items-center justify-center transition-colors shadow-2xs hover:border-[#267F08] focus-visible:outline-2 focus-visible:outline-[#F97827] cursor-pointer"
                aria-label="Previous featured project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-[#263B2A]/20 bg-white hover:bg-[#F3F5F1] text-[#263B2A] flex items-center justify-center transition-colors shadow-2xs hover:border-[#267F08] focus-visible:outline-2 focus-visible:outline-[#F97827] cursor-pointer"
                aria-label="Next featured project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Project Showcase: 1 Major Project at a Time */}
        <div className="bg-white rounded-3xl border border-[#263B2A]/15 overflow-hidden shadow-xl p-6 sm:p-10 lg:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Photography (6 cols) */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#263B2A] shadow-md group">
              <img
                src={currentProject.image}
                alt={currentProject.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                key={currentProject.image}
              />

              {/* Stat Highlight Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#FAF9F6]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#263B2A]/10 shadow-sm">
                <span className="font-heading font-extrabold text-lg text-[#F97827] block leading-none font-mono">
                  {currentProject.fieldStat.value}
                </span>
                <span className="text-[10px] text-[#263B2A] font-semibold font-sans uppercase tracking-wider block mt-1">
                  {currentProject.fieldStat.label}
                </span>
              </div>
            </div>

            {/* Narrative & Action (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Program Affiliation & Location */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-[#267F08] font-sans mb-3">
                <span className="bg-[#267F08]/10 text-[#267F08] px-2.5 py-0.5 rounded-md font-mono text-[11px] font-bold">
                  Pillar 0{currentProject.programNumber}
                </span>
                <span>{currentProject.program}</span>
                <span className="text-[#263B2A]/30">·</span>
                <span className="flex items-center gap-1 text-[#292929]/70 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-[#F97827]" />
                  {currentProject.location}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] tracking-tight leading-snug">
                {currentProject.name}
              </h3>

              {/* Short Description */}
              <p className="mt-4 text-sm sm:text-base text-[#292929]/80 font-sans leading-relaxed">
                {currentProject.shortDescription}
              </p>

              {/* Milestones Preview */}
              <div className="mt-6 w-full space-y-2 pt-5 border-t border-[#263B2A]/10">
                {currentProject.milestones.slice(0, 2).map((m, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#292929]/75 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#267F08] shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Action Button */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onLearnMore(currentProject)}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#263B2A] hover:bg-[#1A281D] text-white text-xs font-semibold tracking-wide font-sans shadow-xs hover:shadow transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#263B2A]"
                >
                  <span>Learn More About This Project</span>
                  <ArrowRight className="w-4 h-4 text-[#F97827] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
