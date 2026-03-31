'use client'

import Image from 'next/image'
import Link from 'next/link'
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

const AVATARS = [
  { src: '/images/ibukun.jpg', alt: 'Speaker' },
  { src: '/images/oyin.png', alt: 'Speaker' },
  { src: '/images/fola.jpg', alt: 'Speaker' },
]

function AvatarStack() {
  return (
    <div className="flex items-center">
      {AVATARS.map((avatar, i) => (
        <div
          key={i}
          className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white/30 bg-white/10"
          style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: AVATARS.length - i }}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            sizes="44px"
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function BentoSection() {
  return (
    <section
      aria-label="What to expect at Startups Blueprint"
      className="w-full bg-brand-dark px-6 py-16 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-[1fr_1fr]">

          {/* ── Card 1 — Blue, spans full height left ── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(1,71,255,0.25)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="flex flex-col justify-between rounded-3xl bg-brand-blue p-8 lg:row-span-2 lg:p-10 cursor-default"
          >
            <div>
              <h3 className="font-syne text-[28px] font-extrabold text-white sm:text-[32px]">
                Speakers
              </h3>

              <div className="mt-6 flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M3.5 14.5L14.5 3.5M14.5 3.5H6M14.5 3.5V12"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="font-raleway text-[14px] leading-[1.8] text-white/80">
                  Hear from women founders, CX strategists, AI practitioners, and ecosystem leaders
                  who are actively building and scaling AI-powered startups across Africa.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <AvatarStack />

              <Link
                href="#speakers"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 font-raleway text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                And more
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* ── Card 2 — Elevated dark, top right ── */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="flex flex-col justify-between rounded-3xl border border-white/[0.05] bg-[#252323] p-8 lg:p-9 cursor-default"
          >
            <div>
              <h3 className="font-syne text-[24px] font-extrabold text-white sm:text-[28px]">
                Focus Areas
              </h3>
              <p className="mt-4 font-raleway text-[14px] leading-[1.8] text-white/55">
                Explore AI-driven operations, customer experience design, startup automation,
                scalable CX frameworks, and structured growth systems built for African markets.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['AI Operations', 'CX Design', 'Automation', 'Scale Systems', 'African Markets'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-raleway text-[11px] font-medium text-white/50"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* ── Card 3 — Elevated dark, bottom right ── */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="flex flex-col justify-between rounded-3xl border border-white/[0.05] bg-[#252323] p-8 lg:p-9 cursor-default"
          >
            <div>
              <h3 className="font-syne text-[24px] font-extrabold leading-snug text-white sm:text-[28px]">
                Networking and Implementation
              </h3>
              <p className="mt-4 font-raleway text-[14px] leading-[1.8] text-white/55">
                Connect with fellow founders, engage with sponsors, and book your startup audit at
                the implementation desk. Every conversation at this event is designed to move you
                forward.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/15">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M8 2C5.8 2 4 3.8 4 6C4 8.2 5.8 10 8 10C10.2 10 12 8.2 12 6C12 3.8 10.2 2 8 2Z"
                    stroke="#0147FF"
                    strokeWidth="1.3"
                    fill="none"
                  />
                  <path
                    d="M2 14C2 12 4.7 11 8 11C11.3 11 14 12 14 14"
                    stroke="#0147FF"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              <p className="font-raleway text-[12px] text-white/40">
                Curated connections. Real outcomes.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
