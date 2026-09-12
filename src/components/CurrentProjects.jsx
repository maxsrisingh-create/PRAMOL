import React, { useState, useMemo } from 'react';
import { Search, MapPin, HardHat, Building2, Calendar, FileSpreadsheet, LayoutGrid, Table as TableIcon } from 'lucide-react';
import { ongoingProjects } from '../data/projects';
import mothaColImg from '../assets/images/site_motha_columns.png';
import tepriImg from '../assets/images/site_tepri_structure.png';

export default function CurrentProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('ALL');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');
  const [viewMode, setViewMode] = useState('table'); // default table view or 'cards'

  // Extract all unique blocks and districts
  const allBlocks = useMemo(() => {
    const blocks = Array.from(new Set(ongoingProjects.map(p => p.block)));
    return ['ALL', ...blocks];
  }, []);

  const filteredProjects = useMemo(() => {
    return ongoingProjects.filter(p => {
      const matchesSearch = 
        p.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.block.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.udiseCode.includes(searchTerm);
      
      const matchesBlock = selectedBlock === 'ALL' || p.block === selectedBlock;
      const matchesDistrict = selectedDistrict === 'ALL' || p.district === selectedDistrict;

      return matchesSearch && matchesBlock && matchesDistrict;
    });
  }, [searchTerm, selectedBlock, selectedDistrict]);

  return (
    <section id="ongoing-projects" className="py-20 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-10 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                Live Field Execution & Scheduled Rollout
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Current Ongoing Projects
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl">
              Turnkey construction, structural dismantling, site layouts, and science laboratory infrastructure across 17 government secondary schools in Bihar.
            </p>
          </div>

          {/* Section Stats Badge */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-amber-500/30 shadow-xl shrink-0">
            <div className="flex -space-x-4 overflow-hidden p-1">
              <img 
                src={mothaColImg} 
                alt="Motha Column Site" 
                className="w-14 h-14 rounded-xl object-cover border-2 border-navy-950" 
              />
              <img 
                src={tepriImg} 
                alt="Tepri Structure Site" 
                className="w-14 h-14 rounded-xl object-cover border-2 border-navy-950" 
              />
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <HardHat className="w-3.5 h-3.5 text-amber-400" />
                <span>17 School Laboratory Sites</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">Sitamarhi & Madhubani Districts</div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 sm:p-5 rounded-2xl bg-navy-900 border border-white/10 mb-8 space-y-4 shadow-xl">
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search school, block, or UDISE..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-950 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            {/* View Mode Toggle & District Shortcut */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between">
              {/* District quick filter */}
              <div className="flex items-center gap-1.5 bg-navy-950 p-1 rounded-xl border border-white/10 text-xs">
                <span className="text-[10px] text-slate-500 font-bold uppercase px-2">District:</span>
                {['ALL', 'SITAMARHI', 'MADHUBANI'].map((dist) => (
                  <button
                    key={dist}
                    onClick={() => {
                      setSelectedDistrict(dist);
                      setSelectedBlock('ALL');
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedDistrict === dist
                        ? 'bg-amber-500 text-navy-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {dist === 'ALL' ? 'All (17)' : dist}
                  </button>
                ))}
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-1 bg-navy-950 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 px-3 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'table' ? 'bg-gold-500 text-navy-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Table View"
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Table</span>
                </button>
                <button
                  onClick={() => setViewMode('cards')}
                  className={`p-1.5 px-3 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'cards' ? 'bg-gold-500 text-navy-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Cards View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Cards</span>
                </button>
              </div>
            </div>
          </div>

          {/* Block: Filter Functionality */}
          <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-gold-400 font-bold uppercase shrink-0 min-w-max">
              <Building2 className="w-4 h-4 text-gold-500" />
              <span>Block:</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-thin">
              {allBlocks.map((block) => {
                const count = block === 'ALL' 
                  ? ongoingProjects.length 
                  : ongoingProjects.filter(p => p.block === block).length;
                
                return (
                  <button
                    key={block}
                    onClick={() => setSelectedBlock(block)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      selectedBlock === block
                        ? 'bg-gold-500 text-navy-950 font-bold shadow-md scale-[1.02]'
                        : 'bg-navy-950 text-slate-400 border border-white/10 hover:text-white hover:border-gold-500/30'
                    }`}
                  >
                    <span>{block}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedBlock === block ? 'bg-navy-950/20 text-navy-950 font-extrabold' : 'bg-white/10 text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* View Mode 1: Interactive Data Table (Exact layout matching official format) */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-navy-900 shadow-2xl">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-navy-950 text-gold-400 font-display font-bold uppercase tracking-wider border-b border-white/10">
                <tr>
                  <th className="py-4 px-4">S NO.</th>
                  <th className="py-4 px-4">DISTRICT</th>
                  <th className="py-4 px-4">BLOCK NAME</th>
                  <th className="py-4 px-4">SCHOOL NAME</th>
                  <th className="py-4 px-4">UDISE CODE</th>
                  <th className="py-4 px-4">TIMELINE</th>
                  <th className="py-4 px-4">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProjects.map((p) => {
                  const isLand = p.status === 'LAND AVAILABLE';
                  const isDismantling = p.status === 'DISMANTLING';
                  const isScheduled = p.status === 'SCHEDULED';

                  return (
                    <tr key={p.id} className="hover:bg-navy-850/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white">
                        {p.id < 10 ? `0${p.id}` : p.id}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-200">{p.district}</td>
                      <td className="py-3.5 px-4 text-cyan-400 font-medium">{p.block}</td>
                      <td className="py-3.5 px-4 font-medium text-white max-w-sm">{p.schoolName}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-300 font-bold">{p.udiseCode}</td>
                      <td className="py-3.5 px-4 font-mono text-gold-400">{p.timeline}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                          isLand
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : (isDismantling
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30')
                        }`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* View Mode 2: Cards View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => {
              const isLand = p.status === 'LAND AVAILABLE';
              const isDismantling = p.status === 'DISMANTLING';

              return (
                <div
                  key={p.id}
                  className="rounded-2xl bg-navy-900 border border-white/10 hover:border-gold-500/50 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col justify-between"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-gold-400 bg-navy-950 px-2.5 py-1 rounded border border-gold-500/20">
                        S.NO {p.id < 10 ? `0${p.id}` : p.id} • {p.district}
                      </span>
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                        isLand
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : (isDismantling
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30')
                      }`}>
                        {p.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-display font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                        {p.schoolName}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                        <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                        <span>Block: <strong className="text-cyan-400">{p.block}</strong></span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="p-4 bg-navy-950 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <div>
                      <span className="text-slate-500">UDISE: </span>
                      <span className="text-slate-200 font-bold">{p.udiseCode}</span>
                    </div>
                    <span className="text-gold-400 font-bold">{p.timeline}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

