import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: 'Portfolio',
  description: 'Video Montage Specialist & AI Filmmaking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className="bg-[#050505] text-neutral-200">
      <body className="bg-[#050505] text-neutral-200 antialiased selection:bg-neutral-800 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}