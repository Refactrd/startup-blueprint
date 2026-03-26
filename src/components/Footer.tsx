'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

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
 
function LinkedInSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


// ─── Nav links ─────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'Apply',     href: '#apply' },
  { label: 'Speakers',  href: '#speakers' },
  { label: 'Schedule',  href: '#schedule' },
  { label: 'Contact',   href: '#contact' },
]


const SOCIAL = [
  { label: 'X (Twitter)', href: 'https://twitter.com', Icon: XSvg },
  { label: 'Instagram',   href: 'https://instagram.com', Icon: InstagramSvg },
  { label: 'LinkedIn',    href: 'https://linkedin.com', Icon: LinkedInSvg },
]

// ─── Component ─────────────────────────────────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: wire up to your email provider (Mailchimp, ConvertKit, etc.)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer aria-label="Site footer" className="w-full bg-brand-dark px-5 pb-8 pt-12 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">

        {/* ── Two-panel card — matches design exactly ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid overflow-hidden rounded-3xl grid-cols-1 lg:grid-cols-2"
        >

          {/* ── LEFT PANEL — cream/light, nav + copyright ───── */}
          <div className="flex flex-col justify-between bg-[#E2E0D8] px-8 py-10 md:px-10 md:py-12">

            {/* Brand name */}
            <div>
              <Link href="#home" className="inline-block">
                <span className="font-syne text-[18px] font-extrabold tracking-tight text-[#1C1A1A]">
                  Startups Blueprint{' '}
                  <span className="text-brand-blue">'26</span>
                </span>
              </Link>

              {/* Nav links — two columns matching design */}
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

          </div>

          {/* ── RIGHT PANEL — brand blue, newsletter + social ── */}
          <div className="flex flex-col justify-between bg-brand-blue px-8 py-10 md:px-10 md:py-12">

            {/* Newsletter */}
            <div>
              <h2 className="font-syne text-[13px] font-bold uppercase tracking-[0.18em] text-white">
                Stay Updated
              </h2>
              <p className="mt-2 font-raleway text-[13px] leading-[1.7] text-white/75">
                Subscribe for event updates &amp; exclusive content.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6"
                aria-label="Newsletter signup"
              >
                <div className="border-b border-white/30 pb-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    aria-label="Email address"
                    className="w-full bg-transparent font-raleway text-[14px] text-white placeholder-white/40 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative mt-5 inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-white py-3.5 font-raleway text-sm font-semibold text-brand-blue transition-all duration-300 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue sm:w-auto sm:px-10"
                >
                  {submitted ? 'You\'re in! 🎉' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <h3 className="font-syne text-[13px] font-bold uppercase tracking-[0.18em] text-white">
                Follow Us
              </h3>
              <ul className="mt-4 flex items-center gap-4" role="list">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom bar — outside the card, dark bg ────────── */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 px-1">
          <p className="font-raleway text-[11px] text-brand-muted/35">
            Copyright © {new Date().getFullYear()} Startup Blueprint. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}