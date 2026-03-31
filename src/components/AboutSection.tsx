'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// ─── Animation variants ────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const} },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

// ─── Image card data ───────────────────────────────────────────────────────
/*
  Place your images in /public/images/:
  ┌─────────────────────────────┬──────────────────────────────────────────┐
  │ File                        │ Recommended content                      │
  ├─────────────────────────────┼──────────────────────────────────────────┤
  │ about-card-1.jpg            │ Wide event/audience shot (landscape)     │
  │ about-card-2.jpg            │ Speaker on stage or workshop (portrait)  │
  │ about-card-3.jpg            │ Founders/community networking (portrait) │
  └─────────────────────────────┴──────────────────────────────────────────┘
  Cards show a fallback gradient until images are added.
*/

const CARDS = [
  {
    src: '/images/image-about-five.jpg',
    fallback: 'from-slate-700 to-slate-900',
    category: 'GUIDED EXPERIENCE',
    caption: 'From Insight to Execution',
    // Card 1 is wider (roughly 2:1 ratio), same as design
    wide: true,
  },
  {
    src: '/images/image-about-two.jpg',
    fallback: 'from-zinc-700 to-zinc-900',
    category: 'EXPERT-LED WORKSHOPS',
    caption: 'AI and CX in Practice',
    wide: false,
  },
  {
    src: '/images/image-about-six.jpg',
    fallback: 'from-neutral-700 to-neutral-900',
    category: 'COMMUNITY BUILD',
    caption: 'Founders. Leaders. Builders.',
    wide: false,
  },
]

// ─── Component ─────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About the Event"
      className="w-full bg-white"
    >
      {/* ── Top: heading + body ──────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 md:px-10 lg:px-16 xl:px-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left — section heading */}
          <motion.div variants={fadeUp} className="relative">
            {/* Decorative star doodle — top left, matching design */}
            <div className="absolute -left-6 -top-6 hidden lg:block" aria-hidden="true">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                {/* Curved swoosh */}
                <path d="M8 48C8 48 4 28 20 18" stroke="#1C1A1A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                {/* 4-point star */}
                <path d="M36 12 L38.5 22 L49 24.5 L38.5 27 L36 37 L33.5 27 L23 24.5 L33.5 22 Z" stroke="#1C1A1A" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            <h2 className="font-syne text-4xl font-extrabold leading-tight tracking-tight text-[#1C1A1A] sm:text-5xl lg:text-[52px]">
              About the Event
            </h2>
          </motion.div>

          {/* Right — body text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="font-raleway text-[15px] leading-[1.8] text-[#1C1A1A]/70">
              <span className="font-semibold text-brand-blue">Startups Blueprint</span> is not a
              conference. It is a curated leadership experience built for women founders and decision
              makers who are ready to stop hustling and start scaling, with the right systems, the
              right frameworks, and the right implementation pathway.
            </p>
            <p className="font-raleway text-[15px] leading-[1.8] text-[#1C1A1A]/70">
              Over four focused hours, you will unpack what it truly takes to build a Modern & an AI-powered
              startup ready for structured growth and global relevance.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom: three image cards ────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-16 xl:px-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.85fr_1fr_1fr]"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.category}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={`group relative overflow-hidden rounded-2xl ${
                card.wide ? 'min-h-[360px] sm:col-span-2 lg:col-span-1' : 'min-h-[360px]'
              }`}
            >
              {/* Fallback gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.fallback}`} />

              {/* Actual image */}
              <Image
                src={card.src}
                alt={card.caption}
                fill
                sizes={card.wide ? '(max-width: 1024px) 100vw, 55vw' : '(max-width: 1024px) 50vw, 25vw'}
                className="relative z-10 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark overlay — heavier at bottom for text legibility */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Card text — bottom left, matching design */}
              <div className="absolute bottom-0 left-0 z-30 p-5">
                <p className="mb-1 font-raleway text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                  {card.category}
                </p>
                <p className="font-syne text-lg font-bold leading-snug text-white sm:text-xl">
                  {card.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}