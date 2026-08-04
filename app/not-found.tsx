import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Home, Boxes, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-brand-primary/[0.05] via-paper to-paper px-5">
      <div className="w-full max-w-md text-center">
        <Link href="/" aria-label="AGRIVISION AI home" className="inline-flex"><Logo /></Link>
        <div className="mt-10 font-display text-7xl font-semibold tracking-tight text-ink-900">404</div>
        <h1 className="mt-3 font-display text-2xl font-semibold text-ink-900">Page not found</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-600">
          That page doesn&rsquo;t exist — or hasn&rsquo;t been built yet. We build
          AGRIVISION AI in public, so things move around. Here&rsquo;s the way back:
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
            <Home className="h-4 w-4" /> Home
          </Link>
          <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-primary/40 hover:text-brand-primary">
            <Boxes className="h-4 w-4" /> Products
          </Link>
          <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-primary/40 hover:text-brand-primary">
            <Mail className="h-4 w-4" /> Contact
          </Link>
        </div>
        <p className="mt-8 text-xs text-ink-500">AGRIVISION AI · Agrivisionai Inc · Detroit, Michigan</p>
      </div>
    </main>
  );
}
