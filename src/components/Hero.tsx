import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { DEVELOPER_PROFILE, heroStudioImg } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center border-b border-neutral-800/60 overflow-hidden"
    >
      {/* Full-width background portrait */}
      {!imageError && (
        <img
          src={heroStudioImg}
          alt={`Portrait of ${DEVELOPER_PROFILE.name}`}
          className="absolute inset-0 w-full h-full object-cover object-[70%_20%] lg:object-[center_22%]"
          onError={() => setImageError(true)}
        />
      )}

      {/* Scrims: darken the text side and fade into the next section */}
      <div
        className="absolute inset-0 bg-[#09090b]/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#09090b] lg:via-[#09090b]/80 lg:to-[#09090b]/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#09090b] to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Availability status line */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-neutral-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-emerald-400">Available on Fiverr</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span>{DEVELOPER_PROFILE.location}</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span>Full-Stack Web Development</span>
        </div>

        <div className="max-w-2xl space-y-7">
          <h1 className="text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold tracking-tight text-white font-display uppercase leading-[1.05] text-balance">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-neutral-300">web systems</span> that run real businesses.
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 max-w-xl font-normal leading-relaxed">
            I am <strong className="text-white font-semibold">{DEVELOPER_PROFILE.name}</strong>, a full-stack developer from Sri Lanka. I build booking engines, POS software and websites for surf camps, hostels, rentals and local businesses — from the first design to the live deploy.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-all shadow-md hover:shadow-cyan-500/10 whitespace-nowrap"
            >
              <span>View Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-neutral-900/80 backdrop-blur border border-neutral-700 hover:border-neutral-500 rounded-lg transition-all whitespace-nowrap"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              <span>Curriculum Vitae</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          {/* Proof metrics */}
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px max-w-xl rounded-xl overflow-hidden border border-neutral-800 bg-neutral-800/80">
            {DEVELOPER_PROFILE.metrics.map((item) => (
              <div key={item.label} className="bg-[#0b0b0e]/85 backdrop-blur px-4 py-3">
                <dt className="text-[11px] text-neutral-400 leading-tight">{item.label}</dt>
                <dd className="text-lg font-semibold font-mono tabular-nums text-cyan-400 mt-1">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* What I do strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden border border-neutral-800 bg-neutral-800/80">
          {[
            { icon: Cpu, color: 'text-cyan-400', title: 'Booking & Business Systems', text: 'Booking engines, admin panels and offline POS software' },
            { icon: Layers, color: 'text-blue-400', title: 'Full-Stack TypeScript', text: 'React front ends with Node.js APIs and MongoDB' },
            { icon: ShieldCheck, color: 'text-emerald-400', title: 'Live & Findable', text: 'Automated deploys, technical SEO and structured data' },
          ].map(({ icon: Icon, color, title, text }) => (
            <div key={title} className="bg-[#0b0b0e]/85 backdrop-blur p-5 flex items-start gap-3">
              <Icon className={`w-5 h-5 ${color} shrink-0 mt-0.5`} />
              <div>
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="text-xs text-neutral-400 mt-1">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
