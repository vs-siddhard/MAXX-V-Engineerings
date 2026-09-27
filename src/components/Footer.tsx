import React from 'react';
import { Phone, MapPin, ExternalLink, ArrowUpRight, Instagram, Mail } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { Logo } from './Logo';

interface FooterProps {
  onQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onQuoteClick }) => {
  return (
    <footer className="bg-[#070707] border-t-4 border-[#E30613] text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Sector Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block">
              <Logo variant="dark-bg" size="md" showTrio={true} />
            </a>

            <div className="space-y-1 text-xs font-mono text-slate-300">
              <p className="text-[#E30613] font-bold uppercase">{COMPANY_DATA.industry}</p>
              <p className="text-white font-medium">{COMPANY_DATA.coreProducts}</p>
              <p className="text-slate-400">Autonagar, Guntur, Andhra Pradesh – 522001</p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              High-precision sheet metal solutions including laser cutting, CNC bending, and custom fabrication for industrial engineering requirements in Guntur, Andhra Pradesh.
            </p>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141414] hover:bg-[#E30613] text-white border border-white/10 rounded-sm text-xs font-mono transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{COMPANY_DATA.instagram.handle}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DATA.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141414] hover:bg-white hover:text-black text-slate-300 border border-white/10 rounded-sm text-xs font-mono transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono">
              {COMPANY_DATA.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#E30613] transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-bold">
              Verified Contact Lines
            </div>
            <div className="space-y-2.5 text-xs font-mono">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Main Business Office:</span>
                <a
                  href={`tel:${COMPANY_DATA.businessPhones[0].raw}`}
                  className="flex items-center gap-2 text-white hover:text-[#E30613] font-bold transition-colors mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
                  <span>{COMPANY_DATA.businessPhones[0].display}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Direct Workshop Contact:</span>
                <a
                  href={`tel:${COMPANY_DATA.personalPhone.raw}`}
                  className="flex items-center gap-2 text-white hover:text-[#E30613] font-bold transition-colors mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
                  <span>{COMPANY_DATA.personalPhone.display}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onQuoteClick}
                  className="btn-primary px-4 py-2 text-xs font-bold"
                >
                  <span>GET A QUOTE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E30613]" />
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Google Maps Link (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-bold">
              Workshop Facility
            </div>
            <div className="text-xs space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed font-mono">
                  {COMPANY_DATA.fullAddress}
                </span>
              </div>

              <div className="pt-2 flex flex-col gap-1.5 font-mono text-xs">
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E30613] hover:text-white flex items-center gap-1.5 font-bold transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={COMPANY_DATA.googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Ownership transparency notice */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
          <p className="max-w-3xl">
            {COMPANY_DATA.ownershipNotice}
          </p>
        </div>

        {/* Copyright and Taglines */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_DATA.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="text-[#E30613]">CUT</span>
            <span>|</span>
            <span className="text-[#E30613]">BEND</span>
            <span>|</span>
            <span className="text-[#E30613]">CREATE</span>
          </div>
          <div className="text-slate-400">
            {COMPANY_DATA.tagline}
          </div>
        </div>

      </div>
    </footer>
  );
};
