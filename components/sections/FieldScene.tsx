'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow } from '../primitives';
import { Plane, Droplets, Wifi, Sun, Eye } from 'lucide-react';

export function FieldScene() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* faint light wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 10%, rgba(15,107,62,0.08) 0%, transparent 65%)',
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionEyebrow>Smart field · live AI</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
              From sky to soil —{' '}
              <span className="gradient-text-green">every signal, working together</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-700">
              YieldAI Global ties together drone imagery, soil sensors, and smart irrigation into one
              live decision layer for every farm.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Scene3D />
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          <Capability icon={Plane} title="Autonomous drone scans" body="Hyperspectral imagery flown on schedule — plant-level vigor mapped in minutes." />
          <Capability icon={Droplets} title="Precision irrigation" body="Smart sprinklers actuate by zone, soil moisture, weather window — not by clock." />
          <Capability icon={Wifi} title="Distributed soil sensors" body="Microclimate + soil telemetry stream into the AI 24/7, edge-computed on the field." />
        </div>
      </div>
    </section>
  );
}

function Capability({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="card-surface p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary/15 to-transparent text-brand-primary">
        <Icon className="h-4 w-4" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p>
    </div>
  );
}

/* ---------------- 3D scene ---------------- */

function Scene3D() {
  return (
    <div className="relative mx-auto mt-14 aspect-[16/10] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0a1014] via-[#0b1418] to-[#040608]">
      {/* sun */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[18%] top-[14%] h-28 w-28 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,210,150,0.9) 0%, rgba(255,160,80,0.5) 35%, transparent 70%)',
          filter: 'blur(2px)',
        }}
      />

      {/* mountains silhouette */}
      <svg
        aria-hidden
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-[26%] h-[15%] w-full opacity-50"
      >
        <path
          d="M0 200 L0 130 L120 80 L210 110 L300 60 L420 100 L520 70 L640 110 L760 50 L880 95 L990 70 L1100 110 L1200 80 L1200 200 Z"
          fill="rgba(15,107,62,0.4)"
        />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-[30%] h-[14%] w-full opacity-70"
      >
        <path
          d="M0 200 L0 150 L150 110 L260 140 L390 90 L520 130 L640 100 L780 140 L900 95 L1040 130 L1200 100 L1200 200 Z"
          fill="rgba(15,107,62,0.6)"
        />
      </svg>

      {/* perspective stage */}
      <div
        className="absolute inset-0"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '50% 30%',
        }}
      >
        {/* drone shadow on ground (kept on-plane) */}
        <DroneShadow />

        {/* ground plane (tilted) */}
        <div
          className="absolute left-1/2 top-[42%] -translate-x-1/2"
          style={{
            width: '180%',
            height: '110%',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(64deg)',
            transformOrigin: '50% 0',
          }}
        >
          {/* base soil */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(36,68,40,0.95) 0%, rgba(20,32,20,0.95) 50%, rgba(8,12,10,1) 100%)',
            }}
          />
          {/* crop rows */}
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                'repeating-linear-gradient(90deg, rgba(93,187,99,0.55) 0px, rgba(93,187,99,0.55) 4px, rgba(15,107,62,0.15) 4px, rgba(15,107,62,0.15) 28px)',
              maskImage:
                'radial-gradient(ellipse 90% 80% at 50% 0%, #000 35%, transparent 90%)',
            }}
          />
          {/* dirt paths between zones */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent 0px, transparent 280px, rgba(40,28,18,0.85) 280px, rgba(40,28,18,0.85) 295px)',
            }}
          />
          {/* grid overlay */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background:
                'linear-gradient(rgba(93,187,99,0.5) 1px, transparent 1px) 0 0/100px 100px, linear-gradient(90deg, rgba(93,187,99,0.5) 1px, transparent 1px) 0 0/100px 100px',
              maskImage:
                'radial-gradient(ellipse 80% 70% at 50% 0%, #000 30%, transparent 80%)',
            }}
          />
          {/* sensors as glowing dots — placed in 2D plane, will appear in perspective */}
          {[
            { left: '20%', top: '18%' },
            { left: '46%', top: '8%' },
            { left: '72%', top: '22%' },
            { left: '32%', top: '36%' },
            { left: '64%', top: '44%' },
            { left: '52%', top: '60%' },
          ].map((p, i) => (
            <motion.span
              key={i}
              className="absolute h-3 w-3 rounded-full bg-brand-accent"
              style={{
                left: p.left,
                top: p.top,
                boxShadow: '0 0 18px 4px rgba(10,132,255,0.7)',
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25 }}
            />
          ))}

          {/* sprinklers — bases */}
          {SPRINKLERS.map((s, i) => (
            <div
              key={i}
              className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: s.left,
                top: s.top,
                background: 'radial-gradient(circle, #cbd5e1 0%, #475569 70%)',
                boxShadow: '0 0 8px rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>

        {/* sprinkler water arcs (drawn on top of plane, screen space) */}
        {SPRINKLERS.map((s, i) => (
          <SprinklerArc key={`arc-${i}`} cx={s.screen.x} cy={s.screen.y} delay={i * 0.6} />
        ))}

        {/* drone */}
        <Drone />
      </div>

      {/* floating UI chips */}
      <FloatingChip className="left-4 top-4" icon={<Eye className="h-3 w-3" />}>
        AI scan · Plot 7 · 96% vigor
      </FloatingChip>
      <FloatingChip className="right-4 top-16" icon={<Droplets className="h-3 w-3" />}>
        Irrigation zone B · 14 min remaining
      </FloatingChip>
      <FloatingChip className="left-6 bottom-4" icon={<Sun className="h-3 w-3" />}>
        Spray window opens 18:42
      </FloatingChip>
      <FloatingChip className="right-4 bottom-4" icon={<Plane className="h-3 w-3" />}>
        Drone DJ-04 · battery 78%
      </FloatingChip>

      {/* bottom glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            'linear-gradient(180deg, transparent, rgba(15,107,62,0.25) 60%, rgba(0,0,0,0.6))',
        }}
      />
    </div>
  );
}

const SPRINKLERS = [
  { left: '22%', top: '24%', screen: { x: '24%', y: '70%' } },
  { left: '50%', top: '34%', screen: { x: '50%', y: '78%' } },
  { left: '74%', top: '24%', screen: { x: '76%', y: '70%' } },
];

function SprinklerArc({ cx, cy, delay }: { cx: string; cy: string; delay: number }) {
  // Two opposing fan-shaped water arcs sweeping
  return (
    <div className="pointer-events-none absolute" style={{ left: cx, top: cy }}>
      {[0, 180].map((rot, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 220,
            height: 90,
            left: -110,
            top: -90,
            transformOrigin: '50% 100%',
            transform: `rotate(${rot}deg)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: delay + i * 1.5, times: [0, 0.1, 0.85, 1] }}
        >
          <svg viewBox="0 0 220 90" className="h-full w-full">
            <defs>
              <linearGradient id={`spray-${cx}-${rot}`} x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(10,132,255,0)" />
                <stop offset="40%" stopColor="rgba(10,132,255,0.45)" />
                <stop offset="100%" stopColor="rgba(180,220,255,0.85)" />
              </linearGradient>
            </defs>
            {/* arcs */}
            {[0.6, 0.95].map((r, idx) => (
              <motion.ellipse
                key={idx}
                cx="110"
                cy="90"
                rx={100 * r}
                ry={80 * r}
                stroke={`url(#spray-${cx}-${rot})`}
                strokeWidth={1.2}
                fill="none"
                strokeDasharray="2 6"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: [0, 0.9, 0], scale: [0.3, 1, 1.05] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: delay + i * 1.5 + idx * 0.18,
                  ease: 'easeOut',
                }}
              />
            ))}
            {/* droplets */}
            {Array.from({ length: 5 }).map((_, k) => {
              const angle = (k / 4) * Math.PI;
              const x = 110 + Math.cos(angle) * 90;
              const y = 90 - Math.sin(angle) * 70;
              return (
                <motion.circle
                  key={k}
                  cx={x}
                  cy={y}
                  r={1.6}
                  fill="rgba(170,210,255,0.95)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0.5] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: delay + i * 1.5 + k * 0.09,
                    ease: 'easeOut',
                  }}
                />
              );
            })}
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function Drone() {
  // path waypoints over the field
  const xKeys = ['18%', '42%', '68%', '84%', '60%', '32%', '18%'];
  const yKeys = ['30%', '22%', '26%', '34%', '40%', '32%', '30%'];

  return (
    <motion.div
      className="absolute"
      style={{ left: '0%', top: '0%', willChange: 'transform' }}
      initial={false}
      animate={{ left: xKeys, top: yKeys }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.16, 0.32, 0.5, 0.66, 0.83, 1],
      }}
    >
      {/* gentle bob */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="-translate-x-1/2 -translate-y-1/2"
      >
        <DroneSVG />
      </motion.div>

      {/* downward scan beam */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 90,
          height: 220,
          marginLeft: -45,
          marginTop: 0,
          background:
            'linear-gradient(180deg, rgba(93,187,99,0.55) 0%, rgba(93,187,99,0.18) 35%, transparent 75%)',
          clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0 100%)',
          filter: 'blur(1px)',
          transformOrigin: 'top',
          transform: 'translateY(8px)',
        }}
      />
    </motion.div>
  );
}

