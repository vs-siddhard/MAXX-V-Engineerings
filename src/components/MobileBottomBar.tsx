import React from 'react';
import { Phone, Compass, FileText } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

interface MobileBottomBarProps {
  onQuoteClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onQuoteClick }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 md:hidden backdrop-blur-lg border-t-2 px-3 py-2 transition-colors ${
        isLight
          ? 'bg-white/95 border-slate-300 shadow-xl'
          : 'bg-[#0B0B0B]/95 border-[#E30613]/50 shadow-2xl'
      }`}
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Action */}
        <a
          href={`tel:${COMPANY_DATA.businessPhones[0].raw}`}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-sm border text-xs font-mono font-bold transition-colors ${
            isLight
              ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-black'
              : 'bg-[#141414] hover:bg-white/10 border-white/15 text-white'
          }`}
        >
          <Phone className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
          <span>CALL</span>
        </a>

        {/* Map Action */}
        <a
          href={COMPANY_DATA.googleDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-sm border text-xs font-mono font-bold transition-colors ${
            isLight
              ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-black'
              : 'bg-[#141414] hover:bg-white/10 border-white/15 text-white'
          }`}
        >
          <Compass className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
          <span>MAP</span>
        </a>

        {/* Get Quote Action */}
        <button
          onClick={onQuoteClick}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-sm bg-[#E30613] hover:bg-[#B5050F] text-white text-xs font-mono font-bold uppercase transition-all shadow-md active:scale-95 border border-[#E30613]"
        >
          <FileText className="w-3.5 h-3.5 shrink-0" />
          <span>QUOTE</span>
        </button>

      </div>
    </div>
  );
};
