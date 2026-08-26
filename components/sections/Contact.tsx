'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import { Mail, ArrowUpRight, MessageSquare, Handshake, Briefcase, CheckCircle2 } from 'lucide-react';

const PATHS = [
  {
    icon: MessageSquare,
    title: 'Try YieldAI Global',
    body: 'Our flagship product is live in India, the USA & Canada. Start a free trial.',
    cta: 'Start free trial',
    href: 'https://yieldaiglobal.com',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    body: 'Cooperatives, agribusinesses, distributors — let&rsquo;s build together.',
    cta: 'Partner with us',
    href: 'mailto:hello@agrivisionai.org',
  },
  {
    icon: Briefcase,
    title: 'Investor relations',
    body: 'For investors and capital partners interested in our journey.',
    cta: 'Contact IR',
    href: 'mailto:hello@agrivisionai.org',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mesh-soft pointer-events-none absolute inset-0 -z-10" />
      <GradientOrb className="left-1/2 -translate-x-1/2 top-20" color="#0F6B3E" size={700} />
      <div className="container-narrow">
        <div className="text-center">
          <Reveal eager>
            <SectionEyebrow>Contact</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1} eager>
            <h1 className="mx-auto mt-6 max-w-3xl text-balance font-display text-display-lg text-ink-900">
              Let&rsquo;s build the future of agriculture,{' '}
              <span className="gradient-text-green">together</span>.
            </h1>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {PATHS.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.08}>
              <a
                href={p.href}
                className="card-surface group flex h-full flex-col p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary/15 to-transparent text-brand-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{p.title}</h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-ink-600"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-all group-hover:gap-2.5">
                  {p.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl border border-ink-900/[0.07] bg-white p-7 shadow-[0_24px_60px_-30px_rgba(15,107,62,0.28)] sm:p-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink-900">Send us a message</h3>
              <p className="mt-3 text-sm text-ink-600">
                Have a question, idea, or proposal? Drop us a note and we&rsquo;ll get back within
                one business day.
              </p>

              <div className="mt-8 space-y-4">
                <ContactInfo
                  label="General"
                  email="hello@agrivisionai.org"
                />
                <ContactInfo
                  label="Product support"
                  email="support@agrivisionai.org"
                />
                <ContactInfo label="Careers" email="careers@agrivisionai.org" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ label, email }: { label: string; email: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-ink-900/[0.07] bg-ink-50 p-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary">
        <Mail className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-ink-500">{label}</div>
        <a href={`mailto:${email}`} className="text-sm font-medium text-ink-900 hover:text-brand-primary">
          {email}
        </a>
      </div>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-brand-secondary/30 bg-brand-primary/10 p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-brand-primary" />
        <h4 className="mt-4 font-display text-xl font-semibold text-ink-900">Opening your email…</h4>
        <p className="mt-2 text-sm text-ink-700">
          Finish sending in your email app — or write us directly at{' '}
          <a href="mailto:hello@agrivisionai.org" className="font-medium text-brand-primary hover:underline">hello@agrivisionai.org</a>.
        </p>
        <button onClick={() => setSent(false)} className="mt-6 btn-ghost">
          Back to form →
        </button>
      </motion.div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const get = (k: string) => String(fd.get(k) || '');
        const subject = `[agrivisionai.org] ${get('reason') || 'Inquiry'}${get('name') ? ' — ' + get('name') : ''}`;
        const body = `Name: ${get('name')}\nEmail: ${get('email')}\nCompany: ${get('company')}\nReason: ${get('reason')}\n\n${get('message')}`;
        setSent(true);
        const a = document.createElement('a');
        a.href = `mailto:hello@agrivisionai.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        a.click();
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" type="text" placeholder="Jane Doe" autoComplete="name" required />
        <Field label="Email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
      </div>
      <Field label="Company" name="company" type="text" placeholder="Company Inc." autoComplete="organization" />
      <FieldSelect
        label="Reason for contact"
        name="reason"
        options={['General inquiry', 'Partnership', 'Investor relations', 'Press', 'Other']}
      />
      <FieldTextarea label="Message" name="message" placeholder="Tell us a bit about your needs." />
      <button type="submit" className="btn-primary mt-2 w-full justify-center">
        Send message <ArrowUpRight className="h-4 w-4" />
      </button>
      <p className="text-center text-[10px] text-ink-500">
        This opens your email app to send to hello@agrivisionai.org. See our{' '}
        <Link href="/privacy" className="underline hover:text-brand-primary">privacy policy</Link>.
      </p>
    </form>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">{label}</span>
      <input
        {...rest}
        className="mt-1.5 block w-full rounded-xl border border-ink-900/[0.12] bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-400 outline-none transition-colors focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30"
      />
    </label>
  );
}

function FieldSelect({ label, name, options }: { label: string; name?: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">{label}</span>
      <select name={name} className="mt-1.5 block w-full rounded-xl border border-ink-900/[0.12] bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30">
        {options.map((o) => (
          <option key={o} className="bg-white">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function FieldTextarea({ label, name, placeholder }: { label: string; name?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">{label}</span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="mt-1.5 block w-full resize-none rounded-xl border border-ink-900/[0.12] bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-400 outline-none transition-colors focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30"
      />
    </label>
  );
}
