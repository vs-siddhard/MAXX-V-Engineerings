import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatements } from './components/BrandStatements';
import { QuickActions } from './components/QuickActions';
import { About } from './components/About';
import { EngineeringVisual } from './components/EngineeringVisual';
import { Industry } from './components/Industry';
import { Services } from './components/Services';
import { Materials } from './components/Materials';
import { Process } from './components/Process';
import { Quality } from './components/Quality';
import { PastWorks } from './components/PastWorks';
import { InstagramSection } from './components/InstagramSection';
import { WhyUs } from './components/WhyUs';
import { Location } from './components/Location';
import { BusinessCard } from './components/BusinessCard';
import { ContactCards } from './components/ContactCards';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const scrollToQuote = () => {
    const quoteElement = document.getElementById('contact') || document.getElementById('quote-form');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPastWorks = () => {
    const worksElement = document.getElementById('past-works');
    if (worksElement) {
      worksElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col pb-14 md:pb-0 transition-colors duration-200 ${
        isLight ? 'bg-white text-black' : 'bg-[#0B0B0B] text-white'
      }`}
    >
      {/* Sticky Navigation */}
      <Navbar onQuoteClick={scrollToQuote} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section: Split Composition (Left White, Right Black & Red) */}
        <Hero
          onQuoteClick={scrollToQuote}
          onExploreWorkClick={scrollToPastWorks}
        />

        {/* Brand Statements (CUT | BEND | CREATE) */}
        <BrandStatements onQuoteClick={scrollToQuote} />

        {/* Contact Quick Actions (Main Office, Direct Line, Visit Workshop) */}
        <QuickActions />

        {/* About Section & Public Record Transparency */}
        <About />

        {/* Dedicated Interactive CAD Transformation Animation */}
        <EngineeringVisual />

        {/* Industry Section (Basic Metals & Alloy Industries & Iron & Steel Products) */}
        <Industry onQuoteClick={scrollToQuote} />

        {/* Confirmed Services: Laser Cutting, CNC Bending, Custom Fabrication, Design to Production */}
        <Services onQuoteClick={scrollToQuote} />

        {/* Raw Materials Compatibility: MS • SS • ALU • GI • Brass • Copper */}
        <Materials onQuoteClick={scrollToQuote} />

        {/* Manufacturing Process: From Design to Production */}
        <Process />

        {/* Verified Brand Promise: Quality. On Time. */}
        <Quality />

        {/* Past Works Gallery (Masonry & Lightbox) */}
        <PastWorks />

        {/* Official Instagram Channel Showcase */}
        <InstagramSection />

        {/* Why MAXX V ENGINEERINGS (Factual Positioning) */}
        <WhyUs onQuoteClick={scrollToQuote} />

        {/* Location Section (Interactive Google Map & Exact Coordinates) */}
        <Location />

        {/* Verified Business Identification Card */}
        <BusinessCard />

        {/* Commercial Engagement Cards & All Telephone Lines */}
        <ContactCards onQuoteClick={scrollToQuote} />

        {/* Formal Quote & Technical Specification Enquiry Form */}
        <QuoteForm />
      </main>

      {/* Footer */}
      <Footer onQuoteClick={scrollToQuote} />

      {/* Sticky Mobile Bottom Bar (CALL | MAP | QUOTE) */}
      <MobileBottomBar onQuoteClick={scrollToQuote} />

      {/* Floating Action Button: Scroll To Top with Metallic Glow */}
      <ScrollToTop threshold={320} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
