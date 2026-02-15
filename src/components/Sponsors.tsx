import { useState } from 'react'
import { SponsorDialog } from './SponsorDialog'

interface Sponsor {
  title: string
  tier: string
  logo: string
}

const sponsors: Sponsor[] = [
  {
    title: 'RED FM',
    tier: 'Title Sponsor',
    logo: '/images/red fm.png',
  },
  {
    title: 'ICICI BANK',
    tier: 'Co-Sponsor',
    logo: '/images/icici.png',
  },
  {
    title: 'IITians GATE CLASSES',
    tier: 'Event Sponsor',
    logo: '/images/iitgate1.png',
  },
  {
    title: 'PATHAK ENTERPRISE',
    tier: 'Event Sponsor',
    logo: '/images/pathak enterprises.png',
  },
  {
    title: 'EDUQUIS TECHNOLOGY',
    tier: 'Event Sponsor',
    logo: '/images/eduquis.png',
  },
  {
    title: 'Dare 2 Compete',
    tier: 'Event Sponsor',
    logo: '/images/dare to compete.jpeg',
  },
]

// Split into two rows
const row1 = sponsors.slice(0, Math.ceil(sponsors.length / 2))
const row2 = sponsors.slice(Math.ceil(sponsors.length / 2))

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const tierColor =
    sponsor.tier === 'Title Sponsor'
      ? 'from-amber-400 to-yellow-600'
      : sponsor.tier === 'Co-Sponsor'
        ? 'from-violet-400 to-purple-600'
        : 'from-cyan-400 to-blue-600'

  return (
    <div className="group relative flex-shrink-0 w-[260px] mx-4">
      {/* Glow */}
      <div
        className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-r ${tierColor} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`}
      />

      <div
        className="relative flex flex-col items-center gap-4 rounded-2xl p-6
                    bg-white/[0.04] backdrop-blur-md border border-white/10
                    hover:border-white/25 hover:bg-white/[0.08]
                    transition-all duration-500 hover:scale-[1.05]"
      >
        {/* Logo */}
        <div className="w-20 h-20 rounded-full bg-white/10 p-2 flex items-center justify-center overflow-hidden ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-500">
          <img
            src={sponsor.logo}
            alt={`${sponsor.title} logo`}
            className="w-full h-full object-contain rounded-full"
          />
        </div>

        {/* Info */}
        <div className="text-center space-y-2">
          <h3 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">
            {sponsor.title}
          </h3>
          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${tierColor} text-white/90`}
          >
            {sponsor.tier}
          </span>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({
  items,
  direction = 'left',
  speed = 30,
}: {
  items: Sponsor[]
  direction?: 'left' | 'right'
  speed?: number
}) {
  // Duplicate the list enough times to fill the viewport
  const duplicated = [...items, ...items, ...items, ...items]

  const animName = direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right'
  const fromX = direction === 'left' ? '0%' : '-50%'
  const toX = direction === 'left' ? '-50%' : '0%'

  return (
    <div className="relative overflow-hidden py-4 group/marquee">
      <style>{`
        @keyframes ${animName} {
          0%   { transform: translateX(${fromX}); }
          100% { transform: translateX(${toX}); }
        }
      `}</style>

      {/* Fade masks on both edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />

      <div
        className="flex w-max"
        style={{
          animation: `${animName} ${speed}s linear infinite`,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused' }}
        onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running' }}
      >
        {duplicated.map((sponsor, i) => (
          <SponsorCard key={`${sponsor.title}-${i}`} sponsor={sponsor} />
        ))}
      </div>
    </div>
  )
}

export function Sponsors() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="relative py-20 md:py-28 overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,100,220,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
              Our Past Sponsors
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proudly supported by industry leaders who share our vision
          </p>
        </div>

        {/* Marquee rows */}
        <div className="space-y-6">
          <MarqueeRow items={row1} direction="left" speed={25} />
          <MarqueeRow items={row2} direction="right" speed={30} />
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full
                       bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg
                       shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40
                       hover:scale-105 active:scale-100 transition-all duration-300"
          >
            <span className="relative z-10">Become a Sponsor</span>
            <svg
              className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Button glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
          </button>
        </div>
      </div>

      <SponsorDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  )
}
