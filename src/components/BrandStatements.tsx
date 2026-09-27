import React from 'react';
import { Layers, Zap, Cpu, Hammer, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BrandStatementsProps {
  onQuoteClick: () => void;
}

export const BrandStatements: React.FC<BrandStatementsProps> = ({ onQuoteClick }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const statements = [
    {
      label: 'RAW MATERIALS',
      heading: 'MS / SS / ALU / GI',
      sub: 'Ferrous & Non-Ferrous Alloys',
      icon: Layers,
    },
    {
      label: 'CUTTING CORE',
      heading: 'LASER CUTTING',
      sub: 'Pinpoint CNC Contour Precision',
      icon: Zap,
    },
    {
      label: 'FORMING CORE',
      heading: 'CNC BENDING',
      sub: 'Multi-Axis Press Brake Forming',
      icon: Cpu,
    },
    {
      label: 'SOLUTIONS',
      heading: 'CUSTOM FABRICATION',
      sub: 'Engineered Around Your Blueprints',
      icon: Hammer,
    },
  ];

  return (
    <section className={`py-14 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-white border-slate-300' : 'bg-black text-white border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Statement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statements.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.heading}
                onClick={onQuoteClick}
                className={`border-2 p-6 rounded-sm relative cursor-pointer group transition-all duration-300 flex flex-col justify-between ${
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
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#E30613] uppercase tracking-widest mb-3">
                    <span>STATEMENT 0{idx + 1}</span>
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#E30613] transition-colors" />
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-black font-display tracking-tight uppercase group-hover:text-[#E30613] transition-colors ${
                    isLight ? 'text-black' : 'text-white'
                  }`}>
                    {s.heading}
                  </h3>

                  <div className="w-10 h-1 bg-[#E30613] my-2 group-hover:w-full transition-all duration-300" />

                  <p className={`text-xs font-mono font-medium ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                    {s.sub}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[10px] font-mono ${
                  isLight ? 'border-slate-200 text-slate-500' : 'border-white/10 text-slate-400'
                }`}>
                  <span>MAXX V SPEC</span>
                  <span className="text-[#E30613] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                    <span>ENQUIRE</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
