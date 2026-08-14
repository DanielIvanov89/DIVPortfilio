'use client';

import React from 'react';

export default function Philosophy() {
  return (
    <section className="w-full py-32 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-neutral-900 flex justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Надпис Philosophy */}
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-8">
          Philosophy
        </span>
        
        {/* Основен кинематографичен цитат */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight text-white">
          "Editing isn't just cutting footage — <br className="hidden md:block"/>
          <span className="text-neutral-600 italic">It's shaping emotion, structure, and meaning.</span>"
        </h2>

      </div>
    </section>
  );
}