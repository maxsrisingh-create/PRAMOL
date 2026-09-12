import React from 'react';
import { Compass, Rocket, Globe, Shield, Sparkles, CheckCircle2, HardHat } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import mothaColImg from '../assets/images/site_motha_columns.png';
import mothaRebarImg from '../assets/images/site_motha_reinforcement.png';

export default function VisionMission() {
  const { visionMission, coreValues } = companyProfile;

  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden border-b border-white/5">
      {/* Ambient background lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Site Photo Badge */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-gold-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                Foundational Principles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Vision & Mission
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Guiding our engineering pursuits and shaping next-generation sustainable civil infrastructure.
            </p>
          </div>

          {/* Section Heading Site Photo Card */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-gold-500/30 shadow-xl shrink-0">
            <div className="relative w-28 h-16 rounded-xl overflow-hidden bg-navy-950 border border-white/10 shrink-0">
              <img 
                src={mothaColImg} 
                alt="Motha Urf Chak Harun Structural Column Casting" 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 left-1 text-[8px] font-mono text-gold-400 bg-navy-950/90 px-1 rounded">
                COLUMNS
              </span>
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <HardHat className="w-3.5 h-3.5 text-gold-400" />
                <span>Motha Chak Site</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">Lat 26.0924° Long 85.3016°</div>
            </div>
          </div>
        </div>

        {/* Split Screen Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-navy-850 via-navy-900 to-navy-950 border border-gold-500/30 shadow-2xl relative overflow-hidden group hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-4 right-6 text-7xl font-display font-black text-white/5 pointer-events-none group-hover:text-gold-500/10 transition-colors">
              01
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 text-navy-950 flex items-center justify-center shadow-lg shadow-gold-500/20 font-bold">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold block">
                    01 // STRATEGIC VISION
                  </span>
                  <span className="text-xs text-slate-400">Global Horizon & Enduring Impact</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug group-hover:text-gold-300 transition-colors">
                {visionMission.vision.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed font-normal">
                {visionMission.vision.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-navy-950 text-gold-400 border border-gold-500/20 text-xs font-medium">
                #EnduringValue
              </span>
              <span className="px-3 py-1 rounded-full bg-navy-950 text-slate-300 border border-white/10 text-xs font-medium">
                #ResilientCommunities
              </span>
              <span className="px-3 py-1 rounded-full bg-navy-950 text-slate-300 border border-white/10 text-xs font-medium">
                #UncompromisingStandards
              </span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-navy-850 via-navy-900 to-navy-950 border border-gold-500/30 shadow-2xl relative overflow-hidden group hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-4 right-6 text-7xl font-display font-black text-white/5 pointer-events-none group-hover:text-gold-500/10 transition-colors">
              02
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 font-bold">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold block">
                    02 // CORE MISSION
                  </span>
                  <span className="text-xs text-slate-400">Engineering Innovation & Superior Execution</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
                {visionMission.mission.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed font-normal">
                {visionMission.mission.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-navy-950 text-blue-400 border border-blue-500/20 text-xs font-medium">
                #InnovativeEngineering
              </span>
              <span className="px-3 py-1 rounded-full bg-navy-950 text-slate-300 border border-white/10 text-xs font-medium">
                #AdvancedConstruction
              </span>
              <span className="px-3 py-1 rounded-full bg-navy-950 text-slate-300 border border-white/10 text-xs font-medium">
                #SustainablePractices
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Core Values Quick Bar */}
        <div className="p-4 rounded-xl bg-navy-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>FOUNDATIONAL CORE VALUES:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
            {coreValues.map((val) => (
              <div 
                key={val.number}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-white/5 text-xs text-slate-200"
              >
                <span className="font-mono text-gold-400 font-bold">{val.number}.</span>
                <span className="font-semibold">{val.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
