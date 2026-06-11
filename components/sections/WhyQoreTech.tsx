'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, DollarSign, Cpu, Users, TrendingUp, HeartHandshake } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import GlowOrb from '@/components/ui/GlowOrb'

const reasons = [
  { icon: DollarSign,      title: 'Startup-friendly pricing',   description: 'Enterprise-caliber output without enterprise-level invoices. We price transparently, scoped to what you actually need.' },
  { icon: Clock,           title: 'Rapid delivery',             description: "Most MVPs ship in 3–6 weeks. We use battle-tested stacks and smart defaults so you don't wait months to validate your idea." },
  { icon: Cpu,             title: 'Modern, future-proof tech',  description: 'No legacy frameworks, no vendor lock-in, no technical debt from day one. Every project runs on current best-in-class stack.' },
  { icon: Users,           title: 'Personalized approach',      description: 'You work directly with senior engineers. We learn your domain and build like co-founders — not a rotating cast of contractors.' },
  { icon: TrendingUp,      title: 'Built to scale',             description: 'Architecture decisions that make sense at 100 users and still work at 100,000. We think ahead so you never need to rearchitect.' },
  { icon: HeartHandshake,  title: 'Long-term partnership',      description: "We don't disappear after launch. Retainer support, iterative improvements, and ongoing monitoring — we stay in your corner." },
]

export default function WhyQoreTech() {
  const ref    = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <GlowOrb color="neon" size="lg" className="top-0 right-0 opacity-[0.06]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:24 }} animate={inView ? {opacity:1,y:0} : {}} transition={{ duration:0.7 }}>
          <SectionHeading
            eyebrow="Why QoreTech"
            title={<>The technical partner<br /><span className="text-gradient-neon">founders actually want.</span></>}
            description="We combine the quality of a premium agency with the speed of an in-house team. Here's what that looks like in practice."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neon-500/[0.05] rounded-3xl overflow-hidden border border-neon-500/[0.07]">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity:0 }} animate={inView ? {opacity:1} : {}}
                transition={{ duration:0.5, delay:0.1+i*0.08 }}
                className="group bg-navy-950 p-7 hover:bg-navy-900/80 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-neon-500/8 text-neon-500 group-hover:bg-neon-500/14 transition-colors">
                    <Icon className="w-4 h-4" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-semibold text-frost-100">{r.title}</h3>
                </div>
                <p className="text-sm text-frost-500 leading-relaxed">{r.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
