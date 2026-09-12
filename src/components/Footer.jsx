import React from 'react';
import { Phone, Mail, MapPin, Shield, ArrowUp, ArrowRight, Heart } from 'lucide-react';
import emblemIcon from '../assets/logos/pramol_emblem_icon.png';
import logoImg from '../assets/logos/pramol_logo_main.png';
import { companyProfile } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/10 text-slate-400 text-xs relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative p-1.5 rounded-xl bg-navy-900/70 border border-gold-500/30 shadow-lg shadow-black/40 flex items-center justify-center">
                <img 
                  src={emblemIcon} 
                  alt="Pramol Enterprises Emblem" 
                  className="h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(234,179,8,0.4)]"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-base tracking-wider text-white uppercase block">
                  PRAMOL ENTERPRISES
                </span>
                <span className="text-[10px] tracking-widest text-gold-400 font-semibold uppercase block">
                  PRIVATE LIMITED
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Established leader in construction and infrastructure development delivering excellence at scale across government and private sectors in India.
            </p>

            <div className="pt-2 text-xs font-serif italic text-gold-300">
              "{companyProfile.tagline}"
            </div>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
              <Shield className="w-3.5 h-3.5 text-gold-500" />
              <span>MCA Registered • Incorporated 23 Dec 2024</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Company', href: '#about' },
                { name: 'Our Strengths', href: '#strengths' },
                { name: 'Featured Projects', href: '#projects' },
                { name: 'Work Gallery', href: '#gallery' },
                { name: 'Regional Presence', href: '#presence' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-gold-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Infrastructure Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Core Divisions
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Educational Science Labs', href: '#projects' },
                { name: 'Mukhyamantri Nalkup Yojana', href: '#projects' },
                { name: 'Sitamarhi Active Sites', href: '#ongoing-projects' },
                { name: 'Madhubani Upcoming Labs', href: '#upcoming-projects' },
                { name: 'Our Partner Companies', href: '#partners' },
                { name: 'National Expansion', href: '#expansion' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <a
                href="tel:6287968432"
                className="flex items-center gap-2 text-slate-300 hover:text-gold-400 transition-colors"
                title="Primary Hotline"
              >
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="font-mono font-bold">+91 6287968432</span>
              </a>

              <a
                href="tel:8210270422"
                className="flex items-center gap-2 text-slate-300 hover:text-gold-400 transition-colors"
                title="Corporate & Tender Desk"
              >
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono font-bold">+91 8210270422</span>
              </a>

              <a
                href="mailto:pramolenterprises@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-gold-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="font-mono">pramolenterprises@gmail.com</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>Operational Hub: Muzaffarpur, Sitamarhi, Sheohar, Vaishali, Bihar</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-center sm:text-left">
            © 2026 Pramol Enterprises Private Limited. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Corporate Infrastructure & Turnkey Contracting
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-900 border border-white/10 text-slate-300 hover:text-gold-400 hover:border-gold-500 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
