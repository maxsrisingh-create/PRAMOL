import React from 'react';
import { Calendar, CheckCircle2, Award, Layers, ShieldCheck, TrendingUp } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export default function CompanyOverview() {
  const { overview, foundedDate } = companyProfile;

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-10 bg-gold-500"></div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Company Profile & Engineering DNA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {overview.title}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Official Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl text-slate-100 font-medium leading-relaxed border-l-4 border-gold-500 pl-4 py-1">
              {overview.headline}
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              {overview.description}
            </p>

            {/* Official Incorporation Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 shadow-inner">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Official Incorporation</div>
                  <div className="text-white font-bold text-lg">Founded on {foundedDate}</div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>MCA Registered • CIN Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Core Engineering Pillars & Benchmarks */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-navy-850/90 border border-white/10 hover:border-gold-500/40 transition-all duration-300 shadow-lg group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Layers className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1.5">Proven Track Record</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Successfully executing complex, high-magnitude projects across diverse terrains and critical public sectors with meticulous engineering control.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-850/90 border border-white/10 hover:border-gold-500/40 transition-all duration-300 shadow-lg group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Award className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1.5">Uncompromising Standards</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Deeply committed to uncompromising quality, strict occupational safety protocols, verified raw material grades, and guaranteed on-time project handover.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-gold-500/25 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-gold-400 font-extrabold text-2xl font-display mb-1">
                  <ShieldCheck className="w-6 h-6" />
                  <span>100%</span>
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Quality Tested</div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Verified cube compression & structural load tests.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-850 border border-gold-500/25 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-gold-400 font-extrabold text-2xl font-display mb-1">
                  <TrendingUp className="w-6 h-6" />
                  <span>Pan-India</span>
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Scaling Reach</div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Rapidly expanding civil execution capabilities.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
