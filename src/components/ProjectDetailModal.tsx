import React, { useEffect } from 'react';
import { X, CheckCircle2, MapPin, Tag, ArrowRight, Heart } from 'lucide-react';
import { FeaturedProject } from '../utils/projects.ts';

interface ProjectDetailModalProps {
  project: FeaturedProject | null;
  isOpen: boolean;
  onClose: () => void;
  onSupportProject: (project: FeaturedProject) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onSupportProject,
}) => {
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

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF9F6] text-[#292929] rounded-3xl shadow-2xl overflow-y-auto border border-[#263B2A]/15 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#292929]/60 hover:text-[#292929] rounded-full hover:bg-[#F3F5F1] transition-colors focus-visible:outline-2 focus-visible:outline-[#F97827]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#267F08] font-sans mb-2">
          <span>{project.program}</span>
          <span className="text-[#263B2A]/30">·</span>
          <span className="flex items-center gap-1 text-[#292929]/70">
            <MapPin className="w-3.5 h-3.5 text-[#F97827]" />
            {project.location}
          </span>
        </div>

        <h3 id="project-modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-[#263B2A] leading-tight">
          {project.name}
        </h3>

        <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9] shadow-md bg-[#263B2A]">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans">
            Project Overview & Community Context
          </h4>
          <p className="text-sm sm:text-base text-[#292929]/80 leading-relaxed font-sans">
            {project.fullNarrative}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-[#263B2A]/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#263B2A]/70 font-sans mb-3">
            Key Field Milestones
          </h4>
          <div className="space-y-2.5">
            {project.milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#292929]/80 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#267F08] shrink-0 mt-0.5" />
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#263B2A]/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onSupportProject(project);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F97827] hover:bg-[#E46618] text-white text-xs font-semibold shadow-xs hover:shadow transition-all font-sans"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Support This Field Initiative</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-[#263B2A] hover:bg-[#F3F5F1] rounded-full transition-colors font-sans"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
