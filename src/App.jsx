import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import StatsAtAGlance from './components/StatsAtAGlance';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import CoreStrengths from './components/CoreStrengths';
import GeographicalPresence from './components/GeographicalPresence';
import FeaturedProjects from './components/FeaturedProjects';
import CurrentProjects from './components/CurrentProjects';
import WorkGallery from './components/WorkGallery';
import PartnerEcosystem from './components/PartnerEcosystem';
import ExpansionStrategy from './components/ExpansionStrategy';
import ClientTrust from './components/ClientTrust';
import GrowthRoadmap from './components/GrowthRoadmap';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (items, index) => {
    setLightboxState({
      isOpen: true,
      items,
      currentIndex: index
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handlePrevLightbox = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.items.length) % prev.items.length
    }));
  };

  const handleNextLightbox = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.items.length
    }));
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-gold-500 selection:text-navy-950 relative">
      {/* Top Global Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-amber-500 via-gold-400 to-amber-300 z-[100] transition-all duration-100 pointer-events-none shadow-[0_0_10px_rgba(245,158,11,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Company Overview */}
        <CompanyOverview />

        {/* Section 3: Company at a Glance (Animated Statistics) */}
        <StatsAtAGlance />

        {/* Section 4: Vision & Mission */}
        <VisionMission />

        {/* Section 5: Core Values */}
        <CoreValues />

        {/* Section 6: Core Strengths */}
        <CoreStrengths />

        {/* Section 7: Geographical Presence (Bihar Districts) */}
        <GeographicalPresence />

        {/* Section 8: Featured Landmark Projects */}
        <FeaturedProjects />

        {/* Section 9: Work Gallery (GPS Geotagged Site Photos) */}
        <WorkGallery onOpenLightbox={handleOpenLightbox} />

        {/* Section 10: Current Ongoing Projects (Sitamarhi & Madhubani) */}
        <CurrentProjects />

        {/* Section 11: Strategic Partner Ecosystem */}
        <PartnerEcosystem />

        {/* Section 13: National Expansion Strategy */}
        <ExpansionStrategy />

        {/* Section 14: Client Trust & Endorsements */}
        <ClientTrust />

        {/* Section 15: Strategic Growth Roadmap (3-Phase Timeline) */}
        <GrowthRoadmap />

        {/* Section 16: Why Choose Pramol */}
        <WhyChooseUs />

        {/* Section 17: Direct Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Section 18: Corporate Footer */}
      <Footer />

      {/* Floating Action Cluster: Direct Hotline & Back-to-Top */}
      <aside aria-label="Quick contact and navigation" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating Quick Call Button */}
        <a 
          href="tel:6287968432"
          className="pointer-events-auto group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-navy-900/95 border border-gold-500/40 text-gold-400 hover:text-white hover:bg-gold-500 shadow-2xl hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-300 backdrop-blur-md text-xs font-bold font-mono"
          title="Direct Turnkey Hotline (+91 6287968432)"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Call Now</span>
        </a>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className={`pointer-events-auto p-3 rounded-full bg-navy-900/90 border border-white/10 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 hover:bg-navy-850 shadow-xl backdrop-blur-md transition-all duration-300 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </aside>

      {/* Fullscreen Lightbox Modal */}
      {lightboxState.isOpen && (
        <LightboxModal
          items={lightboxState.items}
          currentIndex={lightboxState.currentIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}
    </div>
  );
}
