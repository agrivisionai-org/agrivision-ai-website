import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Products } from '@/components/sections/Products';
import { AgriSphere } from '@/components/sections/AgriSphere';
import { FieldScene } from '@/components/sections/FieldScene';
import { FarmerExperience } from '@/components/sections/FarmerExperience';
import { Capabilities } from '@/components/sections/Capabilities';
import { Sustainability } from '@/components/sections/Sustainability';
import { Services } from '@/components/sections/Services';
import { Dashboard } from '@/components/sections/Dashboard';
import { Team } from '@/components/sections/Team';
import { Careers } from '@/components/sections/Careers';
import { Contact } from '@/components/sections/Contact';
import { TechStack } from '@/components/sections/TechStack';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TechStack />
      <About />
      <Products />
      <AgriSphere />
      <section id="field" aria-label="Smart field"><FieldScene /></section>
      <section id="farmer" aria-label="Farmer experience"><FarmerExperience /></section>
      <Capabilities />
      <Sustainability />
      <Services />
      <Dashboard />
      <Team />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
