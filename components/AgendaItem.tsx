
import React from 'react';
import { AgendaItem as AgendaItemType } from '../types';

const AgendaItem: React.FC<{ item: AgendaItemType; index: number }> = ({ item, index }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-last:bg-transparent"></div>
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
      
      <div className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
        <div className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-1">{item.time}</div>
        <h4 className="text-white text-lg font-bold mb-1">{item.title}</h4>
        {item.speaker && (
          <div className="text-purple-400 text-sm font-medium mb-2 italic">Ponente: {item.speaker}</div>
        )}
        <ul className="space-y-1">
          {item.details?.map((detail, idx) => (
            <li key={idx} className="text-slate-400 text-sm leading-relaxed">• {detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgendaItem;
