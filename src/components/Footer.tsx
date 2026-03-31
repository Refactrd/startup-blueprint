'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── Social SVGs ───────────────────────────────────────────────────────────

function XSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}


// ─── Data ──────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Apply',    href: "https://luma.com/w0wb5"},
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact',  href: '#contact' },
]

const SOCIAL = [
  { label: 'X (Twitter)', href: 'https://twitter.com',   Icon: XSvg },
  { label: 'Instagram',   href: 'https://instagram.com', Icon: InstagramSvg },
]

// ─── Component ─────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="w-full bg-white px-5 pb-8 pt-16 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">

        {/* Two-panel card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="grid overflow-hidden rounded-3xl grid-cols-1 lg:grid-cols-2"
        >

          {/* LEFT — brand + nav */}
          <div className="flex flex-col justify-between bg-[#E2E0D8] px-8 py-10 md:px-10 md:py-12">
            <div>
              <Link href="#home" className="inline-block">
                <span className="font-syne text-[18px] font-extrabold tracking-tight text-[#1C1A1A]">
                  Startups Blueprint{' '}
                  <span className="text-brand-blue">'26</span>
                </span>
              </Link>

              <nav aria-label="Footer navigation" className="mt-8">
                <ul className="grid grid-cols-2 gap-x-10 gap-y-4" role="list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-raleway text-[14px] font-medium text-[#1C1A1A]/70 transition-colors duration-200 hover:text-[#1C1A1A]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <p className="mt-10 font-raleway text-[11px] text-[#1C1A1A]/40">
             Copyright © {new Date().getFullYear()} Startups Blueprint. All Rights Reserved.
            </p>
          </div>

          {/* RIGHT — register CTA + social */}
          <div className="flex flex-col justify-between bg-brand-blue px-8 py-10 md:px-10 md:py-12">

            {/* Register block */}
            <div>
              <h2 className="font-syne text-[13px] font-bold uppercase tracking-[0.18em] text-white">
                Register for the Event
              </h2>
              <p className="mt-2 font-raleway text-[13px] leading-[1.7] text-white/75">
                Secure your seat at Startups Blueprint. Limited spots available.
              </p>

              <Link
                href="https://luma.com/w0wb5"
                target="_blank"
                className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 font-raleway text-sm font-semibold text-brand-blue transition-all duration-300 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
                Apply to Attend
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#0147FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Social */}
            <div className="mt-10">
              <h3 className="font-syne text-[13px] font-bold uppercase tracking-[0.18em] text-white">
                Follow Us
              </h3>
              <ul className="mt-4 flex items-center gap-3" role="list">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/25 hover:scale-110 hover:shadow-[0_0_16px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

       

      </div>
    </footer>
  )
}