import React, { useState } from 'react';
import { Building2, ShieldCheck, CheckCircle2, Award, Droplet, FlaskConical, Maximize2, Minimize2, ChevronRight, FileText } from 'lucide-react';
import { featuredSchemes } from '../data/projects';
import bepcRfpImg from '../assets/images/bepc_lab_project_rfp.png';
import nalkupImg from '../assets/images/mukhyamantri_nalkup_yojana.png';

export default function FeaturedProjects() {
  const [frameModes, setFrameModes] = useState({
    'mukhyamantri-nalkup-yojana': 'contain',
    'bepc-school-laboratories': 'contain'
  });

  const toggleSchemeFrame = (id) => {
    setFrameModes(prev => ({
      ...prev,
      [id]: prev[id] === 'cover' ? 'contain' : 'cover'
    }));
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Real RFP & Scheme Photo Badges */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-gold-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                Flagship Public Infrastructure
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Featured Landmark Projects
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Signature state infrastructure initiatives empowering rural agriculture and modernizing public education laboratories.
            </p>
          </div>

          {/* Section Heading Scheme Visual Badge */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-gold-500/30 shadow-xl shrink-0">
            <div className="flex -space-x-4 overflow-hidden p-1">
              <img 
                src={nalkupImg} 
                alt="Saat Nischay-2 Scheme" 
                className="w-14 h-14 rounded-xl object-cover border-2 border-navy-950" 
              />
              <img 
                src={bepcRfpImg} 
                alt="BEPC Labs Tender" 
                className="w-14 h-14 rounded-xl object-cover border-2 border-navy-950" 
              />
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-gold-400" />
                <span>State Initiatives</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">Mukhyamantri Nalkup • BEPC Labs</div>
            </div>
          </div>
        </div>

        {/* 2 Flagship Government Projects Showcase with Prominent Template Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredSchemes.map((scheme) => {
            const isNalkup = scheme.id === 'mukhyamantri-nalkup-yojana';
            const Icon = isNalkup ? Droplet : FlaskConical;
            const isContain = frameModes[scheme.id] === 'contain';

            return (
              <div
                key={scheme.id}
                className="rounded-3xl bg-navy-850 border-2 border-gold-500/30 overflow-hidden shadow-2xl hover:border-gold-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header on Template: Prominent Initiative & Project Titles */}
                  <div className="p-6 sm:p-8 bg-gradient-to-b from-navy-900 via-navy-850 to-navy-850 border-b border-white/10 space-y-4">
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="px-3.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-xs font-bold tracking-wider uppercase font-mono shadow-sm">
                        {scheme.tag}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>{scheme.status}</span>
                      </span>
                    </div>

                    {/* Government / Department Initiative Banner */}
                    <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-navy-950/90 border border-gold-500/25">
                      <div className="p-1.5 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gold-300 tracking-wide">
                        {scheme.stateInitiative}
                      </span>
                    </div>

                    {/* Main Project Title on Template */}
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-gold-300 transition-colors leading-tight">
                        {scheme.shortTitle}
                      </h3>
                      <p className="text-xs font-mono text-slate-400">
                        Official Scope: {scheme.title}
                      </p>
                    </div>
                  </div>

                  {/* Clean Visual / Photographic Evidence Stage */}
                  <div className="p-4 sm:p-6 bg-navy-950/60 border-b border-white/5">
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">Official Scheme & Field Document</span>
                      <button
                        onClick={() => toggleSchemeFrame(scheme.id)}
                        className="px-2.5 py-1 rounded-lg bg-navy-900 text-gold-400 border border-gold-500/30 text-[11px] font-bold flex items-center gap-1.5 hover:text-white hover:bg-navy-800 transition-colors"
                        title="Toggle full uncropped view vs cover"
                      >
                        {isContain ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                        <span>{isContain ? 'Fill Card' : '100% Uncropped'}</span>
                      </button>
                    </div>

                    <div className={`relative w-full rounded-2xl overflow-hidden bg-navy-950 border border-white/10 flex items-center justify-center ${
                      isContain ? 'h-72 sm:h-80 p-2 bg-black/60' : 'h-64 sm:h-72'
                    }`}>
                      <img
                        src={scheme.image}
                        alt={scheme.title}
                        className={`w-full h-full max-w-full max-h-full transition-transform duration-500 ${
                          isContain ? 'object-contain rounded-xl' : 'object-cover group-hover:scale-105'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {scheme.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Execution Scope & Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {scheme.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Meta */}
                <div className="p-6 bg-navy-900 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                  <div>
                    <span className="font-semibold text-slate-300">Client / Authority: </span>
                    <span className="text-slate-200">{scheme.client}</span>
                  </div>
                  <div className="text-gold-400 font-medium font-mono">
                    {scheme.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Guarantee Highlight */}
        <div className="p-6 rounded-xl bg-navy-900/90 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-bold block">Rigorous Public Sector Quality Standards</span>
              <span className="text-xs text-slate-400">All construction executed in compliance with BEPC, CPWD & State PWD Technical Specifications.</span>
            </div>
          </div>
          <a 
            href="#contact" 
            className="px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Request Tender Portfolio
          </a>
        </div>

      </div>
    </section>
  );
}
