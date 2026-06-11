import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'neon' | 'frost' | 'neutral' | 'success'
  className?: string
}

export default function Badge({ children, variant = 'neon', className }: BadgeProps) {
  const variants = {
    neon:    'bg-neon-500/10 text-neon-500 border-neon-500/20',
    frost:   'bg-frost-100/8 text-frost-200 border-frost-200/15',
    neutral: 'bg-white/5 text-frost-300 border-white/10',
    success: 'bg-neon-500/10 text-neon-400 border-neon-500/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
