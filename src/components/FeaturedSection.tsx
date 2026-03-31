'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// ─── Animation ─────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } as const },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } as const},
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } as const },
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } as const },
}

const SPEAKERS = [
  {
    name: 'Ibukun Odubiyi',
    title: 'CX Strategist and Consultant',
    company: 'LoyalPartners',
    date: 'April 25, 2026',
    time: 'Workshop · 11:00 AM – 11:30 AM',
    src: '/images/ibukun.jpg',
    fallbackBg: 'bg-rose-900',
  },
  {
    name: 'Oyin Dawodu',
    title: 'AI Operations Lead',
    company: 'Refactrd',
    date: 'April 25, 2026',
    time: 'Workshop · 11:30 AM – 12:00 PM',
    src: '/images/oyin.png',
    fallbackBg: 'bg-indigo-900',
  },
]

// ─── Component ─────────────────────────────────────────────────────────────

export default function FeaturedSection() {
  return (
    <section
      id="speakers"
      aria-label="Featured speakers"
      className="relative w-full overflow-hidden bg-brand-dark"
    >
      {/* Subtle warm radial glow — centre of section */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(90,42,6,0.28) 0%, transparent 65%)',
        }}
      />

      {/* ── Three-column layout: [arch] [content] [arch] ── */}
      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-stretch lg:grid-cols-[380px_1fr_380px]">

        {/* ━━━ LEFT arch — Speaker 1 ━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative hidden lg:flex lg:items-end"
        >
          {/*
            Arch frame: rounded top, flat bottom, cream border.
            The image bleeds to the very top and left edge of the section.
          */}
          <div className="relative ml-0 h-[520px] w-full overflow-hidden rounded-tr-[200px] border-r-[3px] border-t-[3px] border-[#F5F0E8]/70 shadow-2xl shadow-black/60">
            {/* Fallback colour */}
            <div className={`absolute inset-0 ${SPEAKERS[0].fallbackBg}`} />
            <Image
              src={SPEAKERS[0].src}
              alt={`${SPEAKERS[0].name} — ${SPEAKERS[0].title}`}
              fill
              sizes="380px"
              className="relative z-10 object-cover object-top"
              loading="lazy"
            />
            {/* Bottom fade into section bg */}
            <div className="absolute bottom-0 left-0 right-0 z-20 h-28 bg-gradient-to-t from-brand-dark/80 to-transparent" />
          </div>

          {/* Blue squiggle doodle — bottom left */}
          <div className="absolute -bottom-2 left-6 z-30" aria-hidden="true">
            <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
              <path
                d="M4 18C10 6 18 30 26 18C34 6 42 30 50 18"
                stroke="#2D5AE3"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </motion.div>

        {/* ━━━ CENTRE — Headline + body + speakers ━━━━━━━━━━━ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col justify-center px-8 py-20 md:px-12 lg:px-16 xl:px-20"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-syne text-[32px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[38px] lg:text-[44px]"
          >
            The Blueprint brings together our top{' '}
            <span className="text-brand-blue">women leaders</span> and ecosystem builders
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg font-raleway text-[14px] leading-[1.8] text-white"
          >
            Startups Blueprint gathers the most forward-thinking women in African tech.
            Founders, Operators, CX strategists, and AI practitioners — all in one room, with
            one goal: to help you build a startup that actually scales.
          </motion.p>

          {/* Speaker info — two columns with divider lines matching design */}
          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {SPEAKERS.map((speaker) => (
              <div key={speaker.name}>
                {/* Name with underline */}
                <div className="border-b border-white/20 pb-3">
                  <p className="font-syne text-[17px] font-bold text-white">{speaker.name}</p>
                </div>

                {/* Title + company */}
                <p className="mt-3 font-raleway text-[14px] leading-relaxed text-white">
                  {speaker.title}
                  <br />
                  <span className="text-white">{speaker.company}</span>
                </p>

                {/* Date */}
                <p className="mt-4 font-raleway text-[15px] font-semibold text-white">
                  {speaker.date}
                </p>

                {/* Time */}
                <p className="mt-0.5 font-raleway text-[15px] text-white">
                  {speaker.time}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ━━━ RIGHT arch — Speaker 2 ━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative hidden lg:flex lg:items-end"
        >
          {/* Yellow star doodle — top right */}
          <div className="absolute right-6 top-8 z-30" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                d="M24 4 L26.8 21.2 L44 24 L26.8 26.8 L24 44 L21.2 26.8 L4 24 L21.2 21.2 Z"
                stroke="#F5C518"
                strokeWidth="1.8"
                fill="none"
              />
              {/* Burst lines */}
              <path d="M24 1V5M24 43V47M1 24H5M43 24H47" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Arch frame — mirror of left, rounded top-left */}
          <div className="relative mr-0 h-[520px] w-full overflow-hidden rounded-tl-[200px] border-l-[3px] border-t-[3px] border-[#F5F0E8]/70 shadow-2xl shadow-black/60">
            <div className={`absolute inset-0 ${SPEAKERS[1].fallbackBg}`} />
            <Image
              src={SPEAKERS[1].src}
              alt={`${SPEAKERS[1].name} — ${SPEAKERS[1].title}`}
              fill
              sizes="380px"
              className="relative z-10 object-cover object-top"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 h-28 bg-gradient-to-t from-brand-dark/80 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}