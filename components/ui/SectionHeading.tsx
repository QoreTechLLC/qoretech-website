import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow, title, description, align = 'center', className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-16', align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-neon-500/60 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-frost-50 leading-tight">
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-5 text-base md:text-lg text-frost-400 leading-relaxed',
          align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