function DroneSVG() {
  return (
    <svg viewBox="0 0 120 60" className="w-[110px] drop-shadow-[0_8px_18px_rgba(0,0,0,0.6)]">
      <defs>
        <linearGradient id="droneBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a3340" />
          <stop offset="100%" stopColor="#0d121a" />
        </linearGradient>
      </defs>
      {/* arms */}
      <rect x="8" y="28" width="104" height="4" rx="2" fill="#1a2230" />
      <rect x="58" y="14" width="4" height="32" rx="2" fill="#1a2230" />
      {/* central body */}
      <ellipse cx="60" cy="30" rx="22" ry="10" fill="url(#droneBody)" stroke="rgba(255,255,255,0.1)" />
      {/* camera */}
      <circle cx="60" cy="34" r="4" fill="#5DBB63" />
      <circle cx="60" cy="34" r="2" fill="#0E1116" />
      {/* status LED */}
      <circle cx="60" cy="22" r="1.5" fill="#0A84FF">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
      </circle>
      {/* motors */}
      {[
        [10, 30],
        [110, 30],
        [60, 12],
        [60, 48],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="#0d121a" stroke="rgba(255,255,255,0.15)" />
          <RotorBlur cx={x} cy={y} />
        </g>
      ))}
    </svg>
  );
}

