'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── Animation ─────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.06 },
  }),
}

// ─── Types ─────────────────────────────────────────────────────────────────

type SessionType = 'yellow' | 'purple' | 'blue' | 'peach' | 'grey'

interface Session {
  color: SessionType
  title: string
  by?: string
  time: string
  description: string
  /** Path to speaker thumbnail — place in public/images/schedule/ */
  image?: string
  /** If true, renders as a centred break row (no image/time columns) */
  isBreak?: boolean
}

// ─── Color map ─────────────────────────────────────────────────────────────

const COLOR: Record<SessionType, { bg: string; dot: string }> = {
  yellow: { bg: 'bg-[#FFF9E6]',  dot: 'bg-[#F5C518]' },
  purple: { bg: 'bg-[#F3EFFF]',  dot: 'bg-[#7C5CFC]' },
  blue:   { bg: 'bg-[#EDF2FF]',  dot: 'bg-[#0147FF]' },
  peach:  { bg: 'bg-[#FFF0EC]',  dot: 'bg-[#FF6B4A]' },
  grey:   { bg: 'bg-[#F4F4F6]',  dot: 'bg-[#9E9EA8]' },
}

// ─── Schedule data ─────────────────────────────────────────────────────────
/*
  Speaker thumbnails → public/images/schedule/
  Use square crops, min 160×160px.
  Sessions without a speaker (check-in, breaks) have no image prop.
*/

const SESSIONS: Session[] = [
  {
    color: 'yellow',
    title: 'Arrival, Registration and Check-In',
    time: '10:00 AM – 10:15 AM',
    description:
      'Guest check-in and participant registration. Set the tone. You are not here to listen. You are here to build.',
  },
  {
    color: 'purple',
    title: 'Opening Address — Setting the Blueprint',
    by: 'Event Host',
    time: '10:15 AM – 10:20 AM',
    description:
      'Why African startups stall at growth stage, why structure matters before scale, and what you will walk away with today.',
    image: '/images/placeholder.jpg',
  },
  {
    color: 'yellow',
    title: 'Keynote — How Women Leaders Are Structuring the Next Generation of African Startups',
    by: 'Keynote Speaker TBC',
    time: '10:20 AM – 10:35 AM',
    description:
      'A strategic keynote exploring the future of AI-driven startups, the competitive power of customer experience, and what it takes to build globally relevant businesses from Africa.',
    image: '/images/placeholder.jpg',
  },
  {
    color: 'blue',
    title: 'Impact Panel — CX and Automation Structures in African Startups',
    by: 'Panel and Moderator',
    time: '10:35 AM – 11:15 AM',
    description:
      'A sharp, focused panel on the real challenges driving startups toward automation and structured CX — and the measurable advantages waiting on the other side. Live Q&A included.',
    image: '/images/ibukun.jpg',
  },
  {
    color: 'grey',
    title: 'Interactive Q&A Session',
    time: '11:15 AM – 11:45 AM',
    description:
      'A game-structured, interactive session designed to capture ecosystem insights and personal startup context. Come ready to engage.',
  },
  {
    color: 'peach',
    title: 'Rotational Implementation Workshops',
    by: 'Oyin Dawodu and Ibukun Ogunmola',
    time: '11:45 AM – 12:45 PM',
    description:
      'Two expert-led workshops running in parallel. Every participant attends both. Walk away with clarity on your CX gaps and your top automation opportunities.',
    image: '/images/oyin-dawodu.png',
  },
  {
    color: 'purple',
    title: 'Collective Blueprint Mapping Session',
    by: 'Oyin Dawodu and Ibukun Ogunmola',
    time: '12:45 PM – 1:15 PM',
    description:
      'Synthesize your workshop insights, define your structure priorities, and map your startup\'s next move. This is where it all comes together.',
    image: '/images/ibukun.jpg',
  },
  {
    color: 'yellow',
    title: 'Implementation Pathway Presentation and Networking',
    time: '1:15 PM – 2:00 PM',
    description:
      'Refreshments, sponsor showcase, and the implementation desk — where you confirm your audit slot and meet the teams who will help you execute.',
  },
]

// ─── Session card ──────────────────────────────────────────────────────────

