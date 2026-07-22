import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { FarmerExperience } from '@/components/sections/FarmerExperience';
import { Capabilities } from '@/components/sections/Capabilities';
import { TechStack } from '@/components/sections/TechStack';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TechStack />
      <Products />
      <section id="farmer" aria-label="Farmer experience"><FarmerExperience /></section>
      <Capabilities />
      <Footer />
    </main>
  );
}
