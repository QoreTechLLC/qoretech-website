'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const testimonials = [
  {
    quote:
      "QoreTech shipped our entire SaaS MVP in under 5 weeks — authentication, billing, dashboard, the works. The code quality was so clean that onboarding our own engineers afterward was seamless. Worth every penny and more.",
    name: 'Marcus Reid',
    role: 'Founder & CEO',
    company: 'FlowPilot',
    avatar: 'MR',
    highlight: '5 weeks to full MVP',
  },
  {
    quote:
      "We'd been burned by agencies before — slow delivery, mediocre code, constant scope creep. QoreTech was completely different. Direct communication, fast iteration, and they actually understood our technical requirements without us having to explain twice.",
    name: 'Priya Sharma',
    role: 'CTO',
    company: 'Cortex AI',
    avatar: 'PS',
    highlight: 'Technical expertise',
  },
  {
    quote:
      "As a non-technical founder, I was nervous about finding the right development partner. QoreTech handled everything — architecture, design, deployment — and kept me informed at every step. They felt like co-founders, not contractors.",
    name: 'Jordan Calloway',
    role: 'Founder',
    company: 'Launchbase',
    avatar: 'JC',
    highlight: 'Co-founder energy',
  },
]

const avatarColors = [
  'from-sky-electric/40 to-navy-700',
  'from-ember-500/40 to-navy-700',
  'from-violet-500/40 to-navy-700',
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-32 overflow-hidden bg-navy-950/60">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Client stories"
            title={<>Founders who shipped<br /><span className="text-gradient">faster with us.</span></>}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group glass rounded-2xl border border-white/[0.06] hover:border-sky-electric/20 p-6 transition-all duration-300 hover:shadow-card-hover flex flex-col"
            >
              <Quote className="w-5 h-5 text-sky-electric/40 mb-5 shrink-0" />

              {/* Highlight pill */}
              <span className="inline-flex self-start text-xs font-medium px-2.5 py-1 rounded-full bg-sky-electric/10 text-sky-electric/80 border border-sky-electric/15 mb-4">
                {t.highlight}
              </span>

              <p className="text-sm text-neutral-300 leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center shrink-0`}>
                  <span className="text-xs font-semibold text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-100">{t.name}</p>
                  <p className="text-xs text-neutral-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
