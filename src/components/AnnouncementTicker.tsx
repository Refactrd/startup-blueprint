'use client'

import Link from 'next/link'

const MESSAGE = 'Read the Case Study Report from our last event'
const REPEAT = 6

function resolveHref(href: string) {
  if (href === '#' || href.startsWith('http://') || href.startsWith('https://')) return href
  return `https://${href}`
}

export default function AnnouncementTicker({ href }: { href: string }) {
  return (
    <div className="fixed left-0 right-0 z-40 overflow-hidden bg-[#F5C842] border-b border-black/10" style={{ top: '64px' }}>
      <Link
        href={resolveHref(href)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read the Case study report"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
      >
        <div className="ticker-track flex items-center whitespace-nowrap py-2.5">
          {Array.from({ length: REPEAT }).map((_, i) => (
            <span key={i} className="flex items-center gap-3 px-10">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40 shrink-0" />
              <span className="font-raleway text-[11px] font-600 uppercase tracking-widest text-black/80">
                {MESSAGE}
              </span>
            </span>
          ))}
        </div>
      </Link>
    </div>
  )
}
