'use client';

import React from 'react';

const educationData = [
  {
    degree: 'Master of Animation Directing',
    institution: 'New Bulgarian University',
    years: '2011 — 2013'
  },
  {
    degree: 'Bachelor of Directing in Editing',
    institution: 'Southwestern University "Neofit Rilski"',
    years: '2007 — 2011'
  },
  {
    degree: 'High School - Photography',
    institution: 'National Professional High School of Polygraphy and Photography',
    years: '2003 — 2007'
  }
];

const qualificationsData = [
  { course: 'Game Modelling with Maya', date: 'July 2020' },
  { course: 'Visualization with 3DS Max', date: 'June 2020' },
  { course: 'Motion Design with After Effects', date: 'May 2020' },
  { course: 'Video Processing with Premiere Pro', date: 'April 2020' },
  { course: 'UI / UX Web Design', date: 'Feb - Mar 2020' },
  { course: 'Graphic Design (Ps & Ai)', date: 'Oct - Nov 2019' },
  { course: 'Design Fundamentals', date: 'September 2019' }
];

const softwareArsenal = [
  'DaVinci Resolve Studio', 'Avid Media Composer', 'Adobe Premiere Pro', 
  'Adobe After Effects', 'Adobe Photoshop', 'Autodesk Maya', 
  '3DS Max', 'Higgsfield (AI)', 'Xcode', 'Vercel', 'GitHub'
];

export default function Credentials() {
  return (
    <section className="w-full py-24 bg-[#0a0a0a] border-t border-neutral-900 text-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-3">Foundation & Tools</span>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-neutral-100">Credentials & Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Column 1: Formal Education */}
          <div className="space-y-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 border-b border-neutral-800 pb-4">Academic Background</h3>
            <div className="space-y-6">
              {educationData.map((item, i) => (
                <div key={i} className="group">
                  <span className="text-xs font-mono text-neutral-500 mb-1 block">{item.years}</span>
                  <h4 className="text-lg font-light text-neutral-200 group-hover:text-white transition-colors">{item.degree}</h4>
                  <p className="text-sm text-neutral-400 font-light mt-1">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: SoftUni Qualifications */}
          <div className="space-y-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 border-b border-neutral-800 pb-4">Specialized Training</h3>
            <div className="space-y-4">
              <p className="text-sm font-light text-neutral-400 mb-4">Comprehensive specializations via <span className="text-neutral-200">SoftUni Creative</span>:</p>
              {qualificationsData.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-neutral-800/50 pb-2">
                  <span className="text-sm font-light text-neutral-300">{item.course}</span>
                  <span className="text-xs font-mono text-neutral-600">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Software Arsenal */}
          <div className="space-y-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 border-b border-neutral-800 pb-4">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-2">
              {softwareArsenal.map((software, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-md text-xs font-mono text-neutral-400 hover:text-white hover:border-neutral-600 transition-all cursor-default"
                >
                  {software}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}