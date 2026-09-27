import React, { useState } from 'react';
import { ArrowUpRight, Zap, CheckCircle2, Compass, Layers, Phone } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { Logo } from './Logo';

interface HeroProps {
  onQuoteClick: () => void;
  onExploreWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onExploreWorkClick }) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'laser' | 'bending'>('laser');

  return (
    <section
      id="home"
      className="relative min-h-[94vh] pt-20 lg:pt-24 flex items-stretch overflow-hidden border-b-4 border-[#E30613]"
    >
      {/* 2-Column Split Composition: Left = Crisp White Background | Right = Heavy Industrial Black & Red Graphic */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[85vh]">
        
        {/* ================= LEFT SIDE (WHITE BACKGROUND) ================= */}
        <div className="lg:col-span-6 bg-white text-[#0B0B0B] p-6 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative z-10 bg-tech-grid-light">
          
          {/* Subtle Red Top Accent Bar */}
          <div className="w-16 h-1 bg-[#E30613] mb-6" />

          {/* Large Bold Brand Wordmark */}
          <div className="space-y-1 mb-4">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-display tracking-tight text-[#E30613] leading-none">
              MAXX V
            </h1>
            <div className="text-2xl sm:text-4xl xl:text-5xl font-black font-display tracking-tight text-[#0B0B0B] leading-none uppercase">
              ENGINEERINGS
            </div>
          </div>

          {/* Subline: CUT | BEND | CREATE with Red Separators */}
          <div className="flex items-center gap-2 sm:gap-3 font-mono font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase my-4 py-2 border-y border-slate-200">
            <span className="text-black">CUT</span>
            <span className="text-[#E30613] text-base font-black">|</span>
            <span className="text-black">BEND</span>
            <span className="text-[#E30613] text-base font-black">|</span>
            <span className="text-black">CREATE</span>
          </div>

          {/* Primary Tagline */}
          <div className="space-y-2 my-2">
            <h2 className="text-xl sm:text-3xl font-extrabold font-display text-[#0B0B0B] tracking-tight">
              {COMPANY_DATA.tagline}
            </h2>
            {/* Supporting Tagline */}
            <p className="text-sm sm:text-base font-medium text-slate-700 max-w-xl leading-relaxed">
              {COMPANY_DATA.supportingTagline}
            </p>
          </div>

          {/* Verified Materials Badge Strip */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 my-5 text-xs font-mono font-bold">
            <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 text-black">MS</span>
            <span className="text-[#E30613] font-black">•</span>
            <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 text-black">SS</span>
            <span className="text-[#E30613] font-black">•</span>
            <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 text-black">ALU</span>
            <span className="text-[#E30613] font-black">•</span>
            <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 text-black">GI</span>
            <span className="text-[#E30613] font-black">•</span>
            <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 text-slate-600">BRASS</span>
            <span className="text-[#E30613] font-black">•</span>
            <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 text-slate-600">COPPER</span>
          </div>

          {/* CTA Buttons (Standardized Red & Black Button System with Precision Offset Stroke) */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onQuoteClick}
              className="btn-primary btn-precision group px-7 py-3.5 text-xs sm:text-sm font-bold shadow-lg"
            >
              <span className="relative z-10">GET A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#E30613] group-hover:text-white transition-colors relative z-10" />
            </button>

            <button
              onClick={onExploreWorkClick}
              className="btn-secondary btn-precision group px-7 py-3.5 text-xs sm:text-sm font-bold shadow-lg"
            >
              <span className="relative z-10">VIEW OUR WORK</span>
            </button>

            <a
              href={COMPANY_DATA.googleDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-[#E30613] transition-colors"
            >
              <Compass className="w-4 h-4 text-[#E30613]" />
              <span>DIRECTIONS</span>
            </a>
          </div>

          {/* Location & Quick Contact kicker */}
          <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs font-mono text-slate-600 gap-2">
            <div>
              <span className="text-black font-bold">AUTONAGAR, GUNTUR</span> (AP – 522001)
            </div>
            <div className="text-[#E30613] font-bold">
              {COMPANY_DATA.businessPhones[0].display}
            </div>
          </div>

        </div>

        {/* ================= RIGHT SIDE (INDUSTRIAL BLACK & RED GRAPHIC) ================= */}
        <div className="lg:col-span-6 bg-[#0B0B0B] text-white p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-between relative overflow-hidden bg-tech-grid">
          
          {/* Diagonal Red Slashes & Angular Geometry (Matching Reference Banner) */}
          <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-[#E30613]/10 to-transparent pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E30613]/15 rounded-full blur-3xl pointer-events-none" />
          
          {/* Angular Red Cutout Graphic Strip on Left Border */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-3 bg-[#E30613]" />

          {/* Interactive Inspection Mode Switcher */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#E30613] animate-pulse" />
              <span className="text-xs font-mono uppercase font-bold tracking-wider text-white">
                FACILITY CAPABILITY DISPLAY
              </span>
            </div>

            <div className="flex bg-[#141414] p-1 border border-white/15 rounded-sm">
              <button
                onClick={() => setActiveVisualTab('laser')}
                className={`px-3 py-1 text-xs font-mono font-bold uppercase transition-all ${
                  activeVisualTab === 'laser'
                    ? 'bg-[#E30613] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                01 Laser Cutting
              </button>
              <button
                onClick={() => setActiveVisualTab('bending')}
                className={`px-3 py-1 text-xs font-mono font-bold uppercase transition-all ${
                  activeVisualTab === 'bending'
                    ? 'bg-[#E30613] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                02 CNC Bending
              </button>
            </div>
          </div>

          {/* Dynamic Interactive Stage */}
          <div className="relative z-10 flex-1 flex flex-col justify-center">
            
            {activeVisualTab === 'laser' ? (
              /* LASER CUTTING COMPOSITION */
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {/* Visual Header */}
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[#E30613] text-xs font-mono font-bold uppercase tracking-widest block">
                      CORE PROCESS 01
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight">
                      HIGH-PRECISION LASER CUTTING
                    </h3>
                  </div>
                  <span className="hidden sm:block text-xs font-mono text-slate-400">
                    MS • SS • ALU • GI
                  </span>
                </div>

                {/* Laser Head & Metal Sheet Interactive Graphic */}
                <div className="relative bg-[#141414] border-2 border-white/15 p-6 rounded-sm overflow-hidden min-h-[260px] sm:min-h-[300px] flex flex-col items-center justify-center bg-perforated-metal">
                  <div className="cad-corner-tl" />
                  <div className="cad-corner-tr" />
                  <div className="cad-corner-bl" />
                  <div className="cad-corner-br" />

                  {/* Laser Nozzle Diagram with Animated Laser Spark & Light Sweep */}
                  <svg
                    viewBox="0 0 400 220"
                    className="w-full max-w-[380px] h-auto drop-shadow-2xl select-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Laser Torch Head Body */}
                    <path d="M170,10 L230,10 L220,70 L205,100 L195,100 L180,70 Z" fill="#262626" stroke="#555" strokeWidth="1.5" />
                    <rect x="185" y="15" width="30" height="20" fill="#3A3A3A" />
                    <line x1="170" y1="35" x2="230" y2="35" stroke="#E30613" strokeWidth="2" />
                    
                    {/* Brass Nozzle Tip */}
                    <polygon points="192,100 208,100 203,115 197,115" fill="#D97706" stroke="#92400E" strokeWidth="1" />
                    
                    {/* Pulsing Concentrated Red Laser Beam */}
                    <line x1="200" y1="115" x2="200" y2="155" stroke="#E30613" strokeWidth="3" className="animate-laser-pulse" />
                    <line x1="200" y1="115" x2="200" y2="155" stroke="#FFF" strokeWidth="1" />
                    
                    {/* Laser Contact Focal Point (Sparks and heat halo) */}
                    <circle cx="200" cy="155" r="9" fill="#E30613" className="animate-ping opacity-60" />
                    <circle cx="200" cy="155" r="5" fill="#FFFFFF" />
                    
                    {/* Sparks */}
                    <line x1="200" y1="155" x2="178" y2="140" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="3 2" />
                    <line x1="200" y1="155" x2="222" y2="138" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="3 2" />
                    <line x1="200" y1="155" x2="182" y2="168" stroke="#E30613" strokeWidth="1.2" />
                    <line x1="200" y1="155" x2="220" y2="166" stroke="#E30613" strokeWidth="1.2" />

                    {/* Sheet Metal Plate on cutting bed */}
                    <rect x="30" y="155" width="340" height="14" fill="#3F3F46" stroke="#71717A" strokeWidth="1.2" />
                    
                    {/* Decorative cut pattern on the plate (As in reference image) */}
                    <circle cx="90" cy="162" r="4" fill="#141414" stroke="#A1A1AA" strokeWidth="1" />
                    <circle cx="120" cy="162" r="4" fill="#141414" stroke="#A1A1AA" strokeWidth="1" />
                    <rect x="235" y="158" width="40" height="8" rx="2" fill="#141414" stroke="#E30613" strokeWidth="1" />
                    <circle cx="310" cy="162" r="5" fill="#141414" stroke="#A1A1AA" strokeWidth="1" />

                    {/* Slatted cutting bed supports */}
                    {[50, 90, 130, 170, 210, 250, 290, 330].map((x) => (
                      <polygon key={x} points={`${x},169 ${x+12},169 ${x+6},195`} fill="#1C1917" stroke="#444" strokeWidth="0.8" />
                    ))}
                    
                    {/* Scribing Dimension Text */}
                    <text x="35" y="145" fill="#E30613" fontSize="10" fontFamily="monospace" fontWeight="bold">PRECISION CUTTING</text>
                    <text x="250" y="145" fill="#A1A1AA" fontSize="10" fontFamily="monospace">TOLERANCE: ±0.05MM</text>
                  </svg>

                  {/* Live Status Overlay */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/80 px-3 py-1.5 border border-white/10">
                    <span className="text-[#E30613] font-bold">MATERIAL: MILD STEEL / SS / ALU / GI</span>
                    <span className="text-white">STATUS: ACTIVE BEAM</span>
                  </div>
                </div>

                {/* 3 Reference Design Profiles Grid (Floral, Hexagon, Geometric as in Reference Banner) */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="bg-[#141414] border border-white/10 hover:border-[#E30613] p-2.5 text-center transition-colors">
                    <span className="text-[10px] font-mono text-slate-400 block">JALI / SCREEN</span>
                    <span className="text-xs font-bold text-white uppercase">Architectural</span>
                  </div>
                  <div className="bg-[#141414] border border-[#E30613] p-2.5 text-center transition-colors">
                    <span className="text-[10px] font-mono text-[#E30613] block">INDUSTRIAL</span>
                    <span className="text-xs font-bold text-white uppercase">Components</span>
                  </div>
                  <div className="bg-[#141414] border border-white/10 hover:border-[#E30613] p-2.5 text-center transition-colors">
                    <span className="text-[10px] font-mono text-slate-400 block">CUSTOM CUT</span>
                    <span className="text-xs font-bold text-white uppercase">All Alloys</span>
                  </div>
                </div>

              </div>
            ) : (
              /* CNC BENDING COMPOSITION */
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[#E30613] text-xs font-mono font-bold uppercase tracking-widest block">
                      CORE PROCESS 02
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight">
                      ACCURATE CNC BENDING
                    </h3>
                  </div>
                  <span className="hidden sm:block text-xs font-mono text-slate-400">
                    BULK &amp; CUSTOM WORK
                  </span>
                </div>

                {/* Press Brake Diagram & Formed Enclosure Visual */}
                <div className="relative bg-[#141414] border-2 border-white/15 p-6 rounded-sm overflow-hidden min-h-[260px] sm:min-h-[300px] flex flex-col items-center justify-center bg-perforated-metal">
                  <div className="cad-corner-tl" />
                  <div className="cad-corner-tr" />
                  <div className="cad-corner-bl" />
                  <div className="cad-corner-br" />

                  <svg
                    viewBox="0 0 380 200"
                    className="w-full max-w-[340px] h-auto drop-shadow-2xl select-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Top Punch Tool (Hydraulic Ram descending) */}
                    <path d="M150,20 L230,20 L230,65 L190,105 L150,65 Z" fill="#2E2E2E" stroke="#E30613" strokeWidth="1.5" />
                    <line x1="190" y1="20" x2="190" y2="105" stroke="#E30613" strokeWidth="1" strokeDasharray="3 3" />
                    
                    {/* Bent Sheet Metal Workpiece (V-bend formation) */}
                    <path d="M70,85 L190,118 L310,85" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M70,85 L190,118 L310,85" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Bottom V-Die Tool */}
                    <path d="M120,130 L190,122 L260,130 L260,180 L120,180 Z" fill="#262626" stroke="#71717A" strokeWidth="1.5" />
                    
                    {/* Hydraulic pressure arrows */}
                    <line x1="190" y1="5" x2="190" y2="18" stroke="#E30613" strokeWidth="2" markerEnd="url(#arrow)" />
                    <text x="195" y="15" fill="#E30613" fontSize="9" fontFamily="monospace">PRESSURE</text>

                    <text x="70" y="65" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold">FLANGE ANGLE: 90°</text>
                    <text x="70" y="160" fill="#E30613" fontSize="10" fontFamily="monospace">ENCLOSURES &amp; BRACKETS</text>
                  </svg>

                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/80 px-3 py-1.5 border border-white/10">
                    <span className="text-[#E30613] font-bold">REPEATABILITY: CNC PRECISION</span>
                    <span className="text-white">ENCLOSURES • BRACKETS • CHASSIS</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="bg-[#141414] border border-white/10 p-2.5 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block">APPLICATION</span>
                    <span className="text-xs font-bold text-white uppercase">Console Cabinets</span>
                  </div>
                  <div className="bg-[#141414] border border-[#E30613] p-2.5 text-center">
                    <span className="text-[10px] font-mono text-[#E30613] block">SERIES</span>
                    <span className="text-xs font-bold text-white uppercase">Bulk Parts</span>
                  </div>
                  <div className="bg-[#141414] border border-white/10 p-2.5 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block">CUSTOM</span>
                    <span className="text-xs font-bold text-white uppercase">Complex Bends</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column Footer Strip */}
          <div className="relative z-10 pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="text-white font-bold">YOUR DESIGN, OUR FABRICATION EXCELLENCE</span>
            <span className="text-[#E30613] font-bold">QUALITY. ON TIME.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
