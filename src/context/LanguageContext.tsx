'use client';
import React, { createContext, useState, useContext } from 'react';
import { translations } from '@/data/translations';

type Language = 'bg' | 'en';

const LanguageContext = createContext({
  lang: 'bg' as Language,
  toggleLang: () => {},
  t: (key: string) => '', // Главният ключ-функция
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('bg');
  const toggleLang = () => setLang(prev => (prev === 'bg' ? 'en' : 'bg'));

  // Магическата функция, която чете по път (напр. "work.title")
  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[lang];
    for (const k of keys) {
      if (current[k] === undefined) return path;
      current = current[k];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);