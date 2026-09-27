import React, { useState } from 'react';
import { ArrowUpRight, Zap, Cpu, Hammer, Cog, Check, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onQuoteClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onQuoteClick }) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      number: '01',
      title: 'LASER CUTTING',
      subtitle: 'Precision cutting & custom designs',
      highlights: [
        'Precision cutting',
        'Custom designs',
        'MS / SS / ALU / GI / Brass / Copper',
      ],
      description:
        'High-speed precision CNC laser cutting delivering clean edge geometry, intricate architectural jali panels, and exact industrial parts with zero tool wear.',
      materials: 'MS • SS • ALU • GI',
      icon: Zap,
    },
    {
      number: '02',
      title: 'CNC BENDING',
      subtitle: 'Accurate bending & bulk production',
      highlights: [
        'Accurate bending',
        'Bulk production',
        'Custom sheet-metal works',
      ],
      description:
        'Multi-axis CNC press brake bending ensuring consistent angle repeatability across structural brackets, console cabinets, electrical enclosures, and chassis.',
      materials: 'Heavy & Light Gauges',
      icon: Cpu,
    },
    {
      number: '03',
      title: 'CUSTOM FABRICATION',
      subtitle: 'Tailored sheet-metal solutions',
      highlights: [
        'Custom sheet-metal solutions',
        'Built around project requirements',
        'Assembly & welding fit-up',
      ],
      description:
        'End-to-end custom fabrication engineered strictly to your specification drawings, structural requirements, and industrial end-use criteria.',
      materials: 'Project-Specific',
      icon: Hammer,
    },
    {
      number: '04',
      title: 'DESIGN TO PRODUCTION',
      subtitle: 'Complete manufacturing lifecycle',
      highlights: [
        'From initial design',
        'To finished production',
        'CAD evaluation & nesting',
      ],
      description:
        'Seamless integration from customer CAD models through nesting, laser cutting, CNC forming, and final quality control for ready-to-deploy components.',
      materials: 'Full Workflow',
      icon: Cog,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0B0B0B] text-white border-b-2 border-white/10 relative bg-tech-grid">
      
      {/* Decorative Red Line Banner Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
              <span>CORE CAPABILITIES</span>
              <span className="text-slate-600">/</span>
              <span>CONFIRMED SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
              WHAT WE DO
            </h2>
            <p className="mt-3 text-base text-slate-300 font-medium">
              Specialized sheet-metal engineering services powered by laser cutting, CNC forming, and custom fabrication in Autonagar, Guntur.
            </p>
          </div>

          <button
            onClick={onQuoteClick}
            className="btn-primary px-6 py-3.5 text-xs font-bold self-start md:self-auto"
          >
            <span>DISCUSS YOUR REQUIREMENT</span>
            <ArrowUpRight className="w-4 h-4 text-[#E30613]" />
          </button>
        </div>

        {/* 4 Large Industrial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isSelected = selectedService === idx;

            return (
              <div
                key={service.number}
                className="panel-dark panel-dark-hover p-7 sm:p-8 rounded-sm relative flex flex-col justify-between group transition-all"
              >
                {/* CAD Red Crosshair Corners */}
                <div className="cad-corner-tl" />
                <div className="cad-corner-tr" />
                <div className="cad-corner-bl" />
                <div className="cad-corner-br" />

                <div>
                  {/* Top Header: Large Number & Technical Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-[#E30613] tracking-tighter">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Small Red Accent Line */}
                  <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight group-hover:text-[#E30613] transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Small Red Line */}
                  <div className="w-12 h-1 bg-[#E30613] my-3 group-hover:w-20 transition-all duration-300" />

                  <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                        <span className="w-1.5 h-1.5 bg-[#E30613] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Interaction Bar */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#E30613] uppercase bg-black px-2.5 py-1 border border-white/10">
                    {service.materials}
                  </span>

                  <button
                    onClick={() => {
                      setSelectedService(isSelected ? null : idx);
                      onQuoteClick();
                    }}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-[#E30613] transition-colors"
                  >
                    <span>ENQUIRE SPEC</span>
                    <ChevronRight className="w-4 h-4 text-[#E30613]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Kicker */}
        <div className="mt-10 p-4 bg-[#141414] border-l-4 border-[#E30613] border-y border-r border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E30613] animate-pulse" />
            <span className="text-white font-bold">ALL FABRICATIONS ADHERE TO IS / ISO STANDARDS</span>
          </div>
          <button
            onClick={onQuoteClick}
            className="text-[#E30613] hover:underline font-bold uppercase tracking-wider"
          >
            Direct Specification Consultation &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
