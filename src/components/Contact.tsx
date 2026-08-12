'use client';

import React from 'react';

export default function Contact() {
  return (
    <section className="relative w-full py-32 md:py-40 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-neutral-900 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Лек фонов ефект за дълбочина */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-8">
          Next Steps
        </span>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white mb-8">
          Let's create something <br className="hidden md:block" />
          <span className="italic text-neutral-400">extraordinary together.</span>
        </h2>
        
        <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Whether you're ready to start your next project or have a question, I'd love to hear from you. Reach out via email or phone, and I'll respond promptly. Let's bring your vision to life.
        </p>

        {/* Контакти */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <a 
            href="mailto:dany.ivanov.89@gmail.com" 
            className="group flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-600 mb-2">Email</span>
            <span className="text-lg md:text-xl font-light text-neutral-200 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-1">
              dany.ivanov.89@gmail.com
            </span>
          </a>

          <div className="hidden md:block w-px h-12 bg-neutral-800" />

          <a 
            href="tel:+359877323364" 
            className="group flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-600 mb-2">Phone</span>
            <span className="text-lg md:text-xl font-light text-neutral-200 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-1">
              +359 877 32 33 64
            </span>
          </a>
        </div>

        {/* Социални мрежи / Footer */}
        <div className="mt-32 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between w-full text-xs font-mono text-neutral-600 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} DANIEL IVANOV</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a 
              href="https://www.instagram.com/daniel_ivanov_89/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a 
              href="www.youtube.com/@TheDanielIvanov?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}