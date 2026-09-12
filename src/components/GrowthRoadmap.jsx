import React, { useState } from 'react';
import { Milestone, CheckCircle2, ChevronRight, Target, Shield, Rocket, Cpu, TrendingUp } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import mothaRebarImg from '../assets/images/site_motha_reinforcement.png';
import bandraImg from '../assets/images/site_bandra_school_building.png';

export default function GrowthRoadmap() {
  const { growthRoadmap } = companyProfile;
  const [activePhase, setActivePhase] = useState(0);

  const phaseIcons = [Target, Cpu, Rocket];

  return (
    <section id="roadmap" className="py-20 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Site Photo Badge */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-gold-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                Strategic Trajectory
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Strategic Growth Roadmap
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              A defined three-phase vision advancing from regional public sector excellence to national infrastructure leadership.
            </p>
          </div>

          {/* Section Heading Site Photo Card */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-gold-500/30 shadow-xl shrink-0">
            <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-navy-950 border border-white/10 shrink-0">
              <img 
                src={mothaRebarImg} 
                alt="Rebar Slab Milestone" 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 left-1 text-[8px] font-mono text-gold-400 bg-navy-950/90 px-1 rounded">
                PHASE 01
              </span>
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-gold-400" />
                <span>100+ Goal Every Year</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">100% Confirmed Annual Pipeline</div>
            </div>
          </div>
        </div>

        {/* Phase Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {growthRoadmap.map((item, index) => {
            const IconComponent = phaseIcons[index] || Target;
            const isSelected = activePhase === index;

            return (
              <div
                key={item.phase}
                onClick={() => setActivePhase(index)}
                className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-gradient-to-b from-navy-850 to-navy-900 border-gold-500 shadow-2xl shadow-gold-500/10 scale-[1.02]'
                    : 'bg-navy-900/80 border-white/10 hover:border-white/20 hover:bg-navy-850/60'
                }`}
              >
                {/* Top Badge */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded border uppercase ${
                        isSelected 
                          ? 'bg-gold-500 text-navy-950 border-gold-400' 
                          : 'bg-navy-950 text-gold-400 border-gold-500/30'
                      }`}>
                        Phase {item.phase}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {item.timeline}
                      </span>
                    </div>

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-gold-500 text-navy-950' : 'bg-navy-950 text-gold-400 border border-gold-500/20'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-400 mb-3 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{item.status}</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Milestones list */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Strategic Milestones:
                    </div>
                    <ul className="space-y-1.5">
                      {item.milestones.map((m, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>{isSelected ? 'Currently Viewing' : 'Click to Focus'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-gold-400' : ''}`} />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
