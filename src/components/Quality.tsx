import React from 'react';
import { Target, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Quality: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const commitments = [
    {
      title: 'Precision',
      tag: 'TOLERANCES',
      desc: 'Micro-calibrated CNC cutting & forming ensuring exact geometry to client blueprints.',
      icon: Target,
    },
    {
      title: 'Consistency',
      tag: 'REPEATABILITY',
      desc: 'Uniform dimensional accuracy maintained seamlessly across single prototypes and high-volume runs.',
      icon: ShieldCheck,
    },
    {
      title: 'Quality',
      tag: 'INTEGRITY',
      desc: 'Flawless edge cleanliness, verified bend angles, and deburred surface finishes on all alloy grades.',
      icon: CheckCircle2,
    },
    {
      title: 'Timely Delivery',
      tag: 'ON SCHEDULE',
      desc: 'Disciplined workshop turnaround dispatched directly from our central IDA Autonagar, Guntur facility.',
      icon: Clock,
    },
  ];

  return (
    <section className={`py-16 border-b-2 border-white/10 relative transition-colors ${
      isLight ? 'bg-white border-slate-300' : 'bg-[#0E0E0E] text-white border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-black border border-[#E30613] text-[#E30613] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            VERIFIED BRAND PROMISE
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black font-display tracking-tight uppercase ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            QUALITY. <span className="text-[#E30613]">ON TIME.</span>
          </h2>
          <div className="w-16 h-1 bg-[#E30613] mx-auto my-3" />
          <p className={`text-xs sm:text-sm font-medium ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Core principles anchoring every sheet-metal cut, bend, and fabrication at MAXX V ENGINEERINGS.
          </p>
        </div>

        {/* 4 Minimalist Quality Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`border-2 p-6 rounded-sm relative flex flex-col justify-between group hover:border-[#E30613] transition-all ${
                  isLight
                    ? 'bg-slate-50 border-slate-300 shadow-sm'
                    : 'bg-[#141414] border-white/15 shadow-xl'
                }`}
              >
                <div className="cad-corner-tl" />
                <div className="cad-corner-tr" />
                <div className="cad-corner-bl" />
                <div className="cad-corner-br" />

                <div>
                  <div className="w-10 h-10 rounded-sm bg-black border border-white/15 flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono text-[#E30613] font-bold uppercase tracking-wider block">
                    {item.tag}
                  </span>

                  <h3 className={`text-lg font-black font-display uppercase mt-1 group-hover:text-[#E30613] transition-colors ${
                    isLight ? 'text-black' : 'text-white'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`mt-2 text-xs leading-relaxed ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t text-[10px] font-mono ${
                  isLight ? 'border-slate-200 text-slate-500' : 'border-white/10 text-slate-500'
                }`}>
                  CORE VALUE
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
