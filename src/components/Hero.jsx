import React from 'react';
import { ArrowRight, Building2, Shield, Award, CheckCircle2, ChevronDown, Compass, HardHat, TrendingUp, Sparkles } from 'lucide-react';
import logoImg from '../assets/logos/pramol_logo_main.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-navy-950 pt-8 pb-16">
      {/* Background Blueprint Grid and Ambient Lighting */}
      <div className="absolute inset-0 blueprint-grid opacity-25"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-gold-500/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase shadow-inner">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              Engineering Excellence • Infrastructure Contractor
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-extrabold tracking-tight text-white leading-none">
                <span className="block text-slate-100">PRAMOL ENTERPRISES</span>
                <span className="gold-gradient-text text-3xl sm:text-4xl xl:text-5xl font-bold tracking-normal block mt-2">
                  PRIVATE LIMITED
                </span>
              </h1>
              
              <div className="pt-2">
                <p className="text-xl sm:text-2xl font-serif italic text-gold-300/90 font-medium">
                  "Building the Infrastructure of Tomorrow"
                </p>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Delivering high-magnitude public and private sector civil works, landmark institutional facilities, and large-scale irrigation infrastructure across Bihar and rapidly expanding nationwide.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/10 backdrop-blur-sm shadow-lg">
                <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-display">50+</div>
                <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Executed Projects</div>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/10 backdrop-blur-sm shadow-lg">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">6</div>
                <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Active Districts</div>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/10 backdrop-blur-sm shadow-lg">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">100+</div>
                <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Annual Target Goal</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-gold-500 via-amber-500 to-amber-600 text-navy-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-gold-500/25 hover:shadow-gold-500/45 hover:scale-[1.02] transition-all"
              >
                <Building2 className="w-4 h-4 text-navy-950" />
                <span>View Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-navy-900/80 hover:bg-navy-800 text-slate-200 border border-gold-500/30 hover:border-gold-400 font-semibold text-sm uppercase tracking-wider transition-all shadow-md"
              >
                <span>Strategic Partnerships</span>
              </a>
            </div>

            {/* Founded on Highlight */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <Shield className="w-4 h-4 text-gold-500" />
              <span>Incorporated: <strong className="text-slate-200">23rd December 2024</strong> | Certified Government Turnkey Contractor</span>
            </div>
          </div>

          {/* Right Column: Corporate Identity & Engineering Capabilities Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Corporate Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 bg-gradient-to-b from-navy-900/95 via-navy-900/90 to-navy-950 p-8 shadow-2xl space-y-6 backdrop-blur-xl">
                
                {/* Brand Emblem Showcase with Realistic Ambient Lighting */}
                <div className="relative py-6 px-4 rounded-2xl bg-gradient-to-b from-navy-950/80 to-navy-900/80 border border-gold-500/30 flex items-center justify-center overflow-hidden shadow-2xl group">
                  {/* Subtle Ambient Golden Glow Behind Logo */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-gold-500/5 to-transparent pointer-events-none"></div>
                  
                  {/* High Definition Transparent Logo with 3D Depth Shadow */}
                  <img 
                    src={logoImg} 
                    alt="Pramol Enterprises Official Logo" 
                    className="h-28 sm:h-32 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_8px_20px_rgba(234,179,8,0.35)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  />
                </div>

                <div className="text-center space-y-1.5">
                  <h3 className="text-xl font-display font-extrabold text-white tracking-wider uppercase">
                    Pramol Enterprises Pvt. Ltd.
                  </h3>
                  <p className="text-xs text-gold-400 font-serif italic tracking-wide">
                    "Building the Infrastructure of Tomorrow"
                  </p>
                </div>

                {/* Key Institutional Capabilities */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-navy-950 border border-white/5 text-xs">
                    <div className="flex items-center gap-2 text-slate-200 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Govt. Certified Turnkey Execution</span>
                    </div>
                    <span className="font-mono text-gold-400 font-bold">100% Strict QA</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-navy-950 border border-white/5 text-xs">
                    <div className="flex items-center gap-2 text-slate-200 font-semibold">
                      <HardHat className="w-4 h-4 text-gold-400" />
                      <span>Zero-Accident Safety Standard</span>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold">Compliant</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-navy-950 border border-white/5 text-xs">
                    <div className="flex items-center gap-2 text-slate-200 font-semibold">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <span>Rapid Multi-District Footprint</span>
                    </div>
                    <span className="font-mono text-slate-300 font-bold">50+ Handed Over</span>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>CIN / MCA Registered</span>
                  <span className="text-gold-400 font-bold">State of Bihar, India</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 hover:text-gold-400 transition-colors cursor-pointer group"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 group-hover:text-gold-400">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold-400" />
      </a>
    </section>
  );
}
