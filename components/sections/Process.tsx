'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Palette, Code2, Rocket, LifeBuoy } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description:
      'We start by deeply understanding your business, goals, and constraints. Architecture planning, tech stack selection, and scoping happen here — before a single line of code is written.',
    duration: '1–2 days',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design',
    description:
      'High-fidelity UI design, component systems, and interactive prototypes. You see exactly what we\'re building before development begins — no surprises.',
    duration: '3–5 days',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Development',
    description:
      'Engineering sprints with continuous delivery to a staging environment. Daily updates, clean code, comprehensive testing, and weekly reviews keep you informed.',
    duration: '2–5 weeks',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deployment',
    description:
      'Zero-downtime production launch with monitoring, analytics, and performance tuning in place from day one. Your infrastructure is production-ready on arrival.',
    duration: '1–2 days',
  },
  {
    icon: LifeBuoy,
    number: '05',
    title: 'Support',
    description:
      'Ongoing maintenance, feature iterations, and proactive monitoring. We stay in your corner as your product grows and evolves.',
    duration: 'Ongoing',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="How we work"
            title={<>A process built for<br /><span className="text-gradient">speed and clarity.</span></>}
            description="Five phases, zero ambiguity. You always know what's happening, what's next, and exactly when you'll launch."
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-4">
          {/* Vertical line */}
          <div
            className="absolute left-[calc(2rem-1px)] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-electric/30 via-ember-500/20 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.15 + i * 0.1 }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-16' : 'md:pl-16'} ml-16 md:ml-0`}>
                    <div className="group glass rounded-2xl border border-white/[0.06] hover:border-sky-electric/20 p-6 transition-all duration-300 hover:shadow-card-hover">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-sky-electric/60">{step.number}</span>
                        <span className="text-xs text-neutral-500 bg-white/5 px-2.5 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-neutral-50 mb-2">{step.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-[calc(2rem-1.25rem)] md:left-[calc(50%-1.25rem)] flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full glass border border-sky-electric/30 flex items-center justify-center shadow-glow-sky group">
                      <Icon className="w-4 h-4 text-sky-electric" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
