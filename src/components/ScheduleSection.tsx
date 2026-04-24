"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── Animation ─────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.06,
    },
  }),
};

// When the hidden sessions expand in, each one staggers from the top
const expandItem = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.07,
    },
  }),
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
};

// ─── Types ─────────────────────────────────────────────────────────────────

type SessionType = "yellow" | "purple" | "blue" | "peach" | "grey";

interface Session {
  color: SessionType;
  title: string;
  by?: string;
  time: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

// ─── Color map ─────────────────────────────────────────────────────────────

const COLOR: Record<SessionType, { bg: string; dot: string }> = {
  yellow: { bg: "bg-[#FFF9E6]", dot: "bg-[#F5C518]" },
  purple: { bg: "bg-[#F3EFFF]", dot: "bg-[#7C5CFC]" },
  blue: { bg: "bg-[#EDF2FF]", dot: "bg-[#2D5AE3]" },
  peach: { bg: "bg-[#FFF0EC]", dot: "bg-[#FF6B4A]" },
  grey: { bg: "bg-[#F4F4F6]", dot: "bg-[#9E9EA8]" },
};

// ─── Schedule data ─────────────────────────────────────────────────────────

const SESSIONS: Session[] = [
  {
    color: "yellow",
    title: "Arrival, Registration & Check-in",
    time: "8:45 AM – 9:00 AM",
    description:
      "Guest check-in and participant registration. Set the tone. You are not here to listen. You are here to build.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="18" height="22" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M22 12h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 16l4-4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    color: "purple",
    title: "Opening Address — Setting the Blueprint",
    by: "Folashade Oroge, Event Host",
    time: "9:00 AM – 9:20 AM",
    description:
      "Why African startups stall at growth stage, why structure matters before scale, and what you will walk away with today.",
    image: "/images/fola.jpg",
  },
  {
    color: "blue",
    title: "Impact Panel — CX and AI Structures in African Startups",
    by: "Folashade Oroge, Panel Moderator",
    time: "9:20 AM – 9:50 AM",
    description:
      "A sharp, focused panel on the real challenges driving African startups toward AI-powered operations and structured CX, and the competitive advantages waiting on the other side.",
    image: "/images/fola.jpg",
  },
  {
    color: "grey",
    title: "Q&A Session",
    time: "9:50 AM – 10:10 AM",
    description:
      "Open floor for questions from the audience. Dig deeper into the panel insights and get direct answers from our experts.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 8a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H18l-6 4v-4H7a3 3 0 0 1-3-3V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 12c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    color: "peach",
    title: "Game Break / Audience Engagement",
    time: "10:10 AM – 10:30 AM",
    description:
      "An energising, interactive break designed to get you moving, connecting, and thinking. Come ready to play.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="14" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 14v6M8 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="21" cy="15" r="1.2" fill="currentColor" />
        <circle cx="24" cy="18" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    color: "yellow",
    title: "Keynote — How Women Leaders Are Structuring the Next Generation of African Startups",
    by: "Ashley Immanuel",
    time: "10:30 AM – 10:50 AM",
    description:
      "A strategic keynote exploring the future of AI-driven startups, the competitive power of customer experience, and what it takes to build globally relevant businesses from Africa.",
    image: "/images/ashley.jpg",
  },
  {
    color: "grey",
    title: "Interactive Insight Session",
    time: "10:50 AM – 11:00 AM",
    description:
      "A game-structured, interactive session designed to capture ecosystem insights and personal startup context. Come ready to engage.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4a8 8 0 0 1 4 15v3h-8v-3A8 8 0 0 1 16 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 25h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 28h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 4v3M8.3 8.3l2.1 2.1M23.7 8.3l-2.1 2.1M4 16h3M25 16h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    color: "peach",
    title: "Workshop 1 — Designing Customer Experience for Scalable Startups",
    by: "Ibukun Odubiyi",
    time: "11:00 AM – 11:45 AM",
    description:
      "A hands-on workshop exploring how to design customer experience frameworks that hold up as your startup scales. Walk away with clarity on your CX gaps and a structure you can implement immediately.",
    image: "/images/ibukun.jpg",
  },
  {
    color: "purple",
    title: "Special Session — Converting Your Visibility to Revenue As A Founder",
    by: "Tolu Olawumi",
    time: "11:45 AM – 12:05 PM",
    description:
      "A focused session on turning your personal brand and founder visibility into a direct revenue engine for your startup. Practical, actionable, and built for founders who are ready to monetise their presence.",
      image: "/images/tolu.jpeg",
  },
  {
    color: "peach",
    title: "Workshop 2 — Operate or Fall Behind: Designing an AI-Powered Operation from the Ground Up",
    by: "Oyin Dawodu",
    time: "12:05 PM – 12:50 PM",
    description:
      "A hands-on workshop for founders ready to build AI into their operations from the ground up. Assess your business functions, get your AI readiness score, and leave with a clear entry point to operate more competitively.",
    image: "/images/oyin.png",
  },
  {
    color: "grey",
    title: "Break / Networking",
    time: "12:50 PM – 1:05 PM",
    description:
      "Take a breather, grab refreshments, and connect with fellow founders and operators before the closing segment.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 10h12v10a6 6 0 0 1-12 0V10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M20 13h3a2 2 0 0 1 0 4h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5 26h22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    color: "yellow",
    title: "Implementation Pathway Guide — Your Startup's Next Move",
    time: "1:05 PM – 1:35 PM",
    description:
      "The implementation program is introduced, audit slot confirmation, and the teams who will help you execute. Leave with a defined next step.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 14c0-6 4-10 10-10s10 4 10 10c0 4-2 7-5 9H11c-3-2-5-5-5-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M11 23v5h10v-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M13 28h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 17l2.5 2.5L20 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: "peach",
    title: "Networking & Case Study Interviews",
    time: "1:35 PM – 2:30 PM",
    description:
      "Connect with founders, operators, and ecosystem builders. Share your story, hear theirs, and leave with real relationships — and real insights from founders who have done it.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="22" cy="9" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 24c0-3.3 2.7-6 6-6h12c3.3 0 6 2.7 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 17h4M16 15v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

const INITIAL_COUNT = 3;

// ─── Session card ──────────────────────────────────────────────────────────

function SessionCard({
  session,
  index,
  animVariant = "scroll",
}: {
  session: Session;
  index: number;
  animVariant?: "scroll" | "expand";
}) {
  const { bg, dot } = COLOR[session.color];

  const motionProps =
    animVariant === "expand"
      ? {
          custom: index,
          variants: expandItem,
          initial: "hidden" as const,
          animate: "visible" as const,
          exit: "exit" as const,
        }
      : {
          custom: index,
          variants: fadeUp,
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-30px" },
        };

  return (
    <motion.div
      {...motionProps}
      whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
      className={`flex items-start gap-5 rounded-2xl ${bg} p-5 sm:p-6 cursor-default`}
    >
      {session.image ? (
        <div className="relative hidden h-[90px] w-[90px] shrink-0 overflow-hidden rounded-xl sm:block">
          <Image
            src={session.image}
            alt={session.by ?? session.title}
            fill
            sizes="90px"
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : session.icon ? (
        <div
          className={`hidden h-[90px] w-[90px] shrink-0 items-center justify-center rounded-xl sm:flex ${dot} text-white`}
        >
          {session.icon}
        </div>
      ) : (
        <div className="hidden h-[90px] w-[90px] shrink-0 sm:block" />
      )}

      <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex-1">
          <p className="font-syne text-[15px] font-bold leading-snug text-[#1C1A1A] sm:text-[16px]">
            {session.title}
          </p>
          {session.by && (
            <p className="mt-1 font-raleway text-[12px] text-[#1C1A1A]/50">
              By{" "}
              <span className="font-medium text-[#1C1A1A]/70">
                {session.by}
              </span>
            </p>
          )}
          <p className="mt-2.5 font-raleway text-[13px] leading-[1.7] text-[#1C1A1A]/55">
            {session.description}
          </p>
        </div>

        <div className="mt-2 flex shrink-0 items-center gap-2 sm:mt-0 sm:flex-col sm:items-end sm:justify-start">
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${dot} sm:hidden`}
            aria-hidden="true"
          />
          <p className="whitespace-nowrap font-syne text-[13px] font-bold text-[#1C1A1A]/80 sm:text-[14px]">
            {session.time}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────

export default function ScheduleSection() {
  const [expanded, setExpanded] = useState(false);

  const visible = SESSIONS.slice(0, INITIAL_COUNT);
  const hidden = SESSIONS.slice(INITIAL_COUNT);

  return (
    <section
      id="schedule"
      aria-label="Event Schedule"
      className="relative w-full overflow-hidden bg-white px-6 pb-20 pt-16 md:px-10 lg:px-16 xl:px-24"
    >
      {/* Decorative doodles */}
      <div
        className="pointer-events-none absolute left-8 top-12 hidden lg:block"
        aria-hidden="true"
      >
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path
            d="M26 3 L28.8 23.2 L49 26 L28.8 28.8 L26 49 L23.2 28.8 L3 26 L23.2 23.2 Z"
            stroke="#FF6B4A"
            strokeWidth="1.6"
            fill="none"
          />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute right-8 top-10 hidden lg:block"
        aria-hidden="true"
      >
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <path
            d="M58 8 L60.5 20 L72 22.5 L60.5 25 L58 37 L55.5 25 L44 22.5 L55.5 20 Z"
            stroke="#7C5CFC"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M10 14 C18 8 28 18 22 28"
            stroke="#7C5CFC"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M22 28 C16 38 26 46 30 40"
            stroke="#7C5CFC"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Section header */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
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
          Every session is intentionally designed to move you through a journey.
          From strategic insight, to hands-on implementation clarity, to a
          defined next step for your startup.
        </motion.p>
      </div>

      {/* Content */}
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
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="3"
                width="16"
                height="14"
                rx="2.5"
                stroke="white"
                strokeWidth="1.4"
              />
              <path d="M1 8H17" stroke="white" strokeWidth="1.4" />
              <path
                d="M5 1V5M13 1V5"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-syne text-[13px] font-bold text-white">
              Event Schedule
            </span>
            <span className="hidden text-white/30 sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="hidden font-raleway text-[13px] font-medium text-white/70 sm:inline">
              Saturday, April 25, 2026
            </span>
          </div>
          <span className="font-raleway text-[12px] font-medium text-white/60">
            AI, Structure and Scale
          </span>
        </motion.div>

        {/* Always-visible first 3 sessions */}
        {visible.map((session, i) => (
          <SessionCard
            key={session.title}
            session={session}
            index={i}
            animVariant="scroll"
          />
        ))}

        {/* Expandable remaining sessions */}
        <AnimatePresence>
          {expanded &&
            hidden.map((session, i) => (
              <SessionCard
                key={session.title}
                session={session}
                index={i}
                animVariant="expand"
              />
            ))}
        </AnimatePresence>

        {/* Soft gradient fade-out when collapsed */}
        {!expanded && (
          <div
            className="pointer-events-none relative -mt-16 h-24"
            aria-hidden="true"
            style={{
              background: "linear-gradient(to bottom, transparent, white)",
            }}
          />
        )}
      </div>

      {/* Toggle button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`mx-auto flex max-w-4xl justify-center ${expanded ? "mt-[40px]" : "mt-0"}`}
      >
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-brand-blue px-8 py-3.5 font-raleway text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_4px_rgba(1,71,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          aria-expanded={expanded}
        >
          {/* Shimmer */}
          <span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            aria-hidden="true"
          />

          <span>{expanded ? "Show Less" : "See Full Schedule"}</span>

          {/* Chevron — rotates when expanded */}
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <path
              d="M3 6L8 11L13 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
}
