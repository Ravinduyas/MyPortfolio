import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, FileText, ShieldCheck, Linkedin, Facebook, Instagram } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

const STEPS = [
  { icon: MessageSquare, title: 'Message me on Fiverr', text: 'Tell me about your business and what you need built.' },
  { icon: FileText, title: 'Get a custom offer', text: 'I reply with scope, price and delivery time for your project.' },
  { icon: ShieldCheck, title: 'Pay safely through Fiverr', text: 'Payment is held by Fiverr until you approve the delivery.' },
];

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    } catch {
      // Clipboard unavailable; still show feedback
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
            Hire Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            I take on freelance projects through Fiverr — websites, booking systems, POS software and SEO improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Fiverr call to action */}
          <div className="lg:col-span-7 p-8 rounded-2xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/40 via-[#0d0d10] to-[#0d0d10] shadow-xl flex flex-col">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Freelance projects</div>
            <h3 className="text-2xl font-bold text-white font-display mt-2">Hire me on Fiverr</h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-lg leading-relaxed">
              All project work, messages and payments go through Fiverr, so you get clear offers, milestone delivery and Fiverr&apos;s buyer protection.
            </p>

            <ol className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STEPS.map(({ icon: Icon, title, text }, idx) => (
                <li key={title} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-500">0{idx + 1}</span>
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-sm font-semibold text-white mt-2">{title}</div>
                  <div className="text-xs text-neutral-400 mt-1 leading-relaxed">{text}</div>
                </li>
              ))}
            </ol>

            <div className="mt-8 lg:mt-auto lg:pt-8">
              <a
                href={DEVELOPER_PROFILE.fiverr}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-md"
              >
                <span>View my Fiverr profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Other channels */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-neutral-800 bg-[#0d0d10] space-y-4">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
              Other enquiries
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              For full-time roles, collaborations or general questions, reach me here.
            </p>

            {/* Email with copy */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-neutral-800 text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] text-neutral-400 font-mono">Email</div>
                  <div className="text-xs font-semibold text-white truncate font-mono">
                    {DEVELOPER_PROFILE.email}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-lg border border-neutral-700 transition-all flex items-center gap-1.5 shrink-0"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social profiles */}
            {[
              { icon: Linkedin, label: 'LinkedIn', handle: 'Ravindu Kariyawasam', href: DEVELOPER_PROFILE.linkedin },
              { icon: Facebook, label: 'Facebook', handle: 'ravindu.yasanka.734447', href: DEVELOPER_PROFILE.facebook },
              { icon: Instagram, label: 'Instagram', handle: '@ravindu.yasanka', href: DEVELOPER_PROFILE.instagram },
            ].map(({ icon: Icon, label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-600 flex items-center justify-between gap-3 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-800 text-cyan-400 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 font-mono">{label}</div>
                    <div className="text-xs font-semibold text-white">{handle}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