function RotorBlur({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {[0, 60, 120].map((rot) => (
        <ellipse
          key={rot}
          cx={cx}
          cy={cy}
          rx="11"
          ry="1.5"
          fill="rgba(180,200,220,0.2)"
          transform={`rotate(${rot} ${cx} ${cy})`}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`${rot} ${cx} ${cy}`}
            to={`${rot + 360} ${cx} ${cy}`}
            dur="0.18s"
            repeatCount="indefinite"
          />
        </ellipse>
      ))}
    </g>
  );
}

function DroneShadow() {
  const xKeys = ['18%', '42%', '68%', '84%', '60%', '32%', '18%'];
  const yKeys = ['72%', '64%', '68%', '76%', '82%', '74%', '72%'];
  return (
    <motion.div
      className="pointer-events-none absolute h-8 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
      style={{ filter: 'blur(10px)', opacity: 0.55 }}
      animate={{ left: xKeys, top: yKeys, scale: [1, 0.95, 1.05, 1.1, 1.05, 0.95, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', times: [0, 0.16, 0.32, 0.5, 0.66, 0.83, 1] }}
    />
  );
}

function FloatingChip({
  className = '',
  icon,
  children,
}: {
  className?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -4, 0] }}
      transition={{ y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
      className={`absolute z-10 flex items-center gap-2 rounded-full border border-white/10 bg-brand-dark/80 px-3 py-1.5 text-[11px] font-medium text-ink-100 shadow-2xl ${className}`}
    >
      <span className="text-brand-secondary">{icon}</span>
      {children}
    </motion.div>
  );
}
