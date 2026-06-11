'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process'  },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech',     href: '#tech'     },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-navy-950/85 backdrop-blur-xl border-b border-neon-500/[0.07] shadow-[0_1px_0_rgba(0,217,126,0.06)]'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} aria-label="QoreTech home">
            <Logo size="md" />
          </a>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {links.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => go(l.href)}
                  className="px-4 py-2 text-sm text-frost-400 hover:text-frost-100 rounded-lg hover:bg-white/5 transition-all duration-150"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => go('#contact')}>Log in</Button>
            <Button variant="primary" size="sm" onClick={() => go('#contact')} className="group">
              Get started
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 text-frost-400 hover:text-frost-100 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden glass-dark border-b border-neon-500/[0.07] px-6 py-6"
          >
            <ul className="space-y-1 mb-6" role="list">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => go(l.href)}
                    className="w-full text-left px-4 py-3 text-sm text-frost-300 hover:text-frost-50 rounded-lg hover:bg-white/5 transition-all"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <Button variant="primary" size="md" className="w-full" onClick={() => go('#contact')}>
              Get started
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
