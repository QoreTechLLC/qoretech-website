'use client'

const companies = [
  'Notion', 'Vercel', 'Linear', 'Stripe', 'Figma',
  'Supabase', 'PlanetScale', 'Railway', 'Resend', 'Clerk',
]

export default function LogoMarquee() {
  const doubled = [...companies, ...companies]

  return (
    <div className="relative py-10 border-y border-white/[0.05] overflow-hidden">
      <p className="text-center text-xs font-medium tracking-widest uppercase text-neutral-500 mb-8">
        Trusted by founders building on
      </p>
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm font-medium tracking-wide select-none"
          >
            {name}
          </span>
        ))}
      </div>
      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-950 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-950 to-transparent pointer-events-none" />
    </div>
  )
}
