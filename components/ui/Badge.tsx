import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'sky' | 'ember' | 'neutral' | 'success'
  className?: string
}

export default function Badge({ children, variant = 'sky', className }: BadgeProps) {
  const variants = {
    sky: 'bg-sky-electric/10 text-sky-electric border-sky-electric/20',
    ember: 'bg-ember-500/10 text-ember-400 border-ember-500/20',
    neutral: 'bg-white/5 text-neutral-200 border-white/10',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
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
