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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.07 },
  }),
}

// ─── Social icon SVGs ──────────────────────────────────────────────────────

function InstagramSvg() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInSvg() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// ─── Types ─────────────────────────────────────────────────────────────────

type SpeakerCard =
  | { type: 'text'; name: string; role: string; linkedin?: string; instagram?: string }
  | { type: 'photo'; name: string; role: string; src: string; fallback: string }

// ─── Speaker data ──────────────────────────────────────────────────────────

const ROW_1: SpeakerCard[] = [
  {
    type: 'text',
    name: 'Ibukun Odubiyi',
    role: 'CX Strategist and Consultant',
    linkedin: 'https://linkedin.com/in/ibukun-ogunmola',
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
    role: 'AI Operations Lead',
    linkedin: 'https://linkedin.com/in/oyindawodu',
  },
  {
    type: 'photo',
    name: 'Oyin Dawodu',
    role: 'AI OPERATIONS LEAD',
    src: '/images/oyin.png',
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
    role: 'AI Practitioner',
    linkedin: 'https://linkedin.com',
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
    role: 'Founder & CEO',
    linkedin: 'https://linkedin.com',
  },
]

// ─── Card components ───────────────────────────────────────────────────────

function TextCard({
  name,
  role,
  index,
  linkedin,
  instagram,
}: {
  name: string
  role: string
  index: number
  linkedin?: string
  instagram?: string
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="flex h-[280px] flex-col justify-between rounded-2xl bg-[#EBEBEB] p-6 lg:h-[320px]"
    >
      {/* Top: name + role */}
      <div>
        <p className="font-syne text-[20px] font-bold leading-snug tracking-tight text-[#1C1A1A] lg:text-[22px]">
          {name}
        </p>
        <p className="mt-1.5 font-raleway text-[11px] font-semibold uppercase text-[#1C1A1A]/50">
          {role}
        </p>
      </div>

      {/* Bottom: social icons */}
      {(linkedin || instagram) && (
        <div className="flex items-center gap-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C1A1A]/8 text-[#1C1A1A]/50 transition-all duration-200 hover:bg-brand-blue hover:text-white"
            >
              <LinkedInSvg />
            </a>
          )}
        </div>
      )}
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
      <div className={`absolute inset-0 bg-gradient-to-b ${fallback}`} />
      <Image
        src={src}
        alt={`${name} — ${role}`}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="relative z-10 object-cover object-top grayscale transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
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
      {/* Header */}
      <div className="mx-auto mb-14 flex max-w-7xl items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="font-syne text-[35px] font-extrabold uppercase leading-[40px] tracking-tight text-white sm:text-[48px] lg:text-[50px] lg:leading-[0.95]">
            Meet the top
            <br />
            <span className="relative inline-block">
              incredible
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
                className="absolute -bottom-1 left-0 right-0 h-[4px] origin-left rounded-full bg-white"
                aria-hidden="true"
              />
            </span>
            <br />
            speakers
          </h2>
        </motion.div>

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

      {/* Card grid */}
      <div className="mx-auto max-w-7xl space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ROW_1.map((card, i) =>
            card.type === 'text' ? (
              <TextCard
                key={card.name + i}
                name={card.name}
                role={card.role}
                index={i}
                linkedin={(card as Extract<SpeakerCard, { type: 'text' }>).linkedin}
                instagram={(card as Extract<SpeakerCard, { type: 'text' }>).instagram}
              />
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

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ROW_2.map((card, i) =>
            card.type === 'text' ? (
              <TextCard
                key={card.name + i}
                name={card.name}
                role={card.role}
                index={i + 4}
                linkedin={(card as Extract<SpeakerCard, { type: 'text' }>).linkedin}
                instagram={(card as Extract<SpeakerCard, { type: 'text' }>).instagram}
              />
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

      {/* CTA */}
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
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}