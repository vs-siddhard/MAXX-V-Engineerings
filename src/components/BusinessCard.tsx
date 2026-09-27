import React from 'react';
import { Layers, ShieldCheck, MapPin, Phone, Building2 } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

export const BusinessCard: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className={`py-12 border-b-2 border-white/10 transition-colors ${
      isLight ? 'bg-slate-100 border-slate-300' : 'bg-[#070707] border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`p-6 sm:p-8 rounded-sm relative border-2 ${
          isLight ? 'bg-white border-slate-300 shadow-md' : 'bg-[#121212] border-white/15 shadow-xl'
        }`}>
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr" />
          <div className="cad-corner-bl" />
          <div className="cad-corner-br" />

          <div className={`flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b ${
            isLight ? 'border-slate-200' : 'border-white/10'
          }`}>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-1 font-bold">
                <span>BUSINESS IDENTIFICATION CARD</span>
                <span className="text-slate-400">/</span>
                <span>VERIFIED SPEC</span>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-black font-display tracking-tight uppercase ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                {COMPANY_DATA.name}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">PIN: 522001</span>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-sm bg-[#E30613] text-white">
                ACTIVE INDUSTRIAL UNIT
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-sm">
            
            {/* Industry */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase font-bold">
                <Building2 className="w-3.5 h-3.5 text-[#E30613]" />
                <span>Industry Sector</span>
              </div>
              <div className={`font-bold font-display uppercase ${isLight ? 'text-black' : 'text-white'}`}>
                {COMPANY_DATA.industry}
              </div>
            </div>

            {/* Core Products */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase font-bold">
                <Layers className="w-3.5 h-3.5 text-[#E30613]" />
                <span>Core Capabilities</span>
              </div>
              <div className={`font-bold ${isLight ? 'text-black' : 'text-white'}`}>
                {COMPANY_DATA.coreProducts}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase font-bold">
                <MapPin className="w-3.5 h-3.5 text-[#E30613]" />
                <span>Workshop Location</span>
              </div>
              <div className={`font-bold ${isLight ? 'text-black' : 'text-white'}`}>
                Plot 5 &amp; 6, Block 39, IDA Autonagar, Guntur, AP
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase font-bold">
                <Phone className="w-3.5 h-3.5 text-[#E30613]" />
                <span>Verified Contact Numbers</span>
              </div>
              <div className="font-mono text-xs font-bold text-[#E30613] space-y-1">
                <div>
                  <a href={`tel:${COMPANY_DATA.businessPhones[0].raw}`} className="hover:underline">
                    {COMPANY_DATA.businessPhones[0].display} (Main Office)
                  </a>
                </div>
                <div>
                  <a href={`tel:${COMPANY_DATA.personalPhone.raw}`} className="hover:underline">
                    {COMPANY_DATA.personalPhone.display} (Direct Contact)
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
