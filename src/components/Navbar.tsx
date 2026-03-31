'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Why Attend', href: '#why-attend' },
] as const

const navVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 18,
      staggerChildren: 0.07,
      delayChildren: 0.1,
    } as const,
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.35, ease: 'easeInOut' } as const,
  },
}

const linkVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' }as const },
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.3 } as const },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12"
        >
          {/* Logo / Brand */}
          <Link
            href="#home"
            aria-label="Startups Blueprint — go to homepage"
            className="group flex items-center gap-2 focus-visible:outline-none"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-blue">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 14L8 2L14 14H2Z" fill="white" />
              </svg>
            </span>
            <span className="font-syne text-base font-700 tracking-tight text-white group-hover:text-brand-muted transition-colors duration-200">
              Startups Blueprint
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul
            className="hidden items-center gap-8 md:flex"
            role="list"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative font-raleway text-sm font-500 text-brand-muted/80 transition-colors duration-200 hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="luma.com/w0wb5r1q"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 font-raleway text-sm font-600 text-white transition-all duration-200 hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(1,71,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
          >
            Apply Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggle}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 hover:bg-white/15 hover:border-white/20 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? 'translate-y-[5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? '-translate-y-[9px] -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={close}
              aria-hidden="true"
              className="nav-overlay open fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer — slides in from the right */}
            <motion.div
              key="mobile-menu"
              id="mobile-menu"
              role="dialog"
              aria-label="Mobile navigation"
              aria-modal="true"
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 bottom-0 z-50 flex w-[min(320px,90vw)] flex-col bg-brand-dark border-l border-white/10 shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <span className="font-syne text-sm font-700 text-white">
                  Navigation
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={close}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-brand-muted hover:text-white hover:border-brand-blue transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-1 flex-col gap-1 px-4 py-6" role="list">
                {NAV_LINKS.map((link, i) => (
                  <motion.li key={link.href} variants={linkVariants} custom={i}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="flex items-center gap-3 rounded-xl px-4 py-3.5 font-raleway text-base font-500 text-brand-muted/80 transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <motion.div
                variants={linkVariants}
                className="border-t border-white/10 px-6 py-6"
              >
                <Link
                  href="luma.com/w0wb5r1q"
                  onClick={close}
                  className="flex w-full items-center justify-center rounded-full bg-brand-blue py-3.5 font-raleway text-sm font-600 text-white transition-all duration-200 hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(1,71,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Apply Now
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}