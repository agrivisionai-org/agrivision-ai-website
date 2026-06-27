'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, CountUp, GradientOrb } from '../primitives';
import {
  TrendingUp,
  CloudRain,
  Leaf,
  Tag,
  Globe2,
  Cpu,
  Layers,
  Rocket,
  ArrowDownRight,
} from 'lucide-react';

export function Dashboard() {
  return (
    <section id="dashboard" className="relative overflow-hidden py-28 sm:py-36">
      <GradientOrb className="left-1/2 top-0 -translate-x-1/2" color="#0F6B3E" size={700} />
      <div className="container-narrow">
        <div className="max-w-3xl">
          <Reveal>
            <SectionEyebrow>Analytics dashboard · prototype</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
              Every signal that matters,{' '}
              <span className="gradient-text-green">in one view</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-700">
              A preview of the unified control plane we&rsquo;re building — yield, weather, crop health,
              market prices, and AI capabilities. Everything below is a{' '}
              <span className="font-semibold text-ink-900">prototype with sample data</span>, not live
              figures.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-sun/30 bg-brand-sun/10 px-3 py-1.5 text-xs font-semibold text-brand-sun">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" /> Prototype · sample data
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-14 grid gap-4 lg:grid-cols-12">
            {/* Yield trends */}
            <Widget icon={TrendingUp} title="Yield trends" badge="sample" className="lg:col-span-5 lg:row-span-2">
              <YieldChart />
            </Widget>

            {/* Weather */}
            <Widget icon={CloudRain} title="Weather" className="lg:col-span-3">
              <WeatherBlock />
            </Widget>

            {/* Crop health */}
            <Widget icon={Leaf} title="Crop health" className="lg:col-span-4">
              <Donut value={86} label="Healthy plots" />
            </Widget>

            {/* Market prices */}
            <Widget icon={Tag} title="Market prices" className="lg:col-span-4">
              <MarketTable />
            </Widget>

            {/* Country insights */}
            <Widget icon={Globe2} title="Country insights" badge="3 target" className="lg:col-span-3">
              <CountryList />
            </Widget>

            {/* Build status */}
            <Widget icon={Layers} title="Build status" badge="MVP" className="lg:col-span-5">
              <BuildStatus />
            </Widget>

            {/* Launch progress */}
            <Widget icon={Rocket} title="Launch progress" badge="Phase 1" className="lg:col-span-3">
              <LaunchProgress />
            </Widget>

            {/* AI capabilities */}
            <Widget icon={Cpu} title="AI capabilities" badge="sample" className="lg:col-span-4">
              <AICapabilities />
            </Widget>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Widget({
  icon: Icon,
  title,
  badge,
  badgeTrend,
  className = '',
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge?: string;
  badgeTrend?: 'up' | 'down';
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4 }}
      className={`card-surface flex h-full flex-col p-5 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-3.5 w-3.5 text-brand-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-600">
            {title}
          </span>
        </div>
        {badge && (
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
              badgeTrend === 'up'
                ? 'border-brand-primary/30 bg-brand-primary/10 text-brand-primary'
                : badgeTrend === 'down'
                ? 'border-red-500/30 bg-red-500/10 text-red-600'
                : 'border-ink-900/[0.07] bg-ink-50 text-ink-700'
            }`}
          >
            {badgeTrend === 'down' && <ArrowDownRight className="h-3 w-3" />}
            {badge}
          </span>
        )}
      </div>
      <div className="mt-4 flex-1">{children}</div>
    </motion.div>
  );
}