function SessionCard({ session, index }: { session: Session; index: number }) {
  const { bg, dot } = COLOR[session.color]

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className={`flex items-start gap-5 rounded-2xl ${bg} p-5 sm:p-6`}
    >
      {/* Speaker thumbnail — only if image is provided */}
      {session.image ? (
        <div className="relative hidden h-[90px] w-[90px] shrink-0 overflow-hidden rounded-xl sm:block">
          {/* Fallback colour */}
          <div className="absolute inset-0 bg-zinc-300" />
          <Image
            src={session.image}
            alt={session.by ?? session.title}
            fill
            sizes="90px"
            className="relative z-10 object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : (
        /* Spacer so content stays aligned even without image */
        <div className="hidden h-[90px] w-[90px] shrink-0 sm:block" />
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex-1">
          {/* Title */}
          <p className="font-syne text-[15px] font-bold leading-snug text-[#1C1A1A] sm:text-[16px]">
            {session.title}
          </p>

          {/* By line */}
          {session.by && (
            <p className="mt-1 font-raleway text-[12px] text-[#1C1A1A]/50">
              By{' '}
              <span className="font-medium text-[#1C1A1A]/70">{session.by}</span>
            </p>
          )}

          {/* Description */}
          <p className="mt-2.5 font-raleway text-[13px] leading-[1.7] text-[#1C1A1A]/55">
            {session.description}
          </p>
        </div>

        {/* Time — right aligned on desktop, below title on mobile */}
        <div className="mt-2 flex shrink-0 items-center gap-2 sm:mt-0 sm:flex-col sm:items-end sm:justify-start">
          <span className={`h-2 w-2 shrink-0 rounded-full ${dot} sm:hidden`} aria-hidden="true" />
          <p className="font-syne text-[13px] font-bold whitespace-nowrap text-[#1C1A1A]/80 sm:text-[14px]">
            {session.time}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
      aria-label="Event Schedule"
      className="relative w-full overflow-hidden bg-white px-6 pb-20 pt-16 md:px-10 lg:px-16 xl:px-24"
    >
      {/* ── Decorative doodles — top corners ──────────────── */}
      <div className="pointer-events-none absolute left-8 top-12 hidden lg:block" aria-hidden="true">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path
            d="M26 3 L28.8 23.2 L49 26 L28.8 28.8 L26 49 L23.2 28.8 L3 26 L23.2 23.2 Z"
            stroke="#FF6B4A"
            strokeWidth="1.6"
            fill="none"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-8 top-10 hidden lg:block" aria-hidden="true">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          {/* Star */}
          <path
            d="M58 8 L60.5 20 L72 22.5 L60.5 25 L58 37 L55.5 25 L44 22.5 L55.5 20 Z"
            stroke="#7C5CFC"
            strokeWidth="1.6"
            fill="none"
          />
          {/* Swoosh lines */}
          <path d="M10 14 C18 8 28 18 22 28" stroke="#7C5CFC" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M22 28 C16 38 26 46 30 40" stroke="#7C5CFC" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* ── Section header — centred ───────────────────────── */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-syne text-[36px] font-extrabold tracking-tight text-[#1C1A1A] sm:text-[44px]"
        >
          Browse the Full Agenda
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-4 font-raleway text-[14px] leading-[1.8] text-[#1C1A1A]/55"
        >
          Every session is intentionally designed to move you through a journey. From strategic
          insight, to hands-on implementation clarity, to a defined next step for your startup.
        </motion.p>
      </div>

      {/* ── Content wrapper ───────────────────────────────── */}
      <div className="mx-auto max-w-4xl space-y-4">

        {/* Day header bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between rounded-2xl bg-[#1C1A1A] px-6 py-4"
        >
          <div className="flex items-center gap-3">
            {/* Calendar icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="1" y="3" width="16" height="14" rx="2.5" stroke="white" strokeWidth="1.4" />
              <path d="M1 8H17" stroke="white" strokeWidth="1.4" />
              <path d="M5 1V5M13 1V5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className="font-syne text-[13px] font-bold text-white">Day 1</span>
            <span className="hidden text-white/30 sm:inline" aria-hidden="true">·</span>
            <span className="hidden font-raleway text-[13px] font-medium text-white/70 sm:inline">
              Saturday, April 25, 2026
            </span>
          </div>
          <span className="font-raleway text-[12px] font-medium text-white/60">
            AI, Structure and Scale
          </span>
        </motion.div>

        {/* Session cards */}
        {SESSIONS.map((session, i) => (
          <SessionCard key={session.title} session={session} index={i} />
        ))}
      </div>

      {/* ── CTA button ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mx-auto mt-12 flex max-w-4xl justify-center"
      >
        <Link
          href="#apply"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-blue px-8 py-3.5 font-raleway text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_4px_rgba(1,71,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
          See Full Schedule
        </Link>
      </motion.div>
    </section>
  )
}