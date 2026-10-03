import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [highlightedProjectName, setHighlightedProjectName] = useState<string | null>(null);

  const handleSelectProjectHighlight = (projectName: string) => {
    setHighlightedProjectName(projectName);
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-page text-neutral-100 selection:bg-cyan-400 selection:text-neutral-950 font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Hero Section with Bold Typography */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Skills Section with Custom Animated Progress Bars */}
        <SkillsSection onSelectProjectHighlight={handleSelectProjectHighlight} />

        {/* Projects Grid with Hover Effects and Deep-Dive Modal */}
        <ProjectsSection
          onOpenContact={handleOpenContact}
          highlightedProjectName={highlightedProjectName}
        />

        {/* Career Experience & Milestones */}
        <ExperienceSection />

        {/* Functional Contact Me Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume / Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