function YieldChart() {
  const data = [42, 48, 45, 53, 58, 55, 62, 67, 64, 72, 78, 81];
  const max = Math.max(...data);
  const w = 600;
  const h = 220;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - (v / max) * (h - 20);
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-end justify-between">
        <div>
          <div className="font-display text-3xl font-semibold text-ink-900">
            <CountUp to={68.4} format={(n) => n.toFixed(1)} suffix="K t" />
          </div>
          <div className="mt-1 text-xs text-ink-500">Projected annual yield</div>
        </div>
        <div className="flex gap-2 text-[10px] text-ink-500">
          {['1M', '3M', '1Y', 'All'].map((p) => (
            <span
              key={p}
              className={`rounded-md px-2 py-1 ${
                p === '1Y' ? 'bg-ink-100 text-ink-900' : 'hover:text-ink-900'
              }`}
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex-1 rounded-xl border border-ink-900/[0.07] bg-ink-50 p-3">
        <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="yieldFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5DBB63" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#5DBB63" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((r) => (
            <line key={r} x1="0" x2={w} y1={h * r} y2={h * r} stroke="rgba(20,23,28,0.08)" strokeDasharray="3 6" />
          ))}
          <motion.path
            d={`${points} L${w},${h} L0,${h} Z`}
            fill="url(#yieldFill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <motion.path
            d={points}
            stroke="#5DBB63"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          {data.map((v, i) => {
            const x = (i / (data.length - 1)) * w;
            const y = h - (v / max) * (h - 20);
            return <circle key={i} cx={x} cy={y} r="2.5" fill="#5DBB63" />;
          })}
        </svg>
      </div>

      <div className="mt-2 grid grid-cols-12 text-center text-[9px] text-ink-400">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function WeatherBlock() {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-ink-900">28°<span className="text-base text-ink-500">C</span></div>
      <div className="text-xs text-ink-600">Partly cloudy · Iowa, USA</div>
      <div className="mt-4 grid grid-cols-4 gap-1.5 text-center text-[10px] text-ink-600">
        {[
          { d: 'Mon', t: 27, c: 'bg-brand-primary/15' },
          { d: 'Tue', t: 29, c: 'bg-brand-primary/25' },
          { d: 'Wed', t: 26, c: 'bg-brand-accent/15' },
          { d: 'Thu', t: 24, c: 'bg-brand-accent/25' },
        ].map((d) => (
          <div key={d.d} className={`rounded-lg ${d.c} py-2`}>
            <div className="text-ink-900">{d.t}°</div>
            <div>{d.d}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-brand-accent/30 bg-brand-accent/10 p-2.5 text-[11px] text-ink-800">
        Rain probability ↑ 64% Wed — delay spray window.
      </div>
    </div>
  );
}

function Donut({ value, label }: { value: number; label: string }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-5">
      <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
        <circle cx="50" cy="50" r={r} stroke="rgba(20,23,28,0.08)" strokeWidth="10" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          stroke="#5DBB63"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - value / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div>
        <div className="font-display text-3xl font-semibold text-ink-900">
          <CountUp to={value} suffix="%" />
        </div>
        <div className="text-xs text-ink-600">{label}</div>
        <div className="mt-2 space-y-1 text-[11px] text-ink-700">
          <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> Healthy 86%</div>
          <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Stressed 10%</div>
          <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-400" /> At risk 4%</div>
        </div>
      </div>
    </div>
  );
}

function MarketTable() {
  const rows = [
    { c: 'Wheat', p: '284 /t', d: '+2.4%', up: true },
    { c: 'Rice', p: '412 /t', d: '+0.8%', up: true },
    { c: 'Maize', p: '198 /t', d: '-1.2%', up: false },
    { c: 'Cotton', p: '1,820 /t', d: '+3.6%', up: true },
    { c: 'Coffee', p: '3,140 /t', d: '-0.4%', up: false },
  ];
  return (
    <div className="divide-y divide-ink-900/[0.07]">
      {rows.map((r) => (
        <div key={r.c} className="flex items-center justify-between py-2 text-sm">
          <span className="text-ink-800">{r.c}</span>
          <div className="flex items-center gap-3">
            <span className="tabular-nums text-ink-900">{r.p}</span>
            <span className={`text-xs ${r.up ? 'text-brand-primary' : 'text-red-600'}`}>{r.d}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CountryList() {
  const cs = [
    { c: 'India 🇮🇳', v: 58 },
    { c: 'USA 🇺🇸', v: 28 },
    { c: 'Canada 🇨🇦', v: 14 },
  ];
  return (
    <div className="space-y-2.5">
      {cs.map((c, i) => (
        <div key={c.c}>
          <div className="flex items-center justify-between text-xs">
            <span className="text-ink-800">{c.c}</span>
            <span className="tabular-nums text-ink-600">{c.v}%</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink-100">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${c.v}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function BuildStatus() {
  const built = ['Crop advisory', 'Pest intelligence', 'Market insights', 'Dashboard'];
  const planned = ['Yield prediction', 'IoT', 'Smart irrigation'];
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <div className="font-display text-2xl font-semibold text-ink-900">MVP in development</div>
      </div>
      <div className="text-xs text-ink-500">Modules across build &amp; roadmap</div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> Built
          </div>
          <div className="space-y-1.5">
            {built.map((m) => (
              <div key={m} className="flex items-center gap-2 text-[11px] text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> {m}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-sun">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" /> Planned
          </div>
          <div className="space-y-1.5">
            {planned.map((m) => (
              <div key={m} className="flex items-center gap-2 text-[11px] text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full border border-ink-300" /> {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LaunchProgress() {
  const steps: { l: string; status: 'done' | 'active' | 'next' }[] = [
    { l: 'Research', status: 'done' },
    { l: 'Build', status: 'active' },
    { l: 'Launch', status: 'next' },
  ];
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-ink-900">Currently building</div>
      <div className="text-xs text-ink-600">Research → Build → Launch</div>
      <div className="mt-4 space-y-3">
        {steps.map((s) => (
          <div key={s.l} className="flex items-center gap-2.5 text-sm">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                s.status === 'done'
                  ? 'bg-brand-primary'
                  : s.status === 'active'
                  ? 'bg-brand-sun ring-2 ring-brand-sun/30'
                  : 'border border-ink-300'
              }`}
            />
            <span className="text-ink-800">{s.l}</span>
            <span
              className={`ml-auto text-[10px] font-semibold uppercase tracking-wider ${
                s.status === 'done'
                  ? 'text-brand-primary'
                  : s.status === 'active'
                  ? 'text-brand-sun'
                  : 'text-ink-400'
              }`}
            >
              {s.status === 'done' ? 'Done' : s.status === 'active' ? 'Active' : 'Next'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AICapabilities() {
  const caps: { l: string; status: 'MVP' | 'Roadmap' }[] = [
    { l: 'Crop advisory', status: 'MVP' },
    { l: 'Disease detection', status: 'Roadmap' },
    { l: 'Weather', status: 'Roadmap' },
    { l: 'Yield prediction', status: 'Roadmap' },
  ];
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-ink-900">AI powered</div>
      <div className="text-xs text-ink-600">Capability status · sample</div>
      <div className="mt-4 space-y-2">
        {caps.map((p) => (
          <div key={p.l} className="flex items-center justify-between text-xs">
            <span className="text-ink-700">{p.l}</span>
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                p.status === 'MVP'
                  ? 'border-brand-primary/30 bg-brand-primary/10 text-brand-primary'
                  : 'border-ink-900/[0.07] bg-ink-50 text-ink-600'
              }`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
