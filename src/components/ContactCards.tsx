import React from 'react';
import { Phone, Mail, Compass, FileText, ArrowUpRight, User } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

interface ContactCardsProps {
  onQuoteClick: () => void;
}

export const ContactCards: React.FC<ContactCardsProps> = ({ onQuoteClick }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="contact" className={`py-20 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-slate-50 border-slate-300' : 'bg-[#0B0B0B] text-white border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-black border border-[#E30613] text-[#E30613] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            COMMERCIAL ENGAGEMENT
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black font-display tracking-tight uppercase ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            LET&apos;S BUILD TOGETHER
          </h2>
          <div className="w-20 h-1 bg-[#E30613] mx-auto my-3" />
          <p className={`text-sm sm:text-base font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            Have a sheet-metal requirement? Let&apos;s turn your blueprints into precision metal reality.
          </p>
        </div>

        {/* 4 Main Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Card 1: Call Primary (+91 80191 15556) */}
          <a
            href={`tel:${COMPANY_DATA.businessPhones[0].raw}`}
            className={`border-2 p-6 rounded-sm relative group cursor-pointer flex flex-col justify-between transition-all ${
              isLight
                ? 'bg-white border-slate-300 hover:border-[#E30613] shadow-md'
                : 'bg-[#121212] border-white/15 hover:border-[#E30613] shadow-xl'
            }`}
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div>
              <div className="w-10 h-10 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                MAIN BUSINESS LINE
              </span>
              <div className={`text-base sm:text-lg font-black font-mono group-hover:text-[#E30613] transition-colors mt-1 ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                {COMPANY_DATA.businessPhones[0].display}
              </div>
              <p className={`text-xs mt-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Main office &amp; project estimation
              </p>
            </div>

            <div className={`mt-5 pt-3 border-t flex items-center justify-between text-xs font-mono ${
              isLight ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
            }`}>
              <span className="text-[#E30613] font-bold">CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E30613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Card 2: Commercial Line (+91 80191 15557) */}
          <a
            href={`tel:${COMPANY_DATA.businessPhones[1].raw}`}
            className={`border-2 p-6 rounded-sm relative group cursor-pointer flex flex-col justify-between transition-all ${
              isLight
                ? 'bg-white border-slate-300 hover:border-[#E30613] shadow-md'
                : 'bg-[#121212] border-white/15 hover:border-[#E30613] shadow-xl'
            }`}
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div>
              <div className="w-10 h-10 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                BUSINESS LINE 2
              </span>
              <div className={`text-base sm:text-lg font-black font-mono group-hover:text-[#E30613] transition-colors mt-1 ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                {COMPANY_DATA.businessPhones[1].display}
              </div>
              <p className={`text-xs mt-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Commercial orders &amp; material delivery
              </p>
            </div>

            <div className={`mt-5 pt-3 border-t flex items-center justify-between text-xs font-mono ${
              isLight ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
            }`}>
              <span className="text-[#E30613] font-bold">CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E30613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Card 3: Enquiries Line (+91 80191 15558) */}
          <a
            href={`tel:${COMPANY_DATA.businessPhones[2].raw}`}
            className={`border-2 p-6 rounded-sm relative group cursor-pointer flex flex-col justify-between transition-all ${
              isLight
                ? 'bg-white border-slate-300 hover:border-[#E30613] shadow-md'
                : 'bg-[#121212] border-white/15 hover:border-[#E30613] shadow-xl'
            }`}
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div>
              <div className="w-10 h-10 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                BUSINESS LINE 3
              </span>
              <div className={`text-base sm:text-lg font-black font-mono group-hover:text-[#E30613] transition-colors mt-1 ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                {COMPANY_DATA.businessPhones[2].display}
              </div>
              <p className={`text-xs mt-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Laser cutting &amp; CNC enquiries
              </p>
            </div>

            <div className={`mt-5 pt-3 border-t flex items-center justify-between text-xs font-mono ${
              isLight ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
            }`}>
              <span className="text-[#E30613] font-bold">CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E30613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Card 4: Official Email */}
          <a
            href={`mailto:${COMPANY_DATA.email}`}
            className={`border-2 p-6 rounded-sm relative group cursor-pointer flex flex-col justify-between transition-all ${
              isLight
                ? 'bg-white border-slate-300 hover:border-[#E30613] shadow-md'
                : 'bg-[#121212] border-white/15 hover:border-[#E30613] shadow-xl'
            }`}
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr" />
            <div className="cad-corner-bl" />
            <div className="cad-corner-br" />

            <div>
              <div className="w-10 h-10 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                OFFICIAL EMAIL
              </span>
              <div className={`text-xs sm:text-sm font-black font-mono group-hover:text-[#E30613] transition-colors mt-1 break-all ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                {COMPANY_DATA.email}
              </div>
              <p className={`text-xs mt-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Submit drawing PDFs, DXF &amp; specifications
              </p>
            </div>

            <div className={`mt-5 pt-3 border-t flex items-center justify-between text-xs font-mono ${
              isLight ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
            }`}>
              <span className="text-[#E30613] font-bold">EMAIL US</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E30613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

        </div>

        {/* Separately: DIRECT WORKSHOP LINE (+91 7993490315) */}
        <div className="mb-12">
          <div className={`border-2 p-5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isLight
              ? 'bg-white border-slate-300 shadow-md'
              : 'bg-[#141414] border-slate-700/80'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-black border border-white/10 flex items-center justify-center text-[#E30613]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E30613] font-bold block">
                  DIRECT CONTACT LINE
                </span>
                <span className={`text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Direct telephone contact for workshop coordination and project enquiries:
                </span>
              </div>
            </div>

            <a
              href={`tel:${COMPANY_DATA.personalPhone.raw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-[#E30613] text-white font-mono text-sm font-bold border border-white/20 hover:border-[#E30613] transition-colors rounded-sm"
            >
              <Phone className="w-4 h-4 text-[#E30613]" />
              <span>{COMPANY_DATA.personalPhone.display}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Action Buttons Bar: CALL NOW | EMAIL US | GET DIRECTIONS | GET A QUOTE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <a
            href={`tel:${COMPANY_DATA.businessPhones[0].raw}`}
            className="btn-primary py-3.5 px-4 text-xs font-bold text-center"
          >
            <Phone className="w-3.5 h-3.5 text-[#E30613]" />
            <span>CALL NOW</span>
          </a>

          <a
            href={`mailto:${COMPANY_DATA.email}`}
            className="btn-primary py-3.5 px-4 text-xs font-bold text-center"
          >
            <Mail className="w-3.5 h-3.5 text-[#E30613]" />
            <span>EMAIL US</span>
          </a>

          <a
            href={COMPANY_DATA.googleDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3.5 px-4 text-xs font-bold text-center"
          >
            <Compass className="w-3.5 h-3.5 text-[#E30613]" />
            <span>GET DIRECTIONS</span>
          </a>

          <button
            onClick={onQuoteClick}
            className="btn-secondary py-3.5 px-4 text-xs font-bold text-center"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>GET A QUOTE</span>
          </button>
        </div>

      </div>
    </section>
  );
};
