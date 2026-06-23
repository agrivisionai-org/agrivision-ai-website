export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Leaf mark — outlined leaf with branching veins, green gradient */}
      <svg viewBox="0 0 40 46" className="h-9 w-9 shrink-0" aria-hidden>
        <defs>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5DBB63" />
            <stop offset="55%" stopColor="#2E9E5B" />
            <stop offset="100%" stopColor="#0B5531" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#leafGrad)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          {/* leaf outline */}
          <path d="M25 5 C 9 13, 7 33, 16 42 C 33 35, 35 14, 25 5 Z" />
          {/* central vein / stem (extends below as the petiole) */}
          <path d="M16 42 Q 19 24 24 8" />
          {/* branching veins */}
          <path d="M18 35 L 12 33" />
          <path d="M19.5 29 L 26 28" />
          <path d="M21 23 L 15 20.5" />
          <path d="M22.5 17 L 28 15.5" />
        </g>
      </svg>

      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-tight text-ink-900">
          AGRIVISION <span className="text-brand-secondary">AI</span>
        </span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-500">
          AI for a sustainable future
        </span>
      </div>
    </div>
  );
}
