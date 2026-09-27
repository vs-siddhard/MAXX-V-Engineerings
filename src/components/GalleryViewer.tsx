import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Maximize2, ShieldCheck, Compass } from 'lucide-react';
import { PastWorkItem } from '../types';

interface GalleryViewerProps {
  items: PastWorkItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryViewer: React.FC<GalleryViewerProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation: Left/Right/Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Past works lightbox viewer"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar: Title, Counter & Close Button */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-black/70">
        <div className="flex items-center gap-3">
          <div className="text-[#E30613] font-mono font-bold text-sm tracking-wider">
            {currentItem.number} / 0{items.length}
          </div>
          <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
          <div className="hidden sm:block">
            <h3 className="text-sm font-bold text-white uppercase tracking-tight font-display">{currentItem.title}</h3>
            <p className="text-xs text-slate-400 font-mono">{currentItem.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={currentItem.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/10 hover:bg-[#E30613] text-xs font-mono text-white transition-colors"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#E30613]"
            aria-label="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main View Area with Prev/Next buttons */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 select-none">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-sm bg-black/70 hover:bg-[#E30613] text-white border border-white/20 transition-all focus:outline-none active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Viewer Canvas */}
        <div className="w-full max-w-4xl max-h-[72vh] flex flex-col items-center justify-center">
          
          {currentItem.imageUrl ? (
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className="max-h-[68vh] w-auto object-contain rounded-sm border-2 border-white/20 shadow-2xl"
            />
          ) : (
            /* Technical Blueprint & Google Maps Photographic Link Card */
            <div className="w-full max-w-2xl bg-[#121212] rounded-sm border-2 border-white/20 p-6 sm:p-8 shadow-2xl relative overflow-hidden bg-tech-grid">
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr" />
              <div className="cad-corner-bl" />
              <div className="cad-corner-br" />

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-3 mb-6">
                <span className="text-[#E30613] font-bold uppercase tracking-wider">
                  VERIFIED RECORD #{currentItem.number}
                </span>
                <span>AUTONAGAR, GUNTUR</span>
              </div>

              {/* Schematic Graphic representation of the metal work */}
              <div className="bg-[#080808] rounded-sm p-6 border border-white/10 flex flex-col items-center justify-center min-h-[260px] text-center relative">
                <svg
                  viewBox="0 0 300 160"
                  className="w-full max-w-[280px] h-auto drop-shadow-md mb-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="20" y="30" width="260" height="100" rx="2" fill="#1C1C1E" stroke="#E30613" strokeWidth="1.5" />
                  <line x1="20" y1="80" x2="280" y2="80" stroke="rgba(227,6,19,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="150" y1="30" x2="150" y2="130" stroke="rgba(227,6,19,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="70" cy="55" r="8" fill="#0B0B0B" stroke="#FFFFFF" strokeWidth="1.2" />
                  <circle cx="230" cy="55" r="8" fill="#0B0B0B" stroke="#FFFFFF" strokeWidth="1.2" />
                  <circle cx="70" cy="105" r="8" fill="#0B0B0B" stroke="#FFFFFF" strokeWidth="1.2" />
                  <circle cx="230" cy="105" r="8" fill="#0B0B0B" stroke="#FFFFFF" strokeWidth="1.2" />
                  <text x="95" y="85" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    IRON &amp; STEEL SPEC
                  </text>
                </svg>

                <p className="text-sm font-bold text-white uppercase tracking-tight">
                  {currentItem.summary}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Source: {currentItem.verifiedSource}
                </p>

                <div className="mt-5">
                  <a
                    href={currentItem.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-6 py-2.5 text-xs font-bold"
                  >
                    <span>Open Photograph on Google Maps</span>
                    <ExternalLink className="w-4 h-4 text-[#E30613]" />
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>COORD: 16.3191735, 80.4815329</span>
                <span>MAXX V ENGINEERINGS</span>
              </div>
            </div>
          )}

        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-sm bg-black/70 hover:bg-[#E30613] text-white border border-white/20 transition-all focus:outline-none active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Bar: Thumbnail Bar & Description */}
      <div className="px-4 sm:px-8 py-3 border-t border-white/10 bg-black/70 flex items-center justify-between">
        <p className="text-xs text-slate-300 hidden md:block max-w-xl truncate">
          {currentItem.summary}
        </p>

        {/* Miniature Thumbnails */}
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => onNavigate(idx)}
              className={`w-9 h-9 rounded-sm text-xs font-mono font-bold transition-all border flex items-center justify-center ${
                idx === currentIndex
                  ? 'border-[#E30613] bg-[#E30613] text-white shadow-lg shadow-[#E30613]/30'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/30'
              }`}
              title={item.title}
            >
              {item.number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
