import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  // index.html sets the initial class before first paint
  const [isLight, setIsLight] = useState(() => document.documentElement.classList.contains('light'));

  const toggleTheme = () => {
    const next = !isLight;
    document.documentElement.classList.toggle('light', next);
    try {
      localStorage.setItem('theme', next ? 'light' : 'dark');
    } catch {
      // Storage unavailable; the theme still applies for this visit
    }
    setIsLight(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
    >
      {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
};
