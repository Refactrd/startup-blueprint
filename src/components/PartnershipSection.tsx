'use client'

import { motion } from 'framer-motion'

// ─── Animation ─────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
  }),
}

// ─── Partnership tiers ─────────────────────────────────────────────────────

const TIERS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L12 7H17L13 10.5L14.5 16L10 13L5.5 16L7 10.5L3 7H8L10 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    label: 'Title Sponsor',
    description: 'Maximum brand visibility across all event touchpoints — digital, physical, and post-event.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="10" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="8" y="6" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="14" y="2" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    label: 'Workshop Sponsor',
    description: 'Co-brand one of the expert-led implementation workshops and engage founders directly.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 10C6 10 7.5 13 10 13C12.5 13 14 10 14 10C14 10 12.5 7 10 7C7.5 7 6 10 6 10Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
    label: 'Community Partner',
    description: 'Align your brand with the African women-in-tech ecosystem and the Refactrd community.',
  },
]

// ─── Component ─────────────────────────────────────────────────────────────

export default function PartnershipSection() {
  return (
    <section
      id="partner"
      aria-label="Partner with Startup Blueprint '26"
      className="w-full bg-[#F2F2F2] px-6 pb-20 lg:pt-[100px] pt-8 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">

        {/*
          Two-column layout:
          Left  — heading, subtext, tier list
          Right — CTA card (blue, matching the footer panel style)
        */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_400px]">

          {/* ── LEFT ──────────────────────────────────────────── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col justify-between rounded-3xl bg-[#1E1C1C] px-8 py-10 md:px-10 md:py-12"
          >
            <div>
              {/* Eyebrow */}
              <p className="font-raleway text-[11px] font-bold uppercase  text-brand-blue">
                Partnership Opportunities
              </p>

              {/* Heading */}
              <h2 className="mt-3 font-syne text-[32px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[38px] lg:text-[44px]">
                Grow with us.{' '}
                <span className="text-brand-blue">Partner</span>{' '}
                with Startups Blueprint '26.
              </h2>

              {/* Body */}
              <p className="mt-4 max-w-lg font-raleway text-[14px] leading-[1.8] text-white">
                Startup Blueprint '26 brings together 50+ founders, operators, and ecosystem
                leaders in one curated room. If your brand is built for the next generation of
                African startups, this is where you belong.
              </p>
            </div>

            {/* Tier list */}
            <ul className="mt-10 flex flex-col gap-4" role="list">
              {TIERS.map((tier, i) => (
                <motion.li
                  key={tier.label}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-20px' }}
                  className="flex items-start gap-4 rounded-xl bg-white/5 px-5 py-4"
                >
                  {/* Icon */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                    {tier.icon}
                  </span>
                  <div>
                    <p className="font-syne text-[13px] font-bold text-white">{tier.label}</p>
                    <p className="mt-0.5 font-raleway text-[12px] leading-relaxed text-white">
                      {tier.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── RIGHT — CTA card ───────────────────────────────── */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col justify-between rounded-3xl bg-brand-blue px-8 py-10 md:px-10 md:py-12"
          >
            <div>
              {/* Decorative large quote mark */}
              <div className="mb-6 font-syne text-[80px] font-extrabold leading-none text-white/10 select-none" aria-hidden="true">
                "
              </div>

              <h3 className="font-syne text-[22px] font-extrabold leading-snug text-white sm:text-[26px]">
                Let's build something meaningful together.
              </h3>

              <p className="mt-4 font-raleway text-[13px] leading-[1.8] text-white">
                Whether you're looking to sponsor a session, co-brand a workshop, or align your
                ecosystem with Africa's most intentional startup event, we'd love to hear from you.
              </p>

              {/* What to expect list */}
              <ul className="mt-7 flex flex-col gap-3" role="list">
                {[
                  'Brand visibility across 500+ attendees',
                  'Speaking and workshop co-branding options',
                  'Implementation desk presence',
                  'Post-event digital mentions and recap features',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" stroke="white" strokeOpacity="0.3" strokeWidth="1.2" />
                      <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-raleway text-[13px] leading-relaxed text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <p className="mb-3 font-raleway text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
                Ready to partner?
              </p>
              <a
                href="mailto:partnerships@refactrd.com?subject=Partnership%20Inquiry%20%E2%80%94%20Startup%20Blueprint%20%2726&body=Hi%2C%0A%0AI'm%20interested%20in%20partnering%20with%20Startup%20Blueprint%20'26.%0A%0ACompany%3A%0AContact%20name%3A%0APartnership%20interest%3A"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 font-raleway text-sm font-semibold text-brand-blue transition-all duration-300 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
                Send a Partnership Inquiry
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M2 8H14M14 8L10 4M14 8L10 12" stroke="#0147FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <p className="mt-3 text-center font-raleway text-[11px] text-white">
                partnerships@refactrd.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}