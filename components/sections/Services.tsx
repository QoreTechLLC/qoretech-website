'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  Globe, Layers, Brain, Server, Zap, Lightbulb,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import GlowOrb from '@/components/ui/GlowOrb'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Pixel-perfect, performant websites and web apps built with Next.js, React, and modern tooling. From marketing sites to complex SPAs.',
    accent: 'sky',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    icon: Layers,
    title: 'SaaS Platforms',
    description:
      'End-to-end SaaS product development — auth, billing, dashboards, APIs, and everything in between. Launch your product in weeks, not months.',
    accent: 'ember',
    tags: ['Stripe', 'Auth', 'Postgres'],
  },
  {
    icon: Brain,
    title: 'AI Integrations',
    description:
      'Embed intelligence directly into your product. We integrate LLMs, RAG pipelines, embeddings, and custom AI workflows with production-grade reliability.',
    accent: 'sky',
    tags: ['OpenAI', 'Langchain', 'Vectors'],
  },
  {
    icon: Server,
    title: 'Hosting & Deployment',
    description:
      'Zero-downtime deployments, CDN configuration, CI/CD pipelines, and infrastructure that scales automatically with your traffic.',
    accent: 'ember',
    tags: ['Vercel', 'Docker', 'AWS'],
  },
  {
    icon: Zap,
    title: 'Automation Systems',
    description:
      'Eliminate repetitive work with intelligent automation. We build custom workflows, API connectors, and internal tools that save your team hours every week.',
    accent: 'sky',
    tags: ['n8n', 'Zapier', 'Custom APIs'],
  },
  {
    icon: Lightbulb,
    title: 'Startup Consulting',
    description:
      'Technical co-founder energy without the equity. Architecture reviews, tech stack decisions, MVP scoping, and hands-on guidance for early-stage teams.',
    accent: 'ember',
    tags: ['Strategy', 'MVP', 'Architecture'],
  },
]

const accentMap = {
  sky: {
    icon: 'text-sky-electric bg-sky-electric/10',
    border: 'hover:border-sky-electric/25',
    tag: 'bg-sky-electric/10 text-sky-electric/80',
    glow: 'group-hover:shadow-glow-sky',
  },
  ember: {
    icon: 'text-ember-400 bg-ember-500/10',
    border: 'hover:border-ember-500/25',
    tag: 'bg-ember-500/10 text-ember-400/80',
    glow: 'group-hover:shadow-glow-ember',
  },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <GlowOrb color="sky" size="lg" className="-top-20 left-1/2 -translate-x-1/2 opacity-[0.07]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="What we build"
            title={<>Everything your startup<br /><span className="text-gradient">needs to ship.</span></>}
            description="From initial concept to scaled infrastructure — we handle the full technical stack so you can focus on growth."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const a = accentMap[s.accent as keyof typeof accentMap]
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              >
                <div
                  className={`group relative glass rounded-2xl p-6 border border-white/[0.06] ${a.border} ${a.glow} transition-all duration-300 h-full flex flex-col`}
                >
                  {/* top gradient line on hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                  <div className={`inline-flex p-2.5 rounded-xl mb-5 ${a.icon} w-fit`}>
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-base font-semibold text-neutral-50 mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed flex-1">{s.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {s.tags.map((tag) => (
                      <span key={tag} className={`text-2xs px-2 py-1 rounded-md font-medium ${a.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
