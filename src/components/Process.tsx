import React, { useState } from 'react';
import { PenTool, Zap, Cpu, Hammer, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Process: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'DESIGN',
      subtitle: 'CAD Blueprints & Nesting',
      desc: 'Customer blueprints, CAD models (DWG, DXF, PDF), or physical samples are reviewed. Computerized nesting ensures optimal material yield.',
      icon: PenTool,
    },
    {
      number: '02',
      title: 'LASER CUT',
      subtitle: 'Precision Beam Profiling',
      desc: 'High-power CNC laser beam slices complex internal cutouts, mounting holes, and outer profiles with strict edge accuracy.',
      icon: Zap,
    },
    {
      number: '03',
      title: 'CNC BEND',
      subtitle: 'Multi-Axis Press Brake Forming',
      desc: 'Precision hydraulic CNC press brake bends flanges, channels, and complex enclosures to exact angular specifications.',
      icon: Cpu,
    },
    {
      number: '04',
      title: 'FABRICATE',
      subtitle: 'Fit-up & Assembly',
      desc: 'Hardware insertion, structural welding, seam deburring, and custom fabrication tailored to customer project parameters.',
      icon: Hammer,
    },
    {
      number: '05',
      title: 'PRODUCTION',
      subtitle: 'Inspection & Dispatch',
      desc: 'Rigorous tolerance inspection and surface quality checks before packaging and on-time dispatch from Autonagar, Guntur.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="process" className={`py-20 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-slate-50 border-slate-300' : 'bg-[#0B0B0B] text-white border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
            <span>END-TO-END MANUFACTURING</span>
            <span className="text-slate-400">/</span>
            <span>WORKFLOW SEQUENCE</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black font-display tracking-tight uppercase ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            FROM DESIGN TO PRODUCTION
          </h2>
          <p className={`mt-3 text-base font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            A seamless industrial progression from initial blueprint through cutting, forming, fabrication, and finished production.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`border-2 p-5 rounded-sm relative cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-[#E30613] shadow-lg ' + (isLight ? 'bg-white' : 'bg-[#181818]')
                    : isLight
                      ? 'bg-white border-slate-300 hover:border-slate-400'
                      : 'bg-[#121212] border-white/15 hover:border-white/30'
                }`}
              >
                <div className="cad-corner-tl" />
                <div className="cad-corner-tr" />
                <div className="cad-corner-bl" />
                <div className="cad-corner-br" />

                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold mb-3">
                    <span className="text-[#E30613] text-sm">{step.number}</span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#E30613]' : 'text-slate-400'}`} />
                  </div>

                  <h3 className={`text-base font-black font-display uppercase tracking-tight ${
                    isLight ? 'text-black' : 'text-white'
                  }`}>
                    {step.title}
                  </h3>

                  <div className={`text-[11px] font-mono font-bold mt-1 ${
                    isActive ? 'text-[#E30613]' : isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {step.subtitle}
                  </div>

                  <p className={`mt-3 text-xs leading-relaxed ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {step.desc}
                  </p>
                </div>

                <div className={`mt-4 pt-2 border-t text-[10px] font-mono ${
                  isLight ? 'border-slate-200 text-slate-500' : 'border-white/10 text-slate-500'
                }`}>
                  STAGE {idx + 1} OF 5
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
