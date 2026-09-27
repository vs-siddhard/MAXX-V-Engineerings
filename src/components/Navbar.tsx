import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Instagram } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isLight
            ? 'bg-white/95 backdrop-blur-md border-b-2 border-[#E30613] shadow-md py-2.5'
            : 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#E30613]/50 shadow-2xl py-2.5'
          : isLight
            ? 'bg-white/90 backdrop-blur-sm border-b border-slate-200 py-3.5'
            : 'bg-[#0B0B0B]/85 backdrop-blur-sm border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo & Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613]"
          >
            <Logo variant={isLight ? 'light-bg' : 'dark-bg'} size="sm" showTrio={true} />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {COMPANY_DATA.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-bold transition-colors relative py-1 focus:outline-none focus-visible:text-[#E30613] ${
                  isLight
                    ? 'text-slate-700 hover:text-[#E30613]'
                    : 'text-slate-300 hover:text-[#E30613]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions: ThemeToggle, Instagram, Main Phone, Quote CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Instagram Link */}
            <a
              href={COMPANY_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow MAXX V ENGINEERINGS on Instagram"
              title="Follow @maxxvengineerings on Instagram"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 hover:border-[#E30613]/50 rounded-sm transition-all"
            >
              <Instagram className="w-4 h-4 text-[#E30613]" />
            </a>

            {/* Clickable Main Phone Line */}
            <a
              href={`tel:${COMPANY_DATA.businessPhones[0].raw}`}
              className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border rounded-sm transition-colors ${
                isLight
                  ? 'text-slate-800 bg-slate-100 hover:bg-slate-200 border-slate-300 hover:border-[#E30613]'
                  : 'text-slate-300 hover:text-white border-white/10 hover:border-[#E30613]/50'
              }`}
              title="Call Main Office"
            >
              <Phone className="w-3.5 h-3.5 text-[#E30613]" />
              <span>{COMPANY_DATA.businessPhones[0].display}</span>
            </a>

            {/* Primary CTA Button */}
            <button
              onClick={onQuoteClick}
              className="btn-primary px-4 py-2 text-xs"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />

            <button
              onClick={onQuoteClick}
              className="btn-secondary px-2.5 py-1.5 text-xs"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white border border-white/15 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E30613]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E30613]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`sm:hidden border-b-4 border-[#E30613] px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200 ${
          isLight ? 'bg-white text-black' : 'bg-[#0F0F0F] text-white'
        }`}>
          <div className="flex flex-col space-y-1">
            {COMPANY_DATA.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold tracking-wider uppercase py-2 border-b ${
                  isLight
                    ? 'text-slate-800 hover:text-[#E30613] border-slate-200'
                    : 'text-slate-200 hover:text-[#E30613] border-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Direct Contacts List */}
          <div className="pt-2 space-y-2">
            <div className={`text-[10px] font-mono uppercase tracking-widest ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Business Telephone Lines:
            </div>
            {COMPANY_DATA.businessPhones.map((phone) => (
              <a
                key={phone.raw}
                href={`tel:${phone.raw}`}
                className={`flex items-center justify-between py-2 px-3 rounded-sm border text-xs font-mono ${
                  isLight
                    ? 'bg-slate-100 border-slate-300 text-black'
                    : 'bg-black/60 border-white/10 text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#E30613]" />
                  <span className="font-bold">{phone.display}</span>
                </div>
                <span className="text-[10px] text-slate-400">{phone.label}</span>
              </a>
            ))}

            <a
              href={`tel:${COMPANY_DATA.personalPhone.raw}`}
              className={`flex items-center justify-between py-2 px-3 rounded-sm border text-xs font-mono ${
                isLight
                  ? 'bg-slate-100 border-slate-300 text-black'
                  : 'bg-black/60 border-white/10 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E30613]" />
                <span className="font-bold">{COMPANY_DATA.personalPhone.display}</span>
              </div>
              <span className="text-[10px] text-[#E30613] font-bold">Direct Contact</span>
            </a>

            <div className="pt-2 flex gap-2">
              <a
                href={COMPANY_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm border text-xs font-bold uppercase ${
                  isLight
                    ? 'bg-slate-100 border-slate-300 text-black'
                    : 'bg-white/5 border-white/15 text-white'
                }`}
              >
                <Instagram className="w-4 h-4 text-[#E30613]" />
                <span>Instagram</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
