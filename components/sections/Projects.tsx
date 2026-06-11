'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, TrendingUp, Users, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import GlowOrb from '@/components/ui/GlowOrb'

const projects = [
  {
    name: 'FlowPilot', category: 'SaaS Platform', badge: 'SaaS', badgeVariant: 'neon' as const,
    tagline: 'Workflow automation for modern ops teams',
    description: 'End-to-end SaaS platform with multi-tenant auth, drag-and-drop workflow builder, real-time execution engine, and Stripe billing. Went from 0 to paying customers in 5 weeks.',
    metrics: [
      { icon: Users,       label: '1,200+ users',     color: 'text-neon-500'   },
      { icon: TrendingUp,  label: '3.2× MoM growth',  color: 'text-frost-200'  },
      { icon: Zap,         label: '< 80ms p99',        color: 'text-neon-400'   },
    ],
    tags: ['Next.js','tRPC','Postgres','Stripe'],
    visualGrad: 'from-neon-500/10 to-navy-900',
    bars: [40,55,48,70,62,85,78,92,88,100],
  },
  {
    name: 'Cortex AI', category: 'AI Integration', badge: 'AI', badgeVariant: 'frost' as const,
    tagline: 'Intelligent document analysis for legal firms',
    description: 'AI-powered contract review with RAG pipeline, semantic search, and clause-level risk analysis. Reduced manual review time by 73% across 3 enterprise law firms.',
    metrics: [
      { icon: Zap,         label: '73% time saved',    color: 'text-neon-400'   },
      { icon: TrendingUp,  label: '$2.1M ARR',         color: 'text-frost-200'  },
      { icon: Users,       label: '8 enterprise clients', color: 'text-neon-500' },
    ],
    tags: ['OpenAI','Langchain','Pinecone','Next.js'],
    visualGrad: 'from-frost-200/8 to-navy-900',
    bars: [30,45,52,68,74,80,88,82,94,98],
  },
  {
    name: 'Launchbase', category: 'Startup Platform', badge: 'Platform', badgeVariant: 'neon' as const,
    tagline: 'The everything dashboard for early-stage founders',
    description: 'All-in-one founder OS — investor CRM, cap table manager, KPI tracker, and team workspace. Built and launched in 4 weeks for a YC-backed team.',
    metrics: [
      { icon: Users,       label: '400+ founders',     color: 'text-neon-500'   },
      { icon: TrendingUp,  label: 'YC W24 company',    color: 'text-frost-200'  },
      { icon: Zap,         label: '4-week build',       color: 'text-neon-400'   },
    ],
    tags: ['Next.js','Supabase','Clerk','Tailwind'],
    visualGrad: 'from-neon-500/8 to-navy-950',
    bars: [60,55,72,68,80,76,90,88,95,100],
  },
]

export default function Projects() {
  const ref    = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <GlowOrb color="neon" size="lg" className="bottom-0 left-0 opacity-[0.06]" />
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:24 }} animate={inView ? {opacity:1,y:0} : {}} transition={{ duration:0.7 }}>
          <SectionHeading
            eyebrow="Selected work"
            title={<>Products we've shipped<br /><span className="text-gradient">that are live and growing.</span></>}
            description="Real startups, real results. Here's a sample of what we've built and the outcomes it drove."
          />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div key={project.name} initial={{ opacity:0, y:32 }} animate={inView ? {opacity:1,y:0} : {}} transition={{ duration:0.65, delay:0.1+i*0.12 }}>
              <div className="group glass rounded-3xl border border-white/[0.05] hover:border-neon-500/18 overflow-hidden transition-all duration-300 hover:shadow-card-hover">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Badge variant={project.badgeVariant}>{project.badge}</Badge>
                        <span className="text-xs text-frost-600">{project.category}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-frost-50 mb-2">{project.name}</h3>
                      <p className="text-sm text-neon-500/70 font-medium mb-4">{project.tagline}</p>
                      <p className="text-sm text-frost-500 leading-relaxed max-w-lg">{project.description}</p>
                    </div>
                    <div className="mt-8">
                      <div className="flex flex-wrap gap-5 mb-6">
                        {project.metrics.map((m) => {
                          const Icon = m.icon
                          return (
                            <div key={m.label} className="flex items-center gap-2">
                              <Icon className={`w-3.5 h-3.5 ${m.color}`} />
                              <span className="text-xs text-frost-300">{m.label}</span>
                            </div>
                          )
                        })}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-frost-500">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-2 bg-gradient-to-br ${project.visualGrad} p-6 flex flex-col justify-between min-h-[240px]`}>
                    <div className="glass rounded-xl border border-neon-500/[0.08] p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-frost-200">{project.name}</span>
                        <span className="w-2 h-2 rounded-full bg-neon-500 animate-pulse" />
                      </div>
                      <div className="flex items-end gap-1 h-14">
                        {project.bars.map((h, bi) => (
                          <motion.div
                            key={bi}
                            initial={{ height: 0 }}
                            animate={inView ? { height: `${h}%` } : {}}
                            transition={{ duration:0.5, delay:0.4+i*0.12+bi*0.04 }}
                            className="flex-1 rounded-sm"
                            style={{ background: bi === project.bars.length-1 ? 'linear-gradient(to top,#00D97E,#4DFFA8)' : 'rgba(0,217,126,0.2)' }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {project.metrics.slice(0,2).map((m) => {
                        const Icon = m.icon
                        return (
                          <div key={m.label} className="glass rounded-lg p-3 border border-neon-500/[0.07]">
                            <Icon className={`w-3.5 h-3.5 ${m.color} mb-1.5`} />
                            <p className="text-xs text-frost-300 leading-tight">{m.label}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0 }} animate={inView ? {opacity:1} : {}} transition={{ duration:0.6, delay:0.6 }} className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 text-sm text-frost-500 hover:text-neon-500 transition-colors group">
            View all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
