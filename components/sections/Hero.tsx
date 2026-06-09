'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, Shield, Layers } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import GlowOrb from '@/components/ui/GlowOrb'

const floatingCards = [
  {
    icon: <Zap className="w-4 h-4 text-sky-electric" />,
    label: 'Deploy complete',
    sublabel: 'Production · 1.2s',
    color: 'text-emerald-400',
    dot: 'bg-emerald-400',
  },
  {
    icon: <Shield className="w-4 h-4 text-ember-400" />,
    label: 'AI Integration',
    sublabel: 'OpenAI · Active',
    color: 'text-sky-electric',
    dot: 'bg-sky-electric',
  },
  {
    icon: <Layers className="w-4 h-4 text-sky-electric" />,
    label: 'Infra scaled',
    sublabel: '99.99% uptime',
    color: 'text-violet-400',
    dot: 'bg-violet-400',
  },
]

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
  },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-24 grid-bg noise"
      aria-label="Hero"
    >
      {/* ── Background glows ───────────────────────── */}
      <GlowOrb color="sky" size="xl" className="-top-40 -left-40 opacity-[0.12]" />
      <GlowOrb color="ember" size="lg" className="top-1/3 -right-32 opacity-[0.10]" />
      <GlowOrb color="sky" size="md" className="bottom-20 left-1/4 opacity-[0.08]" />

      {/* ── Radial vignette ─────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-navy-950/80 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* ── Eyebrow badge ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="sky" className="mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-electric animate-pulse" />
            Premium tech solutions for modern startups
          </Badge>
        </motion.div>

        {/* ── Main headline ───────────────────────────── */}
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="space-y-2 mb-8"
        >
          <motion.h1
            variants={stagger.item}
            className="text-[clamp(2.6rem,6vw,5rem)] font-semibold tracking-tight leading-[1.04] text-neutral-50"
          >
            Scalable technology
          </motion.h1>
          <motion.h1
            variants={stagger.item}
            className="text-[clamp(2.6rem,6vw,5rem)] font-semibold tracking-tight leading-[1.04] text-gradient"
          >
            for modern businesses.
          </motion.h1>
        </motion.div>

        {/* ── Subheadline ─────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-xl text-lg md:text-xl text-neutral-300 leading-relaxed mb-12"
        >
          We build world-class web apps, SaaS platforms, and AI-powered systems — faster and more affordably than you'd expect.
        </motion.p>

        {/* ── CTAs ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <Button
            variant="primary"
            size="lg"
            className="group"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View our work
          </Button>
        </motion.div>

        {/* ── Dashboard mockup ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full max-w-4xl"
        >
          {/* Main card */}
          <div className="relative glass rounded-3xl border border-white/[0.07] p-1 shadow-[0_32px_96px_rgba(0,0,0,0.5)]">
            {/* Toolbar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-600" />
                <div className="w-3 h-3 rounded-full bg-neutral-600" />
                <div className="w-3 h-3 rounded-full bg-neutral-600" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-white/5 border border-white/[0.08] text-2xs text-neutral-400 font-mono">
                  app.qoretech.io — dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Uptime', value: '99.99%', color: 'text-emerald-400' },
                  { label: 'Deployments', value: '347', color: 'text-sky-electric' },
                  { label: 'AI Requests', value: '1.2M', color: 'text-ember-400' },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4 text-center">
                    <p className={`text-xl font-semibold ${stat.color}`}>{stat.value}</p>
                    <p className="text-2xs text-neutral-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Fake chart bars */}
              <div className="glass rounded-xl p-4">
                <div className="flex justify-between items-end h-20 gap-1.5">
                  {[45, 62, 38, 80, 55, 90, 72, 58, 88, 65, 78, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.6, delay: 1 + i * 0.05, ease: 'easeOut' }}
                      className="flex-1 rounded-sm"
                      style={{
                        background: i === 11
                          ? 'linear-gradient(to top, #DC5326, #f08965)'
                          : 'linear-gradient(to top, rgba(110,193,228,0.4), rgba(110,193,228,0.15))',
                      }}
                    />
                  ))}
                </div>
                <p className="text-2xs text-neutral-500 mt-3">Request volume — last 12 months</p>
              </div>
            </div>
          </div>

          {/* Floating status cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 + i * 0.15 }}
              className={`absolute glass rounded-xl border border-white/[0.08] px-3 py-2.5 flex items-center gap-2.5 shadow-card animate-float${i === 1 ? '-slow' : ''}`}
              style={{
                top: i === 0 ? '12%' : i === 1 ? '50%' : '75%',
                right: i % 2 === 0 ? '-5%' : undefined,
                left: i % 2 !== 0 ? '-5%' : undefined,
              }}
            >
              <div className={`p-1.5 rounded-lg bg-white/5`}>{card.icon}</div>
              <div>
                <p className="text-xs font-medium text-neutral-100 leading-none">{card.label}</p>
                <p className={`text-2xs mt-0.5 ${card.color}`}>{card.sublabel}</p>
              </div>
              <div className={`w-1.5 h-1.5 rounded-full ml-1 ${card.dot} animate-pulse`} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Social proof ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-white/[0.06] w-full"
        >
          {[
            { value: '50+', label: 'Projects delivered' },
            { value: '98%', label: 'Client satisfaction' },
            { value: '< 4wk', label: 'Avg. launch time' },
            { value: '24/7', label: 'Monitoring & support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-semibold text-neutral-50">{stat.value}</p>
              <p className="text-sm text-neutral-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
