import React from 'react';
import { CheckCircle2, Shield, Award, Zap, HardHat, Building, Scale, ArrowRight } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import harkhauliImg from '../assets/images/site_harkhauli_brickwork.png';
import bandraImg from '../assets/images/site_bandra_school_building.png';

export default function WhyChooseUs() {
  const { whyChooseUs } = companyProfile;

  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Site Photo Badge */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-gold-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                Institutional Advantages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Why Choose Pramol Enterprises
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Engineered reliability, turnkey execution capabilities, and verified government compliance that institutional clients and JV partners depend on.
            </p>
          </div>

          {/* Section Heading Site Photo Card */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-gold-500/30 shadow-xl shrink-0">
            <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-navy-950 border border-white/10 shrink-0">
              <img 
                src={bandraImg} 
                alt="Bandra Handover Site" 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 left-1 text-[8px] font-mono text-gold-400 bg-navy-950/90 px-1 rounded">
                VERIFIED
              </span>
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-gold-400" />
                <span>Zero-Defect Delivery</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">50+ Completed Projects</div>
            </div>
          </div>
        </div>

        {/* 9 Pillars Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-850/90 border border-white/10 hover:border-gold-500/40 hover:bg-navy-850 transition-all duration-300 shadow-xl group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all shadow-md">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Ready to Accelerate Your Next Infrastructure Venture?
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Partner with Pramol Enterprises Private Limited Today
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              We welcome tender joint ventures, subcontracting alliances, and government department consultations for fast-track execution.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all shrink-0"
          >
            <span>Initiate Collaboration</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
