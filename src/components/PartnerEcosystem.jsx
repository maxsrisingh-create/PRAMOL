import React from 'react';
import { Network, Handshake, Shield, Sparkles, Building, CheckCircle2, ArrowUpRight, Award } from 'lucide-react';
import { partnerCompanies, ecosystemPillars } from '../data/partners';

export default function PartnerEcosystem() {
  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-white/10 space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-8 bg-gold-500"></div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Corporate Alliances & Technology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Our Partner Companies
          </h2>
          <p className="text-gold-400 font-serif italic text-base sm:text-lg">
            "Trusted Partnerships. Stronger Execution."
          </p>
        </div>

        {/* 3 Partner Companies Cards - Professional Clean UI focused on Logo & Brand Names */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnerCompanies.map((partner) => (
            <div
              key={partner.id}
              className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-navy-850 to-navy-900 border border-white/10 hover:border-gold-500/60 shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle gold top border glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent group-hover:via-gold-400 transition-all"></div>

              <div className="space-y-6">
                {/* Clean Crisp Logo Display Stage */}
                <div className="h-28 w-full rounded-2xl bg-white p-4 flex items-center justify-center border border-white/30 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Company Name & Sector */}
                <div className="space-y-2.5 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-navy-950 text-gold-400 border border-gold-500/20 text-[10px] font-mono font-bold uppercase tracking-wider">
                    {partner.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-gold-300 transition-colors leading-tight">
                    {partner.name}
                  </h3>
                </div>
              </div>

              {/* Bottom Verified Alliance Strip */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-gold-500" />
                  <span>Strategic Syndicate</span>
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Partnered</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Ecosystem Pillars Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-8 bg-gold-500"></div>
            <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
              Strategic Partnership Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 rounded-2xl bg-navy-900 border border-white/5 hover:border-gold-500/30 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-gold-400">
                    {pillar.number} // {pillar.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                </div>
                <h4 className="text-white font-bold text-base mb-2">
                  {pillar.title}
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
