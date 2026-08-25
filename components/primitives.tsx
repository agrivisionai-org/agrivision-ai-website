'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      // The `reveal` class exists so the <noscript> rule in app/layout.tsx can force these
      // visible. Without JS, framer-motion never animates and the inline opacity:0 would
      // leave the whole page blank below the hero.
      className={className ? `reveal ${className}` : 'reveal'}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({
  to,
  duration = 1800,
  prefix = '',
  suffix = '',
  format,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const display = format ? format(val) : Math.round(val).toLocaleString();
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-eyebrow">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_1px_rgba(15,107,62,0.5)]" />
      {children}
    </div>
  );
}

export function GradientOrb({
  className,
  color = '#0F6B3E',
  size = 600,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full opacity-[0.13] ${className ?? ''}`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        width: size,
        height: size,
      }}
    />
  );
}
