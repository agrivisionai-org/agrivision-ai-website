'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/press', label: 'Press' },
  { href: '/careers', label: 'Careers' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      {/* CSS, not framer-motion. Nav renders on every page, so importing the library here
          pulled it onto /privacy, /terms, every blog post and every role page -- none of
          which animate anything. The slide-in is a keyframe in globals.css instead. */}
      <header
        className={`nav-slide-in fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'pt-3' : 'pt-5'}`}
      >
        <div className="container-narrow">
          <div
            className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 ${
              scrolled
                ? 'border-ink-900/10 bg-white/90 shadow-[0_12px_40px_-20px_rgba(20,23,28,0.35)] backdrop-blur-xl'
                : 'border-ink-900/[0.06] bg-white/70 backdrop-blur-md'
            }`}
          >
            <Link href="/" aria-label="AGRIVISION AI">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-ink-900/[0.06] bg-ink-50/60 p-1 lg:flex">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-600 transition-colors hover:bg-white hover:text-ink-900 hover:shadow-[0_1px_2px_rgba(20,23,28,0.06)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Link href="/contact" className="btn-ghost px-3">
                Contact us
              </Link>
              <a href="https://yieldaiglobal.com" target="_blank" rel="noopener" className="btn-primary px-4 py-2 text-sm">
                Start Free Trial <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-900/10 bg-white lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-4 w-4 text-ink-900" /> : <Menu className="h-4 w-4 text-ink-900" />}
            </button>
          </div>
        </div>
      </header>

      {/* No AnimatePresence: the exit animation is not worth the library. Opens with a CSS
          keyframe, closes immediately. */}
      <>
        {open && (
          <div
            id="mobile-menu"
            className="menu-drop fixed inset-x-4 top-20 z-40 rounded-2xl border border-ink-900/10 bg-white p-4 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-50"
                >
                  {l.label}
                </Link>
              ))}
              <a href="https://yieldaiglobal.com" target="_blank" rel="noopener" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </>
    </>
  );
}
