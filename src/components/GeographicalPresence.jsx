import React, { useState } from 'react';
import { MapPin, Building2, CheckCircle2, ArrowRight, Compass, Sparkles, Layers, Maximize2, Minimize2 } from 'lucide-react';
import { presenceData } from '../data/partners';
import biharMapImg from '../assets/images/bihar_presence_map.png';
import siteBandraImg from '../assets/images/site_bandra_school_building.png';
import siteTepriImg from '../assets/images/site_tepri_structure.png';

export default function GeographicalPresence() {
  const { current } = presenceData;
  const [selectedDistrict, setSelectedDistrict] = useState(current.districts[0]);
  const [mapFrameFit, setMapFrameFit] = useState('contain');

  return (
    <section id="presence" className="py-20 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Real District Site Badges */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-gold-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                Regional Footprint & Operational Reach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Geographical Presence
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Transformative public civil works and institutional projects across major growth corridors in North Bihar.
            </p>
          </div>

          {/* Section Heading Real Site Photos Strip */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-gold-500/30 shadow-xl shrink-0">
            <div className="flex -space-x-4 overflow-hidden p-1">
              <img 
                src={siteBandraImg} 
                alt="Bandra Site" 
                className="w-14 h-14 rounded-xl object-cover border-2 border-navy-950" 
                title="Bandra School Lab Building"
              />
              <img 
                src={siteTepriImg} 
                alt="Tepri Site" 
                className="w-14 h-14 rounded-xl object-cover border-2 border-navy-950" 
                title="Tepri Urf Hasan Nagar Structure"
              />
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>6 Key Districts</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">Muzaffarpur • Sheohar • Sitamarhi • Vaishali • Madhubani • Darbhanga</div>
            </div>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                Rapid Scale Achievement (2026)
              </span>
              <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                From <span className="text-gold-300 font-bold">January 2026 to September 2026</span> in less than a year, Pramol Enterprises has completed <span className="text-gold-400 font-extrabold">more than 50 government and non-government projects</span> and many still going on across multiple high-growth economic regions and key urban corridors of <strong className="text-white">Muzaffarpur, Sheohar, Sitamarhi, Vaishali, Madhubani, and Darbhanga</strong>.
              </p>
            </div>

            <div className="inline-flex flex-col items-center justify-center p-4 rounded-xl bg-navy-950 border border-gold-500/40 text-center min-w-[200px]">
              <span className="text-xs text-slate-400 uppercase tracking-widest">Expansion Status</span>
              <span className="text-lg font-bold text-gold-400 mt-1">Expanding Across More Cities Soon</span>
              <span className="text-[10px] text-emerald-400 font-mono mt-1">● Pan-India Pipeline Active</span>
            </div>
          </div>
        </div>

        {/* Interactive Map & District Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Interactive District Selector */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-gold-400" />
              <span>Core Operational Districts in Bihar</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.districts.map((district) => {
                const isSelected = selectedDistrict.name === district.name;
                return (
                  <div
                    key={district.name}
                    onClick={() => setSelectedDistrict(district)}
                    className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-navy-800 border-gold-500 shadow-lg shadow-gold-500/10 scale-[1.02]'
                        : 'bg-navy-900/80 border-white/10 hover:border-white/20 hover:bg-navy-850'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${isSelected ? 'text-gold-400' : 'text-slate-400'}`} />
                        <h4 className="font-bold text-white text-base">{district.name}</h4>
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-navy-950 text-gold-400 border border-gold-500/30">
                        {district.projectsCount}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {district.role}
                    </p>

                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{district.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected District Deep Dive */}
            <div className="p-5 rounded-xl bg-navy-900 border border-gold-500/30 mt-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>ACTIVE FOCUS CORRIDOR</span>
                <span className="text-gold-400 font-bold">{selectedDistrict.name} District</span>
              </div>
              <p className="text-slate-200 text-sm font-medium">
                {selectedDistrict.role} — Full turnkey site mobilization, civil construction teams, and material logistics deployed.
              </p>
            </div>
          </div>

          {/* Right: Extracted Bihar Regional Map with Adjustable Framing */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/30 bg-navy-900 p-4 shadow-2xl group">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>North Bihar Operational Map</span>
                </div>
                
                {/* Frame control */}
                <button
                  onClick={() => setMapFrameFit(prev => prev === 'contain' ? 'cover' : 'contain')}
                  className="text-[10px] font-mono text-gold-400 bg-navy-950 px-2 py-1 rounded border border-gold-500/20 flex items-center gap-1 hover:text-white"
                >
                  {mapFrameFit === 'contain' ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
                  <span>{mapFrameFit === 'contain' ? 'Fit Whole' : 'Fill'}</span>
                </button>
              </div>

              <div className={`relative rounded-xl overflow-hidden bg-navy-950 flex items-center justify-center p-2 min-h-[380px]`}>
                <img 
                  src={biharMapImg} 
                  alt="Pramol Enterprises Regional Presence Map - Sitamarhi, Sheohar, Muzaffarpur, Vaishali" 
                  className={`w-full max-h-[420px] transition-all duration-300 ${
                    mapFrameFit === 'contain' ? 'object-contain' : 'object-cover h-[420px]'
                  }`}
                />
              </div>

              <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-300">Verified Regional Infrastructure Deployment</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Ground Operations
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
