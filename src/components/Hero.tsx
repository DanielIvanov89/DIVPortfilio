'use client';

import React from 'react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center"
    >
      {/* 
        Абстрактна "Light & Motion" визия. 
        Вместо студийни монитори, залагаме на уловена светлина, която излъчва премиум кино усещане.
      */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop)' 
        }} 
      />

      {/* Плътна черна преливка за преход */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent pointer-events-none" />

      {/* Текстът */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-[#D4AF37] border border-[#D4AF37]/30 bg-black/20 backdrop-blur-sm px-5 py-2 rounded-full">
            Artistic Direction & AI Filmmaking
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight text-white tracking-tight">
          Cinematic Vision
          <span className="block font-normal text-neutral-300 mt-2">Elevated to Art</span>
        </h1>

        <p className="mt-8 text-sm md:text-base text-neutral-400 font-light max-w-md mx-auto tracking-wide">
          Crafting narratives through light, motion, and digital precision.
        </p>
      </div>

      {/* Минималистичен скрол */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-400">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-neutral-400 to-transparent" />
      </div>
    </section>
  );
}