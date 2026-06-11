'use client'
import { cn } from '@/lib/utils'

interface GlowOrbProps {
  className?: string
  color?: 'neon' | 'frost' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function GlowOrb({ className, color = 'neon', size = 'md' }: GlowOrbProps) {
  const colors = {
    neon:  'bg-neon-500',
    frost: 'bg-frost-200',
    dark:  'bg-navy-700',
  }
  const sizes = {
    sm:  'w-32 h-32 blur-[64px]',
    md:  'w-64 h-64 blur-[96px]',
    lg:  'w-[500px] h-[500px] blur-[128px]',
    xl:  'w-[800px] h-[800px] blur-[160px]',
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute rounded-full opacity-[0.12] pointer-events-none select-none animate-pulse-slow',
        colors[color],
        sizes[size],
        className
      )}
    />
  )
}
