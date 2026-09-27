import React from 'react';

interface LogoProps {
  variant?: 'dark-bg' | 'light-bg';
  showTrio?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark-bg',
  showTrio = true,
  className = '',
  size = 'md',
}) => {
  const isDarkBg = variant === 'dark-bg';

  // Sizing styles
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-xs tracking-widest',
    lg: 'text-sm tracking-[0.2em]',
    xl: 'text-base tracking-[0.25em]',
  };

  const trioSizes = {
    sm: 'text-[7px]',
    md: 'text-[9px]',
    lg: 'text-[11px]',
    xl: 'text-xs',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* Geometric Ribbon M-V Icon extracted from MAXX V brand mark */}
      <svg
        viewBox="0 0 100 85"
        className={`${iconSizes[size]} shrink-0 drop-shadow-sm`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left vertical block (Black or dark graphite on light, white/graphite on dark) */}
        <polygon
          points="6,15 28,15 28,80 6,80"
          fill={isDarkBg ? '#FFFFFF' : '#0B0B0B'}
        />
        
        {/* Left diagonal chevron (Black/Red transition) */}
        <polygon
          points="28,15 50,55 38,72 20,40"
          fill="#B5050F"
        />

        {/* Central dynamic Red V ribbon - Vivid Brand Red #E30613 */}
        <polygon
          points="28,15 50,55 72,15 50,30"
          fill="#E30613"
        />
        <polygon
          points="50,55 72,15 88,15 50,82"
          fill="#E30613"
        />
        <polygon
          points="12,15 50,82 38,82 6,24"
          fill="#D00511"
        />

        {/* Right vertical block */}
        <polygon
          points="72,15 94,15 94,80 72,80"
          fill={isDarkBg ? '#FFFFFF' : '#0B0B0B'}
        />
      </svg>

      {/* Typography Block */}
      <div className="flex flex-col justify-center">
        {/* Top: MAXX V in vivid engineering red */}
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-display font-black tracking-tight ${titleSizes[size]} text-[#E30613]`}
          >
            MAXX V
          </span>
        </div>

        {/* Middle: ENGINEERINGS */}
        <div
          className={`font-display font-extrabold uppercase leading-none mt-0.5 ${subtitleSizes[size]} ${
            isDarkBg ? 'text-white' : 'text-[#0B0B0B]'
          }`}
        >
          ENGINEERINGS
        </div>

        {/* Bottom Trio: CUT | BEND | CREATE */}
        {showTrio && (
          <div
            className={`flex items-center gap-1 font-mono font-bold uppercase tracking-wider mt-1 text-slate-400 ${trioSizes[size]}`}
          >
            <span className={isDarkBg ? 'text-slate-300' : 'text-slate-700'}>CUT</span>
            <span className="text-[#E30613] font-black">|</span>
            <span className={isDarkBg ? 'text-slate-300' : 'text-slate-700'}>BEND</span>
            <span className="text-[#E30613] font-black">|</span>
            <span className={isDarkBg ? 'text-slate-300' : 'text-slate-700'}>CREATE</span>
          </div>
        )}
      </div>
    </div>
  );
};
