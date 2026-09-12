import React, { useState } from 'react';
import { Cpu, Users, TrendingUp, ShieldCheck, Wrench, CheckCircle, Maximize2, Minimize2, HardHat } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import strengthsSiteImg from '../assets/images/core_strengths_site.png';
import tepriSiteImg from '../assets/images/site_tepri_structure.png';

const strengthIcons = {
  "Cpu": Cpu,
  "Users": Users,
  "TrendingUp": TrendingUp,
  "ShieldCheck": ShieldCheck
};

export default function CoreStrengths() {
  const { coreStrengths } = companyProfile;
  const [fleetFrameFit, setFleetFrameFit] = useState('cover');

  return (
    <section id="strengths" className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Site Photo Badge */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-gold-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                Core Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Our Core Strengths
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Cutting-edge heavy machinery, veteran engineers, strict financial rigor, and zero-compromise safety protocols across all project sites.
            </p>
          </div>

          {/* Section Heading Visual Badge */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-gold-500/30 shadow-xl shrink-0">
            <div className="relative w-28 h-16 rounded-xl overflow-hidden bg-navy-950 border border-white/10 shrink-0">
              <img 
                src={strengthsSiteImg} 
                alt="Earthmoving Fleet Deployment" 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 left-1 text-[8px] font-mono text-gold-400 bg-navy-950/90 px-1 rounded">
                FLEET
              </span>
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <Wrench className="w-3.5 h-3.5 text-gold-400" />
                <span>Heavy Machinery</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">100% Mechanized Precision</div>
            </div>
          </div>
        </div>

        {/* Top: 4 Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coreStrengths.map((item) => {
            const Icon = strengthIcons[item.icon] || Wrench;
            return (
              <div
                key={item.number}
                className="p-7 rounded-2xl bg-navy-850/90 border border-white/10 hover:border-gold-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-gold-400">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-gold-400/90 mb-3 uppercase tracking-wider">
                    {item.subtitle}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-gold-400 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-500" />
                  <span>Operational Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Visual Fleet & Adjustable Frame */}
        <div className="rounded-2xl overflow-hidden border border-gold-500/30 bg-navy-900 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
                Fleet Deployment & Rapid Mobilization
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                Mechanized Execution for Faster, Zero-Defect Handover
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our heavy machinery fleet, integrated with modern transit mixers, earthmovers, high-pressure concrete pumps, and compaction rollers, allows Pramol Enterprises to complete public works well ahead of contractual deadlines while maintaining rigorous QA/QC protocols.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-lg bg-navy-950 border border-white/10">
                  <div className="text-gold-400 font-extrabold text-xl">100%</div>
                  <div className="text-[11px] text-slate-400">Mechanized Grading</div>
                </div>
                <div className="p-3 rounded-lg bg-navy-950 border border-white/10">
                  <div className="text-white font-extrabold text-xl">24/7</div>
                  <div className="text-[11px] text-slate-400">Site Supervision</div>
                </div>
                <div className="p-3 rounded-lg bg-navy-950 border border-white/10">
                  <div className="text-emerald-400 font-extrabold text-xl">Zero</div>
                  <div className="text-[11px] text-slate-400">Structural Failures</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] bg-navy-950 p-2 flex flex-col justify-center">
              {/* Frame control */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-navy-950/90 backdrop-blur-md px-2 py-1 rounded border border-white/10 text-[10px]">
                <button
                  onClick={() => setFleetFrameFit(prev => prev === 'cover' ? 'contain' : 'cover')}
                  className="font-bold text-gold-400 hover:text-white flex items-center gap-1"
                >
                  {fleetFrameFit === 'cover' ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
                  <span>{fleetFrameFit === 'cover' ? 'Fit Whole' : 'Fill'}</span>
                </button>
              </div>

              <div className={`w-full h-64 sm:h-72 ${fleetFrameFit === 'contain' ? 'flex items-center justify-center p-2' : ''}`}>
                <img 
                  src={strengthsSiteImg} 
                  alt="Pramol Enterprises Machinery in Action" 
                  className={`w-full h-full rounded-xl ${fleetFrameFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                />
              </div>
              <div className="p-2 text-center text-xs text-slate-400 font-mono">
                Field Earthmoving & Compactor Machinery Fleet
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
