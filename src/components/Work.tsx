'use client';

import React, { useState } from 'react';

// Дефинираме типа Project
type Project = {
  id: string | number;
  title: string;
  category: string;
  year: string;
  image: string;
  videoUrl?: string;
  description: string;
  details: string;
  specs: string[];
};

// ПЪЛНИЯТ АРХИВ
const projectsData: Project[] = [
  // 1. ПИЕДЕСТАЛЪТ (КАН)
  {
    id: 'chronicles-inconvenient-truth',
    title: 'Chronicles of the inconvenient truth',
    category: 'Documentary',
    year: '2025', 
    image: '/projects/chronicles-cannes.jpg', 
    videoUrl: 'https://www.youtube.com/embed/c_hTVKI6xSU', 
    description: 'Cannes Award-Winning Documentary Film.',
    details: 'Мащабен документален проект, отличен с престижна награда на филмовия фестивал в Кан. Работата по филма включва изграждане на дълбока наративна структура (storytelling), прецизен кинематографичен монтаж и финална постпродукция, която да отговаря на най-високите стандарти на световното кино.',
    specs: ['Documentary', 'Cannes Winner', 'Storytelling', 'Color Grading']
  },
  
  // ОСТАНАЛИТЕ ПРОЕКТИ
  {
    id: 'discover-aya',
    title: 'Discover Aya',
    category: 'Commercial',
    year: '2025',
    image: '/projects/discover-aya.jpg',
    videoUrl: 'https://player.vimeo.com/video/1207724142?h=3d81b37ab7',
    description: 'High-end commercial presentation.',
    details: 'Advanced post-production and color grading for a premium brand narrative.',
    specs: ['Commercial', 'VFX', 'Color Grading']
  },
  {
    id: 'aqua-viva-sport',
    title: 'Aqua Viva Sport',
    category: 'Commercial',
    year: '2026',
    image: '/projects/aqua-viva.jpg', 
    videoUrl: 'https://player.vimeo.com/video/1211303592?h=0f0f1c1474',
    description: 'High-energy sports commercial with integrated AI visual effects.',
    details: 'Динамичен комерсиален монтаж, съчетаващ класически спортни кадри с безпроблемно интегрирани AI-генерирани ефекти за подсилване на визуалното въздействие и енергията на бранда.',
    specs: ['Commercial', 'AI Integration', 'VFX', 'Dynamic Editing']
  },
  {
    id: 'national-team-jerseys',
    title: 'Bulgarian National Team New Jerseys 2026',
    category: 'Commercial',
    year: '2026',
    image: '/projects/national-team.jpg',
    videoUrl: 'https://www.youtube.com/embed/1dCSzds0tvY',
    description: 'Official kit launch campaign for the Bulgarian National Football Team.',
    details: 'High-energy sports editing featuring dynamic transitions, intense sound design, and modern visual effects.',
    specs: ['Sports', 'Dynamic Editing', 'Sound Design']
  },
  {
    id: 'visa-premium',
    title: 'Visa Premium Campaign',
    category: 'Commercial',
    year: '2024',
    image: '/projects/visa-premium.jpg',
    videoUrl: 'https://www.youtube.com/embed/sM-cBkQU3io',
    description: 'National television campaign for Visa Premium.',
    details: 'Fast-paced editing and premium aesthetic color grading tailored for top-tier broadcast and digital distribution.',
    specs: ['Broadcast', 'DaVinci Resolve']
  },
  {
    id: 'lukoil',
    title: 'Lukoil Neftohim Burgas',
    category: 'Corporate',
    year: '2024',
    image: '/projects/lukoil.jpg',
    videoUrl: 'https://player.vimeo.com/video/1027583825',
    description: 'Industrial corporate overview.',
    details: 'Heavy industrial videography editing, combining drone shots and technical processes into a cohesive brand story.',
    specs: ['Industrial', 'Corporate']
  },
  {
    id: 'egt-digital',
    title: 'EGT Digital - Designed to Perform',
    category: 'Corporate',
    year: '2024',
    image: '/projects/egt-digital.jpg',
    videoUrl: 'https://player.vimeo.com/video/990854823',
    description: 'Tech-focused brand presentation for EGT Digital.',
    details: 'Corporate showcase highlighting performance, tech infrastructure, and digital innovation with modern motion graphics.',
    specs: ['Corporate', 'Tech', 'Motion Graphics']
  },
  {
    id: 'maxobg',
    title: 'Maxo.bg',
    category: 'Commercial',
    year: '2024',
    image: '/projects/maxobg.jpg',
    videoUrl: 'https://player.vimeo.com/video/1147231960',
    description: 'Fast-paced commercial for the financial sector.',
    details: 'Engaging consumer-focused advertisement with crisp editing and dynamic pacing.',
    specs: ['Commercial', 'Broadcast']
  },
  {
    id: 'milano-group',
    title: 'Milano Group',
    category: 'Commercial',
    year: '2023',
    image: '/projects/milano-group.jpg',
    videoUrl: 'https://player.vimeo.com/video/863596059',
    description: 'Fashion and lifestyle commercial.',
    details: 'Stylish and rhythm-driven editing sequence focusing on luxury apparel and lifestyle aesthetics.',
    specs: ['Fashion', 'Lifestyle']
  },
  {
    id: 'mount-athos-impression',
    title: 'Mount Athos Impression',
    category: 'Cinema & TV',
    year: '2023',
    image: '/projects/mount-athos-impression.jpg', 
    videoUrl: 'https://player.vimeo.com/video/849693771',
    description: 'Atmospheric cinematic impression from Mount Athos.',
    details: 'Въздействащ визуален разказ и атмосферен монтаж, улавящ духа, спокойствието и суровата красота на хотел Mount Athos Greece.',
    specs: ['Cinematic', 'Documentary Impression', 'Color Grading']
  },
  {
    id: 'sofia-eagles',
    title: 'Sofia Eagles',
    category: 'Commercial',
    year: '2023',
    image: '/projects/sofia-eagles.jpg',
    videoUrl: 'https://player.vimeo.com/video/863676024',
    description: 'Dynamic sports promo video.',
    details: 'High-energy sports editing highlighting team spirit, action sequences, and cinematic color grading.',
    specs: ['Sports', 'Dynamic Editing']
  },
  {
    id: 'onyx-building',
    title: 'Onyx Building Presentation',
    category: 'Commercial',
    year: '2024',
    image: '/projects/onyx-building.jpg',
    videoUrl: 'https://www.youtube.com/embed/8an-COkIc1Q',
    description: 'Architectural and premium real estate promotional video.',
    details: 'Елегантен видео монтаж и презентация на модерна архитектура и недвижими имоти. Подчертаване на екстериорните детайли, интериорните пространства и луксозната атмосфера с плавни преходи и стилна цветова корекция.',
    specs: ['Real Estate', 'Commercial', 'Color Grading']
  },
  {
    id: 'maserati-showroom',
    title: 'Maserati New Showroom Launch',
    category: 'Commercial',
    year: '2024',
    image: '/projects/maserati.jpg',
    videoUrl: 'https://www.youtube.com/embed/WI4UeLDRW1A',
    description: 'Luxury automotive showroom presentation.',
    details: 'Sleek, elegant, and high-contrast editing to emphasize the luxury and prestige of the Maserati brand.',
    specs: ['Automotive', 'Luxury', 'Color Grading']
  },
  {
    id: 'maserati-showroom-2',
    title: 'Maserati New Showroom (Version 2)',
    category: 'Commercial',
    year: '2024',
    image: '/projects/maserati-2.jpg', 
    videoUrl: 'https://www.youtube.com/embed/meVY4BRfM-c',
    description: 'Luxury automotive showroom presentation - Part 2.',
    details: 'Alternative cut focusing on different dynamic angles and details of the showroom and vehicles.',
    specs: ['Automotive', 'Luxury', 'Color Grading']
  },
  {
    id: 'maserati-showroom-3',
    title: 'Maserati New Showroom (Version 3)',
    category: 'Commercial',
    year: '2024',
    image: '/projects/maserati-3.jpg', 
    videoUrl: 'https://www.youtube.com/embed/dqqglZwOP4U',
    description: 'Luxury automotive showroom presentation - Part 3.',
    details: 'Fast-paced promotional cut for social media and digital distribution.',
    specs: ['Automotive', 'Digital Campaign', 'Dynamic Editing']
  },
  {
    id: 'commercial-showreel',
    title: 'Commercial Showreel',
    category: 'Commercial',
    year: '2024',
    image: '/projects/commercial-showreel.jpg',
    videoUrl: 'https://player.vimeo.com/video/1044296666',
    description: 'Highlights of commercial and high-end advertising projects.',
    details: 'A dynamic fast-paced compilation showcasing the best editing, VFX, and storytelling techniques across various premium commercial brands.',
    specs: ['DaVinci Resolve', 'Premiere Pro', 'Commercial']
  },
  {
    id: 'corporate-showreel',
    title: 'Corporate Reel',
    category: 'Corporate',
    year: '2024',
    image: '/projects/corporate-reel.jpg',
    videoUrl: 'https://player.vimeo.com/video/1044296625',
    description: 'A dedicated showcase of elite corporate and B2B productions.',
    details: 'Focusing on clean, impactful corporate narratives, brand identity videos, and internal global communications.',
    specs: ['DaVinci Resolve', 'Corporate Branding']
  },
  {
    id: 'harmonia',
    title: 'HARMONIA City Resilience in Action',
    category: 'Corporate',
    year: '2024',
    image: '/projects/harmonia.jpg',
    videoUrl: 'https://www.youtube.com/embed/POJyYqtoAWE',
    description: 'European project documentary and corporate presentation.',
    details: 'Informative narrative structure explaining complex urban resilience concepts through engaging visuals.',
    specs: ['Corporate', 'Educational']
  },
  {
    id: 'project-harmony',
    title: 'Project Harmony',
    category: 'Corporate',
    year: '2024',
    image: '/projects/project-harmony.jpg',
    videoUrl: 'https://www.youtube.com/embed/zIfz91k90Cg',
    description: 'Corporate social responsibility feature.',
    details: 'Long-form corporate storytelling detailing the impact and implementation of the project.',
    specs: ['Corporate', 'Interview Setup']
  },
  {
    id: 'oxaa-music-video',
    title: 'Жлъчката и Тромбози - ОХАА',
    category: 'Cinema & TV',
    year: '2024',
    image: '/projects/oxaa.jpg', 
    videoUrl: 'https://player.vimeo.com/video/1114772616',
    description: 'Официален музикален видеоклип.',
    details: 'Динамичен музикален монтаж, съобразен с бийта и енергията на трака. Цветови корекции и стилизиране, които подчертават ъндърграунд атмосферата.',
    specs: ['Music Video', 'Editing', 'Color Grading']
  },
  {
    id: 'krista-music-video',
    title: 'KRISTA - „Вселена“ (Artone & FKAjazz RemiX)',
    category: 'Cinema & TV',
    year: '2025',
    image: '/projects/krista.jpg', 
    videoUrl: 'https://www.youtube.com/embed/62BIG15T2GQ',
    description: 'Музикален видеоклип.',
    details: 'Артистичен и ритмичен монтаж, съобразен с ремикса на песента. Гладък ритъм и стилна цветова палитра.',
    specs: ['Music Video', 'VFX', 'Color Grading']
  },
  {
    id: 'cinema-city-summer-2025',
    title: 'Cinema City Summer Trailers Recap',
    category: 'Cinema & TV',
    year: '2025',
    image: '/projects/cinema-city.jpg',
    videoUrl: 'https://www.youtube.com/embed/aKCavUDQHRs',
    description: 'Epic summer blockbuster trailer compilation.',
    details: 'Masterful trailer editing synchronizing explosive blockbuster visuals with a massive cinematic score.',
    specs: ['Trailer', 'Cinematic', 'Audio Sync']
  },
  {
    id: 'cinema-city-halloween-2024',
    title: 'Cinema City Halloween 2024',
    category: 'Cinema & TV',
    year: '2024',
    image: '/projects/cc-halloween.jpg',
    videoUrl: 'https://www.youtube.com/embed/zufsigBywcE',
    description: 'Theatrical Halloween promo campaign.',
    details: 'Tension-building editing techniques, jump-cuts, and horror-themed sound design.',
    specs: ['Trailer', 'Horror', 'Sound Design']
  },
  {
    id: 'comic-con-2023',
    title: 'Comic-Con Bulgaria Trailer',
    category: 'Cinema & TV',
    year: '2023',
    image: '/projects/comic-con.jpg',
    videoUrl: 'https://www.youtube.com/embed/GIu0tIbWGmY',
    description: 'Official event trailer for Aniventure Comic-Con.',
    details: 'Action-packed event promo highlighting cosplay, gaming, and pop culture.',
    specs: ['Event Promo', 'Dynamic']
  },
  {
    id: 'gender-power-africa',
    title: 'Gender Power in Africa',
    category: 'Documentary',
    year: '2024',
    image: '/projects/africa-doc.jpg',
    videoUrl: 'https://www.youtube.com/embed/AOkQoIwZuEE',
    description: 'Documentary analysis of imbalances shaping women\'s lives.',
    details: 'Sensitive, narrative-driven editing focusing on impactful interviews and authentic b-roll storytelling.',
    specs: ['Documentary', 'Storytelling']
  },
  {
    id: 'gymstreet-commercial',
    title: 'GYMSTREET Commercial',
    category: 'Commercial',
    year: '2025',
    image: '/projects/gymstreet.jpg', 
    videoUrl: 'https://www.youtube.com/embed/2Y2Kk0R8yK8',
    description: 'Визуално въздействаща реклама за метаверс платформата Gymstreet.io.',
    details: 'Динамичен комерсиален монтаж, който съчетава реални лайфстайл и спортни кадри с 3D метаверс анимации, моушън графика и модерен саунд дизайн за представянето на иновативна виртуална среда.',
    specs: ['Commercial', 'Metaverse', 'Motion Graphics', 'Sound Design']
  },
];

