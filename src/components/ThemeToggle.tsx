import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      className={`relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border text-xs font-mono transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613] active:scale-95 ${
        isLight
          ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 hover:border-[#E30613]'
          : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/15 hover:border-[#E30613]'
      }`}
    >
      {isLight ? (
        <>
          <Sun className="w-3.5 h-3.5 text-[#E30613]" />
          <span className="hidden sm:inline font-bold">LIGHT</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-slate-200" />
          <span className="hidden sm:inline font-bold">DARK</span>
        </>
      )}
    </button>
  );
};
