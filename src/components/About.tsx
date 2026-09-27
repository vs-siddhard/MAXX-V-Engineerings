import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, ShieldCheck, Ruler, Cpu } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const pillars = [
    {
      title: 'Precision in Every Cut',
      desc: 'High-tolerance laser cutting for intricate patterns, perforated grilles, and structural steel sheets.',
      badge: 'CNC LASER',
    },
    {
      title: 'Ideas into Reality',
      desc: 'Transforming customer blueprints and CAD models into finished functional sheet-metal components.',
      badge: 'CAD TO METAL',
    },
    {
      title: 'Industrial Core in Guntur',
      desc: 'Firmly anchored in Autonagar, Guntur—the central hub for regional engineering and metal trade.',
      badge: 'IDA AUTONAGAR',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0B0B0B] text-white border-b-2 border-white/10 relative bg-tech-grid">
      
      {/* Decorative Red Accent Strip on Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E30613] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
            <span>ABOUT MAXX V ENGINEERINGS</span>
            <span className="text-slate-600">/</span>
            <span>AUTONAGAR, GUNTUR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            Built Around <span className="text-[#E30613]">Engineering &amp; Metal</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            {COMPANY_DATA.description}
          </p>
        </div>

        {/* 2-Column Layout: Visual Technical CAD Display & Factual Business Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Industrial Capability & Public Record Transparency */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="panel-dark p-7 relative rounded-sm space-y-5">
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr" />
              <div className="cad-corner-bl" />
              <div className="cad-corner-br" />

              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-[#E30613] uppercase tracking-wider">
                  INDUSTRIAL FOUNDATION
                </span>
                <span className="text-xs font-mono text-slate-400">
                  AP – 522001
                </span>
              </div>

              <h3 className="text-xl font-bold font-display uppercase text-white">
                Sheet Metal Solutions for a Smarter Tomorrow
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Operating directly within the Autonagar industrial cluster of Guntur, Andhra Pradesh, 
                <strong className="text-white font-bold"> MAXX V ENGINEERINGS</strong> pairs 
                cutting-edge sheet metal laser technology with accurate CNC bending. 
                Whether creating architectural screens, electrical console enclosures, structural mounting brackets, 
                or heavy industrial fabrications, every component is manufactured to rigorous tolerances.
              </p>

              {/* Tagline Ribbon from Reference Image */}
              <div className="p-3 bg-black border-l-4 border-[#E30613] flex items-center justify-between text-xs font-mono">
                <span className="text-white font-bold">MOTTO: {COMPANY_DATA.brandTrio}</span>
                <span className="text-[#E30613] font-bold">IDEAS INTO REALITY</span>
              </div>

              {/* Factual Information Markers */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Industrial Cluster:</span>
                  <span className="text-white font-bold">Plot 5 &amp; 6, Block 39, IDA Autonagar</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Sector Category:</span>
                  <span className="text-[#E30613] font-bold">Basic Metals &amp; Alloy Industries</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Primary Material Classes:</span>
                  <span className="text-white font-bold">MS • SS • ALU • GI • BRASS • COPPER</span>
                </div>
              </div>
            </div>

            {/* Public Record Transparency Rule Note */}
            <div className="p-4 rounded-sm bg-[#121212] border border-slate-700/60 text-xs text-slate-400 leading-relaxed space-y-1">
              <div className="flex items-center gap-1.5 text-white font-bold font-mono uppercase text-[11px]">
                <ShieldCheck className="w-4 h-4 text-[#E30613]" />
                <span>Verified Public Industrial Record</span>
              </div>
              <p>{COMPANY_DATA.ownershipNotice}</p>
            </div>

          </div>

          {/* Right Column: Interactive 3-Pillar Technical Showcase */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                onClick={() => setActiveStep(idx)}
                className={`panel-dark panel-dark-hover p-6 rounded-sm cursor-pointer transition-all relative ${
                  activeStep === idx
                    ? 'border-2 border-[#E30613] bg-[#161616]'
                    : 'border border-white/10 hover:border-white/30'
                }`}
              >
                <div className="cad-corner-tl" />
                <div className="cad-corner-tr" />
                <div className="cad-corner-bl" />
                <div className="cad-corner-br" />

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#E30613]">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 bg-black border border-white/10 text-slate-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-display uppercase text-white mt-1">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <ArrowRight
                    className={`w-5 h-5 shrink-0 mt-1 transition-transform ${
                      activeStep === idx
                        ? 'text-[#E30613] translate-x-1'
                        : 'text-slate-500'
                    }`}
                  />
                </div>
              </div>
            ))}

            {/* Quality Statement Card matching Exhibition Booth */}
            <div className="bg-[#E30613] text-white p-5 rounded-sm flex items-center justify-between shadow-xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-black font-bold block">
                  BRAND COMMITMENT
                </span>
                <span className="text-lg sm:text-xl font-black font-display uppercase tracking-tight">
                  STRONGER COMPONENTS. BRIGHTER INDUSTRIES.
                </span>
              </div>
              <span className="text-xs font-mono font-black text-black bg-white px-2.5 py-1 uppercase tracking-wider shrink-0">
                QUALITY ON TIME
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
