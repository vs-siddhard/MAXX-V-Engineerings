import React from 'react';
import { Factory, ShieldCheck, MapPin, PhoneCall, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

interface WhyUsProps {
  onQuoteClick: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onQuoteClick }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const factualPillars = [
    {
      icon: Factory,
      title: 'Industrial Focus',
      description:
        'Operating within the Basic Metals & Alloy Industries sector, focusing strictly on fundamental metal supplies and precision sheet-metal processing.',
      tag: 'SECTOR CLASSIFICATION',
    },
    {
      icon: ShieldCheck,
      title: 'Iron & Steel Integrity',
      description:
        'Core product categories center on iron and steel products, delivering high-strength materials and laser accuracy required for demanding engineering applications.',
      tag: 'MATERIAL STRENGTH',
    },
    {
      icon: MapPin,
      title: 'Autonagar, Guntur Hub',
      description:
        'Based directly in the Autonagar industrial cluster of Guntur, Andhra Pradesh, positioned at the heart of the regional metal trade and logistics network.',
      tag: 'REGIONAL HUB',
    },
    {
      icon: PhoneCall,
      title: 'Direct Engineering Contact',
      description:
        'Clients directly discuss technical drawings, thickness gauges, tolerances, and turnaround schedules with the workshop team without intermediary delays.',
      tag: 'DIRECT ACCESS',
    },
  ];

  return (
    <section className={`py-20 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-white border-slate-300' : 'bg-[#0B0B0B] border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
            <span>FACTUAL POSITIONING</span>
            <span className="text-slate-400">/</span>
            <span>WHY MAXX V</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black font-display tracking-tight uppercase ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            WHY MAXX V ENGINEERINGS
          </h2>
          <p className={`mt-3 text-base font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            Grounding our enterprise in industrial reality: verified sector registration, central Guntur workshop presence, and direct technical consultation.
          </p>
        </div>

        {/* 4 Factual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {factualPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-sm relative group transition-all duration-300 border-2 flex flex-col justify-between ${
                  isLight
                    ? 'bg-slate-50 border-slate-300 hover:border-[#E30613] text-black shadow-md'
                    : 'bg-[#121212] border-white/15 hover:border-[#E30613] text-white shadow-xl'
                }`}
              >
                <div className="cad-corner-tl" />
                <div className="cad-corner-tr" />
                <div className="cad-corner-bl" />
                <div className="cad-corner-br" />

                <div>
                  <div className="w-10 h-10 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                    {pillar.tag}
                  </span>

                  <h3 className={`text-lg font-black font-display uppercase mt-1 group-hover:text-[#E30613] transition-colors ${
                    isLight ? 'text-black' : 'text-white'
                  }`}>
                    {pillar.title}
                  </h3>

                  <p className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {pillar.description}
                  </p>
                </div>

                <div className={`mt-6 pt-3 border-t flex items-center gap-1.5 text-xs font-mono font-bold ${
                  isLight ? 'border-slate-200 text-slate-500' : 'border-white/10 text-slate-400'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E30613]" />
                  <span>VERIFIED FACT</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-5 bg-[#0B0B0B] border-l-4 border-[#E30613] border-y border-r border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-xs font-mono text-[#E30613] font-bold uppercase tracking-wider block">
              TRANSPARENCY STANDARD
            </span>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Information on this site is verified against official industrial classifications and physical facility records.
            </p>
          </div>
          <button
            onClick={onQuoteClick}
            className="btn-primary px-5 py-2.5 text-xs font-bold shrink-0 self-start sm:self-auto"
          >
            <span>START A PROJECT</span>
          </button>
        </div>

      </div>
    </section>
  );
};
