import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Compass, ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2, ShieldCheck, Layers } from 'lucide-react';

export default function LightboxModal({ items, currentIndex, onClose, onPrev, onNext }) {
  const currentItem = items[currentIndex];
  const [zoomLevel, setZoomLevel] = useState(1);
  const [fitMode, setFitMode] = useState('contain'); // 'contain' or 'cover'

  useEffect(() => {
    // Reset zoom on item change
    setZoomLevel(1);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === '+' || e.key === '=') setZoomLevel(prev => Math.min(prev + 0.25, 3));
      if (e.key === '-') setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Top Header Bar with Frame Controls */}
      <div className="flex items-center justify-between z-20 pb-3 border-b border-white/10 gap-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 font-mono text-xs font-bold">
            PHOTO {currentIndex + 1} / {items.length}
          </span>
          <span className="text-white font-display font-bold text-sm hidden md:inline truncate max-w-md">
            {currentItem.title}
          </span>
        </div>

        {/* Frame Zoom & Mode Controls */}
        <div className="flex items-center gap-2">
          
          {/* Zoom Out */}
          <button
            onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
            className="p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="Zoom Out (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <span className="px-2 font-mono text-xs text-gold-400 font-bold hidden sm:inline">
            {Math.round(zoomLevel * 100)}%
          </span>

          {/* Zoom In */}
          <button
            onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 3))}
            className="p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="Zoom In (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Reset Zoom */}
          <button
            onClick={() => setZoomLevel(1)}
            className="p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Fit Frame Toggle */}
          <button
            onClick={() => setFitMode(prev => prev === 'contain' ? 'cover' : 'contain')}
            className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-all ${
              fitMode === 'contain'
                ? 'bg-gold-500 text-navy-950 border-gold-400'
                : 'bg-navy-900 text-slate-300 border-white/10 hover:text-white'
            }`}
            title="Toggle Uncropped View vs Screen Fill"
          >
            {fitMode === 'contain' ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{fitMode === 'contain' ? 'Fit Screen' : 'Fill'}</span>
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-navy-900 hover:bg-red-500/20 text-slate-300 hover:text-red-400 border border-white/10 transition-colors ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Stage */}
      <div className="relative flex-1 flex items-center justify-center my-3 overflow-hidden">
        
        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-navy-900/90 hover:bg-gold-500 hover:text-navy-950 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110 shadow-2xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scaled/Panned Image Container */}
        <div className="max-h-[72vh] max-w-[92vw] w-full h-full flex items-center justify-center overflow-auto p-2">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            style={{
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.2s ease-out'
            }}
            className={`max-h-[70vh] max-w-full rounded-xl border border-gold-500/40 shadow-2xl ${
              fitMode === 'contain' ? 'object-contain' : 'object-cover w-full h-full'
            }`}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-navy-900/90 hover:bg-gold-500 hover:text-navy-950 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110 shadow-2xl"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Metadata Panel */}
      <div className="bg-navy-950/95 border border-white/10 rounded-2xl p-4 max-w-4xl mx-auto w-full z-20 shadow-2xl space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-500 text-navy-950 mr-2">
              {currentItem.category}
            </span>
            <h4 className="inline text-white font-bold text-sm">
              {currentItem.title}
            </h4>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>AUTHENTIC GPS FIELD RECORD</span>
          </div>
        </div>

        <p className="text-slate-300 text-xs leading-relaxed">
          {currentItem.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="text-slate-200">{currentItem.location} ({currentItem.pinCode})</span>
          </div>
          <div className="flex items-center gap-1.5 truncate text-gold-400">
            <Compass className="w-3.5 h-3.5 shrink-0" />
            <span>{currentItem.gps}</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{currentItem.timestamp}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
