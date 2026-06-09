'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, DollarSign, Cpu, Users, TrendingUp, HeartHandshake } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import GlowOrb from '@/components/ui/GlowOrb'

const reasons = [
  {
    icon: DollarSign,
    title: 'Startup-friendly pricing',
    description:
      'Enterprise-caliber output without enterprise-level invoices. We price transparently, scoped to what you actually need.',
  },
  {
    icon: Clock,
    title: 'Rapid delivery',
    description:
      'Most MVPs ship in 3–6 weeks. We use battle-tested stacks and smart defaults so you don\'t wait months to validate your idea.',
  },
  {
    icon: Cpu,
    title: 'Modern, future-proof tech',
    description:
      'Every project runs on the current best-in-class stack — no legacy frameworks, no vendor lock-in, no technical debt from day one.',
  },
  {
    icon: Users,
    title: 'Personalized approach',
    description:
      'You work directly with senior engineers, not a rotating cast of junior contractors. We learn your domain and build like co-founders.',
  },
  {
    icon: TrendingUp,
    title: 'Built to scale',
    description:
      'Architecture decisions that make sense at 100 users and still make sense at 100,000. We think ahead so you can grow without rearchitecting.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-term partnership',
    description:
      'We don\'t disappear after launch. Retainer support, iterative improvements, and ongoing infra management — we stay in your corner.',
  },
]

export default function WhyQoreTech() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-32 overflow-hidden bg-navy-950/40">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <GlowOrb color="ember" size="lg" className="top-0 right-0 opacity-[0.07]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Why QoreTech"
            title={<>The technical partner<br /><span className="text-gradient-ember">founders actually want.</span></>}
            description="We combine the quality of a premium agency with the speed and pragmatism of an in-house team. Here's what that looks like in practice."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-3xl overflow-hidden border border-white/[0.06]">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group bg-navy-950 p-7 hover:bg-navy-900/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-ember-500/10 text-ember-400 group-hover:bg-ember-500/15 transition-colors">
                    <Icon className="w-4 h-4" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-100">{r.title}</h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">{r.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
