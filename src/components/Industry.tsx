import React, { useState } from 'react';
import { Layers, Shield, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

interface IndustryProps {
  onQuoteClick: () => void;
}

export const Industry: React.FC<IndustryProps> = ({ onQuoteClick }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState<'metals' | 'products'>('metals');

  return (
    <section id="industry" className={`py-20 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-[#F8FAFC] border-slate-300' : 'bg-[#0B0B0B] border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
            <span>VERIFIED CLASSIFICATION</span>
            <span className="text-slate-400">/</span>
            <span>INDUSTRIAL SECTOR</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black font-display tracking-tight uppercase ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            OUR INDUSTRY
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed font-medium ${
            isLight ? 'text-slate-700' : 'text-slate-300'
          }`}>
            Operating in the foundational metals and alloys domain, supplying essential iron and steel products and sheet-metal precision components for industrial, structural, and mechanical requirements.
          </p>
        </div>

        {/* 2 Featured Large Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Primary Category - Basic Metals & Alloy Industries */}
          <div
            onClick={() => setActiveTab('metals')}
            className={`lg:col-span-6 p-7 sm:p-8 rounded-sm cursor-pointer transition-all duration-300 relative border-2 flex flex-col justify-between ${
              activeTab === 'metals'
                ? isLight
                  ? 'bg-white border-[#E30613] shadow-xl'
                  : 'bg-[#141414] border-[#E30613] shadow-2xl'
                : isLight
                  ? 'bg-white border-slate-300 hover:border-slate-500 shadow-md'
                  : 'bg-[#101010] border-white/15 hover:border-white/30'
            }`}
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#E30613] mb-3 uppercase tracking-wider font-bold">
                  <span>PRIMARY INDUSTRIAL CATEGORY</span>
                  <span>NIC CODE 24</span>
                </div>
                
                <h3 className={`text-2xl sm:text-3xl font-black font-display tracking-tight uppercase ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  Basic Metals &amp; Alloy Industries
                </h3>
                
                <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  The Basic Metals &amp; Alloy Industries sector encompasses the manufacturing, primary processing, and preparation of metallic elements and alloys. As an essential backbone of industrial engineering, this sector delivers the baseline strength needed across regional manufacturing and infrastructure.
                </p>
              </div>

              {/* Factual Technical Attributes */}
              <div className={`space-y-3 pt-4 border-t ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
                <div className="flex items-start gap-2.5 text-xs">
                  <Check className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Verified public industrial category registration
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <Check className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Located in Andhra Pradesh&apos;s established industrial corridor (Autonagar, Guntur)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <Check className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Dedicated to customer engineering drawings &amp; industrial specifications
                  </span>
                </div>
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-mono ${
              isLight ? 'border-slate-200' : 'border-white/10'
            }`}>
              <span className="text-slate-400 font-bold">STATUS: ACTIVE IN PUBLIC RECORDS</span>
              <span className="text-[#E30613] flex items-center gap-1 font-bold">
                <span>SECTOR DETAILS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Core Products - Iron & Steel Products */}
          <div
            onClick={() => setActiveTab('products')}
            className={`lg:col-span-6 p-7 sm:p-8 rounded-sm cursor-pointer transition-all duration-300 relative border-2 flex flex-col justify-between ${
              activeTab === 'products'
                ? isLight
                  ? 'bg-white border-[#E30613] shadow-xl'
                  : 'bg-[#141414] border-[#E30613] shadow-2xl'
                : isLight
                  ? 'bg-white border-slate-300 hover:border-slate-500 shadow-md'
                  : 'bg-[#101010] border-white/15 hover:border-white/30'
            }`}
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#E30613] mb-3 uppercase tracking-wider font-bold">
                  <span>VERIFIED PRODUCT LINE</span>
                  <span>CORE SPECIALIZATION</span>
                </div>
                
                <h3 className={`text-2xl sm:text-3xl font-black font-display tracking-tight uppercase ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  Iron &amp; Steel Products
                </h3>
                
                <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  Supplying and processing ferrous industrial materials—iron and steel products tailored to satisfy exact engineering and structural tolerances. From heavy plate laser profiling to multi-bend sheet assemblies, these materials power machinery, structural mounts, and chassis.
                </p>
              </div>

              {/* Factual Technical Attributes */}
              <div className={`space-y-3 pt-4 border-t ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
                <div className="flex items-start gap-2.5 text-xs">
                  <Check className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Iron &amp; steel products serving industrial &amp; engineering demands
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <Check className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    High structural tensile strength, weldability, and durability
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <Check className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Direct estimation channel for customized industrial dimensions
                  </span>
                </div>
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs font-mono ${
              isLight ? 'border-slate-200' : 'border-white/10'
            }`}>
              <span className="text-slate-400 font-bold">SUPPLY SCOPE: INDUSTRIAL &amp; CUSTOM</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onQuoteClick();
                }}
                className="btn-primary px-4 py-2 text-xs font-bold"
              >
                <span>DISCUSS SPECS</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E30613]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
