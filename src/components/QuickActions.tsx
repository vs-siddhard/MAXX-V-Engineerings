import React from 'react';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

export const QuickActions: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className={`py-12 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-[#F4F5F7] border-slate-300' : 'bg-[#0B0B0B] border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-6 font-bold text-center">
          <span>DIRECT CONTACT QUICK ACTIONS</span>
          <span className="text-slate-400">/</span>
          <span>AUTONAGAR, GUNTUR</span>
        </div>

        {/* 3 Large Interactive Industrial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Call Primary (+91 80191 15556) */}
          <a
            href={`tel:${COMPANY_DATA.businessPhones[0].raw}`}
            className={`p-6 rounded-sm relative group cursor-pointer transition-all border-2 flex items-center justify-between ${
              isLight
                ? 'bg-white border-slate-300 hover:border-[#E30613] text-black shadow-md'
                : 'bg-[#121212] border-white/15 hover:border-[#E30613] text-white shadow-xl'
            }`}
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                  Call Us (Main Line)
                </span>
                <span className={`text-base sm:text-lg font-black font-mono tracking-tight group-hover:text-[#E30613] transition-colors ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  {COMPANY_DATA.businessPhones[0].display}
                </span>
              </div>
            </div>

            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#E30613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Card 2: Call Secondary (+91 7993490315) */}
          <a
            href={`tel:${COMPANY_DATA.personalPhone.raw}`}
            className={`p-6 rounded-sm relative group cursor-pointer transition-all border-2 flex items-center justify-between ${
              isLight
                ? 'bg-white border-slate-300 hover:border-[#E30613] text-black shadow-md'
                : 'bg-[#121212] border-white/15 hover:border-[#E30613] text-white shadow-xl'
            }`}
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                  Call Us (Direct Contact)
                </span>
                <span className={`text-base sm:text-lg font-black font-mono tracking-tight group-hover:text-[#E30613] transition-colors ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  {COMPANY_DATA.personalPhone.display}
                </span>
              </div>
            </div>

            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#E30613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Card 3: Visit Us */}
          <a
            href={COMPANY_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-sm relative group cursor-pointer transition-all border-2 flex items-center justify-between ${
              isLight
                ? 'bg-white border-slate-300 hover:border-[#E30613] text-black shadow-md'
                : 'bg-[#121212] border-white/15 hover:border-[#E30613] text-white shadow-xl'
            }`}
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                  Visit Workshop
                </span>
                <span className={`text-base sm:text-lg font-black tracking-tight group-hover:text-[#E30613] transition-colors ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  Autonagar, Guntur
                </span>
              </div>
            </div>

            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#E30613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

        </div>

      </div>
    </section>
  );
};
