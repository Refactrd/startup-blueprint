'use client'

import Image from 'next/image'

// ─── Logo config ───────────────────────────────────────────────────────────
// logoHeight controls the rendered CSS height per logo.
// All others: h-14 (56px). Refactrd: h-20 (80px) so it stands out boldly.

const LOGOS: {
  name: string
  src: string
  intrinsicW: number
  intrinsicH: number
  logoHeight: string
}[] = [
  {
    name: 'Refactrd',
    src: '/images/new-refactrd.png',
    intrinsicW: 300,
    intrinsicH: 80,
    logoHeight: 'h-40', // 80px — biggest, boldest
  },
  {
    name: 'LoyalPartners',
    src: '/images/loyalpartners-logo.png',
    intrinsicW: 300,
    intrinsicH: 80,
    logoHeight: 'h-40', // 56px
  },
  // {
  //   name: 'CCHub',
  //   src: '/images/cchub-logo.png',
  //   intrinsicW: 200,
  //   intrinsicH: 60,
  //   logoHeight: 'h-14',
  // },
  {
    name: 'EventHub',
    src: '/images/eventhub-second-logo.png',
    intrinsicW: 100,
    intrinsicH: 40,
    logoHeight: 'h-10',
  },
]

// 4× repeat for a seamless infinite loop
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS]

// ─── Component ─────────────────────────────────────────────────────────────

export default function LogoStrip() {
  return (
    <section
      aria-label="Proudly supported by"
      className="w-full overflow-hidden border-y border-black/8 bg-[#F5F0E8] lg:py-5 py-0"
    >
      <p className="sr-only">
        Proudly supported by: Refactrd, LoyalPartners, EventHub
      </p>

      {/* Edge fade */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">

        {/* Track A */}
        <ul
          className="animate-marquee flex shrink-0 items-center gap-20 pr-20"
          role="list"
          aria-label="Partner logos"
        >
          {TRACK.map((logo, i) => (
            <li
              key={`a-${logo.name}-${i}`}
              className="flex shrink-0 items-center"
              aria-hidden={i >= LOGOS.length}
            >
              <Image
                src={logo.src}
                alt={i < LOGOS.length ? `${logo.name} logo` : ''}
                width={logo.intrinsicW}
                height={logo.intrinsicH}
                className={`${logo.logoHeight} w-auto object-contain`}
                loading="eager"
                unoptimized
              />
            </li>
          ))}
        </ul>

        {/* Track B — aria-hidden duplicate */}
        <ul
          className="animate-marquee flex shrink-0 items-center gap-20 pr-20"
          aria-hidden="true"
          role="presentation"
        >
          {TRACK.map((logo, i) => (
            <li key={`b-${logo.name}-${i}`} className="flex shrink-0 items-center">
              <Image
                src={logo.src}
                alt=""
                width={logo.intrinsicW}
                height={logo.intrinsicH}
                className={`${logo.logoHeight} w-auto object-contain`}
                loading="eager"
                unoptimized
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}