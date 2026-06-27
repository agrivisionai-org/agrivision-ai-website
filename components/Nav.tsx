'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#agrisphere', label: 'AgriSphere' },
  { href: '#farmer', label: 'For Farmers' },
  { href: '#careers', label: 'Careers' },
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

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'pt-3' : 'pt-5'}`}
      >
        <div className="container-narrow">
          <div
            className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 ${
              scrolled
                ? 'border-ink-900/10 bg-white/90 shadow-[0_12px_40px_-20px_rgba(20,23,28,0.35)] backdrop-blur-xl'
                : 'border-ink-900/[0.06] bg-white/70 backdrop-blur-md'
            }`}
          >
            <a href="#" aria-label="AGRIVISION AI">
              <Logo />
            </a>

            <nav className="hidden items-center gap-1 rounded-full border border-ink-900/[0.06] bg-ink-50/60 p-1 lg:flex">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-600 transition-colors hover:bg-white hover:text-ink-900 hover:shadow-[0_1px_2px_rgba(20,23,28,0.06)]"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a href="#contact" className="btn-ghost px-3">
                Book demo
              </a>
              <a href="#contact" className="btn-primary px-4 py-2 text-sm">
                Request early access <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-xl border border-ink-900/10 bg-white p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4 text-ink-900" /> : <Menu className="h-4 w-4 text-ink-900" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-ink-900/10 bg-white p-4 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-50"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
                Request early access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
