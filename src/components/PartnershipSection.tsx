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
    number: '01',
    bestFor: 'SaaS tools, banks, accelerators, AI companies, infrastructure providers.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L12 7H17L13 10.5L14.5 16L10 13L5.5 16L7 10.5L3 7H8L10 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Lead Sponsor',
    description:
      'Maximum visibility and direct engagement with founders shaping AI-powered startups.',
    perks: [
      'Co-branding on event as Lead Sponsor',
      'Speaking or insight slot during program',
      'Logo across all digital and physical materials',
      'Direct founder engagement during networking',
      'Featured in post-event recap and media',
      'Optional implementation or demo desk',
    ],
  },
  {
    number: '02',
    bestFor: 'Founder communities, tech hubs, women in tech groups, VC communities, operator networks.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 10C6 10 7.5 13 10 13C12.5 13 14 10 14 10C14 10 12.5 7 10 7C7.5 7 6 10 6 10Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
    label: 'Community Partner',
    description:
      'Align your community with the next generation of AI-powered African startups.',
    perks: [
      'Brand featured as ecosystem partner',
      'Access to curated founder room',
      'Community shoutouts across promotions',
      'Logo on event website and materials',
      'Post-event recap mention',
      'Priority invite allocation for members',
    ],
  },
]

// ─── Component ─────────────────────────────────────────────────────────────

export default function PartnershipSection() {
  return (
    <section
      id="partner"
      aria-label="Partner with Startups Blueprint"
      className="w-full bg-[#F2F2F2] px-6 pb-20 pt-16 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="mb-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_320px]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-raleway text-[11px] font-bold uppercase tracking-[0.15em] text-brand-blue"
            >
              Partnership Opportunities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
              className="mt-3 font-syne font-extrabold uppercase leading-[0.92] tracking-tight text-[#1C1A1A]"
              style={{ fontSize: 'clamp(36px, 4vw, 70px)' }}
            >
              Partner with<br />Startups Blueprint.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="font-raleway text-[14px] leading-[1.8] text-[#1C1A1A]/55 lg:pt-3 lg:text-right"
          >
            30+ founders, operators, and ecosystem leaders. One curated room.
            If your brand belongs in the next generation of African startups — this is where you show up.
          </motion.p>
        </div>

        {/* ── Tier cards ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.label}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 cursor-default"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2F2F2] text-brand-blue">
                    {tier.icon}
                  </span>
                  <span className="font-syne text-[13px] font-bold text-[#1C1A1A]/15">
                    {tier.number}
                  </span>
                </div>
                <p className="mt-5 font-syne text-[22px] font-bold text-[#1C1A1A]">
                  {tier.label}
                </p>
                <p className="mt-2 font-raleway text-[15px] leading-[1.7] text-[#1C1A1A]/55">
                  {tier.description}
                </p>
                <p className="mt-3 font-raleway text-[13px] leading-relaxed text-[#1C1A1A]/40">
                  <span className="font-semibold text-[#1C1A1A]/50">Best for:</span>{' '}
                  {tier.bestFor}
                </p>
              </div>

              <ul className="mt-6 flex flex-col gap-3" role="list">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="7" cy="7" r="6" stroke="#0147FF" strokeOpacity="0.25" strokeWidth="1" />
                      <path
                        d="M4.5 7l1.8 1.8L9.5 5"
                        stroke="#0147FF"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-raleway text-[14px] leading-relaxed text-[#1C1A1A]/60">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── CTA strip ──────────────────────────────────────── */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-4 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#1C1A1A] px-8 py-8 sm:flex-row sm:items-center md:px-10"
        >
          <div>
            <p className="font-raleway text-[11px] font-bold uppercase tracking-[0.15em] text-brand-blue">
              Ready to partner?
            </p>
            <p className="mt-1 font-syne text-[20px] font-extrabold text-white sm:text-[24px]">
              Let's build something meaningful together.
            </p>
          </div>

          <a
            href="mailto:partnerships@startupsblueprint.com?subject=Partnership%20Inquiry%20%E2%80%94%20Startup%20Blueprint%20%2726&body=Hi%2C%0A%0AI'm%20interested%20in%20partnering%20with%20Startup%20Blueprint%20'.%0A%0ACompany%3A%0AContact%20name%3A%0APartnership%20interest%3A"
            className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-brand-blue px-8 py-3.5 font-raleway text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_4px_rgba(1,71,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1A1A]"
          >
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              aria-hidden="true"
            />
            Send a Partnership Inquiry
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M2 8H14M14 8L10 4M14 8L10 12"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
