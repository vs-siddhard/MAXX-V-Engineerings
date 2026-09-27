import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ScrollToTopProps {
  threshold?: number;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ threshold = 320 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      if (docHeight > 0) {
        const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      if (scrollTop > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  // Circular progress math
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className="fixed bottom-20 md:bottom-8 right-5 md:right-8 z-40 transition-all duration-300 animate-in fade-in zoom-in-90"
      style={{ willChange: 'transform, opacity' }}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Return to top (Navigation)"
        className={`group relative flex items-center justify-center w-12 h-12 rounded-sm transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613] shadow-xl border-2 ${
          isLight
            ? 'bg-white text-black border-slate-300 hover:border-[#E30613] shadow-slate-900/15 hover:shadow-[#E30613]/25'
            : 'bg-[#121212] text-white border-white/20 hover:border-[#E30613] shadow-black/80 hover:shadow-[#E30613]/30'
        }`}
        style={{
          boxShadow: isLight
            ? '0 10px 25px -5px rgba(15, 23, 42, 0.12), 0 0 16px -2px rgba(227, 6, 19, 0.2)'
            : '0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 0 18px -2px rgba(227, 6, 19, 0.3)',
        }}
      >
        {/* Subtle Metallic Red Glow Effect on Hover */}
        <div
          className={`absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
            isLight
              ? 'bg-gradient-to-tr from-[#E30613]/10 via-[#E30613]/5 to-transparent'
              : 'bg-gradient-to-tr from-[#E30613]/20 via-[#E30613]/10 to-transparent'
          }`}
        />

        {/* Industrial CAD Corner Accents in Red */}
        <span
          className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t-2 border-l-2 border-[#E30613]"
        />
        <span
          className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b-2 border-r-2 border-[#E30613]"
        />

        {/* SVG Circular Scroll Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
          viewBox="0 0 48 48"
        >
          {/* Background track circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke={isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.1)'}
            strokeWidth="2"
          />

          {/* Active progress circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="#E30613"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Tactical Arrow with lift animation on hover */}
        <ArrowUp
          className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#E30613]"
          strokeWidth={2.5}
        />

        {/* Tooltip on Desktop hover showing return to top & progress percentage */}
        <span className="hidden md:group-hover:flex absolute right-full mr-3 items-center whitespace-nowrap bg-black text-white text-[10px] font-mono font-bold px-2 py-1 rounded-sm border border-white/20 shadow-lg pointer-events-none">
          <span className="text-[#E30613] mr-1">TOP</span>
          <span>{Math.round(scrollProgress)}%</span>
        </span>
      </button>
    </div>
  );
};
