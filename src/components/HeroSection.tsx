"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

// ─── Animations ─────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Decorative SVGs ────────────────────────────────────────

function Star4({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 2L22.5 17.5L38 20L22.5 22.5L20 38L17.5 22.5L2 20L17.5 17.5L20 2Z" stroke="white" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function StarSolid({ className, color = "#FF3B30" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 1L11.8 8.2L19 10L11.8 11.8L10 19L8.2 11.8L1 10L8.2 8.2L10 1Z" fill={color} />
    </svg>
  );
}

function Squiggle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" aria-hidden="true">
      <path d="M4 20C10 8 18 32 26 20C34 8 42 32 50 20" stroke="#0147FF" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Tick({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 40" fill="none" aria-hidden="true">
      <path d="M4 4C4 4 8 22 16 30C20 36 26 38 26 38" stroke="#F5C518" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 30C16 30 20 20 28 16" stroke="#F5C518" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

// ─── Shared image collage — used on both mobile and desktop ─

function ImageCollage() {
  return (
    <div className="relative flex items-center justify-center" aria-hidden="true">
      {/* Blue glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[500px] w-[420px] rounded-[60px] bg-brand-blue/15 blur-[80px]" />
      </div>

      {/* LEFT COLUMN: oval + circle */}
      <div className="relative z-10 flex flex-col items-center gap-5 mr-5">
        {/* Oval — mobile: slightly smaller, tablet+: 200×200 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative overflow-hidden rounded-[80px] border-2 border-brand-blue/40 shadow-xl shadow-black/40
            w-[140px] h-[170px]
            sm:w-[200px] sm:h-[200px]"
        >
          <div className="absolute inset-0 bg-sky-800" />
          <Image
            src="/images/hero-speaker-a.jpg"
            alt="Speaker"
            fill
            className="object-cover object-center relative z-10"
          />
        </motion.div>

        {/* Circle — mobile: slightly smaller, tablet+: 200×200 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="relative overflow-hidden rounded-full border-2 border-white/15 shadow-xl shadow-black/40
            w-[140px] h-[140px]
            sm:w-[200px] sm:h-[200px]"
        >
          <div className="absolute inset-0 bg-indigo-900" />
          <Image
            src="/images/hero-crowd.jpg"
            alt="Event crowd"
            fill
            className="object-cover object-center relative z-10"
          />
        </motion.div>
      </div>

      {/* RIGHT: arch card — mobile: smaller, tablet+: 290×500 */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10
          w-[200px] h-[360px]
          sm:w-[290px] sm:h-[500px]"
      >
        {/* Amber background */}
        <div className="absolute bottom-0 right-[-10px] rounded-t-[100px] rounded-b-2xl bg-amber-400 z-[1]
          w-[160px] h-[310px]
          sm:w-[200px] sm:h-[440px]" />

        {/* Arch frame */}
        <div className="absolute inset-0 z-[2] overflow-hidden rounded-t-[100px] rounded-b-2xl border-[3px] border-brand-blue/70 shadow-2xl shadow-black/50
          sm:rounded-t-[115px]">
          <div className="absolute inset-0 bg-zinc-700" />
          <Image
            src="/images/hero-speaker-main.jpg"
            alt="Featured speaker"
            fill
            priority
            sizes="(max-width: 640px) 200px, 290px"
            className="object-cover object-top relative z-10"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-20" />
        </div>
      </motion.div>

      {/* Doodles */}
      <motion.div initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.4, ease: "backOut" }} className="absolute top-[6%] left-[36%] z-20 w-7 sm:w-8">
        <Star4 />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, duration: 0.4, ease: "backOut" }} className="absolute top-[3%] right-[2%] z-20 w-8 sm:w-10">
        <Star4 />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, duration: 0.35, ease: "backOut" }} className="absolute top-[22%] right-[28%] z-20 w-3 sm:w-4">
        <StarSolid />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.15, duration: 0.35, ease: "backOut" }} className="absolute top-[52%] left-[2%] z-20 w-3 sm:w-4">
        <StarSolid />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.4 }} className="absolute bottom-[6%] left-[44%] z-20 w-6 sm:w-7">
        <Tick />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.4 }} className="absolute bottom-[2%] left-[0%] z-20 w-12 sm:w-14">
        <Squiggle />
      </motion.div>
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-dark">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_55%,rgba(110,55,8,0.25),transparent_70%)]" />
        <motion.div
          animate={shouldReduceMotion ? undefined : { opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity } as const}
          className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[120px]"
        />
        <motion.div
          animate={shouldReduceMotion ? undefined : { opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity } as const}
          className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-brand-blue/20 blur-[100px]"
        />
      </div>

      {/* ─── MOBILE / TABLET layout (< lg) ─────────────────── */}
      {/*
        Single column. Order: [images] then [text].
        Images come first as requested.
      */}
      <div className="relative z-10 flex flex-col lg:hidden min-h-screen px-5 sm:px-6 md:px-8 pt-24 pb-16">
        {/* Images — top */}
        <div className="w-full flex justify-center pt-6 pb-4">
          <ImageCollage />
        </div>

        {/* Text — below images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <motion.div variants={fadeUp} className="mb-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-brand-blue/40 bg-brand-blue/10 px-3 py-1 text-xs text-brand-blue">
              April 25, 2026
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Yaba, Lagos
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Exclusive Roundtable
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-syne font-extrabold text-white leading-[0.95] tracking-tight text-[40px] sm:text-5xl md:text-6xl"
          >
            Startups{" "}
            <span className="text-brand-blue relative inline-block">
              Blueprint
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-brand-blue/40" />
            </span>{" "}
            '26
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-white/70 text-sm sm:text-base max-w-lg">
            How Women Leaders Are Structuring the AI-Powered Generation of African Startups.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
            <Link href="#apply" className="bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg">
              Apply to Attend
            </Link>
            <Link href="#schedule" className="border border-white/20 text-white/80 px-6 py-3 rounded-full text-sm hover:bg-white/10">
              See the Agenda
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── DESKTOP layout (lg+) ────────────────────────────── */}
      {/* Side by side: [text left] [images right] */}
      <div className="relative z-10 mx-auto max-w-7xl px-12 hidden lg:grid items-center gap-24 min-h-screen grid-cols-[1.2fr_0.8fr]">
        {/* LEFT — text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-brand-blue/40 bg-brand-blue/10 px-3 py-1 text-xs text-brand-blue">
              April 25, 2026
            </span>
            <span className="text-white/30">·</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Yaba, Lagos
            </span>
            <span className="text-white/30">·</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Exclusive Roundtable
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-syne font-extrabold text-white leading-[0.95] tracking-tight text-[70px]"
          >
            Startups{" "}
            <span className="text-brand-blue relative inline-block">
              Blueprint
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-brand-blue/40" />
            </span>{" "}
            '26
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-white/70 max-w-lg text-lg">
            How Women Leaders Are Structuring the AI-Powered Generation of African Startups.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link href="#apply" className="bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg">
              Apply to Attend
            </Link>
            <Link href="#schedule" className="border border-white/20 text-white/80 px-6 py-3 rounded-full text-sm hover:bg-white/10">
              See the Agenda
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT — images */}
        <ImageCollage />
      </div>
    </section>
  );
}