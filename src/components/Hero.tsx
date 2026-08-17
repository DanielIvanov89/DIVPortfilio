'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full bg-[#050505] overflow-hidden flex flex-col items-center pt-28 md:pt-32 pb-28 md:pb-36"
    >
      {/* Абстрактна "Light & Motion" визия */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop)' 
        }} 
      />

      {/* Плътна черна преливка за преход */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />

      {/* Основно съдържание */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-8 md:gap-10">
        
        {/* Малък етикет */}
        <div>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-[#D4AF37] border border-[#D4AF37]/30 bg-black/20 backdrop-blur-sm px-5 py-2 rounded-full">
            Video Editor
          </span>
        </div>

        {/* Лична визитка (Glassmorphism) */}
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl text-left max-w-5xl w-full">
          
          {/* Снимка (флипната по хоризонтала) */}
          <div className="w-56 h-56 md:w-64 md:h-64 relative shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <Image 
              src="/profile.jpg" 
              alt="Dany Ivanov - Profile" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-500 transform -scale-x-100"
            />
          </div>

          {/* Текст и Биография */}
          <div className="flex flex-col gap-6 text-neutral-300 font-light text-sm md:text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl text-white font-light">
              Hi, I'm <span className="font-medium">Dany Ivanov</span>
            </h2>
            
            <p>
              a video editor and post-production director with over 14 years of professional experience and a strong portfolio of high-end projects behind me.
            </p>
            
            <p>
              I work across commercials, social media content, documentary films, music videos, and corporate movies, always with a strong focus on storytelling, rhythm, and visual impact. One of the highlights of my career is serving as Post-Production Director on a documentary film that won the <strong className="text-white font-medium">Best Documentary Film award at the 2025 World Film Festival in Cannes</strong> — a project that reflects both creative vision and technical precision.
            </p>

            <div className="mt-2 flex flex-col gap-3 border-l-2 border-[#D4AF37] pl-4">
              <p className="text-white font-medium">I'm known for two things:</p>
              <p className="text-neutral-400">01. Hitting deadlines without compromise.</p>
              <p className="text-neutral-400">02. Delivering on time, every time, high-end, premium-quality results that bring real value to brands and creators.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Минималистичен скрол */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-400">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-neutral-400 to-transparent" />
      </div>
    </section>
  );
}