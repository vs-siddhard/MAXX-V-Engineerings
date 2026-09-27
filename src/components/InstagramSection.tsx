import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

export const InstagramSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className={`py-16 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-slate-100 border-slate-300' : 'bg-[#0E0E0E] text-white border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`p-8 sm:p-12 rounded-sm relative border-2 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 ${
          isLight ? 'bg-white border-slate-300 shadow-lg' : 'bg-[#141414] border-white/15 shadow-2xl'
        }`}>
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr" />
          <div className="cad-corner-bl" />
          <div className="cad-corner-br" />

          {/* Left Text Block */}
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] font-bold">
              <Instagram className="w-4 h-4 text-[#E30613]" />
              <span>OFFICIAL SOCIAL CHANNEL</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-black font-display tracking-tight uppercase ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              FOLLOW THE WORK
            </h2>

            <p className={`text-sm sm:text-base font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              See more of MAXX V ENGINEERINGS on Instagram. Live workshop cuts, CNC press brake forming, and completed project assemblies.
            </p>

            <div className="inline-block font-mono text-sm font-bold text-[#E30613] bg-black px-3 py-1 border border-white/10">
              {COMPANY_DATA.instagram.handle}
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={COMPANY_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 text-xs sm:text-sm font-bold shadow-xl"
            >
              <Instagram className="w-4 h-4 mr-2" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
