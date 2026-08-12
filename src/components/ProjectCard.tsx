import React from 'react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onMouseEnter, onMouseLeave, onClick }: ProjectCardProps) {
  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(project)}
      className="group flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-neutral-800/60 cursor-pointer hover:bg-neutral-900/40 transition-all duration-500 px-4 -mx-4 rounded-xl"
    >
      <div className="flex items-center gap-6">
        
        {/* Вградена картинка (Thumbnail) в списъка */}
        <div className="relative w-28 md:w-40 aspect-video rounded-lg overflow-hidden bg-neutral-950 shrink-0 border border-neutral-800 group-hover:border-neutral-500 transition-colors duration-500 shadow-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          
          {/* Малък Play бутон, който се появява при ховър върху реда */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
            <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center pl-1">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Заглавие на проекта */}
        <h3 className="text-xl md:text-3xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>
      </div>
      
      {/* Метаданни (Категория и Година) вдясно */}
      <div className="flex items-center gap-4 md:gap-8 mt-4 md:mt-0 text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300 ml-[136px] md:ml-0">
        <span className="bg-neutral-900/50 px-3 py-1 rounded-full border border-neutral-800">{project.category}</span>
        <span className="hidden md:inline">{project.year}</span>
      </div>
    </div>
  );
}