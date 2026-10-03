import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-deep py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Wordmark and Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-sm font-bold text-white font-display">
            {DEVELOPER_PROFILE.name}
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-neutral-700">·</span>
          <span>Full-Stack Developer</span>
          <span aria-hidden="true" className="hidden sm:inline text-neutral-700">·</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Links and Back-to-Top */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            href={DEVELOPER_PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href={DEVELOPER_PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href={DEVELOPER_PROFILE.facebook}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Facebook profile"
          >
            Facebook
          </a>
          <a
            href={DEVELOPER_PROFILE.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram profile"
          >
            Instagram
          </a>
          <a
            href={DEVELOPER_PROFILE.fiverr}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Fiverr profile"
          >
            Fiverr
          </a>
          <a
            href={`mailto:${DEVELOPER_PROFILE.email}`}
            className="hover:text-white transition-colors"
            aria-label="Send email directly"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all flex items-center gap-1.5"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] hidden sm:inline">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
