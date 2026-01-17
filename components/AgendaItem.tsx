
import React from 'react';
import { AgendaItem as AgendaItemType } from '../types';

const AgendaItem: React.FC<{ item: AgendaItemType; index: number }> = ({ item, index }) => {
  return (
    <div className="relative pl-12 pb-12 group last:pb-0">
      {/* El "Cable" (Línea vertical) */}
      <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 to-purple-500/50 group-last:bottom-full group-last:h-10"></div>
      
      {/* El "Conector" (Nodo circular) */}
      <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center z-10">
        <div className="w-4 h-4 rounded-full bg-[#050505] border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform duration-300"></div>
        <div className="absolute w-8 h-8 rounded-full bg-cyan-500/10 animate-pulse"></div>
      </div>

      <div className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-cyan-400 font-black text-sm tracking-tighter bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">
            {item.time}
          </span>
          {item.speaker && (
            <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">
              [{item.speaker}]
            </span>
          )}
        </div>
        
        <h4 className="text-white text-lg font-bold mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
          {item.title}
        </h4>
        
        <ul className="space-y-1.5 border-l border-white/5 pl-4 ml-1">
          {item.details?.map((detail, idx) => (
            <li key={idx} className="text-slate-500 text-xs leading-relaxed flex items-start gap-2 italic">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgendaItem;
