import React from 'react';
import { Quote, ShieldCheck, Award, Star, CheckCircle, HardHat } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import siteHarkhauliBrick from '../assets/images/site_harkhauli_brickwork.png';

export default function ClientTrust() {
  const { clientTrust } = companyProfile;

  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Site Photo Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 mb-12 border-b border-white/10 gap-4">
          <div className="text-center sm:text-left space-y-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest">
              Institutional Reputation
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Client Trust & Endorsements
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-navy-900/90 p-2 rounded-xl border border-gold-500/30 shadow-lg">
            <img 
              src={siteHarkhauliBrick} 
              alt="Harkhauli Verified Execution" 
              className="w-16 h-12 rounded-lg object-cover" 
            />
            <div className="text-[11px] pr-2">
              <div className="text-white font-bold">Verified Field Quality</div>
              <div className="text-slate-400 font-mono">Government JE Approved</div>
            </div>
          </div>
        </div>

        {/* Testimonial Feature Card */}
        <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-navy-850/90 border border-gold-500/40 shadow-2xl backdrop-blur-xl">
          
          {/* Large Gold Quote Icon */}
          <div className="absolute -top-6 left-8 sm:left-12 w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-600 text-navy-950 flex items-center justify-center shadow-xl shadow-gold-500/30">
            <Quote className="w-8 h-8 fill-navy-950" />
          </div>

          <div className="space-y-8 pt-4">
            
            {/* Quote Body */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-slate-100 leading-relaxed font-normal">
              "{clientTrust.quote}"
            </blockquote>

            {/* Attribution Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              
              <div className="space-y-1">
                <div className="text-sm font-bold text-gold-400 uppercase tracking-wider font-mono">
                  — BUSINESS PARTNERS & GOVERNMENT JUNIOR ENGINEERS (JE)
                </div>
                <div className="text-xs text-slate-400">
                  Official Endorsement Recorded in Company Profile (Page 15 / 20)
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-950 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Quality Execution</span>
              </div>

            </div>

            {/* Sub-credibility badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Repeat Public Tenders Awarded</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Joint Venture Reliability</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Strict PWD Specification Adherence</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
