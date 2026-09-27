import React, { useState } from 'react';
import { ExternalLink, Maximize2, Camera, ArrowUpRight } from 'lucide-react';
import { PAST_WORKS_CONFIG } from '../data/pastWorks';
import { GalleryViewer } from './GalleryViewer';

export const PastWorks: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const featuredItem = PAST_WORKS_CONFIG[0]; // Work 01
  const supportingItems = PAST_WORKS_CONFIG.slice(1); // Works 02, 03, 04, 05

  return (
    <section id="past-works" className="py-20 bg-[#0B0B0B] text-white border-b-2 border-white/10 relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
              <span>FACILITY &amp; WORK DOCUMENTATION</span>
              <span className="text-slate-600">/</span>
              <span>VERIFIED RECORDS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
              PAST WORKS
            </h2>
            <p className="mt-3 text-base text-slate-300 font-medium">
              Real industrial photographs, sheet metal assemblies, and workshop records verified directly from the company&apos;s Google Maps business facility in Autonagar, Guntur.
            </p>
          </div>

          {/* Action button: VIEW ALL WORK */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedIdx(0)}
              className="btn-primary px-6 py-3 text-xs font-bold"
            >
              <span>VIEW ALL WORK</span>
              <Maximize2 className="w-3.5 h-3.5 text-[#E30613]" />
            </button>
          </div>
        </div>

        {/* Masonry Layout with Red and Black Framing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Featured Large Showcase (col-span-8) - Red and Black Framing */}
          <div
            onClick={() => setSelectedIdx(0)}
            className="md:col-span-8 group relative rounded-sm bg-[#121212] border-2 border-[#E30613] overflow-hidden cursor-pointer min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-8 hover:border-white transition-all shadow-2xl"
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            {/* Background Graphic / Real Image */}
            {featuredItem.imageUrl ? (
              <img
                src={featuredItem.imageUrl}
                alt={featuredItem.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-[#1C1C1C] via-[#121212] to-[#0A0A0A]">
                <div className="w-full max-w-md opacity-75 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 340 180" className="w-full h-auto drop-shadow-xl" fill="none">
                    <polygon points="50,110 240,40 310,80 120,150" fill="#262626" stroke="#E30613" strokeWidth="2" />
                    <polygon points="50,110 120,150 120,170 50,130" fill="#141414" stroke="#E30613" strokeWidth="1" />
                    <polygon points="120,150 310,80 310,100 120,170" fill="#0B0B0B" stroke="#E30613" strokeWidth="1" />
                    <line x1="70" y1="125" x2="260" y2="55" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="180" cy="95" r="16" stroke="#E30613" strokeWidth="1.5" strokeDasharray="2 2" />
                    <text x="110" y="100" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="bold">
                      FEATURED RECORD 01
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

            {/* Top Bar Header */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 bg-[#E30613] text-white text-xs font-mono font-black uppercase tracking-wider">
                FEATURED WORK #{featuredItem.number}
              </span>

              <a
                href={featuredItem.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-black/80 hover:bg-[#E30613] text-white text-xs font-mono border border-white/20 transition-all rounded-sm"
                title="Open photograph on Google Maps"
              >
                <span>Google Maps Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-2 mt-auto">
              <span className="text-xs font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                {featuredItem.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white group-hover:text-[#E30613] transition-colors">
                {featuredItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                {featuredItem.summary}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Maximize2 className="w-3.5 h-3.5 text-[#E30613]" />
                <span>Click card to inspect full-screen in gallery</span>
              </div>
            </div>
          </div>

          {/* Supporting Work 02 (col-span-4) - Black framing with red accent */}
          <div
            onClick={() => setSelectedIdx(1)}
            className="md:col-span-4 group relative rounded-sm bg-[#121212] border border-white/15 hover:border-[#E30613] overflow-hidden cursor-pointer min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-6 transition-all shadow-xl"
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] to-[#0A0A0A] flex items-center justify-center p-6">
              <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 200 140" className="w-44 h-auto" fill="none">
                  <rect x="20" y="20" width="160" height="100" rx="2" fill="#222" stroke="#E30613" strokeWidth="1.5" />
                  <line x1="20" y1="70" x2="180" y2="70" stroke="#FFF" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="100" cy="70" r="14" fill="#0B0B0B" stroke="#E30613" strokeWidth="1.5" />
                  <text x="65" y="74" fill="#FFF" fontSize="10" fontFamily="monospace" fontWeight="bold">RECORD 02</text>
                </svg>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#E30613] bg-black px-2 py-0.5 border border-white/10">
                WORK #{supportingItems[0].number}
              </span>
              <a
                href={supportingItems[0].googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 bg-black hover:bg-[#E30613] text-white border border-white/20 transition-colors"
                title="View on Google Maps"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative z-10 space-y-1 mt-auto">
              <span className="text-[11px] font-mono text-[#E30613] uppercase font-bold">
                {supportingItems[0].category}
              </span>
              <h3 className="text-lg font-black font-display text-white group-hover:text-[#E30613] transition-colors">
                {supportingItems[0].title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2">
                {supportingItems[0].summary}
              </p>
            </div>
          </div>

          {/* Row 2: Work 03, Work 04, Work 05 (col-span-4 each) */}
          {supportingItems.slice(1).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx + 2)}
              className="md:col-span-4 group relative rounded-sm bg-[#121212] border border-white/15 hover:border-[#E30613] overflow-hidden cursor-pointer min-h-[300px] flex flex-col justify-between p-6 transition-all shadow-xl"
            >
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr" />
              <div className="cad-corner-bl" />
              <div className="cad-corner-br" />

              <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] to-[#0A0A0A] flex items-center justify-center p-6">
                <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 200 130" className="w-40 h-auto" fill="none">
                    <polygon points="30,85 140,40 180,65 70,110" fill="#242424" stroke="#E30613" strokeWidth="1.5" />
                    <line x1="50" y1="95" x2="160" y2="50" stroke="#FFF" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="70" y="75" fill="#FFF" fontSize="10" fontFamily="monospace" fontWeight="bold">RECORD {item.number}</text>
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#E30613] bg-black px-2 py-0.5 border border-white/10">
                  WORK #{item.number}
                </span>
                <a
                  href={item.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 bg-black hover:bg-[#E30613] text-white border border-white/20 transition-colors"
                  title="View on Google Maps"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative z-10 space-y-1 mt-auto">
                <span className="text-[11px] font-mono text-[#E30613] uppercase font-bold">
                  {item.category}
                </span>
                <h3 className="text-base font-black font-display text-white group-hover:text-[#E30613] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Lightbox / Project Viewer */}
      {selectedIdx !== null && (
        <GalleryViewer
          items={PAST_WORKS_CONFIG}
          currentIndex={selectedIdx}
          isOpen={selectedIdx !== null}
          onClose={() => setSelectedIdx(null)}
          onNavigate={(newIdx) => setSelectedIdx(newIdx)}
        />
      )}
    </section>
  );
};
