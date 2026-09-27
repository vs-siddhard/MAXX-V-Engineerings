import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Ruler, Grid } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const EngineeringVisual: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(35); // 0 to 100
  const [showDimensions, setShowDimensions] = useState<boolean>(true);
  const [showGrid, setShowGrid] = useState<boolean>(true);

  // Auto-play animation cycle
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Derived phase
  const currentPhase = progress < 34 ? 1 : progress < 67 ? 2 : 3;

  // Normalized morph factors
  const sheetEntryX = Math.min(progress / 30, 1);
  const dimensionOpacity = progress >= 25 && progress <= 75 ? Math.min((progress - 25) / 10, 1) : progress > 75 ? Math.max(1 - (progress - 75) / 15, 0.4) : 0;
  const transformFactor = progress > 50 ? Math.min((progress - 50) / 40, 1) : 0;

  return (
    <section className={`py-20 border-b-2 border-white/10 relative overflow-hidden transition-colors ${
      isLight ? 'bg-white border-slate-300' : 'bg-[#0B0B0B] border-white/10'
    }`}>
      {/* Blueprint grid backdrop */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
        showGrid
          ? isLight ? 'bg-tech-grid-light opacity-60' : 'bg-tech-grid opacity-70'
          : 'opacity-0'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E30613] mb-2 font-bold">
              <span>INTERACTIVE DEMONSTRATION</span>
              <span className="text-slate-400">/</span>
              <span>ENGINEERING SEQUENCE</span>
            </div>
            <h2 className={`text-2xl sm:text-4xl font-black font-display tracking-tight uppercase ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              From Raw Metal to Precision Component
            </h2>
            <p className={`mt-2 text-sm max-w-xl font-medium ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              An interactive CAD-grade visual model illustrating sheet-metal transformation: dimensioning, scribing, and engineering structural formation.
            </p>
          </div>

          {/* Interactive Controls Bar */}
          <div className={`flex flex-wrap items-center gap-2 p-1.5 rounded-sm border-2 self-start md:self-auto ${
            isLight ? 'bg-slate-100 border-slate-300' : 'bg-[#141414] border-white/15'
          }`}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-sm transition-all ${
                isPlaying
                  ? 'bg-[#E30613] text-white'
                  : isLight ? 'text-slate-700 hover:text-black' : 'text-slate-300 hover:text-white'
              }`}
              title={isPlaying ? 'Pause animation' : 'Play animation'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>

            <button
              onClick={() => {
                setProgress(0);
                setIsPlaying(true);
              }}
              className={`p-1.5 rounded-sm transition-colors ${
                isLight ? 'text-slate-600 hover:text-black hover:bg-slate-200' : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
              title="Reset animation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className={`w-[1px] h-5 mx-1 ${isLight ? 'bg-slate-300' : 'bg-white/15'}`} />

            <button
              onClick={() => setShowDimensions(!showDimensions)}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-bold rounded-sm transition-colors ${
                showDimensions
                  ? 'text-white bg-[#E30613]'
                  : isLight ? 'text-slate-600 hover:text-black' : 'text-slate-400 hover:text-white'
              }`}
              title="Toggle dimension callouts"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>DIMS</span>
            </button>

            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-bold rounded-sm transition-colors ${
                showGrid
                  ? 'text-white bg-[#E30613]'
                  : isLight ? 'text-slate-600 hover:text-black' : 'text-slate-400 hover:text-white'
              }`}
              title="Toggle blueprint grid"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>GRID</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className={`relative rounded-sm p-4 sm:p-8 overflow-hidden border-2 ${
          isLight ? 'bg-white border-slate-300 shadow-lg' : 'bg-[#121212] border-white/15 shadow-2xl'
        }`}>
          
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr" />
          <div className="cad-corner-bl" />
          <div className="cad-corner-br" />

          {/* Sequence Phase Banner */}
          <div className={`flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b ${
            isLight ? 'border-slate-200' : 'border-white/10'
          }`}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-sm bg-[#E30613] text-white">
                PHASE 0{currentPhase}
              </span>
              <span className={`text-sm font-bold uppercase tracking-tight ${isLight ? 'text-black' : 'text-white'}`}>
                {currentPhase === 1 && 'Flat Metal Sheet Stock Placement'}
                {currentPhase === 2 && 'Measurement Calibration & Alignment Lines'}
                {currentPhase === 3 && 'Engineered Component Structural Formation'}
              </span>
            </div>
            
            <div className="text-xs font-mono font-bold text-slate-400">
              SEQUENCE: <span className="text-[#E30613] tabular-nums">{progress}%</span>
            </div>
          </div>

          {/* SVG Animated Canvas */}
          <div className={`relative rounded-sm border min-h-[340px] sm:min-h-[420px] flex items-center justify-center p-4 overflow-hidden ${
            isLight ? 'bg-slate-900 border-slate-700' : 'bg-[#080808] border-white/10'
          }`}>
            
            <svg
              viewBox="0 0 600 360"
              className="w-full h-auto max-w-[620px] select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dynamic Coordinate Axis */}
              <line x1="40" y1="320" x2="560" y2="320" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="40" y1="40" x2="40" y2="320" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              
              {/* Axis Ticks */}
              {[100, 200, 300, 400, 500].map((tick) => (
                <line key={tick} x1={tick} y1="316" x2={tick} y2="324" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              ))}

              {/* Dynamic Group translating on entrance */}
              <g transform={`translate(${(-100 + sheetEntryX * 100)}, 0)`} opacity={sheetEntryX}>
                
                {transformFactor < 0.2 ? (
                  // Flat plate with bevel
                  <g>
                    {/* Top Surface */}
                    <polygon
                      points="120,200 400,120 480,165 200,245"
                      fill="url(#metalPlateGrad)"
                      stroke="#A1A1AA"
                      strokeWidth="1.5"
                    />
                    {/* Front Edge Thickness */}
                    <polygon
                      points="120,200 200,245 200,265 120,220"
                      fill="#262626"
                      stroke="#E30613"
                      strokeWidth="1.2"
                    />
                    {/* Side Edge Thickness */}
                    <polygon
                      points="200,245 480,165 480,185 200,265"
                      fill="#18181B"
                      stroke="#71717A"
                      strokeWidth="1.2"
                    />
                  </g>
                ) : (
                  // Formed Angle / Channel Structural Profile
                  <g className="transition-all duration-300">
                    {/* Horizontal Base Flange */}
                    <polygon
                      points="140,220 380,150 440,180 200,250"
                      fill="url(#metalPlateGrad)"
                      stroke="#E30613"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points="140,220 200,250 200,268 140,238"
                      fill="#262626"
                      stroke="#E30613"
                      strokeWidth="1"
                    />
                    <polygon
                      points="200,250 440,180 440,198 200,268"
                      fill="#18181B"
                      stroke="#E30613"
                      strokeWidth="1"
                    />

                    {/* Vertical Upright Flange (formed up) */}
                    <polygon
                      points="140,220 380,150 380,80 140,150"
                      fill="url(#metalVerticalGrad)"
                      stroke="#E30613"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points="380,150 440,180 440,110 380,80"
                      fill="#262626"
                      stroke="#E30613"
                      strokeWidth="1.2"
                    />

                    {/* Precision Laser-cut circular mounting holes */}
                    <ellipse cx="230" cy="180" rx="14" ry="8" fill="#080808" stroke="#FFFFFF" strokeWidth="1.5" />
                    <ellipse cx="320" cy="150" rx="14" ry="8" fill="#080808" stroke="#FFFFFF" strokeWidth="1.5" />
                  </g>
                )}

                {/* Engineering Measurement Callouts (When dims enabled) */}
                {showDimensions && (
                  <g opacity={dimensionOpacity} className="transition-opacity duration-300">
                    {/* Length measurement */}
                    <line x1="120" y1="185" x2="400" y2="105" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="3 3" />
                    <circle cx="120" cy="185" r="2.5" fill="#E30613" />
                    <circle cx="400" cy="105" r="2.5" fill="#E30613" />
                    <text x="240" y="135" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="600">
                      L = 3000 mm [±0.05]
                    </text>

                    {/* Width measurement */}
                    <line x1="415" y1="110" x2="495" y2="155" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="3 3" />
                    <circle cx="415" cy="110" r="2.5" fill="#E30613" />
                    <circle cx="495" cy="155" r="2.5" fill="#E30613" />
                    <text x="465" y="125" fill="#FFFFFF" fontSize="11" fontFamily="monospace">
                      W = 1500 mm
                    </text>

                    {/* Thickness gauge callout */}
                    <line x1="100" y1="210" x2="115" y2="210" stroke="#E30613" strokeWidth="1.5" />
                    <text x="45" y="214" fill="#E30613" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      T: 20 mm
                    </text>

                    {/* Alignment Laser Crosshair */}
                    <circle cx="280" cy="190" r="16" stroke="#E30613" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="260" y1="190" x2="300" y2="190" stroke="#E30613" strokeWidth="1" />
                    <line x1="280" y1="170" x2="280" y2="210" stroke="#E30613" strokeWidth="1" />
                    <text x="305" y="194" fill="#E30613" fontSize="9" fontFamily="monospace" fontWeight="bold">DATUM REF</text>
                  </g>
                )}

              </g>

              {/* Shading Gradients */}
              <defs>
                <linearGradient id="metalPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#52525B" />
                  <stop offset="50%" stopColor="#3F3F46" />
                  <stop offset="100%" stopColor="#27272A" />
                </linearGradient>
                <linearGradient id="metalVerticalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#3F3F46" />
                  <stop offset="100%" stopColor="#71717A" />
                </linearGradient>
              </defs>
            </svg>

            {/* Live Status Indicators overlay */}
            <div className="absolute top-4 left-4 flex flex-col gap-1 text-[11px] font-mono text-slate-300 bg-black/85 p-2.5 rounded-sm border border-white/15 backdrop-blur-sm">
              <span className="text-white font-bold">TOLERANCE INSPECTION</span>
              <span>PARALLELISM: ±0.04mm</span>
              <span>SURFACE: CLEAN MILLED</span>
              <span className="text-[#E30613] font-bold">MATERIAL: MS / SS / ALU / GI</span>
            </div>

            <div className="absolute bottom-4 right-4 text-[11px] font-mono text-slate-400 bg-black/70 px-2 py-1 rounded-sm border border-white/10">
              MAXX V ENGINEERINGS · AUTONAGAR GUNTUR
            </div>
          </div>

          {/* Interactive Scrubbing Slider */}
          <div className={`mt-6 pt-4 border-t space-y-2 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400">
              <span>01. SHEET FEED</span>
              <span>02. CALIBRATION &amp; SCRIBING</span>
              <span>03. FORMED COMPONENT</span>
            </div>
            
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => {
                setProgress(Number(e.target.value));
                setIsPlaying(false);
              }}
              className="w-full h-2 bg-slate-800 rounded-sm appearance-none cursor-pointer accent-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613]/50"
              aria-label="Simulation progress scrubber"
            />
            
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
              <span>Click or drag slider to inspect transformation timeline</span>
              <span>CNC Sheet Metal Simulation</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
