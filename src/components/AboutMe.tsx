'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="w-full pt-32 pb-20 px-6 md:px-16 lg:px-24 bg-[#050505] flex justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start">
        
        {/* Лява част: Снимка */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          {/* Контейнерът за снимката (можеш да премахнеш grayscale, ако искаш да е цветна) */}
          <div className="relative w-64 h-64 md:w-full md:aspect-square rounded-2xl overflow-hidden border border-neutral-800 grayscale hover:grayscale-0 transition duration-500">
            <Image 
              src="/profile.jpg" 
              alt="Dany Ivanov - Profile" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Дясна част: Текстът от скрийншота */}
        <div className="w-full md:w-2/3 flex flex-col gap-8 text-neutral-400 font-light text-base md:text-lg leading-relaxed pt-2">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              Hi, I'm <span className="font-medium">Dany Ivanov</span>
            </h1>
            <p className="mb-4">
              — a video editor and post-production director with over 14 years of professional experience and a strong portfolio of high-end projects behind me.
            </p>
            <p>
              I work across commercials, social media content, documentary films, music videos, and corporate movies, always with a strong focus on storytelling, rhythm, and visual impact. One of the highlights of my career is serving as Post-Production Director on a documentary film that won the <strong className="text-white font-medium">Best Documentary Film award at the 2025 World Film Festival in Cannes</strong> — a project that reflects both creative vision and technical precision.
            </p>
          </div>

          {/* Акцент върху дисциплината */}
          <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/30 border border-neutral-800">
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