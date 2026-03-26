'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── Animation ─────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const,  delay: i * 0.07 },
  }),
}

// ─── Speaker data ──────────────────────────────────────────────────────────
/*
  Speaker portrait images → public/images/speakers/
  ┌───────────────────────────────┬─────────────────────────────────────────┐
  │ File                          │ Speaker                                 │
  ├───────────────────────────────┼─────────────────────────────────────────┤
  │ speaker-keynote.jpg           │ Keynote Speaker (card 2, row 1)         │
  │ speaker-ibukun.jpg            │ Ibukun Ogunmola  (card 2, row 1 — used) │
  │ speaker-panelist.jpg          │ Ecosystem Partner panelist (card 4 r1)  │
  │ speaker-oyin.jpg              │ Oyin Dawodu (card 1, row 2)             │
  └───────────────────────────────┴─────────────────────────────────────────┘
  Recommended: portrait crop, min 400×520px, works well in B&W.
  Cards alternate: [text] [photo] [text] [photo] per row.
  Row 2 is offset: [photo] [text] [photo] [text] — checkerboard.
*/

type SpeakerCard =
  | { type: 'text'; name: string; role: string }
  | { type: 'photo'; name: string; role: string; src: string; fallback: string }

const ROW_1: SpeakerCard[] = [
  {
    type: 'text',
    name: 'Keynote Speaker TBC',
    role: 'KEYNOTE SPEAKER',
  },
  {
    type: 'photo',
    name: 'Ibukun Ogunmola',
    role: 'CX STRATEGIST',
    src: '/images/ibukun.jpg',
    fallback: 'from-zinc-600 to-zinc-800',
  },
  {
    type: 'text',
    name: 'Oyin Dawodu',
    role: 'AI OPERATIONS LEAD',
  },
  {
    type: 'photo',
    name: 'Panelist TBC',
    role: 'ECOSYSTEM PARTNER',
    src: '/images/oyin-dawodu.png',
    fallback: 'from-neutral-600 to-neutral-800',
  },
]

const ROW_2: SpeakerCard[] = [
  {
    type: 'photo',
    name: 'Speaker TBC',
    role: 'WORKSHOP LEAD',
    src: '/images/placeholder.jpg',
    fallback: 'from-stone-600 to-stone-800',
  },
  {
    type: 'text',
    name: 'Panelist TBC',
    role: 'AI PRACTITIONER',
  },
  {
    type: 'photo',
    name: 'Speaker TBC',
    role: 'ECOSYSTEM BUILDER',
    src: '/images/placeholder.jpg',
    fallback: 'from-slate-600 to-slate-800',
  },
  {
    type: 'text',
    name: 'Speaker TBC',
    role: 'FOUNDER & CEO',
  },
]

// ─── Card components ───────────────────────────────────────────────────────

function TextCard({ name, role, index }: { name: string; role: string; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="flex h-[280px] flex-col justify-between rounded-2xl bg-[#EBEBEB] p-6 lg:h-[320px]"
    >
      {/* Name — top */}
      <p className="font-syne text-[20px] font-bold leading-snug tracking-tight text-[#1C1A1A] lg:text-[22px]">
        {name}
      </p>

      {/* Role — bottom */}
      <p className="font-raleway text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1C1A1A]/50">
        {role}
      </p>
    </motion.div>
  )
}

function PhotoCard({
  name,
  role,
  src,
  fallback,
  index,
}: {
  name: string
  role: string
  src: string
  fallback: string
  index: number
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="group relative h-[280px] overflow-hidden rounded-2xl lg:h-[320px]"
    >
      {/* Fallback gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${fallback}`} />

      {/* Photo — B&W via CSS filter */}
      <Image
        src={src}
        alt={`${name} — ${role}`}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="relative z-10 object-cover object-top grayscale transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Subtle bottom gradient for legibility */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black/60 to-transparent" />
    </motion.div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────

export default function SpeakersSection() {
  return (
    <section
      id="speakers"
      aria-label="Meet the Speakers"
      className="w-full bg-brand-dark px-6 pb-20 pt-16 md:px-10 lg:px-16 xl:px-24"
    >
      {/* ── Header ──────────────────────────────────────────── */}
      <div className="mx-auto mb-14 flex max-w-7xl items-start justify-between gap-8">
        {/* Big heading — left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-syne text-[35px] font-extrabold uppercase lg:leading-[0.95] leading-[40px] tracking-tight text-white sm:text-[48px] lg:text-[50px]">
            Meet the top
            <br />
            <span className="relative inline-block">
              incredible
              {/* Underline matching design */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[4px] origin-left rounded-full bg-white"
                aria-hidden="true"
              />
            </span>
            <br />
            speakers
          </h2>
        </motion.div>

        {/* Small descriptor — top right, matching design */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden max-w-[180px] text-right font-raleway text-[13px] leading-relaxed text-brand-muted/60 lg:block"
        >
          Meet the industry leaders shaping the future of African startups.
        </motion.p>
      </div>

      {/* ── Card grid ───────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl space-y-4">
        {/* Row 1: text | photo | text | photo */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ROW_1.map((card, i) =>
            card.type === 'text' ? (
              <TextCard key={card.name + i} name={card.name} role={card.role} index={i} />
            ) : (
              <PhotoCard
                key={card.name + i}
                name={card.name}
                role={card.role}
                src={(card as Extract<SpeakerCard, { type: 'photo' }>).src}
                fallback={(card as Extract<SpeakerCard, { type: 'photo' }>).fallback}
                index={i}
              />
            )
          )}
        </div>

        {/* Row 2: photo | text | photo | text (checkerboard offset) */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ROW_2.map((card, i) =>
            card.type === 'text' ? (
              <TextCard key={card.name + i} name={card.name} role={card.role} index={i + 4} />
            ) : (
              <PhotoCard
                key={card.name + i}
                name={card.name}
                role={card.role}
                src={(card as Extract<SpeakerCard, { type: 'photo' }>).src}
                fallback={(card as Extract<SpeakerCard, { type: 'photo' }>).fallback}
                index={i + 4}
              />
            )
          )}
        </div>
      </div>

      {/* ── "View All Speakers" CTA ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mx-auto mt-12 max-w-7xl"
      >
        <Link
          href="#apply"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-transparent px-7 py-3.5 font-raleway text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
        >
          View All Speakers
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}