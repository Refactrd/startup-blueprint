'use client'

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
    label: 'YOUR PERSONALISED AI SCORE',
    description:
      'Walk away with a personalised AI Score for your organisation. Know exactly where you stand, what gaps exist, and what to fix first to unlock operational efficiency.',
    // Number bottom-left, text top-right
    layout: 'number-bl',
  },
  {
    number: '02',
    label: 'HANDS-ON IMPLEMENTATION WORKSHOPS',
    description:
      'Participate in two expert-led workshops covering AI operations and customer experience design. Surface your gaps, clarify your priorities, and leave with a defined direction for execution.',
    // Number bottom-left, text top-right
    layout: 'number-bl',
  },
  {
    number: '03',
    label: 'BE PART OF A PUBLISHED CASE STUDY',
    description:
      "Selected participants will be featured in the Startups Blueprint '26 Insights Report, a published case study documenting how women-led African startups are structuring for the AI-powered",
    // Number bottom-right, text top-left
    layout: 'number-br',
  },
  {
    number: '04',
    label: 'YOUR STARTUP IMPLEMENTATION PATHWAY',
    description:
      'Leave with access to a structured implementation track built for your startup. Choose from the Customer Experience Blueprint, the AI Startup Operations Blueprint, or both. Each pathway includes a startup audit, system design, an implementation roadmap, and full execution support.',
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
      whileHover={{ y: -6, scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative flex h-[280px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.05] bg-[#252323] p-6 sm:h-[300px] lg:h-[320px]"
      style={{ transition: 'border-color 0.35s ease, box-shadow 0.35s ease' }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(45,90,227,0.35)'
        el.style.boxShadow = '0 0 32px 0 rgba(45,90,227,0.12), 0 8px 32px rgba(0,0,0,0.35)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(255,255,255,0.05)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* ── Top shimmer line on hover ── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] translate-x-[-100%] bg-gradient-to-r from-transparent via-brand-blue/70 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[100%] group-hover:opacity-100" />

      {/* ── Subtle inner glow overlay on hover ── */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* ── Label — always top, positioned based on layout ── */}
      <p
        className={`relative font-raleway text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-brand-blue/80 ${
          isNumberRight ? 'self-start text-left' : 'self-start text-left'
        }`}
      >
        {card.label}
      </p>

      {/* ── Description text — opposite corner to number ── */}
      {isNumberRight ? (
        <p className="relative mt-5 max-w-[55%] font-raleway text-[13px] leading-[1.75] text-white transition-colors duration-300 group-hover:text-white/80 lg:text-[14px]">
          {card.description}
        </p>
      ) : (
        <p className="relative mt-5 max-w-[55%] self-end text-right font-raleway text-[13px] leading-[1.75] text-white transition-colors duration-300 group-hover:text-white/80 lg:text-[14px]">
          {card.description}
        </p>
      )}

      {/* ── Giant number — bleeds off bottom edge ── */}
      <div
        className={`pointer-events-none absolute bottom-[-28px] select-none font-syne font-extrabold leading-none transition-opacity duration-300 group-hover:opacity-100 ${
          isNumberRight ? 'right-[-8px]' : 'left-[-8px]'
        }`}
        aria-hidden="true"
        style={{
          fontSize: 'clamp(140px, 18vw, 200px)',
          backgroundImage: 'linear-gradient(160deg, #2D5AE3 0%, #1E44C8 60%, #1233A8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.75,
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
      aria-label="Why Attend Startup Blueprint"
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
            className="font-raleway text-[14px] leading-[1.8] text-white lg:pt-3 lg:text-right"
          >
            Discover why Startups Blueprint is the must-attend event for women founders,
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