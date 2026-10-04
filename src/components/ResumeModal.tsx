import React from 'react';
import { X, Printer, Download, MapPin, Mail, Globe, CheckCircle } from 'lucide-react';
import { DEVELOPER_PROFILE, EXPERIENCE_DATA, SKILLS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-neutral-800 rounded-2xl shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky action bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-surface/95 border-b border-neutral-800 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
            <span>CURRICULUM VITAE</span>
            <span aria-hidden="true">·</span>
            <span>{DEVELOPER_PROFILE.name.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg bg-neutral-900 border border-neutral-800 transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-12 space-y-8 bg-surface text-neutral-200 text-sm">
          {/* Header */}
          <div className="border-b border-neutral-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white font-display tracking-tight">
                {DEVELOPER_PROFILE.name}
              </h1>
              <p className="text-sm font-medium text-orange-400 mt-1">
                {DEVELOPER_PROFILE.role}
              </p>
            </div>

            <div className="text-xs text-neutral-400 space-y-1 font-mono sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3 h-3 text-neutral-500" />
                <span>{DEVELOPER_PROFILE.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3 h-3 text-neutral-500" />
                <span>{DEVELOPER_PROFILE.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe className="w-3 h-3 text-neutral-500" />
                <span>{DEVELOPER_PROFILE.website}</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase text-orange-400 tracking-wider mb-2 font-bold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {DEVELOPER_PROFILE.bio}
            </p>
          </div>

          {/* Core Technical Strengths */}
          <div>
            <h2 className="text-xs font-mono uppercase text-orange-400 tracking-wider mb-3 font-bold">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg border border-neutral-800/80 bg-neutral-900/30">
                <div className="font-semibold text-white mb-1">Frontend &amp; Mobile</div>
                <div className="text-neutral-400">React 19, TypeScript, Next.js, Tailwind CSS, Vite, React Native, Figma</div>
              </div>
              <div className="p-3 rounded-lg border border-neutral-800/80 bg-neutral-900/30">
                <div className="font-semibold text-white mb-1">Backend</div>
                <div className="text-neutral-400">Node.js, Express, REST APIs, JWT auth, Java / Java EE, Python</div>
              </div>
              <div className="p-3 rounded-lg border border-neutral-800/80 bg-neutral-900/30">
                <div className="font-semibold text-white mb-1">Databases</div>
                <div className="text-neutral-400">MongoDB, Firebase / Firestore, MySQL</div>
              </div>
              <div className="p-3 rounded-lg border border-neutral-800/80 bg-neutral-900/30">
                <div className="font-semibold text-white mb-1">Deployment &amp; SEO</div>
                <div className="text-neutral-400">GitHub Pages &amp; Actions, Vercel, AWS Amplify, Electron, Search Console, JSON-LD</div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase text-orange-400 tracking-wider mb-4 font-bold">
              Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.company} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white text-sm">
                      {exp.role} <span className="text-neutral-400 font-normal">at {exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-orange-400 tabular-nums">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-1.5 pl-3 list-disc list-outside text-xs text-neutral-400 marker:text-orange-400">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="pt-4 border-t border-neutral-800">
            <h2 className="text-xs font-mono uppercase text-orange-400 tracking-wider mb-2 font-bold">
              Education &amp; Certifications
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
              <div>
                <span className="font-semibold text-white">Graduate Diploma in Software Engineering (GDSE)</span>
                <span className="text-neutral-400 ml-2">IJSE, Sri Lanka</span>
              </div>
              <span className="text-neutral-500 font-mono">2023 — 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
