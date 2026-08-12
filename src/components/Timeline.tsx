'use client';

import React, { useState } from 'react';
import { timelineData } from '@/data/timeline';

export type Movie = {
  title: string;
  image: string;
};

export type Project = {
  name: string;
  type: string;
  image: string;
  description: string;
  movies?: Movie[];
};

export type TimelineItem = {
  period?: string;
  year?: string;
  title: string;
  summary: string;
  projects: Project[];
};

const typedTimelineData = timelineData as TimelineItem[];

export default function Timeline() {
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineItem | null>(null);

  return (
    <section className="relative w-full py-32 bg-[#050505] text-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-3">Experience & Growth</span>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-neutral-100">The Cinematic Journey</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-800 -translate-x-1/2" />

          <div className="space-y-24">
            {typedTimelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const label = item.period ? item.period : `Година ${item.year}`;
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block md:w-1/2 shrink-0" />
                  
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-neutral-600 rounded-full border-4 border-[#050505] shadow-[0_0_15px_rgba(255,255,255,0.2)] z-10" />

                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div 
                      onClick={() => setSelectedMilestone(item)}
                      className="group p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm cursor-pointer hover:border-neutral-500 hover:bg-neutral-900/60 transition-all duration-500 shadow-2xl"
                    >
                      <span className="text-sm font-mono text-neutral-500 tracking-widest">{label}</span>
                      <h3 className="text-2xl font-light text-neutral-100 mt-3 mb-3">{item.title}</h3>
                      <p className="text-neutral-400 font-light leading-relaxed">{item.summary}</p>
                      
                      <div className="mt-6 flex items-center gap-2 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                        <span>View details and projects</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Модал: клик извън контейнера го затваря, а клик вътре пази скрола и съдържанието */}
      {selectedMilestone && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md" 
          onClick={() => setSelectedMilestone(null)}
        >
          <div 
            className="w-full max-w-2xl bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Хедър (фиксиран най-отгоре в модала) */}
            <div className="border-b border-neutral-800 p-6 md:p-8 flex justify-between items-center bg-[#0a0a0a] rounded-t-2xl shrink-0">
              <div>
                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase block mb-1">
                  {selectedMilestone.period ? selectedMilestone.period : `Година ${selectedMilestone.year}`}
                </span>
                <h3 className="text-xl md:text-2xl font-light text-white">{selectedMilestone.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedMilestone(null)} 
                className="w-10 h-10 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-colors shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Съдържание с поддръжка на колелце и новите редове */}
            <div 
                className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1 custom-scroll"
                onWheel={(e) => {
                  e.stopPropagation();
                }}
            >
              <p className="text-neutral-300 font-light text-base md:text-lg leading-relaxed">
                {selectedMilestone.summary}
              </p>

              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 pt-2">
                Проекти и отговорности:
              </h4>
              
              <div className="space-y-6">
                {selectedMilestone.projects.map((p, i) => (
                  <div key={i} className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/50">
                    {p.image && (
                      <div className="relative w-full h-48 md:h-56 bg-neutral-950 overflow-hidden">
                        <img 
                          src={p.image} 
                          alt={p.name}
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        <div className="absolute top-4 right-4">
                          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-neutral-800">
                            {p.type}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h5 className="text-xl font-light text-white mb-3">{p.name}</h5>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed whitespace-pre-line">{p.description}</p>

                      {/* Секция за вертикални филмови постери */}
                      {p.movies && p.movies.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-neutral-800/80">
                          <h6 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                            Feature Films & Blockbusters:
                          </h6>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {p.movies.map((movie, idx) => (
                              <div key={idx} className="group relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 aspect-[2/3] shadow-lg">
                                <img 
                                  src={movie.image} 
                                  alt={movie.title}
                                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                  <span className="text-xs font-light text-neutral-200 group-hover:text-white transition-colors leading-tight">
                                    {movie.title}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}