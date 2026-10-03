import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d10] border border-neutral-800 rounded-2xl shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Media Banner */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-neutral-950 border-b border-neutral-800/80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-[#0d0d10]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-black/60 hover:bg-black/90 backdrop-blur-sm rounded-full border border-neutral-700 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Banner Overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="text-xs text-cyan-400 font-mono flex items-center gap-2 mb-1">
              <span>{project.clientOrContext}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{{ systems: 'Business System', web: 'Client Website', tools: 'Tool / App', all: '' }[project.category]}</span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white font-display">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Subtitle / Tagline */}
          <p className="text-base text-neutral-300 leading-relaxed font-medium">
            {project.tagline}
          </p>

          {/* Quantitative Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 font-mono">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center sm:text-left">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">{metric.label}</div>
                <div className="text-lg sm:text-xl font-bold text-cyan-400 tabular-nums mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* System Problem vs Engineered Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/30">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
                <Cpu className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/30">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Detailed Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              Overview
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Technologies Used (Unboxed Discipline) */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              Core Tech Stack &amp; Libraries
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-300 pt-1 font-mono">
              {project.technologies.map((tech, idx) => (
                <span key={tech} className="flex items-center gap-2">
                  {idx > 0 && <span aria-hidden="true" className="text-neutral-700">·</span>}
                  <span className="text-cyan-300">{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & Footer */}
          <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Site</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <span>Need Something Similar?</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
