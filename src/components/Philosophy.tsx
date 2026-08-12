'use client';

import React from 'react';

export default function Philosophy() {
  return (
    <section className="w-full py-32 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-neutral-900 flex justify-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Лява част: Кинематографичен цитат */}
        {/* Корекция: добавени relative и lg: префикси пред sticky класовете */}
        <div className="w-full lg:w-1/2 relative lg:sticky lg:top-32">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-8">
            Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight text-white mb-6">
            "Editing isn't just cutting footage — <br/>
            <span className="text-neutral-600 italic">It's shaping emotion, structure, and meaning.</span>"
          </h2>
        </div>

        {/* Дясна част: Биография и подход */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 text-neutral-400 font-light text-base md:text-lg leading-relaxed pt-2">
          <p>
            <strong className="text-white font-medium">Hi, I'm Dany Ivanov</strong> — a video editor and post-production director with over 14 years of professional experience and a strong portfolio of high-end projects behind me.
          </p>
          
          <p>
            I work across commercials, social media content, documentary films, music videos, and corporate movies, always with a strong focus on storytelling, rhythm, and visual impact. One of the highlights of my career is serving as Post-Production Director on a documentary film that won the <strong className="text-white font-medium">Best Documentary Film award at the 2025 World Film Festival in Cannes</strong> — a project that reflects both creative vision and technical precision.
          </p>

          {/* Специален акцент върху дисциплината */}
          <div className="p-8 md:p-10 mt-4 rounded-3xl bg-neutral-900/30 border border-neutral-800">
            <h3 className="text-white text-xl md:text-2xl font-light mb-6">I'm known for two things:</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <span className="text-neutral-500 mt-1">01.</span>
                <span className="text-neutral-300">Hitting deadlines without compromise.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-neutral-500 mt-1">02.</span>
                <span className="text-neutral-300">Delivering on time, every time, high-end, premium-quality results that bring real value to brands and creators.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}