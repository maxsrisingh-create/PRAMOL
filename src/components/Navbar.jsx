import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowUpRight, Shield, Award, HardHat } from 'lucide-react';
import emblemIcon from '../assets/logos/pramol_emblem_icon.png';
import logoImg from '../assets/logos/pramol_logo_main.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Strengths', href: '#strengths' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Presence', href: '#presence' },
  { name: 'Partners', href: '#partners' },
  { name: 'Roadmap', href: '#roadmap' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = [...navLinks.map(link => link.href.substring(1)), 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-navy-950/95 border-b border-white/5 py-2 px-4 sm:px-8 text-xs text-slate-400 hidden md:block backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 lg:space-x-5">
            <span className="flex items-center space-x-2 text-gold-400 font-semibold tracking-wide">
              <Shield className="w-3.5 h-3.5 text-gold-500" />
              <span>Govt. Certified Turnkey Contractor</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-mono text-[11px]">Founded: 23 Dec 2024</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              50+ Executed Projects
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:6287968432" 
              className="flex items-center space-x-1.5 text-slate-300 hover:text-gold-400 transition-colors font-mono"
              title="Primary Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>+91 6287968432</span>
            </a>
            <span className="text-slate-700">/</span>
            <a 
              href="tel:8210270422" 
              className="flex items-center space-x-1.5 text-slate-300 hover:text-amber-400 transition-colors font-mono"
              title="Corporate & Tender Desk"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+91 8210270422</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="mailto:pramolenterprises@gmail.com" 
              className="flex items-center space-x-1.5 text-slate-300 hover:text-gold-400 transition-colors font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              <span>pramolenterprises@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-950/92 backdrop-blur-2xl border-b border-gold-500/20 shadow-2xl py-2.5 shadow-black/50' 
            : 'bg-gradient-to-b from-navy-950/98 via-navy-950/85 to-transparent py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group shrink-0">
              <div className="relative flex items-center justify-center p-1 rounded-xl bg-navy-900/60 border border-gold-500/25 group-hover:border-gold-400 group-hover:bg-navy-900 transition-all duration-300">
                <img 
                  src={emblemIcon} 
                  alt="Pramol Enterprises Logo" 
                  className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(234,179,8,0.35)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-base sm:text-lg tracking-wider text-white group-hover:text-gold-400 transition-colors uppercase leading-tight">
                  PRAMOL ENTERPRISES
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-gold-400 font-bold uppercase leading-tight">
                  PRIVATE LIMITED • INFRASTRUCTURE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links Pill Container */}
            <nav className="hidden lg:flex items-center bg-navy-900/60 p-1 rounded-2xl border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-navy-950 bg-gradient-to-r from-gold-400 to-amber-500 shadow-md shadow-gold-500/20 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Contact Now CTA Button */}
            <div className="hidden sm:flex items-center shrink-0">
              <a
                href="#contact"
                className={`relative inline-flex items-center justify-center px-4.5 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 group shadow-lg ${
                  activeSection === 'contact'
                    ? 'bg-gradient-to-r from-amber-400 via-gold-500 to-amber-500 text-navy-950 shadow-gold-500/30 scale-105 ring-2 ring-gold-400/50'
                    : 'bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 text-navy-950 shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.03]'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>Contact Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
                </span>
              </a>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-navy-850 text-slate-300 hover:text-white hover:bg-navy-800 border border-white/10"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950/98 backdrop-blur-2xl border-b border-gold-500/30 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-gold-400 hover:bg-navy-900 border border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="flex flex-col text-xs text-slate-400 space-y-1.5">
                <a href="tel:6287968432" className="flex items-center gap-2 hover:text-gold-400">
                  <Phone className="w-3.5 h-3.5 text-gold-500" />
                  <span>+91 6287968432 (Primary)</span>
                </a>
                <a href="tel:8210270422" className="flex items-center gap-2 hover:text-gold-400">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>+91 8210270422 (Tender Desk)</span>
                </a>
                <a href="mailto:pramolenterprises@gmail.com" className="flex items-center gap-2 hover:text-gold-400">
                  <Mail className="w-3.5 h-3.5 text-gold-500" />
                  <span>pramolenterprises@gmail.com</span>
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-gold-400 to-amber-600 text-navy-950 font-bold text-xs uppercase tracking-wider"
              >
                Contact Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
