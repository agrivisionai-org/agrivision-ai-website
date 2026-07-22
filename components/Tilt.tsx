'use client';

import { useRef, type ReactNode } from 'react';

/**
 * Mouse-parallax 3D tilt wrapper. Premium depth without a library.
 * - Pointer only (skipped on touch / coarse pointers).
 * - Respects prefers-reduced-motion (no-op).
 * - Children can opt into depth with `data-depth="N"` (px of translateZ) or
 *   the `.tilt-layer` class for a sensible default lift.
 */
export function Tilt({
  children,
  className = '',
  max = 8,
  glare = false,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  const reduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = () =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || reduced() || !fine()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty('--ry', `${px * max * 2}deg`);
      el.style.setProperty('--rx', `${-py * max * 2}deg`);
      el.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
      el.style.setProperty('--my', `${(py + 0.5) * 100}%`);
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`tilt-3d ${className}`}
    >
      <div className="tilt-3d__inner">
        {children}
        {glare && <span aria-hidden className="tilt-3d__glare" />}
      </div>
    </div>
  );
}
