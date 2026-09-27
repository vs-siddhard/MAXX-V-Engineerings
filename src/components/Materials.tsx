import React, { useState } from 'react';
import { Layers, Shield, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface MaterialsProps {
  onQuoteClick: () => void;
}

export const Materials: React.FC<MaterialsProps> = ({ onQuoteClick }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const materials = [
    {
      code: 'MS',
      name: 'MILD STEEL',
      tag: 'STRUCTURAL & HEAVY FABRICATION',
      properties: [
        'Superior structural strength & weldability',
        'Cost-effective for bulk industrial fabrication',
        'Ideal for frames, brackets & machine bodies',
      ],
      gaugeRange: 'Thickness: 0.8mm – 25mm+',
    },
    {
      code: 'SS',
      name: 'STAINLESS STEEL',
      tag: 'CORROSION RESISTANT & ARCHITECTURAL',
      properties: [
        'Grades 304 / 316 architectural & food-grade',
        'Clean, oxide-free laser cut edges',
        'Intricate screens, consoles & medical enclosures',
      ],
      gaugeRange: 'Thickness: 0.5mm – 16mm',
    },
    {
      code: 'ALU',
      name: 'ALUMINIUM',
      tag: 'LIGHTWEIGHT & HIGH STRENGTH',
      properties: [
        'High strength-to-weight ratio',
        'Rapid heat dissipation for electronic housings',
        'Non-magnetic & architectural jali panels',
      ],
      gaugeRange: 'Thickness: 0.8mm – 12mm',
    },
    {
      code: 'GI',
      name: 'GALVANIZED IRON',
      tag: 'ZINC-COATED WEATHER RESISTANCE',
      properties: [
        'Zinc-bonded protective anti-rust barrier',
        'HVAC ducts, industrial boxes & outdoor chassis',
        'Formable with zero coating peel during CNC bend',
      ],
      gaugeRange: 'Thickness: 0.6mm – 4.0mm',
    },
  ];

  return (
    <section id="materials" className={`py-20 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-white border-slate-300' : 'bg-[#070707] text-white border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
              <span>RAW MATERIAL COMPATIBILITY</span>
              <span className="text-slate-400">/</span>
              <span>ALLOY SPECS</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display tracking-tight uppercase ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              MATERIALS WE WORK WITH
            </h2>
            <p className={`mt-3 text-base font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              Calibrated laser cutting parameters and tooling across ferrous, non-ferrous, and coated alloy sheets.
            </p>
          </div>

          <div className={`flex items-center gap-2 text-xs font-mono p-2 border ${
            isLight ? 'bg-slate-100 border-slate-300' : 'bg-black border-white/15'
          }`}>
            <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>EXTENDED ALLOY SUPPORT:</span>
            <span className="text-[#E30613] font-bold">BRASS • COPPER</span>
          </div>
        </div>

        {/* 4 Large Material Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((mat, idx) => (
            <div
              key={mat.code}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`border-2 p-6 sm:p-7 rounded-sm relative flex flex-col justify-between group cursor-pointer transition-all duration-300 ${
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
                {/* Big Bold Code Badge */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className={`text-4xl sm:text-5xl font-black font-display tracking-tight group-hover:text-[#E30613] transition-colors ${
                    isLight ? 'text-black' : 'text-white'
                  }`}>
                    {mat.code}
                  </span>
                  <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 border ${
                    isLight ? 'bg-white border-slate-300 text-slate-700' : 'bg-black border-white/10 text-slate-400'
                  }`}>
                    ALLOY 0{idx + 1}
                  </span>
                </div>

                {/* Material Full Name */}
                <h3 className={`text-xl font-black font-display uppercase tracking-tight ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  {mat.name}
                </h3>
                
                <div className="w-10 h-0.5 bg-[#E30613] my-2 group-hover:w-full transition-all duration-300" />

                <div className="text-[11px] font-mono text-[#E30613] font-bold uppercase tracking-wider mb-4">
                  {mat.tag}
                </div>

                {/* Key Attributes */}
                <ul className={`space-y-2.5 text-xs mb-6 font-medium ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {mat.properties.map((prop, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#E30613] rounded-full shrink-0 mt-1" />
                      <span>{prop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gauge & Consult Action */}
              <div className={`pt-4 border-t space-y-3 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
                <div className={`text-[11px] font-mono ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {mat.gaugeRange}
                </div>
                
                <button
                  onClick={onQuoteClick}
                  className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono font-bold uppercase border transition-colors ${
                    isLight
                      ? 'bg-slate-200 hover:bg-[#E30613] text-black hover:text-white border-slate-300 hover:border-[#E30613]'
                      : 'bg-black hover:bg-[#E30613] text-white border-white/15 hover:border-[#E30613]'
                  }`}
                >
                  <span>Discuss {mat.code} Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Material Notice Strip */}
        <div className={`mt-8 p-4 border flex flex-wrap items-center justify-between gap-3 text-xs font-mono ${
          isLight ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-black border-white/15 text-slate-400'
        }`}>
          <div>
            <span className={`font-bold ${isLight ? 'text-black' : 'text-white'}`}>ALSO PROCESSING:</span> High-conductivity pure Copper &amp; decorative architectural Brass sheets on request.
          </div>
          <button
            onClick={onQuoteClick}
            className="text-[#E30613] hover:underline font-bold uppercase transition-colors"
          >
            Submit Material Specification &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
