import React, { useState, useMemo } from 'react';
import { Clock, MapPin, Calendar, Search, ArrowRight, Building, CheckCircle2, HardHat } from 'lucide-react';
import { upcomingProjects } from '../data/projects';
import upcomingTableImg from '../assets/images/upcoming_projects_table.png';
import siteBandraImg from '../assets/images/site_bandra_school_building.png';

export default function UpcomingProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [blockFilter, setBlockFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'cards' or 'pdf'

  const blocks = ['ALL', 'ANDHARATHADHI', 'BABUBARHI', 'BISFI', 'MADHEPUR', 'PANDAUL', 'LAKHNAUR'];

  const filteredProjects = useMemo(() => {
    return upcomingProjects.filter(p => {
      const matchesSearch = 
        p.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.block.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.udiseCode.includes(searchTerm);
      
      const matchesBlock = blockFilter === 'ALL' || p.block === blockFilter;

      return matchesSearch && matchesBlock;
    });
  }, [searchTerm, blockFilter]);

  return (
    <section id="upcoming-projects" className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Ambient background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Real Site Visual Badge */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-blue-500"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
                Pipeline Expansion • Madhubani District
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Upcoming Projects in Coming Months
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Scheduled rollout of turnkey Physics, Chemistry, and Biology science laboratories across 10 educational institutions.
            </p>
          </div>
          
          {/* Section Heading Site Visual Strip */}
          <div className="flex items-center gap-3 bg-navy-900/90 p-2.5 rounded-2xl border border-blue-500/30 shadow-xl shrink-0">
            <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-navy-950 border border-white/10 shrink-0">
              <img 
                src={siteBandraImg} 
                alt="Target School Building Model" 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 left-1 text-[8px] font-mono text-blue-400 bg-navy-950/90 px-1 rounded">
                STANDARD
              </span>
            </div>
            <div className="text-xs pr-2">
              <div className="text-white font-bold flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-blue-400" />
                <span>10 Madhubani Schools</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">Q3-Q4 2026 Turnkey Handover</div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 rounded-xl bg-navy-900 border border-white/10 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Madhubani school, block, or UDISE..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-navy-950 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-between w-full md:w-auto">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <span className="text-xs text-slate-400 font-semibold uppercase shrink-0">Block:</span>
              {blocks.map((block) => (
                <button
                  key={block}
                  onClick={() => setBlockFilter(block)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    blockFilter === block
                      ? 'bg-blue-600/30 text-blue-400 border border-blue-500/50'
                      : 'bg-navy-950 text-slate-400 border border-white/5 hover:text-white'
                  }`}
                >
                  {block}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 bg-navy-950 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setViewMode('table')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                  viewMode === 'table' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Table
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                  viewMode === 'cards' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                  viewMode === 'pdf' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF Extract
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Table */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-navy-900 shadow-2xl">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-navy-950 text-blue-400 font-display font-bold uppercase tracking-wider border-b border-white/10">
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
                {filteredProjects.map((p) => (
                  <tr key={p.sNo} className="hover:bg-navy-850/60 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-white">0{p.sNo}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-200">{p.district}</td>
                    <td className="py-3.5 px-4 text-blue-400 font-medium">{p.block}</td>
                    <td className="py-3.5 px-4 font-medium text-white max-w-sm">{p.schoolName}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-300 font-bold">{p.udiseCode}</td>
                    <td className="py-3.5 px-4 font-mono text-gold-400">{p.timeline}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* View Mode 2: Cards */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.sNo}
                className="rounded-2xl bg-navy-900 border border-white/10 hover:border-blue-500/40 p-6 shadow-xl flex flex-col justify-between group transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-400 bg-navy-950 px-2.5 py-1 rounded border border-blue-500/20">
                      S.NO 0{p.sNo} • MADHUBANI
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      UPCOMING
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {p.schoolName}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>Block: <strong>{p.block}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>UDISE: <strong className="text-slate-200">{p.udiseCode}</strong></span>
                  <span className="text-gold-400">{p.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Mode 3: PDF Extract */}
        {viewMode === 'pdf' && (
          <div className="rounded-2xl border border-blue-500/30 bg-navy-900 p-4 shadow-2xl space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-white">Official Government Project Pipeline (Page 10 Extract)</span>
              <span className="text-blue-400 font-mono">Madhubani Upcoming Pipeline</span>
            </div>
            <div className="rounded-xl overflow-hidden bg-navy-950 p-2 border border-white/10">
              <img 
                src={upcomingTableImg} 
                alt="Madhubani Upcoming Projects Table Extract" 
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
