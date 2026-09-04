import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { BuildNotesCard } from '@/components/BuildNotesCard';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { Platform } from '@/components/sections/Platform';
import { FarmerExperience } from '@/components/sections/FarmerExperience';
import { Grounding } from '@/components/sections/Grounding';
import { Capabilities } from '@/components/sections/Capabilities';
import { TechStack } from '@/components/sections/TechStack';
import { SkipTarget } from '@/components/SkipTarget';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <SkipTarget />
      <Hero />
      <TechStack />
      <Products />
      <Platform />
      <section id="farmer" aria-label="Farmer experience"><FarmerExperience /></section>
      <Grounding />
      <Capabilities />
      <section className="container-narrow pb-8">
        <BuildNotesCard />
      </section>
      <Footer />
    </main>
  );
}
