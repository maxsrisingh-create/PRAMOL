import React from 'react';
import { ShieldCheck, Award, HardHat, Leaf, CheckCircle2 } from 'lucide-react';
import { companyProfile } from '../data/companyData';

const valueIcons = {
  "01": ShieldCheck,
  "02": Award,
  "03": HardHat,
  "04": Leaf,
};

export default function CoreValues() {
  const { coreValues } = companyProfile;

  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            Operating Ethos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Our Core Values
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            The unwavering principles that direct our corporate decisions, construction operations, and client relationships.
          </p>
        </div>

        {/* 4 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => {
            const IconComponent = valueIcons[val.number] || Award;
            return (
              <div
                key={val.number}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 border border-white/10 hover:border-gold-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Accent line top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent group-hover:via-gold-400 transition-all"></div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-gold-500/80 group-hover:text-gold-400 group-hover:scale-105 transition-all">
                      {val.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400 group-hover:text-gold-400 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
