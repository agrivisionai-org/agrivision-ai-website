'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import {
  Wheat,
  Bug,
  FileText,
  Building2,
  Truck,
  TrendingUp,
  Brain,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react';

const SERVICES = [
  { icon: Wheat, title: 'Crop Advisory as a Service', body: 'AI advisors across the crop cycle — sowing, growth, harvest.' },
  { icon: Bug, title: 'Pest Diagnosis Service', body: 'Upload a photo, get species + treatment in seconds.' },
  { icon: FileText, title: 'Farm Documentation Service', body: 'Digital recordkeeping for plots, inputs, yield, compliance.' },
  { icon: Building2, title: 'Government Subsidy Filing', body: 'Eligibility matching + filing assistance across programs.' },
  { icon: Truck, title: 'Procurement Optimization', body: 'Optimize input procurement across seasons and markets.' },
  { icon: TrendingUp, title: 'Market Intelligence', body: 'Real-time prices, demand signals, and arbitrage windows.' },
  { icon: Brain, title: 'AI Agriculture Consulting', body: 'Strategic engagements for cooperatives and agribusinesses.' },
  { icon: Briefcase, title: 'Enterprise AI Solutions', body: 'Custom AI deployments for large-scale agriculture operators.' },
];

export function Services() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <GradientOrb className="-right-32 top-40" color="#0A84FF" size={500} />
      <div className="container-narrow">
        <div className="max-w-3xl">
          <Reveal>
            <SectionEyebrow>Services</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
              The AI services layer we&rsquo;re building for{' '}
              <span className="gradient-text-green">modern agriculture</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-700">
              From advisory to procurement to enterprise AI — the services we&rsquo;re building to power
              the products. Planned offerings, rolling out with the roadmap.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={0.05 + i * 0.05}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <motion.a
      href="/contact"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="card-surface group block h-full p-6"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary/20 to-transparent text-brand-primary">
          <Icon className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-ink-500 transition-all group-hover:text-ink-900" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p>
    </motion.a>
  );
}
