import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Credentials from '@/components/Credentials';
import Work from '@/components/Work';
import Philosophy from '@/components/Philosophy';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#050505] text-neutral-200 selection:bg-neutral-800 selection:text-white">
      <Hero />
      <Timeline />
      <Credentials />
      <Work />
      <Philosophy />
      <Partners />
      <Contact />
    </main>
  );
}