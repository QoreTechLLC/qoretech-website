'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
  delay?: number
}

export default function Section({
  id,
  children,
  className,
  innerClassName,
  delay = 0,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id={id}
      ref={ref}
      className={cn('relative py-24 md:py-32', className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }}
        className={cn('max-w-7xl mx-auto px-6 lg:px-8', innerClassName)}
      >
        {children}
      </motion.div>
    </section>
  )
}
