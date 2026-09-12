import React, { useState, useEffect, useRef } from 'react';
import { Building, MapPin, Target, Calendar, Award, Users, CheckCircle, ShieldCheck } from 'lucide-react';
import { companyProfile } from '../data/companyData';

const statMetrics = [
  {
    icon: Building,
    value: 50,
    suffix: "+",
    label: "Projects Executed",
    subtext: "Govt. & Private Sector",
    desc: "Delivered in under 1 year across multiple sectors"
  },
  {
    icon: MapPin,
    value: 6,
    suffix: "",
    label: "Active Districts",
    subtext: "Bihar Growth Corridors",
    desc: "Muzaffarpur, Sheohar, Sitamarhi, Vaishali, Madhubani, Darbhanga"
  },
  {
    icon: Target,
    value: 100,
    suffix: "+",
    label: "Annual Target Goal",
    subtext: "Confirmed Pipeline",
    desc: "100% confirmed goal of 100+ projects by the end of every year"
  },
  {
    icon: Users,
    value: 35,
    suffix: "k+",
    label: "Farmers Impacted",
    subtext: "Mukhyamantri Nalkup Yojana",
    desc: "1.75 Lakh hectares irrigation civil execution"
  },
  {
    icon: Calendar,
    value: 2024,
    suffix: "",
    label: "Year Founded",
    subtext: "23rd December",
    desc: "Rapidly scaling modern infrastructure enterprise"
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Compliance Rigor",
    subtext: "Quality & Safety",
    desc: "Zero-tolerance engineering benchmark adherence"
  }
];

function Counter({ endValue, suffix = '' }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1600;
    const increment = Math.max(1, Math.floor(endValue / (duration / 25)));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <span ref={counterRef} className="font-display font-extrabold tracking-tight">
      {count}{suffix}
    </span>
  );
}

export default function StatsAtAGlance() {
  return (
    <section className="py-16 bg-navy-950 relative overflow-hidden border-y border-white/5">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            Key Performance Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Company At A Glance
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Quantifiable momentum, high-impact public engineering delivery, and strategic expansion across regional and national frontiers.
          </p>
        </div>

        {/* 6 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statMetrics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-navy-900/80 border border-white/10 hover:border-gold-500/40 hover:bg-navy-850/90 transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 group-hover:bg-gold-500/15 rounded-full blur-xl transition-all"></div>

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-navy-950 px-2.5 py-1 rounded border border-white/5 uppercase">
                    PRAMOL • 2026
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-gold-400 transition-colors">
                    <Counter endValue={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-base font-bold text-slate-100">{stat.label}</div>
                  <div className="text-xs font-semibold text-gold-400/90">{stat.subtext}</div>
                  <p className="text-xs text-slate-400 pt-2 border-t border-white/5 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
