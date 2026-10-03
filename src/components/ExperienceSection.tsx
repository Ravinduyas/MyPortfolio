import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, ArrowUpRight, Check } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-neutral-800/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
            Career Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Work Experience &amp; Education
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Freelance work for tourism and small businesses in Sri Lanka, built on a software engineering foundation from IJSE.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-48 before:w-px before:bg-neutral-800/80">
          {EXPERIENCE_DATA.map((item) => (
            <div
              key={item.period + item.company}
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start"
            >
              {/* Period Column */}
              <div className="md:w-48 pl-10 md:pl-0 md:text-right shrink-0">
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wide">
                  {item.period}
                </span>
                <div className="text-xs text-neutral-400 mt-1">{item.location}</div>
              </div>

              {/* Dot Anchor on Timeline */}
              <div
                className="absolute left-3.5 md:left-48 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-neutral-950 border-2 border-cyan-400 z-10"
                aria-hidden="true"
              />

              {/* Main Content Card */}
              <div className="flex-1 pl-10 md:pl-6 w-full">
                <div className="p-6 rounded-xl border border-neutral-800 bg-[#0d0d10] hover:border-neutral-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-neutral-300">
                        {item.company}
                      </div>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <ul className="space-y-2.5 my-4">
                    {item.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Used (Unboxed Discipline) */}
                  <div className="pt-4 border-t border-neutral-800/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-400 font-mono">
                    <span className="text-neutral-400">Environment:</span>
                    {item.technologies.map((tech, tIdx) => (
                      <span key={tech} className="flex items-center gap-1.5">
                        {tIdx > 0 && <span aria-hidden="true" className="text-neutral-700">·</span>}
                        <span className="text-neutral-300">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
