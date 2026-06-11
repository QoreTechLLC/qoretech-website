'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const testimonials = [
  { quote: "QoreTech shipped our entire SaaS MVP in under 5 weeks — authentication, billing, dashboard, the works. The code quality was so clean that onboarding our own engineers afterward was seamless. Worth every penny and more.", name: 'Marcus Reid',     role: 'Founder & CEO', company: 'FlowPilot',  avatar: 'MR', highlight: '5 weeks to full MVP',   avatarGrad: 'from-neon-500/40 to-navy-800' },
  { quote: "We'd been burned by agencies before — slow delivery, mediocre code, constant scope creep. QoreTech was completely different. Direct communication, fast iteration, and they actually understood our technical requirements without us having to explain twice.", name: 'Priya Sharma',   role: 'CTO',           company: 'Cortex AI',  avatar: 'PS', highlight: 'Technical expertise', avatarGrad: 'from-frost-200/30 to-navy-800' },
  { quote: "As a non-technical founder, I was nervous about finding the right development partner. QoreTech handled everything and kept me informed at every step. They felt like co-founders, not contractors.", name: 'Jordan Calloway', role: 'Founder',       company: 'Launchbase', avatar: 'JC', highlight: 'Co-founder energy',  avatarGrad: 'from-neon-300/30 to-navy-800' },
]

export default function Testimonials() {
  const ref    = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:24 }} animate={inView ? {opacity:1,y:0} : {}} transition={{ duration:0.7 }}>
          <SectionHeading
            eyebrow="Client stories"
            title={<>Founders who shipped<br /><span className="text-gradient">faster with us.</span></>}
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity:0, y:32 }} animate={inView ? {opacity:1,y:0} : {}} transition={{ duration:0.6, delay:0.1+i*0.1 }}
              className="group glass rounded-2xl border border-white/[0.05] hover:border-neon-500/18 p-6 transition-all duration-300 hover:shadow-card-hover flex flex-col"
            >
              <Quote className="w-5 h-5 text-neon-500/30 mb-5 shrink-0" />
              <span className="inline-flex self-start text-xs font-medium px-2.5 py-1 rounded-full bg-neon-500/8 text-neon-500/70 border border-neon-500/14 mb-4">
                {t.highlight}
              </span>
              <p className="text-sm text-frost-400 leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarGrad} flex items-center justify-center shrink-0`}>
                  <span className="text-xs font-semibold text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-frost-100">{t.name}</p>
                  <p className="text-xs text-frost-600">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
