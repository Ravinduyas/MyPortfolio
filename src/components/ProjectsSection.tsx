import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers, Terminal, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  onOpenContact: () => void;
  highlightedProjectName?: string | null;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenContact,
  highlightedProjectName,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'systems' | 'web' | 'tools'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'systems', label: 'Business Systems' },
    { id: 'web', label: 'Client Websites' },
    { id: 'tools', label: 'Tools & Apps' },
  ] as const;

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (highlightedProjectName) {
      return (
        p.title.toLowerCase().includes(highlightedProjectName.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(highlightedProjectName.toLowerCase()))
      );
    }
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 border-b border-neutral-800/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
              Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Business Systems &amp; Client Websites
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Booking engines, POS software and websites for real businesses, plus open-source tools. Click any project for the full story.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/90 border border-neutral-800/80 rounded-xl">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setSelectedFilter(f.id);
                }}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedFilter === f.id
                    ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/60'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Alert if filtered from skills */}
        {highlightedProjectName && (
          <div className="mb-6 px-4 py-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/50 flex items-center justify-between text-xs text-cyan-300">
            <span>Filtered by related competency: &ldquo;{highlightedProjectName}&rdquo;</span>
            <button
              onClick={() => setSelectedFilter('all')}
              className="underline hover:text-white"
            >
              Reset view
            </button>
          </div>
        )}

        {/* Projects Bento / Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`group relative overflow-hidden rounded-2xl border border-neutral-800 bg-surface cursor-pointer transition-all duration-300 hover:border-neutral-600 hover:shadow-2xl hover:shadow-cyan-950/20 flex flex-col ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Visual Media Window */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Measured Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

                  {/* Kicker Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-neutral-400 backdrop-blur-md bg-black/60 px-2.5 py-1 rounded border border-neutral-800">
                      {project.clientOrContext}
                    </span>
                    <span className="text-cyan-400 backdrop-blur-md bg-black/60 px-2.5 py-1 rounded border border-neutral-800 tabular-nums">
                      {project.year}
                    </span>
                  </div>

                  {/* Primary Performance Metric Overlay in Corner */}
                  <div className="absolute bottom-3 left-4 text-xs font-mono text-cyan-300 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800/80 px-2.5 py-1 rounded">
                    {project.metrics[0].label}: <strong className="text-white">{project.metrics[0].value}</strong>
                  </div>
                </div>

                {/* Card Content & Hover Details Reveal */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-cyan-400 group-hover:border-neutral-700 transition-all shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Hover Details Panel - reveals on hover */}
                  <div className="mt-4 pt-4 border-t border-neutral-800/60 space-y-3">
                    {/* Technical problem highlight */}
                    <div className="text-xs text-neutral-300 bg-neutral-900/60 p-3 rounded-lg border border-neutral-800/60 transition-all group-hover:border-neutral-700/80">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Terminal className="w-3 h-3" />
                        <span>Core Engineering Feat</span>
                      </div>
                      <p className="line-clamp-2 text-neutral-300">
                        {project.solution}
                      </p>
                    </div>

                    {/* Technology Stack - Unboxed text with subtle separator dots */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-neutral-400 font-mono">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span key={tech} className="flex items-center gap-1.5">
                          {tIdx > 0 && <span aria-hidden="true" className="text-neutral-700">·</span>}
                          <span className="group-hover:text-neutral-200 transition-colors">{tech}</span>
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-neutral-600 font-sans">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Action Links Bar */}
                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="text-cyan-400 font-medium group-hover:underline flex items-center gap-1">
                        View Project Details
                        <span aria-hidden="true">&rarr;</span>
                      </span>

                      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-neutral-400 hover:text-white rounded-md bg-neutral-900 hover:bg-neutral-800 transition-colors"
                            title="GitHub Repository"
                            aria-label={`GitHub repository for ${project.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-neutral-400 hover:text-white rounded-md bg-neutral-900 hover:bg-neutral-800 transition-colors"
                            title="Live Demo"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Lightbox Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onOpenContact={onOpenContact}
        />
      </div>
    </section>
  );
};
