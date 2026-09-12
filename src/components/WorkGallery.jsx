import React, { useState } from 'react';
import { Camera, MapPin, Calendar, Compass, ZoomIn, Layers, CheckCircle2, Maximize2, Minimize2, SlidersHorizontal, Eye, Sparkles } from 'lucide-react';
import { galleryItems } from '../data/gallery';

export default function WorkGallery({ onOpenLightbox }) {
  const [frameMode, setFrameMode] = useState('contain'); // 'contain' for 100% visible uncropped photo
  const [individualFrames, setIndividualFrames] = useState({});

  const toggleSingleFrame = (id, e) => {
    e.stopPropagation();
    setIndividualFrames(prev => ({
      ...prev,
      [id]: prev[id] === 'cover' ? 'contain' : (prev[id] === 'contain' ? 'cover' : (frameMode === 'contain' ? 'cover' : 'contain'))
    }));
  };

  return (
    <section id="gallery" className="py-20 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-gold-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                GPS Geotagged Field Execution Archive
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Little Glimpse of Our Recent Projects
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Authentic on-site construction photographs captured by GPS Map Camera — with complete visibility of field coordinates, structural milestones, and quality benchmarks.
            </p>
          </div>

          {/* Frame Adjustment Controls */}
          <div className="flex flex-wrap items-center gap-2.5 bg-navy-900/95 p-2 rounded-2xl border border-gold-500/30 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 px-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-gold-400" />
              <span>Frame View:</span>
            </div>

            <button
              onClick={() => setFrameMode('contain')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                frameMode === 'contain'
                  ? 'bg-gold-500 text-navy-950 shadow-md scale-105'
                  : 'bg-navy-950 text-slate-400 hover:text-white border border-white/10'
              }`}
              title="Show entire photograph with full GPS stamp completely visible"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>100% Full Photo View</span>
            </button>

            <button
              onClick={() => setFrameMode('cover')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                frameMode === 'cover'
                  ? 'bg-gold-500 text-navy-950 shadow-md scale-105'
                  : 'bg-navy-950 text-slate-400 hover:text-white border border-white/10'
              }`}
              title="Fill entire card frame"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Fill Card Frame</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid with High Visibility Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const currentItemFrameMode = individualFrames[item.id] || frameMode;
            const isContain = currentItemFrameMode === 'contain';

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(galleryItems, index)}
                className="group relative rounded-2xl overflow-hidden bg-navy-900 border border-white/10 hover:border-gold-500/60 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Stage Container - Enhanced for Complete Visibility */}
                <div className="relative w-full h-72 sm:h-80 p-2.5 bg-slate-950/90 flex items-center justify-center overflow-hidden border-b border-white/10">
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full rounded-xl transition-all duration-300 shadow-md ${
                      isContain 
                        ? 'object-contain group-hover:scale-105' 
                        : 'object-cover group-hover:scale-110'
                    }`}
                  />

                  {/* Top Bar with GPS Tag & Frame Adjustment Toggle */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-lg bg-navy-950/95 text-gold-400 border border-gold-500/40 text-[10px] font-mono font-bold tracking-wider flex items-center gap-1 backdrop-blur-md shadow-lg pointer-events-auto">
                      <Compass className="w-3 h-3 text-gold-500" />
                      GPS FIELD LOG
                    </span>

                    <div className="flex items-center gap-1.5 pointer-events-auto">
                      {/* Individual Frame Adjuster */}
                      <button
                        onClick={(e) => toggleSingleFrame(item.id, e)}
                        className="px-2 py-1 rounded-lg bg-navy-950/95 hover:bg-gold-500 hover:text-navy-950 text-gold-400 border border-gold-500/40 backdrop-blur-md transition-all shadow-md text-[10px] flex items-center gap-1 font-semibold"
                        title={isContain ? "Switch to Fill Frame" : "Switch to Full Uncropped Photo"}
                      >
                        {isContain ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
                        <span>{isContain ? 'Fill' : 'Fit Whole'}</span>
                      </button>

                      {/* Fullscreen Zoom */}
                      <span className="p-1.5 rounded-lg bg-navy-950/95 text-white hover:text-gold-400 border border-white/20 backdrop-blur-md transition-colors shadow-md">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom Category Badge on Image */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gold-500 text-navy-950 shadow-md">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Meta Details */}
                <div className="p-5 space-y-3 bg-navy-900">
                  <h3 className="text-base font-display font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Geotag Coordinates & Timestamp */}
                  <div className="pt-3 border-t border-white/5 space-y-1 font-mono text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5 text-slate-300 truncate">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{item.location} ({item.pinCode})</span>
                    </div>
                    <div className="text-[10px] text-gold-400 font-bold truncate">
                      {item.gps}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{item.timestamp}</span>
                    </div>
                  </div>
                </div>

                {/* Click to inspect bar */}
                <div className="px-5 py-2.5 bg-navy-950 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-gold-400 transition-colors">
                  <span>Click for high-res zoom & detailed inspection</span>
                  <Eye className="w-3.5 h-3.5 text-gold-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Note */}
        <div className="mt-12 p-4 rounded-xl bg-navy-900 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
            <span>All site photographs are authentic unedited field logs extracted directly from the official company profile.</span>
          </div>
          <span className="text-gold-400 font-mono font-bold">100% Visible Uncropped GPS Frames</span>
        </div>

      </div>
    </section>
  );
}
