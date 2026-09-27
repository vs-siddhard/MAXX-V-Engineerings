import React, { useState } from 'react';
import { MapPin, Phone, Compass, ExternalLink, Copy, Check, Mail } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export const Location: React.FC = () => {
  const [copiedCoords, setCopiedCoords] = useState(false);

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(`${COMPANY_DATA.coordinates.lat}, ${COMPANY_DATA.coordinates.lng}`);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${COMPANY_DATA.coordinates.lat},${COMPANY_DATA.coordinates.lng}&hl=en&z=17&output=embed`;

  return (
    <section id="location" className="py-20 bg-[#070707] text-white border-b-2 border-white/10 relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
            <span>PHYSICAL WORKSHOP LOCATION</span>
            <span className="text-slate-600">/</span>
            <span>AUTONAGAR, GUNTUR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            FIND US IN GUNTUR
          </h2>
          <p className="mt-3 text-base text-slate-300 font-medium">
            Located in the central IDA Autonagar industrial cluster of Guntur, connecting fabricators, contractors, and metal buyers across Andhra Pradesh.
          </p>
        </div>

        {/* Split Layout: Interactive Map + Verified Address Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Google Map Container */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-sm bg-[#121212] border-2 border-white/15 overflow-hidden flex-1 flex flex-col min-h-[420px]">
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr" />
              <div className="cad-corner-bl" />
              <div className="cad-corner-br" />

              {/* Map Bar Controls */}
              <div className="p-3 bg-[#0B0B0B] border-b border-white/10 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#E30613] font-bold">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="text-white">LAT: {COMPANY_DATA.coordinates.lat} · LNG: {COMPANY_DATA.coordinates.lng}</span>
                </div>

                <button
                  onClick={handleCopyCoords}
                  className="flex items-center gap-1 px-2.5 py-1 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors text-[11px]"
                  title="Copy Coordinates"
                >
                  {copiedCoords ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedCoords ? 'Copied' : 'Copy Coordinates'}</span>
                </button>
              </div>

              {/* Iframe Map View */}
              <div className="relative flex-1 min-h-[360px] bg-[#0B0B0B]">
                <iframe
                  title="MAXX V ENGINEERINGS Location Map"
                  src={googleMapsEmbedUrl}
                  className="w-full h-full min-h-[380px] border-0 contrast-125"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute top-3 left-3 bg-black/90 border border-[#E30613] p-2.5 rounded-sm shadow-xl backdrop-blur-md max-w-xs pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#E30613] animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase">{COMPANY_DATA.name}</span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-400 mt-1">
                    Plot No. 5 &amp; 6, Block 39, IDA Autonagar
                  </p>
                </div>
              </div>

              {/* Map Action Footer */}
              <div className="p-3 bg-[#0B0B0B] border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">PIN: {COMPANY_DATA.pincode} · GUNTUR, AP</span>
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E30613] hover:text-white flex items-center gap-1 font-bold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Facility Address & Direction CTA */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="panel-dark p-7 sm:p-8 rounded-sm flex-1 flex flex-col justify-between space-y-6">
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr" />
              <div className="cad-corner-bl" />
              <div className="cad-corner-br" />

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#E30613] uppercase tracking-wider mb-2 font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>REGISTERED INDUSTRIAL PREMISES</span>
                </div>

                <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight">
                  {COMPANY_DATA.name}
                </h3>

                <p className="text-xs font-mono text-slate-400 mt-1">
                  IDA Autonagar, Guntur, Andhra Pradesh – 522001
                </p>

                {/* Exact Verified Address Box */}
                <div className="mt-5 p-4 bg-black border-l-4 border-[#E30613] border-y border-r border-white/10 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Exact Plot Location:</div>
                  <p className="text-sm font-bold text-white leading-relaxed font-mono">
                    {COMPANY_DATA.fullAddress}
                  </p>
                </div>

                {/* Main Lines Highlight */}
                <div className="mt-6 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                    Main Business Telephone Lines:
                  </div>
                  {COMPANY_DATA.businessPhones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="flex items-center justify-between p-2.5 bg-black/60 hover:bg-[#E30613]/10 border border-white/10 hover:border-[#E30613] text-white transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
                        <span className="font-mono text-xs font-bold whitespace-nowrap">{phone.display}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">{phone.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Direction CTAs */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY_DATA.googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-3 px-5 text-xs flex-1"
                >
                  <Compass className="w-4 h-4 mr-1.5" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-3 px-5 text-xs flex-1"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5 text-[#E30613]" />
                  <span>GOOGLE MAPS</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
