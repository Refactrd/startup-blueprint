'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── Animation ─────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
}

// ─── Card data ─────────────────────────────────────────────────────────────

const CARDS = [
  {
    number: '01',
    label: 'REAL FRAMEWORKS FOR SCALE',
    description:
      'Walk away with practical AI and CX frameworks you can apply to your startup immediately. No theory. No fluff. Just structured implementation.',
    // Number bottom-left, text top-right
    layout: 'number-bl',
  },
  {
    number: '02',
    label: 'HANDS-ON WORKSHOPS',
    description:
      'Participate in two expert-led implementation workshops designed to surface your gaps, clarify your priorities, and give you a defined direction for execution.',
    // Number bottom-left, text top-right
    layout: 'number-bl',
  },
  {
    number: '03',
    label: 'EXCLUSIVE ROUNDTABLE ACCESS',
    description:
      'Connect with growth-stage women founders, ecosystem partners, technology leaders, and implementation experts in an intentionally curated space.',
    // Number bottom-right, text top-left
    layout: 'number-br',
  },
  {
    number: '04',
    label: 'YOUR STARTUP BLUEPRINT',
    description:
      'Leave with more than notes. Leave with a defined startup structure, a mapped implementation pathway, and a clear next step toward scalable execution.',
    // Number bottom-right, text top-left
    layout: 'number-br',
  },
] as const

// ─── Individual card ────────────────────────────────────────────────────────

function WhyCard({
  card,
  index,
}: {
  card: (typeof CARDS)[number]
  index: number
}) {
  const isNumberRight = card.layout === 'number-br'

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="relative flex h-[280px] flex-col overflow-hidden rounded-2xl bg-[#1E1C1C] p-6 sm:h-[300px] lg:h-[320px]"
    >
      {/* ── Label — always top, positioned based on layout ── */}
      <p
        className={`font-raleway text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 ${
          isNumberRight ? 'self-start text-left' : 'self-start text-left'
        }`}
      >
        {card.label}
      </p>

      {/* ── Description text — opposite corner to number ── */}
      {isNumberRight ? (
        // Cards 03 & 04: text top-left (below label), number bottom-right
        <p className="mt-5 max-w-[55%] font-raleway text-[13px] lg:text-[15px] leading-[1.75] text-white/60">
          {card.description}
        </p>
      ) : (
        // Cards 01 & 02: text top-right, number bottom-left
        <p className="mt-5 self-end max-w-[55%] text-right font-raleway text-[13px] lg:text-[15px] leading-[1.75] text-white/60">
          {card.description}
        </p>
      )}

      {/* ── Giant number — bleeds off bottom edge ── */}
      {/*
        The number is positioned absolutely at the bottom.
        It intentionally overflows (overflow-hidden on parent clips it),
        creating the cropped-number effect from the design.
        Blue gradient matching the design's brand-blue to deeper blue.
      */}
      <div
        className={`pointer-events-none absolute bottom-[-28px] select-none font-syne font-extrabold leading-none ${
          isNumberRight ? 'right-[-8px]' : 'left-[-8px]'
        }`}
        aria-hidden="true"
        style={{
          fontSize: 'clamp(140px, 18vw, 200px)',
          background: 'linear-gradient(160deg, #0147FF 0%, #0035CC 60%, #001A88 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.9,
        }}
      >
        {card.number}
      </div>
    </motion.div>
  )
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function WhyAttendSection() {
  return (
    <section
      id="why-attend"
      aria-label="Why Attend Startup Blueprint '26"
      className="w-full bg-brand-dark px-6 pb-20 pt-16 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Header row: big heading left, descriptor right ── */}
        <div className="mb-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_320px]">
          {/* Massive heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-syne font-extrabold uppercase leading-[0.92] tracking-tight text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 100px)' }}
          >
            Why Attend?
          </motion.h2>

          {/* Descriptor — top right */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="font-raleway text-[14px] leading-[1.8] text-brand-muted/55 lg:pt-3 lg:text-right"
          >
            Discover why Startups Blueprint '26 is the must-attend event for women founders,
            operators, and decision makers building the next generation of African startups.
          </motion.p>
        </div>

        {/* ── 2×2 card grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CARDS.map((card, i) => (
            <WhyCard key={card.number} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}