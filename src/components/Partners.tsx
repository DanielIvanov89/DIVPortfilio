'use client';

import React from 'react';

// Продуцентски партньори (3 на брой)
const productionPartners = [
  { name: 'BLCKSTMP', logo: '/logos/blckstmp.png' },
  { name: 'MEM', logo: '/logos/mem.png' },
  { name: 'Dizzart Studio', logo: '/logos/dizzart.png' },
];

// Клиенти и брандове (16 на брой)
const brands = [
  { name: 'Visa', logo: '/logos/visa.png' },
  { name: 'Maserati', logo: '/logos/maserati.png' },
  { name: 'Lidl', logo: '/logos/lidl.png' },
  { name: 'Cinema City', logo: '/logos/cinema-city.png' },
  { name: 'EGT', logo: '/logos/egt.png' },
  { name: 'Lukoil', logo: '/logos/lukoil.png' },
  { name: 'Eurospeed', logo: '/logos/eurospeed.png' },
  { name: 'Eko', logo: '/logos/eko.png' },
  { name: 'Milano Group', logo: '/logos/milano-group.png' },
  { name: 'Diel', logo: '/logos/diel.png' },
  { name: 'Stolichna Obshtina', logo: '/logos/stolichna-obshtina.png' },
  { name: 'Maxo.bg', logo: '/logos/maxo-bg.png' },
  { name: 'MK', logo: '/logos/mk.png' },
  { name: 'Aya', logo: '/logos/aya.png' },
  { name: 'Betano', logo: '/logos/betano.png' },
  { name: 'Via Vinera', logo: '/logos/via-vinera.png' },
  { name: 'Milano Group', logo: '/projects/milano-group.png'},
  { name: 'Kaolin', logo: '/logos/kaolin.png' },
];

export default function Partners() {
  return (
    <section className="w-full py-32 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Заглавна част */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Network</span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-neutral-200 mt-3">
              Partners & Clients
            </h2>
          </div>
          <p className="text-neutral-500 font-light max-w-md text-sm md:text-base pb-2">
            Collaborating with industry leaders and trusted production houses to deliver premium-quality visual experiences.
          </p>
        </div>

        {/* Секция: Production Partners */}
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-8 border-b border-neutral-800 pb-4">
            Production Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {productionPartners.map((partner, index) => (
              <div 
                key={`prod-${index}`} 
                className="group relative flex items-center justify-center h-40 md:h-48 rounded-2xl bg-neutral-200 hover:bg-white transition-colors duration-500 overflow-hidden cursor-default"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-full object-contain p-8 md:p-12 mix-blend-multiply opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-neutral-800 font-mono text-sm tracking-widest group-hover:text-black transition-colors duration-500 text-center px-2">
                  {partner.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Секция: Brands */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-8 border-b border-neutral-800 pb-4">
            Brands We've Worked With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {brands.map((brand, index) => (
              <div 
                key={`brand-${index}`} 
                className="group relative flex items-center justify-center h-32 rounded-2xl bg-neutral-200 hover:bg-white transition-colors duration-500 overflow-hidden cursor-default"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-contain p-6 mix-blend-multiply opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-neutral-800 font-mono text-sm tracking-widest group-hover:text-black transition-colors duration-500 text-center px-2">
                  {brand.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}