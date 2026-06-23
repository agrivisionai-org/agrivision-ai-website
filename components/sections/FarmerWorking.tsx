'use client';

import { motion } from 'framer-motion';

/**
 * FarmerWorking — an animated side-view scene of a tractor working the field.
 * Pure SVG + CSS/Framer animation: sun, drifting clouds, birds, rolling hills,
 * a tractor driving across plowing rows, dust trail, exhaust puffs, and crops
 * sprouting in its wake. Designed for a light, Avante-style hero.
 */
export function FarmerWorking({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-[28px] ring-1 ring-ink-900/[0.06] shadow-[0_40px_90px_-50px_rgba(15,107,62,0.5)] ${className}`}>
      <svg
        viewBox="0 0 1200 620"
        className="block h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Animated tractor working a green field at sunrise"
      >
        <defs>
          <linearGradient id="fw-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BFE3F2" />
            <stop offset="45%" stopColor="#DBF0EC" />
            <stop offset="100%" stopColor="#FBF4DE" />
          </linearGradient>
          <radialGradient id="fw-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF4D6" />
            <stop offset="40%" stopColor="#FFD27A" />
            <stop offset="100%" stopColor="#FFB347" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fw-hillback" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9FD49A" />
            <stop offset="100%" stopColor="#7FC383" />
          </linearGradient>
          <linearGradient id="fw-hillmid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6FBE6E" />
            <stop offset="100%" stopColor="#4FA85A" />
          </linearGradient>
          <linearGradient id="fw-field" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4DA255" />
            <stop offset="100%" stopColor="#2F7F40" />
          </linearGradient>
          <linearGradient id="fw-soil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7A5230" />
            <stop offset="100%" stopColor="#5C3A20" />
          </linearGradient>
          <clipPath id="fw-fieldclip">
            <rect x="0" y="430" width="1200" height="190" />
          </clipPath>
        </defs>

        {/* SKY */}
        <rect x="0" y="0" width="1200" height="620" fill="url(#fw-sky)" />

        {/* SUN with slow rise + glow pulse */}
        <motion.g
          initial={{ y: 24, opacity: 0.85 }}
          animate={{ y: [24, 8, 24], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="965" cy="150" r="140" fill="url(#fw-sun)" />
          <circle cx="965" cy="150" r="52" fill="#FFE7A8" />
          <circle cx="965" cy="150" r="52" fill="#FFD166" opacity="0.7" />
        </motion.g>

        {/* CLOUDS drifting */}
        <Cloud x={180} y={120} scale={1} dur={48} />
        <Cloud x={620} y={90} scale={0.7} dur={64} delay={-20} />
        <Cloud x={420} y={180} scale={0.5} dur={80} delay={-40} />

        {/* BIRDS */}
        <Birds />

        {/* FAR HILLS */}
        <path d="M0 470 Q 180 380 380 440 T 760 420 T 1200 450 L1200 620 L0 620 Z" fill="url(#fw-hillback)" />
        <path d="M0 500 Q 250 430 520 480 T 1000 470 T 1200 500 L1200 620 L0 620 Z" fill="url(#fw-hillmid)" />

        {/* small trees on the ridge */}
        <Tree x={120} y={452} s={1} />
        <Tree x={300} y={438} s={0.8} />
        <Tree x={1050} y={460} s={1.1} />
        <Tree x={880} y={444} s={0.7} />

        {/* FIELD */}
        <rect x="0" y="430" width="1200" height="190" fill="url(#fw-field)" />

        {/* perspective crop rows (static base) */}
        <g clipPath="url(#fw-fieldclip)" opacity="0.5">
          {Array.from({ length: 26 }).map((_, i) => {
            const t = i / 25;
            const xTop = 600 + (t - 0.5) * 360;
            const xBot = 600 + (t - 0.5) * 2400;
            return (
              <line
                key={i}
                x1={xTop}
                y1={440}
                x2={xBot}
                y2={620}
                stroke="#2C7A3C"
                strokeWidth={1.2}
              />
            );
          })}
        </g>

        {/* TILLED SOIL STRIP the tractor reveals — grows then resets with the loop */}
        <g clipPath="url(#fw-fieldclip)">
          <motion.rect
            x="0"
            y="520"
            height="100"
            fill="url(#fw-soil)"
            initial={{ width: 0 }}
            animate={{ width: [0, 1200, 1200, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear', times: [0, 0.78, 0.92, 1] }}
          />
          {/* furrow lines on the tilled soil */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear', times: [0, 0.2, 0.92, 1] }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={i} x1="0" y1={534 + i * 16} x2="1200" y2={534 + i * 16} stroke="#42291740" strokeWidth="2" />
            ))}
          </motion.g>
        </g>

        {/* SPROUTS growing in the tractor's wake */}
        <Sprouts />

        {/* DUST TRAIL + TRACTOR group, traveling left to right */}
        <motion.g
          initial={{ x: -260 }}
          animate={{ x: [-260, 1260] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          {/* dust puffs trailing behind */}
          <DustTrail />
          {/* exhaust puffs */}
          <g className="origin-center">
            {[0, 1, 2].map((i) => (
              <circle
                key={i}
                cx={150}
                cy={500}
                r={7}
                fill="#C9C7BE"
                className="animate-puff"
                style={{ animationDelay: `${i * 0.7}s`, transformBox: 'fill-box', transformOrigin: 'center' }}
              />
            ))}
          </g>
          <Tractor />
        </motion.g>

        {/* FOREGROUND grass blades swaying */}
        <g>
          {Array.from({ length: 28 }).map((_, i) => {
            const x = (i / 27) * 1200 + 6;
            const h = 14 + ((i * 37) % 16);
            return (
              <g key={i} style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }}>
                <rect
                  x={x}
                  y={620 - h}
                  width="2.4"
                  height={h}
                  rx="1.2"
                  fill={i % 3 === 0 ? '#2F7F40' : '#3C8F4A'}
                  className="animate-sway"
                  style={{ animationDelay: `${(i % 7) * 0.25}s`, transformBox: 'fill-box', transformOrigin: 'bottom center' }}
                />
              </g>
            );
          })}
        </g>

        {/* soft top highlight */}
        <rect x="0" y="0" width="1200" height="620" fill="url(#fw-sky)" opacity="0" />
      </svg>

      {/* floating telemetry chips */}
      <FloatChip className="left-4 top-4 sm:left-6 sm:top-6">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
        Field 07 · plowing · 4.2 km/h
      </FloatChip>
      <FloatChip className="right-4 top-4 sm:right-6 sm:top-6">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" />
        Soil moisture optimal
      </FloatChip>
      <FloatChip className="bottom-4 right-4 sm:bottom-6 sm:right-6">
        🌱 12,480 seeds drilled today
      </FloatChip>
    </div>
  );
}

/* ----------------- tractor ----------------- */
function Tractor() {
  return (
    <g transform="translate(150 470) scale(1.05)">
      {/* implement / harrow behind */}
      <g transform="translate(-78 28)">
        <rect x="0" y="-6" width="6" height="26" rx="2" fill="#2A2E35" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1={6 + i * 7} y1="14" x2={2 + i * 7} y2="30" stroke="#3A3F47" strokeWidth="2.4" strokeLinecap="round" />
        ))}
        <rect x="-2" y="6" width="30" height="4" rx="2" fill="#1F2329" />
      </g>
      {/* tow bar */}
      <rect x="-80" y="20" width="40" height="4" rx="2" fill="#2A2E35" />

      {/* body */}
      <rect x="-44" y="-6" width="70" height="30" rx="6" fill="#0F6B3E" />
      <rect x="-44" y="14" width="70" height="10" rx="3" fill="#0B5531" />
      {/* hood */}
      <rect x="14" y="2" width="34" height="20" rx="5" fill="#138B4F" />
      <rect x="44" y="6" width="6" height="12" rx="2" fill="#0B5531" />
      {/* headlight */}
      <circle cx="49" cy="12" r="3" fill="#FFE08A" />
      {/* cabin */}
      <path d="M-40 -6 L-40 -34 Q-40 -40 -32 -40 L-8 -40 Q-2 -40 -2 -34 L-2 -6 Z" fill="#FFC23C" />
      <path d="M-36 -10 L-36 -32 Q-36 -36 -30 -36 L-10 -36 L-10 -10 Z" fill="#CDEAF5" opacity="0.95" />
      {/* roof */}
      <rect x="-44" y="-44" width="46" height="6" rx="3" fill="#0B5531" />
      {/* exhaust stack */}
      <rect x="6" y="-30" width="6" height="22" rx="2" fill="#2A2E35" />

      {/* rear wheel (big) */}
      <g transform="translate(-26 28)">
        <circle r="26" fill="#1B1F24" />
        <circle r="26" fill="none" stroke="#2E343C" strokeWidth="6" />
        <circle r="11" fill="#C9CDB4" />
        <g className="animate-wheel" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
          {[0, 45, 90, 135].map((a) => (
            <line key={a} x1={0} y1={-11} x2={0} y2={11} stroke="#8A8F76" strokeWidth="3" transform={`rotate(${a})`} />
          ))}
          {/* lug ticks */}
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={i} x="-2" y="-26" width="4" height="6" fill="#3A3F47" transform={`rotate(${i * 30})`} />
          ))}
        </g>
      </g>

      {/* front wheel (small) */}
      <g transform="translate(34 32)">
        <circle r="16" fill="#1B1F24" />
        <circle r="16" fill="none" stroke="#2E343C" strokeWidth="4" />
        <circle r="6" fill="#C9CDB4" />
        <g className="animate-wheel" style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDuration: '0.9s' }}>
          {[0, 60, 120].map((a) => (
            <line key={a} x1={0} y1={-6} x2={0} y2={6} stroke="#8A8F76" strokeWidth="2.5" transform={`rotate(${a})`} />
          ))}
        </g>
      </g>
    </g>
  );
}

/* ----------------- dust trail ----------------- */
function DustTrail() {
  return (
    <g transform="translate(150 498)">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={i}
          cx={-92 - i * 22}
          cy={0}
          r={10 + i * 3}
          fill="#CFC7AE"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.3, 1.7], y: [0, -10 - i * 3] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.18, ease: 'easeOut' }}
        />
      ))}
    </g>
  );
}

/* ----------------- sprouts ----------------- */
function Sprouts() {
  const items = Array.from({ length: 14 });
  return (
    <g clipPath="url(#fw-fieldclip)">
      {items.map((_, i) => {
        const x = 40 + i * (1120 / (items.length - 1));
        const delay = (i / items.length) * 16 * 0.78; // grows after tractor passes
        return (
          <motion.g
            key={i}
            transform={`translate(${x} 560)`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeOut',
              times: [0, delay / 16, Math.min(0.99, delay / 16 + 0.06), 0.92, 1],
            }}
            style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
          >
            <path d="M0 0 L0 -16" stroke="#2F7F40" strokeWidth="2" />
            <path d="M0 -8 Q -7 -12 -9 -6 Q -3 -5 0 -8" fill="#5DBB63" />
            <path d="M0 -12 Q 7 -16 9 -10 Q 3 -9 0 -12" fill="#5DBB63" />
          </motion.g>
        );
      })}
    </g>
  );
}

/* ----------------- clouds ----------------- */
function Cloud({ x, y, scale, dur, delay = 0 }: { x: number; y: number; scale: number; dur: number; delay?: number }) {
  return (
    <motion.g
      initial={{ x }}
      animate={{ x: [x, x + 160] }}
      transition={{ duration: dur, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay }}
      opacity={0.92}
    >
      <g transform={`translate(0 ${y}) scale(${scale})`}>
        <ellipse cx="0" cy="0" rx="46" ry="22" fill="#fff" />
        <ellipse cx="34" cy="6" rx="34" ry="18" fill="#fff" />
        <ellipse cx="-34" cy="6" rx="30" ry="16" fill="#fff" />
        <ellipse cx="0" cy="10" rx="58" ry="16" fill="#fff" />
      </g>
    </motion.g>
  );
}

/* ----------------- birds ----------------- */
function Birds() {
  return (
    <motion.g
      initial={{ x: 1300, y: 0 }}
      animate={{ x: [-200, 1300], y: [0, -30, 10, 0] }}
      transition={{ duration: 26, repeat: Infinity, ease: 'linear', delay: -6 }}
      opacity={0.7}
    >
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${i * 36} ${i % 2 ? 70 : 60} q 8 -8 16 0 q 8 -8 16 0`}
          stroke="#33414C"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </motion.g>
  );
}

/* ----------------- tree ----------------- */
function Tree({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-2" y="0" width="4" height="14" fill="#5C3A20" />
      <circle cx="0" cy="-6" r="12" fill="#3C8F4A" />
      <circle cx="-8" cy="0" r="9" fill="#4FA85A" />
      <circle cx="8" cy="0" r="9" fill="#4FA85A" />
    </g>
  );
}

/* ----------------- floating chip ----------------- */
function FloatChip({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -4, 0] }}
      transition={{ y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
      className={`absolute z-10 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-ink-700 shadow-[0_8px_24px_-12px_rgba(20,23,28,0.35)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
