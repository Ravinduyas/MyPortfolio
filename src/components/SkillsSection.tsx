import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';
import { Sparkles, Code2, Server, Cloud, Database } from 'lucide-react';

interface SkillsSectionProps {
  onSelectProjectHighlight?: (projectName: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectProjectHighlight }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Domains', icon: Sparkles, count: SKILLS_DATA.length },
    {
      id: 'frontend',
      label: 'Frontend & Mobile',
      icon: Code2,
      count: SKILLS_DATA.filter((s) => s.category === 'frontend').length,
    },
    {
      id: 'backend',
      label: 'Backend & Systems',
      icon: Server,
      count: SKILLS_DATA.filter((s) => s.category === 'backend').length,
    },
    {
      id: 'cloud',
      label: 'Deployment & SEO',
      icon: Cloud,
      count: SKILLS_DATA.filter((s) => s.category === 'cloud').length,
    },
    {
      id: 'database',
      label: 'Databases & Storage',
      icon: Database,
      count: SKILLS_DATA.filter((s) => s.category === 'database').length,
    },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  // Compute average mastery for filtered list
  const averageMastery = Math.round(
    filteredSkills.reduce((acc, curr) => acc + curr.level, 0) / filteredSkills.length
  );

  return (
    <section id="skills" className="py-24 border-b border-neutral-800/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-orange-400 font-mono mb-2">
              Engineering Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Skills &amp; Production Mastery
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Quantitative breakdown of full-stack proficiencies honed across 8+ years of production engineering, scale, and high-concurrency systems.
            </p>
          </div>

          {/* Quick Domain Summary Stats */}
          <div className="flex items-center gap-6 text-xs text-neutral-400 font-mono bg-neutral-900/80 border border-neutral-800 px-4 py-3 rounded-lg">
            <div>
              <span className="text-white font-semibold text-sm tabular-nums text-orange-400">{filteredSkills.length}</span>
              <span className="ml-1.5 text-neutral-400">Core Technologies</span>
            </div>
            <div className="w-px h-6 bg-neutral-800" aria-hidden="true" />
            <div>
              <span className="text-white font-semibold text-sm tabular-nums text-emerald-400">{averageMastery}%</span>
              <span className="ml-1.5 text-neutral-400">Avg. Production Depth</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs - Interactive segmented control */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-900/90 border border-neutral-800/80 rounded-xl mb-10 w-fit">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/60'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-400' : 'text-neutral-500'}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono tabular-nums px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-neutral-900 text-orange-400' : 'text-neutral-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid with Custom Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group p-5 rounded-xl border transition-all duration-200 bg-neutral-900/50 ${
                  isHovered
                    ? 'border-neutral-700 bg-neutral-900/90 shadow-lg shadow-black/40'
                    : 'border-neutral-800/80 hover:border-neutral-750'
                }`}
              >
                {/* Title & Level Header */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                      <span>{skill.experience} production</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize text-neutral-500">{skill.category}</span>
                    </div>
                  </div>

                  {/* Percentage Metric in Tabular Numerals */}
                  <div className="text-right">
                    <span className="text-base font-bold font-mono tabular-nums text-white group-hover:text-orange-400 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="my-3">
                  <div className="h-2 w-full bg-neutral-800/90 rounded-full overflow-hidden relative p-[1px]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-neutral-300 via-orange-400 to-orange-600 transition-all duration-700 ease-out group-hover:shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Practical Description Note */}
                <p className="text-xs text-neutral-400 leading-relaxed mt-2 line-clamp-2">
                  {skill.description}
                </p>

                {/* Highlight Projects - Clean Unboxed Text with Separators */}
                <div className="mt-3 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="text-neutral-500">Shipped in:</span>
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {skill.highlightProjects.map((proj, pIdx) => (
                      <span key={proj} className="flex items-center gap-1">
                        {pIdx > 0 && <span aria-hidden="true" className="text-neutral-600">/</span>}
                        <button
                          type="button"
                          onClick={() => onSelectProjectHighlight && onSelectProjectHighlight(proj)}
                          className="hover:text-orange-400 transition-colors cursor-pointer"
                        >
                          {proj}
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Architectural Guarantee */}
        <div className="mt-12 p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="text-neutral-300">
              Every skill here is backed by a project you can open, from client websites to desktop POS software.
            </span>
          </div>
          <a
            href="#projects"
            className="text-orange-400 hover:text-orange-300 font-medium whitespace-nowrap transition-colors"
          >
            Review Project Proof Points &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
