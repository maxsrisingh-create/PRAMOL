import React, { useState } from 'react';
import { Compass, MapPin, TrendingUp, Building, ArrowUpRight, CheckCircle2, Globe, Shield, Maximize2, Minimize2 } from 'lucide-react';
import { presenceData } from '../data/partners';
import indiaMapImg from '../assets/images/india_expansion_map.png';
import siteTepriImg from '../assets/images/site_tepri_structure.png';

export default function ExpansionStrategy() {
  const { expansion } = presenceData;
  const [selectedState, setSelectedState] = useState(expansion.states[0]);
  const [mapFrameFit, setMapFrameFit] = useState('contain');

  return (
    <section id="expansion" className="py-20 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Real Site Thumbnail */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-gold-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                Growth Horizon & Scale
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              States & Cities We Are Arriving Soon
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              From our established core in Bihar to high-growth infrastructure corridors across Rajasthan, Uttar Pradesh, Jharkhand, and Delhi NCR.
            </p>
          </div>

          {/* Section Heading Visual Badge */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-gold-500/30 shadow-xl shrink-0">
            <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-navy-950 border border-white/10 shrink-0">
              <img 
                src={siteTepriImg} 
                alt="Infrastructure Scaling Model" 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 left-1 text-[8px] font-mono text-gold-400 bg-navy-950/90 px-1 rounded">
                EXPANSION
              </span>
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-gold-400" />
                <span>Pan-India Pipeline</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">Rajasthan • UP • Jharkhand • Delhi</div>
            </div>
          </div>
        </div>

        {/* 4 Strategy Pillars from PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expansion.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-900 border border-white/10 hover:border-gold-500/40 transition-all duration-300 shadow-xl group"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 font-mono font-bold text-sm mb-4 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Map & State Details with Adjustable Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Map Graphic and Visual Legend */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-gold-500/30 bg-navy-900 p-4 shadow-2xl group">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-gold-400" />
                  India Expansion Footprint
                </span>
                
                {/* Frame control */}
                <button
                  onClick={() => setMapFrameFit(prev => prev === 'contain' ? 'cover' : 'contain')}
                  className="text-[10px] font-mono text-gold-400 bg-navy-950 px-2 py-1 rounded border border-gold-500/20 flex items-center gap-1 hover:text-white"
                >
                  {mapFrameFit === 'contain' ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
                  <span>{mapFrameFit === 'contain' ? 'Fit Whole' : 'Fill'}</span>
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-navy-950 p-2 border border-white/10 min-h-[380px] flex items-center justify-center">
                <img
                  src={indiaMapImg}
                  alt="Pramol Enterprises India Expansion Map"
                  className={`w-full max-h-[450px] mx-auto transition-all duration-300 ${
                    mapFrameFit === 'contain' ? 'object-contain' : 'object-cover h-[450px]'
                  }`}
                />
              </div>

              {/* Legend Strip */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-navy-950 border border-emerald-500/30 flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-navy-950 font-bold">✓</span>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Current Presence</div>
                    <div className="text-xs font-bold text-white">Bihar (6 Core Districts)</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-navy-950 border border-gold-500/30 flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-gold-400 flex items-center justify-center text-[8px] text-navy-950 font-bold">●</span>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Arriving Soon</div>
                    <div className="text-xs font-bold text-gold-400">Rajasthan, UP, Jharkhand, Delhi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Expansion State Interactive Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold-400" />
              <span>Target State Strategies</span>
            </h3>

            <div className="space-y-3">
              {expansion.states.map((st) => {
                const isSelected = selectedState.name === st.name;
                return (
                  <div
                    key={st.name}
                    onClick={() => setSelectedState(st)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-navy-800 border-gold-500 shadow-lg shadow-gold-500/10'
                        : 'bg-navy-900/80 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-bold text-white text-base flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                        {st.name}
                      </h4>
                      <span className="text-[10px] font-mono text-gold-400 bg-navy-950 px-2 py-0.5 rounded border border-gold-500/20">
                        {st.timeline}
                      </span>
                    </div>

                    <div className="text-xs text-slate-300 font-medium mb-2">
                      Focus: <span className="text-slate-200">{st.targetSectors}</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
                      <div className="flex gap-1.5">
                        {st.focusCities.slice(0, 3).map((city, idx) => (
                          <span key={idx} className="bg-navy-950 px-1.5 py-0.5 rounded text-[10px] text-slate-300">
                            {city}
                          </span>
                        ))}
                      </div>
                      <span className="text-emerald-400 font-semibold">{st.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Corporate Slogan Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-navy-900 to-navy-850 border border-gold-500/30 text-center">
              <span className="text-xs font-serif italic text-gold-300 block">
                "Where we are today, tomorrow we'll be more."
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono mt-1 block">
                PRAMOL ENTERPRISES STRATEGIC VISION
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