const categories = ['All', 'Commercial', 'Corporate', 'Cinema & TV', 'Documentary', 'AI & R&D'];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const isAll = activeFilter === 'All';
  
  // Филмът от Кан винаги е първи
  const featuredProject = projectsData[0];
  
  // Всички останали проекти подреждаме в грида според филтъра
  const gridProjects = isAll 
    ? projectsData.slice(1) // Ако е All, показва всички без първия
    : projectsData.filter(project => project.category === activeFilter); // Ако има филтър, показва само тези от категорията

  return (
    <section id="work" className="relative w-full py-32 px-6 md:px-16 lg:px-24 bg-[#050505] text-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Хедър и Филтри */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Selected Masterpieces</span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-neutral-100 mt-3">The Showreel</h2>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-neutral-100 text-neutral-900 font-medium' 
                    : 'bg-transparent border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ПИЕДЕСТАЛ (Показва се само на филтър "All") */}
        {isAll && featuredProject && (
          <div 
            onClick={() => setSelectedProject(featuredProject)}
            className="group relative w-full h-[60vh] md:h-[75vh] rounded-2xl overflow-hidden cursor-pointer border border-neutral-800 hover:border-[#D4AF37]/50 transition-colors duration-700 mb-12 shadow-2xl bg-neutral-950"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 blur-2xl scale-110 transition-all duration-1000 group-hover:opacity-20"
              style={{ backgroundImage: `url(${featuredProject.image})` }}
            ></div>

            <img 
              src={featuredProject.image} 
              alt={featuredProject.title} 
              className="relative z-10 w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 pointer-events-none">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 rounded-full shadow-lg">
                  Cannes Award Winner
                </span>
                {/* ГОДИНАТА Е ПРЕМАХНАТА ОТ ТУК */}
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-3">{featuredProject.title}</h3>
              <p className="text-lg text-neutral-300 max-w-2xl font-light hidden md:block">{featuredProject.description}</p>
            </div>
            
            <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-24 h-24 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center pl-2">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        )}

        {/* ГРИД С ВСИЧКИ ОСТАНАЛИ ПРОЕКТИ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.length > 0 ? (
            gridProjects.map(project => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-neutral-800 hover:border-neutral-500 transition-colors duration-500 bg-neutral-900"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" 
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                    {/* ГОДИНАТА Е ПРЕМАХНАТА ОТ ТУК */}
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white leading-tight">{project.title}</h4>
                  </div>
                </div>
                {/* Play бутон */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center pl-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-3 py-20 text-center text-neutral-500 font-light text-lg">
              There are no projects found in this category.
            </div>
          )}
        </div>
      </div>

      {/* МОДАЛ С ВИДЕО ПЛЕЙЪР */}
      {selectedProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl">
          <div data-lenis-prevent className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-2xl custom-scrollbar" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 text-neutral-400 hover:text-white text-xl p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer border border-neutral-800">✕</button>
            <div className="mb-6 pr-12">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{selectedProject.year}</span>
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">{selectedProject.category}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-white">{selectedProject.title}</h3>
            </div>
            
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-neutral-800 bg-black relative">
              {selectedProject.videoUrl ? (
                <iframe src={selectedProject.videoUrl} title={selectedProject.title} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              ) : (
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-60" />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
              <div className="md:col-span-2">
                <h4 className="text-sm uppercase tracking-widest text-neutral-400 mb-3">About the Project</h4>
                <p className="text-neutral-300 font-light leading-relaxed text-base">{selectedProject.details}</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Technical Specs</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.specs.map((spec, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}